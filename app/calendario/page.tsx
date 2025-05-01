import { Calendar, Clock, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function CalendarPage() {
  // Sample events data - in a real implementation, this would come from a database or CMS
  const events = [
    {
      id: 1,
      title: "Culto General",
      date: "Todos los domingos",
      time: "10:00 AM",
      location: "Santuario Principal",
      description: "Servicio dominical para toda la familia.",
      isRecurring: true,
    },
    {
      id: 2,
      title: "Estudio Bíblico",
      date: "Todos los miércoles",
      time: "7:00 PM",
      location: "Santuario Principal",
      description: "Estudio bíblico semanal para profundizar en la palabra de Dios.",
      isRecurring: true,
    },
    {
      id: 3,
      title: "Reunión por Departamentos",
      date: "Todos los viernes",
      time: "7:30 PM",
      location: "Varias salas",
      description: "Reuniones de los diferentes ministerios y departamentos de la iglesia.",
      isRecurring: true,
    },
  ]

  // Group events - now we only have recurring events
  const groupedEvents = {
    "Eventos Recurrentes": events,
  }

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Calendario de Eventos</h1>
            <p className="text-xl text-white/80">
              Mantente informado sobre nuestros servicios y actividades especiales
            </p>
          </div>
        </div>
      </section>

      {/* Calendar Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Social Media Note */}
            <div className="bg-primary/10 rounded-xl p-6 mb-12 text-center">
              <h2 className="text-xl font-bold mb-2">Eventos Actualizados</h2>
              <p className="text-gray-600 mb-4">
                Para ver los eventos más recientes y actualizados, visita nuestras redes sociales:
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="https://www.instagram.com/iglesia.damasco/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
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
                  Instagram
                </a>
                <a
                  href="https://www.facebook.com/Iglesiadediospentecostaldamasco"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-700 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                  Facebook
                </a>
              </div>
            </div>

            {/* Google Calendar Integration */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Nuestro Calendario</h2>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="aspect-w-16 aspect-h-9 w-full">
                  <iframe
                    src="https://calendar.google.com/calendar/u/0/embed?src=damascochurch777@gmail.com&ctz=America/Indiana/Indianapolis"
                    style={{ border: 0 }}
                    width="100%"
                    height="600"
                    frameBorder="0"
                    scrolling="no"
                    title="Calendario de Iglesia Damasco"
                  ></iframe>
                </div>
              </div>
              <p className="text-center mt-4 text-gray-600">
                Puedes suscribirte a nuestro calendario para mantenerte actualizado con todos nuestros eventos.
                <a
                  href="https://calendar.google.com/calendar/u/0?cid=ZGFtYXNjb2NodXJjaDc3N0BnbWFpbC5jb20"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-medium ml-1 hover:underline"
                >
                  Suscribirse al calendario
                </a>
              </p>
            </div>

            {/* Recurring Events */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 border-b pb-2">Eventos Recurrentes</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {groupedEvents["Eventos Recurrentes"]?.map((event) => (
                  <Card key={event.id} className="border-none shadow-lg hover:shadow-xl transition-all">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-3">{event.title}</h3>
                      <div className="space-y-3 text-gray-600">
                        <div className="flex items-start gap-3">
                          <Calendar className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <Clock className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-start gap-3">
                          <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                      <p className="mt-4 text-gray-600">{event.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
