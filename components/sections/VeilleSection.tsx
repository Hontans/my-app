"use client";

import veille from "@/data/veille.json";
import TypingAnimation from "../TypingAnimation";
import { ExternalLink } from "lucide-react";

export default function VeilleSection() {
  return (
    <section className="min-h-screen py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-white bg-clip-text text-transparent">
          <TypingAnimation text="Veille Technologique" />
        </h2>

        <div className="space-y-8">
          {/* Définition */}
          <div
            className="bg-slate-900/50 backdrop-blur-md border border-purple-400/20 rounded-3xl p-8 hover:border-purple-400 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-400/30"
            style={{ animation: "fadeInUp 0.8s ease-out 0s both" }}
          >
            <h3 className="text-2xl font-bold text-purple-400 mb-4 text-center">
              {veille.definition.title}
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              {veille.definition.description}
            </p>
            <p className="text-white font-semibold">
              <span className="text-purple-400">Mes thèmes :</span> {veille.definition.themes}
            </p>
          </div>

          {/* Flipboard */}
          <div
            className="bg-slate-900/50 backdrop-blur-md border border-purple-400/20 rounded-3xl p-8 hover:border-purple-400 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-400/30"
            style={{ animation: "fadeInUp 0.8s ease-out 0.2s both" }}
          >
            <h3 className="text-2xl font-bold text-purple-400 mb-4 text-center">
              {veille.flipboard.title}
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {veille.flipboard.description}
            </p>
          </div>

          {/* Lien Flipboard */}
          <div
            className="flex justify-center"
            style={{ animation: "fadeInUp 0.8s ease-out 0.4s both" }}
          >
            <a
              href={veille.flipboard.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-purple-400 text-purple-400 rounded-full font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 hover:scale-105 shadow-lg shadow-purple-400/30"
            >
              <ExternalLink size={20} />
              Consulter ma veille sur Flipboard
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
