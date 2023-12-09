import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Header = () => {
  return (
    <div className="w-full mx-auto sticky top-0">
      <div className="container mx-auto flex justify-between  p-5 items-center flex-wrap">
        <Link to={"/"} className="hover:cursor-pointer">
          <span className="text-2xl font-medium">medElnour</span>
        </Link>

        <Nav />
      </div>
    </div>
  );
};

const Nav = () => {
  const [open, setOpen] = useState(false);
  const toggleModal = () => {
    setOpen(!open);
  };
  return (
    <>
      <div className="hidden md:flex items-center">
        {/*----------------------------Desktop Nav------------------------- */}
        <>
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
        </>
        {/*----------------------------Mobile Nav------------------------- */}
      </div>
      <MobileNav controlModal={toggleModal} navOpen={open} />
    </>
  );
};

const MobileNav = ({ controlModal, navOpen }) => {
  return (
    <>
      <div className="md:hidden">
        {
          <IconButton
            onClick={controlModal}
            sx={{ fontSize: 40, color: "#ffffff" }}
          >
            {navOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        }
      </div>
      {navOpen && (
        <div className="flex flex-col w-full flex-wrap items-center justify-center space-y-2 py-10">
          <Link
            className="mx-4 hover:border-b-2 border-white border-b-2"
            to={"/Experience"}
            onClick={controlModal}
          >
            Experience
          </Link>
          <Link
            className="mx-4 hover:border-b-2 border-white  border-b-2"
            to={"/Projects"}
            onClick={controlModal}
          >
            Projects
          </Link>
          <Link
            className="mx-4 hover:border-b-2 border-white  border-b-2"
            to={"/Skills"}
            onClick={controlModal}
          >
            Skills
          </Link>
          <Link
            className="mx-4 hover:border-b-2 border-white  border-b-2"
            to={"/Contact"}
            onClick={controlModal}
          >
            Contact
          </Link>
        </div>
      )}
    </>
  );
};

export default Header;
