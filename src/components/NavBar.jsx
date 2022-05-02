import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="Navbar">
      <NavLink to="/home" className="link">
        Home
      </NavLink>
      <NavLink to="/students" className="link">
        Students
      </NavLink>
      <NavLink to="/contact-us" className="link">
        Contact US
      </NavLink>
    </div>
  );
}

export default Navbar;
