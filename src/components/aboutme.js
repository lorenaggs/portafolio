import avatar from "../images/avatar.png";

function aboutme() {
  return (
    <section className="aboutme" id="aboutme">
      <div className="aboutme__container">
        <section className="aboutme__label">
          <h2 className="title">About me</h2>
          <div className="aboutme__rectanglepink"></div>
        </section>
        <p className="aboutme__text">
          Hola, soy Lorena Guartazaca, una profesional que se esta reinventando
          como desarrolladora web con habilidad tanto en frontend como backend
          con muchas ganas de seguir aprendiendo y formandose.
        </p>
        <div className="aboutme__rectangleblue"></div>
      </div>
      <img className="avatar" src={avatar} alt="avatar" />
    </section>
  );
}

export default aboutme;
