"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Server,
  PhoneCall,
  Lock,
  Sparkles,
  ExternalLink,
  Tag,
  Star,
  CheckCircle2,
  ShieldCheck,
  ChevronRight,
  Search,
  Filter,
  ArrowRight,
  FileText,
  BadgePercent,
  Clock,
  ThumbsUp,
} from "lucide-react";

type CategoryFilter = "all" | "hosting" | "telecom" | "security" | "ai" | "productivity";

interface DealItem {
  id: string;
  name: string;
  category: CategoryFilter;
  categoryLabel: string;
  icon: React.ReactNode;
  rating: number;
  reviewsCount: number;
  badge: string;
  tagline: string;
  highlightDeal: string;
  couponCode?: string;
  pricing: string;
  features: string[];
  affiliateUrl: string;
  reviewUrl?: string;
}

const DEALS: DealItem[] = [
  {
    id: "cloudways",
    name: "Cloudways",
    category: "hosting",
    categoryLabel: "Managed Cloud Hosting",
    icon: <Server className="w-6 h-6 text-blue-600" />,
    rating: 4.9,
    reviewsCount: 1420,
    badge: "Editor's Choice • Best Cloud Hosting",
    tagline: "High-performance managed cloud hosting on DigitalOcean, Vultr, and AWS without touching Linux CLI.",
    highlightDeal: "Exclusive: 30% Off for 3 Months + Free Migration",
    couponCode: "URBAN30",
    pricing: "Starting at $11/mo (No contract)",
    features: [
      "1-Click WordPress & PHP staging environments",
      "Free SSL certificate & Cloudflare Enterprise CDN",
      "Automated hourly & daily off-site backups",
      "24/7/365 expert live chat support",
    ],
    affiliateUrl: "https://pbee.me/M21iA7k3",
    reviewUrl: "/reviews/cloudways",
  },
  {
    id: "800-com",
    name: "800.com",
    category: "telecom",
    categoryLabel: "Business Phone & Toll-Free",
    icon: <PhoneCall className="w-6 h-6 text-emerald-600" />,
    rating: 4.8,
    reviewsCount: 890,
    badge: "Best for E-Commerce & US Presence",
    tagline: "Get a dedicated 1-800, 888, or local US business phone number with call forwarding, SMS, and virtual receptionist.",
    highlightDeal: "Save Up to 50% on Annual Plans + 14-Day Free Trial",
    pricing: "Starting at $23/mo (Includes toll-free minutes)",
    features: [
      "Instant 1-800 vanity number search & activation",
      "Smart call forwarding to your mobile or team",
      "Two-way SMS text messaging from business number",
      "Ideal for Shopify, Stripe verification & global credibility",
    ],
    affiliateUrl: "https://pbee.me/E21fjvxT",
    reviewUrl: "/deals/800-com",
  },
  {
    id: "1password",
    name: "1Password",
    category: "security",
    categoryLabel: "Password & Secrets Manager",
    icon: <Lock className="w-6 h-6 text-indigo-600" />,
    rating: 4.9,
    reviewsCount: 3100,
    badge: "Industry Standard • Top Security Pick",
    tagline: "Protect your team and personal digital identity with end-to-end encrypted password and passkey storage.",
    highlightDeal: "14-Day Full Access Trial • Save 25% on Annual Business & Family Plans",
    pricing: "Starting at $2.99/mo (Billed annually)",
    features: [
      "Watchtower vulnerability scanner for compromised credentials",
      "Travel Mode for cross-border privacy protection",
      "Seamless autofill across iOS, Android, Mac & Windows",
      "Passkey ready with biometric login support",
    ],
    affiliateUrl: "https://pbee.me/D21ign86C",
  },
  {
    id: "otter-ai",
    name: "Otter.ai",
    category: "ai",
    categoryLabel: "AI Meeting Assistant & Transcription",
    icon: <Sparkles className="w-6 h-6 text-violet-600" />,
    rating: 4.8,
    reviewsCount: 2450,
    badge: "Top Rated AI Note-Taker",
    tagline: "Automated real-time meeting transcription, automated summary notes, and action items for Zoom, Google Meet & Teams.",
    highlightDeal: "Free Forever Tier • Save 20% on Annual Pro & Business Plans",
    pricing: "Free basic tier • Pro at $10/mo",
    features: [
      "Live transcription with speaker identification",
      "Automated AI meeting summaries emailed after call",
      "Instant Q&A with Otter Chat during meetings",
      "Integrates with Google Calendar, Zoom, and Slack",
    ],
    affiliateUrl: "https://go.ultrainfluence.com/u1-z139Cs7gZ",
  },
  {
    id: "foxit",
    name: "Foxit PDF Editor",
    category: "productivity",
    categoryLabel: "PDF & Document Productivity",
    icon: <FileText className="w-6 h-6 text-amber-600" />,
    rating: 4.8,
    reviewsCount: 1850,
    badge: "Top Adobe Acrobat Alternative",
    tagline: "Full-featured PDF editing, form filling, OCR scanning, and legal e-Signatures without the outrageous Adobe tax.",
    highlightDeal: "Special Promotional Offer: Up to 20% Off Lifetime & Cloud Subscriptions",
    pricing: "Perpetual license or $6.99/mo cloud",
    features: [
      "Edit text, images, and formatting directly inside PDFs",
      "Legally binding e-Signatures and form creation",
      "Advanced OCR to turn scanned papers into editable docs",
      "Lightweight, 3x faster startup than Adobe Acrobat",
    ],
    affiliateUrl: "https://pbee.me/R21i8dEeC",
  },
];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const filteredDeals = DEALS.filter((deal) => {
    const matchesCategory = activeCategory === "all" || deal.category === activeCategory;
    const matchesSearch =
      deal.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      deal.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      deal.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2500);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-slate-50 text-slate-900">
      {/* Top Banner Notice */}
      <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-800 text-white text-xs py-2 px-4 text-center font-medium flex items-center justify-center gap-2">
        <BadgePercent className="w-4 h-4 text-amber-300" />
        <span>
          <strong>September 2026 Verified Deals:</strong> We test and manually verify all software coupons weekly.
        </span>
      </div>

      {/* Header */}
      <header className="border-b border-slate-200 bg-white/95 backdrop-blur sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-blue-100 group-hover:scale-105 transition">
              <ShieldCheck className="w-5 h-5 font-bold" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center">
                <span className="font-extrabold text-lg text-slate-900 tracking-tight">UrbanEssential</span>
                <span className="text-blue-600 font-extrabold text-lg">Hub</span>
              </div>
              <span className="text-[10px] text-slate-500 uppercase tracking-widest -mt-1 font-semibold">
                Curated Software & Deals
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
            <button
              onClick={() => setActiveCategory("all")}
              className={`hover:text-blue-600 transition ${activeCategory === "all" ? "text-blue-600 font-semibold" : ""}`}
            >
              All Deals
            </button>
            <button
              onClick={() => setActiveCategory("hosting")}
              className={`hover:text-blue-600 transition ${activeCategory === "hosting" ? "text-blue-600 font-semibold" : ""}`}
            >
              Cloud & Hosting
            </button>
            <button
              onClick={() => setActiveCategory("telecom")}
              className={`hover:text-blue-600 transition ${activeCategory === "telecom" ? "text-blue-600 font-semibold" : ""}`}
            >
              Business Telecom
            </button>
            <button
              onClick={() => setActiveCategory("security")}
              className={`hover:text-blue-600 transition ${activeCategory === "security" ? "text-blue-600 font-semibold" : ""}`}
            >
              Security
            </button>
            <button
              onClick={() => setActiveCategory("ai")}
              className={`hover:text-blue-600 transition ${activeCategory === "ai" ? "text-blue-600 font-semibold" : ""}`}
            >
              AI Tools
            </button>
          </nav>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
              <CheckCircle2 className="w-3.5 h-3.5" /> 100% Tested
            </span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-slate-100/60 border-b border-slate-200 py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-100">
            <Clock className="w-3.5 h-3.5" /> Updated for September 2026
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Essential Business Software, Vetted Reviews & Verified Deals
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Stop overpaying for software. We independently test, benchmark, and curate the best cloud infrastructure, telecom, security, and AI tools for modern teams.
          </p>

          {/* Search Bar */}
          <div className="pt-2 max-w-lg mx-auto">
            <div className="relative">
              <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search software, e.g. Cloudways, 800.com, 1Password, VPN..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-white border border-slate-300 rounded-xl text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition"
              />
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {[
              { id: "all", label: "All Software (5)" },
              { id: "hosting", label: "Cloud & Hosting" },
              { id: "telecom", label: "Business Phone (1-800)" },
              { id: "security", label: "Password & Security" },
              { id: "ai", label: "AI Tools" },
              { id: "productivity", label: "Productivity & PDF" },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as CategoryFilter)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
                  activeCategory === cat.id
                    ? "bg-slate-900 text-white shadow-sm"
                    : "bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Area: Deals List */}
      <main className="max-w-6xl mx-auto px-4 py-10 w-full space-y-8 flex-1">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              {activeCategory === "all" ? "Top Curated Software & Deals" : `Category: ${activeCategory.toUpperCase()}`}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Showing {filteredDeals.length} hand-picked and verified software solutions.
            </p>
          </div>
          <div className="text-xs text-slate-500 flex items-center gap-1.5">
            <ThumbsUp className="w-4 h-4 text-emerald-600" />
            <span>Tested & Vetted</span>
          </div>
        </div>

        {/* Deals Cards Grid */}
        <div className="space-y-6">
          {filteredDeals.map((deal) => (
            <div
              key={deal.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm hover:shadow-md transition-all space-y-6 group"
            >
              {/* Card Top Row */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0 group-hover:scale-105 transition shadow-xs">
                    {deal.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-xl sm:text-2xl font-black text-slate-900">{deal.name}</h3>
                      <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                        {deal.categoryLabel}
                      </span>
                      <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200">
                        {deal.badge}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 pt-1 text-xs text-slate-500">
                      <div className="flex items-center text-amber-500">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <span className="font-bold ml-1 text-slate-800">{deal.rating}</span>
                      </div>
                      <span>•</span>
                      <span>({deal.reviewsCount.toLocaleString()} user reviews)</span>
                      <span>•</span>
                      <span className="font-medium text-slate-700">{deal.pricing}</span>
                    </div>
                  </div>
                </div>

                {/* Primary CTA Button */}
                <div className="flex flex-col sm:items-end gap-2 shrink-0">
                  <a
                    href={deal.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md shadow-blue-500/20 transition cursor-pointer"
                  >
                    <span>Claim Deal & Visit</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>

                  {deal.reviewUrl && (
                    <Link
                      href={deal.reviewUrl}
                      className="text-xs text-slate-500 hover:text-blue-600 font-medium inline-flex items-center gap-1 transition"
                    >
                      <span>Read In-Depth Review</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  )}
                </div>
              </div>

              {/* Tagline & Deal Highlights Box */}
              <div className="space-y-3">
                <p className="text-sm text-slate-600 leading-relaxed">{deal.tagline}</p>

                {/* Promotional Deal Banner */}
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200/80 rounded-xl p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-2 text-amber-950 font-bold">
                    <Tag className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>{deal.highlightDeal}</span>
                  </div>

                  {deal.couponCode && (
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-slate-500">Coupon:</span>
                      <button
                        type="button"
                        onClick={() => handleCopyCode(deal.couponCode!)}
                        className="px-2.5 py-1 rounded bg-white border border-amber-300 font-mono font-bold text-amber-900 hover:bg-amber-100 transition cursor-pointer"
                      >
                        {copiedCode === deal.couponCode ? "Copied!" : deal.couponCode}
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Feature Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 border-t border-slate-100 text-xs text-slate-700">
                {deal.features.map((feat, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Why Trust Section */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-4">
          <h3 className="text-lg sm:text-xl font-bold text-slate-900">
            How Urban Essential Hub Evaluates & Tests Software
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Our mission is simple: cut through marketing fluff to highlight tools that genuinely save businesses time and money. Every recommendation on this page undergoes direct hands-on testing. We benchmark load times for cloud hosts like <strong>Cloudways</strong>, test call routing and SMS deliverability on <strong>800.com</strong>, and analyze encryption protocols on <strong>1Password</strong>.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs">
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 space-y-1">
              <span className="font-bold text-slate-900">1. Real Hands-On Testing</span>
              <p className="text-slate-500">We create active accounts and simulate real-world customer workflows.</p>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 space-y-1">
              <span className="font-bold text-slate-900">2. Verified Working Coupons</span>
              <p className="text-slate-500">Expired discounts are pruned weekly so you never waste time at checkout.</p>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 space-y-1">
              <span className="font-bold text-slate-900">3. FTC Transparency</span>
              <p className="text-slate-500">We are reader-supported via affiliate commissions at no extra cost to you.</p>
            </div>
          </div>
        </section>

        {/* FAQ Section for SEO Richness */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">Frequently Asked Questions</span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">Software Buying & Deals FAQ</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-slate-600">
            <div className="space-y-2">
              <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                Why does an overseas independent business need a 1-800 toll-free number?
              </h4>
              <p className="leading-relaxed">
                A US 1-800 or 888 number instantly establishes commercial credibility with North American buyers. Payment processors like Stripe and PayPal frequently check merchant websites for verifiable customer support contacts. Providers like <strong>800.com</strong> allow you to forward incoming calls directly to any mobile number globally.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                Why choose managed cloud hosting like Cloudways over shared cPanel hosting?
              </h4>
              <p className="leading-relaxed">
                Shared hosting cPanel hosts bundle thousands of sites on a single server, causing slow load times and vulnerability to neighbor sites. Cloudways provides dedicated cloud instances (DigitalOcean, Vultr, AWS) with isolated resources, built-in caching, and automated staging without requiring command-line server administration.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                Are password managers like 1Password safe against data breaches?
              </h4>
              <p className="leading-relaxed">
                1Password uses a dual-key zero-knowledge encryption architecture (your master password + a 128-bit Secret Key generated on your device). Even if the company servers were compromised, your vault cannot be decrypted by anyone without the Secret Key stored on your local hardware.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                How do I redeem promo codes listed on Urban Essential Hub?
              </h4>
              <p className="leading-relaxed">
                Click any <strong>Claim Deal</strong> button to activate the promotional tracking link. For offers with an explicit coupon code (such as Cloudways), copy the code and paste it into the checkout or registration form to receive your discount.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-10 text-xs text-slate-500">
        <div className="max-w-6xl mx-auto px-4 space-y-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-100 pb-6">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <span className="font-bold text-slate-900 text-sm">UrbanEssentialHub.com</span>
            </div>
            <p className="text-[11px] text-slate-400 text-center sm:text-right">
              © 2026 Urban Essential Hub. All rights reserved.
            </p>
          </div>

          <div className="space-y-2 text-[11px] text-slate-400 leading-relaxed">
            <p>
              <strong>FTC Affiliate Disclosure:</strong> Urban Essential Hub is an independent review and deal discovery publication. Some links on this website are affiliate links. If you click through and make a purchase, we may receive a referral commission at no additional cost to you. We only recommend software and services that meet our strict operational standards.
            </p>
            <p>
              Trademarks, product names, logos, and brands mentioned are the property of their respective owners. Mention of any third-party company does not imply endorsement.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
