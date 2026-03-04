export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-20 md:py-24">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        <h2 className="text-2xl font-semibold text-white mb-6">ABOUT ME</h2>

        <p className="text-white/70 max-w-xl leading-relaxed">
          I am a fullstack developer who loves building modern web applications
          with clean UI and smooth user experience.
        </p>
      </div>

    </section>
  )
}