import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./NavLinks.css";
import { AuthContext } from "../../context/auth-context";

const NavLinks = () => {
  const auth = useContext(AuthContext);

  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact activeClassName="active">
          Home
        </NavLink>
      </li>
      {auth.isLoggedIn && (
        <>
          <li>
            <NavLink to="/create-blog" activeClassName="active">
              Create New Blog
            </NavLink>
          </li>
          <li>
            <NavLink to="/profile" activeClassName="active">
              Profile
            </NavLink>
          </li>
          <li>
            <button onClick={auth.logout}>Logout</button>
          </li>
        </>
      )}
      {!auth.isLoggedIn && (
        <>
          <li>
            <NavLink to="/auth" activeClassName="active">
              Authentication
            </NavLink>
          </li>
        </>
      )}
    </ul>
  );
};

export default NavLinks;
