import { useMemo, useState } from "react";

const dictionary = {
  es: {
    title: "Habilidades & stack",
    subtitle: "Explora mis herramientas por tipo de solución",
    cta: "Ver proyectos relacionados",
    categories: [
      {
        id: "frontend",
        label: "Frontend",
        description:
          "Interfaces modulares con Angular 18 y React 18, state management avanzado y componentes accesibles.",
        skills: [
          "Angular 18, React 18",
          "TypeScript, JavaScript (ES2023+)",
          "NgRx, RxJS, Redux Toolkit",
          "HTML5, CSS3, Tailwind, SCSS",
          "Microfrontends, Module Federation",
        ],
        link: "#profile",
      },
      {
        id: "backend",
        label: "Backend & Cloud",
        description:
          "Microservicios Node.js y arquitecturas serverless en AWS para escalar con costos controlados.",
        skills: [
          "Node.js, Express, REST APIs",
          "Autenticación JWT, OAuth",
          "AWS Lambda, API Gateway, S3",
          "DynamoDB, PostgreSQL, MySQL",
          "Serverless Framework, Docker",
        ],
        link: "#profile",
      },
      {
        id: "quality",
        label: "Calidad & Delivery",
        description:
          "Automatización, pruebas y observabilidad para mantener la velocidad sin sacrificar estabilidad.",
        skills: [
          "Jest, Jasmine, Testing Library",
          "Postman, Contract testing",
          "ESLint, Prettier, Husky",
          "GitHub Actions, CI/CD",
          "Observabilidad con CloudWatch",
        ],
        link: "#methodology",
      },
      {
        id: "soft",
        label: "Product & Leadership",
        description:
          "Product discovery, facilitación ágil y cultura de documentación viva para equipos de alto rendimiento.",
        skills: [
          "Discovery & Product framing",
          "Story mapping, OKRs, métricas",
          "Mentoring y pair programming",
          "Facilitación Scrum & Kanban",
          "UX writing, Design critique",
        ],
        link: "#testimonials",
      },
    ],
  },
  en: {
    title: "Skills & stack",
    subtitle: "Explore the tools I use per type of solution",
    cta: "View related work",
    categories: [
      {
        id: "frontend",
        label: "Frontend",
        description:
          "Modular interfaces with Angular 18 and React 18, advanced state management and accessible components.",
        skills: [
          "Angular 18, React 18",
          "TypeScript, JavaScript (ES2023+)",
          "NgRx, RxJS, Redux Toolkit",
          "HTML5, CSS3, Tailwind, SCSS",
          "Microfrontends, Module Federation",
        ],
        link: "#profile",
      },
      {
        id: "backend",
        label: "Backend & Cloud",
        description:
          "Node.js microservices and AWS serverless architectures to scale with cost efficiency.",
        skills: [
          "Node.js, Express, REST APIs",
          "JWT authentication, OAuth",
          "AWS Lambda, API Gateway, S3",
          "DynamoDB, PostgreSQL, MySQL",
          "Serverless Framework, Docker",
        ],
        link: "#profile",
      },
      {
        id: "quality",
        label: "Quality & Delivery",
        description:
          "Automation, testing and observability to keep speed without compromising stability.",
        skills: [
          "Jest, Jasmine, Testing Library",
          "Postman, Contract testing",
          "ESLint, Prettier, Husky",
          "GitHub Actions, CI/CD",
          "Observability with CloudWatch",
        ],
        link: "#methodology",
      },
      {
        id: "soft",
        label: "Product & Leadership",
        description:
          "Product discovery, agile facilitation and living documentation culture for high-performing teams.",
        skills: [
          "Discovery & product framing",
          "Story mapping, OKRs, metrics",
          "Mentoring & pair programming",
          "Scrum & Kanban facilitation",
          "UX writing, Design critique",
        ],
        link: "#testimonials",
      },
    ],
  },
};

function Skills({ language }) {
  const { title, subtitle, categories, cta } = dictionary[language] ?? dictionary.es;
  const [activeCategory, setActiveCategory] = useState(categories[0].id);

  const activeData = useMemo(
    () => categories.find((category) => category.id === activeCategory) ?? categories[0],
    [activeCategory, categories]
  );

  return (
    <section className="skills" id="skills">
      <div className="section-heading">
        <h2 className="section-heading__title">{title}</h2>
        <div className="section-heading__accent" />
      </div>
      <p className="skills__subtitle">{subtitle}</p>
      <div className="skills__filters" role="tablist" aria-label={title}>
        {categories.map(({ id, label }) => (
          <button
            key={id}
            type="button"
            className={`skills__chip ${id === activeCategory ? "skills__chip--active" : ""}`}
            onClick={() => setActiveCategory(id)}
            role="tab"
            aria-selected={id === activeCategory}
          >
            {label}
          </button>
        ))}
      </div>
      <article className="skills__panel" role="tabpanel">
        <header className="skills__panel-header">
          <h3>{activeData.label}</h3>
          <p>{activeData.description}</p>
        </header>
        <ul className="skills__list">
          {activeData.skills.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <a className="skills__cta" href={activeData.link}>
          {cta}
          <span aria-hidden="true"> →</span>
        </a>
      </article>
    </section>
  );
}

export default Skills;
