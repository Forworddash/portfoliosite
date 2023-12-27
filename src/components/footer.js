import React from "react";

const Footer = () => {
  return (
    <footer className="bg-transparent text-center py-4">
      <p className="text-center py-4">
        &copy; {new Date().getFullYear()} Samuelbaker.ca | Made by Samuel | Powered by Coffee
      </p>
    </footer>
  );
};

export default Footer;
