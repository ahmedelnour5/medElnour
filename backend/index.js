import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import experiencesRoute from "./routes/experiencesRoute.js";
import projectsRoute from "./routes/projectsRoute.js";
import skillsRoute from "./routes/skillsRoute.js";
dotenv.config({ path: "../.env" });

const port = 8080;
connectDB();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/skills", skillsRoute);
app.use("/api/projects", projectsRoute);
app.use("/api/experience", experiencesRoute);

app.listen(port, () => console.log(`Server started on port ${port}`));
