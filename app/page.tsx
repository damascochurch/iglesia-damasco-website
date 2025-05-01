"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react"
import { SundayLiveStream } from "@/components/sunday-live-stream"
import { YouTubeEmbed } from "@/components/youtube-embed"

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoplay, setIsAutoplay] = useState(true)
  const autoplayRef = useRef(null)

  // Check if it's Sunday
  const isSunday = new Date().getDay() === 0

  const slides = [
    {
      image: "/worship-cross.jpeg",
      title: "Bienvenidos a Damasco",
      subtitle: "Un lugar donde encontrarás amor, comunidad y propósito en Cristo",
      buttonText: "Conócenos",
      buttonLink: "/sobre-nosotros",
    },
    {
      image: "/worship-hands.jpeg",
      title: "Adoración Vibrante",
      subtitle: "Experimenta la presencia de Dios a través de la adoración",
      buttonText: "Horarios de Servicio",
      buttonLink: "/calendario",
    },
    {
      image: "/prayer-ministry.jpeg",
      title: "Ministerio de Oración",
      subtitle: "Creemos en el poder transformador de la oración",
      buttonText: "Enviar Petición",
      buttonLink: "/contacto",
    },
    {
      image: "/dance-ministry.jpeg",
      title: "Ministerios Diversos",
      subtitle: "Descubre cómo puedes servir y crecer en tu fe",
      buttonText: "Nuestros Ministerios",
      buttonLink: "/ministerios",
    },
  ]

  useEffect(() => {
    if (isAutoplay) {
      autoplayRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
      }, 8000) // Longer duration between slides (8 seconds)
    }

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current)
      }
    }
  }, [isAutoplay, slides.length])

  const handleSlideChange = (index) => {
    setCurrentSlide(index)
    setIsAutoplay(false)

    // Resume autoplay after 15 seconds of inactivity
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current)
    }

    setTimeout(() => {
      setIsAutoplay(true)
    }, 15000)
  }

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
      } else if (e.key === "ArrowRight") {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [slides.length])

  // Add a function to handle button clicks without scrolling
  const handleButtonClick = (e, href) => {
    e.preventDefault()
    window.location.href = href
  }

  return (
    <>
      {/* Hero Section with Dynamic Slider */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          {slides.map(
            (slide, index) =>
              currentSlide === index && (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 2.5 }} // Longer fade transition
                  className="absolute inset-0 z-0"
                >
                  <Image
                    src={slide.image || "/placeholder.svg"}
                    alt={slide.title}
                    fill
                    priority
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 to-gray-900/80" />
                </motion.div>
              ),
          )}
        </AnimatePresence>

        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <AnimatePresence mode="wait">
            {slides.map(
              (slide, index) =>
                currentSlide === index && (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 1.5, delay: 0.5 }} // Longer text transition
                  >
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">{slide.title}</h1>
                    <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-10 text-gray-300">{slide.subtitle}</p>
                    <a
                      href={slide.buttonLink}
                      onClick={(e) => handleButtonClick(e, slide.buttonLink)}
                      className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 text-lg"
                    >
                      {slide.buttonText}
                    </a>
                  </motion.div>
                ),
            )}
          </AnimatePresence>
        </div>

        {/* Navigation dots positioned at the absolute bottom of the hero section */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleSlideChange(index)}
              className={`w-3 h-3 rounded-full transition-all ${currentSlide === index ? "bg-white" : "bg-white/40"}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Service Times */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Calendar className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Domingo</h3>
                <p className="text-gray-600 mb-4">Culto General</p>
                <p className="font-medium">10:00 AM</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Miércoles</h3>
                <p className="text-gray-600 mb-4">Estudio Bíblico</p>
                <p className="font-medium">7:00 PM</p>
              </div>

              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Viernes</h3>
                <p className="text-gray-600 mb-4">Por Departamentos</p>
                <p className="font-medium">7:30 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Sections with Parallax Effect */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Worship Experience - Updated with YouTube Live Feed */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Experiencia de Adoración</h2>
                <p className="text-gray-600 mb-6 text-lg">
                  Nuestra adoración es vibrante y llena del Espíritu Santo. Creemos que la adoración es una forma
                  poderosa de conectar con Dios y experimentar Su presencia transformadora.
                </p>
                <p className="text-gray-600 mb-8 text-lg">
                  Te invitamos a unirte a nosotros para experimentar un tiempo de adoración auténtica donde puedes
                  encontrar libertad, sanidad y renovación espiritual.
                </p>
                {/* "Ver Más" button completely removed */}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/20 rounded-lg"></div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-lg"></div>

                {/* Use SundayLiveStream on Sundays, otherwise use regular embed */}
                {isSunday ? (
                  <SundayLiveStream
                    channelId="UCJx_BVxQKLfP0FmDKx5v2Tg" // Damascus Church YouTube Channel ID
                    fallbackVideoId="iHzFRD8K4u0" // A recent video
                  />
                ) : (
                  <YouTubeEmbed channelId="UCJx_BVxQKLfP0FmDKx5v2Tg" videoId="iHzFRD8K4u0" />
                )}
              </motion.div>
            </div>

            {/* Ministry & Service - Now FIRST */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Ministerio y Servicio</h2>
                <p className="text-gray-600 mb-6 text-lg">
                  Creemos que cada creyente tiene dones y talentos únicos para servir en el cuerpo de Cristo. Ofrecemos
                  diversas oportunidades para que descubras y desarrolles tus dones.
                </p>
                <p className="text-gray-600 mb-8 text-lg">
                  Desde ministerios de alabanza y danza hasta ministerios de niños y jóvenes, hay un lugar para ti donde
                  puedes crecer y servir.
                </p>
                <a
                  href="/ministerios"
                  onClick={(e) => handleButtonClick(e, "/ministerios")}
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 gap-2"
                >
                  Descubre Tu Lugar <ArrowRight className="h-4 w-4" />
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/20 rounded-lg"></div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-lg"></div>
                <div className="relative rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="/dance-ministry.jpeg"
                    alt="Ministerio y Servicio"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
              </motion.div>
            </div>

            {/* Community & Prayer - Now SECOND */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative order-1 lg:order-none"
              >
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-lg"></div>
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/20 rounded-lg"></div>
                <div className="relative rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="/prayer-ministry.jpeg"
                    alt="Comunidad y Oración"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Comunidad y Oración</h2>
                <p className="text-gray-600 mb-6 text-lg">
                  Somos una familia de fe donde cada persona es valorada y amada. Creemos en el poder de la comunidad
                  para fortalecer nuestra fe y en el poder de la oración para transformar vidas.
                </p>
                <p className="text-gray-600 mb-8 text-lg">
                  Nuestro ministerio de oración está comprometido a interceder por las necesidades de nuestra iglesia y
                  comunidad, viendo el poder de Dios manifestado.
                </p>
                <a
                  href="/contacto"
                  onClick={(e) => handleButtonClick(e, "/contacto")}
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 gap-2"
                >
                  Enviar Petición de Oración <ArrowRight className="h-4 w-4" />
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Testimonios</h2>
            <p className="text-xl text-white/80">Vidas transformadas por el poder de Dios</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 flex flex-col">
              <div className="mb-4">
                <svg className="h-8 w-8 text-white/80" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-white/90 mb-6 flex-grow">
                "Antes de asistir a la Iglesia me encontraba bastante deprimida y vivía preguntándome a mí misma cuál
                era la razón de mi existencia. A pesar que tenía todo prácticamente, había un vacío dentro de mi. Pero
                el día que Dios me atrajo hacia Él, Él llenó mi vacío. Era lo que necesitaba, me dio propósito y cambió
                mi lamento en baile."
              </p>
              <div>
                <p className="font-bold">Yaya Cea</p>
                <p className="text-white/70 text-sm">Miembro desde 2009</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 flex flex-col">
              <div className="mb-4">
                <svg className="h-8 w-8 text-white/80" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-white/90 mb-6 flex-grow">
                "Llegamos a Iglesia de Dios Pentecostal Damasco en febrero del 2011 sintiéndonos en familia tanto con la
                congregación como con la familia pastoral. Desde el primer día hubo una conexión especial, y nos
                sentimos bendecidos de formar parte de esta comunidad de fe donde hemos crecido espiritualmente."
              </p>
              <div>
                <p className="font-bold">Familia Morales/Castaneda</p>
                <p className="text-white/70 text-sm">Miembros desde 2011</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 flex flex-col">
              <div className="mb-4">
                <svg className="h-8 w-8 text-white/80" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-white/90 mb-6 flex-grow">
                "Cuando tenía 14 años estaba batallando con un sentimiento de abandono. Cuando llegue a Damasco fui
                recibida por personas que me hicieron sentir bienvenida y que habían sentido lo mismo que yo estaba
                sintiendo, pero Dios los ayudó a superarlo y ahora sé que Dios ha estado conmigo y continuará trabajando
                en mi y sanando heridas."
              </p>
              <div>
                <p className="font-bold">Suleidy Palma</p>
                <p className="text-white/70 text-sm">Miembro desde 2021</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/worship-hands-raised.jpeg" alt="Únete a Nosotros" fill className="object-cover opacity-20" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Únete a Nuestra Comunidad</h2>
            <p className="text-xl text-gray-300 mb-8">
              Te invitamos a ser parte de nuestra familia. Juntos podemos crecer en fe y servir a nuestra comunidad.
            </p>
            <div className="flex justify-center">
              <a
                href="https://www.google.com/maps/search/?api=1&query=1349+S+Tibbs+Ave+Indianapolis+IN"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 text-lg"
              >
                Visítanos
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
