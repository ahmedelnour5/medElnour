import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full mx-auto flex justify-between">
      <div className="container">
        <span>medElnour</span>
        <nav className="">
          <Link to={"/Experience"}>Experience</Link>
          <Link to={"/Projects"}>Projects</Link>
          <Link to={"/Skills"}>Skills</Link>
          <Link to={"/Contact"}>Contact</Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;
