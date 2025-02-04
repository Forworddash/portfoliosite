import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/navbar";
import About from "./components/about";
import Footer from "./components/footer";
// import Contact from "./components/contact";
import "./index.css"; 
import Portfolio from "./components/portfolio";

function App() {

  return (
    // <Router basename={process.env.PUBLIC_URL}>
    <Router basename="">
      <div className="">
        <Navbar />
      </div>
      <div

        /* make the background side to side  */
        style={{
          // background: "linear-gradient(90deg, #667eea 0%, #764ba2 100%)"
          background: '#1a1a1a', letterSpacing: '0.1em'
        }}
        className="space-y-12 text-white"
      >
        <div className="py-24" id='about'>
            <About />
        </div>

        <div className="py-12" id='portfolio'>
            <Portfolio />
        </div>

        {/* <div className="py-12" id='contact'>
            <Contact />
        </div> */}

        <div>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
