import type { Metadata } from "next";
import "./globals.css";

const geistSans = {
  variable: "font-sans",
};

const geistMono = {
  variable: "font-mono",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.urbanessentialhub.com"),
  title: "Urban Essential Hub — B2B Software TCO Calculators & Spec Comparisons (2026)",
  description:
    "Specification-based B2B software comparisons, total cost of ownership (TCO) calculators, and pricing breakdowns across cloud hosting, virtual phone systems, password managers, PDF suites, and AI meeting tools.",
  authors: [{ name: "UrbanEssentialHub Editorial Team" }],
  openGraph: {
    title: "Urban Essential Hub — B2B Software TCO Calculators & Spec Comparisons",
    description:
      "Compare cloud hosting, toll-free business phone plans, enterprise security, and PDF licensing costs with transparent arithmetic and interactive calculators.",
    url: "https://www.urbanessentialhub.com",
    siteName: "Urban Essential Hub",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Urban Essential Hub (2026)",
    description:
      "B2B software TCO calculators, pricing breakdowns, and specification comparisons.",
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
                "Specification-based B2B software comparisons, pricing breakdowns, and total cost of ownership calculators.",
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
