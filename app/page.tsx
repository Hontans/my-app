'use client';

import LiquidEther from "@/components/LiquidEther";
import CustomNav from "@/components/CustomNav";
import TextPressure from "@/components/TextPressure";
import TextType from "@/components/TextType";

export default function Home() {
  return (
    <>
      {/* Background Liquid Ether */}
      <div className="fixed inset-0 w-full h-screen z-0">
        <LiquidEther
          colors={['#5227FF', '#FF9FFC', '#B19EEF']}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Navigation - Custom Nav */}
        <CustomNav
          items={[
            { label: "Parcours", href: "#home" },
            { label: "Projets", href: "#projets" },
            { label: "Compétences", href: "#activites" },
            { label: "Veille", href: "#veille" }
          ]}
        />

        {/* Main Section */}
        <main className="flex-1 flex items-center justify-center px-8 py-16">
          <div className="max-w-6xl w-full space-y-12">
            {/* Title - Orange : Text Pressure */}
            <div className="w-full h-20 max-w-4xl mx-auto">
              <TextPressure
                text="SYLVAIN HONTANS"
                width={true}
                weight={true}
                italic={true}
                alpha={false}
                flex={true}
                stroke={false}
                scale={false}
                textColor="#000000"
                minFontSize={24}
                maxFontSize={60}
                className="font-bold"
              />
            </div>

            {/* Subtitle - Jaune : Text Type */}
            <div className="text-center">
              <TextType
                text="Parcours Professionnel"
                as="h2"
                className="text-4xl md:text-5xl font-medium text-black"
                typingSpeed={80}
                pauseDuration={3000}
                deletingSpeed={50}
                loop={false}
                showCursor={true}
                cursorCharacter="|"
                cursorClassName="text-black"
              />
            </div>

            {/* Description Text */}
            <div className="text-center max-w-4xl mx-auto">
              <p className="text-lg md:text-xl text-black leading-relaxed backdrop-blur-sm bg-white/10 p-8 rounded-2xl shadow-xl">
                Je m'appelle HONTANS Sylvain, j'ai 18 ans et je suis titulaire d'un Bac PRO Systèmes Numériques option RISC (Réseaux Informatiques et Systèmes Communicants). 
                Actuellement, je poursuis mes études en seconde année de BTS Services Informatiques aux Organisations (SIO) avec la spécialité SLAM (Solutions Logicielles et Applications Métiers).
              </p>
            </div>

            {/* Buttons */}
            <div className="flex gap-6 justify-center items-center">
              <a
                href="#contact"
                className="px-8 py-4 bg-white/20 backdrop-blur-md text-black rounded-full font-semibold text-lg hover:bg-white/30 transition-all duration-300 border-2 border-black/30 hover:border-black/50"
              >
                Me contacter
              </a>
              <a
                href="/CV_SH.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white text-black rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300"
              >
                CV
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-8 justify-center items-center pt-8">
              <a
                href="https://github.com/Hontans"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-gray-700 transition-colors duration-300"
                aria-label="GitHub"
              >
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a
                href="https://flipboard.com/@sylvainhontans/veille-technologique-sis54gi1y"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-gray-700 transition-colors duration-300"
                aria-label="Flipboard"
              >
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M0 0v24h24V0H0zm19.2 9.6h-4.8v4.8H9.6v4.8H4.8V4.8h14.4v4.8z"/>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/sylvain-hontans-0aa645345/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-gray-700 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
