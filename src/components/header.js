import React, { useState } from "react";
import { DataProvider } from "../context/DataContext";

function Header() {
  const [showMenu, setCloseMenu] = useState();

  const handleCloseMenu = () => {
    setCloseMenu(!showMenu);
  };

  const handleGoSection = () => {
    handleCloseMenu();
  };

  return (
    <DataProvider>
      <header className="header">
        <div className="header__names">
          <h1 className="name">Lorena</h1>
          <h2 className="lastName">Guartazaca</h2>
        </div>
        <button className="btnshow" onClick={handleCloseMenu}>
          <i className="fa-solid fa-bars iconmenu"></i>
        </button>
        <div className={showMenu ? "menu__mobile" : "hidden"}>
          <button className="btnclose" title="close" onClick={handleCloseMenu}>
            <i className="fa-solid fa-x iconx"></i>
          </button>
          <nav className="menu__container">
            <a
              className="menu_mobilelist"
              href="#aboutme"
              onClick={handleGoSection}
            >
              About_me
            </a>
            <a
              className="menu_mobilelist"
              href="#skills"
              onClick={handleGoSection}
            >
              Skills
            </a>
            <a
              className="menu_mobilelist"
              href="#experience"
              onClick={handleGoSection}
            >
              Experience
            </a>
            <a
              className="menu_mobilelist"
              href="#profile"
              onClick={handleGoSection}
            >
              Portafolio
            </a>
            <a
              className="menu_mobilelist"
              href="#contactme"
              onClick={handleGoSection}
            >
              Contact_me
            </a>
          </nav>
        </div>
      </header>
    </DataProvider>
  );
}

export default Header;
