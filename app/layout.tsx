import type { Metadata } from "next"
import { Inter, Cinzel, Playfair_Display } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { PageTransition } from "@/components/page-transition"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const cinzel = Cinzel({ subsets: ["latin"], variable: "--font-cinzel" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })

export const metadata: Metadata = {
  title: "Iglesia de Dios Pentecostal Damasco",
  description: "Iglesia de Dios Pentecostal Damasco - Sirviendo a la comunidad con fe y amor",
  icons: []
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.variable} ${cinzel.variable} ${playfair.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative min-h-screen">
            <div className="fixed top-0 left-0 right-0 z-50">
              <Header />
            </div>
            <div className="pt-[72px]">
              <PageTransition>
                <main className="relative">{children}</main>
              </PageTransition>
            </div>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
