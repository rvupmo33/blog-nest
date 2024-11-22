import React from "react";
import { NavLink } from "react-router-dom";

const NavLinks = (props) => {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/">New Blog</NavLink>
      </li>
      {/* Only one "Update Blog" link that takes to dynamic route */}
      <li>
        <NavLink to="/blogs/update/1">Update Blog</NavLink>
      </li>
      <li>
        <NavLink to="/">Signup</NavLink>
      </li>
      <li>
        <NavLink to="/">Sign In</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
