import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"

export function OnlineGivingOptions() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card className="border-none shadow-lg hover:shadow-xl transition-all">
        <CardContent className="p-6 flex flex-col h-full">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 text-primary"
            >
              <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2">Zelle</h3>
          <p className="text-gray-600 mb-6 flex-grow">
            Envía tu donación directamente desde tu aplicación bancaria usando Zelle.
          </p>
          <div className="bg-gray-50 p-3 rounded-lg mb-4 text-sm">
            <p className="font-medium">Enviar a:</p>
            <p>damascochurch777@gmail.com</p>
          </div>
          <a
            href="https://www.zellepay.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-medium flex items-center hover:underline"
          >
            Más información sobre Zelle
            <ExternalLink className="ml-1 h-4 w-4" />
          </a>
        </CardContent>
      </Card>

      <Card className="border-none shadow-lg hover:shadow-xl transition-all">
        <CardContent className="p-6 flex flex-col h-full">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 text-primary"
            >
              <rect width="20" height="14" x="2" y="5" rx="2" />
              <line x1="2" x2="22" y1="10" y2="10" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2">Transferencia Bancaria</h3>
          <p className="text-gray-600 mb-6 flex-grow">
            Configura una transferencia única o recurrente desde tu cuenta bancaria.
          </p>
          <Button variant="outline" className="w-full">
            Solicitar Información
          </Button>
        </CardContent>
      </Card>

      <Card className="border-none shadow-lg hover:shadow-xl transition-all">
        <CardContent className="p-6 flex flex-col h-full">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 text-primary"
            >
              <path d="M12 2v20" />
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2">En Persona</h3>
          <p className="text-gray-600 mb-6 flex-grow">
            Dona en persona durante nuestros servicios regulares o en la oficina de la iglesia.
          </p>
          <div className="bg-gray-50 p-3 rounded-lg text-sm">
            <p className="font-medium">Dirección:</p>
            <p>1349 S. Tibbs Avenue, Indianapolis, IN</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
