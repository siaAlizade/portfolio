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
      <section
        className="flex flex-col justify-center items-center font-main
      // Whole Page responsive padding
      px-6 pt-6 sm:px-6 md:px-10 lg:px-16 xl:px-24 2xl:px-32 sm:pt-8 md:pt-10 lg:pt-12 xl:pt-12 pb-10 sm:pb-12 md:pb-16 lg:pb-20 xl:pb-24
      // gap between sections
       gap-12 sm:gap-16 md:gap-20 lg:gap-24 xl:gap-24
      "
      >
        <div className="w-full">
          <Navbar />
          <Hero />
        </div>
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
