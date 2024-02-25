import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import Image from "next/image"

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex flex-row items-center space-x-16 ">
        <div className="flex max-w-[980px] flex-col items-start gap-2 space-y-4">
            <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
              Software Developer. <br className="hidden sm:inline" />
              Technology Consultant. <br className="hidden sm:inline" />
              Future Places Professional.
            </h1>
            <p className="max-w-[700px] text-lg text-muted-foreground">
              I've built my career on the simple belief that organisations can understand
              their own built assets and business processes like Big Tech understands the products
              and services they sell to users.
            </p>
            <div className="flex gap-4">
          <Link
            href={siteConfig.links.docs}
            target="_blank"
            rel="noreferrer"
            className={buttonVariants()}
          >
            Documentation
          </Link>
          <Link
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.github}
            className={buttonVariants({ variant: "outline" })}
          >
            GitHub
          </Link>
    </div>
          </div>
          <Image
          src="\Infrastructures-Buildings--Streamline-Milano.svg"
          width={500}
          height={500}
          alt="city scape" />
      </div>
    </section>
  )
}

{/**/}
