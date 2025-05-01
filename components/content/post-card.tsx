import { Post } from '@/lib/wordpress'
import { formatDate, sanitizeHtml } from '@/lib/wordpress'

interface PostCardProps {
  post: Post
  className?: string
}

export function PostCard({ post, className = '' }: PostCardProps) {
  return (
    <article className={`bg-white rounded-lg shadow p-6 ${className}`}>
      <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
      
      {post.author && (
        <p className="text-sm text-gray-600 mb-2">
          Por {post.author.node.name}
        </p>
      )}
      
      {post.categories && post.categories.nodes.length > 0 && (
        <div className="mb-4">
          {post.categories.nodes.map((cat) => (
            <span
              key={cat.name}
              className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
            >
              {cat.name}
            </span>
          ))}
        </div>
      )}
      
      <div
        className="prose prose-sm mb-4"
        dangerouslySetInnerHTML={{ __html: sanitizeHtml(post.content) }}
      />
      
      <p className="text-sm text-gray-500">
        Publicado: {formatDate(post.date)}
      </p>
    </article>
  )
} 