import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Facebook, Quote } from "lucide-react"

export default function MinisterioMujeresPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-r from-pink-500 to-purple-600 text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/ministerios/damas/damas4.jpeg"
            alt="Ministerio de Mujeres"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500/80 to-purple-600/80" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <Image
                src="/ministerios/damas/damas-logo.jpeg"
                alt="Damas de Damasco Logo"
                width={80}
                height={80}
                className="rounded-full border-2 border-white"
              />
              <h1 className="text-4xl md:text-5xl font-bold">Ministerio de Mujeres</h1>
            </div>
            <p className="text-xl text-gray-300">
              Fortaleciendo mujeres a través de la fe, la comunidad y el amor de Cristo
            </p>
          </div>
        </div>

      </section>

      {/* Image Gallery */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nuestro Ministerio en Acción</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Compartiendo momentos de comunión, aprendizaje y crecimiento espiritual entre mujeres de todas las edades
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="relative h-80 overflow-hidden rounded-xl shadow-lg group">
              <Image
                src="/ministerios/damas/damas1.jpeg"
                alt="Enseñanza de la Palabra"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                <h3 className="text-white font-bold text-xl">Enseñanza de la Palabra</h3>
                <p className="text-white/90">Compartiendo la verdad de Dios con amor y claridad</p>
              </div>
            </div>

            <div className="relative h-80 overflow-hidden rounded-xl shadow-lg group">
              <Image
                src="/ministerios/damas/damas2.jpeg"
                alt="Comunión y Compañerismo"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                <h3 className="text-white font-bold text-xl">Comunión y Compañerismo</h3>
                <p className="text-white/90">Construyendo relaciones que perduran</p>
              </div>
            </div>

            <div className="relative h-80 overflow-hidden rounded-xl shadow-lg group">
              <Image
                src="/ministerios/damas/damas3.jpeg"
                alt="Estudios Bíblicos"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                <h3 className="text-white font-bold text-xl">Estudios Bíblicos</h3>
                <p className="text-white/90">Profundizando en la Palabra de Dios juntas</p>
              </div>
            </div>

            <div className="relative h-80 overflow-hidden rounded-xl shadow-lg group">
              <Image
                src="/ministerios/damas/damas4.jpeg"
                alt="Adoración y Alabanza"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                <h3 className="text-white font-bold text-xl">Adoración y Alabanza</h3>
                <p className="text-white/90">Levantando nuestras voces en adoración a Dios</p>
              </div>
            </div>

            <div className="relative h-80 overflow-hidden rounded-xl shadow-lg group">
              <Image
                src="/ministerios/damas/damas5.jpeg"
                alt="Oración y Apoyo"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                <h3 className="text-white font-bold text-xl">Oración y Apoyo</h3>
                <p className="text-white/90">Sosteniendo unas a otras en tiempos de necesidad</p>
              </div>
            </div>

            <div className="relative h-80 overflow-hidden rounded-xl shadow-lg bg-pink-100 flex items-center justify-center p-6 text-center">
              <div>
                <Image
                  src="/ministerios/damas/damas-logo.jpeg"
                  alt="Damas de Damasco Logo"
                  width={120}
                  height={120}
                  className="mx-auto mb-4"
                />
                <h3 className="text-xl font-bold mb-2">Damas de Damasco</h3>
                <p className="text-gray-600">Unidas en propósito, fe y amor</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision and Mission */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block p-4 bg-pink-50 rounded-full mb-4">
                <Quote className="h-8 w-8 text-pink-500" />
              </div>
              <h2 className="text-3xl font-bold mb-6">Nuestra Visión</h2>
              <p className="text-xl text-gray-700 italic">"Todo lo puedo en Cristo que me fortalece"</p>
            </div>

            <div className="prose prose-lg max-w-none text-gray-600">
              <p>
                Tenemos todo lo que necesitamos cuando confiamos en Dios para ser fortalecidas. También sabemos por
                Éxodo 33:14 que Dios dice, "Yo mismo iré contigo y te daré descanso". Siempre necesitamos ser más
                conscientes de Dios, y siempre podemos pedir que su presencia esté con nosotras.
              </p>
              <p>
                Esta oración consiste en invitar a su Espíritu Santo a que nos llene de su poder, dándonos fuerza y
                proporcionando consuelo sin importar lo que el día nos depare.
              </p>
            </div>

            {/* Facebook link removed from this section */}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-16 bg-gradient-to-r from-pink-500 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Únete a Nosotras</h2>
            <p className="text-xl mb-8">
              Te invitamos a ser parte de nuestro ministerio de mujeres. Juntas creceremos en fe, amor y propósito.
            </p>
            <div className="flex justify-center">
              <Link
                href="https://www.facebook.com/profile.php?id=61562070187524"
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
