export function NavigationMenuSkeleton({ className = '' }: { className?: string }) {
  return (
    <nav className={className}>
      <div className="animate-pulse">
        <ul className="space-y-2">
          {[1, 2, 3, 4].map((i) => (
            <li key={i}>
              <div className="h-4 bg-gray-200 rounded w-24"></div>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
} 