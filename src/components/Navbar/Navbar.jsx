import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import burgerIcon from "../../images/SVGs/burgerIco.svg";
import crossIcon from "../../images/SVGs/crossIco.svg";
import "./navbar.css";

function Navbar() {
  const [pageIdentifier, setPageIdentifier] = useState("homepage");
  const [showMenu, setsShowMenu] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname.replace("/", "");
    setPageIdentifier(currentPath || "homepage");
  }, [location]);

  const clickHandler = (navElement) => {
    setPageIdentifier(navElement);
  };

  const menuHandler = () => {
    setsShowMenu(!showMenu);
  };

  return (
    <div className="navParent">
      {/* navbar */}
      <nav className="navbar">
        <NavLink style={{ textDecoration: "none" }} to="/">
          <div className="nameLogoSec">
            <p className="name">
              <span>A</span>aditya
            </p>
            <p className="name">
              <span>J</span>ujagar
            </p>
          </div>
        </NavLink>

        <div className="navElements">
          <NavLink style={{ textDecoration: "none" }} to="/">
            <p
              className={
                "navEle " + (pageIdentifier === "homepage" ? "activate" : "")
              }
              onClick={() => clickHandler("homepage")}
            >
              <span>#</span>home
            </p>
          </NavLink>
          <NavLink style={{ textDecoration: "none" }} to="/projectspage">
            <p
              className={
                "navEle " +
                (pageIdentifier === "projectspage" ? "activate" : "")
              }
              onClick={() => clickHandler("projectspage")}
            >
              <span>#</span>projects
            </p>
          </NavLink>
          <NavLink style={{ textDecoration: "none" }} to="/aboutmepage">
            <p
              id="aboutme"
              className={
                "navEle " + (pageIdentifier === "aboutmepage" ? "activate" : "")
              }
              onClick={() => clickHandler("aboutmepage")}
            >
              <span>#</span>about-me
            </p>
          </NavLink>
          <NavLink style={{ textDecoration: "none" }} to="/contactspage">
            <p
              id="contactme"
              className={
                "navEle " +
                (pageIdentifier === "contactspage" ? "activate" : "")
              }
              onClick={() => clickHandler("contactspage")}
            >
              <span>#</span>contacts
            </p>
          </NavLink>

          <div className="menuIcons" onClick={menuHandler}>
            {showMenu ? (
              <img src={burgerIcon} alt="" />
            ) : (
              <img src={crossIcon} alt="" />
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
