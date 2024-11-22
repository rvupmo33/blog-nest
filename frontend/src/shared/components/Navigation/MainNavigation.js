import React, { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { Image } from "lucide-react";

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
            <NavLinks />
          </nav>
        </SideDrawer>
      )}

      <div>
      <MainHeader>
        {/* Hamburger button that appears only on mobile */}
        <button className="main-navigation__menu-btn"  onClick={openDrawer}>
          <span />
          <span />
          <span />
        </button>

        {/* <PanelRightClose /> */}

        <h1 className="main-navigation__title">
          <Link to="/">
          <div className="main-navigation__logo-container">
            <img src="/code_maverick_logo 1.png" alt="Logo" className="main-navigation__logo" />
                BlogNest
          </div>
        </Link>
        </h1>
        {/*<h1 className="main-navigation__title">
          <Link to="/">
            <div>
              <Image />
              BlogNest
            </div>
          </Link>
        </h1>*/}
        
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </MainHeader>
    </div>
    </React.Fragment>
    
  );
};

export default MainNavigation;
