import { useEffect, useMemo, useState } from "react";

const dictionary = {
  es: {
    whatsapp: "Abrir WhatsApp",
    email: "Enviar correo",
    calendar: "Agendar reunión",
    linkedin: "Visitar LinkedIn",
  },
  en: {
    whatsapp: "Open WhatsApp",
    email: "Send email",
    calendar: "Schedule a meeting",
    linkedin: "Visit LinkedIn",
  },
};

const LINKS = [
  {
    id: "whatsapp",
    icon: "fa-brands fa-whatsapp",
    href: "https://wa.me/593994607544",
    external: true,
  },
  {
    id: "email",
    icon: "fa-solid fa-envelope",
    href: "mailto:lorenaggs2812@gmail.com",
    external: false,
  },
  {
    id: "calendar",
    icon: "fa-regular fa-calendar",
    action: "calendar",
  },
  {
    id: "linkedin",
    icon: "fa-brands fa-linkedin-in",
    href: "https://www.linkedin.com/in/lorenaggs/",
    external: true,
  },
];

function FloatingContacts({ language }) {
  const labels = dictionary[language] ?? dictionary.es;
  const [hidden, setHidden] = useState(false);

  const buttons = useMemo(
    () =>
      LINKS.map((link) => ({
        ...link,
        label: labels[link.id],
      })),
    [labels]
  );

  useEffect(() => {
    const target = document.getElementById("contactme");
    if (!target) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setHidden(entry.isIntersecting && entry.intersectionRatio > 0);
        });
      },
      {
        threshold: [0, 0.25, 0.5],
      }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  const handleClick = (event, action) => {
    if (action === "calendar") {
      event.preventDefault();
      window.scrollTo({
        top: document.getElementById("contactme")?.offsetTop ?? 0,
        behavior: "smooth",
      });
      window.dispatchEvent(new Event("openCalendar"));
    }
  };

  return (
    <nav className={`floating-contacts ${hidden ? "floating-contacts--hidden" : ""}`} aria-label="Contact shortcuts">
      {buttons.map(({ id, icon, href, label, external, action }) => {
        const commonProps = {
          className: "floating-contacts__button",
          "aria-label": label,
          title: label,
        };

        if (action === "calendar") {
          return (
            <button key={id} type="button" {...commonProps} onClick={(event) => handleClick(event, action)}>
              <i className={`fa-fw ${icon}`} aria-hidden="true" />
            </button>
          );
        }

        return (
          <a
            key={id}
            href={href}
            {...commonProps}
            target={external ? "_blank" : undefined}
            rel={external ? "noreferrer" : undefined}
          >
            <i className={`fa-fw ${icon}`} aria-hidden="true" />
          </a>
        );
      })}
    </nav>
  );
}

export default FloatingContacts;

