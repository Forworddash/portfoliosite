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
      <div
        className="bg-gradient-to-b from-blue-500 to-purple-500 flex flex-col text-white space-y-18"
      >
        <div>
          <Navbar />
        </div>

        <div>
          <About />
        </div>

        <div>
          <Portfolio />
        </div>

        <div>
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
