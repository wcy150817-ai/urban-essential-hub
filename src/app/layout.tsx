import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.urbanessentialhub.com"),
  alternates: {
    canonical: "/",
  },
  title: "Urban Essential Hub - Best Business Tools, Software Reviews & Verified Deals (2026)",
  description:
    "Honest software reviews, side-by-side comparisons, and exclusive promo codes on cloud hosting, business phone systems, security SaaS, and AI productivity tools.",
  keywords: [
    "best business software 2026",
    "cloudways review",
    "800.com promo code",
    "1password vs bitwarden",
    "saas deals and discounts",
    "curated business tools",
  ],
  authors: [{ name: "UrbanEssentialHub Editorial Team" }],
  openGraph: {
    title: "Urban Essential Hub - Curated Software Reviews & Verified Deals",
    description:
      "Save money and choose the right tech stack with vetted software reviews, comparisons, and verified discounts.",
    url: "https://www.urbanessentialhub.com",
    siteName: "Urban Essential Hub",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Urban Essential Hub (2026)",
    description:
      "Vetted business tools, expert reviews, and exclusive promo codes.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Urban Essential Hub",
              url: "https://www.urbanessentialhub.com",
              description:
                "Independent reviews, comparisons, and verified promo discounts on top business software and cloud services.",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://www.urbanessentialhub.com/?s={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
