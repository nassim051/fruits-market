import "reflect-metadata";
import app from "./app";
import { initializeDatabase } from "./database/data-source";

async function startServer() {
  try {
    await initializeDatabase();

    // Handle graceful shutdown
    process.on("SIGINT", async () => {
      console.log("Shutting down...");
      process.exit(0);
    });

    process.on("SIGTERM", async () => {
      console.log("Shutting down...");
      process.exit(0);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
}

startServer();

export default {
  port: process.env.PORT,
  fetch: app.fetch,
};
