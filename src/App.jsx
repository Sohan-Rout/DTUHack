import React from "react";
import Navigation from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";

function App() {
  return<div className="bg-gradient-to-br from-neutral-800 to-neutral-900">
    <Navigation/>
    <Hero/>
    <About/>
  </div>;
}

export default App;
