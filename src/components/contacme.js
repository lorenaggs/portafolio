import React, { useCallback, useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

const dictionary = {
  es: {
    title: "Conectemos",
    intro: "Agenda una llamada, escríbeme por WhatsApp o comparte los detalles de tu proyecto.",
    form: {
      name: "Nombre completo",
      email: "Email",
      message: "Cuéntame sobre tu proyecto",
      submit: "Enviar mensaje",
      success: "¡Gracias! Me pondré en contacto contigo muy pronto.",
      captchaError: "Por favor verifica que no eres un robot.",
    },
    quickLinks: [
      {
        label: "WhatsApp",
        description: "Respuestas en menos de 24 horas",
        href: "https://wa.me/593994607544",
      },
      {
        label: "Email",
        description: "Escríbeme a lorenaggs2812@gmail.com",
        href: "mailto:lorenaggs2812@gmail.com",
      },
      {
        label: "Calendario",
        description: "Agenda una discovery call de 30 minutos",
        action: "calendar",
      },
      {
        label: "LinkedIn",
        description: "Conversemos sobre oportunidades",
        href: "https://www.linkedin.com/in/lorenaggs/",
      },
    ],
    calendar: {
      title: "Reserva tu discovery call",
      subtitle:
        "Selecciona un horario disponible para que conversemos sobre tus retos de producto y cómo puedo ayudarte.",
      close: "Cerrar agenda",
      inputLabel: "Selecciona fecha y hora",
      helper: "Las reuniones tienen una duración aproximada de 30 minutos.",
      submit: "Crear evento en Google Calendar",
      error: "Selecciona una fecha y hora válidas.",
      eventTitle: "Discovery call con Lorena Guartazaca",
      eventDetails:
        "Reunión agendada desde el portafolio de Lorena Guartazaca. ¡Gracias por tu interés! Si necesitas reprogramar responde a este evento o escríbeme por WhatsApp.",
    },
  },
  en: {
    title: "Let's connect",
    intro: "Book a call, send a WhatsApp message or share the details of your project.",
    form: {
      name: "Full name",
      email: "Email",
      message: "Tell me about your project",
      submit: "Send message",
      success: "Thank you! I'll get back to you shortly.",
      captchaError: "Please confirm you're not a robot.",
    },
    quickLinks: [
      {
        label: "WhatsApp",
        description: "Response within 24 hours",
        href: "https://wa.me/593994607544",
      },
      {
        label: "Email",
        description: "Drop me a line at lorenaggs2812@gmail.com",
        href: "mailto:lorenaggs2812@gmail.com",
      },
      {
        label: "Calendar",
        description: "Book a 30-minute discovery call",
        action: "calendar",
      },
      {
        label: "LinkedIn",
        description: "Let's discuss opportunities",
        href: "https://www.linkedin.com/in/lorenaggs/",
      },
    ],
    calendar: {
      title: "Book your discovery call",
      subtitle:
        "Pick a time that works best for you and let's discuss your product challenges and how I can contribute.",
      close: "Close scheduler",
      inputLabel: "Select date and time",
      helper: "Meetings last approximately 30 minutes.",
      submit: "Create event in Google Calendar",
      error: "Please choose a valid date and time.",
      eventTitle: "Discovery call with Lorena Guartazaca",
      eventDetails:
        "Meeting scheduled from Lorena Guartazaca's portfolio. Thanks for reaching out! Feel free to reschedule via this event or message me on WhatsApp.",
    },
  },
};

function Contactme({ language }) {
  const copy = dictionary[language] ?? dictionary.es;
  const [captchaValid, setCaptchaValid] = useState(null);
  const [userValid, setUserValid] = useState(false);
  const [formValues, setFormValues] = useState({
    user_name: "",
    user_email: "",
    user_message: "",
  });
  const [showCalendar, setShowCalendar] = useState(false);
  const [meetingDate, setMeetingDate] = useState("");
  const [calendarError, setCalendarError] = useState("");

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
    if (captcha.current?.getValue()) {
      emailjs.sendForm("service_6w7bzyc", "template_6zeftdv", event.target, "T4W92TuixXAZ2VZTT");
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

  const handleOpenCalendar = useCallback(() => {
    setShowCalendar(true);
    setCalendarError("");
  }, []);

  const handleCloseCalendar = useCallback(() => {
    setShowCalendar(false);
    setCalendarError("");
  }, []);

  const handleScheduleMeeting = (event) => {
    event.preventDefault();
    if (!meetingDate) {
      setCalendarError(copy.calendar.error);
      return;
    }

    const start = new Date(meetingDate);
    if (Number.isNaN(start.getTime())) {
      setCalendarError(copy.calendar.error);
      return;
    }

    const end = new Date(start.getTime() + 30 * 60 * 1000);

    const formatGoogleDate = (date) => {
      const iso = date.toISOString().replace(/-|:|\.\d+/g, "");
      return iso.slice(0, 15) + "Z";
    };

    const googleUrl = new URL("https://calendar.google.com/calendar/render");
    googleUrl.searchParams.set("action", "TEMPLATE");
    googleUrl.searchParams.set("text", copy.calendar.eventTitle);
    googleUrl.searchParams.set("details", copy.calendar.eventDetails);
    googleUrl.searchParams.set("dates", `${formatGoogleDate(start)}/${formatGoogleDate(end)}`);
    googleUrl.searchParams.set("ctz", Intl.DateTimeFormat().resolvedOptions().timeZone);

    window.open(googleUrl.toString(), "_blank", "noopener");
    setCalendarError("");
    setMeetingDate("");
    setShowCalendar(false);
  };

  useEffect(() => {
    window.addEventListener("openCalendar", handleOpenCalendar);
    return () => window.removeEventListener("openCalendar", handleOpenCalendar);
  }, [handleOpenCalendar]);

  return (
    <section className="contactme" id="contactme">
      <div className="contactme__container">
        <div className="contactmenow">
          <section className="main_imageprofilecontac contactme__circle"></section>
          <div>
            <h2 className="contactme__textcolor">{copy.title}</h2>
            <p className="contactme__intro">{copy.intro}</p>
          </div>
        </div>
        <div className="contactme__quicklinks">
          {copy.quickLinks.map(({ label, description, href, action }) => {
            if (action === "calendar") {
              return (
                <React.Fragment key={label}>
                  <button
                    type="button"
                    className="contactme__card contactme__card--button"
                    onClick={handleOpenCalendar}
                    aria-expanded={showCalendar}
                  >
                    <span className="contactme__bullet" aria-hidden="true" />
                    <div>
                      <h3>{label}</h3>
                      <p>{description}</p>
                    </div>
                    <span aria-hidden="true">→</span>
                  </button>
                  {showCalendar ? (
                    <section className="contactme__calendar">
                      <header className="contactme__calendar-header">
                        <div>
                          <h3>{copy.calendar.title}</h3>
                          <p>{copy.calendar.subtitle}</p>
                        </div>
                        <button
                          type="button"
                          className="contactme__calendar-close"
                          onClick={handleCloseCalendar}
                          aria-label={copy.calendar.close}
                        >
                          <i className="fa-solid fa-xmark" aria-hidden="true" />
                        </button>
                      </header>
                      <form className="contactme__calendar-form" onSubmit={handleScheduleMeeting}>
                        <label className="contactme__calendar-label" htmlFor="meeting_datetime">
                          {copy.calendar.inputLabel}
                        </label>
                        <input
                          id="meeting_datetime"
                          type="datetime-local"
                          className="contactme__calendar-input"
                          value={meetingDate}
                          onChange={(event) => setMeetingDate(event.target.value)}
                          min={new Date().toISOString().slice(0, 16)}
                        />
                        <p className="contactme__calendar-helper">{copy.calendar.helper}</p>
                        {calendarError ? <p className="contactme__calendar-error">{calendarError}</p> : null}
                        <button type="submit" className="contactme__calendar-submit">
                          {copy.calendar.submit}
                        </button>
                      </form>
                    </section>
                  ) : null}
                </React.Fragment>
              );
            }

            return (
              <a key={label} href={href} target="_blank" rel="noreferrer" className="contactme__card">
                <span className="contactme__bullet" aria-hidden="true" />
                <div>
                  <h3>{label}</h3>
                  <p>{description}</p>
                </div>
                <span aria-hidden="true">→</span>
              </a>
            );
          })}
        </div>
      </div>
     {/* {!userValid ? (
        <form className="form" onSubmit={sendMail}>
          <div className="labelform">
            <label className="label" htmlFor="user_name">
              {copy.form.name}
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
              {copy.form.email}
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
              {copy.form.message}
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
            <ReCAPTCHA ref={captcha} sitekey="6Lclrh8iAAAAANZi1qY9f2W6JxXDehbXmOtWWJSN" onChange={onChange} />
          </div>
          {captchaValid === false && <div className="error-captcha">{copy.form.captchaError}</div>}
          <button className="btnsent" type="submit" disabled={!canSubmit}>
            {copy.form.submit}
          </button>
        </form>
      ) : (
        <p className="validateMsg">{copy.form.success}</p>
      )}*/}
    </section>
  );
}

export default Contactme;
