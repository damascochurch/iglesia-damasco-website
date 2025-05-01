import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Facebook, BookOpen, Users, Calendar, Heart, Star } from "lucide-react"

export default function MinisterioNinosPage() {
  return (
    <>
      {/* Hero Section with Playful Design */}
      <section className="relative pt-32 pb-20 bg-gradient-to-r from-blue-500 to-green-400 text-white overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-yellow-300 rounded-full opacity-20"></div>
        <div className="absolute bottom-10 left-40 w-24 h-24 bg-pink-400 rounded-full opacity-20"></div>
        <div className="absolute top-40 left-10 w-16 h-16 bg-purple-400 rounded-full opacity-20"></div>
        <div className="absolute bottom-40 right-10 w-20 h-20 bg-red-400 rounded-full opacity-20"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-white p-2 rounded-full">
                <Image
                  src="/kidslogo.png"
                  alt="Ministerio de Niños Logo"
                  width={70}
                  height={70}
                  className="rounded-full"
                />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold">Ministerio de Niños</h1>
            </div>
            <p className="text-xl text-white/90">
              Niños creciendo con Dios cultivando una fe personal en Jesucristo que transforma el corazón a través de
              una enseñanza bíblicamente sólida.
            </p>
          </div>
        </div>

        {/* Playful Wave */}
        <div className="hero-wave">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
              fill="#ffffff"
            ></path>
          </svg>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block p-4 bg-blue-50 rounded-full mb-6">
              <Heart className="h-8 w-8 text-blue-500" />
            </div>
            <h2 className="text-3xl font-bold mb-6">Nuestra Misión</h2>
            <p className="text-xl text-gray-700 mb-8">
              Guiar a los niños a conocer a Jesús, crecer en su fe y descubrir el propósito que Dios tiene para sus
              vidas a través de experiencias divertidas, enseñanza bíblica y un ambiente seguro y acogedor.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-50 rounded-xl p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <BookOpen className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-bold mb-2">Enseñanza Bíblica</h3>
                <p className="text-gray-600">
                  Compartimos las verdades de la Biblia de manera divertida y comprensible para los niños.
                </p>
              </div>
              <div className="bg-green-50 rounded-xl p-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-bold mb-2">Comunidad Amorosa</h3>
                <p className="text-gray-600">
                  Creamos un ambiente donde cada niño se siente amado, valorado y parte de una familia.
                </p>
              </div>
              <div className="bg-yellow-50 rounded-xl p-6">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Star className="h-6 w-6 text-yellow-600" />
                </div>
                <h3 className="font-bold mb-2">Diversión con Propósito</h3>
                <p className="text-gray-600">
                  Combinamos juegos, manualidades y actividades divertidas con enseñanzas espirituales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Programs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nuestros Programas</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ofrecemos diferentes programas diseñados específicamente para cada etapa del desarrollo de los niños
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-none shadow-lg overflow-hidden">
              <div className="relative h-48 bg-gradient-to-r from-blue-400 to-blue-600">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full inline-block mb-2">
                      <BookOpen className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Escuela Dominical</h3>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h4 className="text-lg font-bold mb-2">Aprendiendo Juntos</h4>
                <p className="text-gray-600 mb-4">
                  Cada domingo, nuestros niños participan en clases divertidas y educativas donde aprenden historias
                  bíblicas, versículos y principios cristianos adaptados a su edad.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h5 className="font-bold mb-2">Grupos por Edades:</h5>
                  <ul className="list-disc pl-5 text-gray-600">
                    <li>Pequeñines (3-5 años)</li>
                    <li>Exploradores (6-12 años)</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg overflow-hidden">
              <div className="relative h-48 bg-gradient-to-r from-green-400 to-green-600">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full inline-block mb-2">
                      <BookOpen className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Estudio Bíblico</h3>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h4 className="text-lg font-bold mb-2">Profundizando en la Palabra</h4>
                <p className="text-gray-600 mb-4">
                  Nuestras clases de estudio bíblico están diseñadas para ayudar a los niños a desarrollar hábitos de
                  lectura bíblica y oración, profundizando su relación personal con Dios.
                </p>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h5 className="font-bold mb-2">Lo que aprenderán:</h5>
                  <ul className="list-disc pl-5 text-gray-600">
                    <li>Cómo leer y entender la Biblia</li>
                    <li>Memorización de versículos clave</li>
                    <li>Aplicación práctica de las enseñanzas bíblicas</li>
                    <li>Desarrollo de una vida de oración</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg overflow-hidden">
              <div className="relative h-48 bg-gradient-to-r from-purple-400 to-purple-600">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full inline-block mb-2">
                      <Users className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Club Bíblico</h3>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h4 className="text-lg font-bold mb-2">Diversión y Aprendizaje</h4>
                <p className="text-gray-600 mb-4">
                  Nuestro club bíblico combina juegos, manualidades, música y enseñanza para crear una experiencia
                  divertida donde los niños aprenden valores cristianos y desarrollan amistades.
                </p>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h5 className="font-bold mb-2">Actividades:</h5>
                  <ul className="list-disc pl-5 text-gray-600">
                    <li>Juegos temáticos basados en historias bíblicas</li>
                    <li>Manualidades creativas</li>
                    <li>Canciones y adoración</li>
                    <li>Tiempo de compartir y hacer amigos</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg overflow-hidden">
              <div className="relative h-48 bg-gradient-to-r from-orange-400 to-orange-600">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full inline-block mb-2">
                      <Calendar className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Eventos Especiales</h3>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h4 className="text-lg font-bold mb-2">Celebraciones Memorables</h4>
                <p className="text-gray-600 mb-4">
                  A lo largo del año, organizamos eventos especiales para los niños como Escuela Bíblica de Vacaciones,
                  campamentos, celebraciones de días festivos y más.
                </p>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h5 className="font-bold mb-2">Eventos Anuales:</h5>
                  <ul className="list-disc pl-5 text-gray-600">
                    <li>Escuela Bíblica de Vacaciones (verano)</li>
                    <li>Celebración de Navidad</li>
                    <li>Día del Niño</li>
                    <li>Retiros familiares</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Nuestro Enfoque</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    En el Ministerio de Niños de Iglesia Damasco, creemos que cada niño es especial y tiene un propósito
                    único en el plan de Dios. Nuestro enfoque se basa en tres pilares fundamentales:
                  </p>

                  <div className="bg-blue-50 p-4 rounded-lg mb-4">
                    <h3 className="font-bold text-blue-700">Enseñanza Bíblica Sólida</h3>
                    <p className="text-gray-600">
                      Todas nuestras lecciones están fundamentadas en la Biblia, presentadas de manera creativa y
                      adaptadas a cada edad para que los niños puedan entender y aplicar las verdades de Dios en sus
                      vidas.
                    </p>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg mb-4">
                    <h3 className="font-bold text-green-700">Ambiente Seguro y Acogedor</h3>
                    <p className="text-gray-600">
                      Nos esforzamos por crear un espacio donde cada niño se sienta seguro, amado y valorado. Nuestros
                      líderes están capacitados y comprometidos con el bienestar de cada niño.
                    </p>
                  </div>

                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h3 className="font-bold text-purple-700">Participación Familiar</h3>
                    <p className="text-gray-600">
                      Creemos que los padres son los principales influenciadores espirituales en la vida de sus hijos.
                      Por eso, proporcionamos recursos y actividades para que las familias continúen el aprendizaje en
                      casa.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-200 rounded-lg"></div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-green-200 rounded-lg"></div>
                <div className="relative rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="/kids1.png"
                    alt="Niños aprendiendo de la Biblia"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-500 to-green-400 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">¡Trae a tus Niños!</h2>
            <p className="text-xl mb-8">
              Te invitamos a traer a tus hijos para que sean parte de nuestro ministerio. Juntos, les ayudaremos a
              crecer en su fe y desarrollar un fundamento sólido en Cristo.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contacto">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                  Contáctanos
                </Button>
              </Link>
              <Link
                href="https://www.facebook.com/profile.php?id=100078725875181"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Facebook className="mr-2 h-5 w-5" />
                  Síguenos en Facebook
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
