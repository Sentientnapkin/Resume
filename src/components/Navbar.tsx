import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaBars, FaTimes, FaTerminal } from 'react-icons/fa';
import EmailButton from './EmailButton.tsx';
import { useMediaQuery } from 'react-responsive';

const Navbar: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const location = useLocation();
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-dark-bg/95 backdrop-blur-md border-b border-cyber-green/20 shadow-[0_4px_20px_rgba(16,185,129,0.1)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Name */}
          <Link
            to="/"
            className="flex items-center gap-2 text-xl font-bold font-mono bg-gradient-to-r from-cyber-green via-cyber-cyan to-terminal-green text-transparent bg-clip-text hover:opacity-80 transition group"
          >
            <FaTerminal className="text-cyber-green group-hover:animate-pulse" />
            <span>SV</span>
          </Link>

          {/* Drawer Toggle Button for Mobile */}
          {isMobile && (
            <button
              className="text-gray-300 hover:text-cyber-green transition"
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
                  to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  className={`relative text-sm font-mono font-medium transition-colors ${
                    location.pathname === (item === 'Home' ? '/' : `/${item.toLowerCase()}`)
                      ? 'text-cyber-green'
                      : 'text-gray-400 hover:text-cyber-green'
                  } after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-cyber-green after:transition-all after:shadow-[0_0_5px_rgba(16,185,129,0.5)] ${
                    location.pathname === (item === 'Home' ? '/' : `/${item.toLowerCase()}`)
                      ? 'after:w-full'
                      : 'after:w-0 hover:after:w-full'
                  }`}
                >
                  <span className="text-cyber-cyan mr-1">{'>'}</span>{item.toLowerCase()}
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
                className="text-gray-400 hover:text-cyber-green transition p-2 rounded-full hover:bg-cyber-green/10 hover:shadow-[0_0_10px_rgba(16,185,129,0.3)]"
              >
                <FaGithub className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/sebastianvargas18"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyber-cyan transition p-2 rounded-full hover:bg-cyber-cyan/10 hover:shadow-[0_0_10px_rgba(6,182,212,0.3)]"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <EmailButton />
            </div>
          )}
        </div>

        {/* Mobile Drawer */}
        {isMobile && isDrawerOpen && (
          <div className="bg-dark-surface/95 backdrop-blur-md border-t border-cyber-green/20">
            <div className="flex flex-col items-center space-y-4 py-4">
              {['Home', 'Experience', 'Projects', 'Education', 'Blogs'].map((item) => (
                <Link
                  key={item}
                  to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  onClick={() => setIsDrawerOpen(false)}
                  className={`block text-sm font-mono font-medium transition-colors ${
                    location.pathname === (item === 'Home' ? '/' : `/${item.toLowerCase()}`)
                      ? 'text-cyber-green'
                      : 'text-gray-400 hover:text-cyber-green'
                  }`}
                >
                  <span className="text-cyber-cyan mr-1">{'>'}</span>{item.toLowerCase()}
                </Link>
              ))}
              <div className="flex gap-4 pt-4">
                <a
                  href="https://github.com/Sentientnapkin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyber-green transition p-2 rounded-full hover:bg-cyber-green/10"
                >
                  <FaGithub className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/sebastianvargas18"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyber-cyan transition p-2 rounded-full hover:bg-cyber-cyan/10"
                >
                  <FaLinkedin className="w-5 h-5" />
                </a>
                <EmailButton />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
