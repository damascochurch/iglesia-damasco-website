"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

export default function SobreNosotros() {
  const [expandedItem, setExpandedItem] = useState<number | null>(null)

  // Declaration of Faith items with distinct headings
  const declaracionDeFe = [
    {
      id: 1,
      titulo: "La Biblia",
      texto: "En la inspiración verbal de la Biblia.",
    },
    {
      id: 2,
      titulo: "La Trinidad",
      texto: "En un Dios que existe eternamente en tres personas, a saber: el Padre, el Hijo y el Espíritu Santo.",
    },
    {
      id: 3,
      titulo: "Jesucristo",
      texto:
        "Que Jesucristo es el unigénito del Padre, concebido del Espíritu Santo y nacido de la virgen María. Que fue crucificado, sepultado y resucitó de entre los muertos. Que ascendió al cielo y está hoy a la diestra del Padre como nuestro Intercesor.",
    },
    {
      id: 4,
      titulo: "El Pecado y Arrepentimiento",
      texto:
        "Que todos han pecado y han sido destituidos de la gloria de Dios, y que el arrepentimiento es ordenado por Dios para todos y necesario para el perdón de los pecados.",
    },
    {
      id: 5,
      titulo: "La Justificación",
      texto:
        "Que la justificación, la regeneración y el nuevo nacimiento se efectúan por fe en la sangre de Jesucristo.",
    },
    {
      id: 6,
      titulo: "La Santificación",
      texto:
        "En la santificación, siguiente al nuevo nacimiento, por fe en la sangre de Jesucristo, por medio de la Palabra y por el Espíritu Santo.",
    },
    {
      id: 7,
      titulo: "La Santidad",
      texto: "Que la santidad es la norma de vida, de Dios, para su pueblo.",
    },
    {
      id: 8,
      titulo: "El Bautismo del Espíritu",
      texto: "En el bautismo con el Espíritu Santo, subsecuente a la limpieza del corazón.",
    },
    {
      id: 9,
      titulo: "Hablar en Lenguas",
      texto:
        "En hablar en otras lenguas, como el Espíritu dirija a la persona, lo cual es la evidencia inicial del bautismo en el Espíritu Santo.",
    },
    {
      id: 10,
      titulo: "El Bautismo en Agua",
      texto:
        "En el bautismo en agua por inmersión, y que todos los que se arrepienten deben ser bautizados en el nombre del Padre, del Hijo y del Espíritu Santo.",
    },
    {
      id: 11,
      titulo: "La Sanidad Divina",
      texto: "Que la sanidad divina es provista para todos en la expiación.",
    },
    {
      id: 12,
      titulo: "La Cena del Señor",
      texto: "En la cena del Señor y el lavatorio de los pies de los santos.",
    },
    {
      id: 13,
      titulo: "La Segunda Venida",
      texto:
        "En la segunda venida de Jesús antes del milenio. Primero, a resucitar a los justos muertos y arrebatar a los santos vivos hacia Él en el aire. Segundo, a reinar en la tierra por mil años.",
    },
    {
      id: 14,
      titulo: "La Resurrección",
      texto: "En la resurrección corporal; vida eterna para los justos y castigo eterno para los inicuos.",
    },
  ]

  const toggleItem = (id: number) => {
    setExpandedItem(expandedItem === id ? null : id)
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gray-900 text-white">
        <div className="absolute inset-0 z-0">
          <Image src="/sobre-nosotros/sob-nos-hero.jpg" alt="Sobre Nosotros" fill className="object-cover opacity-30" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 to-gray-900/90" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Sobre Nosotros</h1>
            <p className="text-xl text-gray-300">Conoce nuestra historia, visión y valores como iglesia</p>
          </div>
        </div>

        <div className="hero-wave">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Nuestra Historia</h2>
              <div className="space-y-4 text-gray-600">
                <p>Somos la Iglesia de Dios Pentecostal Damasco y creemos que hemos nacido en el corazón de Jehová.</p>
                <p>
                  Nacimos un 22 de agosto del 2007 en la sala de la casa de nuestros pastores Omar y Nelly Rendón, con 8
                  personas. Poco a poco el Espíritu Santo fue añadiendo miembros a nuestra iglesia.
                </p>
                <p>
                  De tal manera que tuvimos que movernos de la casa de nuestros pastores 3 meses después de haber
                  comenzado, a un local más amplio donde pudimos continuar con la obra que Dios había comenzado.
                </p>
                <p>
                  A lo largo de los años, hemos visto cómo Dios ha sido fiel y ha transformado vidas a través de nuestro
                  ministerio. Hoy en día, continuamos creciendo y sirviendo a nuestra comunidad con el mismo fervor y
                  pasión con la que comenzamos.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/20 rounded-lg"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-lg"></div>
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/sobre-nosotros/OldDamasco1.png"
                  alt="Nuestra Historia"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Nuestra Visión y Misión</h2>
            <p className="text-gray-600">Lo que nos guía y motiva como iglesia</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8 text-primary"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                    />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Nuestra Visión</h3>
                <p className="text-gray-600">
                  Ser una iglesia que refleje el amor de Cristo, alcanzando a las personas con el mensaje de salvación y
                  transformando vidas a través del poder del Espíritu Santo. Buscamos ser una comunidad vibrante donde
                  cada persona pueda encontrar su propósito y desarrollar sus dones para la gloria de Dios.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-8 h-8 text-primary"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Nuestra Misión</h3>
                <p className="text-gray-600">
                  Nuestra misión es predicar el evangelio de Jesucristo, hacer discípulos, y servir a nuestra comunidad.
                  Nos comprometemos a proporcionar un ambiente de adoración auténtica, enseñanza bíblica sólida,
                  compañerismo genuino y servicio desinteresado, para que cada persona pueda crecer en su relación con
                  Dios y con los demás.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Declaration of Faith - New Design with Distinct Headings */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Declaración de Fe</h2>
            <p className="text-gray-600 mb-8">Los principios fundamentales de nuestra fe</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              {declaracionDeFe.map((item, index) => (
                <div
                  key={item.id}
                  className={cn(
                    "border-b border-gray-100 last:border-b-0",
                    expandedItem === item.id ? "bg-gray-50" : "",
                  )}
                >
                  <motion.button
                    className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none"
                    onClick={() => toggleItem(item.id)}
                    initial={false}
                  >
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/80 text-white flex items-center justify-center flex-shrink-0 mr-4">
                        <span className="font-bold">{item.id}</span>
                      </div>
                      <h3 className="font-bold text-gray-800">{item.titulo}</h3>
                    </div>
                    <motion.div
                      animate={{ rotate: expandedItem === item.id ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-gray-500"
                    >
                      <ChevronDown className="h-5 w-5" />
                    </motion.div>
                  </motion.button>

                  <AnimatePresence initial={false}>
                    {expandedItem === item.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-4 pl-20">
                          <p className="text-gray-600">{item.texto}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pastors Section - Updated from Leadership */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Nuestros Pastores</h2>
            <p className="text-gray-600">Conoce a quienes Dios ha llamado para guiar nuestra iglesia</p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Single Image */}
                <div className="relative h-full min-h-[400px] lg:min-h-0">
                  <Image
                    src="/sobre-nosotros/Pastores.png"
                    alt="Pastores Omar y Nelly Rendón"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                    priority
                  />
                </div>

                {/* Content */}
                <div className="p-8 lg:p-10">
                  <h3 className="text-2xl font-bold mb-2 text-primary">Pastores Omar y Nelly Rendón</h3>
                  <p className="text-gray-500 mb-6 italic">
                    "Creemos que Damasco nació en el corazón de Jehová y como pastores deseamos dar lo mejor para el
                    Señor."
                  </p>

                  <div className="space-y-4 text-gray-600">
                    <p>
                      Dios te bendiga y te damos la bienvenida a nuestra amada Iglesia Damasco. Iniciamos este
                      ministerio el 22 de agosto de 2007 en la sala de nuestra casa, siendo el reto más grande de
                      nuestra vida.
                    </p>

                    <p>
                      Por la gracia de Dios, Omar sirve como Obispo Ordenado en la Iglesia de Dios y fue supervisor de
                      distrito en Indiana durante 10 años. También ha formado parte de la junta regional de la Región
                      Norte Central Hispana en tres ocasiones.
                    </p>

                    <p>
                      Nelly posee la credencial de Ministro Ordenado en la Iglesia de Dios y sirvió como líder de Damas
                      en el distrito de Indiana por 10 años. Dios nos ha bendecido con nuestro hijo Jonathan.
                    </p>

                    <p>
                      Avanzamos en fe, siguiendo la guía del Espíritu Santo, y estamos comprometidos a servir a nuestra
                      comunidad con amor y dedicación.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
