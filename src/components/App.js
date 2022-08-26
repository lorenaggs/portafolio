import "../styles/App.scss";
import { useState } from "react";
import imagereact from "../images/react-original-wordmark.svg";
import imagehtml from "../images/html5.png";
import imagecss from "../images/css3.png";
import imagesass from "../images/sass-original.svg";
import imagejavascript from "../images/javascript-original.svg";
import imagenode from "../images/node.png";
import imagegithub from "../images/github.png";
import imagebootstrap from "../images/bootstrap.svg";
import imagefigma from "../images/figma.svg";
import imagegitbranch from "../images/git-ramas.svg";
import imagegulp from "../images/gulp.svg";
import imageheroku from "../images/heroku.svg";
import imagenpm from "../images/npm.svg";
import imagepostman from "../images/postman.png";
import imagescrum from "../images/scrum.png";
import imageslack from "../images/slack.svg";
import imagesqlite from "../images/sqlite.jpeg";
import imagevsc from "../images/visualstudiocodelogo.png";
import imagezeplin from "../images/zeplin.png";
import imageback from "../images/backend.png";
import imagemigration from "../images/migrationjsreact.png";
import apify from "../images/apify.png";
import cheerio from "../images/cheerio.png";

import avatar from "../images/avatar.png";
import imageadalab from "../images/logo-adalab.png";
import imageeos from "../images/eosecuador.jpeg";
import imageopenspaces from "../images/openspaces.png";
import imageaboutus from "../images/aboutus.png";
import imagespotify from "../images/spotify.png";
import imageowenwilson from "../images/owenwilson.png";
import imagephrasefriends from "../images/phrasefriends.png";
import imageawesomeprofile from "../images/awesomeprofile.png";
import imagecocktails from "../images/cocktails.png";
import imagePokemons from "../images/pokemons.png";
import imagealnusoft from "../images/alnusoft.jpeg";

function App() {
  const [showMenu, setCloseMenu] = useState(false);

  const handleCloseMenu = () => {
    setCloseMenu(!showMenu);
  };

  
  const handleGoSection = () => {
    handleCloseMenu();
  };

  return (
    <div>
      <header className="header">
        <div className="header__names">
          <h1 className="name">Lorena</h1>
          <h2 className="lastName">Guartazaca</h2>
        </div>
        <button className="btnshow" onClick={handleCloseMenu}>
          <i className="fa-solid fa-bars iconmenu"></i>
        </button>

        <div className={showMenu ? "menu__mobile" : "hidden"}>
          <button className="btnclose" title="close" onClick={handleCloseMenu}>
            <i className="fa-solid fa-x iconx"></i>
          </button>
          <nav className="menu__container">
            <a
              className="menu_mobilelist"
              href="#aboutme"
              onClick={handleGoSection}
            >
              About_me
            </a>
            <a
              className="menu_mobilelist"
              href="#skills"
              onClick={handleGoSection}
            >
              Skills
            </a>
            <a
              className="menu_mobilelist"
              href="#experience"
              onClick={handleGoSection}
            >
              Experience
            </a>
            <a
              className="menu_mobilelist"
              href="#profile"
              onClick={handleGoSection}
            >
              Portafolio
            </a>
            <a
              className="menu_mobilelist"
              href="#contactme"
              onClick={handleGoSection}
            >
              Contact_me
            </a>
          </nav>
        </div>
      </header>
      <main className="main">
        <div className="main__sections">
          <section className="banner">
            <div className="banner__iam">
              <div className="banner__text">
                Soy&nbsp;
                <span className="banner__text-write">una creativa.</span>
              </div>
              <p className="banner__text">desarrollara Frontend</p>
            </div>
            <section className="banner__image">
              <section className="banner__image-imageprofile">
                <div className="banner__image-imageMe"></div>
              </section>
            </section>
          </section>
          <section className="aboutme" id="aboutme">
            <div className="aboutme__container">
              <section className="aboutme__label">
                <h2 className="title">About me</h2>
                <div className="aboutme__rectanglepink"></div>
              </section>
              <p className="aboutme__text">
                Hola, soy Lorena Guartazaca, una profesional que se esta
                reinventando como desarrolladora web con habilidad tanto en
                frontend como backend con muchas ganas de seguir aprendiendo y
                formandose.
              </p>
              <div className="aboutme__rectangleblue"></div>
            </div>
            <img className="avatar" src={avatar} alt="avatar" />
          </section>
          <section className="skills" id="skills">
            <h2 className="title">Skills and tools</h2>
            <section className="skills__icons">
              <img
                className="skills__icons-image"
                src={imagereact}
                alt="Icon React"
                title="React"
              />
              <img
                className="skills__icons-image"
                src={imagecss}
                alt="Icon Css"
                title="Css"
              />
              <img
                className="skills__icons-image"
                src={imagesass}
                alt="Icon Sass"
                title="Sass"
              />
              <img
                className="skills__icons-image"
                src={imagejavascript}
                alt="Icon JavaScript"
                title="JavaScript"
              />

              <img
                className="skills__icons-image"
                src={imagenode}
                alt="Icon Node"
                title="Node"
              />
              <img
                className="skills__icons-image"
                src={imagegithub}
                alt="Icon Github"
                title="Github"
              />
              <img
                className="skills__icons-image"
                src={imagegitbranch}
                alt="Git"
                title="Git"
              />
              <img
                className="skills__icons-image"
                src={imagehtml}
                alt="Icon Html"
                title="Html"
              />
              <img
                className="skills__icons-image"
                src={imagebootstrap}
                alt="Icon Bootstrap"
                title="Bootstrap"
              />
              <img
                className="skills__icons-image"
                src={imagefigma}
                alt="Figma"
                title="Figma"
              />
              <img
                className="skills__icons-image"
                src={imagezeplin}
                alt="Zeplin"
                title="Zeplin"
              />
              <img
                className="skills__icons-image"
                src={imagegulp}
                alt="Gulp"
                title="Gulp"
              />
              <img
                className="skills__icons-image"
                src={imageheroku}
                alt="Heroku"
                title="Heroku"
              />
              <img
                className="skills__icons-image"
                src={imagenpm}
                alt="Npm"
                title="npm"
              />
              <img
                className="skills__icons-image"
                src={imagepostman}
                alt="Postman"
                title="Postman"
              />
              <img
                className="skills__icons-image"
                src={imageslack}
                alt="Slack"
                title="Slack"
              />
              <img
                className="skills__icons-image withskills"
                src={imagescrum}
                alt="Scrum"
                title="Scrum"
              />
              <img
                className="skills__icons-image withskills"
                src={imagesqlite}
                alt="SQLite"
                title="SQLite"
              />
              <img
                className="skills__icons-image"
                src={imagevsc}
                alt="VSC"
                title="VSC"
              />
              <img
                className="skills__icons-image"
                src={apify}
                alt="Apify"
                title="Apify"
              />
              <img
                className="skills__icons-image"
                src={cheerio}
                alt="Cheerio"
                title="Cheerio"
              />
            </section>
          </section>
          <section className="experience" id="experience">
            <h2 className="title">Experience</h2>
            <div className="experience__contain">
              <div className="textexperience adalab">
                <img
                  className="imageadalab"
                  src={imagealnusoft}
                  alt="Alnusoft"
                />
                <div>
                  <h3 className="textexperience">
                    Alnusoft - Desarrollo front-end
                  </h3>
                  <p className="textexperience date">jul. 2022 - actualidad</p>
                </div>
              </div>
              <p className="textexperience">
                Eztracción de datos web de todo tipo de sitios web y
                aplicaciones móviles.
              </p>
              <ul className="textexperience-list">
                <li className="textexperience-list">Apify</li>
                <li className="textexperience-list">Cheerio</li>
                <li className="textexperience-list">
                  Interfaz de programación DOM
                </li>
                <li className="textexperience-list">
                  Conocimientos de vanilla Javascript.
                </li>
                <li className="textexperience-list">Typescript</li>
                <li className="textexperience-list">
                  Control de versiones con Git.
                </li>
                <li className="textexperience-list">
                  Herramientas de comunicación y trabajo en equipo: Telegram,
                  Trello, GitHub.
                </li>
              </ul>
            </div>

            <div className="experience__contain">
              <div className="textexperience adalab">
                <img className="imageadalab" src={imageadalab} alt="Adalab" />
                <div>
                  <h3 className="textexperience">
                    Adalab - Desarrollo front-end
                  </h3>
                  <p className="textexperience date">
                    feb. 2022 - may. 2022 • 4 meses
                  </p>
                </div>
              </div>
              <p className="textexperience">
                Programa integral de formación que aporta los conocimientos y
                herramientas para el desarrollo web front-end.
              </p>
              <ul className="textexperience-list">
                <li className="textexperience-list">
                  Maquetación: HTML5, CSS3, Flexbox, CSS Grid, diseño
                  responsive, SASS, animaciones y maquetación por componentes.
                </li>
                <li className="textexperience-list">
                  Frameworks de desarrollo web: Bootstrap.
                </li>
                <li className="textexperience-list">
                  Conocimientos de vanilla Javascript.
                </li>
                <li className="textexperience-list">
                  ES6 y creación de SPAs sencillas con React
                </li>
                <li className="textexperience-list">
                  Control de versiones con Git.
                </li>
                <li className="textexperience-list">
                  Experiencia en el desarrollo de proyectos usando metodologías
                  ágiles - SCRUM.
                </li>
                <li className="textexperience-list">
                  Herramientas de desarrollo: Atom, Gulp, Terminal.
                </li>
                <li className="textexperience-list">
                  Herramientas de comunicación y trabajo en equipo: Slack,
                  Trello, GitHub.
                </li>
              </ul>
            </div>
            <div className="experience__contain">
              <div className="textexperience adalab">
                <img className="imageadalab" src={imageeos} alt="Adalab" />
                <div>
                  <h3 className="textexperience">
                    EcuadorQuest - Jefe de Operaciones
                  </h3>
                  <p className="textexperience date">ene. 2016 - actualidad</p>
                </div>
              </div>
              <ul className="textexperience-list">
                <li className="textexperience-list">
                  Manejo de sistemas electrónicos (facturación electrónica).
                </li>
                <li className="textexperience-list">
                  Registros contables de ingresos, egresos, retenciones,
                  asientos contables de ajustes usando sistemas informáticos
                </li>
              </ul>
            </div>
          </section>
          <section className="profile" id="profile">
            <div className="profile__label">
              <h2 className="title">Portafolio</h2>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://github.com/lorenaggs?tab=repositories"
              >
                <i className="fa-brands fa-github"></i>
              </a>
            </div>

            <div className="profile__container">
              <li className="container__project">
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://pokemons-beta.vercel.app/"
                >
                  <p className="descriptionproj">
                    Buscador de Pokemons conectada a una API.
                  </p>

                  <img
                    className="imageprofile"
                    src={imagePokemons}
                    alt="Pokemons"
                  />
                </a>
              </li>
              <li className="container__project">
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://lorenaggs.github.io/adalab-open-space-html-scss/"
                >
                  <p className="descriptionproj">
                    Maquetación de pagina de compras en linea HTLM y SASS.
                    Proyecto personal
                  </p>

                  <img
                    className="imageprofile"
                    src={imageopenspaces}
                    alt="Open Spaces"
                  />
                </a>
              </li>
              <li className="container__project">
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://lorenaggs.github.io/adalab-project-about-us-HTML-SCSS/"
                >
                  <p className="descriptionproj">
                    Maquetación de pagina acerca de nosotras usando HTML y SASS.
                    Proyecto de equipo
                  </p>
                  <img
                    className="imageprofile"
                    src={imageaboutus}
                    alt="About-us"
                  />
                </a>
              </li>
              <li className="container__project">
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://lorenaggs.github.io/adalab-spotify-HTML-CSS/"
                >
                  <p className="descriptionproj">
                    Maquetación de Spotify usando HTML y CSS. Proyecto de equipo
                  </p>
                  <img
                    className="imageprofile"
                    src={imagespotify}
                    alt="Spotify"
                  />
                </a>
              </li>
              <li className="container__project">
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://lorenaggs.github.io/adalab-movies-owen-wilson-REACT/"
                >
                  <p className="descriptionproj">
                    Buscador de películas de Owen Wilson creado con React.
                    Proyecto personal
                  </p>
                  <img
                    className="imageprofile"
                    src={imageowenwilson}
                    alt="Owen Wilson"
                  />
                </a>
              </li>
              <li className="container__project">
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://lorenaggs.github.io/adalab-frases-de-friends-JS/"
                >
                  <p className="descriptionproj">
                    Buscador de frases de amigos y añadir nueva frase realizado
                    con JavaScript. Proyecto personal
                  </p>
                  <img
                    className="imageprofile"
                    src={imagephrasefriends}
                    alt="Phrase friends"
                  />
                </a>
              </li>
              <li className="container__project">
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://lorenaggs.github.io/adalab-cocteles-JS/"
                >
                  <p className="descriptionproj">
                    Buscador de cocteles por nombre y agregar a favoritos
                    realizado en JavaScript. Proyecto personal
                  </p>
                  <img
                    className="imageprofile"
                    src={imagecocktails}
                    alt="Coktails"
                  />
                </a>
              </li>
              <li className="container__project">
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://lorenaggs.github.io/adalab-tarjetas-presentacion-JS/"
                >
                  <p className="descriptionproj">
                    Creación de tarjetas de presentación personalizadas con
                    HTML, SASS y JavaScript. Proyecto de Equipo
                  </p>
                  <img
                    className="imageprofile"
                    src={imageawesomeprofile}
                    alt="Awesome Profile"
                  />
                </a>
              </li>
              <li className="container__project">
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://lorenaggs.github.io/adalab-tarjetas-migracion-REACT/"
                >
                  <p className="descriptionproj">
                    Refactorizacion y migración a React JS. Proyecto de equipo
                  </p>
                  <img
                    className="imageprofile"
                    src={imagemigration}
                    alt="Migration JS-REACT"
                  />
                </a>
              </li>
              <li className="container__project">
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://module-4-team-8.herokuapp.com/"
                >
                  <p className="descriptionproj">
                    Creación de servidor para tarjetas de presentación con SQL.
                    Proyecto de equipo
                  </p>
                  <img className="imageprofile" src={imageback} alt="Backend" />
                </a>
              </li>
            </div>
          </section>
          <section className="contactme" id="contactme">
            {/* <h2 className="title">Contact me</h2> */}
            <div className="contactme__container">
              <div className="contactmenow">
                <section className="main_imageprofilecontac contactme__circle"></section>
                <h2 className="contactme__textcolor">
                  Contact me
                  {/* <span className="contactme__textcolor"> me now</span> */}
                </h2>
              </div>
            </div>

            <form action="" className="form">
              <div className="labelform">
                <label
                  htmlFor=""
                  placeholder="ej. Maria Sanchez"
                  className="label"
                >
                  Nombre completo
                </label>
                <input type="text" className="inputext" />
              </div>
              <div className="labelform">
                <label htmlFor="" placeholder="ej. mariasanchez@hotmail.com">
                  Email
                </label>
                <input type="email" className="inputext" />
              </div>
              <div className="labelform">
                <label htmlFor="">Escribe un mensaje</label>
                <textarea type="text" className="inputext" rows="10" />
              </div>
              <button className="btnsent">Enviar</button>
            </form>
          </section>
        </div>
        <nav className="menu__tablet">
          <a className="menu__sections" href="#contactme">
            contact
          </a>
          <a className="menu__sections" href="#profile">
            portafolio
          </a>
          <a className="menu__sections" href="#experience">
            experience
          </a>
          <a className="menu__sections" href="#skills">
            skills
          </a>
          <a className="menu__sections" href="#aboutme">
            about_me
          </a>
        </nav>
      </main>
      <footer className="icons">
        <div>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/lorena-guartazaca-b55a541b4/"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://api.whatsapp.com/send?phone=593994607544"
          >
            <i className="fa-brands fa-whatsapp"></i>
          </a>
        </div>
        <button className="btnback">
          <a className="backtotop" rel="noreferrer" href="/#">
            <p className="textback">Back</p>
            <i className="fa-solid fa-chevron-up backicon"></i>
          </a>
        </button>
      </footer>
    </div>
  );
}

export default App;
