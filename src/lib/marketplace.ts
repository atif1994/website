export const MARKETPLACE_CATEGORIES = [
  { name: "Apparel & Fashion", icon: "👕", slug: "Apparel & Fashion" },
  { name: "Electronics", icon: "🔌", slug: "Electronics" },
  { name: "Food & Beverages", icon: "🌾", slug: "Food & Beverages" },
  { name: "Home & Garden", icon: "🏠", slug: "Home & Garden" },
  { name: "Industrial Machinery", icon: "⚙️", slug: "Industrial Machinery" },
  { name: "Packaging & Printing", icon: "📦", slug: "Packaging & Printing" },
  { name: "Raw Materials", icon: "🧱", slug: "Raw Materials" },
  { name: "Textiles", icon: "🧵", slug: "Textiles" },
  { name: "Chemicals", icon: "🧪", slug: "Chemicals" },
  { name: "Beauty & Personal Care", icon: "✨", slug: "Beauty & Personal Care" },
] as const;

export const HOME_BANNERS = [
  {
    id: "1",
    title: "Source wholesale. Grow faster.",
    subtitle: "Verified suppliers, clear MOQs, and factory-direct pricing.",
    cta: "Browse products",
    href: "/products",
    tone: "from-[#FF6A00] to-[#FF8A3D]",
  },
  {
    id: "2",
    title: "Ready-to-ship inventory",
    subtitle: "Find products with production capacity and bulk pricing.",
    cta: "View catalog",
    href: "/products",
    tone: "from-[#0B5FFF] to-[#3D8BFF]",
  },
  {
    id: "3",
    title: "Request quotes in minutes",
    subtitle: "Connect with sellers and negotiate wholesale deals.",
    cta: "Explore now",
    href: "/products",
    tone: "from-[#0F766E] to-[#14B8A6]",
  },
] as const;
