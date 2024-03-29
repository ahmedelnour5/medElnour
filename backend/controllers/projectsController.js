import asyncHandler from "express-async-handler";
import Project from "../models/projectModel.js";

const getProjects = asyncHandler(async (req, res) => {
  const projects = await Project.find();
  if (projects) {
    res.json(projects);
  }
});

export default getProjects;
