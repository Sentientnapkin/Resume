import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';
import EmailButton from './EmailButton.tsx';
import { useMediaQuery } from 'react-responsive';

const Navbar: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const location = useLocation();
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-900/95 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Name */}
          <Link
            to="/Resume/"
            className="text-xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 text-transparent bg-clip-text hover:opacity-80 transition"
          >
            Sebastian Vargas
          </Link>

          {/* Drawer Toggle Button for Mobile */}
          {isMobile && (
            <button
              className="text-gray-300 hover:text-blue-400 transition"
              onClick={() => setIsDrawerOpen(!isDrawerOpen)}
            >
              {isDrawerOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
            </button>
          )}

          {/* Navigation Links and Social Media */}
          {!isMobile && (
            <div className="flex items-center space-x-8">
              {['Home', 'Experience', 'Projects', 'Education', 'Blogs'].map((item) => (
                <Link
                  key={item}
                  to={item === 'Home' ? '/Resume/' : `/Resume/${item.toLowerCase()}`}
                  className={`relative text-sm font-medium transition-colors ${
                    location.pathname === (item === 'Home' ? '/Resume/' : `/Resume/${item.toLowerCase()}`)
                      ? 'text-blue-400'
                      : 'text-gray-300 hover:text-blue-400'
                  } after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-blue-400 after:transition-all ${
                    location.pathname === (item === 'Home' ? '/Resume/' : `/Resume/${item.toLowerCase()}`)
                      ? 'after:w-full'
                      : 'after:w-0 hover:after:w-full'
                  }`}
                >
                  {item}
                </Link>
              ))}
            </div>
          )}

          {/* Social Media Icons */}
          {!isMobile && (
            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/Sentientnapkin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition p-2 rounded-full hover:bg-blue-400/10"
              >
                <FaGithub className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/sebastian-vargas-4a083323a/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition p-2 rounded-full hover:bg-blue-400/10"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <EmailButton />
            </div>
          )}
        </div>

        {/* Mobile Drawer */}
        {isMobile && isDrawerOpen && (
          <div className="bg-slate-900/95 backdrop-blur-md shadow-lg">
            <div className="flex flex-col items-center space-y-4 py-4">
              {['Home', 'Experience', 'Projects', 'Education', 'Blogs'].map((item) => (
                <Link
                  key={item}
                  to={item === 'Home' ? '/Resume/' : `/Resume/${item.toLowerCase()}`}
                  onClick={() => setIsDrawerOpen(false)}
                  className={`block text-sm font-medium transition-colors ${
                    location.pathname === (item === 'Home' ? '/Resume/' : `/Resume/${item.toLowerCase()}`)
                      ? 'text-blue-400'
                      : 'text-gray-300 hover:text-blue-400'
                  }`}
                >
                  {item}
                </Link>
              ))}
              <a
                href="https://github.com/Sentientnapkin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition p-2 rounded-full hover:bg-blue-400/10"
              >
                <FaGithub className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/sebastian-vargas-4a083323a/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition p-2 rounded-full hover:bg-blue-400/10"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <EmailButton />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
