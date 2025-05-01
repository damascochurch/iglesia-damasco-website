"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Instagram } from "lucide-react"

// This is a placeholder component that would ideally use Instagram's API
// For a production site, you would need to implement the actual Instagram API integration
export function InstagramFeed() {
  const [loading, setLoading] = useState(true)

  // Simulating loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  // Placeholder posts - in a real implementation, these would come from the Instagram API
  const placeholderPosts = [
    {
      id: "1",
      imageUrl: "/church-worship.png",
      caption: "Únete a nuestro servicio dominical este fin de semana. ¡Te esperamos!",
      likes: 45,
      date: "2 días",
    },
    {
      id: "2",
      imageUrl: "/youth-group-volunteering.png",
      caption: "Nuestro grupo de jóvenes tuvo un tiempo increíble en el retiro del fin de semana.",
      likes: 32,
      date: "5 días",
    },
    {
      id: "3",
      imageUrl: "/church-community-service.png",
      caption: "Sirviendo a nuestra comunidad con amor y compasión.",
      likes: 67,
      date: "1 semana",
    },
    {
      id: "4",
      imageUrl: "/church-music-worship.png",
      caption: "Noche de adoración este viernes a las 7 PM. ¡No te lo pierdas!",
      likes: 28,
      date: "1 semana",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold mb-2">Síguenos en Instagram</h2>
            <p className="text-gray-600">@iglesia.damasco</p>
          </div>
          <Link
            href="https://www.instagram.com/iglesia.damasco/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 md:mt-0 inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-medium hover:from-purple-600 hover:to-pink-600 transition-colors"
          >
            <Instagram className="w-5 h-5" />
            Seguir
          </Link>
        </div>

        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-square bg-gray-200 animate-pulse rounded-lg"></div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {placeholderPosts.map((post) => (
              <Link
                key={post.id}
                href="https://www.instagram.com/iglesia.damasco/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-lg"
              >
                <Image
                  src={post.imageUrl || "/placeholder.svg"}
                  alt={post.caption}
                  width={300}
                  height={300}
                  className="w-full h-full object-cover aspect-square transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                  <p className="text-white text-sm line-clamp-2">{post.caption}</p>
                  <div className="flex items-center mt-2 text-white/90 text-xs">
                    <span>{post.likes} likes</span>
                    <span className="mx-2">•</span>
                    <span>{post.date}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
