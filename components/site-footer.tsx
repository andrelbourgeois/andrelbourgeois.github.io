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
        <div className="flex flex-1 items-center justify-end">
          <div className="flex items-center">
            <Link
              href={siteConfig.links.react}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                <Icons.react className="h-6 w-6" />
                <span className="sr-only">React</span>
              </div>
            </Link>
            <Link
              href={siteConfig.links.next}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                <Icons.next className="h-5 w-5" />
                <span className="sr-only">Next</span>
              </div>
            </Link>
            <Link
              href={siteConfig.links.tailwind}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                <Icons.tailwind className="h-5 w-6" />
                <span className="sr-only">Tailwind</span>
              </div>
            </Link>
            <Link
              href={siteConfig.links.shadcn}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                <Icons.shadcn className="h-5 w-5" />
                <span className="sr-only">Shadcn</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
