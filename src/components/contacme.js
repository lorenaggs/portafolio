import React from "react";
import emailjs from "@emailjs/browser";

function contactme() {
  const sendMail = (event) => {
    event.preventDefault();
    emailjs
      .sendForm(
        "service_6w7bzyc",
        "template_6zeftdv",
        event.target,
        "T4W92TuixXAZ2VZTT"
      )
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };
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

      <form action="" className="form" onSubmit={sendMail}>
        <div className="labelform">
          <label htmlFor="" placeholder="ej. Maria Sanchez" className="label">
            Nombre completo
          </label>
          <input type="text" className="inputext" name="user_name" required />
        </div>
        <div className="labelform">
          <label htmlFor="" placeholder="ej. mariasanchez@hotmail.com">
            Email
          </label>
          <input type="email" className="inputext" name="user_email" required />
        </div>
        <div className="labelform">
          <label htmlFor="">Escribe un mensaje</label>
          <textarea
            type="text"
            className="inputext"
            rows="10"
            name="user_message"
            required
          />
        </div>
        <button className="btnsent">Enviar</button>
      </form>
    </section>
  );
}

export default contactme;
