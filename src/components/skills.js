function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="section-heading">
        <h2 className="section-heading__title">Habilidades & stack</h2>
        <div className="section-heading__accent" />
      </div>
      <section className="skills__grid">
        <article className="skills__card">
          <h3 className="skills__card-title">Frontend</h3>
          <ul className="skills__list">
            <li>Angular 18, React 18</li>
            <li>TypeScript, JavaScript (ES2023+)</li>
            <li>State management con NgRx, Redux y RxJS</li>
            <li>HTML5, CSS3, SCSS, Tailwind, Bootstrap</li>
            <li>Microfrontends, Module Federation</li>
          </ul>
        </article>
        <article className="skills__card">
          <h3 className="skills__card-title">Backend & DevOps</h3>
          <ul className="skills__list">
            <li>Node.js, Express, REST APIs, JWT</li>
            <li>PostgreSQL, MySQL, DynamoDB</li>
            <li>AWS Lambda, API Gateway, S3</li>
            <li>Serverless Framework, Docker</li>
            <li>CI/CD con GitHub Actions</li>
          </ul>
        </article>
        <article className="skills__card">
          <h3 className="skills__card-title">Calidad & Colaboración</h3>
          <ul className="skills__list">
            <li>Testing con Jest, Jasmine y Postman</li>
            <li>Linting y formateo (ESLint, Prettier)</li>
            <li>Diseño UX/UI con Figma y accesibilidad WCAG</li>
            <li>Metodologías ágiles (Scrum, Kanban)</li>
            <li>Gestión con Git, Jira, Confluence</li>
          </ul>
        </article>
        <article className="skills__card">
          <h3 className="skills__card-title">Soft Skills</h3>
          <ul className="skills__list">
            <li>Liderazgo técnico y mentoring</li>
            <li>Comunicación efectiva y storytelling</li>
            <li>Resolución creativa de problemas</li>
            <li>Aprendizaje continuo y curiosidad</li>
            <li>Facilitación de ceremonias ágiles</li>
          </ul>
        </article>
      </section>
    </section>
  );
}

export default Skills;
