"use client"

import * as React from "react"

interface SheetProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
}

interface SheetTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
}

interface SheetContentProps {
  children: React.ReactNode
  side?: "left" | "right" | "top" | "bottom"
}

export function Sheet({ open, onOpenChange, children }: SheetProps) {
  return (
    <div className={`fixed inset-0 z-50 ${open ? "block" : "hidden"}`}>
      <div className="absolute inset-0 bg-black/50" onClick={() => onOpenChange?.(false)} />
      <div className="absolute inset-y-0 left-0 w-64 bg-background p-4 shadow-lg">
        {children}
      </div>
    </div>
  )
}

export function SheetTrigger({ children, asChild, ...props }: SheetTriggerProps) {
  if (asChild) {
    return React.cloneElement(children as React.ReactElement, props)
  }
  return <button {...props}>{children}</button>
}

export function SheetContent({ children, side = "left" }: SheetContentProps) {
  return <div className={`h-full ${side === "left" ? "left-0" : "right-0"}`}>{children}</div>
}

export function SheetHeader({ children }: { children: React.ReactNode }) {
  return <div className="mb-4">{children}</div>
}

export function SheetTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="text-lg font-bold">{children}</h2>
}

export function SheetDescription({ children }: { children: React.ReactNode }) {
  return <p className="text-sm text-muted-foreground">{children}</p>
}
