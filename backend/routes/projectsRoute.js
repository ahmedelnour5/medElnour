import getProjects from "../controllers/projectsController.js";
import express from "express";

const router = express.Router();

router.get("/", getProjects);

export default router;
