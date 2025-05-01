import { GraphQLClient } from 'graphql-request'

const endpoint = process.env.NEXT_PUBLIC_WORDPRESS_API_URL || 'https://iglesiadamasco.com/graphql'

export const graphqlClient = new GraphQLClient(endpoint, {
  headers: {
    'Content-Type': 'application/json',
  },
})

// Example query for testing
export const TEST_QUERY = `
  query TestQuery {
    posts(first: 1) {
      nodes {
        id
        title
        content
      }
    }
  }
` 