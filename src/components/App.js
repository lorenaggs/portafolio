import { useState } from "react";
import "animate.css";
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

import avatar from "../images/avatar.png";
import "../styles/App.scss";
import imageadalab from "../images/logo-adalab.png";
import imageopenspaces from "../images/openspaces.png";
import imageaboutus from "../images/aboutus.png";
import imagespotify from "../images/spotify.png";
import imageowenwilson from "../images/owenwilson.png";
import imagephrasefriends from "../images/phrasefriends.png";
import imageawesomeprofile from "../images/awesomeprofile.png";
import imagecocktails from "../images/cocktails.png";

function App() {
  const [showMenu, setCloseMenu] = useState(false);
  // const [goSection, setGoSection] = useState();

  const handleCloseMenu = () => {
    setCloseMenu(!showMenu);
  };

  const handleGoSection = () => {
    handleCloseMenu();
    // setGoSection(goSection);
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
          <div className="menu__container">
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
          </div>
        </div>
      </header>
      <main className="main">
        <div className="main__sections">
          <section className="banner">
            <div className="banner__iam">
              <div className="banner__text">
                I am &nbsp;
                <span className="banner__text-write"> a creative.</span>
              </div>
              <p className="banner__text">frontend Developer</p>
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
                Hi, my name is Lorena Guartazaca, I am a professional who is
                reinventing herself in web developer with skills in backend.
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
            </section>
          </section>
          <section className="experience" id="experience">
            <h2 className="title">Experience</h2>
            <div className="experience__contain">
              <div className="textexperience adalab">
                <img className="imageadalab" src={imageadalab} alt="Adalab" />
                <div>
                  <h3 className="textexperience">
                    Adalab - Desarrollo front-end
                  </h3>
                  <p className="textexperience date">
                    feb. 2022 - actualidad ??? 4 meses
                  </p>
                </div>
              </div>
              <p className="textexperience">
                Programa integral de formaci??n que aporta los conocimientos y
                herramientas para el desarrollo web front-end.
              </p>
            </div>
            <div className="experience__contain">
              <div className="textexperience adalab"></div>
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
              <a
                rel="noreferrer"
                target="_blank"
                href="https://lorenaggs.github.io/adalab-open-space-html-scss/"
              >
                <img
                  className="imageprofile"
                  src={imageopenspaces}
                  alt="Open Spaces"
                />
              </a>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://lorenaggs.github.io/adalab-project-about-us-HTML-SCSS/"
              >
                <img
                  className="imageprofile"
                  src={imageaboutus}
                  alt="About-us"
                />
              </a>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://lorenaggs.github.io/adalab-spotify-HTML-CSS/"
              >
                <img
                  className="imageprofile"
                  src={imagespotify}
                  alt="Spotify"
                />
              </a>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://lorenaggs.github.io/adalab-movies-owen-wilson-REACT/"
              >
                <img
                  className="imageprofile"
                  src={imageowenwilson}
                  alt="Owen Wilson"
                />
              </a>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://lorenaggs.github.io/adalab-frases-de-friends-JS/"
              >
                <img
                  className="imageprofile"
                  src={imagephrasefriends}
                  alt="Phrase friends"
                />
              </a>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://lorenaggs.github.io/adalab-cocteles-JS/"
              >
                <img
                  className="imageprofile"
                  src={imagecocktails}
                  alt="Coktails"
                />
              </a>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://lorenaggs.github.io/adalab-tarjetas-presentacion-JS/"
              >
                <img
                  className="imageprofile"
                  src={imageawesomeprofile}
                  alt="Awesome Profile"
                />
              </a>

              <a
                rel="noreferrer"
                target="_blank"
                href="https://lorenaggs.github.io/adalab-tarjetas-migracion-REACT/"
              >
                <img
                  className="imageprofile"
                  src={imagemigration}
                  alt="Migration JS-REACT"
                />
              </a>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://module-4-team-8.herokuapp.com/"
              >
                <img className="imageprofile" src={imageback} alt="Backend" />
              </a>
            </div>
          </section>
          <section className="contactme" id="contactme">
            <h2 className="title">Contact me</h2>
            <div className="contactme__container">
              <div className="contactmenow">
                <section className="main_imageprofilecontac contactme__circle"></section>
                <div className="contactme__text">
                  Contact
                  <span className="contactme__textcolor"> me now</span>
                </div>
              </div>
            </div>
            {/* <form action="">
              <label htmlFor="">Nombre</label>
              <input type="text" />
              <label htmlFor="">Apellido</label>
              <input type="text" />
              <label htmlFor="">Email</label>
              <input type="email" />
              <label htmlFor="">Escribe un mensaje</label>
              <input type="text" />
              <button>Enviar</button>
            </form> */}
          </section>
        </div>
        <div className="menu__tablet">
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
        </div>
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
