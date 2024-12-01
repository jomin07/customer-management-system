import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import customerRoute from "./routes/userRoute.js";
import cors from "cors";

dotenv.config();

connectDB();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
  })
);

app.use("/api/customers", customerRoute);

app.listen(PORT, () => {
  console.log("Server started");
});
