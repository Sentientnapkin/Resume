import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';
import EmailButton from './EmailButton.tsx';
import { useMediaQuery } from 'react-responsive';

const Navbar: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const navItems = [
    { name: 'home', label: 'home' },
    { name: 'work', label: 'work' },
    { name: 'blog', label: 'blog' },
    { name: 'background', label: 'background' },
    { name: 'contact', label: 'contact' }
  ];

  // Smooth scroll handler
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for fixed navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsDrawerOpen(false);
  };

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.name);
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-bg-primary/98 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Name */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, 'home')}
            className="text-xl font-mono text-text-primary hover:text-accent transition"
          >
            SV
          </a>

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
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={`#${item.name}`}
                  onClick={(e) => handleNavClick(e, item.name)}
                  className={`text-sm font-mono transition-colors ${
                    activeSection === item.name
                      ? 'text-accent'
                      : 'text-text-secondary hover:text-accent'
                  } minimal-underline`}
                >
                  {item.label}
                </a>
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
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={`#${item.name}`}
                  onClick={(e) => handleNavClick(e, item.name)}
                  className={`block text-sm font-mono transition-colors ${
                    activeSection === item.name
                      ? 'text-accent'
                      : 'text-text-secondary hover:text-accent'
                  }`}
                >
                  {item.label}
                </a>
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
