const dictionary = {
  es: {
    title: "Metodología de trabajo",
    steps: [
      {
        title: "Discovery & Diagnóstico",
        description:
          "Analizo el contexto de negocio, mapa de stakeholders y métricas base para definir hipótesis y quick wins.",
        deliverables: ["Story mapping", "Job stories", "Backlog priorizado"],
      },
      {
        title: "Arquitectura & Delivery",
        description:
          "Diseño soluciones modulares con foco en escalabilidad y DX, combinando microfrontends, serverless y CI/CD.",
        deliverables: ["ADR y diagramas", "Design system", "Pipelines automatizados"],
      },
      {
        title: "Medición & Iteración",
        description:
          "Defino métricas de valor, health checks y experimentos para garantizar mejoras continuas y aprendizajes accionables.",
        deliverables: ["Dashboards en vivo", "KPIs y alertas", "Cierre con insights"],
      },
    ],
    outcomeTitle: "Trabajemos juntos",
    outcomeDescription:
      "Cada engagement incluye documentación viva, hand-off con equipo y un roadmap de evolución.",
    outcomeCta: "Descubre cómo podría ayudar en tu próximo sprint",
  },
  en: {
    title: "How I partner with teams",
    steps: [
      {
        title: "Discovery & Diagnosis",
        description:
          "Understand business context, stakeholders and baseline metrics to define hypotheses and quick wins.",
        deliverables: ["Story mapping", "Job stories", "Prioritised backlog"],
      },
      {
        title: "Architecture & Delivery",
        description:
          "Design modular solutions focused on scalability and DX by mixing microfrontends, serverless and CI/CD.",
        deliverables: ["ADRs & diagrams", "Design system", "Automated pipelines"],
      },
      {
        title: "Measurement & Iteration",
        description:
          "Define value metrics, health checks and experiments to ensure continuous improvement and actionable learnings.",
        deliverables: ["Live dashboards", "KPIs & alerts", "Insightful wrap-up"],
      },
    ],
    outcomeTitle: "Let's collaborate",
    outcomeDescription:
      "Every engagement includes living documentation, team hand-off and an evolution roadmap.",
    outcomeCta: "See how I can accelerate your next sprint",
  },
};

function Methodology({ language }) {
  const copy = dictionary[language] ?? dictionary.es;

  return (
    <section className="methodology" id="methodology">
      <div className="section-heading">
        <h2 className="section-heading__title">{copy.title}</h2>
        <div className="section-heading__accent" />
      </div>
      <div className="methodology__grid">
        {copy.steps.map(({ title, description, deliverables }) => (
          <article key={title} className="methodology__card">
            <header className="methodology__card-header">
              <span className="methodology__badge">{title}</span>
            </header>
            <p className="methodology__description">{description}</p>
            <ul className="methodology__deliverables">
              {deliverables.map((deliverable) => (
                <li key={deliverable}>{deliverable}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <aside className="methodology__outcome">
        <div>
          <h3>{copy.outcomeTitle}</h3>
          <p>{copy.outcomeDescription}</p>
        </div>
        <a href="#contactme" className="methodology__cta">
          {copy.outcomeCta} →
        </a>
      </aside>
    </section>
  );
}

export default Methodology;

