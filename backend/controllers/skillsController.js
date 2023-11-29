import asyncHandler from "express-async-handler";
import Skills from "../Models/skillsModel.js";

const getSkills = asyncHandler(async (req, res) => {
  const skills = await Skills.find();
  if (skills) {
    res.json(skills);
  }
});

export default getSkills;
