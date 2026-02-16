import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, MapPin, Compass, LayoutDashboard, Sparkles, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { path: "/", label: "Home", icon: Home },
  { path: "/tamil-nadu", label: "Tamil Nadu", icon: MapPin },
  { path: "/kerala", label: "Kerala", icon: Sparkles },
  { path: "/discover", label: "Discover", icon: Compass },
  { path: "/dashboard", label: "Dashboard", icon: LayoutDashboard }
];

export const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  return (
    <>
      <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
        <div
          className={cn(
            "relative flex items-center justify-between px-3 py-2 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
            "rounded-full border backdrop-blur-3xl backdrop-saturate-[180%]",
            scrolled
              ? "bg-slate-900/30 border-white/20 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] py-2"
              : "bg-white/[0.02] border-white/10 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] py-3"
          )}
        >
          {/* Shine Effect on Top Edge */}
          <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-50" />

          {/* Glass Specular Reflection (Gradient) */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/10 via-transparent to-transparent pointer-events-none" />

          {/* Logo Section */}
          <div className="pl-4 pr-6 relative z-10 flex items-center gap-2">
            <span className="text-xl font-display font-medium text-white tracking-wide italic drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
              Emotion Escapes
            </span>
          </div>

          {/* Desktop Links with Ultra-Premium Liquid Bubble */}
          <div className="hidden md:flex items-center gap-1 relative">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "relative z-10 flex items-center gap-2 px-5 py-2.5 rounded-full transition-all duration-300 group",
                    isActive ? "text-white" : "text-white/60 hover:text-white"
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="nav-bubble"
                      className="absolute inset-0 rounded-full"
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6
                      }}
                      style={{
                        background: "rgba(255, 255, 255, 0.15)",
                        boxShadow: `
                          0 4px 15px rgba(0, 0, 0, 0.1), 
                          inset 0 0 20px rgba(255, 255, 255, 0.2), 
                          inset 0 1px 2px rgba(255, 255, 255, 0.6)
                        `,
                        backdropFilter: "blur(8px)",
                        zIndex: -1
                      }}
                    >
                      {/* Inner Shine for Liquid Effect */}
                      <div className="absolute top-1 left-4 right-4 h-1 bg-white/40 rounded-full blur-[2px] opacity-60" />
                      {/* Bottom Glow */}
                      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-white/10 to-transparent rounded-b-full opacity-40" />
                    </motion.div>
                  )}

                  <div className="relative z-10 flex items-center gap-2">
                    <item.icon
                      size={16}
                      className={cn(
                        "transition-all duration-300",
                        isActive ? "scale-110 drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" : "group-hover:scale-110"
                      )}
                    />
                    <span className={cn(
                      "text-sm font-medium tracking-wide transition-all duration-300",
                      isActive && "drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]"
                    )}>
                      {item.label}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="relative z-10 md:hidden px-2">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2 rounded-full text-white/80 hover:bg-white/10 transition-colors"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Full Screen Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(24px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 z-[60] bg-slate-900/60 flex flex-col items-center justify-center text-center"
          >
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-8 right-8 p-4 rounded-full bg-white/5 text-white/70 hover:bg-white/10 hover:text-white transition-colors border border-white/5"
            >
              <X size={24} />
            </button>

            <motion.div
              className="flex flex-col gap-8"
              initial="closed"
              animate="open"
              variants={{
                open: { transition: { staggerChildren: 0.1 } },
                closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
              }}
            >
              {navItems.map((item) => (
                <motion.div
                  key={item.path}
                  variants={{
                    open: { y: 0, opacity: 1 },
                    closed: { y: 20, opacity: 0 }
                  }}
                >
                  <Link
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "relative flex items-center justify-center gap-3 text-3xl font-display italic transition-all duration-300",
                      location.pathname === item.path
                        ? "text-white scale-110 drop-shadow-[0_0_20px_rgba(255,255,255,0.6)]"
                        : "text-white/40 hover:text-white hover:scale-105"
                    )}
                  >
                    <item.icon size={28} className={location.pathname === item.path ? "opacity-100" : "opacity-0"} />
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};