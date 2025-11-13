import React, { useEffect, useState } from "react";

const labels = {
  es: {
    role: "Desarrolladora Frontend",
    about: "Sobre mí",
    skills: "Habilidades",
    experience: "Experiencia",
    achievements: "Logros",
    portfolio: "Portafolio",
    methodology: "Metodología",
    testimonials: "Testimonios",
    contact: "Contacto",
    language: "ES",
    languageAlt: "Cambiar a inglés",
  },
  en: {
    role: "Frontend Developer",
    about: "About",
    skills: "Stack",
    experience: "Experience",
    achievements: "Highlights",
    portfolio: "Portfolio",
    methodology: "Methodology",
    testimonials: "References",
    contact: "Contact",
    language: "EN",
    languageAlt: "Cambiar a español",
  },
};

function Header({ theme, language, onToggleTheme, onToggleLanguage }) {
  const [showMenu, setShowMenu] = useState(false);
  const t = labels[language] ?? labels.es;

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
          <p className="header__role">{t.role}</p>
        </div>
        <div className="header__actions">
          <button
            type="button"
            className="languageToggle"
            onClick={onToggleLanguage}
            aria-label={t.languageAlt}
            title={t.languageAlt}
          >
            {t.language}
          </button>
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
            {t.about}
          </a>
          <a className="menu_mobilelist" href="#skills" onClick={handleGoSection}>
            {t.skills}
          </a>
          <a className="menu_mobilelist" href="#experience" onClick={handleGoSection}>
            {t.experience}
          </a>
          <a className="menu_mobilelist" href="#methodology" onClick={handleGoSection}>
            {t.methodology}
          </a>
          <a className="menu_mobilelist" href="#logros" onClick={handleGoSection}>
            {t.achievements}
          </a>
          <a className="menu_mobilelist" href="#profile" onClick={handleGoSection}>
            {t.portfolio}
          </a>
          <a className="menu_mobilelist" href="#testimonials" onClick={handleGoSection}>
            {t.testimonials}
          </a>
          <a className="menu_mobilelist" href="#contactme" onClick={handleGoSection}>
            {t.contact}
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
