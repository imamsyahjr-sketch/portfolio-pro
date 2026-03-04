import { useState, useEffect } from "react"

export default function Navbar() {
  const [active, setActive] = useState("home")

  const scrollToSection = (id) => {
    const section = document.getElementById(id)
    if (!section) return

    const yOffset = -70 // tinggi navbar
    const y =
      section.getBoundingClientRect().top + window.pageYOffset + yOffset

    window.scrollTo({ top: y, behavior: "smooth" })
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "projects", "contacts"]

      sections.forEach((id) => {
        const section = document.getElementById(id)
        if (!section) return

        const top = section.offsetTop - 120
        const bottom = top + section.offsetHeight

        if (window.scrollY >= top && window.scrollY < bottom) {
          setActive(id)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const linkClass = (id) =>
    `transition ${
      active === id ? "text-cyan-400" : "text-white/70 hover:text-cyan-400"
    }`

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur bg-[#070B14]/70 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">

        <h1
          className="text-white font-bold tracking-wide cursor-pointer"
          onClick={() => scrollToSection("home")}
        >
           
        </h1>

        <div className="flex gap-6 font-medium">
          <button onClick={() => scrollToSection("home")} className={linkClass("home")}>
            Home
          </button>

          <button onClick={() => scrollToSection("projects")} className={linkClass("projects")}>
            Projects
          </button>

          <button onClick={() => scrollToSection("contacts")} className={linkClass("contacts")}>
            Contact
          </button>

          <a href="/cv.pdf"  download className="text-white/70 hover:text-cyan-400 transition">
            Download CV
          </a>
        </div>
      </div>
    </nav>
  )
}