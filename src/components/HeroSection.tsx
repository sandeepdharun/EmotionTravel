import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative flex items-center justify-center h-screen overflow-hidden bg-gradient-to-b from-black via-[#020617] to-black">
      {/* Earth Glow */}
      <motion.div
        className="absolute w-[300px] h-[300px] rounded-full bg-gradient-to-r from-blue-500 via-green-400 to-blue-700 shadow-[0_0_60px_20px_rgba(0,150,255,0.5)]"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 25 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute w-1 h-1 rounded-full bg-white/80 shadow-[0_0_6px_2px_rgba(255,255,255,0.6)]"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -10, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div
        className="relative text-center z-10 text-white"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-bold mb-4">Explore the World</h1>
        <p className="text-lg text-gray-300 mb-6">
          Discover destinations, adventures, and cultures.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 rounded-2xl bg-blue-600 hover:bg-blue-500 transition"
        >
          Start Journey
        </motion.button>
      </motion.div>
    </section>
  );
}
