"use client";

import projects from "@/data/projects.json";
import TypingAnimation from "../TypingAnimation";
import { ExternalLink, Github } from "lucide-react";

export default function ProjectsSection() {
  return (
    <section className="min-h-screen py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-white bg-clip-text text-transparent">
          <TypingAnimation text="Mes Projets" />
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-slate-900/50 backdrop-blur-md border border-purple-400/20 rounded-3xl p-8 hover:border-purple-400 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-400/30 hover:-translate-y-2"
              style={{
                animation: `fadeInUp 0.8s ease-out ${index * 0.1}s both`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <h3 className="text-2xl font-bold text-purple-400 mb-4 relative z-10">
                {project.title}
              </h3>
              
              <p className="text-gray-300 mb-4 leading-relaxed relative z-10">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6 relative z-10">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm bg-purple-400/10 text-purple-300 rounded-full border border-purple-400/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-3 relative z-10">
                {project.links.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-transparent border-2 border-purple-400 text-purple-400 rounded-full text-sm font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300"
                  >
                    {link.label.includes("GitHub") ? (
                      <Github size={16} />
                    ) : (
                      <ExternalLink size={16} />
                    )}
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
