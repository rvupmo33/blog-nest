import React from "react";
import { NavLink } from "react-router-dom";
import "./NavLinks.css";

const NavLinks = () => {
  let user = true;
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact activeClassName="active">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/create-blog">Create New Blog</NavLink>
      </li>
     

      {/* Conditionally render Profile and Logout if user is signed in */}
      {user ? (
        <>
          <li>
            <NavLink to="/blogs/update/1" activeClassName="active">
              Update Blog
            </NavLink>
          </li>
          <li>
            <NavLink to="/blogs/delete/1" activeClassName="active">
              Delete Blog
            </NavLink>
          </li>
          <li>
            <NavLink to="/profile" activeClassName="active">
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink to="/logout" activeClassName="active">
              Logout
            </NavLink>
          </li>
        </>
      ) : (
        <>
          <li>
            <NavLink to="/signup" activeClassName="active">
              Signup
            </NavLink>
          </li>
          <li>
            <NavLink to="/signin" activeClassName="active">
              Sign In
            </NavLink>
          </li>
        </>
      )}
    </ul>
  );
};

export default NavLinks;
