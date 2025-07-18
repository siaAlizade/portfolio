import About from "./components/sections/About";
import ContactMe from "./components/sections/ContactMe";
import Contact from "./components/sections/ContactMe";
import Footer from "./components/sections/Footer";
import Hero from "./components/sections/Hero";
import Navbar from "./components/sections/Navbar";
import Projects from "./components/sections/Projects";
import Services from "./components/sections/Services";

function App() {
  return (
    <>
      <section className="flex flex-col justify-center items-center font-main pt-5 px-6 gap-12">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Projects />
        <ContactMe />
      </section>
      <Footer />
    </>
  );
}

export default App;
