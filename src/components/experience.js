const dictionary = {
  es: {
    title: "Experiencia profesional",
    roles: [
      {
        company: "OpciónAuto",
        position: "Desarrolladora Frontend",
        period: "Mar 2023 – Presente · Quito, Ecuador",
        stack: ["Angular 18", "Module Federation", "AWS", "Nx"],
        achievements: [
          "Dirigí la migración a microfrontends reduciendo los despliegues en 30% y habilitando releases por dominio.",
          "Implementé mensajería omnicanal integrando Meta WhatsApp Business, Node.js y Pusher para ventas en tiempo real.",
          "Diseñé encuestas dinámicas y dashboards de métricas que elevaron el seguimiento comercial en 25%.",
          "Lancé un gestor de publicidad con permisos segmentados y workflows de aprobación.",
        ],
      },
      {
        company: "Grupo Transoceánica",
        position: "Desarrolladora Fullstack",
        period: "Ene 2023 – Mar 2023 · Quito, Ecuador",
        stack: ["React", "Node.js", "PostgreSQL"],
        achievements: [
          "Construí módulos de control de costos e importaciones con flujos de aprobación y dashboards operativos.",
          "Implementé autenticación JWT, control de roles y servicios REST para integraciones con sistemas externos.",
        ],
      },
      {
        company: "Alnusoft (Bulgaria)",
        position: "Desarrolladora Frontend",
        period: "Ago 2022 – Dic 2022 · Remoto",
        stack: ["React", "Apify", "Cheerio"],
        achievements: [
          "Desarrollé herramientas de web scraping y visualización para marketplaces de e-commerce.",
          "Implementé dashboards de insights para marketing con pipelines automatizados de datos.",
        ],
      },
    ],
    freelanceTitle: "Proyectos freelance",
    freelance: [
      {
        company: "VistusProject",
        position: "Desarrolladora FullStack (uTransfer)",
        summary:
          "Diseño y construcción de uTransfer, plataforma bancaria para transferencias inmediatas con seguridad reforzada.",
        highlights: [
          "Implementación de microservicios serverless en AWS (Lambda, API Gateway, DynamoDB) para pagos confiables.",
          "Diseño de flujos de autenticación multifactor y monitoreo de transacciones en tiempo real.",
          "Coordinación con equipos remotos para definir roadmap, backlog y entregables iterativos.",
        ],
      },
    ],
    educationTitle: "Educación",
    education: [
      {
        institution: "Universidad Técnica Equinoccial, Quito",
        degree: "Ingeniería en Ciencias de la Computación",
        period: "Oct. 2022 – Presente",
      },
      {
        institution: "Adalab, España",
        degree: "Bootcamp de Desarrollo Web",
        period: "Ene. 2022 – May. 2022",
      },
    ],
  },
  en: {
    title: "Professional experience",
    roles: [
      {
        company: "OpciónAuto",
        position: "Frontend Developer",
        period: "Mar 2023 – Present · Quito, Ecuador",
        stack: ["Angular 18", "Module Federation", "AWS", "Nx"],
        achievements: [
          "Led the microfrontend migration cutting deployment time by 30% and enabling domain-driven releases.",
          "Launched an omnichannel messaging system integrating Meta WhatsApp Business, Node.js and Pusher for real-time sales.",
          "Delivered dynamic surveys and analytics dashboards increasing commercial follow-up by 25%.",
          "Introduced an ad manager with segmented permissions and approval workflows.",
        ],
      },
      {
        company: "Grupo Transoceánica",
        position: "Fullstack Developer",
        period: "Jan 2023 – Mar 2023 · Quito, Ecuador",
        stack: ["React", "Node.js", "PostgreSQL"],
        achievements: [
          "Built cost-control and imports modules with approval flows and operational dashboards.",
          "Implemented JWT authentication, role-based access and REST services for partner integrations.",
        ],
      },
      {
        company: "Alnusoft (Bulgaria)",
        position: "Frontend Developer",
        period: "Aug 2022 – Dec 2022 · Remote",
        stack: ["React", "Apify", "Cheerio"],
        achievements: [
          "Developed web scraping and visualization tools for e-commerce marketplaces.",
          "Implemented automated data pipelines feeding marketing insight dashboards.",
        ],
      },
    ],
    freelanceTitle: "Freelance projects",
    freelance: [
      {
        company: "VistusProject",
        position: "FullStack Developer (uTransfer)",
        summary:
          "Architected and shipped uTransfer, a banking platform enabling instant and secure money transfers.",
        highlights: [
          "Implemented AWS serverless microservices (Lambda, API Gateway, DynamoDB) to guarantee transactional reliability.",
          "Designed MFA authentication flows and real-time transaction monitoring capabilities.",
          "Collaborated with remote stakeholders to define roadmap, backlog and iterative deliverables.",
        ],
      },
    ],
    educationTitle: "Education",
    education: [
      {
        institution: "Universidad Técnica Equinoccial, Quito",
        degree: "B.S. in Computer Science",
        period: "Oct. 2022 – Present",
      },
      {
        institution: "Adalab, Spain",
        degree: "Web Development Bootcamp",
        period: "Jan. 2022 – May. 2022",
      },
    ],
  },
};

function Experience({ language }) {
  const { title, roles, freelanceTitle, freelance, educationTitle, education } =
    dictionary[language] ?? dictionary.es;

  return (
    <section className="experience" id="experience">
      <div className="section-heading">
        <h2 className="section-heading__title">{title}</h2>
        <div className="section-heading__accent" />
      </div>
      <ol className="experience__timeline">
        {roles.map(({ company, position, period, achievements, stack }) => (
          <li key={`${company}-${position}`} className="experience__item">
            <div className="experience__milestone">
              <span className="experience__dot" />
              <span className="experience__line" />
      </div>
      <article className="experience__card">
        <header className="experience__header">
          <div>
                  <h3>
                    {company} · {position}
                  </h3>
                  <p className="experience__meta">{period}</p>
          </div>
                <ul className="experience__stack">
                  {stack.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
        </header>
        <ul className="experience__bullet">
                {achievements.map((achievement) => (
                  <li key={achievement}>{achievement}</li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ol>
      {freelance?.length ? (
        <section className="experience__section" aria-label={freelanceTitle}>
          <h3 className="experience__section-title">{freelanceTitle}</h3>
          <div className="experience__grid">
            {freelance.map(({ company, position, summary, highlights }) => (
              <article key={`${company}-${position}`} className="experience__card">
                <header className="experience__header experience__header--stacked">
          <div>
                    <h3>
                      {company} · {position}
                    </h3>
          </div>
        </header>
                <p className="experience__summary">{summary}</p>
                {highlights?.length ? (
        <ul className="experience__bullet">
                    {highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
        </ul>
                ) : null}
      </article>
            ))}
          </div>
        </section>
      ) : null}
      {education?.length ? (
        <section className="experience__section experience__section--education" aria-label={educationTitle}>
          <h3 className="experience__section-title">{educationTitle}</h3>
          <div className="experience__grid">
            {education.map(({ institution, degree, period }) => (
              <article key={`${institution}-${degree}`} className="experience__card experience__card--compact">
                <header className="experience__header experience__header--stacked">
                  <h3>{institution}</h3>
                  <p className="experience__meta">{degree}</p>
        </header>
                <p className="experience__period">{period}</p>
      </article>
            ))}
          </div>
        </section>
      ) : null}
    </section>
  );
}

export default Experience;
