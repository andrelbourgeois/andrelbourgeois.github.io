import { ContactForm } from "./contact-form"

import Link from "next/link"
import Image from "next/image"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"

export default function ContactPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex flex-row items-start space-x-2">
        <div className="flex w-1/2 items-center justify-start">
          <div className="flex max-w-[980px] flex-col gap-2 space-y-4">
              <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl text-foreground absolute top-60 z-10">
                <br className="hidden sm:inline" />
              </h1>
              <Image className=""
              src="./andre-1.svg"
              width={300}
              height={300}
              alt="Picture of the author"
            /> 
          </div>
        </div>
        <div className="flex w-1/2 flex-col items-center gap-2 space-y-4 justify-end pt-2">
            <ContactForm />
          </div>
      </div>
    </section>
    
  )
}


