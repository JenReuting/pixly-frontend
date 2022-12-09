import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <header className="Navbar p-3 text-bg-dark mb-3">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <NavLink
          className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
          to="/"
        >
          <img
            className="nav-logo bi me-2"
            src={process.env.PUBLIC_URL + "/logo192.png"}
            alt="pixly logo"
          ></img>
        </NavLink>

        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li>
            <NavLink className="nav-link px-2 text-secondary" to="/images">
              View All Images
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link px-2 text-secondary" to="/upload">
              Upload New Image
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default NavBar;
