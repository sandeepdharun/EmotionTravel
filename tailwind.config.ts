import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";
import typography from "@tailwindcss/typography";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				display: ["'Cormorant Garamond'", "serif"],
				sans: ["'Manrope'", "sans-serif"],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// "Royal Amethyst & Champagne" Palette
				amethyst: {
					DEFAULT: '#1A0B2E', // Deep Amethyst
					light: '#2D1B4E',   // Lighter Violet
					glass: 'rgba(26, 11, 46, 0.7)'
				},
				champagne: {
					DEFAULT: '#D4AF37', // Classic Gold
					light: '#F5E6D3',   // Pale Champagne
					dark: '#AA8C2C',    // Antique Gold
				},
				ivory: '#FAF9F6',       // Off-white text
				sand: '#E6DDD0',        // Warm muted text
				emerald: {
					deep: '#0a1f1c',
					muted: '#1a3c36'
				},
				bio: { // Kept for legacy compatibility
					cyan: '#D4AF37',   // Gold
					gold: '#F5E6D3',   // Champagne
					purple: '#AA8C2C'  // Darker Gold
				}
			},
			backgroundImage: {
				'gradient-luminous': 'linear-gradient(135deg, #1A0B2E 0%, #0f172a 100%)',
				'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E\")",
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					from: { opacity: '0', transform: 'translateY(10px)' },
					to: { opacity: '1', transform: 'translateY(0)' }
				},
				'scale-reveal': {
					from: { transform: 'scale(0.95)', opacity: '0' },
					to: { transform: 'scale(1)', opacity: '1' }
				},
				'shimmer': {
					'0%': { backgroundPosition: '200% 0' },
					'100%': { backgroundPosition: '-200% 0' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards',
				'scale-reveal': 'scale-reveal 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards',
				'shimmer': 'shimmer 8s linear infinite',
			},
			transitionTimingFunction: {
				'lux': 'cubic-bezier(0.22, 1, 0.36, 1)', // Apple-like ease-out
			}
		}
	},
	plugins: [tailwindcssAnimate, typography],
} satisfies Config;
