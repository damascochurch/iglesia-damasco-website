'use client'

import { useEffect, useState } from 'react'
import { graphqlClient, TEST_QUERY } from '@/lib/graphql'

export default function TestGraphQLPage() {
  const [data, setData] = useState<any>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const testConnection = async () => {
      try {
        const response = await graphqlClient.request(TEST_QUERY)
        setData(response)
        setError(null)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error occurred')
        setData(null)
      } finally {
        setLoading(false)
      }
    }

    testConnection()
  }, [])

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">WordPress GraphQL Connection Test</h1>
      
      {loading && (
        <div className="text-gray-600">Testing connection...</div>
      )}

      {error && (
        <div className="text-red-600">
          <h2 className="text-xl font-semibold mb-2">Error:</h2>
          <pre className="bg-red-50 p-4 rounded">{error}</pre>
        </div>
      )}

      {data && (
        <div className="text-green-600">
          <h2 className="text-xl font-semibold mb-2">Success!</h2>
          <pre className="bg-green-50 p-4 rounded overflow-auto">
            {JSON.stringify(data, null, 2)}
          </pre>
        </div>
      )}
    </div>
  )
} 