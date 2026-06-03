import { loadEnv } from "../config/env.js";

const TELEGRAM_API_BASE = "https://api.telegram.org";
const REQUEST_TIMEOUT_MS = 8000;
const MAX_ATTEMPTS = 2;

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function buildRegistrationMessage(data) {
  const lines = [
    "New Registration Received",
    `Time: ${new Date().toISOString()}`,
    "",
    `Full Name: ${data.fullName}`,
    `Phone: ${data.phone}`,
    `Email: ${data.email}`,
    `Gender: ${data.gender}`,
    `Age: ${data.age}`,
    `City: ${data.city}`,
    `Course: ${data.course}`,
    `Level: ${data.level}`,
    `Schedule: ${data.schedule}`,
    `Source: ${data.source || "N/A"}`,
    `Message: ${data.message || "N/A"}`,
  ];

  return lines.join("\n");
}

function assertTelegramConfig(env) {
  if (!env.TELEGRAM_BOT_TOKEN || !env.TELEGRAM_GROUP_ID) {
    const error = new Error(
      "Telegram is not configured. Missing TELEGRAM_BOT_TOKEN or TELEGRAM_GROUP_ID.",
    );
    error.code = "TELEGRAM_CONFIG_MISSING";
    throw error;
  }
}

async function sendTelegramRequest(url, body) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      signal: controller.signal,
    });

    const result = await response.json().catch(() => ({}));

    if (!response.ok || result.ok !== true) {
      const error = new Error("Telegram API responded with an error");
      error.code = "TELEGRAM_API_ERROR";
      error.status = response.status;
      error.details = result;
      throw error;
    }
  } finally {
    clearTimeout(timeout);
  }
}

export async function sendRegistrationToTelegram(data) {
  const env = loadEnv();
  assertTelegramConfig(env);

  const url = `${TELEGRAM_API_BASE}/bot${env.TELEGRAM_BOT_TOKEN}/sendMessage`;
  const payload = {
    chat_id: env.TELEGRAM_GROUP_ID,
    text: buildRegistrationMessage(data),
    disable_web_page_preview: true,
  };

  let lastError;
  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt += 1) {
    try {
      await sendTelegramRequest(url, payload);
      return;
    } catch (error) {
      lastError = error;
      const shouldRetry =
        attempt < MAX_ATTEMPTS &&
        (error.name === "AbortError" ||
          error.code === "TELEGRAM_API_ERROR" ||
          error.status >= 500);

      if (!shouldRetry) {
        break;
      }

      await sleep(350);
    }
  }

  if (lastError?.name === "AbortError") {
    const timeoutError = new Error("Telegram request timed out");
    timeoutError.code = "TELEGRAM_TIMEOUT";
    throw timeoutError;
  }

  throw lastError;
}
