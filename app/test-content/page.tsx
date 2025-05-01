'use client'

import { useEffect, useState } from 'react'
import { WordPressData, getWordPressContent } from '@/lib/wordpress'
import { PostCard } from '@/components/content/post-card'
import { PageCard } from '@/components/content/page-card'
import { NavigationMenu } from '@/components/content/navigation-menu'
import { ContentGrid } from '@/components/content/content-grid'
import { PostCardSkeleton } from '@/components/content/post-card-skeleton'
import { PageCardSkeleton } from '@/components/content/page-card-skeleton'
import { NavigationMenuSkeleton } from '@/components/content/navigation-menu-skeleton'

export default function TestContentPage() {
  const [data, setData] = useState<WordPressData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const content = await getWordPressContent()
        setData(content)
        setError(null)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error fetching content')
        setData(null)
      } finally {
        setLoading(false)
      }
    }

    fetchContent()
  }, [])

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <h2 className="text-red-800 text-lg font-semibold mb-2">Error Loading Content</h2>
          <p className="text-red-600">{error}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Site Information */}
      <section className="mb-12">
        <h1 className="text-3xl font-bold mb-6">Site Information</h1>
        <div className="bg-white rounded-lg shadow p-6">
          {loading ? (
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-1/3 mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-1/4"></div>
            </div>
          ) : (
            <>
              <h2 className="text-2xl font-semibold mb-2">{data?.generalSettings.title}</h2>
              <p className="text-gray-600 mb-4">{data?.generalSettings.description}</p>
              <p className="text-sm text-gray-500">{data?.generalSettings.url}</p>
            </>
          )}
        </div>
      </section>

      {/* Navigation */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Navigation Menus</h2>
        {loading ? (
          <div className="bg-white rounded-lg shadow p-6 mb-4">
            <div className="h-6 bg-gray-200 rounded w-1/4 mb-4"></div>
            <NavigationMenuSkeleton />
          </div>
        ) : (
          data?.menus.nodes.map((menu) => (
            <div key={menu.name} className="bg-white rounded-lg shadow p-6 mb-4">
              <h3 className="text-xl font-semibold mb-4">{menu.name}</h3>
              <NavigationMenu menu={menu} />
            </div>
          ))
        )}
      </section>

      {/* Pages */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Pages</h2>
        <ContentGrid itemsPerRow={2}>
          {loading ? (
            <>
              <PageCardSkeleton />
              <PageCardSkeleton />
            </>
          ) : (
            data?.pages.nodes.map((page) => (
              <PageCard key={page.id} page={page} />
            ))
          )}
        </ContentGrid>
      </section>

      {/* Posts */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Recent Posts</h2>
        {loading ? (
          <ContentGrid itemsPerRow={2}>
            <PostCardSkeleton />
            <PostCardSkeleton />
          </ContentGrid>
        ) : data?.posts.nodes.length ? (
          <ContentGrid itemsPerRow={2}>
            {data.posts.nodes.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </ContentGrid>
        ) : (
          <div className="bg-gray-50 rounded-lg p-8 text-center">
            <p className="text-gray-600">No posts available yet.</p>
          </div>
        )}
      </section>
    </div>
  )
} 