import { useEffect, useRef } from "react";
import asianLandscape from "@/assets/asian-landscape.jpg";

const ArtisticBackground = () => {
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Add gentle scroll parallax effect
    const handleScroll = () => {
      if (canvasRef.current) {
        const scrolled = window.pageYOffset;
        const parallax = scrolled * 0.5;
        canvasRef.current.style.transform = `translateY(${parallax}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Main painting background */}
      <div 
        ref={canvasRef}
        className="absolute inset-0 canvas-texture"
        style={{
          backgroundImage: `url(${asianLandscape})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Canvas texture overlay */}
        <div className="absolute inset-0 bg-canvas/10"></div>
        
        {/* Animated water ripple effect */}
        <div className="absolute bottom-20 left-1/4 w-32 h-32 rounded-full bg-water-ripple/30 water-ripple"></div>
        <div className="absolute bottom-32 right-1/3 w-24 h-24 rounded-full bg-water-ripple/20 water-ripple" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* 3D objects floating around edges */}
      <div className="absolute top-20 right-10 w-16 h-16 bg-gradient-to-br from-amber-700 to-amber-900 rounded-lg shadow-artistic float-gentle opacity-80"></div>
      <div className="absolute bottom-40 left-10 w-12 h-20 bg-gradient-to-br from-amber-800 to-amber-950 rounded shadow-artistic float-gentle" style={{ animationDelay: '3s' }}></div>
      <div className="absolute top-1/2 right-20 w-10 h-10 bg-gradient-to-br from-slate-600 to-slate-800 rounded-full shadow-artistic float-gentle" style={{ animationDelay: '1.5s' }}></div>
      
      {/* Coffee stains */}
      <div className="absolute top-1/3 left-20 w-8 h-8 bg-amber-900/40 rounded-full blur-sm"></div>
      <div className="absolute bottom-1/4 right-32 w-6 h-6 bg-amber-800/30 rounded-full blur-sm"></div>
      
      {/* Atmospheric overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/60"></div>
    </div>
  );
};

export default ArtisticBackground;