import imageadalab from "../images/logo-adalab.png";
import imageeos from "../images/eosecuador.jpeg";
import imagealnusoft from "../images/alnusoft.jpeg";

function Experience() {
  return (
    <section className="experience" id="experience">
      <h2 className="title">Experience</h2>
      <div className="experience__contain">
        <div className="textexperience adalab">
          <img className="imageadalab" src={imagealnusoft} alt="Alnusoft" />
          <div>
            <h3 className="textexperience">Alnusoft - Desarrollo front-end</h3>
            <p className="textexperience date">jul. 2022 - actualidad</p>
          </div>
        </div>
        <p className="textexperience">
          Extracción de datos web de todo tipo de sitios web y aplicaciones
          móviles.
        </p>
        <ul className="textexperience-list">
          <li className="textexperience-list">Apify</li>
          <li className="textexperience-list">Cheerio</li>
          <li className="textexperience-list">Interfaz de programación DOM</li>
          <li className="textexperience-list">
            Conocimientos de vanilla Javascript.
          </li>
          <li className="textexperience-list">Typescript</li>
          <li className="textexperience-list">Control de versiones con Git.</li>
          <li className="textexperience-list">
            Herramientas de comunicación y trabajo en equipo: Telegram, Trello,
            GitHub.
          </li>
        </ul>
      </div>

      <div className="experience__contain">
        <div className="textexperience adalab">
          <img className="imageadalab" src={imageadalab} alt="Adalab" />
          <div>
            <h3 className="textexperience">Adalab - Desarrollo front-end</h3>
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
            Maquetación: HTML5, CSS3, Flexbox, CSS Grid, diseño responsive,
            SASS, animaciones y maquetación por componentes.
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
          <li className="textexperience-list">Control de versiones con Git.</li>
          <li className="textexperience-list">
            Experiencia en el desarrollo de proyectos usando metodologías ágiles
            - SCRUM.
          </li>
          <li className="textexperience-list">
            Herramientas de desarrollo: Atom, Gulp, Terminal.
          </li>
          <li className="textexperience-list">
            Herramientas de comunicación y trabajo en equipo: Slack, Trello,
            GitHub.
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
            Registros contables de ingresos, egresos, retenciones, asientos
            contables de ajustes usando sistemas informáticos
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Experience;
