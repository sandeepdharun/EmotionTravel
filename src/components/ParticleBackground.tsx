interface ParticleBackgroundProps {
  theme?: "ocean" | "forest" | "sunset" | "minimal";
}

export const ParticleBackground = ({ theme = "minimal" }: ParticleBackgroundProps) => {
  const getThemeStyles = () => {
    switch (theme) {
      case "ocean":
        return "bg-gradient-to-br from-ocean/5 to-ocean-light/5";
      case "forest":
        return "bg-gradient-to-br from-forest/5 to-forest-light/5";
      case "sunset":
        return "bg-gradient-to-br from-sunset/5 to-sunset-light/5";
      default:
        return "bg-gradient-to-br from-primary/3 to-primary/1";
    }
  };

  return (
    <div className={`absolute inset-0 -z-10 ${getThemeStyles()}`}>
      {/* Floating octagonal particles using CSS */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 25 }).map((_, i) => (
          <div
            key={i}
            className={`absolute w-3 h-3 bg-current opacity-30 animate-pulse`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
              clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
              transform: `rotate(${Math.random() * 360}deg) scale(${0.5 + Math.random() * 1.5})`,
            }}
          />
        ))}
        
        {/* Additional floating octagonal particles with different sizes */}
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={`large-${i}`}
            className={`absolute w-2 h-2 bg-current opacity-20 animate-pulse`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 6}s`,
              clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
              transform: `rotate(${Math.random() * 360}deg) scale(${0.3 + Math.random() * 0.8})`,
            }}
          />
        ))}
      </div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-background/10" />
    </div>
  );
};