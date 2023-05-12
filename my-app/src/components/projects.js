import React from 'react';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Projects</h1>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <motion.div
          className="bg-white shadow rounded-lg p-6"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <h2 className="text-lg font-bold mb-2">Project 1</h2>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id
            magna consequat, cursus nulla sit amet, accumsan velit. Quisque
            interdum sagittis urna.
          </p>
        </motion.div>
        <motion.div
          className="bg-white shadow rounded-lg p-6"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <h2 className="text-lg font-bold mb-2">Project 2</h2>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id
            magna consequat, cursus nulla sit amet, accumsan velit. Quisque
            interdum sagittis urna.
          </p>
        </motion.div>
        <motion.div
          className="bg-white shadow rounded-lg p-6"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <h2 className="text-lg font-bold mb-2">Project 3</h2>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id
            magna consequat, cursus nulla sit amet, accumsan velit. Quisque
            interdum sagittis urna.
          </p>
        </motion.div>
        <motion.div
          className="bg-white shadow rounded-lg p-6"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <h2 className="text-lg font-bold mb-2">Project 4</h2>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id
            magna consequat, cursus nulla sit amet, accumsan velit. Quisque
            interdum sagittis urna.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Projects;
