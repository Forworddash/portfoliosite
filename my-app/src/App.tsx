import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
// import { Router } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div>
        <Navbar></Navbar>
      </div>
    </Router>
  );
}

export default App;
