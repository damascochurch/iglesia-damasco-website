import type React from "react"
import type { Metadata } from "next"
import { Inter, Cinzel, Playfair_Display } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const cinzel = Cinzel({ subsets: ["latin"], variable: "--font-cinzel" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })

export const metadata: Metadata = {
  title: "Iglesia de Dios Pentecostal Damasco",
  description: "Iglesia de Dios Pentecostal Damasco - Sirviendo a la comunidad con fe y amor",
  icons: {
    icon: "/favicon.ico",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        {/* Add scroll restoration script to prevent jumps */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
          if (history.scrollRestoration) {
            history.scrollRestoration = 'manual';
          }
          window.addEventListener('load', function() {
            // Reset scroll position on page load
            window.scrollTo(0, 0);
          });
          
          // Prevent default behavior for internal links to avoid scrolling issues
          document.addEventListener('click', function(e) {
            const target = e.target.closest('a');
            if (target && target.getAttribute('href') && target.getAttribute('href').startsWith('/') && !target.getAttribute('target')) {
              e.preventDefault();
              window.location.href = target.getAttribute('href');
            }
          });
          `,
          }}
        />
      </head>
      <body className={`${inter.variable} ${cinzel.variable} ${playfair.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
