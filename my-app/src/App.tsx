import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/navbar";
import About from "./components/about";
import Projects from "./components/projects";
import Footer from "./components/footer";
import Contact from "./components/contact";
import "./index.css"; // Import Tailwind CSS

function App() {
  // const [breath, setBreath] = useState(false);

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div
        className="bg-gradient-to-b from-blue-500 to-purple-500 h-screen flex flex-col"
      >
        <div>
          <Navbar />
        </div>

        <div>
          <About />
        </div>

        <div>
          <Projects />
        </div>

        <div>
          <Contact />
        </div>

        {/* <div className="absolute bottom-0 left-0 right-0 flex justify-center items-center pb-8">
          <div className="bg-white h-8 w-8 rounded-full"></div>
          <div className="bg-white h-8 w-8 rounded-full mx-2"></div>
          <div className="bg-white h-8 w-8 rounded-full"></div>
        </div>
         */}
        <div className="absolute left-0 right-0 bottom-0">
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
