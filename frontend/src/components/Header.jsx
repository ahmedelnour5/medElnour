import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full mx-auto">
      <div className="container flex justify-between mx-auto p-5 items-center">
        <span className="text-2xl font-medium">medElnour</span>
        <nav>
          <Link
            className="mx-4 hover:border-b-2 border-white"
            to={"/Experience"}
          >
            Experience
          </Link>
          <Link className="mx-4 hover:border-b-2 border-white" to={"/Projects"}>
            Projects
          </Link>
          <Link className="mx-4 hover:border-b-2 border-white" to={"/Skills"}>
            Skills
          </Link>
          <Link className="mx-4 hover:border-b-2 border-white" to={"/Contact"}>
            Contact
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;
