import React, { useState } from "react";
import { motion } from "framer-motion";
import Image1 from "../images/rackatiers.png";
import Image2 from "../images/portfoliosite.png";
import Image3 from '../images/aliaskeep.png';
import Image4 from "../images/pythoncodechallenges.png";
import Image5 from "../images/snakegame.png";
import Image6 from "../images/savannabiltong.png";
import Image7 from "../images/tekelite.png";
import Image8 from "../images/truenas.png";
import Image9 from "../images/mountainterrain.png";
import Image10 from "../images/p2pfiletransfer.png";

const Portfolio = () => {
  const [activeView, setActiveView] = useState("all");
  const [showMore, setShowMore] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleViewChange = (view) => {
    setActiveView(view);
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleClosePopout = () => {
    setSelectedProject(null);
  };

  // project data
  const projects = [
    {
      id: 1,
      title: "Rack-a-Tiers Website",
      category: "react",
      image: Image1,
      description: "<a className='bold' href='https://www.rack-a-tiers.ca/' target='_blank' rel='noopener noreferrer'>Rack-A-Tiers website</a>. My coworker and I were tasked with creating a new website for the company. We used React / HTML / JavaScript / Tailwind CSS to create a responsive ecommerce website that is easy to navigate and looks great on all devices. Check out the website <a className='bold' href='https://www.rack-a-tiers.ca/' target='_blank' rel='noopener noreferrer'>Here</a>.",
    },
    {
      id: 2,
      title: "This Website",
      category: "react",
      image: Image2,
      description:
        "My portfolio website showcases a collection of diverse projects I've undertaken using technologies such as React, Tailwind CSS, HTML, Unity, C#, Python and JavaScript. It offers a visually engaging platform for visitors to explore my work and learn more about each project's details and technologies involved. Feel free to explore my portfolio and get a glimpse of my coding journey!. Check out the code on Github <a href='https://github.com/Forworddash/portfoliosite' target='_blank' rel='noopener noreferrer'>Here</a>.",
    },
    {
      id: 3,
      title: "Teke Lite App",
      category: "Unity/C#",
      image: Image7,
      description:
        "Received Figma designs from the UI designer and implemented the designs in the Teke Lite app. I worked with the Unity engine and wrote C# code for the sound effects and transitions to different scenes. Check out their website  <a className='bold' href='https://teke.io/' target='_blank' rel='noopener noreferrer'>Here</a>.",
    },
    {
      id: 4,
      title: "Python Functions",
      category: "python",
      image: Image4,
      description: "Wrote python functions for multiple challenges from testing strings for palindromes to finding the biggest number in a list. Check it out on github <a className='bold' href='https://github.com/Forworddash/python-code-challenges' target='_blank' rel='noopener noreferrer'>Here</a>.",
    },
    {
      id: 5,
      title: "Snake Game",
      category: "javascript",
      image: Image5,
      description: "The 'Snake Game' project leverages HTML, CSS, and JavaScript to create an interactive snake game experience. Players control a snake as it maneuvers through the game grid to collect apples and grow longer. The project showcases the use of canvas rendering, collision detection, and dynamic gameplay mechanics to recreate the classic Snake game in a web browser.",
    },
    {
      id: 6,
      title: "Biltong Landing Page",
      category: "react",
      image: Image6,
      description: "Thor's landing page project is a dynamic web application developed using JavaScript, React, HTML, and Tailwind CSS. Leveraging the power of React's component-based architecture and Tailwind CSS's styling, the project delivers a responsive and aesthetically pleasing user experience. This landing page is designed for my friend Thor as he pursues his business in Biltong, the African dried meat delicacy! Check it out on GitHub <a className='bold' href='https://github.com/Forworddash/Thor-landingpage' target='_blank' rel='noopener noreferrer'>Here</a>.",
    },
    {
      id: 7,
      title: "Alias Keep",
      category: "javascript",
      image: Image3,
      description: "'Alias Keep' is a desktop application built using Electron, Bulma CSS, and JavaScript. The primary purpose of the application is to help users manage and store information related to fake aliases, including details such as fake names, email addresses, phone numbers, and dates of birth. The application features a user-friendly interface with different tabs for managing various aspects as well as a rudimentary login screen. <a href='https://github.com/Forworddash/AliasKeep' target='_blank' rel='noopener noreferrer'>See it on Github</a>.",
    },
    {
      id: 8,
      title: "TrueNas Server",
      category: "all",
      image: Image8,
      description: "Building my own TrueNAS server from an old desktop was an enriching and excruciating experience that taught me several valuable lessons in server administration and hardware repurposing. Through this project, I gained hands-on knowledge in various areas like: Data storage management, RAID configuration, data redundacy, network configurations, data backups and more.",
    },
    {
      id: 9,
      title: "Mountain Terrain",
      category: "Unity/C#",
      image: Image9,
      description:
        "a forest and mountain range created in Unity to showcase localized rain effects and tree dispersement. The player has standard variables for walking speed, running speed, jump strength, gravity and more.",
    },
    {
      id: 10,
      title: "P2P File transfer System",
      category: "Python",
      image: Image10,
      description:
        "A peer-to-peer file transfer system that allows users to share files with each other. The system consists of a central server and one client. Check it out on github <a className='bold' href='https://github.com/Forworddash/P2P-File-Transfer-Py' target='_blank' rel='noopener noreferrer'>Here</a>.",
    },

    // Add more projects and their respective details here
  ];

  const filteredProjects = projects.filter((project) => {
    if (activeView === "all") {
      return true;
    } else {
      return project.category === activeView;
    }
  });

  const visibleProjects = showMore
    ? filteredProjects
    : filteredProjects.slice(0, 3);

  const toggleShowMore = () => {
    setShowMore((prevShowMore) => !prevShowMore);
  };

  return (
    <div className="m-auto p-6 container">
      <h1 className="text-3xl text-center font-bold mb-4">Portfolio</h1>
      <div className="flex justify-center mb-4 space-x-12">
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
            activeView === "javascript" ? "btn-active" : ""
          }`}
          onClick={() => handleViewChange("javascript")}
        >
          JavaScript
        </button>
        <button
          className={`btn btn-primary ${
            activeView === "react" ? "btn-active" : ""
          }`}
          onClick={() => handleViewChange("react")}
        >
          React
        </button>
        <button
          className={`btn btn-primary ${
            activeView === "Unity/C#" ? "btn-active" : ""
          }`}
          onClick={() => handleViewChange("Unity/C#")}
        >
          Unity/C#
        </button>
      </div>
      <div className="rounded-2xl m-auto shadow-2xl p-8">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {visibleProjects.map((project) => (
            <div
              key={project.id}
              className="flex items-center justify-center"
              onClick={() => handleProjectClick(project)}
            >
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
        {filteredProjects.length > 3 && (
          <div className="flex justify-center mt-4">
            <button className="btn btn-primary" onClick={toggleShowMore}>
              {showMore
                ? "Show Less"
                : `Show More (${filteredProjects.length - 3} more)`}
            </button>
          </div>
        )}
      </div>
      {selectedProject && (
        <div className="popout-overlay">
          <div className="popout-container">
            <div className="popout-content mt-8">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="object-cover m-auto w-1/2 h-2/4"
              />
              <h2 className="text-2xl font-bold mt-4 text-center">
                {selectedProject.title}
              </h2>
              <p 
              className="mt-4"
              dangerouslySetInnerHTML={{ __html: selectedProject.description }}></p>
            </div>
              <button
                className="text-white popout-close-btn"
                onClick={handleClosePopout}
              >
                Close
              </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
