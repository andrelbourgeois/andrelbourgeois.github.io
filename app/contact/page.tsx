import Link from "next/link"

{/*import { ContactForm } from "./formspree"*/}
import { ContactForm } from "./zod"

import Image from "next/image"

export default function ContactPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex flex-row items-center space-x-16 ">
        <div className="flex max-w-[980px] flex-col items-start gap-2 space-y-4 pl-10">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
              Software Developer. <br className="hidden sm:inline" />
              Technology Consultant. <br className="hidden sm:inline" />
              Future Places Professional.
            </h1>
            <p className="max-w-[700px] text-lg text-muted-foreground">
              I&apos;ve built my career on the simple belief that organisations can understand
              their own built assets and business processes like Big Tech understands its products
              and services.
            </p>
          </div>
          <div className="flex max-w-[980px] flex-col items-start gap-2 space-y-4 pl-10">
                <ContactForm />
          </div>
      </div>
    </section>
  )
}
