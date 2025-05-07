"use client"

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

const menuItems = [
  { href: "/", label: "Inicio" },
  { href: "/about", label: "Nosotros" },
  { href: "/ministries", label: "Ministerios" },
  { href: "/events", label: "Eventos" },
  { href: "/contact", label: "Contacto" },
]

export function MobileMenu() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  // Close menu when pathname changes
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  const handleNavigation = (href: string) => {
    setOpen(false)
    window.location.href = href
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden hover:bg-gray-100">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent 
        side="right" 
        className="w-[300px] p-0 bg-white/95 backdrop-blur-sm border-l border-gray-100"
      >
        <nav className="flex flex-col h-full">
          <div className="flex-1 py-8">
            <ul className="space-y-3 px-4">
              {menuItems.map((item, index) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ 
                    duration: 0.2,
                    delay: index * 0.05 
                  }}
                >
                  <button
                    onClick={() => handleNavigation(item.href)}
                    className={cn(
                      "w-full text-left block py-3.5 px-4 rounded-xl text-lg font-medium transition-all",
                      pathname === item.href
                        ? "bg-primary/10 text-primary shadow-sm"
                        : "hover:bg-gray-50 active:scale-[0.98]"
                    )}
                  >
                    {item.label}
                  </button>
                </motion.li>
              ))}
            </ul>
          </div>
          <div className="p-6 border-t border-gray-100">
            <button
              onClick={() => handleNavigation("/donate")}
              className="w-full inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3.5 text-base font-medium text-white shadow-sm hover:bg-primary/90 active:scale-[0.98] transition-all"
            >
              Donar Ahora
            </button>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  )
} 