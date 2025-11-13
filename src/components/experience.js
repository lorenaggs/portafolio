function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="section-heading">
        <h2 className="section-heading__title">Experiencia profesional</h2>
        <div className="section-heading__accent" />
      </div>
      <article className="experience__card">
        <header className="experience__header">
          <div>
            <h3>OpciónAuto · Desarrolladora Frontend</h3>
            <p className="experience__meta">Mar 2023 – Presente · Quito, Ecuador</p>
          </div>
          <span className="experience__stack">Angular · Module Federation · AWS</span>
        </header>
        <ul className="experience__bullet">
          <li>
            Lidero la migración de una plataforma monolítica a microfrontends con Angular 18 y
            monorepositorios, reduciendo tiempos de despliegue en 30% y habilitando la entrega
            independiente por vertical.
          </li>
          <li>
            Diseñé un sistema de mensajería omnicanal integrando Meta WhatsApp Business, Node.js y
            Pusher para conectar asesores en tiempo real.
          </li>
          <li>
            Implementé encuestas dinámicas y reportes analíticos para gerencia, elevando la tasa de
            seguimiento comercial en 25%.
          </li>
          <li>
            Desarrollé un gestor de publicidad con permisos segmentados y workflows de aprobación.
          </li>
        </ul>
      </article>
      <article className="experience__card">
        <header className="experience__header">
          <div>
            <h3>Grupo Transoceánica · Desarrolladora Fullstack</h3>
            <p className="experience__meta">Ene 2023 – Mar 2023 · Quito, Ecuador</p>
          </div>
          <span className="experience__stack">React · Node.js · PostgreSQL</span>
        </header>
        <ul className="experience__bullet">
          <li>
            Construí módulos de control de costos e importaciones con flujos de aprobación y
            dashboards operativos.
          </li>
          <li>
            Implementé autenticación JWT, control de roles y servicios REST para integraciones con
            sistemas externos.
          </li>
        </ul>
      </article>
      <article className="experience__card">
        <header className="experience__header">
          <div>
            <h3>Alnusoft (Bulgaria) · Desarrolladora Frontend</h3>
            <p className="experience__meta">Ago 2022 – Dic 2022 · Remoto</p>
          </div>
          <span className="experience__stack">React · Apify · Cheerio</span>
        </header>
        <ul className="experience__bullet">
          <li>
            Construí herramientas de web scraping y visualización para marketplaces de e-commerce con
            pipelines automatizados.
          </li>
          <li>
            Implementé dashboards de insights para equipos de marketing y analistas comerciales.
          </li>
        </ul>
      </article>
    </section>
  );
}

export default Experience;
