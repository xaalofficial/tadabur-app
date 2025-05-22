"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen } from "lucide-react"
import { motion } from "framer-motion"

const inspirationalQuotes = [
  "Seek knowledge from the cradle to the grave.",
  "The best of people are those who are most beneficial to others.",
  "Verily, with hardship comes ease.",
  "Take account of yourself before you are taken to account.",
  "The cure for ignorance is to question.",
  "Whoever follows a path to seek knowledge, Allah will make the path to Paradise easy for them.",
]

export default function HeroSection() {
  const [quote, setQuote] = useState(inspirationalQuotes[0])
  const [quoteIndex, setQuoteIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % inspirationalQuotes.length
        setQuote(inspirationalQuotes[newIndex])
        return newIndex
      })
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative overflow-hidden py-20 md:py-28 lg:py-32 bg-gradient-to-b from-white to-emerald-50 dark:from-background dark:to-emerald-950/20">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <motion.div
            className="flex flex-col justify-center space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Reflect on the wisdom of Islam
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Explore Quranic verses, authentic Hadiths, and timeless quotes from Islamic scholars. Take time for
                tadabur and deepen your understanding.
              </p>
            </div>

            <motion.div
              className="h-24 flex items-center"
              key={quoteIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-lg md:text-xl italic text-emerald-700 dark:text-emerald-400">"{quote}"</p>
            </motion.div>

            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700 group">
                <Link href="/quran">
                  Begin Your Journey
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#features">Learn More</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="relative mx-auto max-w-[500px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-emerald-700/20 z-10"></div>
              <Image
                src="/placeholder-46n6c.png"
                width={600}
                height={600}
                alt="Islamic calligraphy art"
                className="w-full aspect-square object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 z-20">
                <p className="text-white font-arabic text-xl md:text-2xl text-center">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</p>
                <p className="text-white/80 text-sm text-center mt-1">
                  In the name of Allah, the Entirely Merciful, the Especially Merciful
                </p>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-white dark:bg-background rounded-lg shadow-lg p-4 z-30">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-emerald-100 dark:bg-emerald-800/20 p-2">
                  <BookOpen className="h-5 w-5 text-emerald-600" />
                </div>
                <span className="text-sm font-medium">Explore 6,236 verses</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
