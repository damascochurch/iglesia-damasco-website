"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Facebook, Youtube, Instagram } from "lucide-react"
import { cn } from "@/lib/utils"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Sobre Nosotros", href: "/sobre-nosotros" },
    { name: "Ministerios", href: "/ministerios" },
    { name: "Calendario", href: "/calendario" },
    { name: "Donaciones", href: "/donaciones" },
    { name: "Contacto", href: "/contacto" },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-white/95 shadow-md backdrop-blur-sm" : "bg-white/95 backdrop-blur-sm",
      )}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <div className="flex flex-col text-gray-900">
            <span className="text-xs sm:text-sm font-medium">IGLESIA DE DIOS</span>
            <span className="text-base sm:text-lg font-bold font-cinzel tracking-wider">
              PENTECOSTAL DAMASCO
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="font-medium text-gray-700 transition-colors hover:text-primary"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button 
              variant="ghost" 
              size="icon" 
              className="lg:hidden p-2 hover:bg-gray-100"
            >
              <Menu className="h-6 w-6 text-gray-900" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[85vw] sm:w-[350px] p-0">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-6 border-b">
                <Link href="/" className="flex items-center">
                  <div className="flex flex-col text-gray-900">
                    <span className="text-xs sm:text-sm font-medium">IGLESIA DE DIOS</span>
                    <span className="text-base sm:text-lg font-bold font-cinzel tracking-wider">
                      PENTECOSTAL DAMASCO
                    </span>
                  </div>
                </Link>
              </div>
              <nav className="flex flex-col py-6">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="px-6 py-4 text-lg font-medium text-gray-700 hover:bg-gray-50 active:bg-gray-100 transition-colors border-b border-gray-100"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
              <div className="mt-auto p-6 border-t">
                <div className="flex items-center justify-center gap-6">
                  <Link
                    href="https://www.facebook.com/Iglesiadediospentecostaldamasco"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full hover:bg-gray-100 active:bg-gray-200 transition-colors"
                  >
                    <Facebook size={24} className="text-gray-700" />
                  </Link>
                  <Link
                    href="https://www.youtube.com/@damascochurch5364"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full hover:bg-gray-100 active:bg-gray-200 transition-colors"
                  >
                    <Youtube size={24} className="text-gray-700" />
                  </Link>
                  <Link
                    href="https://www.instagram.com/iglesia.damasco/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full hover:bg-gray-100 active:bg-gray-200 transition-colors"
                  >
                    <Instagram size={24} className="text-gray-700" />
                  </Link>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
