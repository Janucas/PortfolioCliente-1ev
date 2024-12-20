import Navbar from "./components/navbar/navbar";
import About from "./components/About/About";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import References from "./components/References/References";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer"; // Importa el Footer
import "./index.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <About />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <References />
        <Contact />
      </main>
      <Footer /> {/* Añade el Footer aquí */}
    </div>
  );
}

export default App;
