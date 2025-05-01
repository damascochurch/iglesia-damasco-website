import Link from "next/link"
import { Facebook, Youtube, Calendar, Clock } from "lucide-react"
import { SundayLiveStream } from "@/components/sunday-live-stream"
import { YouTubeEmbed } from "@/components/youtube-embed"

export function LiveStreamSection() {
  // Check if it's Sunday
  const isSunday = new Date().getDay() === 0

  return (
    <section className="py-16 bg-indigo-900 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-600 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600 rounded-full translate-x-1/3 translate-y-1/3"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Servicios En Vivo</h2>
          <p className="text-xl text-white/80 mb-10">Únete a nuestros servicios en vivo desde cualquier lugar</p>

          {/* YouTube Live Feed Component */}
          <div className="mb-12">
            {isSunday ? (
              <SundayLiveStream
                channelId="UCJx_BVxQKLfP0FmDKx5v2Tg" // Damascus Church YouTube Channel ID
                fallbackVideoId="iHzFRD8K4u0" // A recent video
              />
            ) : (
              <YouTubeEmbed channelId="UCJx_BVxQKLfP0FmDKx5v2Tg" videoId="iHzFRD8K4u0" />
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 flex flex-col items-center hover:bg-white/15 transition-all">
              <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center mb-4">
                <Facebook className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Facebook Live</h3>
              <p className="text-white/70 mb-6 text-center">
                Transmitimos en vivo todos nuestros servicios a través de nuestra página de Facebook
              </p>
              <Link
                href="https://www.facebook.com/Iglesiadediospentecostaldamasco"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors"
              >
                Ver en Facebook
              </Link>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 flex flex-col items-center hover:bg-white/15 transition-all">
              <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center mb-4">
                <Youtube className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">YouTube Live</h3>
              <p className="text-white/70 mb-6 text-center">
                También puedes ver nuestros servicios y sermones anteriores en nuestro canal de YouTube
              </p>
              <Link
                href="https://www.youtube.com/@damascochurch5364"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-red-600 text-white rounded-full font-medium hover:bg-red-700 transition-colors"
              >
                Ver en YouTube
              </Link>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold mb-4">Horario de Servicios</h3>
            <div className="grid grid-cols-1 gap-4">
              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-indigo-300 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold">Domingo Culto General</h4>
                  <div className="flex items-center gap-1 text-white/70">
                    <Clock className="w-4 h-4" />
                    <span>10:00 AM</span>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-indigo-300 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold">Miércoles Estudio Bíblico</h4>
                  <div className="flex items-center gap-1 text-white/70">
                    <Clock className="w-4 h-4" />
                    <span>7:00 PM</span>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-indigo-300 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-bold">Viernes por Departamentos</h4>
                  <div className="flex items-center gap-1 text-white/70">
                    <Clock className="w-4 h-4" />
                    <span>7:30 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
