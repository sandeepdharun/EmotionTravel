import { useEffect, useState } from "react";

export function PortalHero() {
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setOffset(window.scrollY);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="absolute inset-0 z-0 overflow-hidden">
            {/* Base Gradient - Let body background show through, just add atmosphere */}
            <div className="absolute inset-0 bg-transparent" />

            {/* Animated Noise */}
            <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150" />

            {/* Portal Effect - CSS Only */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] rounded-full bg-indigo-500/20 blur-[100px] animate-pulse-slow"
                style={{ transform: `translate(-50%, -50%) scale(${1 + offset * 0.001})` }}
            />
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] rounded-full bg-purple-500/20 blur-[80px] animate-pulse delay-700"
                style={{ transform: `translate(-50%, -50%) scale(${1 + offset * 0.001})` }}
            />

            {/* Vignette - Use Amethyst/Darker tone instead of pure black */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(15,8,30,0.8)_100%)]" />

            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/20 pointer-events-none" />
        </div>
    );
}
