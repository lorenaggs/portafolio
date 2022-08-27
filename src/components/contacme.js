function contactme() {
  return (
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
          <label htmlFor="" placeholder="ej. Maria Sanchez" className="label">
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
  );
}

export default contactme;
