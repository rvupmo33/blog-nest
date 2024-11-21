import React from "react";
import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { Image } from "lucide-react";
import "./MainNavigation.css";

const MainNavigation = () => {
  return (
    <div>
      <MainHeader>
        {/* Hamburger button that appears only on mobile */}
        <button className="main-navigation__menu-btn">
          <span />
          <span />
          <span />
        </button>

        {/* <PanelRightClose /> */}
        <h1 className="main-navigation__title">
          <Link to="/">
            <div>
              <Image />
              BlogNest
            </div>
          </Link>
        </h1>
        
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </MainHeader>
    </div>
  );
};

export default MainNavigation;
