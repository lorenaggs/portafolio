import imagereact from "../images/react.png";
import imagehtml from "../images/html.png";
import imagecss from "../images/css.png";
import imagesass from "../images/sass.png";
import imagejavascript from "../images/javascript.png";
import imagenode from "../images/node.png";
import imagegithub from "../images/github.png";
import "../styles/App.scss";
import imagebootstrap from "../images/bootstrap.png";
import avatar from "../images/avatar.png";
// import imageadalab from "../images/logo-adalab.png";
// import imageopenspaces from "../images/openspaces.png";
// import imageaboutus from "../images/aboutus.png";
// import imagespotify from "../images/spotify.png";
// import imageowenwilson from "../images/owenwilson.png";
// import imagephrasefriends from "../images/phrasefriends.png";
// import imageawesomeprofile from "../images/awesomeprofile.png";
// import imagecocktails from "../images/cocktails.png";

function App() {
  return (
    <div className="container">
      <div className="container__sinfooter">
        <header className="header">
          <h1 className="name">Lorena</h1>
          <h2 className="lastName">Guartazaca</h2>
        </header>

        <div className="containerApp">
          <div className="App">
            <main className="main">
              <section className="main_imageprofile">
                <div className="imageMe"></div>
              </section>
            </main>
            <div className="main__description">
              I am &nbsp;
              <span className="write"> a creative.</span>
            </div>
            <p className="main__description">frontend Developer</p>
            <div className="descriptionmenu">
              <section className="main_section aboutme" id="aboutme">
                <div>
                  <section className="main_containertitle">
                    <h2 className="main_title">About me</h2>
                    <div className="rectangle pink"></div>
                  </section>
                  <p className="main_contain">
                    Hi, my name is Lorena Guartazaca, I am a professional who is
                    reinventing herself in web developer with skills in backend.
                  </p>
                  <div className="rectangle blue"></div>
                </div>
                <img className="avatar" src={avatar} alt="avatar" />
              </section>
              <section className="main_section" id="skills">
                <h2 className="main_title skills">Skills</h2>
                <div className="main_contain-skills">
                  <img src={imagereact} alt="Icon React" />
                  <img src={imagecss} alt="Icon Css" />
                  <img src={imagesass} alt="Icon Sass" />
                  <img src={imagejavascript} alt="Icon JavaScript" />
                  <img src={imagenode} alt="Icon Node" />
                  <img src={imagegithub} alt="Icon Github" />
                  <img src={imagehtml} alt="Icon Html" />
                  <img src={imagebootstrap} alt="Icon Bootstrap" />
                </div>
              </section>
              {/* <section className="main_section" id="experience">
                <h2 className="main_title">Experience</h2>
                <div className="main_contain experience">
                  <div className="textexperience adalab">
                    <img
                      className="imageadalab"
                      src={imageadalab}
                      alt="Adalab"
                    />
                    <div>
                      <h3 className="textexperience">
                        Adalab - Desarrollo front-end
                      </h3>
                      <p className="textexperience date">
                        feb. 2022 - actualidad • 4 meses
                      </p>
                    </div>
                  </div>
                  <p className="textexperience">
                    Programa integral de formación que aporta los conocimientos
                    y herramientas para el desarrollo web front-end.
                  </p>
                </div>
                <div className="main_contain experience">
                  <div className="textexperience adalab"></div>
                </div>
              </section>
              <section className="main_section" id="profile">
                <h2 className="main_title">Profile</h2>
                <div className="main_contain profile">
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
                    href="https://lorenaggs.github.io/adalab-tarjetas-presentacion-JS/create.html"
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
                    href="https://lorenaggs.github.io/adalab-cocteles-JS/"
                  >
                    <img
                      className="imageprofile"
                      src={imagecocktails}
                      alt="Coktails"
                    />
                  </a>
                </div>
              </section>
              <section className="main_section" id="contactme">
                <h2 className="main_title">Contact me</h2>
                <div className="main_contain">
                  <div className="contactmenow">
                    <section className="main_imageprofilecontac contactme"></section>
                    <div className="contactme__text">
                      Contact
                      <span className="contactme__textcolor">me now</span>
                    </div>
                  </div>
                </div>
              </section> */}
            </div>
          </div>
          <ul className="menu">
            <a className="menu__sections" href="./App.js#contactme">
              contact
            </a>
            <a className="menu__sections" href="./App.js#profile">
              portafolio
            </a>
            <a className="menu__sections" href="./App.js#experience">
              experience
            </a>
            <a className="menu__sections" href="./App.js#skills">
              skills
            </a>
            <a className="menu__sections" href="./App.js#aboutme">
              about_me
            </a>
          </ul>
        </div>
      </div>

      <section className="icons">
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
          href="https://github.com/lorenaggs?tab=repositories"
        >
          <i className="fa-brands fa-github"></i>
        </a>
      </section>
    </div>
  );
}

export default App;
