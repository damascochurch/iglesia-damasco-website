"use client"

import { useState, useRef } from "react"
import { ContactInfo } from "@/components/contact-info"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react"
import emailjs from "@emailjs/browser"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState(false)
  const formRef = useRef(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitSuccess(false)
    setSubmitError(false)

    // Log available environment variables to help debug
    console.log("Available EmailJS env vars:", {
      serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
    })

    try {
      // Send the form data to your primary template
      const result = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        "template_1dzsr2d", // Using the provided template ID for primary submission
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      )

      // Send auto-reply to the user (using the same template)
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        "template_1dzsr2d", // Same template for auto-reply
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      )

      console.log("Email sent successfully:", result.text)
      setSubmitSuccess(true)
      formRef.current.reset()
    } catch (error) {
      console.error("Error sending email:", error)
      setSubmitError(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div>
      {/* Header */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-blue-700 to-indigo-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contáctanos</h1>
            <p className="text-xl text-white/80">
              Estamos aquí para responder tus preguntas y ayudarte en lo que necesites
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">Envíanos un Mensaje</h2>
                <p className="text-gray-600 mb-8">
                  Completa el formulario y nos pondremos en contacto contigo lo antes posible. Tu mensaje será enviado a{" "}
                  <span className="font-medium">damasco@iglesiadamasco.com</span>
                </p>

                {submitSuccess && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>¡Mensaje enviado con éxito! Te hemos enviado una confirmación por correo electrónico.</span>
                  </div>
                )}

                {submitError && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg flex items-center gap-2">
                    <AlertCircle className="h-5 w-5 text-red-500" />
                    <span>
                      Hubo un error al enviar tu mensaje. Por favor, intenta nuevamente o contáctanos directamente por
                      teléfono.
                    </span>
                  </div>
                )}

                <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="user_name" className="block text-sm font-medium text-gray-700 mb-1">
                        Nombre
                      </label>
                      <Input id="user_name" name="user_name" placeholder="Tu nombre" required />
                    </div>
                    <div>
                      <label htmlFor="user_email" className="block text-sm font-medium text-gray-700 mb-1">
                        Correo Electrónico
                      </label>
                      <Input id="user_email" name="user_email" type="email" placeholder="tu@email.com" required />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Asunto
                    </label>
                    <Input id="subject" name="subject" placeholder="Asunto del mensaje" required />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Mensaje
                    </label>
                    <Textarea id="message" name="message" placeholder="Tu mensaje" rows={5} required />
                  </div>

                  <Button
                    type="submit"
                    className="w-full md:w-auto gap-2 bg-blue-700 hover:bg-blue-800"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        Enviar Mensaje <Send className="h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </div>

              <div className="bg-blue-50 p-8 rounded-xl">
                <h2 className="text-3xl font-bold mb-6">Información de Contacto</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold text-lg mb-1">Dirección</h3>
                    <p className="text-gray-600">1349 S. Tibbs Avenue</p>
                    <p className="text-gray-600">Indianapolis, IN</p>
                    <p className="text-gray-600">United States</p>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-1">Teléfono</h3>
                    <p className="text-gray-600">(317) 241-7085</p>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-1">Horario de Servicios</h3>
                    <p className="text-gray-600">Domingo: 10:00 AM (Culto General)</p>
                    <p className="text-gray-600">Miércoles: 7:00 PM (Estudio Bíblico)</p>
                    <p className="text-gray-600">Viernes: 7:30 PM (Por Departamentos)</p>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-1">Redes Sociales</h3>
                    <div className="flex gap-4 mt-2">
                      <a
                        href="https://www.facebook.com/Iglesiadediospentecostaldamasco"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                        </svg>
                      </a>
                      <a
                        href="https://www.instagram.com/iglesia.damasco/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white p-2 rounded-full hover:opacity-90 transition-opacity"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                        </svg>
                      </a>
                      <a
                        href="https://www.youtube.com/@damascochurch5364"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-red-600 text-white p-2 rounded-full hover:bg-red-700 transition-colors"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                          <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section id="map" className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3066.2775152333395!2d-86.22121492346763!3d39.7525499937336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886b5a95a3e3e2c7%3A0x5f6c8a8a8c8a8c8a!2s1349%20S%20Tibbs%20Ave%2C%20Indianapolis%2C%20IN%2046241!5e0!3m2!1sen!2sus!4v1651234567890!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Component */}
      <ContactInfo />
    </div>
  )
}
