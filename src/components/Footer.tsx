import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
            <img src="/assets/logo.svg" className='h-12 w-12 mr-2' alt="APM Logo" width="50" height="50"></img>
              <div>
                <h3 className="text-xl font-bold text-white m-0">APM</h3>
                <p className="text-sm text-gray-300 m-0">Construction Experts</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Your trusted partner for all construction needs in Hyderabad. Quality, reliability, and excellence since 2010.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-400 hover:text-white" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-white" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" className="text-gray-400 hover:text-white" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-white" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white">Services</Link></li>
              <li><Link to="/projects" className="text-gray-400 hover:text-white">Projects</Link></li>
              <li><Link to="/team" className="text-gray-400 hover:text-white">Our Team</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Our Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-400 hover:text-white">Residential Construction</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white">Commercial Construction</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white">Government Projects</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white">Renovation</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white">Interior Design</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white">Project Management</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-red-500 mr-2 mt-1" />
                <span className="text-gray-400">Plot No.87, Brindavan Colony, Toli Chowki, Hyderabad, Telangana 500008, India</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-red-500 mr-2" />
                <span className="text-gray-400">+91 9885367899</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-red-500 mr-2" />
                <span className="text-gray-400">info@apmconstructions.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} APM Construction Experts. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;