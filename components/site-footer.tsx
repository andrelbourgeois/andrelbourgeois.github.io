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
          <div className="flex items-center space-x-5">
          <Icons.react className="h-6 w-6" />
          <Icons.next className="h-5 w-5" />
          <Icons.tailwind className="h-5 w-6" />
          <Icons.shadcn className="h-5 w-5" />
          </div>
        </div>
      </div>
    </header>
  )
}
