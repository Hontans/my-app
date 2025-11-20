"use client";

import { Github, Linkedin } from "lucide-react";
import socialLinks from "@/data/social-links.json";

const iconMap: { [key: string]: any } = {
  github: Github,
  linkedin: Linkedin,
  flipboard: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M0 0v24h24V0H0zm19.2 9.6h-4.8v4.8h-4.8v4.8H4.8V4.8h14.4v4.8z" />
    </svg>
  ),
};

export default function SocialLinks() {
  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 flex gap-4">
      {socialLinks.map((link) => {
        const Icon = iconMap[link.icon];
        return (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 hover:scale-110 shadow-lg shadow-purple-400/30"
            aria-label={link.name}
          >
            <Icon />
          </a>
        );
      })}
    </div>
  );
}
