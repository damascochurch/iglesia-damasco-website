import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FileText, Video, Headphones, Download, ExternalLink } from "lucide-react"

export default function ResourcesPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Recursos</h1>
            <p className="text-xl text-white/80">
              Materiales y recursos para ayudarte a crecer en tu fe y conocimiento de Dios
            </p>
          </div>
        </div>
      </section>

      {/* Devotionals */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Devocionales</h2>
            <p className="text-gray-600">Reflexiones diarias para ayudarte a mantener tu vida espiritual activa</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Devocional Semanal</h3>
                <p className="text-gray-600 mb-4">Reflexiones basadas en nuestro último mensaje dominical.</p>
                <Button variant="outline" className="w-full">
                  Ver Devocional
                </Button>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Estudio Bíblico</h3>
                <p className="text-gray-600 mb-4">Material de estudio para profundizar en la palabra de Dios.</p>
                <Button variant="outline" className="w-full">
                  Ver Estudio
                </Button>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Guía de Oración</h3>
                <p className="text-gray-600 mb-4">Guía para ayudarte a estructurar tus tiempos de oración.</p>
                <Button variant="outline" className="w-full">
                  Ver Guía
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Media Resources */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Recursos Multimedia</h2>
            <p className="text-gray-600">Videos, audios y otros recursos para tu crecimiento espiritual</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-none shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image src="/church-sermon-scene.png" alt="Sermones en Video" fill className="object-cover" />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <Video className="h-12 w-12 text-white" />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Sermones en Video</h3>
                <p className="text-gray-600 mb-4">Accede a nuestra biblioteca de sermones grabados en video.</p>
                <Link href="https://www.youtube.com/@damascochurch5364" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full gap-2">
                    Ver en YouTube <ExternalLink className="h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image src="/church-worship-music.png" alt="Música de Adoración" fill className="object-cover" />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <Headphones className="h-12 w-12 text-white" />
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Música de Adoración</h3>
                <p className="text-gray-600 mb-4">Escucha y descarga nuestra música de adoración.</p>
                <Button className="w-full gap-2">
                  Escuchar <Headphones className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Downloadable Resources */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Recursos Descargables</h2>
            <p className="text-gray-600">Materiales que puedes descargar para tu estudio personal o en grupo</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="border-none shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Download className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold">Guía de Estudio Familiar</h3>
                    <p className="text-sm text-gray-500">PDF - 2.4 MB</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4 text-sm">
                  Una guía para estudiar la Biblia en familia con actividades para niños.
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Descargar
                </Button>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Download className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold">Plan de Lectura Bíblica</h3>
                    <p className="text-sm text-gray-500">PDF - 1.8 MB</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4 text-sm">
                  Plan para leer la Biblia completa en un año con reflexiones diarias.
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Descargar
                </Button>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Download className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold">Diario de Oración</h3>
                    <p className="text-sm text-gray-500">PDF - 3.1 MB</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4 text-sm">
                  Un diario para registrar tus oraciones y ver cómo Dios las responde.
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Descargar
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">¿Necesitas Más Recursos?</h2>
            <p className="text-gray-600 mb-8">
              Si necesitas recursos específicos o tienes alguna pregunta, no dudes en contactarnos.
            </p>
            <Link href="/contacto">
              <Button size="lg">Contáctanos</Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
