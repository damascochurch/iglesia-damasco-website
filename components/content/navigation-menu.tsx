import { Menu } from '@/lib/wordpress'
import Link from 'next/link'

interface NavigationMenuProps {
  menu: Menu
  className?: string
}

export function NavigationMenu({ menu, className = '' }: NavigationMenuProps) {
  return (
    <nav className={className}>
      <ul className="space-y-2">
        {menu.menuItems.nodes.map((item) => (
          <li key={item.path}>
            <Link
              href={item.path}
              className="text-primary hover:underline"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
} 