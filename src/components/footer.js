const dictionary = {
  es: {
    copy: "Desarrolladora Frontend",
    contact: "Volver arriba",
  },
  en: {
    copy: "Frontend Developer",
    contact: "Back to top",
  },
};

function Footer({ language }) {
  const currentYear = new Date().getFullYear();
  const copy = dictionary[language] ?? dictionary.es;

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <p className="footer__copy">
        © {currentYear} Lorena Guartazaca · {copy.copy}
      </p>
      <button type="button" className="backtotop" onClick={handleScrollTop} aria-label={copy.contact}>
        <i className="fa-solid fa-chevron-up backicon"></i>
      </button>
    </footer>
  );
}

export default Footer;
