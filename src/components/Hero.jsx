import { motion } from "framer-motion"
import chip from "../assets/bg.png"

export default function Hero() {
  return (
    <section className="relative overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10"></div>

      {/* CHIP IMAGE */}
      <img
        src={chip}
        alt="chip background"
        className="
          absolute
          right-6 md:right-16 lg:right-24
          top-1/2
          -translate-y-1/2
          w-[280px] md:w-[380px] lg:w-[420px]
          opacity-40
          pointer-events-none
          drop-shadow-[0_0_40px_rgba(34,211,238,0.6)]
        "
      />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pt-20 pb-24">

        <motion.div
          className="max-w-xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-cyan-400 leading-tight">
            IMAMSYAH
          </h1>

          <h2 className="text-2xl md:text-3xl mt-2 text-purple-400 font-semibold">
            CODE & CREATE
          </h2>

          <p className="text-white/80 font-bold mt-4 leading-relaxed">
            Building seamless web experiences from frontend to backend.
            Passionate about crafting modern and interactive web applications.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 transition rounded-lg font-medium"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-6 py-3 border border-purple-400 hover:bg-purple-500/20 transition rounded-lg font-medium"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  )
}