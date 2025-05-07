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
        isScrolled ? "bg-white shadow-md" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div
            className={cn(
              "flex flex-col transition-colors",
              isScrolled ? "text-gray-900" : "text-white",
            )}
          >
            <span className="text-sm font-medium">IGLESIA DE DIOS</span>
            <span
              className={cn(
                "text-lg font-bold font-cinzel tracking-wider",
                isScrolled ? "text-gray-900" : "text-white",
              )}
            >
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
              className={cn(
                "font-medium transition-colors hover:text-primary",
                isScrolled ? "text-gray-700" : "text-white",
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className={cn("h-6 w-6", isScrolled ? "text-gray-900" : "text-white")} />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col h-full">
              <div className="flex-1 py-6">
                <nav className="flex flex-col gap-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-lg font-medium hover:text-primary"
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </div>
              <div className="border-t py-6">
                <div className="flex justify-center gap-4">
                  <Link
                    href="https://www.facebook.com/iglesiadamasco"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full hover:bg-gray-100"
                  >
                    <Facebook size={20} />
                  </Link>
                  <Link
                    href="https://www.youtube.com/@iglesiadamasco"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full hover:bg-gray-100"
                  >
                    <Youtube size={20} />
                  </Link>
                  <Link
                    href="https://www.instagram.com/iglesiadamasco"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full hover:bg-gray-100"
                  >
                    <Instagram size={20} />
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
