const content = {
  es: {
    intro: "Hola, soy",
    title: "Frontend Lead especializada en microfrontends y Angular 18.",
    summary:
      "Impulso productos digitales que crecen sin perder velocidad: combino arquitectura modular, data-driven UX y equipos ágiles para lanzar funcionalidades de alto impacto en tiempo récord.",
    secondary:
      "Angular 18 · Microfrontend · Module Federation · Serverless · Diseño accesible",
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
    intro: "Hi, I'm",
    title: "Frontend Lead focused on microfrontends and AWS Serverless",
    summary:
      "I help digital products scale without slowing down by blending modular architecture, data-driven UX and agile teams to ship high-impact features fast.",
    secondary:
      "Angular 18 · Module Federation · Serverless · Accessible design",
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
