import { GraphQLClient } from 'graphql-request'

const endpoint = 'https://iglesiadamasco.com/graphql'

const client = new GraphQLClient(endpoint, {
  headers: {
    'Content-Type': 'application/json',
  },
})

const CONTENT_QUERY = `
  query ContentTest {
    generalSettings {
      title
      description
      url
    }
    posts(first: 5) {
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
    pages(first: 5) {
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

interface ContentResponse {
  generalSettings: {
    title: string
    description: string
    url: string
  }
  posts: {
    nodes: Array<{
      id: string
      title: string
      content: string
      date: string
      status: string
      author: {
        node: {
          name: string
        }
      }
      categories: {
        nodes: Array<{
          name: string
        }>
      }
    }>
  }
  pages: {
    nodes: Array<{
      id: string
      title: string
      content: string
      date: string
      status: string
    }>
  }
  menus: {
    nodes: Array<{
      name: string
      menuItems: {
        nodes: Array<{
          label: string
          path: string
        }>
      }
    }>
  }
}

async function testConnection() {
  try {
    console.log('Testing WordPress GraphQL connection...')
    const response = await client.request<ContentResponse>(CONTENT_QUERY)
    console.log('✅ Connection successful!')
    
    // Log site information
    console.log('\n🌐 Site Information:')
    console.log(`Title: ${response.generalSettings.title}`)
    console.log(`Description: ${response.generalSettings.description}`)
    console.log(`URL: ${response.generalSettings.url}`)

    // Log content status
    console.log('\n📝 Content Status:')
    console.log(`Posts found: ${response.posts.nodes.length}`)
    response.posts.nodes.forEach(post => {
      console.log(`\n- Post: ${post.title}`)
      console.log(`  Author: ${post.author.node.name}`)
      console.log(`  Categories: ${post.categories.nodes.map(cat => cat.name).join(', ')}`)
      console.log(`  Status: ${post.status}`)
      console.log(`  Date: ${new Date(post.date).toLocaleDateString()}`)
    })

    console.log(`\nPages found: ${response.pages.nodes.length}`)
    response.pages.nodes.forEach(page => {
      console.log(`\n- Page: ${page.title}`)
      console.log(`  Status: ${page.status}`)
      console.log(`  Date: ${new Date(page.date).toLocaleDateString()}`)
    })

    // Log menu structure
    console.log('\n📑 Menu Structure:')
    response.menus.nodes.forEach(menu => {
      console.log(`\n${menu.name}:`)
      menu.menuItems.nodes.forEach(item => {
        console.log(`  - ${item.label} (${item.path})`)
      })
    })

  } catch (error) {
    console.error('❌ Connection failed!')
    if (error instanceof Error) {
      console.error('Error:', error.message)
    } else {
      console.error('Error:', error)
    }
  }
}

testConnection() 