import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
dotenv.config({ path: "../.env" });

const port = 8080;
connectDB();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => console.log(`Server started on port ${port}`));
