// API functions to fetch Islamic content

// Quran API
export async function fetchQuranVerses(page = 1, limit = 9) {
  try {
    // Fetch Arabic Quran
    const arabicResponse = await fetch(`https://api.alquran.cloud/v1/quran/quran-uthmani`)

    // Fetch English translation
    const englishResponse = await fetch(`https://api.alquran.cloud/v1/quran/en.asad`)

    if (!arabicResponse.ok || !englishResponse.ok) {
      throw new Error("Failed to fetch Quran verses")
    }

    const arabicData = await arabicResponse.json()
    const englishData = await englishResponse.json()

    // Process the data to get the required format
    const arabicSurahs = arabicData.data.surahs
    const englishSurahs = englishData.data.surahs

    const verses = []
    let totalVerses = 0

    // Calculate total verses for pagination
    arabicSurahs.forEach((surah) => {
      totalVerses += surah.ayahs.length
    })

    // Extract verses from surahs with pagination
    const startIndex = (page - 1) * limit
    let currentIndex = 0

    for (let i = 0; i < arabicSurahs.length; i++) {
      const arabicSurah = arabicSurahs[i]
      const englishSurah = englishSurahs[i]

      for (let j = 0; j < arabicSurah.ayahs.length; j++) {
        if (currentIndex >= startIndex && verses.length < limit) {
          verses.push({
            id: currentIndex + 1,
            surah: arabicSurah.name,
            englishSurahName: englishSurah.englishName,
            surahNumber: arabicSurah.number,
            ayahNumber: arabicSurah.ayahs[j].numberInSurah,
            arabicText: arabicSurah.ayahs[j].text,
            translation: englishSurah.ayahs[j].text,
          })
        }

        currentIndex++
        if (verses.length >= limit) break
      }

      if (verses.length >= limit) break
    }

    return {
      verses,
      totalPages: Math.ceil(totalVerses / limit),
      currentPage: page,
      totalVerses,
    }
  } catch (error) {
    console.error("Error fetching Quran verses:", error)
    return { verses: [], totalPages: 1, currentPage: 1, totalVerses: 0 }
  }
}

// Hadith API
export async function fetchHadiths(page = 1, limit = 6) {
  try {
    // For demonstration, we'll use a sample API
    // In a real app, you would use a more comprehensive API
    const collections = ["bukhari", "muslim", "abudawud", "tirmidhi", "nasai", "ibnmajah"]
    const collection = collections[Math.floor(Math.random() * collections.length)]

    const response = await fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions/ara-${collection}/hadiths/${page}.json`,
    )

    const engResponse = await fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions/eng-${collection}/hadiths/${page}.json`,
    )

    if (!response.ok || !engResponse.ok) {
      throw new Error("Failed to fetch hadiths")
    }

    const arabicData = await response.json()
    const englishData = await engResponse.json()

    // Process the data
    const hadiths = []
    const startIndex = 0
    const endIndex = Math.min(limit, arabicData.hadiths.length)

    for (let i = startIndex; i < endIndex; i++) {
      const arabicHadith = arabicData.hadiths[i]
      const englishHadith = englishData.hadiths[i]

      hadiths.push({
        id: i + 1,
        collection: collection.charAt(0).toUpperCase() + collection.slice(1),
        bookNumber: page,
        hadithNumber: i + 1,
        narrator: "Various",
        arabicText: arabicHadith.text,
        text: englishHadith.text,
        grade: englishHadith.grade || "Unknown",
      })
    }

    return {
      hadiths,
      totalPages: 100, // Most collections have many pages
      currentPage: page,
    }
  } catch (error) {
    console.error("Error fetching hadiths:", error)
    return { hadiths: [], totalPages: 1, currentPage: 1 }
  }
}

// Quotes API (using enhanced static data with more entries)
export async function fetchQuotes(page = 1, limit = 9) {
  try {
    // Import the quotes data
    const { scholarQuotes } = await import("@/data/quotes-data")

    // Calculate pagination
    const startIndex = (page - 1) * limit
    const endIndex = Math.min(startIndex + limit, scholarQuotes.length)
    const paginatedQuotes = scholarQuotes.slice(startIndex, endIndex)

    return {
      quotes: paginatedQuotes,
      totalPages: Math.ceil(scholarQuotes.length / limit),
      currentPage: page,
      totalQuotes: scholarQuotes.length,
    }
  } catch (error) {
    console.error("Error fetching quotes:", error)
    return { quotes: [], totalPages: 1, currentPage: 1, totalQuotes: 0 }
  }
}

// Fallback functions
export async function fetchQuranVersesWithFallback(page = 1, limit = 9) {
  try {
    const apiResult = await fetchQuranVerses(page, limit)
    if (apiResult.verses.length > 0) {
      return apiResult
    }

    // If API fails, use fallback data
    const { quranVerses } = await import("@/data/quran-data")
    return {
      verses: quranVerses.slice((page - 1) * limit, page * limit),
      totalPages: Math.ceil(quranVerses.length / limit),
      currentPage: page,
      totalVerses: quranVerses.length,
    }
  } catch (error) {
    console.error("Error with API, using fallback data:", error)
    const { quranVerses } = await import("@/data/quran-data")
    return {
      verses: quranVerses.slice((page - 1) * limit, page * limit),
      totalPages: Math.ceil(quranVerses.length / limit),
      currentPage: page,
      totalVerses: quranVerses.length,
    }
  }
}

export async function fetchHadithsWithFallback(page = 1, limit = 6) {
  try {
    const apiResult = await fetchHadiths(page, limit)
    if (apiResult.hadiths.length > 0) {
      return apiResult
    }

    // If API fails, use fallback data
    const { hadiths } = await import("@/data/hadith-data")
    return {
      hadiths: hadiths.slice((page - 1) * limit, page * limit),
      totalPages: Math.ceil(hadiths.length / limit),
      currentPage: page,
    }
  } catch (error) {
    console.error("Error with API, using fallback data:", error)
    const { hadiths } = await import("@/data/hadith-data")
    return {
      hadiths: hadiths.slice((page - 1) * limit, page * limit),
      totalPages: Math.ceil(hadiths.length / limit),
      currentPage: page,
    }
  }
}
