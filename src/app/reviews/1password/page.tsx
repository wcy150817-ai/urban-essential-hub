import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import {
  Lock,
  CheckCircle2,
  ShieldCheck,
  ChevronRight,
  ArrowLeft,
  DollarSign,
  HelpCircle,
  ThumbsUp,
  KeyRound,
  Smartphone,
  XCircle,
  AlertTriangle,
  Info,
  Users,
  Plane,
} from "lucide-react";

const PAGE_URL = "https://www.urbanessentialhub.com/reviews/1password";
const TITLE = "1Password Review (2026): Features, Security Design, Pricing and Drawbacks";
const DESCRIPTION =
  "A research-based 1Password review: features, Secret Key security design, dated pricing, platform support, who it fits and its real drawbacks, all sourced.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/reviews/1password" },
  keywords: [
    "1Password review",
    "1Password pricing",
    "1Password Secret Key",
    "1Password Watchtower",
    "is 1Password worth it",
  ],
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    type: "article",
  },
};

const faqs: { q: string; a: string }[] = [
  {
    q: "Is 1Password worth paying for?",
    a: "It depends on what you need. 1Password’s pricing page lists the Individual plan at $2.99 per month billed yearly (regular price $3.99) as of October 11, 2026, which works out to $35.88 for the first year and $47.88 a year afterward. For that you get autofill, Watchtower alerts, passkey storage, secure sharing, Travel Mode and a Secret Key design. If you only need basic storage and want a permanent free tier, a paid plan may be more than you need.",
  },
  {
    q: "Does 1Password have a free plan?",
    a: "Not a permanent one on the pages we checked. 1Password’s pricing page offers a 14-day free trial of Individual or Families and says no credit card is required. After the trial you need a paid subscription.",
  },
  {
    q: "What is the 1Password Secret Key?",
    a: "According to 1Password, the Secret Key is a code created on your own device that is combined with your account password to encrypt your data. 1Password describes it as 34 letters and numbers separated by dashes, with 128 bits of entropy, and says it has no record of it and cannot recover it. It is kept on devices you have signed in with and in your Emergency Kit.",
  },
  {
    q: "What happens if I forget my 1Password account password?",
    a: "1Password’s security white paper says the company cannot recover or reset your account password or Secret Key. On a Families or team account, a family organizer or administrator can recover your account, which issues you a new Secret Key and lets you create a new password, and you keep access to your data. Your two-factor authentication is reset during recovery.",
  },
  {
    q: "Which devices does 1Password support?",
    a: "Per 1Password’s system requirements page, 1Password 8 needs macOS 12 or later, iOS or iPadOS 18 or later, a 64-bit version of Windows 10 or later, Android 12 or later with Google Play, or a supported 64-bit Linux distribution. Browser extensions cover Chrome, Firefox, Edge, Brave and Safari. See the platform table above for the version floors.",
  },
  {
    q: "Does 1Password support passkeys?",
    a: "Yes. 1Password says you can save passkeys, sign in with them in your browser, and view, edit, move and share them like any other item. Saving passkeys on mobile and Windows has version floors: iOS 18 or later, Android 14 or later, and Windows 11 with the MSIX installer.",
  },
  {
    q: "Has 1Password been hacked?",
    a: "The one incident write-up we reviewed is 1Password’s October 23, 2023 post about suspicious activity on its Okta instance, detected on September 29, 2023. 1Password says it terminated the activity and found no compromise of user data or other sensitive systems. That is the vendor’s own account, and we could not independently audit it. For a dated comparison of disclosed incidents between vendors, see our head-to-head page.",
  },
];

const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: TITLE,
  description: DESCRIPTION,
  datePublished: "2026-10-11",
  dateModified: "2026-10-11",
  mainEntityOfPage: PAGE_URL,
  author: { "@type": "Organization", name: "Urban Essential Hub Editorial Team" },
  publisher: { "@type": "Organization", name: "Urban Essential Hub" },
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const softwareLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "1Password",
  applicationCategory: "SecurityApplication",
  operatingSystem: "macOS, Windows, Linux, iOS, Android",
  url: "https://1password.com/",
  description:
    "Subscription password manager with end-to-end encryption, a device-generated Secret Key, Watchtower alerts, passkey storage and Travel Mode.",
  offers: [
    {
      "@type": "Offer",
      name: "1Password Individual, billed yearly (promotional first-year price per month)",
      price: "2.99",
      priceCurrency: "USD",
      description: "Regular price 3.99 USD per month. Promotion applies to new customers who subscribe directly, first year, annual billing.",
    },
    {
      "@type": "Offer",
      name: "1Password Families, billed yearly (promotional first-year price per month)",
      price: "4.49",
      priceCurrency: "USD",
      description: "Includes 5 users. Regular price 5.99 USD per month.",
    },
  ],
};

function AffiliateCta({ label }: { label: string }) {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<a href="https://bbux.me/P9xAzh5at" target="_blank" rel="sponsored noopener" style="display:inline-block;color:#ffffff !important;background:#4f46e5;padding:14px 28px;border-radius:12px;font-weight:700;text-decoration:none;text-align:center">${label}</a>`,
      }}
    />
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-5">
      {children}
    </section>
  );
}

const P = "text-sm text-slate-600 leading-relaxed";
const H2 = "text-xl font-black text-slate-900 flex items-center gap-2";
const H3 = "text-base font-black text-slate-800";
const TH = "px-4 py-3 font-semibold text-xs uppercase tracking-wider";
const TD = "px-4 py-3 align-top";
const LINK = "text-indigo-700 underline font-medium";

// PART2_MARKER
