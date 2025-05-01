"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Loader2, AlertCircle } from "lucide-react"

interface YouTubeLiveFeedProps {
  channelId: string // YouTube channel ID
  fallbackVideoId?: string // Fallback video ID when not live
}

export function YouTubeLiveFeed({ channelId, fallbackVideoId }: YouTubeLiveFeedProps) {
  const [isLive, setIsLive] = useState<boolean>(false)
  const [liveVideoId, setLiveVideoId] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string>("")

  useEffect(() => {
    const checkIfChannelIsLive = async () => {
      try {
        setLoading(true)
        setError("")

        console.log("Checking if channel is live:", channelId)
        const response = await fetch(`/api/youtube-live-status?channelId=${channelId}`)
        const data = await response.json()

        console.log("Live status response:", data)

        if (data.error) {
          // If there's an API error but we still got a response
          console.error("API returned error:", data.error, data.message)
          setError(data.message || "Error checking live status")
          setIsLive(false)
        } else if (data.isLive && data.videoId) {
          setIsLive(true)
          setLiveVideoId(data.videoId)
        } else {
          setIsLive(false)
        }
      } catch (err) {
        console.error("Error checking live status:", err)
        setError("No se pudo verificar el estado de la transmisión")
        setIsLive(false)
      } finally {
        setLoading(false)
      }
    }

    checkIfChannelIsLive()

    // Check live status every 5 minutes
    const intervalId = setInterval(checkIfChannelIsLive, 5 * 60 * 1000)

    return () => clearInterval(intervalId)
  }, [channelId])

  if (loading) {
    return (
      <div className="relative aspect-video w-full bg-gray-100 rounded-lg flex items-center justify-center">
        <Loader2 className="h-8 w-8 text-primary animate-spin" />
        <span className="sr-only">Verificando transmisión en vivo...</span>
      </div>
    )
  }

  if (error) {
    return (
      <div className="relative aspect-video w-full bg-gray-100 rounded-lg flex flex-col items-center justify-center p-6">
        <AlertCircle className="h-8 w-8 text-amber-500 mb-2" />
        <p className="text-gray-700 mb-4 text-center">{error}</p>
        <p className="text-gray-600 mb-4 text-center text-sm">
          Mientras tanto, puedes visitar nuestro canal de YouTube para ver servicios anteriores.
        </p>
        <Link href={`https://www.youtube.com/channel/${channelId}`} target="_blank" rel="noopener noreferrer">
          <Button>Ver Canal en YouTube</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="relative rounded-lg overflow-hidden shadow-xl">
      {isLive ? (
        <>
          <div className="absolute top-4 right-4 z-10 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium animate-pulse">
            EN VIVO
          </div>
          <iframe
            className="w-full aspect-video"
            src={`https://www.youtube.com/embed/${liveVideoId}?autoplay=1&mute=1`}
            title="Transmisión en vivo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </>
      ) : (
        <>
          {fallbackVideoId ? (
            <iframe
              className="w-full aspect-video"
              src={`https://www.youtube.com/embed/${fallbackVideoId}`}
              title="Video reciente"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <div className="aspect-video w-full bg-gray-100 rounded-lg flex flex-col items-center justify-center p-6">
              <p className="text-gray-700 mb-4 text-center">
                No hay transmisión en vivo en este momento. Visita nuestro canal para ver servicios anteriores.
              </p>
              <Link href={`https://www.youtube.com/channel/${channelId}`} target="_blank" rel="noopener noreferrer">
                <Button>Ver Canal en YouTube</Button>
              </Link>
            </div>
          )}
        </>
      )}
    </div>
  )
}
