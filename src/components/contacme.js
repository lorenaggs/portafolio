import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

function Contactme() {
  const [captchaValid, setCaptchaValid] = useState(null);
  const [userValid, setUserValid] = useState(false);

  const captcha = useRef(null);

  const onChange = () => {
    if (captcha.current.getValue()) {
      console.log("Hola");
    }
  };

  const sendMail = (event) => {
    event.preventDefault();
    if (captcha.current.getValue()) {
      emailjs.sendForm(
        "service_6w7bzyc",
        "template_6zeftdv",
        event.target,
        "T4W92TuixXAZ2VZTT"
      );
      setUserValid(true);
      setCaptchaValid(true);
    } else {
      setUserValid(false);
      setCaptchaValid(false);
    }
  };

  return (
    <section className="contactme" id="contactme">
      <div className="contactme__container">
        <div className="contactmenow">
          <section className="main_imageprofilecontac contactme__circle"></section>
          <h2 className="contactme__textcolor">
            Contact me
            {/* <span className="contactme__textcolor"> me now</span> */}
          </h2>
        </div>
      </div>
      {!userValid && (
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
            <input
              type="email"
              className="inputext"
              name="user_email"
              required
            />
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
          <div className="g-recapcha">
            <ReCAPTCHA
              ref={captcha}
              sitekey="6Lclrh8iAAAAANZi1qY9f2W6JxXDehbXmOtWWJSN"
              onChange={onChange}
            />
          </div>
          {captchaValid === false && (
            <div className="error-captcha">
              Por favor verifica que no eres un robot
            </div>
          )}
          <button className="btnsent">Enviar</button>
        </form>
      )}{
        userValid && <p className="validateMsg">
          Los datos han sido enviados correctamente
        </p>
      }
    </section>
  );
}

export default Contactme;
