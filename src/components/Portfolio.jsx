import chip from "../assets/bg.png"
import profile from "../assets/profile.jpg"
import { motion } from "framer-motion"
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaGithub,
  FaReact,
  FaLaravel,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaDatabase
} from "react-icons/fa"

import { SiTailwindcss, SiMysql } from "react-icons/si"

export default function Portfolio() {
  return (
    <main className="relative bg-[#070B14] text-white overflow-hidden font-body antialiased">

      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10"></div>
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px]"></div>
      </div>

      {/* HERO */}
      <section id="home" className="relative min-h-screen flex items-center">
        <img
          src={chip}
          alt="chip"
          className="absolute right-10 md:right-20 top-1/2 -translate-y-1/2 w-[320px] md:w-[420px] opacity-40 pointer-events-none"
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-2xl"
          >
            <h1 className="text-lg md:text-xl text-purple-400 tracking-wide font-medium">
              Hello, I’m
            </h1>

            <h2 className="text-5xl md:text-6xl font-bold mt-2 tracking-tight font-heading">
              IMAMSYAH
            </h2>

            <h3 className="text-lg md:text-xl mt-4 text-cyan-400 font-semibold tracking-[0.25em]">
              FULLSTACK DEVELOPER
            </h3>

            <p className="text-white/70 mt-6 leading-relaxed text-base md:text-lg max-w-xl">
              I build scalable and high-performance web applications from
              frontend interfaces to backend systems. Focused on clean
              architecture, seamless user experience, and modern technologies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SKILLS + PROJECTS */}
      <section id="projects" className="relative py-14 md:py-20">
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-8">

          {/* SKILLS */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur">
            <h2 className="text-xl font-semibold mb-6 tracking-wide font-heading">
              SKILLS
            </h2>

            <div className="space-y-6">

              <div>
                <p className="text-sm text-white/50 mb-3 tracking-widest font-medium">
                  CORE STACK
                </p>
                <div className="grid grid-cols-4 gap-4 text-3xl">
                  <FaReact className="text-cyan-400 hover:-translate-y-1 transition" />
                  <FaLaravel className="text-red-500 hover:-translate-y-1 transition" />
                  <SiTailwindcss className="text-cyan-400 hover:-translate-y-1 transition" />
                  <SiMysql className="text-blue-400 hover:-translate-y-1 transition" />
                </div>
              </div>

              <div>
                <p className="text-sm text-white/50 mb-3 tracking-widest font-medium">
                  FUNDAMENTAL
                </p>
                <div className="grid grid-cols-4 gap-4 text-3xl">
                  <FaHtml5 className="text-orange-500 hover:-translate-y-1 transition" />
                  <FaCss3Alt className="text-blue-500 hover:-translate-y-1 transition" />
                  <FaJs className="text-yellow-400 hover:-translate-y-1 transition" />
                  <FaDatabase className="text-purple-400 hover:-translate-y-1 transition" />
                </div>
              </div>

              <div>
                <p className="text-sm text-white/50 mb-3 tracking-widest font-medium">
                  TOOLS
                </p>
                <div className="grid grid-cols-4 gap-4 text-3xl">
                  <FaGitAlt className="text-orange-500 hover:-translate-y-1 transition" />
                  <FaGithub className="text-white hover:-translate-y-1 transition" />
                </div>
              </div>

            </div>
          </div>

          {/* PROJECTS */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur">
            <h2 className="text-xl font-semibold mb-6 tracking-wide font-heading">
              PROJECTS
            </h2>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="group p-4 rounded-xl bg-white/5 border border-cyan-400/30 hover:-translate-y-1 hover:border-cyan-400 transition">
                <h3 className="text-cyan-400 font-semibold mb-2">
                  Company Profile Nursery Mengkiang
                </h3>
                <p className="text-white/70 text-sm">
                  Web profil perusahaan yang menyajikan gambaran perusahaan nursery.
                </p>
              </div>

              <div className="group p-4 rounded-xl bg-white/5 border border-purple-400/30 hover:-translate-y-1 hover:border-purple-400 transition">
                <h3 className="text-purple-400 font-semibold mb-2">
                  Daily Report App
                </h3>
                <p className="text-white/70 text-sm">
                  Aplikasi laporan harian berbasis web dengan fitur export dan filter.
                </p>
              </div>

              <div className="group p-4 rounded-xl bg-white/5 border border-cyan-400/30 hover:-translate-y-1 hover:border-cyan-400 transition">
                <h3 className="text-cyan-400 font-semibold mb-2">
                  Radio Web
                </h3>
                <p className="text-white/70 text-sm">
                  Website streaming radio berbagai frekuensi.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CONTACT + ABOUT */}
      <section id="contacts" className="relative py-14 md:py-20">
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-8">

          {/* CONTACT */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur">
            <h2 className="text-xl font-semibold mb-6 tracking-wide font-heading">
              CONTACT
            </h2>

            <div className="space-y-4">
              {[
                ["imamsyahr@gmail.com", FaEnvelope],
                ["Imamsyah", FaFacebook],
                ["Imamsyah_98", FaInstagram],
                ["08125769-9960", FaWhatsapp],
                ["Imamsyahjr", FaGithub],
              ].map(([text, Icon], i) => (
                <div key={i} className="flex items-center gap-4 bg-white/5 p-3 rounded-lg hover:bg-white/10 transition">
                  <Icon className="text-cyan-400 text-lg" />
                  <span className="text-white/80">{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ABOUT */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur">
            <h2 className="text-xl font-semibold mb-6 tracking-wide font-heading">
              ABOUT ME
            </h2>

            <div className="flex items-center gap-6">
              <img
                src={profile}
                alt="profile"
                className="w-28 h-28 rounded-full object-cover border-2 border-cyan-400"
              />

              <p className="text-white/70 leading-relaxed text-justify">
  I’m Imamsyah, a Junior Fullstack Developer based in Indonesia. I graduated with a Bachelor’s degree in Electrical Engineering from Tanjungpura University, Pontianak. I enjoy turning ideas into functional and user-friendly web applications, working across both frontend and backend. I’m passionate about learning new technologies and improving my craft, and I’m currently open to freelance projects as well as full-time opportunities as a Fullstack Developer.
</p>
            </div>
          </div>

        </div>
      </section>

    </main>
  )
}