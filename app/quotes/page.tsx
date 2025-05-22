import Link from "next/link"
import { Search, RefreshCw, Filter, ArrowLeft, ArrowRight, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import QuoteCard from "@/components/quote-card"
import Navbar from "@/components/navbar"
import { scholarQuotes } from "@/data/quotes-data"

export default function QuotesPage() {
  // Display only the first 9 quotes on the first page
  const displayedQuotes = scholarQuotes.slice(0, 9)

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 container py-8 md:py-12">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold tracking-tight">Scholarly Quotes</h1>
            <p className="text-muted-foreground">
              Discover wisdom from renowned Islamic scholars and thinkers throughout history.
            </p>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="hidden md:flex">
                <Filter className="mr-2 h-4 w-4" />
                Filter by Scholar
              </Button>
              <Button variant="outline" size="sm" className="hidden md:flex">
                <RefreshCw className="mr-2 h-4 w-4" />
                Random Quote
              </Button>
            </div>
            <div className="flex items-center gap-2">
              <Input placeholder="Search quotes..." className="w-full md:w-[300px]" />
              <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700">
                <Search className="h-4 w-4" />
                <span className="sr-only md:not-sr-only md:ml-2">Search</span>
              </Button>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {displayedQuotes.map((quote) => (
              <QuoteCard key={quote.id} quote={quote} />
            ))}
          </div>

          <div className="flex items-center justify-center gap-2 py-4">
            <Button variant="outline" size="icon" disabled>
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">Previous</span>
            </Button>
            <Button variant="default" size="sm" className="bg-emerald-600 hover:bg-emerald-700">
              1
            </Button>
            <Button variant="outline" size="sm" asChild>
              <Link href="/quotes?page=2">2</Link>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <Link href="/quotes?page=3">3</Link>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <Link href="/quotes?page=2">
                <ArrowRight className="h-4 w-4" />
                <span className="sr-only">Next</span>
              </Link>
            </Button>
          </div>
        </div>
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
