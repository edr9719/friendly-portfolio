import { useState } from 'react';
import { NavLink } from 'react-router';
import { FaLaptopCode, FaTimes, FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const baseStyle = 'transition hover:text-blue-400';
  const activeStyle = 'text-blue-400 font-semibold';

  return (
    <nav className='bg-gray-800 border-b border-gray-700 shadow-md sticky top-0 z-50'>
      <div className='max-w-6xl mx-auto px-6 py-4 flex justify-between items-center'>
        <NavLink
          to='/'
          className='flex items-center gap-2 text-lg font-bold text-blue-300'
        >
          <FaLaptopCode className='text-blue-400 text-xl' />
          <span>El Desarrollador Amigable</span>
        </NavLink>
        {/* Desktop Nav */}
        <div className='hidden md:flex items-center gap-6'>
          <div className='space-x-4 text-sm text-gray-300'>
            <NavLink
              className={({ isActive }) => (isActive ? activeStyle : baseStyle)}
              to='/'
            >
              Inicio
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? activeStyle : baseStyle)}
              to='/projects'
            >
              Proyectos
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? activeStyle : baseStyle)}
              to='/blog'
            >
              Blog
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? activeStyle : baseStyle)}
              to='/about'
            >
              Acerca de mi
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? activeStyle : baseStyle)}
              to='/contact'
            >
              Contacto
            </NavLink>
          </div>
        </div>

        <div className='md:hidden flex items-center gap-4'>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className='text-blue-400 text-xl cursor-pointer'
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Nav */}
      </div>
      {menuOpen && (
        <div className='md:hidden bg-gray-800 border-gray-700 border-t px-6 py-4 space-y-2 space-x-4 text-center'>
          <NavLink
            className={({ isActive }) => (isActive ? activeStyle : baseStyle)}
            to='/'
            onClick={() => setMenuOpen(!menuOpen)}
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? activeStyle : baseStyle)}
            to='/projects'
            onClick={() => setMenuOpen(!menuOpen)}
          >
            Projects
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? activeStyle : baseStyle)}
            to='/blog'
            onClick={() => setMenuOpen(!menuOpen)}
          >
            Blog
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? activeStyle : baseStyle)}
            to='/about'
            onClick={() => setMenuOpen(!menuOpen)}
          >
            About
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? activeStyle : baseStyle)}
            to='/contact'
            onClick={() => setMenuOpen(!menuOpen)}
          >
            Contact
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
