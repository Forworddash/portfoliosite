import React from 'react';
import Document from '../docs/SamuelBakerResume.docx'


const Navbar: React.FC = () => {


  return (
    <nav className="fixed w-full bg-black opacity-75 z-10">
      <div className="flex items-center justify-evenly">

        <ul className="flex">

          <li className="my-2">
            <a
              className="text-white hover:text-gray-800 font-medium text-sm px-4 py-2 rounded-lg transition-colors duration-300 flex items-center"
              href="#about"
              rel="noopener noreferrer"
            >
              {/* <FontAwesomeIcon icon={} className="mr-2" /> */}
              About
            </a>
          </li>
          <li className="my-2">
            <a
              className="text-white hover:text-gray-800 font-medium text-sm px-4 py-2 rounded-lg transition-colors duration-300 flex items-center"
              href="#portfolio"
              rel="noopener noreferrer"
            >
              {/* <FontAwesomeIcon icon={} className="mr-2" /> */}
              Portfolio
            </a>
          </li>
          {/* <li className="my-2">
            <a
              className="text-white hover:text-gray-800 font-medium text-sm px-4 py-2 rounded-lg transition-colors duration-300 flex items-center"
              href="#contact"
              rel="noopener noreferrer"
            >
              Contact
            </a>
          </li> */}
          <li className="my-2">
            <a
              className="text-white hover:text-gray-800 font-medium text-sm px-4 py-2 rounded-lg transition-colors duration-300 flex items-center"
              href="https://github.com/Forworddash"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* <FontAwesomeIcon icon={} className="mr-2" /> */}
              GitHub
            </a>
          </li>
          <li className="my-2">
            <a
              className="text-white hover:text-gray-800 font-medium text-sm px-4 py-2 rounded-lg transition-colors duration-300 flex items-center"
              href={Document}
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* <FontAwesomeIcon icon={} className="mr-2" /> */}
              Resume
            </a>
          </li>
        </ul>
      </div>

    </nav>
  );
};

export default Navbar;
