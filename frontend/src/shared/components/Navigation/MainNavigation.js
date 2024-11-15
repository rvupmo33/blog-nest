import React from "react";
import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { Image } from "lucide-react";

const MainNavigation = () => {
  return (
    <div>
      <MainHeader>
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
