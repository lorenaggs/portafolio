import imageback from "../images/backend.png";
import imagemigration from "../images/migrationjsreact.png";

import imageopenspaces from "../images/openspaces.png";
import imageaboutus from "../images/aboutus.png";
import imagespotify from "../images/spotify.png";
import imageowenwilson from "../images/owenwilson.png";
import imagephrasefriends from "../images/phrasefriends.png";
import imageawesomeprofile from "../images/awesomeprofile.png";
import imagecocktails from "../images/cocktails.png";
import imagePokemons from "../images/pokemons.png";

function Challenge() {
  return (
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

            <img className="imageprofile" src={imagePokemons} alt="Pokemons" />
          </a>
        </li>
        <li className="container__project">
          <a
            rel="noreferrer"
            target="_blank"
            href="https://lorenaggs.github.io/adalab-open-space-html-scss/"
          >
            <p className="descriptionproj">
              Maquetación de pagina de compras en linea HTLM y SASS. Proyecto
              personal
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
            <img className="imageprofile" src={imageaboutus} alt="About-us" />
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
            <img className="imageprofile" src={imagespotify} alt="Spotify" />
          </a>
        </li>
        <li className="container__project">
          <a
            rel="noreferrer"
            target="_blank"
            href="https://lorenaggs.github.io/adalab-movies-owen-wilson-REACT/"
          >
            <p className="descriptionproj">
              Buscador de películas de Owen Wilson creado con React. Proyecto
              personal
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
              Buscador de frases de amigos y añadir nueva frase realizado con
              JavaScript. Proyecto personal
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
              Buscador de cocteles por nombre y agregar a favoritos realizado en
              JavaScript. Proyecto personal
            </p>
            <img className="imageprofile" src={imagecocktails} alt="Coktails" />
          </a>
        </li>
        <li className="container__project">
          <a
            rel="noreferrer"
            target="_blank"
            href="https://lorenaggs.github.io/adalab-tarjetas-presentacion-JS/"
          >
            <p className="descriptionproj">
              Creación de tarjetas de presentación personalizadas con HTML, SASS
              y JavaScript. Proyecto de Equipo
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
  );
}

export default Challenge;
