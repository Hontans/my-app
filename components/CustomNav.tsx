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
          {/* Navigation Items with animated glow */}
          <div className="relative">
            {/* Animated gradient glow */}
            <div 
              className="absolute -inset-1 rounded-full opacity-40 blur-lg"
              style={{
                background: 'linear-gradient(45deg, #5227FF, #FF9FFC, #B19EEF, #5227FF)',
                backgroundSize: '300% 300%',
                animation: 'gradient-shift 8s ease infinite'
              }}
            />
            
            <ul className="relative flex items-center gap-1 bg-white/60 backdrop-blur-xl rounded-full px-2 py-2 border border-white/50">
              {items.map((item) => (
              <li key={item.href}>
                <button
                  onClick={() => handleClick(item.href)}
                  className={`
                    px-6 py-2 rounded-full text-sm font-medium
                    ${
                      activeSection === item.href
                        ? 'text-white bg-transparent'
                        : 'text-black'
                    }
                  `}
                >
                  {item.label}
                </button>
              </li>
            ))}
            </ul>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes gradient-shift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
      `}</style>
    </nav>
  );
};

export default CustomNav;
