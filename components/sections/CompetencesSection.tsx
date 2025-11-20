"use client";

import { useState } from "react";
import React from "react";
import competences from "@/data/competences.json";
import activities from "@/data/activities.json";
import TypingAnimation from "../TypingAnimation";
import { ExternalLink, X } from "lucide-react";

export default function CompetencesSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [modalImage, setModalImage] = useState<string | null>(null);

  const handleCellClick = (links: any[]) => {
    if (links && links.length > 0) {
      const link = links[0];
      if (link.type === "image") {
        setModalImage(link.url);
      } else {
        window.open(link.url, "_blank");
      }
    }
  };

  return (
    <section className="min-h-screen py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-white bg-clip-text text-transparent">
          <TypingAnimation text="Référentiel des compétences du Bloc n° 1" />
        </h2>

        {/* Grille de compétences */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {competences.map((competence, index) => (
            <div
              key={competence.id}
              className="relative min-h-[250px] bg-slate-900/50 backdrop-blur-md border border-purple-400/20 rounded-3xl p-8 cursor-pointer transition-all duration-500 hover:border-purple-400 hover:shadow-2xl hover:shadow-purple-400/30 hover:-translate-y-2 hover:scale-105"
              onMouseEnter={() => setHoveredCard(competence.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                animation: `fadeInUp 0.8s ease-out ${index * 0.1}s both`,
              }}
            >
              <div className="flex items-center justify-center h-full">
                <h3
                  className={`text-2xl font-bold text-white text-center transition-opacity duration-300 ${
                    hoveredCard === competence.id ? "opacity-0" : "opacity-100"
                  }`}
                >
                  {competence.number}
                </h3>
              </div>

              {/* Overlay au survol */}
              <div
                className={`absolute inset-0 bg-slate-900/95 backdrop-blur-md rounded-3xl p-6 transition-opacity duration-300 overflow-y-auto ${
                  hoveredCard === competence.id ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
              >
                <h4 className="text-xl font-semibold text-white mb-4 text-center border-b border-purple-400/30 pb-3">
                  {competence.title}
                </h4>
                <ul className="space-y-3">
                  {competence.items.map((item, idx) => (
                    <li key={idx} className="text-sm text-gray-300 pl-4 relative before:content-['▸'] before:absolute before:left-0 before:text-purple-400">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Tableau des compétences */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center mb-8 text-purple-400">
            Mes Compétences BTS SIO SLAM
          </h3>
          
          <div className="overflow-x-auto rounded-2xl border border-purple-400/20">
            <table className="w-full min-w-[800px] bg-slate-900/50 backdrop-blur-md">
              <thead>
                <tr className="bg-purple-400/20">
                  <th className="p-4 text-left text-white font-semibold border border-purple-400/30">
                    Activités
                  </th>
                  {competences.map((comp) => (
                    <th
                      key={comp.id}
                      className="p-4 text-center text-white font-semibold border border-purple-400/30 text-sm"
                    >
                      {comp.number.replace("Compétence ", "C")}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {activities.categories.map((category, categoryIdx) => (
                  <React.Fragment key={category.name}>
                    <tr className="bg-purple-400/10">
                      <td
                        colSpan={7}
                        className="p-3 font-semibold text-white border border-purple-400/30"
                      >
                        {category.name}
                      </td>
                    </tr>
                    {category.activities.map((activity, idx) => (
                      <tr key={`${categoryIdx}-${idx}`} className="hover:bg-purple-400/5 transition-colors">
                        <td className="p-4 text-gray-300 border border-purple-400/30">
                          {activity.name}
                        </td>
                        {activity.competences.map((hasComp, compIdx) => (
                          <td
                            key={compIdx}
                            className={`p-4 text-center border border-purple-400/30 ${
                              hasComp
                                ? "cursor-pointer hover:bg-purple-400/20 text-purple-400 font-bold text-lg"
                                : ""
                            }`}
                            onClick={() => hasComp && handleCellClick(activity.links)}
                          >
                            {hasComp ? "✓" : ""}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modal d'image */}
      {modalImage && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setModalImage(null)}
          />
          <div className="relative max-w-4xl max-h-[80vh] p-4">
            <button
              onClick={() => setModalImage(null)}
              className="absolute -top-2 -right-2 bg-purple-400 text-slate-900 rounded-full p-2 hover:bg-purple-300 transition-colors z-10"
            >
              <X size={24} />
            </button>
            <img
              src={modalImage}
              alt="Preuve de compétence"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}
