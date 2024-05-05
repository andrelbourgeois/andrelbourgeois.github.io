import Link from "next/link"
import Image from "next/image"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"

export default function IndexPage() {
  return (
    <section className="container grid items-center pb-8 pt-6 md:py-10">
      <h1 className="text-5xl font-extrabold md:text-8xl tracking-widest text-foreground absolute top-20 z-0">
              I&apos;m André Bourgeois
              </h1>
      <div className="flex flex-row items-center justify-between">
        <div className="flex max-w-[900px] flex-col gap-2 space-y-4">
            <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl text-foreground">
              Software Developer. <br className="hidden sm:inline" />
              Technology Consultant. <br className="hidden sm:inline" />
              Future Places Professional.
            </h1>
            <p className="max-w-[700px] text-lg text-foreground">
              I&apos;ve built my career on the simple belief that organisations can understand
              their own built assets and business processes like Big Tech understands its products
              and services.
            </p>
            <div className="flex gap-4">
          <Link
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            className={buttonVariants()}
          >
            Portfolio
          </Link>
          <Link
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.github}
            className={buttonVariants()}
            //className={buttonVariants({ variant: "outline" })}
          >
            GitHub
          </Link>
          </div>
        </div>
        <Image className="z-10 pt-3 pr-2"
          src="./andre-2.svg"
          width={335}
          height={335}
          alt="Picture of the author"
          /> 
      </div>
    </section>
    
  )
}

