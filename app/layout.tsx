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
  description: "Iglesia de Dios Pentecostal Damasco - Una comunidad de fe, esperanza y amor en Cristo Jesús. Únete a nosotros en nuestra misión de servir y compartir el evangelio.",
  icons: {
    icon: [
      {
        url: "/favicon_io GOD NEW/favicon.ico",
        sizes: "any",
      },
      {
        url: "/favicon_io GOD NEW/favicon-32x32.png",
        type: "image/png",
        sizes: "32x32",
      },
      {
        url: "/favicon_io GOD NEW/favicon-16x16.png",
        type: "image/png",
        sizes: "16x16",
      },
    ],
    apple: {
      url: "/favicon_io GOD NEW/apple-touch-icon.png",
      sizes: "180x180",
    },
    other: [
      {
        rel: "android-chrome-192x192",
        url: "/favicon_io GOD NEW/android-chrome-192x192.png",
      },
      {
        rel: "android-chrome-512x512",
        url: "/favicon_io GOD NEW/android-chrome-512x512.png",
      },
    ],
  },
  manifest: "/favicon_io GOD NEW/site.webmanifest",
  openGraph: {
    title: "Iglesia de Dios Pentecostal Damasco",
    description: "Una comunidad de fe, esperanza y amor en Cristo Jesús. Únete a nosotros en nuestra misión de servir y compartir el evangelio.",
    url: "https://iglesiadamasco.org",
    siteName: "Iglesia de Dios Pentecostal Damasco",
    locale: "es_ES",
    type: "website",
  },
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
            <Header />
            <PageTransition>
              <main className="relative">{children}</main>
            </PageTransition>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
