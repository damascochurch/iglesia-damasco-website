import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Globe, Heart, Plane, Users, HandHeart, HandIcon as PrayingHands } from "lucide-react"

export default function MinisterioMisionesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-r from-blue-800 to-indigo-900 text-white">
        <div className="absolute inset-0 z-0">
          <Image src="/ministerios/misiones/minimission.png" alt="Ministerio de Misiones" fill className="object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-800/80 to-indigo-900/80" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Ministerio de Misiones</h1>
            <p className="text-xl text-white/90">
              Llevando el mensaje de esperanza y amor de Cristo a todas las naciones
            </p>
          </div>
        </div>

      </section>

      {/* Vision and Mission */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block p-4 bg-blue-50 rounded-full mb-4">
                <Globe className="h-8 w-8 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold mb-6">Nuestra Visión Misionera</h2>
              <p className="text-xl text-gray-700 mb-8">
                "Id por todo el mundo y predicad el evangelio a toda criatura." - Marcos 16:15
              </p>
            </div>

            <div className="prose prose-lg max-w-none text-gray-600">
              <p>
                En Iglesia Damasco, creemos que la Gran Comisión no es solo una sugerencia, sino un mandato para todos
                los creyentes. Nuestro Ministerio de Misiones está comprometido con llevar el evangelio de Jesucristo a
                todas las naciones, comenzando en nuestra comunidad local y extendiéndose hasta los confines de la
                tierra.
              </p>
              <p>
                Trabajamos para equipar, enviar y apoyar a misioneros que comparten el amor de Cristo a través de la
                predicación del evangelio, el discipulado, y proyectos de ayuda humanitaria que satisfacen necesidades
                físicas y espirituales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Projects */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Proyectos Misioneros Actuales</h2>
            <p className="text-gray-600">
              Conoce nuestros proyectos misioneros actuales y cómo estamos impactando vidas alrededor del mundo
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <Card className="border-none shadow-lg overflow-hidden mb-12">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-full min-h-[300px]">
                  <Image
                    src="/ministerios/misiones/minimission.png"
                    alt="Misión en República Dominicana"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2">Misión República Dominicana 2025</h3>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <Plane className="h-4 w-4 mr-1" />
                    <span>Próximo viaje: 2025</span>
                  </div>
                  <p className="text-gray-600 mb-6">
                    Estamos recaudando fondos para nuestro próximo viaje misionero a República Dominicana en 2025, donde
                    construiremos una iglesia local y proporcionaremos ayuda médica a la comunidad.
                  </p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-start gap-2">
                      <div className="bg-blue-100 p-1 rounded-full mt-1">
                        <Heart className="h-4 w-4 text-blue-600" />
                      </div>
                      <p className="text-gray-600">
                        <strong>Objetivo:</strong> Construcción de una iglesia y asistencia médica
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="bg-blue-100 p-1 rounded-full mt-1">
                        <Users className="h-4 w-4 text-blue-600" />
                      </div>
                      <p className="text-gray-600">
                        <strong>Equipo:</strong> 15 misioneros de nuestra congregación
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="bg-blue-100 p-1 rounded-full mt-1">
                        <HandHeart className="h-4 w-4 text-blue-600" />
                      </div>
                      <p className="text-gray-600">
                        <strong>Meta financiera:</strong> $5,000 para materiales y suministros médicos
                      </p>
                    </div>
                  </div>
                  <Link href="/donaciones">
                    <Button className="w-full">Apoyar este Proyecto</Button>
                  </Link>
                </div>
              </div>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-none shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Misiones en Latinoamérica</h3>
                  <p className="text-gray-600 mb-6">
                    Hemos servido en misiones a países de Latinoamérica, principalmente en El Salvador y Honduras, donde
                    hemos podido compartir el amor de Cristo y brindar ayuda a comunidades necesitadas.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">Países donde servimos:</h4>
                    <ul className="list-disc pl-5 text-gray-600">
                      <li>El Salvador</li>
                      <li>Honduras</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Ayuda Humanitaria</h3>
                  <p className="text-gray-600 mb-6">
                    Brindamos ayuda humanitaria a comunidades necesitadas, llevando ropa, alimentos y otros recursos
                    esenciales para apoyar a las personas más vulnerables.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">Áreas de servicio:</h4>
                    <ul className="list-disc pl-5 text-gray-600">
                      <li>Distribución de ropa para los necesitados</li>
                      <li>Asistencia médica y dental</li>
                      <li>Distribución de alimentos y zapatos</li>
                      <li>Apoyo espiritual y evangelización</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How to Get Involved */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Cómo Puedes Involucrarte</h2>
            <p className="text-gray-600">
              Hay muchas maneras de participar en la obra misionera, sin importar dónde te encuentres
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-none shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <PrayingHands className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Orar</h3>
                <p className="text-gray-600">
                  La oración es fundamental para el trabajo misionero. Únete a nuestro equipo de intercesión por los
                  misioneros y las naciones.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <HandHeart className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Dar</h3>
                <p className="text-gray-600">
                  Tu apoyo financiero hace posible que enviemos misioneros y proporcionemos recursos para el trabajo en
                  el campo.
                </p>
                <Link href="/donaciones" className="mt-4">
                  <Button variant="outline">Donar</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Plane className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Ir</h3>
                <p className="text-gray-600">
                  Únete a uno de nuestros equipos misioneros de corto o largo plazo. Hay oportunidades para servir según
                  tus dones y habilidades.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonies */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Testimonios del Campo Misionero</h2>
            <p className="text-gray-600">Historias de impacto y transformación a través de nuestro trabajo misionero</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4">
                  <svg className="h-8 w-8 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "En 2023, Dios nos permitió viajar a Honduras con un grupo de misioneros de nuestra iglesia y amigos
                  de El Salvador. Durante la misión, brindamos atención médica y dental, y repartimos alimentos, zapatos
                  y ropa a quienes lo necesitaban. También compartimos el mensaje de Cristo. Fue una experiencia
                  inolvidable y muy gratificante."
                </p>
                <div>
                  <p className="font-bold">Isaias Rodriguez</p>
                  <p className="text-gray-500 text-sm">Líder de Misión, Misión Honduras 2023</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4">
                  <svg className="h-8 w-8 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "He tenido la bendición de ir dos veces a un viaje misionero a El Salvador con Damasco, y ha sido una
                  experiencia que marcó profundamente mi vida. Dios usó esos momentos para hablarme y para enseñarme a
                  servir con humildad. Las misiones en El Salvador despertaron en mí un amor más profundo por las almas
                  y un deseo fuerte de seguir llevando esperanza donde más se necesita."
                </p>
                <div>
                  <p className="font-bold">Cynthia Torres</p>
                  <p className="text-gray-500 text-sm">Misión en El Salvador 2021</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-800 to-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Únete a Nuestra Visión Misionera</h2>
            <p className="text-xl mb-8">
              Juntos podemos llevar esperanza y transformación a comunidades alrededor del mundo. Tu participación hace
              la diferencia.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contacto">
                <Button size="lg" className="bg-white text-blue-800 hover:bg-blue-50">
                  Contáctanos
                </Button>
              </Link>
              <Link href="/donaciones">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Apoyar Misiones
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
