"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const sections = [
  { id: "home", label: "Parcours Professionnel" },
  { id: "projets", label: "Projets" },
  { id: "activites", label: "Référentiel des compétences" },
  { id: "veille", label: "Veille technologique" },
];

export default function Navigation({ activeSection, onSectionChange }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleNavClick = (sectionId: string) => {
    onSectionChange(sectionId);
    setIsOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-sm">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl md:text-2xl font-bold">
            Sylvain <span className="text-purple-400">HONTANS</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => handleNavClick(section.id)}
                className={`font-medium transition-colors ${
                  activeSection === section.id
                    ? "text-purple-400"
                    : "text-white hover:text-purple-400"
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </header>

      {/* Mobile Drawer */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          />
          <div className="fixed top-0 right-0 h-full w-72 bg-slate-900/95 backdrop-blur-md z-50 md:hidden transform transition-transform duration-300">
            <div className="flex justify-between items-center p-6 border-b border-white/10">
              <h2 className="text-xl font-bold">Menu</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>
            <div className="flex flex-col p-6 gap-4">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => handleNavClick(section.id)}
                  className={`text-left py-3 px-4 rounded-lg border-l-4 transition-colors ${
                    activeSection === section.id
                      ? "bg-purple-400/20 border-purple-400 text-purple-400"
                      : "border-transparent text-white hover:bg-white/5"
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
}
