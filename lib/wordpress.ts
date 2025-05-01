import { graphqlClient } from './graphql'

export interface Post {
  id: string
  title: string
  content: string
  date: string
  status: string
  author?: {
    node: {
      name: string
    }
  }
  categories?: {
    nodes: Array<{
      name: string
    }>
  }
}

export interface Page {
  id: string
  title: string
  content: string
  date: string
  status: string
}

export interface MenuItem {
  label: string
  path: string
}

export interface Menu {
  name: string
  menuItems: {
    nodes: MenuItem[]
  }
}

export interface SiteInfo {
  title: string
  description: string
  url: string
}

const CONTENT_QUERY = `
  query GetContent($first: Int = 10) {
    generalSettings {
      title
      description
      url
    }
    posts(first: $first, where: { status: PUBLISH }) {
      nodes {
        id
        title
        content
        date
        status
        author {
          node {
            name
          }
        }
        categories {
          nodes {
            name
          }
        }
      }
    }
    pages(first: $first, where: { status: PUBLISH }) {
      nodes {
        id
        title
        content
        date
        status
      }
    }
    menus {
      nodes {
        name
        menuItems {
          nodes {
            label
            path
          }
        }
      }
    }
  }
`

export interface WordPressData {
  generalSettings: SiteInfo
  posts: { nodes: Post[] }
  pages: { nodes: Page[] }
  menus: { nodes: Menu[] }
}

// Default fallback content
export const fallbackContent = {
  generalSettings: {
    title: 'Iglesia Damasco',
    description: 'Iglesia de Dios Pentecostal Damasco - Sirviendo a la comunidad con fe y amor',
    url: 'https://iglesiadamasco.com'
  },
  posts: {
    nodes: []
  },
  pages: {
    nodes: [{
      id: 'home',
      title: 'Inicio',
      content: '<h1>Bienvenidos a Iglesia Damasco</h1>',
      date: new Date().toISOString(),
      status: 'publish'
    }]
  },
  menus: {
    nodes: [{
      name: 'Main Menu',
      menuItems: {
        nodes: [
          { label: 'Inicio', path: '/' },
          { label: 'Sobre Nosotros', path: '/sobre-nosotros' },
          { label: 'Servicios', path: '/servicios' },
          { label: 'Contacto', path: '/contacto' }
        ]
      }
    }]
  }
}

export async function getWordPressContent(postCount = 10): Promise<WordPressData> {
  try {
    const data = await graphqlClient.request<WordPressData>(CONTENT_QUERY, { first: postCount })
    
    // Merge with fallback data for missing content
    return {
      generalSettings: {
        ...fallbackContent.generalSettings,
        ...data.generalSettings,
        description: data.generalSettings.description || fallbackContent.generalSettings.description
      },
      posts: data.posts,
      pages: data.pages.nodes.length ? data.pages : fallbackContent.pages,
      menus: data.menus.nodes.length ? data.menus : fallbackContent.menus
    }
  } catch (error) {
    console.error('Error fetching WordPress content:', error)
    return fallbackContent
  }
}

export function formatDate(dateString: string): string {
  try {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat('es', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date)
  } catch {
    return ''
  }
}

export function sanitizeHtml(html: string): string {
  // Basic HTML sanitization
  return html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '') // Remove scripts
    .replace(/on\w+="[^"]*"/g, '') // Remove inline event handlers
    .replace(/javascript:/gi, '') // Remove javascript: protocols
}

export function getPageBySlug(pages: Page[], slug: string): Page | undefined {
  return pages.find(page => 
    page.title.toLowerCase().replace(/\s+/g, '-') === slug.toLowerCase()
  )
}

export function getCategoryPosts(posts: Post[], category: string): Post[] {
  return posts.filter(post =>
    post.categories?.nodes.some(cat => 
      cat.name.toLowerCase() === category.toLowerCase()
    )
  )
} 