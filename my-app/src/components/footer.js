import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-transparent text-center py-4">
      <p className="text-center py-4">
        &copy; {new Date().getFullYear()} Samuelbaker.ca | Made by Samuel
      </p>
    </footer>
  );
};

export default Footer;
