"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Bookmark, Share2, MessageSquare } from "lucide-react"

interface Hadith {
  id: number
  collection: string
  bookNumber: number
  hadithNumber: number
  narrator: string
  arabicText?: string
  text: string
  grade?: string
}

export default function HadithCard({ hadith }: { hadith: Hadith }) {
  const [showReflection, setShowReflection] = useState(false)
  const [reflection, setReflection] = useState("")

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <CardHeader className="bg-emerald-50 dark:bg-emerald-950/20 pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg font-medium">
              {hadith.collection} ({hadith.bookNumber}:{hadith.hadithNumber})
            </CardTitle>
            <p className="text-sm text-muted-foreground mt-1">Narrated by: {hadith.narrator}</p>
          </div>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Bookmark className="h-4 w-4" />
            <span className="sr-only">Bookmark</span>
          </Button>
        </div>
      </CardHeader>
      <CardContent className="pt-4">
        {hadith.arabicText && (
          <div className="mb-4 p-3 bg-emerald-50/50 dark:bg-emerald-950/10 rounded-md">
            <p className="text-lg font-arabic text-right leading-loose font-medium">{hadith.arabicText}</p>
          </div>
        )}

        <div className="p-3">
          <p className="text-sm mb-3">{hadith.text}</p>
        </div>

        {hadith.grade && (
          <Badge
            variant="outline"
            className="bg-emerald-50 dark:bg-emerald-950/20 text-emerald-700 dark:text-emerald-300"
          >
            {hadith.grade}
          </Badge>
        )}

        {showReflection && (
          <div className="mt-4 space-y-2">
            <p className="text-sm font-medium">Your Reflection:</p>
            <Textarea
              placeholder="Write your thoughts and reflections on this hadith..."
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
        <Button variant="ghost" size="sm" className="text-xs">
          <Share2 className="h-4 w-4 mr-1" />
          Share
        </Button>
      </CardFooter>
    </Card>
  )
}
