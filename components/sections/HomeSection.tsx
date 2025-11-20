"use client";

import { useState } from "react";
import profile from "@/data/profile.json";
import TypingAnimation from "../TypingAnimation";
import ContactModal from "../ContactModal";
import { FileDown } from "lucide-react";

export default function HomeSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
          {profile.greeting}
        </h1>

        <h2 className="text-3xl md:text-4xl font-bold text-purple-400">
          <TypingAnimation text={profile.title} />
        </h2>

        <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
          {profile.description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-8 py-3 min-w-[200px] bg-transparent border-2 border-purple-400 text-purple-400 rounded-full font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 hover:scale-105 shadow-lg shadow-purple-400/30"
          >
            Me contacter
          </button>
          <a
            href={profile.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 min-w-[200px] bg-transparent border-2 border-purple-400 text-purple-400 rounded-full font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 hover:scale-105 shadow-lg shadow-purple-400/30 flex items-center justify-center gap-2"
          >
            <FileDown size={20} />
            CV
          </a>
        </div>
      </div>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
