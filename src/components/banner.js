function Banner() {
  return (
    <section className="banner">
      <div className="banner__content">
        <p className="banner__intro">Hola, soy</p>
        <h2 className="banner__headline">
          Lorena Guartazaca
        </h2>
        <p className="banner__subtitle">Desarrolladora Frontend & Lideresa Técnica</p>
        <p className="banner__summary">
          Diseño y construyo experiencias web modernas enfocadas en escalabilidad, rendimiento y
          accesibilidad. Disfruto resolver problemas complejos, liderar equipos y crear productos
          digitales con impacto real.
        </p>
        <a className="banner__cta" href="#contactme">
          Conversemos sobre tu proyecto
        </a>
      </div>
      <section className="banner__image">
        <div className="banner__glow"></div>
        <div className="banner__portrait">
          <div className="banner__portrait-image"></div>
        </div>
      </section>
    </section>
  );
}

export default Banner;
