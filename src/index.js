import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({ path: "./.env" });

console.log("INDEX FILE EXECUTED");

const app = express();
const PORT = process.env.PORT || 8000;

connectDB()
  .then(() => {
    console.log("MongoDB Connected Successfully!");

    app.get("/", (req, res) => {
      res.send("Server & Database are running fine!");
    });

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("MongoDB Connection Failed:", error);
  });
