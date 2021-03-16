import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Alumni from "./components/Alumni";
import Feature from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Partners from "./components/Partners/Partners";
import Support from "./components/Support/Support";

import GlobalStyle from "./globalStyles";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Nav />
      <Hero />
      <Feature />
      <Alumni />
      <Partners />
      <Support />
      <Footer />
    </Router>
  );
}

export default App;
