export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "André Bourgeois",
  description:
    "Software Developer, Technology Consultant, Future Places Professional.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Portfolio",
      href: "/portfolio",
    },
    {
      title: "Contact",
      href: "/contact",
    }
  ],
  links: {
    // personal
    twitter: "/",
    github: "https://github.com/andrelbourgeois",
    linkedin: "https://www.linkedin.com/in/andrelbourgeois",
    // documentation
    react: "https://react.dev",
    next: "https://nextjs.org",
    tailwind: "https://tailwindcss.com",
    shadcn: "https://ui.shadcn.com",
    //misc
    docs: "/"
  },
}
