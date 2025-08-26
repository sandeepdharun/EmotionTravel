import { useState, useEffect, useRef } from "react";
import { Menu, X, Home, MapPin, Mountain, Waves, Building, LayoutDashboard, Compass } from "lucide-react";

const navItems = [
  { path: "/", label: "Home", icon: Home },
  { path: "/tamil-nadu", label: "Tamil Nadu", icon: Mountain },
  { path: "/kerala", label: "Kerala", icon: Waves },
  { path: "/bangalore", label: "Bangalore", icon: Building },
  { path: "/discover", label: "Discover", icon: Compass },
  { path: "/dashboard", label: "Dashboard", icon: LayoutDashboard }
];

export default function ImprovedNavigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectorStyle, setSelectorStyle] = useState({ width: 0, left: 0 });
  const [activeIndex, setActiveIndex] = useState(0);
  const navRef = useRef(null);
  const itemRefs = useRef({});

  const isActive = (index) => activeIndex === index;

  // Update selector position when active item changes
  useEffect(() => {
    if (itemRefs.current[activeIndex]) {
      const activeElement = itemRefs.current[activeIndex];
      setSelectorStyle({
        width: activeElement.offsetWidth,
        left: activeElement.offsetLeft
      });
    }
  }, [activeIndex]);

  const handleNavClick = (index, e) => {
    e.preventDefault();
    setActiveIndex(index);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <style jsx>{`
          .animated-nav {
            position: relative;
            display: flex;
            align-items: center;
          }
          
          .nav-item {
            position: relative;
            z-index: 2;
          }
          
          .nav-selector {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            height: 40px;
            background: linear-gradient(135deg, #3b82f6, #1d4ed8);
            border-radius: 20px;
            transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
            z-index: 1;
            box-shadow: 0 4px 20px rgba(59, 130, 246, 0.4);
          }
          
          .nav-item-link {
            position: relative;
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 10px 16px;
            border-radius: 20px;
            transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
            color: #6b7280;
            text-decoration: none;
            font-weight: 500;
            z-index: 2;
            white-space: nowrap;
            cursor: pointer;
          }
          
          .nav-item-link.active {
            color: white;
          }
          
          .nav-item-link:not(.active):hover {
            color: #3b82f6;
            background: rgba(59, 130, 246, 0.08);
            transform: translateY(-1px);
          }
          
          .nav-icon {
            width: 16px;
            height: 16px;
            transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
          }
          
          .nav-item-link.active .nav-icon {
            color: white;
            filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.3));
          }

          .nav-item-link:not(.active):hover .nav-icon {
            transform: scale(1.1);
          }

          @keyframes fade-in {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-fade-in {
            animation: fade-in 0.3s ease-out;
          }

          .mobile-nav-item {
            transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
            cursor: pointer;
          }

          .mobile-nav-item.active {
            background: linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(29, 78, 216, 0.15));
            color: #3b82f6;
            border-left: 3px solid #3b82f6;
            transform: translateX(4px);
          }

          .mobile-nav-item:not(.active):hover {
            background: rgba(59, 130, 246, 0.05);
            color: #3b82f6;
            transform: translateX(2px);
          }

          .logo-gradient {
            background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          }

          .text-gradient {
            background: linear-gradient(135deg, #3b82f6, #8b5cf6);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
          }
        `}</style>
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 logo-gradient rounded-lg flex items-center justify-center shadow-lg">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gradient">
                EmotiTravel
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center animated-nav" ref={navRef}>
              <div 
                className="nav-selector"
                style={{
                  width: `${selectorStyle.width}px`,
                  left: `${selectorStyle.left}px`,
                  opacity: selectorStyle.width > 0 ? 1 : 0
                }}
              />
              {navItems.map((item, index) => {
                const Icon = item.icon;
                const active = isActive(index);
                return (
                  <div
                    key={item.path}
                    ref={(el) => {
                      if (el) itemRefs.current[index] = el;
                    }}
                    onClick={(e) => handleNavClick(index, e)}
                    className={`nav-item-link nav-item ${active ? 'active' : ''}`}
                  >
                    <Icon className="nav-icon" />
                    <span>{item.label}</span>
                  </div>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-300 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-4 animate-fade-in">
              <div className="flex flex-col space-y-2">
                {navItems.map((item, index) => {
                  const Icon = item.icon;
                  const active = isActive(index);
                  return (
                    <div
                      key={item.path}
                      onClick={(e) => handleNavClick(index, e)}
                      className={`mobile-nav-item flex items-center space-x-3 px-4 py-3 rounded-lg ${
                        active ? "active" : ""
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{item.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Demo Content */}
      <div className="pt-20 p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            Improved Navigation Demo
          </h1>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">
              Currently viewing: {navItems[activeIndex].label}
            </h2>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                <h3 className="font-semibold text-blue-900 mb-2">Key Improvements:</h3>
                <ul className="text-blue-800 space-y-1">
                  <li>• Perfect alignment using actual element measurements</li>
                  <li>• Smooth animations with cubic-bezier transitions</li>
                  <li>• Improved color scheme with gradients</li>
                  <li>• Better hover effects and micro-interactions</li>
                  <li>• Enhanced mobile experience</li>
                </ul>
              </div>
              <p className="text-gray-600">
                Click on different navigation items to see the smooth animated selector movement and color transitions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}