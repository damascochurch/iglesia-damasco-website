import { MapPin, Phone, Clock } from "lucide-react"

export function ContactInfo() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Información de Contacto</h2>
          <p className="text-gray-600">Estamos aquí para servirte. No dudes en contactarnos.</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Dirección</h3>
                  <p className="text-gray-600">1349 S. Tibbs Avenue</p>
                  <p className="text-gray-600">Indianapolis, IN</p>
                  <p className="text-gray-600">United States</p>
                  <a
                    href="https://maps.google.com/?q=1349+S.+Tibbs+Avenue+Indianapolis+IN"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary font-medium mt-2 inline-block hover:underline"
                  >
                    Ver en Google Maps
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Teléfono</h3>
                  <p className="text-gray-600">(317) 241-7085</p>
                  <a href="tel:+13172417085" className="text-primary font-medium mt-2 inline-block hover:underline">
                    Llamar ahora
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Horario de Servicios</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-bold">Domingo</h4>
                    <p className="text-gray-600">Culto General</p>
                    <p className="text-gray-600 font-medium">10:00 AM</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-bold">Miércoles</h4>
                    <p className="text-gray-600">Estudio Bíblico</p>
                    <p className="text-gray-600 font-medium">7:00 PM</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-bold">Viernes</h4>
                    <p className="text-gray-600">Por Departamentos</p>
                    <p className="text-gray-600 font-medium">7:30 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
