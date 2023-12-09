import React, { useState, useEffect } from "react";
import axios from "axios";
import SkillsCard from "../components/SkillsCard.jsx";

const Skills = () => {
  const [skills, setSkills] = useState();
  useEffect(() => {
    const getSkills = async () => {
      const response = await axios.get("/api/Skills");
      if (response) {
        setSkills(response.data);
      }
    };
    getSkills();
  }, []);

  return (
    <div className="flex flex-col min-h-screen justify-center items-center ">
      <div className="space-y-7 flex flex-col justify-center items-center px-3 md:px-0">
        {skills && skills !== null
          ? skills.map((skill) => <SkillsCard skills={skill} key={skill._id} />)
          : null}
      </div>
    </div>
  );
};

export default Skills;
