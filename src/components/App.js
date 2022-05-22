import "../styles/App.scss";

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1 className="name">Lorena</h1>
        <h2 className="lastName">Guartazaca</h2>
      </header>

      <div className="containerApp">
        <section className="icons">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/lorena-guartazaca-b55a541b4/"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            target="_blank"
            href="https://github.com/lorenaggs?tab=repositories"
          >
            <i className="fa-brands fa-github"></i>
          </a>
        </section>
        <div className="App">
          <main className="main">
            <section className="main_imageprofile">
              <div className="imageMe"></div>
            </section>
          </main>
          <p className="main__description">
            I am &nbsp;
            <span className="write"> a creative.</span>
          </p>
          <p className="main__description">frontend Developer</p>
          <section className="main_section" id="aboutme">
            <h2 className="main_title">About_me</h2>
            <p className="main_contain">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet
              rem, recusandae laboriosam natus reprehenderit debitis, laborum
              similique repellat fuga at nesciunt quis? Iusto qui autem minima,
              ad delectus commodi molestias.
            </p>
          </section>
          <section className="main_section" id="skills">
            <h2 className="main_title skills">Skills</h2>
            <p className="main_contain">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet
              rem, recusandae laboriosam natus reprehenderit debitis, laborum
              similique repellat fuga at nesciunt quis? Iusto qui autem minima,
              ad delectus commodi molestias.
            </p>
          </section>
          <section className="main_section" id="experience">
            <h2 className="main_title">experience</h2>
            <p className="main_contain">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet
              rem, recusandae laboriosam natus reprehenderit debitis, laborum
              similique repellat fuga at nesciunt quis? Iusto qui autem minima,
              ad delectus commodi molestias.
            </p>
          </section>
          <section className="main_section" id="profile">
            <h2 className="main_title">profile</h2>
            <p className="main_contain">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet
              rem, recusandae laboriosam natus reprehenderit debitis, laborum
              similique repellat fuga at nesciunt quis? Iusto qui autem minima,
              ad delectus commodi molestias.
            </p>
          </section>
          <section className="main_section" id="contactme">
            <h2 className="main_title">contact me</h2>
            <p className="main_contain">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet
              rem, recusandae laboriosam natus reprehenderit debitis, laborum
              similique repellat fuga at nesciunt quis? Iusto qui autem minima,
              ad delectus commodi molestias.
            </p>
          </section>
        </div>
        <ul className="menu">
          <a className="menu__sections" href="./App.js#contactme">
            contact
          </a>
          <a className="menu__sections" href="./App.js#profile">
            portafolio
          </a>
          <a className="menu__sections" href="./App.js#experience">
            experience
          </a>
          <a className="menu__sections" href="./App.js#skills">
            skills
          </a>
          <a className="menu__sections" href="./App.js#aboutme">
            about_me
          </a>
        </ul>
      </div>
    </div>
  );
}

export default App;
