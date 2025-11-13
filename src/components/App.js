import { useEffect, useState } from "react";
import "../styles/App.scss";
import Footer from "./footer";
import Banner from "./banner";
import Aboutme from "./aboutme";
import Skills from "./skills";
import Experience from "./experience";
import Challenge from "./challenge";
import Menutablet from "./menutablet";
import Contactme from "./contacme";
import Header from "./header";

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") ?? "dark");

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <>
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <main className="main">
        <div className="main__sections">
          <Banner />
          <Aboutme />
          <Skills />
          <Experience />
          <Challenge />
          <Menutablet />
          <Contactme />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
