import { Page } from '@/lib/wordpress'
import { formatDate, sanitizeHtml } from '@/lib/wordpress'

interface PageCardProps {
  page: Page
  className?: string
}

export function PageCard({ page, className = '' }: PageCardProps) {
  return (
    <article className={`bg-white rounded-lg shadow p-6 ${className}`}>
      <h3 className="text-xl font-semibold mb-2">{page.title}</h3>
      
      <div
        className="prose prose-sm mb-4"
        dangerouslySetInnerHTML={{ __html: sanitizeHtml(page.content) }}
      />
      
      <p className="text-sm text-gray-500">
        Última actualización: {formatDate(page.date)}
      </p>
    </article>
  )
} 