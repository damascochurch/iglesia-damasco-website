export function PostCardSkeleton({ className = '' }: { className?: string }) {
  return (
    <article className={`bg-white rounded-lg shadow p-6 ${className}`}>
      <div className="animate-pulse">
        {/* Title */}
        <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
        
        {/* Author */}
        <div className="h-4 bg-gray-200 rounded w-1/3 mb-4"></div>
        
        {/* Categories */}
        <div className="flex gap-2 mb-4">
          <div className="h-6 bg-gray-200 rounded-full w-20"></div>
          <div className="h-6 bg-gray-200 rounded-full w-16"></div>
        </div>
        
        {/* Content */}
        <div className="space-y-2 mb-4">
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          <div className="h-4 bg-gray-200 rounded w-4/6"></div>
        </div>
        
        {/* Date */}
        <div className="h-4 bg-gray-200 rounded w-1/4"></div>
      </div>
    </article>
  )
} 