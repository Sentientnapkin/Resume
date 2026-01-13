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
    <nav className="fixed top-0 left-0 w-full z-50 bg-bg-primary/98 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Name */}
          <Link
            to="/"
            className="text-xl font-mono text-text-primary hover:text-accent transition"
          >
            SV
          </Link>

          {/* Drawer Toggle Button for Mobile */}
          {isMobile && (
            <button
              className="text-text-secondary hover:text-accent transition"
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
                  className={`text-sm font-mono transition-colors ${
                    location.pathname === (item === 'Home' ? '/' : `/${item.toLowerCase()}`)
                      ? 'text-accent'
                      : 'text-text-secondary hover:text-accent'
                  } minimal-underline`}
                >
                  {item.toLowerCase()}
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
                className="text-text-secondary hover:text-accent transition p-2"
              >
                <FaGithub className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/sebastianvargas18"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-accent transition p-2"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <EmailButton />
            </div>
          )}
        </div>

        {/* Mobile Drawer */}
        {isMobile && isDrawerOpen && (
          <div className="bg-bg-secondary/98 backdrop-blur-sm border-t border-border">
            <div className="flex flex-col items-center space-y-4 py-4">
              {['Home', 'Experience', 'Projects', 'Education', 'Blogs'].map((item) => (
                <Link
                  key={item}
                  to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  onClick={() => setIsDrawerOpen(false)}
                  className={`block text-sm font-mono transition-colors ${
                    location.pathname === (item === 'Home' ? '/' : `/${item.toLowerCase()}`)
                      ? 'text-accent'
                      : 'text-text-secondary hover:text-accent'
                  }`}
                >
                  {item.toLowerCase()}
                </Link>
              ))}
              <div className="flex gap-4 pt-4">
                <a
                  href="https://github.com/Sentientnapkin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-accent transition p-2"
                >
                  <FaGithub className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/sebastianvargas18"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-accent transition p-2"
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
