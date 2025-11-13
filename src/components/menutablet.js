import { useMemo } from "react";

const labels = {
  es: {
    primary: [
      { href: "#aboutme", label: "Sobre mí" },
      { href: "#skills", label: "Habilidades" },
      { href: "#experience", label: "Experiencia" },
    ],
    secondary: [
      { href: "#methodology", label: "Metodología" },
      { href: "#logros", label: "Logros" },
      { href: "#profile", label: "Portafolio" },
      { href: "#testimonials", label: "Testimonios" },
      { href: "#contactme", label: "Contacto" },
    ],
    more: "Más",
  },
  en: {
    primary: [
      { href: "#aboutme", label: "About" },
      { href: "#skills", label: "Stack" },
      { href: "#experience", label: "Experience" },
    ],
    secondary: [
      { href: "#methodology", label: "Methodology" },
      { href: "#logros", label: "Highlights" },
      { href: "#profile", label: "Portfolio" },
      { href: "#testimonials", label: "References" },
      { href: "#contactme", label: "Contact" },
    ],
    more: "More",
  },
};

function Menutablet({ language }) {
  const { primary, secondary, more } = useMemo(() => labels[language] ?? labels.es, [language]);

  return (
    <nav className="menu__tablet" aria-label="Quick navigation">
      {primary.map(({ href, label }) => (
        <a key={href} className="menu__chip" href={href}>
          <span>{label}</span>
        </a>
      ))}
      <div className="menu__group">
        <button type="button" className="menu__chip menu__chip--dropdown">
          <span>{more}</span>
          <i className="fa-solid fa-chevron-down" aria-hidden="true" />
        </button>
        <div className="menu__dropdown">
          {secondary.map(({ href, label }) => (
            <a key={href} className="menu__dropdown-item" href={href}>
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Menutablet;
