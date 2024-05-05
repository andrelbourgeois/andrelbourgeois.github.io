import Link from "next/link"
import Image from "next/image"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"

export default function PortfolioPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex flex-row items-center space-x-28">
        <div className="flex max-w-[980px] flex-col gap-2 space-y-4">
          <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl text-foreground">
                This portfolio page is currently under <br className="hidden sm:inline" />
                construction.
              </h1>
            <p className="max-w-[700px] text-lg text-foreground">
              
            </p>
            <div className="flex gap-4">
          </div>
        </div>
        <Image className="z-10 p-4"
          src="./andre-1.svg"
          width={280}
          height={280}
          alt="Picture of the author"
          /> 
      </div>
    </section>
    
  )
}

