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

import apify from "../images/apify.png";
import cheerio from "../images/cheerio.png";

function Skills() {
  return (
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
  );
}

export default Skills;
