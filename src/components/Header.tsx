import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center">
            
            <img src="/assets/logo.svg" className='h-12 w-12 mr-2' alt="APM Logo" width="50" height="50"></img>
            <div>
              <h1 className="text-xl font-bold text-gray-800 m-0">APM</h1>
              <p className="text-sm text-gray-600 m-0">Construction Experts</p>
            </div>
          </Link>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-700 hover:text-red-600 font-medium">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-red-600 font-medium">About Us</Link>
            <Link to="/services" className="text-gray-700 hover:text-red-600 font-medium">Services</Link>
            <Link to="/projects" className="text-gray-700 hover:text-red-600 font-medium">Projects</Link>
            <Link to="/team" className="text-gray-700 hover:text-red-600 font-medium">Our Team</Link>
            <Link to="/contact" className="text-gray-700 hover:text-red-600 font-medium">Contact</Link>
          </nav>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200">
            <ul className="flex flex-col space-y-3">
              <li><Link to="/" className="block text-gray-700 hover:text-red-600 font-medium" onClick={toggleMenu}>Home</Link></li>
              <li><Link to="/about" className="block text-gray-700 hover:text-red-600 font-medium" onClick={toggleMenu}>About Us</Link></li>
              <li><Link to="/services" className="block text-gray-700 hover:text-red-600 font-medium" onClick={toggleMenu}>Services</Link></li>
              <li><Link to="/projects" className="block text-gray-700 hover:text-red-600 font-medium" onClick={toggleMenu}>Projects</Link></li>
              <li><Link to="/team" className="block text-gray-700 hover:text-red-600 font-medium" onClick={toggleMenu}>Our Team</Link></li>
              <li><Link to="/contact" className="block text-gray-700 hover:text-red-600 font-medium" onClick={toggleMenu}>Contact</Link></li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;