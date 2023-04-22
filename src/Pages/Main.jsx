import React from "react";
import About from "../components/About";
import Navigation from "../components/Navigation";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

const Main = () => {
  return (
    <div className="bg-dark text-light">
      <Navigation />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Main;
