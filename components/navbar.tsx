"use client"

import * as React from "react"
import Link from "next/link"
import { Menu } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const routes = [
  {
    href: "/",
    label: "Inicio",
  },
  {
    href: "/sobre-nosotros",
    label: "Sobre Nosotros",
  },
  {
    href: "/ministerios",
    label: "Ministerios",
  },
  {
    href: "/eventos",
    label: "Eventos",
  },
  {
    href: "/donaciones",
    label: "Donaciones",
  },
  {
    href: "/contacto",
    label: "Contacto",
  },
]

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <header className="fixed top-0 w-full z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-16 items-center">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>Iglesia Damasco</SheetTitle>
              <SheetDescription>
                Iglesia de Dios Pentecostal Damasco - Indianapolis, IN
              </SheetDescription>
            </SheetHeader>
            <div className="mt-8 flex flex-col gap-4">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className="text-foreground/60 transition-colors hover:text-foreground"
                  onClick={() => setIsOpen(false)}
                >
                  {route.label}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
        <div className="flex w-full items-center md:gap-6">
          <Link href="/" className="hidden md:block">
            <span className="font-bold">Iglesia Damasco</span>
          </Link>
          <div className="hidden md:flex md:gap-6">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className="text-foreground/60 transition-colors hover:text-foreground"
              >
                {route.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-1 items-center justify-end">
          </div>
        </div>
      </nav>
    </header>
  )
} 