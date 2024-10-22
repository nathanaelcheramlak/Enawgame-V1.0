import dotenv from "dotenv";
import express from "express";
import authRoutes from "./routes/auth.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";

dotenv.config();
const app = express();

const PORT = process.env.PORT || 5000;

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Root Page");
});

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`The server is running on port ${PORT}`);
});
