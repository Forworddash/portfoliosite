import React from 'react';
import { Link } from 'react-router-dom';

interface NavItemProps {
  link: string;
  label: string;
}

const NavItem: React.FC<NavItemProps> = ({ link, label }) => {
  return (
    <li className="mr-6">
      <Link
        className="text-gray-600 hover:text-gray-800 font-medium text-sm"
        to={link}
      >
        {label}
      </Link>
    </li>
  );
};

const Navbar: React.FC = () => {
  const navItems: NavItemProps[] = [
    { label: 'Home', link: '/' },
    { label: 'About', link: '/about' },
    { label: 'Contact', link: '/contact' },
    { label: 'Projects', link: '/projects' },
  ];

  return (
    <nav className="flex items-center justify-between flex-wrap bg-white p-6">
      <div className="flex items-center flex-shrink-0 mr-6">
        <span className="font-semibold text-xl tracking-tight">My Website</span>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <ul className="flex justify-center lg:justify-end">
            {navItems.map((item, index) => (
              <NavItem key={index} link={item.link} label={item.label} />
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
