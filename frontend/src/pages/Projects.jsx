import React, { useState, useEffect } from "react";
import axios from "axios";
import ProjectContainer from "../components/ProjectContainer";

const Projects = () => {
  const [projects, setProjects] = useState();
  useEffect(() => {
    const getProjects = async () => {
      const response = await axios.get("/api/Projects");
      if (response) {
        setProjects(response.data);
      }
    };
    getProjects();
  }, []);

  return (
    <div className="container mx-auto min-h-screen flex flex-col justify-center px-5 py-5 md:px-0">
      <div className="flex flex-col justify-center items-center space-y-5">
        {projects && projects !== null
          ? projects.map((project) => (
              <ProjectContainer project={project} key={project._id} />
            ))
          : null}
      </div>
    </div>
  );
};

export default Projects;
