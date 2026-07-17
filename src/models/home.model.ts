export interface HomeContent {
  brand: string;
  headline: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SiteInfo {
  brand: string;
  tagline: string;
  navItems: NavItem[];
}
