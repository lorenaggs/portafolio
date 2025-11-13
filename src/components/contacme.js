import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

function Contactme() {
  const [captchaValid, setCaptchaValid] = useState(null);
  const [userValid, setUserValid] = useState(false);
  const [formValues, setFormValues] = useState({
    user_name: "",
    user_email: "",
    user_message: "",
  });

  const captcha = useRef(null);

  const onChange = (value) => {
    setCaptchaValid(Boolean(value));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
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
      setFormValues({
        user_name: "",
        user_email: "",
        user_message: "",
      });
      captcha.current.reset();
      setCaptchaValid(null);
    } else {
      setUserValid(false);
      setCaptchaValid(false);
    }
  };

  const isFormComplete = Object.values(formValues).every((value) => value.trim().length > 0);
  const canSubmit = Boolean(isFormComplete && captchaValid);

  return (
    <section className="contactme" id="contactme">
      <div className="contactme__container">
        <div className="contactmenow">
          <section className="main_imageprofilecontac contactme__circle"></section>
          <h2 className="contactme__textcolor">
              Conectemos
          </h2>
        </div>
      </div>
      {!userValid ? (
        <form className="form" onSubmit={sendMail}>
          <div className="labelform">
            <label className="label" htmlFor="user_name">
              Nombre completo
            </label>
            <input
              id="user_name"
              type="text"
              className="inputext"
              name="user_name"
              value={formValues.user_name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="labelform">
            <label className="label" htmlFor="user_email">
              Email
            </label>
            <input
              id="user_email"
              type="email"
              className="inputext"
              name="user_email"
              value={formValues.user_email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="labelform">
            <label className="label" htmlFor="user_message">
              Cuéntame sobre tu proyecto
            </label>
            <textarea
              id="user_message"
              className="inputext textarea"
              rows="6"
              name="user_message"
              value={formValues.user_message}
              onChange={handleInputChange}
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
            <div className="error-captcha">Por favor verifica que no eres un robot.</div>
          )}
          <button className="btnsent" type="submit" disabled={!canSubmit}>
            Enviar mensaje
          </button>
        </form>
      ) : (
        <p className="validateMsg">¡Gracias! Me pondré en contacto contigo muy pronto.</p>
      )}
    </section>
  );
}

export default Contactme;
