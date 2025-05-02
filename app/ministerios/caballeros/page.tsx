import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Facebook, Users, Shield, BookOpen } from "lucide-react"
import Image from "next/image"

export default function MinisterioCaballerosPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-r from-blue-700 to-indigo-800 text-white">
        <div className="absolute inset-0 z-0">
          {/* Use a placeholder image until the actual image is available */}
          <Image
            src="/ministerios/caballeros/Caballeros1.JPG"
            alt="Ministerio de Caballeros"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-700/90 to-indigo-800/90" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Ministerio de Caballeros</h1>
            <p className="text-xl text-gray-300">
              Formando hombres de fe, comprometidos con Dios, la familia y la comunidad
            </p>
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

      {/* Vision and Mission */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">Nuestra Visión</h2>
            </div>

            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="text-xl text-center mb-8">
                Somos un grupo de Hombres Cristianos que buscamos y tenemos una comunión íntima con Dios, que nos
                esmeramos por ser buenos Esposos y Padres. Tenemos responsabilidades en nuestra Iglesia y Comunidad, y
                más importante aún, tenemos el compromiso de apoyar y continuar la Obra de Dios Padre.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nuestros Valores</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Principios que guían nuestro ministerio y fortalecen nuestra fe
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <BookOpen className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">Integridad Bíblica</h3>
              <p className="text-gray-600 text-center">
                Comprometidos con vivir según los principios de la Palabra de Dios en todos los aspectos de nuestra
                vida.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">Liderazgo Familiar</h3>
              <p className="text-gray-600 text-center">
                Dedicados a ser líderes espirituales en nuestros hogares, guiando a nuestras familias con amor y
                sabiduría.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">Servicio Comunitario</h3>
              <p className="text-gray-600 text-center">
                Comprometidos con servir a nuestra iglesia y comunidad, siendo ejemplo de fe y dedicación.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Activities placeholder - will be populated with images later */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nuestro Ministerio en Acción</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Compartiendo momentos de comunión, aprendizaje y crecimiento espiritual entre hombres de fe
            </p>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-600 italic">Imágenes próximamente</p>
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-700 to-indigo-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Únete a Nosotros</h2>
            <p className="text-xl mb-8">
              Te invitamos a ser parte de nuestro ministerio de caballeros. Juntos creceremos en fe, liderazgo y
              servicio.
            </p>
            <div className="flex justify-center">
              <Link
                href="https://www.facebook.com/profile.php?id=61559674173895"
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
