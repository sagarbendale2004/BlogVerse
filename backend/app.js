import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import "./conn/connection.js";
import blogs from "./routes/blogs.js";

dotenv.config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/v1", blogs);

// Fallback route for undefined routes
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
