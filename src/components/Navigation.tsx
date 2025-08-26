import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Home, MapPin, Mountain, Waves, Building, LayoutDashboard, Compass } from "lucide-react";

const navItems = [
  { path: "/", label: "Home", icon: Home },
  { path: "/tamil-nadu", label: "Tamil Nadu", icon: Mountain },
  { path: "/kerala", label: "Kerala", icon: Waves },
  { path: "/bangalore", label: "Bangalore", icon: Building },
  { path: "/discover", label: "Discover", icon: Compass },
  { path: "/dashboard", label: "Dashboard", icon: LayoutDashboard }
];

export const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border/50">
      <style jsx>{`
        .animated-nav {
          position: relative;
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
          background: linear-gradient(135deg, hsl(var(--ocean)), hsl(var(--ocean-light)));
          border-radius: 20px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 1;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }
        
        .nav-item-link {
          position: relative;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          border-radius: 20px;
          transition: all 0.3s ease;
          color: hsl(var(--muted-foreground));
          text-decoration: none;
          font-weight: 500;
          z-index: 2;
        }
        
        .nav-item-link.active {
          color: white;
        }
        
        .nav-item-link:not(.active):hover {
          color: hsl(var(--primary));
          background: hsl(var(--primary) / 0.05);
        }
        
        .nav-icon {
          width: 16px;
          height: 16px;
          transition: all 0.3s ease;
        }
        
        .nav-item-link.active .nav-icon {
          color: white;
        }
      `}</style>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-ocean rounded-lg flex items-center justify-center">
              <MapPin className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-nature bg-clip-text text-transparent">
              EmotiTravel
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center animated-nav" style={{ position: 'relative' }}>
            <div 
              className="nav-selector"
              style={{
                width: `${getActiveItemWidth()}px`,
                left: `${getActiveItemOffset()}px`,
              }}
            />
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`nav-item-link nav-item ${active ? 'active' : ''}`}
                >
                  <Icon className="nav-icon" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="outline"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                      isActive(item.path)
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
  
  function getActiveItemWidth() {
    const activeItem = navItems.find(item => isActive(item.path));
    if (!activeItem) return 80;
    
    // Approximate widths based on label length
    const widths = {
      "Home": 80,
      "Tamil Nadu": 110,
      "Kerala": 85,
      "Bangalore": 105,
      "Discover": 95,
      "Dashboard": 110
    };
    
    return widths[activeItem.label as keyof typeof widths] || 80;
  }
  
  function getActiveItemOffset() {
    const activeIndex = navItems.findIndex(item => isActive(item.path));
    if (activeIndex === -1) return 0;
    
    // Calculate cumulative offset
    let offset = 0;
    for (let i = 0; i < activeIndex; i++) {
      const item = navItems[i];
      const widths = {
        "Home": 80,
        "Tamil Nadu": 110,
        "Kerala": 85,
        "Bangalore": 105,
        "Discover": 95,
        "Dashboard": 110
      };
      offset += widths[item.label as keyof typeof widths] || 80;
    }
    
    return offset;
  }
};