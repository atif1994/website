import type { Metadata } from "next";
import { Outfit, Syne } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/views/auth/AuthProvider";

const outfit = Outfit({
  variable: "--font-body",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alikhan — Wholesale Marketplace",
  description:
    "Alikhan B2B wholesale marketplace. Search products, compare prices, and request quotations.",
};

export { viewport } from "./viewport";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${syne.variable} h-full antialiased`}
    >
      <body className="flex min-h-dvh flex-col overflow-x-hidden bg-[#F5F5F5] text-[#222]">
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
