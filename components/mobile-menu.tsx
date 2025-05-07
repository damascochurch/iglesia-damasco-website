"use client"

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { useState } from "react"

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

  const handleNavigation = () => {
    setOpen(false)
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] p-0 bg-white/95 backdrop-blur-sm">
        <nav className="flex flex-col h-full">
          <div className="flex-1 py-6">
            <ul className="space-y-2 px-4">
              {menuItems.map((item) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={item.href}
                    onClick={handleNavigation}
                    className={cn(
                      "block py-3 px-4 rounded-lg text-lg font-medium transition-colors",
                      pathname === item.href
                        ? "bg-primary/10 text-primary"
                        : "hover:bg-gray-100"
                    )}
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>
          <div className="p-4 border-t">
            <Link
              href="/donate"
              onClick={handleNavigation}
              className="w-full inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-primary/90 transition-colors"
            >
              Donar Ahora
            </Link>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  )
} 