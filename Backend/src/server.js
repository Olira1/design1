import app from "./app.js";
import { loadEnv } from "./config/env.js";

const env = loadEnv();
const PORT = env.PORT;

// Express 5 calls this callback with an error when the port
// cannot be bound (e.g. already in use), so we must check it.
app.listen(PORT, (error) => {
  if (error) {
    console.error(`Failed to start server on port ${PORT}:`, error.message);
    process.exit(1);
  }

  console.log(`Backend server listening on port ${PORT}`);
});
