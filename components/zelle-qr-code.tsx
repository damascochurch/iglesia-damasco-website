import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export function ZelleQRCode() {
  return (
    <Card className="border-none shadow-lg max-w-xs mx-auto">
      <CardContent className="p-6 flex flex-col items-center text-center">
        <h3 className="text-lg font-bold mb-2">Escanea para pagar con Zelle</h3>
        <p className="text-gray-600 mb-4 text-sm">Usa la cámara de tu teléfono para escanear este código QR</p>

        <div className="bg-white p-2 rounded-lg border mb-2">
          <Image src="/zelle-qr-code.png" alt="Zelle QR Code" width={200} height={200} className="mx-auto" />
        </div>

        <div className="text-sm text-gray-600 mt-2">
          <p className="font-medium">damascochurch@icloud.com</p>
          <p>IGLESIA DE DIOS PENTECOSTAL DAMASCO</p>
        </div>
      </CardContent>
    </Card>
  )
}
