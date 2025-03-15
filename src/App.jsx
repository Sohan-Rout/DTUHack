import React from "react";
import Navigation from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Feature from "./components/Features";
import Problem from "./components/Problem";
import Solution from "./components/Solution";

function App() {
  return<div className="bg-gradient-to-br from-neutral-800 to-neutral-900">
    <Navigation/>
    <Hero/>
    <Problem/>
    <Solution/>
    <About/>
    <Feature/>
  </div>;
}

export default App;
