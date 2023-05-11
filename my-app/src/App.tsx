import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/navbar";
import About from "./components/about";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Footer from "./components/footer";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div>
        <div>
          <Navbar></Navbar>
        </div>

        <div>
          <About></About>
        </div>

        <div>
          <Projects></Projects>
        </div>

        <div>
          <Contact></Contact>
        </div>

        <div>
          <Footer></Footer>
        </div>

      </div>
    </Router>
  );
}

export default App;
