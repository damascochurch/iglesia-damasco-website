import { type NextRequest, NextResponse } from "next/server"

// Cache the live status for 2 minutes to avoid excessive API calls
let cachedResult = {
  isLive: false,
  videoId: null,
  timestamp: 0,
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const channelId = searchParams.get("channelId")

  if (!channelId) {
    return NextResponse.json({ error: "Missing channelId parameter" }, { status: 400 })
  }

  // Check if we have a recent cached result (less than 2 minutes old)
  const now = Date.now()
  if (now - cachedResult.timestamp < 2 * 60 * 1000) {
    console.log("Returning cached live status result")
    return NextResponse.json({
      isLive: cachedResult.isLive,
      videoId: cachedResult.videoId,
      cached: true,
    })
  }

  try {
    // Get the API key from environment variables
    const apiKey = process.env.YOUTUBE_API_KEY

    if (!apiKey) {
      console.error("YouTube API key is not configured")
      return NextResponse.json(
        {
          error: "YouTube API configuration issue",
          isLive: false,
          message: "The server is not properly configured to check live status",
        },
        { status: 500 },
      )
    }

    // Search for live broadcasts from the channel
    const searchUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&eventType=live&type=video&key=${apiKey}`

    console.log("Fetching from YouTube API...")
    const searchResponse = await fetch(searchUrl)

    if (!searchResponse.ok) {
      const errorText = await searchResponse.text()
      console.error(`YouTube API error: ${searchResponse.status} ${searchResponse.statusText}`, errorText)
      throw new Error(`YouTube API error: ${searchResponse.statusText}`)
    }

    const searchData = await searchResponse.json()
    console.log("YouTube API response received, items:", searchData.items?.length || 0)

    // Check if there are any live streams
    const isLive = searchData.items && searchData.items.length > 0
    const videoId = isLive ? searchData.items[0].id.videoId : null

    // Update the cache
    cachedResult = {
      isLive,
      videoId,
      timestamp: now,
    }

    return NextResponse.json({ isLive, videoId })
  } catch (error) {
    console.error("Error checking live status:", error)
    return NextResponse.json(
      {
        error: "Failed to check live status",
        isLive: false,
        message: error.message,
      },
      { status: 500 },
    )
  }
}
