import React from "react";
import { IconButton, Tooltip } from "@mui/material";
import { DiJavascript1 } from "react-icons/di";
import { DiPython } from "react-icons/di";
import { DiJava } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { DiNetmagazine } from "react-icons/di";
import { DiAngularSimple } from "react-icons/di";
import { DiBootstrap } from "react-icons/di";
import { SiCsharp, SiTailwindcss } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { DiMysql } from "react-icons/di";
import { DiPostgresql } from "react-icons/di";
import { DiNodejs } from "react-icons/di";
import { DiGit } from "react-icons/di";
import { DiHtml5 } from "react-icons/di";
import { DiDocker } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { SiAmazondynamodb } from "react-icons/si";
import { SiRedis } from "react-icons/si";
import { SiMicrosoftsqlserver } from "react-icons/si";
import { GiDatabase } from "react-icons/gi";
import { FaNode } from "react-icons/fa";

const SkillsCard = ({ skills }) => {
  const iconMap = {
    Javascript: <DiJavascript1 className="font-black " />,
    Python: <DiPython />,
    Java: <DiJava />,
    "React.js": <DiReact />,
    ".NET": <DiNetmagazine />,
    "Angular.js": <DiAngularSimple />,
    Bootstrap: <DiBootstrap />,
    Tailwind: <SiTailwindcss />,
    MongoDB: <DiMongodb />,
    DynamoDB: <SiAmazondynamodb />,
    Redis: <SiRedis />,
    mySQL: <DiMysql />,
    PostgreSQL: <DiPostgresql />,
    "Microsoft SQL Server": <SiMicrosoftsqlserver />,
    noSQL: <GiDatabase />,
    Docker: <DiDocker />,
    Git: <DiGit />,
    CSS3: <DiCss3 />,
    HTML5: <DiHtml5 />,
    Express: <FaNode />,
    "C#": <SiCsharp />,
  };

  return (
    <div className="flex flex-col bg-white shadow-md text-black rounded-lg w-full py-7 px-32 ">
      <h2>{skills.technologyType}</h2>
      <div className="w-full">
        <div className="flex w-full justify-between pb-2">
          {skills.skills.map((skill) => {
            const skillArr = skill.split(",");
            return skillArr.map((subSkill, subIndex) => (
              <SkillTip key={subIndex} skill={subSkill}>
                {iconMap[subSkill]}
              </SkillTip>
            ));
          })}
        </div>
      </div>
    </div>
  );
};

const SkillTip = ({ skill, children }) => {
  return (
    <Tooltip title={skill} placement="bottom">
      <IconButton sx={{ color: "#000000", fontSize: 50 }}>
        {children}
      </IconButton>
    </Tooltip>
  );
};

export default SkillsCard;
