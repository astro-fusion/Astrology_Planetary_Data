// This file contains functions for geocoding (getting lat/long from location names)

// Alternative free geocoding APIs if you don't want to use Geoapify
export const geocodingApis = {
  // OpenStreetMap Nominatim API (free, with usage limits)
  nominatim: {
    search: (query: string, countryCode: string) =>
      `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(query)}&countrycodes=${countryCode}&format=json`,
    parseResults: (data: any[]) =>
      data.map((item) => ({
        name: item.name,
        country: item.country,
        lat: Number.parseFloat(item.lat),
        lon: Number.parseFloat(item.lon),
        formatted: item.display_name,
      })),
  },

  // MapBox Geocoding API (free tier available)
  mapbox: {
    search: (query: string, countryCode: string, apiKey: string) =>
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(query)}.json?country=${countryCode}&access_token=${apiKey}`,
    parseResults: (data: any) =>
      data.features.map((feature: any) => ({
        name: feature.text,
        country: feature.context.find((ctx: any) => ctx.id.startsWith("country"))?.text || "",
        lat: feature.center[1],
        lon: feature.center[0],
        formatted: feature.place_name,
      })),
  },

  // Geoapify API (free tier available)
  geoapify: {
    search: (query: string, countryCode: string, apiKey: string) =>
      `https://api.geoapify.com/v1/geocode/autocomplete?text=${encodeURIComponent(query)}&filter=countrycode:${countryCode}&format=json&apiKey=${apiKey}`,
    parseResults: (data: any) =>
      data.results.map((result: any) => ({
        name: result.city || result.name,
        country: result.country,
        lat: result.lat,
        lon: result.lon,
        formatted: result.formatted,
      })),
  },
}

// Function to get city suggestions from Nominatim API (no API key required)
export async function getCitySuggestions(query: string, countryCode: string) {
  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(query)}&countrycodes=${countryCode}&format=json&addressdetails=1&limit=5`,
      {
        headers: {
          "Accept-Language": "en", // Get results in English
          "User-Agent": "AstralInsight/1.0", // Required by Nominatim ToS
        },
      },
    )

    if (!response.ok) throw new Error("Failed to fetch city suggestions")

    const data = await response.json()

    return data.map((item: any) => ({
      name: item.address.city || item.address.town || item.address.village || item.name,
      country: item.address.country,
      lat: Number.parseFloat(item.lat),
      lon: Number.parseFloat(item.lon),
      formatted: item.display_name,
    }))
  } catch (error) {
    console.error("Error fetching city suggestions:", error)
    return []
  }
}

