"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Bookmark, Share2, MessageSquare, Volume2 } from "lucide-react"

interface QuranVerse {
  id: number
  surah: string
  englishSurahName?: string
  surahNumber: number
  ayahNumber: number
  arabicText: string
  translation: string
  transliteration?: string
}

export default function QuranCard({ verse }: { verse: QuranVerse }) {
  const [showReflection, setShowReflection] = useState(false)
  const [reflection, setReflection] = useState("")

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <CardHeader className="bg-emerald-50 dark:bg-emerald-950/20 pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg font-medium">
            Surah {verse.englishSurahName || verse.surah} ({verse.surahNumber}:{verse.ayahNumber})
          </CardTitle>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Bookmark className="h-4 w-4" />
            <span className="sr-only">Bookmark</span>
          </Button>
        </div>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="mb-4 p-3 bg-emerald-50/50 dark:bg-emerald-950/10 rounded-md">
          <p className="text-xl font-arabic text-right leading-loose mb-2 font-medium">{verse.arabicText}</p>
          {verse.transliteration && (
            <p className="text-sm text-muted-foreground italic mb-2">{verse.transliteration}</p>
          )}
        </div>

        <div className="p-3">
          <p className="text-sm">{verse.translation}</p>
        </div>

        {showReflection && (
          <div className="mt-4 space-y-2">
            <p className="text-sm font-medium">Your Reflection:</p>
            <Textarea
              placeholder="Write your thoughts and reflections on this verse..."
              className="min-h-[100px]"
              value={reflection}
              onChange={(e) => setReflection(e.target.value)}
            />
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-between pt-0">
        <Button variant="ghost" size="sm" className="text-xs" onClick={() => setShowReflection(!showReflection)}>
          <MessageSquare className="h-4 w-4 mr-1" />
          {showReflection ? "Hide Reflection" : "Add Reflection"}
        </Button>
        <div className="flex gap-1">
          <Button variant="ghost" size="sm" className="text-xs">
            <Volume2 className="h-4 w-4 mr-1" />
            Listen
          </Button>
          <Button variant="ghost" size="sm" className="text-xs">
            <Share2 className="h-4 w-4 mr-1" />
            Share
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}
