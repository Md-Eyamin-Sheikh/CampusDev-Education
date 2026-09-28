import React from 'react';

/**
 * Decorative landing-page artwork with responsive globe visual positioned as hero background canvas.
 */
export const HeroGlobe: React.FC = () => (
  <div className="hero-globe-scene absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
    {/* Radial vignette overlay to blend globe seamlessly into dark background */}
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_55%_at_50%_35%,transparent_30%,#0C1929_95%)] z-1 pointer-events-none" />
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0C1929]/30 to-[#0C1929] z-1 pointer-events-none" />

    <picture className="block w-full h-full relative z-0">
      <source media="(min-width: 640px)" srcSet="/globe.png" />
      <img 
        className="hero-globe-art select-none pointer-events-none" 
        src="/globe-mobile.png" 
        alt="CampusDev Global Network Globe" 
      />
    </picture>
  </div>
);
