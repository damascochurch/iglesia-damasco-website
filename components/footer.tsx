import Link from "next/link"
import { Facebook, Youtube, Instagram, MapPin, Phone, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <div className="flex flex-col mb-4">
              <span className="text-sm font-medium">IGLESIA DE DIOS</span>
              <span className="text-lg font-bold font-cinzel tracking-wider text-white">PENTECOSTAL DAMASCO</span>
            </div>
            <p className="text-gray-400 mb-4">
              Somos una iglesia comprometida con llevar el mensaje de amor y esperanza a nuestra comunidad.
            </p>
            <div className="flex gap-3">
              <Link
                href="https://www.facebook.com/Iglesiadediospentecostaldamasco"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-full hover:bg-primary hover:text-gray-900 transition-colors"
              >
                <Facebook size={18} />
              </Link>
              <Link
                href="https://www.youtube.com/@damascochurch5364"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-full hover:bg-primary hover:text-gray-900 transition-colors"
              >
                <Youtube size={18} />
              </Link>
              <Link
                href="https://www.instagram.com/iglesia.damasco/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-full hover:bg-primary hover:text-gray-900 transition-colors"
              >
                <Instagram size={18} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/sobre-nosotros" className="text-gray-400 hover:text-primary transition-colors">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="/ministerios" className="text-gray-400 hover:text-primary transition-colors">
                  Ministerios
                </Link>
              </li>
              <li>
                <Link href="/calendario" className="text-gray-400 hover:text-primary transition-colors">
                  Calendario
                </Link>
              </li>
              <li>
                <Link href="/donaciones" className="text-gray-400 hover:text-primary transition-colors">
                  Donaciones
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-gray-400 hover:text-primary transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Información de Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-gray-400">1349 S. Tibbs Avenue., Indianapolis, IN, United States</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span className="text-gray-400">(317) 241-7085</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div className="text-gray-400">
                  <p>Domingo: 10:00 AM</p>
                  <p>Miércoles: 7:00 PM</p>
                  <p>Viernes: 7:30 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500">
          <p>© {new Date().getFullYear()} Iglesia de Dios Pentecostal Damasco. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
