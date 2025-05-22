"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { MoonStar, Search, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Navbar() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="flex w-full justify-between md:justify-start md:gap-10">
          <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
            <MoonStar className="h-6 w-6 text-emerald-600" />
            <span>Tadabur</span>
          </Link>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[240px] sm:w-[300px]">
              <nav className="flex flex-col gap-4 mt-8">
                <Link
                  href="/quran"
                  className={`text-base font-medium px-3 py-2 rounded-md transition-colors ${
                    isActive("/quran") ? "bg-emerald-50 text-emerald-600 dark:bg-emerald-950/20" : "hover:bg-muted"
                  }`}
                >
                  Quran
                </Link>
                <Link
                  href="/hadith"
                  className={`text-base font-medium px-3 py-2 rounded-md transition-colors ${
                    isActive("/hadith") ? "bg-emerald-50 text-emerald-600 dark:bg-emerald-950/20" : "hover:bg-muted"
                  }`}
                >
                  Hadith
                </Link>
                <Link
                  href="/quotes"
                  className={`text-base font-medium px-3 py-2 rounded-md transition-colors ${
                    isActive("/quotes") ? "bg-emerald-50 text-emerald-600 dark:bg-emerald-950/20" : "hover:bg-muted"
                  }`}
                >
                  Quotes
                </Link>
              </nav>
            </SheetContent>
          </Sheet>

          <nav className="hidden md:flex md:flex-1 md:items-center md:justify-center">
            <div className="flex space-x-6 rounded-full bg-muted/50 px-6 py-2">
              <Link
                href="/quran"
                className={`text-sm font-medium transition-colors ${
                  isActive("/quran") ? "text-emerald-600" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Quran
              </Link>
              <Link
                href="/hadith"
                className={`text-sm font-medium transition-colors ${
                  isActive("/hadith") ? "text-emerald-600" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Hadith
              </Link>
              <Link
                href="/quotes"
                className={`text-sm font-medium transition-colors ${
                  isActive("/quotes") ? "text-emerald-600" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Quotes
              </Link>
            </div>
          </nav>
        </div>

        <div className="hidden md:flex items-center gap-4 ml-auto">
          <Button variant="outline" size="icon" className="rounded-full">
            <Search className="h-4 w-4" />
            <span className="sr-only">Search</span>
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
