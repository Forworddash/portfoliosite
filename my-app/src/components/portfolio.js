import React, { useState } from "react";
import { motion } from "framer-motion";
import Image1 from '../images/React.jpg';
import Image2 from '../images/dawdadw.png';
import Image3 from '../images/delldock.jpg';
import Image4 from '../images/inventorscorner.png';
import Image5 from '../images/phone.png';
import Image6 from '../images/step1.png';

const Portfolio: React.FC = () => {
  const [activeView, setActiveView] = useState("all");

  const handleViewChange = (view: string) => {
    setActiveView(view);
  };

  // project data
  const projects = [
    { id: 1, title: "Project 1", category: "all", image: Image1 },
    { id: 2, title: "Project 2", category: "all", image: Image2 },
    { id: 3, title: "Project 3", category: "react", image: Image3 },
    { id: 4, title: "Project 4", category: "python", image: Image4 },
    { id: 5, title: "Project 5", category: "python", image: Image5},
    { id: 6, title: "Project 6", category: "react", image: Image6 },

    // Add more projects and their respective images here
  ];

  const filteredProjects = projects.filter((project) => {
    if (activeView === "all") {
      return true;
    } else {
      return project.category === activeView;
    }
  });

  return (
    <div className="mx-auto p-6 container" id="portfolio">
      <h1 className="text-3xl text-center font-bold mb-4">Portfolio</h1>
      <div className="flex justify-center mb-4">
        <button
          className={`btn btn-primary mr-2 ${
            activeView === "all" ? "btn-active" : ""
          }`}
          onClick={() => handleViewChange("all")}
        >
          All
        </button>
        <button
          className={`btn btn-primary mr-2 ${
            activeView === "python" ? "btn-active" : ""
          }`}
          onClick={() => handleViewChange("python")}
        >
          Python
        </button>
        <button
          className={`btn btn-primary ${
            activeView === "react" ? "btn-active" : ""
          }`}
          onClick={() => handleViewChange("react")}
        >
          React
        </button>
      </div>
      <div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {filteredProjects.map((project) => (
            <div key={project.id} className="flex items-center justify-center">
              <motion.div
                className="shadow-2xl rounded-lg w-64 h-48 md:w-96 md:h-64"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full"
                />
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Portfolio;