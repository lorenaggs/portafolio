function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="footer__social">
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/lorena-guartazaca-b55a541b4/"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://api.whatsapp.com/send?phone=593994607544"
        >
          <i className="fa-brands fa-whatsapp"></i>
        </a>
        <a rel="noreferrer" target="_blank" href="mailto:lorenaggs2812@gmail.com">
          <i className="fa-solid fa-envelope"></i>
        </a>
      </div>
      <p className="footer__copy">© {currentYear} Lorena Guartazaca · Desarrolladora Frontend</p>
      <button type="button" className="backtotop" onClick={handleScrollTop}>
        <i className="fa-solid fa-chevron-up backicon"></i>
      </button>
    </footer>
  );
}

export default Footer;
