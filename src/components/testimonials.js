const copy = {
  es: {
    title: "Testimonios y referencias",
    subtitle:
      "Historias reales de líderes con los que he colaborado en proyectos de alta complejidad.",
    testimonials: [
      {
        name: "Raidel Berrillo",
        role: "Jefe Tecnología - OpcionAuto",
        quote:
          "Lorena, es una persona abierta a cambios, siempre está explorando en el mundo del desarrollo web, principalmente en el mundo del frontend; por lo que la hace estar sobre las últimas tecnologías. Es aquella persona siempre atenta a las críticas constructivas. Digno de trabajar con ella, ya que hace que el ambiente sea alegre, pero a su vez comprometida con su trabajo. Buena amiga y excelente subordinada, estoy más que agradecido de la vida por haber tenido la oportunidad de trabajar con ella.\n",
        contact: "+593 989142730",
      },
      /*{
        name: "David de la Houssaye",
        role: "Gerente · EOS Ecuador",
        quote:
          "Destaco su capacidad para detectar mejoras de negocio y traducirlas en soluciones digitales con métricas claras. Es estratégica y muy enfocada en la experiencia del usuario.",
        contact: "+593 985637081",
      },
      {
        name: "Leonardo Medina",
        role: "Software Engineer · Galileo",
        quote:
          "Tiene un dominio excepcional de Angular y AWS. Levantó pipelines serverless desde cero y documentó cada decisión para que el equipo pueda mantenerlo fácilmente.",
        contact: "+593 983973845",
      },*/
    ],
  },
  en: {
    title: "Testimonials & references",
    subtitle:
      "Real stories from leaders I supported while shipping complex, high-impact products.",
    testimonials: [
      {
        name: "Raidel Berrillo",
        role: "Head of Technology - OpcionAuto",
        quote: "\"Lorena is open to change and is always exploring the world of web development, especially frontend development, which keeps her up-to-date with the latest technologies. She's always attentive to constructive criticism. It's a pleasure to work with her because she creates a cheerful atmosphere while remaining dedicated to her work. A good friend and an excellent subordinate, I'm incredibly grateful to have had the opportunity to work with her.",
        contact: "+593 989142730",
      },
      /*{
        name: "David de la Houssaye",
        role: "General Manager · EOS Ecuador",
        quote:
          "She quickly identifies business opportunities and translates them into digital solutions backed by metrics. Strategic and highly user-focused.",
        contact: "+593 985637081",
      },
      {
        name: "Leonardo Medina",
        role: "Software Engineer · Galileo",
        quote:
          "She masters Angular and AWS. She set up serverless pipelines from scratch and documented every decision so the team can maintain them easily.",
        contact: "+593 983973845",
      },*/
    ],
  },
};

function Testimonials({ language }) {
  const content = copy[language] ?? copy.es;

  return (
    <section className="testimonials" id="testimonials">
      <div className="section-heading">
        <h2 className="section-heading__title">{content.title}</h2>
        <div className="section-heading__accent" />
      </div>
      <p className="testimonials__subtitle">{content.subtitle}</p>
      <div className="testimonials__grid">
        {content.testimonials.map(({ name, role, quote, contact, linkedin }) => {
          const phone = contact.replace(/\D+/g, "");
          const href = phone ? `https://wa.me/${phone}` : undefined;

          return (
            <article key={name} className="testimonials__card">
              <div className="testimonials__quote">
                <span aria-hidden="true" className="testimonials__quote-icon testimonials__quote-icon--open">
                  “
                </span>
                <p>{quote}</p>
                <span aria-hidden="true" className="testimonials__quote-icon testimonials__quote-icon--close">
                  ”
                </span>
              </div>
              <footer className="testimonials__footer">
                <div>
                  <h3>{name}</h3>
                  <p>{role}</p>
                </div>
                {href ? (
                  <a
                    href={href}
                    className="testimonials__contact"
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Contactar a ${name} por WhatsApp`}
                  >
                    {contact}
                  </a>
                ) : (
                  <span className="testimonials__contact">{contact}</span>
                )}
              </footer>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Testimonials;

