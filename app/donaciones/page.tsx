"use client"

import React, { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, Globe, Church, Copy, CheckCircle2, ChevronDown } from "lucide-react"
import { PaymentOptions } from "@/components/payment-options"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

export default function DonacionesPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const toggleFaq = (id: number) => {
    setExpandedFaq(expandedFaq === id ? null : id)
  }

  // FAQ items
  const faqItems = [
    {
      id: 1,
      question: "¿Cómo puedo especificar el propósito de mi donación?",
      answer:
        'Al realizar tu donación por Zelle o transferencia bancaria, puedes incluir una nota especificando el propósito (por ejemplo, "Misiones", "Construcción", etc.). Si donas en persona, puedes usar los sobres de ofrenda y marcar el propósito correspondiente.',
    },
    {
      id: 2,
      question: "¿Puedo hacer donaciones recurrentes?",
      answer:
        "Sí, puedes configurar donaciones recurrentes a través de tu banco o aplicación de Zelle. También puedes hablar con nuestro equipo administrativo para establecer un plan de donaciones regulares.",
    },
    {
      id: 3,
      question: "¿Cómo puedo obtener un recibo para mis impuestos?",
      answer:
        "Enviamos recibos anuales para todas las donaciones registradas. Si necesitas un recibo antes o tienes preguntas sobre tus donaciones, por favor contacta a la oficina de la iglesia al (317) 241-7085 o por correo electrónico a damascochurch777@gmail.com.",
    },
    {
      id: 4,
      question: "¿Puedo donar bienes o servicios en lugar de dinero?",
      answer:
        "Sí, aceptamos donaciones de bienes y servicios. Por favor, contacta a la oficina de la iglesia para discutir tus intenciones y coordinar la entrega o prestación de servicios.",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Donaciones</h1>
            <p className="text-xl text-white/80">
              Tu generosidad hace posible nuestra misión de compartir el amor de Cristo
            </p>
          </div>
        </div>
      </section>

      {/* Quick Payment Options */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">Opciones de Donación Rápida</h2>
              <p className="text-gray-600">Selecciona tu método de pago preferido para hacer una donación</p>
            </div>

            <PaymentOptions />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Apoya Nuestra Misión</h2>
              <p className="text-gray-600">
                Tus donaciones nos permiten continuar con nuestra labor de predicar el evangelio, servir a la comunidad
                y expandir el reino de Dios.
              </p>
            </div>

            {/* Donation Categories */}
            <Tabs defaultValue="general" className="mb-12">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="general">General</TabsTrigger>
                <TabsTrigger value="misiones">Misiones</TabsTrigger>
                <TabsTrigger value="construccion">Construcción</TabsTrigger>
              </TabsList>

              <TabsContent value="general" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Heart className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">Donación General</h3>
                        <p className="text-gray-600">Apoya las operaciones diarias de nuestra iglesia</p>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-6">
                      Las donaciones generales ayudan a mantener nuestros servicios, programas ministeriales, gastos
                      operativos y nos permiten responder a las necesidades de nuestra comunidad.
                    </p>

                    <div className="bg-gray-50 p-4 rounded-lg mb-6">
                      <h4 className="font-bold mb-2">Usos de las donaciones generales:</h4>
                      <ul className="list-disc pl-5 text-gray-600 space-y-1">
                        <li>Mantenimiento de instalaciones</li>
                        <li>Materiales para ministerios</li>
                        <li>Eventos y actividades de la iglesia</li>
                        <li>Apoyo a familias necesitadas</li>
                        <li>Servicios y programas semanales</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="misiones" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Globe className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">Misiones Mundiales</h3>
                        <p className="text-gray-600">Apoya nuestros viajes misioneros y proyectos internacionales</p>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-6">
                      Tus donaciones para misiones mundiales ayudan a financiar viajes misioneros, apoyar a misioneros
                      en el campo y desarrollar proyectos que llevan el evangelio a diferentes partes del mundo.
                    </p>

                    <div className="bg-gray-50 p-4 rounded-lg mb-6">
                      <h4 className="font-bold mb-2">Proyectos misioneros actuales:</h4>
                      <ul className="list-disc pl-5 text-gray-600 space-y-1">
                        <li>Viaje misionero a República Dominicana (2025)</li>
                        <li>Apoyo a iglesias en Latino América</li>
                        <li>Construir y reparar casas en áreas rurales</li>
                        <li>Ayuda a áreas afectadas por desastres naturales</li>
                      </ul>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                      <h4 className="font-bold text-blue-800 mb-2">Próximo viaje misionero:</h4>
                      <p className="text-blue-700">
                        Estamos recaudando fondos para nuestro próximo viaje misionero a República Dominicana en 2025.
                        Tu donación ayudará a cubrir gastos de viaje, materiales para construcción de una iglesia local
                        y suministros médicos para la comunidad.
                      </p>
                      {/* No button needed here */}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="construccion" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Church className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">Fondo de Construcción</h3>
                        <p className="text-gray-600">
                          Apoya proyectos de construcción y mejoras en nuestras instalaciones
                        </p>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-6">
                      Las donaciones al fondo de construcción se utilizan para proyectos de expansión, renovación y
                      mejora de nuestras instalaciones para servir mejor a nuestra congregación y comunidad.
                    </p>

                    <div className="bg-gray-50 p-4 rounded-lg mb-6">
                      <h4 className="font-bold mb-2">Proyectos actuales:</h4>
                      <ul className="list-disc pl-5 text-gray-600 space-y-1">
                        <li>Renovación del área de niños</li>
                        <li>Mejoras en el sistema de sonido</li>
                        <li>Expansión del estacionamiento</li>
                        <li>Actualización de instalaciones para mayor accesibilidad</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            {/* Tax Information */}
            <div className="bg-gray-50 p-6 rounded-xl mb-12">
              <h3 className="text-xl font-bold mb-4">Información Fiscal</h3>
              <p className="text-gray-600 mb-4">
                La Iglesia de Dios Pentecostal Damasco es una organización sin fines de lucro 501(c)(3). Todas las
                donaciones son deducibles de impuestos según lo permitido por la ley.
              </p>
              <p className="text-gray-600">
                Al final del año, emitimos recibos de donaciones para todas las contribuciones realizadas durante el año
                fiscal. Si necesitas un recibo antes, por favor contacta a la oficina de la iglesia.
              </p>
            </div>

            {/* FAQ - Accordion Style */}
            <div className="mb-12">
              <div className="text-center max-w-3xl mx-auto mb-8">
                <h2 className="text-3xl font-bold mb-4">Preguntas Frecuentes</h2>
                <p className="text-gray-600">Respuestas a las preguntas más comunes sobre donaciones</p>
              </div>

              <div className="max-w-3xl mx-auto">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  {faqItems.map((item) => (
                    <div
                      key={item.id}
                      className={cn(
                        "border-b border-gray-100 last:border-b-0",
                        expandedFaq === item.id ? "bg-gray-50" : "",
                      )}
                    >
                      <motion.button
                        className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none"
                        onClick={() => toggleFaq(item.id)}
                        initial={false}
                      >
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/80 text-white flex items-center justify-center flex-shrink-0 mr-4">
                            <span className="font-bold">{item.id}</span>
                          </div>
                          <h3 className="font-bold text-gray-800">{item.question}</h3>
                        </div>
                        <motion.div
                          animate={{ rotate: expandedFaq === item.id ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                          className="text-gray-500"
                        >
                          <ChevronDown className="h-5 w-5" />
                        </motion.div>
                      </motion.button>

                      <AnimatePresence initial={false}>
                        {expandedFaq === item.id && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 pb-4 pl-20">
                              <p className="text-gray-600">{item.answer}</p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-primary/10 p-6 rounded-xl text-center">
              <h3 className="text-xl font-bold mb-4">¿Tienes preguntas sobre donaciones?</h3>
              <p className="text-gray-600 mb-6">
                Si tienes alguna pregunta sobre cómo donar o necesitas más información, no dudes en contactarnos.
              </p>
              <Link href="/contacto">
                <Button>Contáctanos</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

// Copy button component with animation
function CopyButton({ text }) {
  const [copied, setCopied] = React.useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <button
      onClick={handleCopy}
      className="ml-2 p-1 text-gray-500 hover:text-gray-700 focus:outline-none"
      aria-label="Copiar al portapapeles"
    >
      {copied ? <CheckCircle2 className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
    </button>
  )
}
