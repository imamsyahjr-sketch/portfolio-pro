import { FaEnvelope, FaFacebook, FaInstagram, FaWhatsapp, FaGithub } from "react-icons/fa"

export default function Contact() {
  return (
    <section id="contacts" className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-xl w-full">

        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">
          Get In Touch
        </h2>

        <div className="space-y-6">

          {/* Email */}
          <div className="flex items-center gap-4 bg-white/5 p-4 rounded-lg hover:bg-white/10 transition">
            <FaEnvelope className="text-cyan-400 text-xl" />
            <span className="text-white/80 font-medium">
              imamsyahr@gmail.com
            </span>
          </div>

          {/* Facebook */}
          <div className="flex items-center gap-4 bg-white/5 p-4 rounded-lg hover:bg-white/10 transition">
            <FaFacebook className="text-cyan-400 text-xl" />
            <span className="text-white/80 font-medium">
              Imamsyah
            </span>
          </div>

          {/* Instagram */}
          <div className="flex items-center gap-4 bg-white/5 p-4 rounded-lg hover:bg-white/10 transition">
            <FaInstagram className="text-cyan-400 text-xl" />
            <span className="text-white/80 font-medium">
              Imamsyah_98
            </span>
          </div>

          {/* WhatsApp */}
          <div className="flex items-center gap-4 bg-white/5 p-4 rounded-lg hover:bg-white/10 transition">
            <FaWhatsapp className="text-cyan-400 text-xl" />
            <span className="text-white/80 font-medium">
              08125769-9960
            </span>
          </div>

          {/* Github */}
          <div className="flex items-center gap-4 bg-white/5 p-4 rounded-lg hover:bg-white/10 transition">
            <FaGithub className="text-cyan-400 text-xl" />
            <span className="text-white/80 font-medium">
              Imamsyahjr
            </span>
          </div>

        </div>
      </div>
    </section>
  )
}