import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, ExternalLink } from "lucide-react"

export default function MinisteriosPage() {
  // Ministries with their own pages
  const ministeriosPrincipales = [
    {
      id: 1,
      title: "Ministerio de Niños",
      description: "Formando a los más pequeños en los caminos de Dios",
      image: "/minikids.jpg",
      link: "/ministerios/ninos",
    },
    {
      id: 2,
      title: "Ministerio de Jóvenes",
      description: "Guiando a los jóvenes a vivir una fe auténtica",
      image: "/miniyouth.jpg",
      link: "/ministerios/jovenes",
    },
    {
      id: 3,
      title: "Ministerio de Mujeres",
      description: "Fortaleciendo mujeres a través de la fe y la comunidad",
      image: "/ministerios/damas/damas1.jpeg",
      link: "/ministerios/mujeres",
    },
    {
      id: 4,
      title: "Ministerio de Caballeros",
      description: "Formando hombres de fe, comprometidos con Dios y la familia",
      image: "/mimimen.jpg",
      link: "/ministerios/caballeros",
    },
    {
      id: 5,
      title: "Ministerio de Misiones",
      description: "Llevando el evangelio a todas las naciones",
      image: "/minimission.jpg",
      link: "/ministerios/misiones",
    },
  ]

  // Ministries without separate pages
  const ministeriosSecundarios = [
    {
      id: 6,
      title: "Ministerio de Pantomima - Cristo Vive",
      description: "Comunicando el evangelio a través del arte de la pantomima",
      image: "/minicv.jpg",
      externalLink:
        "https://linktr.ee/cristoviveee?utm_source=linktree_profile_share&ltsid=8fa402bd-043d-43c3-8b18-0140b484617e",
    },
    {
      id: 7,
      title: "Ministerio de Alabanza - COGD",
      description: "Adorando a Dios a través de la música y el canto",
      image: "/minicogd.jpg",
      externalLink: "https://www.instagram.com/cogdministry/",
    },
    {
      id: 8,
      title: "Ministerio de Danza - Zamar",
      description: "Expresando adoración a través del movimiento y la danza",
      image: "/dance-ministry.jpeg",
    },
    {
      id: 9,
      title: "Ministerio de Escuela Bíblica",
      description: "Profundizando en el conocimiento de las Escrituras",
      image: "/miniescuela.jpg",
    },
    {
      id: 10,
      title: "Ministerio de Ujieres",
      description: "Sirviendo y asistiendo a la congregación durante los servicios",
      image: "/miniuji.jpg",
    },
    {
      id: 11,
      title: "Ministerio de Células",
      description: "Grupos pequeños para comunión y crecimiento espiritual",
      image: "/minicelu.jpg",
    },
    {
      id: 12,
      title: "Ministerio de Multimedia y Sonido",
      description: "Apoyando los servicios con tecnología audiovisual",
      image: "/minimulti.jpg",
    },
    {
      id: 13,
      title: "Ministerio de Oración",
      description: "Intercediendo por las necesidades de la iglesia y la comunidad",
      image: "/prayer-ministry.jpeg",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gray-900 text-white">
        <div className="absolute inset-0 z-0">
          <Image src="/dance-ministry.jpeg" alt="Ministerios Diversos" fill className="object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 to-gray-900/90" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Ministerios Diversos</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300">
            Descubre cómo puedes servir y crecer en tu fe
          </p>
        </div>
      </section>

      {/* Main Ministries Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Nuestros Ministerios Principales</h2>
            <p className="text-gray-600">
              En Iglesia Damasco creemos que cada persona tiene dones y talentos únicos para servir en el cuerpo de
              Cristo. Descubre dónde puedes servir y crecer espiritualmente.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {ministeriosPrincipales.map((ministerio) => (
              <Card
                key={ministerio.id}
                className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all"
              >
                <div className="relative h-48">
                  <Image
                    src={ministerio.image || "/damasco-logo.png"}
                    alt={ministerio.title}
                    fill
                    className="object-cover"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{ministerio.title}</h3>
                  <p className="text-gray-600 mb-4">{ministerio.description}</p>
                  <Link href={ministerio.link}>
                    <Button variant="outline" className="w-full gap-2">
                      Más Información <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Other Ministries Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Otros Ministerios</h2>
            <p className="text-gray-600">
              Conoce los diferentes ministerios que forman parte de nuestra iglesia y cómo sirven a la comunidad
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {ministeriosSecundarios.map((ministerio) => (
              <Card
                key={ministerio.id}
                className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all"
              >
                <div className="relative h-48">
                  <Image
                    src={ministerio.image || "/damasco-logo.png"}
                    alt={ministerio.title}
                    fill
                    className="object-cover"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{ministerio.title}</h3>
                  <p className="text-gray-600 mb-4">{ministerio.description}</p>
                  {ministerio.externalLink && (
                    <a href={ministerio.externalLink} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="w-full gap-2">
                        Visitar <ExternalLink className="h-4 w-4" />
                      </Button>
                    </a>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">¿Cómo Puedo Involucrarme?</h2>
            <p className="text-gray-600 mb-8">
              Si deseas servir en alguno de nuestros ministerios o quieres obtener más información, no dudes en
              contactarnos. Estamos aquí para ayudarte a encontrar tu lugar en nuestra comunidad.
            </p>
            <Link href="/contacto">
              <Button size="lg" className="gap-2">
                Contáctanos <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
