"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"

interface YouTubeEmbedProps {
  channelId: string
  videoId?: string
  showLatestVideo?: boolean
}

export function YouTubeEmbed({ channelId, videoId, showLatestVideo = true }: YouTubeEmbedProps) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading for a better UX
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div className="relative aspect-video w-full bg-gray-100 rounded-lg flex items-center justify-center">
        <Loader2 className="h-8 w-8 text-primary animate-spin" />
        <span className="sr-only">Cargando video...</span>
      </div>
    )
  }

  if (videoId) {
    return (
      <div className="relative rounded-lg overflow-hidden shadow-xl">
        <iframe
          className="w-full aspect-video"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="Video de YouTube"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    )
  }

  // If no videoId is provided, show a link to the channel
  return (
    <div className="aspect-video w-full bg-gray-100 rounded-lg flex flex-col items-center justify-center p-6">
      <p className="text-gray-700 mb-4 text-center">
        {showLatestVideo
          ? "Visita nuestro canal para ver nuestros servicios y videos más recientes."
          : "Visita nuestro canal para ver nuestras transmisiones en vivo y videos anteriores."}
      </p>
      <Link href={`https://www.youtube.com/channel/${channelId}`} target="_blank" rel="noopener noreferrer">
        <Button>Ver Canal en YouTube</Button>
      </Link>
    </div>
  )
}
