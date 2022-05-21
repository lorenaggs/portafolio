import "../styles/App.scss";

function App() {
  return (
    <div className="containerApp">
      <div className="App">
        <header className="header">
          <h1 className="name">Lorena</h1>
          <h2 className="lastName">Guartazaca</h2>
        </header>
        <main className="main">
          <section className="main_imageprofile">
            <div className="imageMe"></div>
          </section>

          <p className="main__description">
            I am
            <p>&#160;a creative</p>
            <p>frontend Developer</p>
            <span className="write">&#160;</span>
          </p>
        </main>
      </div>
      <ul className="menu">
        <li className="menu__sections">contact</li>
        <li className="menu__sections">portafolio</li>
        <li className="menu__sections">experience</li>
        <li className="menu__sections">skills</li>
        <li className="menu__sections">about_me</li>
      </ul>
    </div>
  );
}

export default App;
