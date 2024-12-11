import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {FaEnvelope, FaGithub, FaLinkedin} from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle navbar background on scroll
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Name */}
          <Link
            to="/Resume/"
            className="text-xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 text-transparent bg-clip-text hover:opacity-80 transition"
          >
            Sebastian Vargas
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {['Home', 'Experience', 'Projects', 'Education', 'Blogs'].map((item) => (
              <Link
                key={item}
                to={item === 'Home' ? '/Resume/' : `/Resume/${item.toLowerCase()}`}
                className={`relative text-sm font-medium transition-colors ${
                  location.pathname === (item === 'Home' ? '/' : `/${item.toLowerCase()}`)
                    ? 'text-blue-400'
                    : 'text-gray-300 hover:text-blue-400'
                } after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-blue-400 after:transition-all ${
                  location.pathname === (item === 'Home' ? '/' : `/${item.toLowerCase()}`)
                    ? 'after:w-full'
                    : 'after:w-0 hover:after:w-full'
                }`}
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Social Media Links */}
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/Sentientnapkin" // Replace with your GitHub URL
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition p-2 rounded-full hover:bg-blue-400/10"
            >
              <FaGithub className="w-5 h-5"/>
            </a>
            <a
              href="https://www.linkedin.com/in/sebastian-vargas-4a083323a/" // Replace with your LinkedIn URL
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition p-2 rounded-full hover:bg-blue-400/10"
            >
              <FaLinkedin className="w-5 h-5"/>
            </a>
            <a
              href="mailto:sebvargas@berkeley.edu" // Email link
              className="text-gray-300 hover:text-blue-400 transition p-2 rounded-full hover:bg-blue-400/10"
            >
              <FaEnvelope className="w-5 h-5"/>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};


export default Navbar;
