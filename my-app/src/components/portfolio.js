// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import Image1 from '../images/React.jpg';
// import Image2 from '../images/dawdadw.png';
// import Image3 from '../images/delldock.jpg';
// import Image4 from '../images/inventorscorner.png';
// import Image5 from '../images/phone.png';
// import Image6 from '../images/step1.png';

// const Portfolio: React.FC = () => {
//   const [activeView, setActiveView] = useState("all");
//   const [showMore, setShowMore] = useState(false);

//   const handleViewChange = (view: string) => {
//     setActiveView(view);
//   };

//   // project data
//   const projects = [
//     { id: 1, title: "Project 1", category: "all", image: Image1 },
//     { id: 2, title: "Project 2", category: "all", image: Image2 },
//     { id: 3, title: "Project 3", category: "react", image: Image3 },
//     { id: 4, title: "Project 4", category: "python", image: Image4 },
//     { id: 5, title: "Project 5", category: "react", image: Image5 },
//     { id: 6, title: "Project 6", category: "react", image: Image6 },

//     // Add more projects and their respective images here
//   ];

//   const filteredProjects = projects.filter((project) => {
//     if (activeView === "all") {
//       return true;
//     } else {
//       return project.category === activeView;
//     }
//   });

//   const visibleProjects = showMore ? filteredProjects : filteredProjects.slice(0, 3);

//   const toggleShowMore = () => {
//     setShowMore((prevShowMore) => !prevShowMore);
//   };

//   return (
//     <div className="m-auto p-6 container">
//       <h1 className="text-3xl text-center font-bold mb-4">Portfolio</h1>
//       <div className="flex justify-center mb-4">
//         <button
//           className={`btn btn-primary mr-2 ${activeView === "all" ? "btn-active" : ""
//             }`}
//           onClick={() => handleViewChange("all")}
//         >
//           All
//         </button>
//         <button
//           className={`btn btn-primary mr-2 ${activeView === "python" ? "btn-active" : ""
//             }`}
//           onClick={() => handleViewChange("python")}
//         >
//           Python
//         </button>
//         <button
//           className={`btn btn-primary ${activeView === "react" ? "btn-active" : ""
//             }`}
//           onClick={() => handleViewChange("react")}
//         >
//           React
//         </button>
//       </div>
//       <div className="rounded-2xl m-auto shadow-2xl p-8">
//         <motion.div
//           className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.2, duration: 0.8 }}
//         >
//           {visibleProjects.map((project) => (
//             <div key={project.id} className="flex items-center justify-center">
//               <motion.div
//                 className="shadow-2xl rounded-lg w-64 h-48 md:w-96 md:h-64"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="object-cover w-full h-full"
//                 />
//               </motion.div>
//             </div>
//           ))}
//         </motion.div>
//         {filteredProjects.length > 3 && (
//           <div className="flex justify-center mt-4">
//             <button className="btn btn-primary" onClick={toggleShowMore}>
//               {showMore ? "Show Less" : `Show More (${filteredProjects.length - 3} more)`}
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Portfolio;

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image1 from '../images/React.jpg';
import Image2 from '../images/dawdadw.png';
// import Image3 from '../images/delldock.jpg';
import Image4 from '../images/inventorscorner.png';
import Image5 from '../images/phone.png';
import Image6 from '../images/step1.png';
import Image7 from '../images/tekelite.png';

const Portfolio: React.FC = () => {
  const [activeView, setActiveView] = useState("all");
  const [showMore, setShowMore] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleViewChange = (view: string) => {
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
    { id: 1, title: "React App", category: "react", image: Image1, description: "Project 1 description" },
    { id: 2, title: "Python EDI", category: "python", image: Image2, description: "Created mappings in python to handle x12 documents in a company odoo backend. A partner company and their branches submit an EDI 850 document and the python mapping will translate it into a purchase order in the odoo system. After the customer service team validates the order, the 810 mapping will take the created purchase order and convert it into a invoice to send back to the purchaser in x12 format. This helps to save a lot of manual labor doing data entry and gets rid of many human errors. " },
    { id: 3, title: "Teke Lite App", category: "Unity/C#", image: Image7, description: "Received Figma designs from the UI designer and implemented the designs in the Teke Lite app. I worked with the Unity engine and wrote C# code for the sound effects and transitions to different scenes." },
    { id: 4, title: "Python Functions", category: "python", image: Image4, description: "Project 4 description" },
    { id: 5, title: "Ecommerce Site #1", category: "react", image: Image5, description: "Project 5 description" },
    { id: 6, title: "Ecommerce Site #2", category: "react", image: Image6, description: "Project 6 description" },
    { id: 7, title: "Ecommerce Site #2", category: "react", image: Image6, description: "Project 6 description" },

    // Add more projects and their respective details here
  ];

  const filteredProjects = projects.filter((project) => {
    if (activeView === "all") {
      return true;
    } else {
      return project.category === activeView;
    }
  });

  const visibleProjects = showMore ? filteredProjects : filteredProjects.slice(0, 3);

  const toggleShowMore = () => {
    setShowMore((prevShowMore) => !prevShowMore);
  };

  return (
    <div className="m-auto p-6 container">
      <h1 className="text-3xl text-center font-bold mb-4">Portfolio</h1>
      <div className="flex justify-center mb-4 space-x-12">
        <button
          className={`btn btn-primary mr-2 ${activeView === "all" ? "btn-active" : ""
            }`}
          onClick={() => handleViewChange("all")}
        >
          All
        </button>
        <button
          className={`btn btn-primary mr-2 ${activeView === "python" ? "btn-active" : ""
            }`}
          onClick={() => handleViewChange("python")}
        >
          Python
        </button>
        <button
          className={`btn btn-primary ${activeView === "react" ? "btn-active" : ""
            }`}
          onClick={() => handleViewChange("react")}
        >
          React
        </button>
        <button
          className={`btn btn-primary ${activeView === "Unity/C#" ? "btn-active" : ""
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
              {showMore ? "Show Less" : `Show More (${filteredProjects.length - 3} more)`}
            </button>
          </div>
        )}
      </div>
      {selectedProject && (
        <div className="popout-overlay">
          <div className="popout-container">
            <div className="popout-content">
              <h2 className="text-2xl font-bold">{selectedProject.title}</h2>
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="object-cover w-full h-64"
              />
              <p className="text-gray-600 mt-4">{selectedProject.description}</p>
            </div>
            <button className="popout-close" onClick={handleClosePopout}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;