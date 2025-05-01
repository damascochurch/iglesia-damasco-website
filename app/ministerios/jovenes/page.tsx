"use client"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Facebook, Instagram, Music, Users, ArrowRight, MessageCircle } from "lucide-react"

export default function MinisterioJovenesPage() {
  return (
    <>
      {/* Hero Section with Dynamic Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
        <div className="absolute inset-0 z-0">
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 opacity-80"></div>

          {/* Abstract shapes */}
          <motion.div
            className="absolute top-20 left-20 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70"
            animate={{
              x: [0, 30, 0],
              y: [0, 40, 0],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 8,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70"
            animate={{
              x: [0, -40, 0],
              y: [0, -30, 0],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 10,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-1/2 left-1/3 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70"
            animate={{
              x: [0, 50, 0],
              y: [0, -50, 0],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 12,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center py-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              VOICE{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-500">MINISTRY</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-10">
              Somos jóvenes que han decidido caminar por Fe y no por vista. Dispuestos a sanar enfermos, libertar al
              cautivo y llevar a este mundo a un encuentro con Dios.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="#unete">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-lg"
                >
                  Únete a Nosotros
                </Button>
              </Link>
              <Link href="#about">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 text-lg"
                >
                  Conócenos
                </Button>
              </Link>
            </div>
          </motion.div>

          <div className="absolute bottom-10 left-0 right-0 flex justify-center">
            <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white/70"
              >
                <path d="M12 5v14M19 12l-7 7-7-7" />
              </svg>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Quiénes Somos</h2>
                <div className="space-y-4 text-gray-700">
                  <p className="text-lg">
                    Somos una comunidad vibrante de jóvenes apasionados por Dios y comprometidos con hacer una
                    diferencia en nuestro mundo.
                  </p>
                  <p className="text-lg">
                    En Voice Ministry, creemos que los jóvenes no son solo el futuro de la iglesia, sino una parte vital
                    del presente. Estamos aquí para equipar, empoderar y animar a cada joven a descubrir su propósito y
                    vivir una vida de impacto.
                  </p>
                  <p className="text-lg">
                    Nuestro nombre "Voice" representa nuestra misión de ser una voz de esperanza, verdad y amor en un
                    mundo que necesita desesperadamente escuchar el mensaje de Cristo.
                  </p>
                </div>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link href="https://www.facebook.com/VOICEMINISTRYDAMASCO/" target="_blank" rel="noopener noreferrer">
                    <Button className="gap-2 bg-blue-600 hover:bg-blue-700">
                      <Facebook size={18} />
                      Facebook
                    </Button>
                  </Link>
                  <Link href="https://www.instagram.com/juventuddamasco/" target="_blank" rel="noopener noreferrer">
                    <Button className="gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                      <Instagram size={18} />
                      Instagram
                    </Button>
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
                  <Image src="/youth.png" alt="Jóvenes adorando" fill className="object-cover" />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-indigo-500/20 rounded-full"></div>
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-pink-500/20 rounded-full"></div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Lo Que Hacemos</h2>
            <p className="text-gray-600">
              Creamos espacios donde los jóvenes pueden encontrarse con Dios, construir amistades genuinas y descubrir
              su propósito
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-none shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mb-4">
                  <Music className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Adoración Vibrante</h3>
                <p className="text-gray-600">
                  Experimentamos la presencia de Dios a través de momentos poderosos de adoración con música
                  contemporánea y un ambiente donde los jóvenes pueden expresar libremente su amor por Dios.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mb-4">
                  <MessageCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Mensajes Relevantes</h3>
                <p className="text-gray-600">
                  Compartimos la Palabra de Dios de manera práctica y aplicable a la vida diaria de los jóvenes,
                  abordando temas relevantes y desafíos que enfrentan en la actualidad.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Comunidad Auténtica</h3>
                <p className="text-gray-600">
                  Creamos un ambiente donde los jóvenes pueden ser ellos mismos, formar amistades genuinas y crecer
                  juntos en su fe a través de grupos pequeños y actividades de compañerismo.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section id="unete" className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Únete a Nosotros</h2>
            <p className="text-xl mb-8">
              Si tienes entre 13 y 25 años, te invitamos a ser parte de nuestra familia. Aquí encontrarás un lugar donde
              puedes ser tú mismo, crecer en tu fe y descubrir tu propósito.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-bold mb-2">Estudio Bíblico</h3>
                <p className="text-white/80 mb-4">
                  Participa en nuestras clases bíblicas diseñadas específicamente para jóvenes, donde exploramos la
                  Palabra de Dios de manera relevante y aplicable a tu vida diaria.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-bold mb-2">Get Togethers</h3>
                <p className="text-white/80 mb-4">
                  Únete a nuestros días de convivencia donde pasamos tiempo juntos, compartimos un breve mensaje y
                  disfrutamos de juegos y actividades.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-bold mb-2">Sirve en un Equipo</h3>
                <p className="text-white/80 mb-4">
                  Descubre y desarrolla tus dones sirviendo en alguno de nuestros equipos de ministerio.
                </p>
              </div>
            </div>
            <Link href="/contacto">
              <Button size="lg" className="bg-white text-indigo-900 hover:bg-gray-100">
                Contáctanos <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
