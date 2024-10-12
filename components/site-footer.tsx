import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"


export function SiteFooter() {
  return (
    <div className="bg-background flex sticky top-0 z-40 w-full">
      <div className="container flex h-16 items-center justify-between border-t-2 border-color: #000000 space-x-4">
        <div className="flex items-center w-1/3 justify-start">
          {/*just here to fill space so the other 2 divs can be aligned correctly.*/}
        </div>
        <div className="flex items-center w-1/3 justify-center">
            <p>© André Bourgeois 2024</p>
        </div>
        <div className="flex items-center w-1/3 justify-end">
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
    </div>
  )
}
