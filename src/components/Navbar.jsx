import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav className="nav-bar">
        <div className="portfolio">
          <h3>
            <b className="joint-font">.Portfolio</b>
          </h3>
        </div>
        <div className="nav-items">
          <p>
            {" "}
            <NavLink
              style={{ textDecoration: "none", color: "wheat" }}
              to="/"
              exact
            >
              Home
            </NavLink>
          </p>
          <p>
            <NavLink
              style={{ textDecoration: "none", color: "wheat" }}
              to="/about"
            >
              About
            </NavLink>
          </p>
          <p>
            <NavLink
              style={{ textDecoration: "none", color: "wheat" }}
              to="/contact"
            >
              Contact
            </NavLink>
          </p>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
