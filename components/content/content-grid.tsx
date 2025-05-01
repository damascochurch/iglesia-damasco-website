import { ReactNode } from 'react'

interface ContentGridProps {
  children: ReactNode
  className?: string
  itemsPerRow?: 1 | 2 | 3 | 4
}

export function ContentGrid({ 
  children, 
  className = '', 
  itemsPerRow = 2 
}: ContentGridProps) {
  const gridClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
  }

  return (
    <div className={`grid gap-6 ${gridClasses[itemsPerRow]} ${className}`}>
      {children}
    </div>
  )
} 