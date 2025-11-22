'use client';

import React, { useState, useEffect } from 'react';

interface NavItem {
  label: string;
  href: string;
}

interface CustomNavProps {
  items: NavItem[];
}

const CustomNav: React.FC<CustomNavProps> = ({ items }) => {
  const [activeSection, setActiveSection] = useState('#home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (href: string) => {
    setActiveSection(href);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'backdrop-blur-md bg-white/5' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-center">
          {/* Navigation Items */}
          <ul className="flex items-center gap-1 bg-white/10 backdrop-blur-sm rounded-full px-2 py-2 border border-white/20">
            {items.map((item) => (
              <li key={item.href}>
                <button
                  onClick={() => handleClick(item.href)}
                  className={`
                    relative px-6 py-2 rounded-full text-sm font-medium
                    transition-all duration-300 ease-out
                    overflow-hidden group
                    ${
                      activeSection === item.href
                        ? 'text-white'
                        : 'text-black hover:text-white'
                    }
                  `}
                >
                  {/* Background effect */}
                  <span
                    className={`
                      absolute inset-0 rounded-full
                      ${
                        activeSection === item.href
                          ? 'bg-black opacity-100 scale-100'
                          : 'bg-[#000] opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-out'
                      }
                    `}
                  />
                  
                  {/* Glow effect on hover */}
                  <span
                    className={`
                      absolute inset-0 rounded-full blur-xl bg-[#000]
                      ${
                        activeSection === item.href
                          ? 'opacity-0'
                          : 'opacity-0 group-hover:opacity-50 transition-opacity duration-300'
                      }
                    `}
                  />

                  {/* Text */}
                  <span className="relative z-10">{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default CustomNav;
