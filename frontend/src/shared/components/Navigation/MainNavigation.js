import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { Menu } from "lucide-react";

import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import "./MainNavigation.css";
import SideDrawer from "./SideDrawer";
import Backdrop from "../UIElements/Backdrop";

const MainNavigation = (props) => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawer = () => {
    setDrawerIsOpen(true);
  };

  const closeDrawer = () => {
    setDrawerIsOpen(false);
  };

  return (
    <React.Fragment>
      {drawerIsOpen && <Backdrop onClick={closeDrawer} />}
      {drawerIsOpen && (
        <SideDrawer>
          <nav className="main-navigation__drawer-nav">
            <ul className="drawer-nav-links">
              <li>
                <NavLink to="/" exact activeClassName="active">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/new-blog" activeClassName="active">
                  New Blog
                </NavLink>
              </li>
              <li>
                <NavLink to="/blogs/update/1" activeClassName="active">
                  Update Blog
                </NavLink>
              </li>
              <li>
                <NavLink to="/profile" activeClassName="active">
                  Profile
                </NavLink>
              </li>
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
            </ul>
          </nav>
        </SideDrawer>
      )}

      <MainHeader>
        <button className="main-navigation__menu-btn" onClick={openDrawer}>
          <Menu size={30} />
        </button>

        <h1 className="main-navigation__title">
          <Link to="/">
            <div className="main-navigation__logo-container">BlogNest</div>
          </Link>
        </h1>

        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </MainHeader>
    </React.Fragment>
  );
};

export default MainNavigation;
