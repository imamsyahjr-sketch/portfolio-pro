export default function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden py-20 md:py-24">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        <h2 className="text-2xl font-semibold text-white mb-8">PROJECTS</h2>

        {/* nanti isi slider */}
        <div className="flex gap-6 overflow-x-auto pb-4">
          <div className="min-w-[300px] h-[180px] rounded-xl border border-cyan-400/30"></div>
          <div className="min-w-[300px] h-[180px] rounded-xl border border-purple-400/30"></div>
          <div className="min-w-[300px] h-[180px] rounded-xl border border-cyan-400/30"></div>
        </div>
      </div>

    </section>
  )
}