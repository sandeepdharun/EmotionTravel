import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface PageTransitionProps {
  children: React.ReactNode;
}

export const PageTransition = ({ children }: PageTransitionProps) => {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState('fadeIn');

  useEffect(() => {
    if (location !== displayLocation) {
      setTransitionStage('fadeOut');
    }
  }, [location, displayLocation]);

  return (
    <div className="relative">
      {/* Travel-themed transition overlay */}
      <div
        className={`fixed inset-0 z-50 pointer-events-none transition-all duration-700 ease-in-out ${
          transitionStage === 'fadeOut'
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-full'
        }`}
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        }}
        onTransitionEnd={() => {
          if (transitionStage === 'fadeOut') {
            setDisplayLocation(location);
            setTransitionStage('fadeIn');
          }
        }}
      >
        {/* Animated travel icons during transition */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            {/* Airplane animation */}
            <div className="absolute -top-20 -left-20 animate-bounce delay-100">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="white" className="opacity-80">
                <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
              </svg>
            </div>
            
            {/* Compass animation */}
            <div className="absolute -top-10 left-20 animate-pulse delay-300">
              <svg width="35" height="35" viewBox="0 0 24 24" fill="white" className="opacity-70">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            
            {/* Heart animation */}
            <div className="absolute top-10 -left-15 animate-ping delay-500">
              <svg width="30" height="30" viewBox="0 0 24 24" fill="white" className="opacity-60">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </div>
            
            {/* Map pin animation */}
            <div className="absolute top-5 left-10 animate-bounce delay-700">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="white" className="opacity-75">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
            </div>

            {/* Central loading text */}
            <div className="text-white text-2xl font-bold animate-pulse">
              Exploring...
            </div>
          </div>
        </div>

        {/* Animated wave effect */}
        <div className="absolute bottom-0 left-0 w-full h-32 overflow-hidden">
          <svg
            className="absolute bottom-0 w-full h-full animate-pulse"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              fill="white"
            />
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              fill="white"
            />
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              fill="white"
            />
          </svg>
        </div>
      </div>

      {/* Page content */}
      <div
        className={`transition-all duration-500 ease-out ${
          transitionStage === 'fadeIn'
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-4'
        }`}
      >
        {children}
      </div>
    </div>
  );
};