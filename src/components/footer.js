import "../styles/App.scss";

function Footer() {
  return (
    <footer className="icons">
      <div>
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
      </div>
      <button className="btnback">
        <a className="backtotop" rel="noreferrer" href="/#">
          <p className="textback">Back</p>
          <i className="fa-solid fa-chevron-up backicon"></i>
        </a>
      </button>
    </footer>
  );
}

export default Footer;
