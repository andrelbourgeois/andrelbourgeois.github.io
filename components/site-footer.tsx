import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteFooter() {
  return (
    <header className="bg-background sticky top-0 z-40 w-full border-t">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
      <ThemeToggle />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
          </nav>
        </div>
      </div>
    </header>
  )
}
