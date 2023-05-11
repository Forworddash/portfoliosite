import React from 'react';
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <nav>
      <ol className=''>
        <li className=''>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/about">Contact</Link>
        </li>
        <li>
          <Link to="/about">Projects</Link>
        </li>
      </ol>
    </nav>
  );
};


export default Navbar;