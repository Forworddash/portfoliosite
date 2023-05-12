import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div>
            <h2 className="text-lg font-bold">Contact</h2>
            <p className="mt-2">Email: contact@yourportfolio.com</p>
            <p>Phone: 555-555-5555</p>
          </div>
          <div>
            <h2 className="text-lg font-bold">Social Media</h2>
            <div className="flex mt-2">
              <a href="#" className="text-white mr-4 hover:text-gray-400">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-white mr-4 hover:text-gray-400">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-white mr-4 hover:text-gray-400">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-sm">
          <p>&copy; 2023 Your Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
