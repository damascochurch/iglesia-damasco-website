"use client"

import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, backgroundColor: "black" }}
        animate={{ opacity: 1, backgroundColor: "transparent" }}
        exit={{ opacity: 0, backgroundColor: "black" }}
        transition={{
          duration: 0.1,
          ease: "linear"
        }}
        className="relative z-0"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
} 