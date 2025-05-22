import Link from "next/link"
import Image from "next/image"
import { BookOpen, MessageSquareQuote, Users, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <HeroSection />

        <section id="features" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-emerald-100 dark:bg-emerald-800/20 px-3 py-1 text-sm">
                  Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Explore the depths of Islamic wisdom
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform offers a unique space for reflection and understanding, with content that never runs out.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card className="border-2 border-emerald-100 dark:border-emerald-800/20 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center space-y-4 text-center">
                    <div className="rounded-full bg-emerald-100 dark:bg-emerald-800/20 p-3">
                      <BookOpen className="h-6 w-6 text-emerald-600" />
                    </div>
                    <h3 className="text-xl font-bold">Quranic Verses</h3>
                    <p className="text-muted-foreground">
                      Explore verses from the Holy Quran with translations and space for personal reflection.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-2 border-emerald-100 dark:border-emerald-800/20 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center space-y-4 text-center">
                    <div className="rounded-full bg-emerald-100 dark:bg-emerald-800/20 p-3">
                      <MessageSquareQuote className="h-6 w-6 text-emerald-600" />
                    </div>
                    <h3 className="text-xl font-bold">Authentic Hadiths</h3>
                    <p className="text-muted-foreground">
                      Read the sayings and traditions of Prophet Muhammad ﷺ from reliable sources.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-2 border-emerald-100 dark:border-emerald-800/20 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center space-y-4 text-center">
                    <div className="rounded-full bg-emerald-100 dark:bg-emerald-800/20 p-3">
                      <Users className="h-6 w-6 text-emerald-600" />
                    </div>
                    <h3 className="text-xl font-bold">Scholarly Quotes</h3>
                    <p className="text-muted-foreground">
                      Discover wisdom from renowned Islamic scholars and thinkers throughout history.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 lg:py-32 bg-emerald-50 dark:bg-emerald-950/10">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 md:gap-16 lg:grid-cols-2">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-emerald-100 dark:bg-emerald-800/20 px-3 py-1 text-sm">
                  Tadabur
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Take time to reflect and grow
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                  Tadabur is the practice of deep reflection on Islamic texts. Our platform provides the perfect
                  environment to engage with the wisdom of Islam and apply it to your life.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild className="bg-emerald-600 hover:bg-emerald-700 group">
                    <Link href="/quran">
                      Start Reflecting{" "}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder-2oym5.png"
                  width={600}
                  height={400}
                  alt="Person reflecting on Islamic texts"
                  className="rounded-xl object-cover shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex flex-col gap-4 py-10 md:flex-row md:items-center md:justify-between md:py-8">
          <div className="flex flex-col gap-1">
            <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
              <BookOpen className="h-5 w-5 text-emerald-600" />
              <span>Tadabur</span>
            </Link>
            <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Tadabur. All rights reserved.</p>
          </div>
          <nav className="flex gap-4 sm:gap-6">
            <Link href="/quran" className="text-sm font-medium hover:text-emerald-600 transition-colors">
              Quran
            </Link>
            <Link href="/hadith" className="text-sm font-medium hover:text-emerald-600 transition-colors">
              Hadith
            </Link>
            <Link href="/quotes" className="text-sm font-medium hover:text-emerald-600 transition-colors">
              Quotes
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-emerald-600 transition-colors">
              About
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-emerald-600 transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
