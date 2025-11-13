function Challenge() {
    const achievements = [
        {
            title: "Migración a microfrontends Angular",
            detail: "Reducción del tiempo de despliegue en 30% y entregas independientes por dominio.",
        },
        {
            title: "Componentes reutilizables",
            detail: "Biblioteca de UI que aceleró la entrega de funcionalidades en 25%.",
        },
        {
            title: "Arquitectura serverless",
            detail: "Procesamiento de datos con AWS Lambda y DynamoDB optimizando costos operativos.",
        },
        {
            title: "Diseño centrado en el usuario",
            detail: "Interfaces responsive y accesibles que mejoraron la conversión y la satisfacción.",
        },
    ];

    const projects = [
        {
            title: "Productos financieros",
            description: "Crear y buscar productos financieros.",
            url: "https://financial-products-lg.web.app/",

        },
        {
            title: "Gestion de sala de reuniones",
            description: "Crear y gestionar salas de reuniones.",
            url: "https://github.com/lorenaggs/gestion-sala-reuniones-lg",
        },
        {
            title: "Gestión de inventario"
            , description: "Crear y gestionar inventario de productos.",
            url: "https://github.com/lorenaggs/gestion-inventario-lg",
        },

        {
            title: "Pokédex Explorer",
            description: "Buscador de Pokémons con filtros avanzados y favoritos.",
            url: "https://pokemons-beta.vercel.app/",
        },
        {
            title: "Open Spaces Shop",
            description: "E-commerce responsive construido con HTML, SCSS y GSAP.",
            url: "https://lorenaggs.github.io/adalab-open-space-html-scss/",
        },
        {
            title: "Awesome Profile Cards",
            description: "Generador de tarjetas personalizadas con React y Node.",
            url: "https://lorenaggs.github.io/adalab-tarjetas-presentacion-JS/",
        },
        {
            title: "Migration JS to React",
            description: "Refactorización de SPA para mejorar mantenibilidad y rendimiento.",
            url: "https://lorenaggs.github.io/adalab-tarjetas-migracion-REACT/",
        },
        {
            title: "Owen Wilson Movies",
            description: "Buscador de películas con filtrado y favoritos.",
            url: "https://lorenaggs.github.io/adalab-movies-owen-wilson-REACT/",
        },
    ];

    return (
        <section className="achievements">
            <div className="section-heading" id="logros">
                <h2 className="section-heading__title">Logros destacados</h2>
                <div className="section-heading__accent"/>
            </div>
            <ul className="achievements__list">
                {achievements.map(({title, detail}) => (
                    <li key={title} className="achievements__item">
                        <h3>{title}</h3>
                        <p>{detail}</p>
                    </li>
                ))}
            </ul>

            <div className="section-heading achievements__portfolio-heading" id="profile">
                <h2 className="section-heading__title">Portafolio</h2>
                <a rel="noreferrer" target="_blank" href="https://github.com/lorenaggs">
                    <i className="fa-brands fa-github"></i>
                </a>
            </div>
            <div className="project__grid">
                {projects.map(({title, description, url}) => (
                    <a key={title} rel="noreferrer" target="_blank" href={url} className="project__card">
                        <div className="project__card-content">
                            <h3>{title}</h3>
                            <p>{description}</p>
                            <span className="project__link">Ver proyecto</span>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}

export default Challenge;
