const content = {
  es: {
    intro: "Frontend Lead · Microfrontends",
    title: "Arquitecturas modulares y escalables con Angular",
    summary: "Diseño y lidero arquitecturas modulares basadas en microfrontends y Angular 18, aplicando principios de programación orientada a objetos con arquitectura hexagonal para garantizar sistemas escalables, mantenibles y preparados para la evolución. Alineo estrategia, arquitectura y UX para entregar plataformas modernas, accesibles y de alto rendimiento.",
    secondary:
      "Angular 18 · Microfrontends · Module Federation · Serverless · UX Data-Driven · Arquitectura limpia · Arquitectura hexagonal",
    primaryCta: "Agendar una reunión",
    primaryHref: "https://wa.me/593994607544",
    secondaryCta: "Descargar CV",
    secondaryHref: "https://drive.google.com/file/d/1mzU93b9wW4HcBUrBn427l7ZVzzmpfOFZ/view?usp=sharing",
    stats: [
      { value: "30%", label: "menos tiempo de despliegue tras migrar a microfrontends" },
      { value: "+25%", label: "más velocidad entregando nuevas funcionalidades" },
      { value: "4 sectores", label: "seguros, logística, banca y turismo" },
    ],
    quickLinks: [
      {
        title: "WhatsApp",
        description: "Mensajería instantánea para coordinar proyectos",
        href: "https://wa.me/593994607544",
      },
      {
        title: "Calendario",
        description: "Reserva un discovery call en 15 minutos",
        href: "https://cal.com/lorenaggs/30min",
      },
      {
        title: "GitHub",
        description: "Código y experimentos de arquitectura",
        href: "https://github.com/lorenaggs",
      },
    ],
  },
  en: {
    intro: "Frontend Lead · Microfrontends",
    title: "Modular and scalable architectures with Angular",
    summary:"I design and lead modular architectures based on microfrontends and Angular 18, applying object-oriented programming principles with hexagonal architecture to ensure scalable, maintainable systems that are ready to evolve. I align strategy, architecture, and UX to deliver modern, accessible, and high-performance platforms.",
    secondary:
      "Angular 18 · Microfrontends · Module Federation · Serverless · UX Data-Driven · Clean Architecture · Hexagonal architecture",
    primaryCta: "Book a meeting",
    primaryHref: "https://cal.com/lorenaggs/30min",
    secondaryCta: "Download resume",
    secondaryHref: "https://drive.google.com/file/d/1mzU93b9wW4HcBUrBn427l7ZVzzmpfOFZ/view?usp=sharing",
    stats: [
      { value: "30%", label: "faster deployments after the microfrontend migration" },
      { value: "+25%", label: "speed-up delivering new features" },
      { value: "4 industries", label: "insurance, logistics, banking and travel" },
    ],
    quickLinks: [
      {
        title: "WhatsApp",
        description: "Instant messaging to align next steps",
        href: "https://wa.me/593994607544",
      },
      {
        title: "Calendar",
        description: "Book a 30-minute discovery call",
        href: "https://cal.com/lorenaggs/30min",
      },
      {
        title: "GitHub",
        description: "Code samples and architecture experiments",
        href: "https://github.com/lorenaggs",
      },
    ],
  },
};

function Banner({ language }) {
  const copy = content[language] ?? content.es;

  return (
    <>
      <section className="banner-hero" id="hero">
        <div className="banner-hero__content">
        <p className="banner__intro">{copy.intro}</p>
        <h2 className="banner__headline">
          Lorena Guartazaca
          <span className="banner__headline-highlight">{copy.title}</span>
        </h2>
        <p className="banner__summary">{copy.summary}</p>
        <p className="banner__secondary">{copy.secondary}</p>
        <div className="banner__actions">
          <a className="banner__cta banner__cta--primary" href={copy.primaryHref} target="_blank" rel="noreferrer">
            {copy.primaryCta}
          </a>
          <a className="banner__cta banner__cta--secondary" href={copy.secondaryHref} target="_blank" rel="noreferrer">
            {copy.secondaryCta}
          </a>
        </div>
        </div>
        <section className="banner-hero__image">
          <div className="banner__glow"></div>
          <div className="banner__portrait">
            <div className="banner__portrait-image"></div>
          </div>
        </section>
      </section>
      <section className="banner-stats">
        <div className="banner-stats__container">
          {copy.stats.map(({ value, label }) => (
            <article key={value} className="banner-stats__item">
              <h3>{value}</h3>
              <p>{label}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

export default Banner;
