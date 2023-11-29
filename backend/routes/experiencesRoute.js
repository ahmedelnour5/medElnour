import getExperiences from "../controllers/experiencesController.js";
import express from "express";

const router = express.Router();

router.get("/", getExperiences);

export default router;
