import asyncHandler from "express-async-handler";
import Experience from "../models/experienceModel.js";

const getExperiences = asyncHandler(async (req, res) => {
  const experiences = await Experience.find();
  if (experiences) {
    res.json(experiences);
  }
});

export default getExperiences;
