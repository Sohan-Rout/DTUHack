import React from "react";
import Navigation from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Feature from "./components/Features";
import Problem from "./components/Problem";
import Solution from "./components/Solution";
import Impact from "./components/Impact";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  return<div className="bg-gradient-to-br from-neutral-800 to-neutral-900">
    <Navigation/>
    <Hero/>
    <Problem/>
    <Solution/>
    <About/>
    <Feature/>
    <Impact/>
    <Contact/>
    <Footer/>
  </div>;
}

export default App;
