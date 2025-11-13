import React, { useEffect, useState } from "react";

function Header({ theme, onToggleTheme }) {
  const [showMenu, setShowMenu] = useState(false);

  const toggleScrollLock = (shouldLock) => {
    const method = shouldLock ? "add" : "remove";
    document.body.classList[method]("no-scroll");
    document.documentElement.classList[method]("no-scroll");
  };

  const handleToggleMenu = () => {
    setShowMenu((prev) => {
      const next = !prev;
      toggleScrollLock(next);
      return next;
    });
  };

  const handleGoSection = () => {
    setShowMenu(false);
    toggleScrollLock(false);
  };

  useEffect(() => {
    return () => {
      toggleScrollLock(false);
    };
  }, []);

  return (
    <header className="header" id="top">
      <div className="header__brand">
        <div className="header__names">
          <h1 className="name">Lorena Guartazaca</h1>
          <p className="header__role">Desarrolladora Frontend</p>
        </div>
        <div className="header__actions">
          <button
            type="button"
            className="themeToggle"
            onClick={onToggleTheme}
            aria-label={`Cambiar a modo ${theme === "dark" ? "claro" : "oscuro"}`}
            title={`Cambiar a modo ${theme === "dark" ? "claro" : "oscuro"}`}
          >
            <i className={`fa-solid ${theme === "dark" ? "fa-sun" : "fa-moon"}`} />
          </button>
          <button className="btnshow" onClick={handleToggleMenu} aria-expanded={showMenu}>
            <i className="fa-solid fa-bars iconmenu"></i>
          </button>
        </div>
      </div>
      <div className={showMenu ? "menu__mobile" : "hidden"}>
        <button className="btnclose" title="Cerrar menú" onClick={handleToggleMenu}>
          <i className="fa-solid fa-x iconx"></i>
        </button>
        <nav className="menu__container">
          <a className="menu_mobilelist" href="#aboutme" onClick={handleGoSection}>
            Sobre mí
          </a>
          <a className="menu_mobilelist" href="#skills" onClick={handleGoSection}>
            Habilidades
          </a>
          <a className="menu_mobilelist" href="#experience" onClick={handleGoSection}>
            Experiencia
          </a>
          <a className="menu_mobilelist" href="#logros" onClick={handleGoSection}>
            Logros
          </a>
          <a className="menu_mobilelist" href="#profile" onClick={handleGoSection}>
            Portafolio
          </a>
          <a className="menu_mobilelist" href="#contactme" onClick={handleGoSection}>
            Contacto
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
