import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            Jorge Hernandez Portfolio
            <i className="fas fa-code"></i>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/backend"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Back End
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/frontend"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Front End
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/portfolio"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Portfolio
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;