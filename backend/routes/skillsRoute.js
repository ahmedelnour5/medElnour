import getSkills from "../controllers/skillsController.js";
import express from "express";

const router = express.Router();

router.get("/", getSkills);

export default router;
