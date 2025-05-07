"use client"

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { usePathname, useRouter } from "next/navigation"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { translations } from "@/lib/translations"
import { useParams } from "next/navigation"

const menuItems = [
  { href: "/", key: "home" },
  { href: "/about", key: "about" },
  { href: "/ministries", key: "ministries" },
  { href: "/events", key: "events" },
  { href: "/contact", key: "contact" },
]

export function MobileMenu() {
  const pathname = usePathname()
  const router = useRouter()
  const params = useParams()
  const [open, setOpen] = useState(false)
  
  // Get current language from URL or default to Spanish
  const lang = (params?.lang as string) || "es"
  const t = translations[lang as keyof typeof translations]

  // Close menu when pathname changes
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  const handleNavigation = (href: string) => {
    setOpen(false)
    router.push(`/${lang}${href}`)
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
                      pathname === `/${lang}${item.href}`
                        ? "bg-primary/10 text-primary shadow-sm"
                        : "hover:bg-gray-50 active:scale-[0.98]"
                    )}
                  >
                    {t.nav[item.key as keyof typeof t.nav]}
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
              {t.nav.donate}
            </button>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  )
} 