import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-transparent text-center text-white py-4">
      <p className="text-center py-4">
        &copy; {new Date().getFullYear()} My Digital Portfolio | Made by Samuel B
      </p>
    </footer>
  );
};

export default Footer;
