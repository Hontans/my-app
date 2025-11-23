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
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const navItemsRef = React.useRef<{ [key: string]: HTMLButtonElement | null }>({});

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const activeButton = navItemsRef.current[activeSection];
    if (activeButton) {
      const parent = activeButton.parentElement?.parentElement;
      if (parent) {
        const parentRect = parent.getBoundingClientRect();
        const buttonRect = activeButton.getBoundingClientRect();
        setIndicatorStyle({
          left: buttonRect.left - parentRect.left,
          width: buttonRect.width,
        });
      }
    }
  }, [activeSection]);

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
              {/* Animated indicator with glow effect */}
              <div
                className="absolute rounded-full transition-all duration-500 ease-out"
                style={{
                  left: `${indicatorStyle.left}px`,
                  width: `${indicatorStyle.width}px`,
                  height: 'calc(100% - 16px)',
                  top: '8px',
                  zIndex: 0,
                  background: 'linear-gradient(135deg, rgba(0,0,0,0.95) 0%, rgba(30,30,30,0.9) 50%, rgba(0,0,0,0.95) 100%)',
                  boxShadow: `
                    0 0 20px rgba(0, 0, 0, 0.3),
                    0 0 40px rgba(0, 0, 0, 0.2),
                    inset 0 1px 0 rgba(255, 255, 255, 0.1),
                    inset 0 -1px 0 rgba(0, 0, 0, 0.5)
                  `,
                  transform: 'scale(1)',
                  animation: 'pulse-glow 2s ease-in-out infinite',
                }}
              />
              
              {items.map((item) => (
              <li key={item.href} className="relative z-10">
                <button
                  ref={(el) => {
                    navItemsRef.current[item.href] = el;
                  }}
                  onClick={() => handleClick(item.href)}
                  className={`
                    px-6 py-2 rounded-full text-sm font-medium transition-all duration-300
                    ${
                      activeSection === item.href
                        ? 'text-white scale-105'
                        : 'text-black hover:text-gray-600 hover:scale-105'
                    }
                  `}
                  style={{ fontFamily: "'poppins', Tahoma, Geneva, Verdana, sans-serif" }}
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
        
        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 
              0 0 20px rgba(0, 0, 0, 0.3),
              0 0 40px rgba(0, 0, 0, 0.2),
              inset 0 1px 0 rgba(255, 255, 255, 0.1),
              inset 0 -1px 0 rgba(0, 0, 0, 0.5);
            transform: scale(1);
          }
          50% {
            box-shadow: 
              0 0 30px rgba(0, 0, 0, 0.4),
              0 0 60px rgba(0, 0, 0, 0.3),
              0 0 80px rgba(0, 0, 0, 0.1),
              inset 0 1px 0 rgba(255, 255, 255, 0.15),
              inset 0 -1px 0 rgba(0, 0, 0, 0.6);
            transform: scale(1.02);
          }
        }
      `}</style>
    </nav>
  );
};

export default CustomNav;
