"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Bookmark, Share2, MessageSquare } from "lucide-react"

interface Quote {
  id: number
  scholar: string
  era: string
  text: string
  source?: string
  category?: string
}

export default function QuoteCard({ quote }: { quote: Quote }) {
  const [showReflection, setShowReflection] = useState(false)
  const [reflection, setReflection] = useState("")

  // Get initials for avatar
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .toUpperCase()
      .substring(0, 2)
  }

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <CardHeader className="bg-emerald-50 dark:bg-emerald-950/20 pb-2">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-3">
            <Avatar className="h-8 w-8 bg-emerald-100 text-emerald-700">
              <AvatarFallback>{getInitials(quote.scholar)}</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-lg font-medium">{quote.scholar}</CardTitle>
              <p className="text-xs text-muted-foreground">{quote.era}</p>
            </div>
          </div>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Bookmark className="h-4 w-4" />
            <span className="sr-only">Bookmark</span>
          </Button>
        </div>
      </CardHeader>
      <CardContent className="pt-4">
        <p className="text-sm italic mb-3">"{quote.text}"</p>

        {quote.source && <p className="text-xs text-muted-foreground">Source: {quote.source}</p>}

        {showReflection && (
          <div className="mt-4 space-y-2">
            <p className="text-sm font-medium">Your Reflection:</p>
            <Textarea
              placeholder="Write your thoughts and reflections on this quote..."
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
