import Link from "next/link"
import { Instagram, Facebook, Youtube } from "lucide-react"

export function SocialMediaSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Conéctate Con Nosotros</h2>
          <p className="text-lg mb-10 text-white/90">
            Sigue nuestras redes sociales para mantenerte informado sobre eventos, servicios y más.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Instagram Card - Featured for Events */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 flex flex-col items-center hover:bg-white/20 transition-all transform hover:-translate-y-1">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 flex items-center justify-center mb-4">
                <Instagram className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Instagram</h3>
              <p className="text-white/80 mb-4 text-center">Sigue nuestros eventos y actividades en Instagram</p>
              <Link
                href="https://www.instagram.com/iglesia.damasco/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-white text-purple-600 rounded-full font-medium hover:bg-purple-100 transition-colors"
              >
                Seguir
              </Link>
            </div>

            {/* Facebook Card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 flex flex-col items-center hover:bg-white/20 transition-all transform hover:-translate-y-1">
              <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center mb-4">
                <Facebook className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Facebook</h3>
              <p className="text-white/80 mb-4 text-center">Conéctate con nuestra comunidad en Facebook</p>
              <Link
                href="https://www.facebook.com/Iglesiadediospentecostaldamasco"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-white text-blue-600 rounded-full font-medium hover:bg-blue-100 transition-colors"
              >
                Visitar
              </Link>
            </div>

            {/* YouTube Card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 flex flex-col items-center hover:bg-white/20 transition-all transform hover:-translate-y-1">
              <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center mb-4">
                <Youtube className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">YouTube</h3>
              <p className="text-white/80 mb-4 text-center">Mira nuestros servicios y sermones en YouTube</p>
              <Link
                href="https://www.youtube.com/@damascochurch5364"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-white text-red-600 rounded-full font-medium hover:bg-red-100 transition-colors"
              >
                Suscribirse
              </Link>
            </div>
          </div>

          <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold mb-3">Próximos Eventos</h3>
            <p className="mb-4">
              Para ver todos nuestros próximos eventos y actividades, visita nuestra página de Instagram donde
              publicamos regularmente actualizaciones.
            </p>
            <Link
              href="https://www.instagram.com/iglesia.damasco/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-medium hover:from-purple-600 hover:to-pink-600 transition-colors"
            >
              <Instagram className="w-5 h-5" />
              Ver Eventos en Instagram
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
