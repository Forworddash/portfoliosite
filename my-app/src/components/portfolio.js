import React, { useState } from "react";
import { motion } from "framer-motion";
import project1 from "../images/React.jpg";

const Portfolio: React.FC = () => {
  const [activeView, setActiveView] = useState("all");

  const handleViewChange = (view: string) => {
    setActiveView(view);
  };

  // project data
  const projects = [
    { id: 1, title: "Project 1", category: "all" },
    { id: 2, title: "Project 2", category: "all" },
    { id: 3, title: "Project 3", category: "python" },
    { id: 4, title: "Project 4", category: "react" },
    { id: 5, title: "Project 5", category: "react" },
    { id: 6, title: "Project 6", category: "react" },
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
      
      {/* title for div */}
      <h1 className="text-3xl text-center font-bold mb-4">Portfolio</h1>
      
      {/* filter buttons for projects */}
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

      {/* project template*/}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        {filteredProjects.map((project) => (
          <div key={project.id}>
            <motion.div
              className="shadow rounded-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img src={project1} alt={project.title} />
            </motion.div>
          </div>
        ))}
      </motion.div>

    </div>
  );
};

export default Portfolio;

