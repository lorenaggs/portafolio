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
import Methodology from "./methodology";
import Testimonials from "./testimonials";
import FloatingContacts from "./floatingcontacts";

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") ?? "dark");
  const [language, setLanguage] = useState(() => localStorage.getItem("language") ?? "es");

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.setAttribute("lang", language);
    localStorage.setItem("language", language);
  }, [language]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "es" ? "en" : "es"));
  };

  return (
    <>
      <Header
        theme={theme}
        language={language}
        onToggleTheme={toggleTheme}
        onToggleLanguage={toggleLanguage}
      />
      <Banner language={language} />
      <FloatingContacts language={language} />
      <main className="main">
        <div className="main__sections">
          <Aboutme language={language} />
          <Skills language={language} />
          <Experience language={language} />
          <Methodology language={language} />
          <Challenge language={language} />
          <Testimonials language={language} />
          <Menutablet language={language} />
          <Contactme language={language} />
        </div>
      </main>
      <Footer language={language} />
    </>
  );
}

export default App;
