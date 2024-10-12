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
                I&apos;m in the process of migrating my projects, <br className="hidden sm:inline" />
                articles, and other content to my website. <br className="hidden sm:inline" />
                In the meantime, please visit my <a className="text-accent-foreground" href="https://github.com/andrelbourgeois">github</a>.
              </h1>
            <p className="max-w-[700px] text-lg text-foreground">
              
            </p>
            <div className="flex gap-4">
          </div>
        </div>
        <Image className="p-4"
          src="./andre-3.svg"
          width={280}
          height={280}
          alt="Picture of the author"
          /> 
      </div>
    </section>
    
  )
}

