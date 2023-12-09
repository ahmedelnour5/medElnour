import React from "react";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import { Tooltip } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ArticleIcon from "@mui/icons-material/Article";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full space-y-9">
      <h1 className="text-5xl md:text-7xl font-semibold">Ahmed Elnour</h1>
      <h2 className="text-xl md:text-2xl font-medium">Full-Stack Developer</h2>
      <ul className="flex items-center">
        <LinkIcon
          to="https://github.com/ahmedelnour5"
          tipTitle="Github"
          Icon={GitHubIcon}
        >
          <GitHubIcon sx={{ color: "#ffffff", fontSize: 50 }} />
        </LinkIcon>

        <LinkIcon
          to="https://www.linkedin.com/in/ahmedelnoura/"
          tipTitle="LinkedIn"
        >
          <LinkedInIcon sx={{ color: "#ffffff", fontSize: 50 }} />
        </LinkIcon>
        <LinkIcon
          to="https://www.linkedin.com/in/ahmedelnoura/"
          tipTitle="Resume"
        >
          <ArticleIcon sx={{ color: "#ffffff", fontSize: 50 }} />
        </LinkIcon>
      </ul>
    </div>
  );
};

const LinkIcon = ({ to, tipTitle, children }) => {
  return (
    <Link to={to}>
      <Tooltip title={tipTitle} placement="top">
        <IconButton>{children}</IconButton>
      </Tooltip>
    </Link>
  );
};

export default Home;
