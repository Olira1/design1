import { Router } from "express";
import { sendRegistrationToTelegram } from "../services/telegram.js";

const router = Router();

const REQUIRED_FIELDS = [
  "fullName",
  "phone",
  "email",
  "gender",
  "age",
  "city",
  "course",
  "level",
  "schedule",
];

const ALLOWED_GENDERS = ["Female", "Male", "Prefer not to say"];
const ALLOWED_LEVELS = ["Beginner", "Intermediate", "Advanced"];
const ALLOWED_SCHEDULES = ["Morning", "Afternoon", "Weekend"];

function normalizePhone(value) {
  return String(value || "")
    .replace(/[\s()-]/g, "")
    .trim();
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value || "").trim());
}

function isValidPhone(value) {
  return /^\+?[0-9]{8,15}$/.test(value);
}

function pushError(errors, field, message) {
  errors.push({ field, message });
}

function validateRegistrationPayload(payload) {
  const errors = [];
  const data = payload && typeof payload === "object" ? payload : {};

  for (const field of REQUIRED_FIELDS) {
    const value = String(data[field] || "").trim();
    if (!value) {
      pushError(errors, field, `${field} is required`);
    }
  }

  const normalizedPhone = normalizePhone(data.phone);
  const email = String(data.email || "").trim();
  const age = Number(data.age);

  if (email && !isValidEmail(email)) {
    pushError(errors, "email", "email must be a valid email address");
  }

  if (normalizedPhone && !isValidPhone(normalizedPhone)) {
    pushError(errors, "phone", "phone must be 8-15 digits with optional +");
  }

  if (!Number.isFinite(age) || age < 10 || age > 100) {
    pushError(errors, "age", "age must be between 10 and 100");
  }

  if (data.gender && !ALLOWED_GENDERS.includes(data.gender)) {
    pushError(errors, "gender", "gender value is not allowed");
  }

  if (data.level && !ALLOWED_LEVELS.includes(data.level)) {
    pushError(errors, "level", "level value is not allowed");
  }

  if (data.schedule && !ALLOWED_SCHEDULES.includes(data.schedule)) {
    pushError(errors, "schedule", "schedule value is not allowed");
  }

  return {
    errors,
    sanitized: {
      fullName: String(data.fullName || "").trim(),
      phone: normalizedPhone,
      email,
      gender: String(data.gender || "").trim(),
      age,
      city: String(data.city || "").trim(),
      course: String(data.course || "").trim(),
      level: String(data.level || "").trim(),
      schedule: String(data.schedule || "").trim(),
      message: String(data.message || "").trim(),
      source: String(data.source || "").trim(),
    },
  };
}

router.post("/", async (req, res) => {
  const { errors, sanitized } = validateRegistrationPayload(req.body);

  if (errors.length > 0) {
    return res.status(400).json({
      success: false,
      message: "Validation failed",
      errors,
    });
  }

  try {
    await sendRegistrationToTelegram(sanitized);

    return res.status(200).json({
      success: true,
      message: "Registration submitted successfully",
    });
  } catch (error) {
    if (error.code === "TELEGRAM_CONFIG_MISSING") {
      return res.status(500).json({
        success: false,
        message: "Server configuration error",
      });
    }

    return res.status(502).json({
      success: false,
      message: "Failed to deliver registration notification",
    });
  }
});

export default router;
