import React from "react";
import { NavLink } from "react-router-dom";
import "./components.css";

function Navbar() {
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
            <p className="navEle">
              <span>#</span>home
            </p>
          </NavLink>
          <NavLink style={{ textDecoration: "none" }} to="/projectspage">
            <p className="navEle">
              <span>#</span>projects
            </p>
          </NavLink>
          <NavLink style={{ textDecoration: "none" }} to="/aboutmepage">
            <p className="navEle">
              <span>#</span>about-me
            </p>
          </NavLink>
          <NavLink style={{ textDecoration: "none" }} to="/contactspage">
            <p className="navEle">
              <span>#</span>contacts
            </p>
          </NavLink>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
