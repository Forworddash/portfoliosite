import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/navbar";
import About from "./components/about";
import Footer from "./components/footer";
import Contact from "./components/contact";
import "./index.css"; // Import Tailwind CSS
import Portfolio from "./components/portfolio";

function App() {
  // const [breath, setBreath] = useState(false);

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="">
        <Navbar />
      </div>
      <div
        style={{
          background: "linear-gradient(to bottom, #FF8885, #F2E2D0, #E9EAAC)",
        }}
        className="space-y-12"
      >
        <div className="py-24" id='about'>
            <About />
        </div>

        <div className="py-12" id='portfolio'>
            <Portfolio />
        </div>

        <div className="py-12" id='contact'>
            <Contact />
        </div>

        <div>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
