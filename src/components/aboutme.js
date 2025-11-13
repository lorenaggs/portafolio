const copy = {
  es: {
    title: "Sobre mí",
    paragraph:
      "Soy desarrolladora frontend con más de tres años construyendo plataformas escalables para seguros automotrices, logística, banca y turismo. Me mueven los retos que combinan arquitectura modular, experiencias memorables y equipos de alto rendimiento.",
    highlights: [
      {
        title: "Microfrontends & Monorepos",
        description:
          "Guié la migración hacia Module Federation y Nx para habilitar despliegues independientes por dominio de negocio.",
      },
      {
        title: "Soluciones Serverless",
        description:
          "Integro AWS Lambda, API Gateway y DynamoDB para flujos seguros que reducen costos sin comprometer el time to market.",
      },
      {
        title: "Liderazgo de producto",
        description:
          "Acompaño equipos en discovery, medición y entrega continua con foco en accesibilidad y documentación viva.",
      },
    ],
  },
  en: {
    title: "About",
    paragraph:
      "I'm a frontend developer with 3+ years building scalable platforms for automotive insurance, logistics, banking and travel. I thrive on challenges that blend modular architecture, memorable experiences and high-performing teams.",
    highlights: [
      {
        title: "Microfrontends & Monorepos",
        description:
          "Led the move to Module Federation and Nx allowing independent releases per business domain.",
      },
      {
        title: "Serverless Solutions",
        description:
          "Combine AWS Lambda, API Gateway and DynamoDB to create secure flows that cut costs while keeping an agile cadence.",
      },
      {
        title: "Product Leadership",
        description:
          "Facilitate discovery, measurement and continuous delivery with an accessibility-first mindset and living documentation.",
      },
    ],
  },
};

function Aboutme({ language }) {
  const content = copy[language] ?? copy.es;

  return (
    <section className="aboutme" id="aboutme">
      <div className="section-heading">
        <h2 className="section-heading__title">{content.title}</h2>
        <div className="section-heading__accent" />
      </div>
      <div className="aboutme__grid">
        <p className="aboutme__text">{content.paragraph}</p>
        <div className="aboutme__highlights">
          {content.highlights.map(({ title, description }) => (
            <article key={title} className="aboutme__highlight">
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Aboutme;
