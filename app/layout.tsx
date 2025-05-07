import type { Metadata } from "next"
import { Playfair_Display as PlayfairDisplay } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const playfair = PlayfairDisplay({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Iglesia Damasco",
  description: "Iglesia de Dios Pentecostal Damasco - Indianapolis, IN",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={playfair.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
