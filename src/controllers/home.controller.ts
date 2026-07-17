import type { HomeContent, SiteInfo } from "@/models";

export class HomeController {
  static getSiteInfo(): SiteInfo {
    return {
      brand: "Alikhan",
      tagline: "Official website",
      navItems: [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
      ],
    };
  }

  static getHomeContent(): HomeContent {
    return {
      brand: "Alikhan",
      headline: "Welcome to Alikhan",
      description:
        "Public website built with Next.js using the MVC pattern.",
      ctaLabel: "Learn more",
      ctaHref: "/about",
    };
  }
}
