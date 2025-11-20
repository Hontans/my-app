"use client";

import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import SocialLinks from "@/components/SocialLinks";
import ParticlesBackground from "@/components/ParticlesBackground";
import HomeSection from "@/components/sections/HomeSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import CompetencesSection from "@/components/sections/CompetencesSection";
import VeilleSection from "@/components/sections/VeilleSection";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    // Smooth scroll to top on section change
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeSection]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-hidden">
      <ParticlesBackground />
      <Navigation activeSection={activeSection} onSectionChange={setActiveSection} />
      
      <main className="pt-20">
        {activeSection === "home" && <HomeSection />}
        {activeSection === "projets" && <ProjectsSection />}
        {activeSection === "activites" && <CompetencesSection />}
        {activeSection === "veille" && <VeilleSection />}
      </main>

      <SocialLinks />
    </div>
  );
}

