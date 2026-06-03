import app from "./app.js";
import { loadEnv } from "./config/env.js";

const env = loadEnv();
const PORT = env.PORT;

app.listen(PORT, () => {
  console.log(`Backend server listening on port ${PORT}`);
});
