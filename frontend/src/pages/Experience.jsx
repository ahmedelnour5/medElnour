import React, { useEffect, useState } from "react";
import ExperienceContainer from "../components/ExperienceContainer.jsx";
import axios from "axios";

const Experience = () => {
  const [experiences, setExperiences] = useState();
  useEffect(() => {
    const getExperiences = async () => {
      const response = await axios.get("/api/Experience");
      if (response) {
        setExperiences(response.data);
      }
    };
    getExperiences();
  }, []);
  return (
    <div className="container mx-auto min-h-screen mt-4 pt-2">
      <div className="space-y-7 flex flex-col justify-center items-center">
        {experiences && experiences !== null
          ? experiences.map((experience) => (
              <ExperienceContainer
                key={experience._id}
                experience={experience}
              />
            ))
          : null}
      </div>
    </div>
  );
};

export default Experience;
