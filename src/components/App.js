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
  return (
    <>
      <Header />
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
