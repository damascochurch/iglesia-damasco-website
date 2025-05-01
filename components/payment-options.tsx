import { Card, CardContent } from "@/components/ui/card"

export function PaymentOptions() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
      {/* Square Payment */}
      <Card className="border-none shadow-lg hover:shadow-xl transition-all">
        <CardContent className="p-6 flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
            <svg viewBox="0 0 24 24" className="h-8 w-8 text-blue-600" fill="currentColor">
              <path d="M4,6h16v12H4V6M20,4H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V6C22,4.9,21.1,4,20,4L20,4z M7,14 c0.4,0,0.7,0.1,1,0.2V9.5C8,9.2,7.7,9,7.3,9H5.5C5.2,9,5,9.2,5,9.5v3C5,13.3,5.7,14,7,14L7,14z M19,14.5c0,0.3-0.2,0.5-0.5,0.5h-2 c-0.3,0-0.5-0.2-0.5-0.5v-3c0-0.3,0.2-0.5,0.5-0.5h2c0.3,0,0.5,0.2,0.5,0.5V14.5z M16.8,11.5c0,0.7-0.6,1.3-1.3,1.3 s-1.3-0.6-1.3-1.3s0.6-1.3,1.3-1.3S16.8,10.8,16.8,11.5z M12.3,9.5c0-0.3-0.2-0.5-0.5-0.5h-2c-0.3,0-0.5,0.2-0.5,0.5v5 c0,0.3,0.2,0.5,0.5,0.5h2c0.3,0,0.5-0.2,0.5-0.5V9.5z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2">Pago con Tarjeta</h3>
          <p className="text-gray-600 mb-6">
            Realiza tu donación de forma segura con tarjeta de crédito o débito a través de Square.
          </p>
          <a
            href="https://checkout.square.site/merchant/BB5B75XBBJJ20/checkout/643QHYIUNXWOF3NKUINJQ2SH?src=sheet"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-white hover:bg-blue-700 h-10 px-4 py-2 w-full"
          >
            Donar con Tarjeta
          </a>
          <p className="text-xs text-gray-500 mt-2">Pago seguro procesado por Square</p>
        </CardContent>
      </Card>

      {/* Zelle Payment */}
      <Card className="border-none shadow-lg hover:shadow-xl transition-all">
        <CardContent className="p-6 flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
            <svg viewBox="0 0 24 24" className="h-8 w-8 text-purple-600" fill="currentColor">
              <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-2">Pago con Zelle</h3>
          <p className="text-gray-600 mb-6">
            Envía tu donación directamente desde tu aplicación bancaria usando Zelle.
          </p>
          <a
            href="https://enroll.zellepay.com/qr-codes?data=ewogICJhY3Rpb24iIDogInBheW1lbnQiLAogICJ0b2tlbiIgOiAiZGFtYXNjb2NodXJjaEBpY2xvdWQuY29tIiwKICAibmFtZSIgOiAiSUdMRVNJQSBERSBESU9TIFBFTlRFQ09TVEFMIERBTUFTQ08iCn0="
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-purple-600 text-white hover:bg-purple-700 h-10 px-4 py-2 w-full"
          >
            Pagar con Zelle
          </a>
          <p className="text-xs text-gray-500 mt-2">Enviar a: damascochurch@icloud.com</p>
        </CardContent>
      </Card>
    </div>
  )
}
