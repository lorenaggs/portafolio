function Aboutme() {
  return (
    <section className="aboutme" id="aboutme">
      <div className="section-heading">
        <h2 className="section-heading__title">Sobre mí</h2>
        <div className="section-heading__accent" />
      </div>
      <div className="aboutme__grid">
        <p className="aboutme__text">
          Soy desarrolladora frontend con más de tres años creando soluciones digitales para
          automotrices, logística, banca y turismo. Me encanta combinar arquitectura escalable,
          experiencia de usuario y buenas prácticas de ingeniería para llevar ideas a producción con
          calidad.
        </p>
        <div className="aboutme__highlights">
          <article className="aboutme__highlight">
            <h3>Microfrontends & Monorepos</h3>
            <p>
              Lideré la migración hacia Module Federation y monorepositorios en Angular para acelerar
              despliegues y aislar capacidades de negocio.
            </p>
          </article>
          <article className="aboutme__highlight">
            <h3>Soluciones Serverless</h3>
            <p>
              Integro servicios AWS (Lambda, API Gateway, DynamoDB) para crear flujos seguros y
              escalables, optimizando costos operativos.
            </p>
          </article>
          <article className="aboutme__highlight">
            <h3>Trabajo en equipo</h3>
            <p>
              Disfruto guiar equipos, facilitar ceremonias ágiles y fomentar la documentación viva con
              foco en la mejora continua.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Aboutme;
