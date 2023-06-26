import React from 'react';

interface NavItemProps {
  link: string;
  label: string;
}

const NavItem: React.FC<NavItemProps> = ({ link, label }) => {
  return (
    <li className="my-2">
      <a
        className="text-white hover:text-gray-800 font-medium text-sm"
        href={link}
      >
        {label}
      </a>
    </li>
  );
};

const SidebarNav: React.FC = () => {
  const navItems: NavItemProps[] = [
    { label: 'Home', link: '#home' },
    { label: 'About', link: '#about' },
    { label: 'Contact', link: '#contact' },
    { label: 'Projects', link: '#projects' },
  ];

  return (
    <div className="w-64 flex flex-col items-center">
      <h1 className="text-xl font-bold mt-8 mb-4">My Website</h1>
      <ul className="flex flex-col items-start">
        {navItems.map((item, index) => (
          <NavItem key={index} link={item.link} label={item.label} />
        ))}
      </ul>
    </div>
  );
};

export default SidebarNav;
