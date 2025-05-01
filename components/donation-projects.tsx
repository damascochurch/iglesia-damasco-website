import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function DonationProjects() {
  const projects = [
    {
      id: 1,
      title: "Viaje Misionero a República Dominicana",
      description:
        "Ayuda a financiar nuestro próximo viaje misionero a República Dominicana en 2025 donde construiremos una iglesia y proporcionaremos ayuda médica a la comunidad local.",
      image: "/mission-trip-dominican.png",
      goal: 5000,
      raised: 3250,
      daysLeft: 365,
    },
    {
      id: 2,
      title: "Renovación del Área de Niños",
      description:
        "Ayuda a renovar y equipar nuestra área de niños con materiales educativos, mobiliario y tecnología para crear un ambiente seguro y divertido para el aprendizaje espiritual.",
      image: "/children-area-renovation.png",
      goal: 3500,
      raised: 1200,
      daysLeft: 60,
    },
  ]

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-center mb-6">Proyectos Actuales</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <Card key={project.id} className="border-none shadow-lg overflow-hidden">
            <div className="relative h-48">
              <Image
                src={
                  project.image || `/placeholder.svg?height=200&width=400&query=${encodeURIComponent(project.title)}`
                }
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>

              <div className="mb-4">
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium">${project.raised} recaudados</span>
                  <span className="text-gray-500">Meta: ${project.goal}</span>
                </div>
                <Progress value={(project.raised / project.goal) * 100} className="h-2" />
              </div>

              <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-gray-500">{project.daysLeft} días restantes</span>
                <span className="text-sm font-medium text-primary">
                  {Math.round((project.raised / project.goal) * 100)}% completado
                </span>
              </div>

              <Button className="w-full">Donar a este Proyecto</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
