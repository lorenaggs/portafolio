import {useMemo, useState} from "react";

const dictionary = {
    es: {
        title: "Logros destacados",
        githubLabel: "Ver GitHub",
        defaultCta: "Ver proyecto",
        metrics: [
            {label: "Despliegues más rápidos", value: "30%", description: "Reducción tras migrar a microfrontends."},
            {label: "Entrega acelerada", value: "+25%", description: "Tiempo ganado lanzando nuevas funcionalidades."},
            {label: "Satisfacción cliente", value: "4.7/5", description: "Encuestas automatizadas post-venta."},
            {label: "Costos cloud", value: "-20%", description: "Optimización con arquitecturas serverless."},
        ],
        portfolioTitle: "Portafolio",
        filters: [
            {id: "all", label: "Todos"},
            {id: "microfrontends", label: "Microfrontends"},
            {id: "fintech", label: "Fintech"},
            {id: "automation", label: "Automatización"},
            {id: "ux", label: "UX/UI"},
        ],
        projects: [
            {
                title: "OpciónAuto Plataforma",
                description:
                    "Migración de la plataforma principal a microfrontends con Angular 18, monorepositorios Nx y federación de módulos.",
                stack: "Angular · Nx · Pusher · Pusher · Microfrontend · Monorepositorios",
                url: "",
                categories: ["microfrontends", "automation"],
                cta: "",
            },
            {
                title: "uTransfer",
                description:
                    "Plataforma fintech con microservicios serverless para transferencias instantáneas, MFA y auditoría en tiempo real.",
                stack: "TypeScript · AWS Lambda · DynamoDB",
                url: "",
                categories: ["fintech", "automation"],
                cta: "",
            },
            {
                title: "Productos Financieros",
                description:
                    "Buscador de productos financieros con filtros dinámicos, favoritos y exportables para equipos comerciales.",
                stack: "React · Tailwind · Firebase",
                url: "https://financial-products-lg.web.app/",
                categories: ["fintech", "ux"],
                cta: "Explorar",
            },
            {
                title: "Gestión de salas de reuniones",
                description: "Gestión integral de salas de reuniones con reservas, check-in digital y reportes de ocupación.",
                stack: "Kotlin, Android SDK, SQLite · Shared Preferences · Mapbox",
                url: "https://github.com/lorenaggs/gestion-sala-reuniones-lg",
                categories: ["automation"],
                cta: "Explorar",
            },
            {
                title: "Control de Inventario",
                description: "Inventario omnicanal con alertas de stock, costos y reportes para operaciones logísticas.",
                stack: "Flutter · Dart · Material design · sqflite · Shared Preferences · Mapbox",
                url: "https://github.com/lorenaggs/gestion-inventario-lg",
                categories: ["automation"],
                cta: "Explorar",
            },
            {
                title: "Pokédex Explorer",
                description: "Buscador con filtros avanzados, favoritos y soporte offline pensado para entornos mobile-first.",
                stack: "Next.js · Tailwind · Zustand",
                url: "https://pokemons-beta.vercel.app/",
                categories: ["ux"],
                cta: "Explorar",
            },
            {
                title: "Open Spaces Shop",
                description: "E-commerce responsive construido con HTML semántico, SCSS modulares y animaciones GSAP.",
                stack: "HTML · SCSS · GSAP",
                url: "https://lorenaggs.github.io/adalab-open-space-html-scss/",
                categories: ["ux"],
                cta: "Explorar",
            },
            {
                title: "Awesome Profile Cards",
                description: "Generador de tarjetas personalizadas con React, almacenamiento en API y descarga inmediata.",
                stack: "React · Node.js · Express",
                url: "https://lorenaggs.github.io/adalab-tarjetas-presentacion-JS/",
                categories: ["ux"],
                cta: "Explorar",
            },
            {
                title: "Migration JS to React",
                description: "Refactorización de SPA legacy para mejorar mantenibilidad, accesibilidad y performance.",
                stack: "React · JavaScript · CSS",
                url: "https://lorenaggs.github.io/adalab-tarjetas-migracion-REACT/",
                categories: ["ux"],
                cta: "Explorar",
            },
            {
                title: "Owen Wilson Movies",
                description: "Buscador de películas con filtrado avanzado, gestión de favoritos y estados sincronizados.",
                stack: "React · CSS · REST API",
                url: "https://lorenaggs.github.io/adalab-movies-owen-wilson-REACT/",
                categories: ["ux"],
                cta: "Explorar",
            },
        ],
    },
    en: {
        title: "Key achievements",
        githubLabel: "See GitHub",
        defaultCta: "View project",
        metrics: [
            {
                label: "Faster deployments",
                value: "30%",
                description: "After migrating to a microfrontend architecture."
            },
            {
                label: "Delivery speed-up",
                value: "+25%",
                description: "Shipping new capabilities with reusable components."
            },
            {label: "Customer satisfaction", value: "4.7/5", description: "Automated post-sale surveys and analytics."},
            {label: "Cloud spend", value: "-20%", description: "Serverless workloads optimised for real usage."},
        ],
        portfolioTitle: "Portfolio",
        filters: [
            {id: "all", label: "All"},
            {id: "microfrontends", label: "Microfrontends"},
            {id: "fintech", label: "Fintech"},
            {id: "automation", label: "Automation"},
            {id: "ux", label: "UX/UI"},
        ],
        projects: [
            {
                title: "OpciónAuto Platform",
                description:
                    "End-to-end migration to Angular 18 microfrontends with Nx monorepos, module federation and realtime quoting.",
                stack: "Angular · Nx · Pusher · Pusher · Microfrontend · Monorepos ",
                url: "",
                categories: ["microfrontends", "automation"],
                cta: "",
            },
            {
                title: "uTransfer Banking",
                description:
                    "Fintech experience powered by serverless microservices for instant transfers, MFA and audit trails.",
                stack: "TypeScript · AWS Lambda · DynamoDB",
                url: "",
                categories: ["fintech", "automation"],
                cta: "",
            },
            {
                title: "Financial Products Search",
                description:
                    "Dynamic product finder with smart filters, saved favourites and exportable reports for sales teams.",
                stack: "React · Tailwind · Firebase",
                url: "https://financial-products-lg.web.app/",
                categories: ["fintech", "ux"],
                cta: "Explore",
            },
            {
                title: "Meeting Rooms Hub",
                description: "Room management suite featuring bookings, digital check-in and data-driven utilisation insights.",
                stack: "Kotlin, Android SDK, SQLite · Shared Preferences · Mapbox",
                url: "https://github.com/lorenaggs/gestion-sala-reuniones-lg",
                categories: ["automation"],
                cta: "Explore",
            },
            {
                title: "Inventory Control",
                description: "Omnichannel inventory tracking with real-time alerts, costs and operational dashboards.",
                stack: "Flutter · Dart · Material design · sqflite · Shared Preferences · Mapbox",
                url: "https://github.com/lorenaggs/gestion-inventario-lg",
                categories: ["automation"],
                cta: "Explore",
            },
            {
                title: "Pokédex Explorer",
                description: "Search app with advanced filters, favourites and offline support geared for mobile-first users.",
                stack: "Next.js · Tailwind · Zustand",
                url: "https://pokemons-beta.vercel.app/",
                categories: ["ux"],
                cta: "Explore",
            },
            {
                title: "Open Spaces Shop",
                description: "Responsive e-commerce crafted with semantic HTML, modular SCSS and GSAP microinteractions.",
                stack: "HTML · SCSS · GSAP",
                url: "https://lorenaggs.github.io/adalab-open-space-html-scss/",
                categories: ["ux"],
                cta: "Explore",
            },
            {
                title: "Awesome Profile Cards",
                description: "Custom card generator with React UI, backend storage and instant sharing capabilities.",
                stack: "React · Node.js · Express",
                url: "https://lorenaggs.github.io/adalab-tarjetas-presentacion-JS/",
                categories: ["ux"],
                cta: "Explore",
            },
            {
                title: "Migration JS to React",
                description: "Legacy SPA refactor improving maintainability, accessibility and performance scores.",
                stack: "React · JavaScript · CSS",
                url: "https://lorenaggs.github.io/adalab-tarjetas-migracion-REACT/",
                categories: ["ux"],
                cta: "Explore",
            },
            {
                title: "Owen Wilson Movies",
                description: "Movie search engine with advanced filtering, favourite lists and synced state management.",
                stack: "React · CSS · REST API",
                url: "https://lorenaggs.github.io/adalab-movies-owen-wilson-REACT/",
                categories: ["ux"],
                cta: "Explore",
            },
        ],
    },
};

function Challenge({language}) {
    const copy = dictionary[language] ?? dictionary.es;
    const [filter, setFilter] = useState("all");

    const filteredProjects = useMemo(() => {
        if (filter === "all") {
            return copy.projects;
        }
        return copy.projects.filter((project) => project.categories.includes(filter));
    }, [copy.projects, filter]);

    return (
        <section className="achievements">
            <div className="section-heading" id="logros">
                <h2 className="section-heading__title">{copy.title}</h2>
                <div className="section-heading__accent"/>
            </div>
            <section className="achievements__metrics">
                {copy.metrics.map(({label, value, description}) => (
                    <article key={label} className="achievements__metric">
                        <span className="achievements__value">{value}</span>
                        <p className="achievements__label">{label}</p>
                        <p className="achievements__description">{description}</p>
                    </article>
                ))}
            </section>
            <div className="section-heading achievements__portfolio-heading" id="profile">
                <div className="achievements__heading-primary">
                    <h2 className="section-heading__title">{copy.portfolioTitle}</h2>
                    <a rel="noreferrer" target="_blank" href="https://github.com/lorenaggs"
                       className="achievements__github">
                        <i className="fa-brands fa-github" aria-hidden="true"></i>
                        <span>{copy.githubLabel}</span>
                    </a>
                </div>
                <div className="achievements__filters" role="tablist" aria-label={copy.portfolioTitle}>
                    {copy.filters.map(({id, label}) => (
                        <button
                            key={id}
                            type="button"
                            className={`achievements__chip ${filter === id ? "achievements__chip--active" : ""}`}
                            onClick={() => setFilter(id)}
                            role="tab"
                            aria-selected={filter === id}
                        >
                            {label}
                        </button>
                    ))}
                </div>
            </div>
            <div className="project__grid">
                {filteredProjects.map(({title, description, stack, url, cta}) => {
                    const isLink = Boolean(url && url.trim().length > 0);
                    const Wrapper = isLink ? "a" : "div";
                    const wrapperProps = isLink
                        ? {
                            href: url,
                            rel: "noreferrer",
                            target: "_blank",
                            className: "project__card",
                        }
                        : {
                            className: "project__card project__card--static",
                        };

                    return (
                        <Wrapper key={title} {...wrapperProps}>
                            <div className="project__card-content">
                                <header>
                                    <h3>{title}</h3>
                                    <p>{description}</p>
                                </header>
                                <footer>
                                    <span className="project__stack">{stack}</span>
                                    {isLink ? (
                                        <div className="project__icon-link-wrapper">
                                            <span className="project__icon-link" aria-label={cta?.trim() || "Ver proyecto"}>
                                            <i className="fa-solid fa-arrow-up-right-from-square"
                                               aria-hidden="true"></i>
                                        </span>
                                        </div>

                                    ) : null}
                                </footer>
                            </div>
                        </Wrapper>
                    );
                })}
            </div>
        </section>
    );
}

export default Challenge;
