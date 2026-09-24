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
  ArrowRight,
  FileText,
  BadgePercent,
  Clock,
  ThumbsUp,
  Zap,
  Award,
  TrendingUp,
  Users,
  Globe,
  Flame,
} from "lucide-react";

type CategoryFilter = "all" | "hosting" | "telecom" | "security" | "ai" | "productivity";

interface DealItem {
  id: string;
  name: string;
  category: CategoryFilter;
  categoryLabel: string;
  icon: React.ReactNode;
  accentColor: string;
  ctaBg: string;
  ctaHover: string;
  ctaShadow: string;
  rating: number;
  reviewsCount: number;
  badge: string;
  tagline: string;
  highlightDeal: string;
  savingsLabel: string;
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
    icon: <Server className="w-7 h-7 text-blue-600" />,
    accentColor: "deal-card-hosting",
    ctaBg: "bg-blue-600",
    ctaHover: "hover:bg-blue-700",
    ctaShadow: "shadow-blue-500/25",
    rating: 4.9,
    reviewsCount: 1420,
    badge: "Editor's Choice",
    tagline: "High-performance managed cloud hosting on DigitalOcean, Vultr, and AWS — no Linux CLI needed. Includes free migration, staging, and Cloudflare Enterprise CDN.",
    highlightDeal: "Exclusive: 30% Off for 3 Months + Free Site Migration",
    savingsLabel: "SAVE 30%",
    couponCode: "URBAN30",
    pricing: "From $11/mo",
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
    categoryLabel: "Toll-Free Business Phone",
    icon: <PhoneCall className="w-7 h-7 text-emerald-600" />,
    accentColor: "deal-card-telecom",
    ctaBg: "bg-emerald-600",
    ctaHover: "hover:bg-emerald-700",
    ctaShadow: "shadow-emerald-500/25",
    rating: 4.8,
    reviewsCount: 890,
    badge: "Best for E-Commerce",
    tagline: "Get a dedicated 1-800, 888, or local US business phone number with smart call forwarding to any mobile worldwide, SMS, and virtual receptionist.",
    highlightDeal: "Save Up to 50% on Annual Plans + 14-Day Free Trial",
    savingsLabel: "SAVE 50%",
    pricing: "From $23/mo",
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
    icon: <Lock className="w-7 h-7 text-indigo-600" />,
    accentColor: "deal-card-security",
    ctaBg: "bg-indigo-600",
    ctaHover: "hover:bg-indigo-700",
    ctaShadow: "shadow-indigo-500/25",
    rating: 4.9,
    reviewsCount: 3100,
    badge: "Industry Standard",
    tagline: "Protect your team and personal digital identity with end-to-end encrypted password and passkey storage, Watchtower vulnerability scanning, and Travel Mode.",
    highlightDeal: "14-Day Full Access Trial • Save 25% on Annual Plans",
    savingsLabel: "SAVE 25%",
    pricing: "From $2.99/mo",
    features: [
      "Watchtower vulnerability scanner for compromised credentials",
      "Travel Mode hides sensitive vaults at border crossings",
      "Seamless autofill across iOS, Android, Mac & Windows",
      "Passkey ready with biometric login support",
    ],
    affiliateUrl: "https://pbee.me/D21ign86C",
    reviewUrl: "/reviews/1password",
  },
  {
    id: "otter-ai",
    name: "Otter.ai",
    category: "ai",
    categoryLabel: "AI Meeting Transcription",
    icon: <Sparkles className="w-7 h-7 text-violet-600" />,
    accentColor: "deal-card-ai",
    ctaBg: "bg-violet-600",
    ctaHover: "hover:bg-violet-700",
    ctaShadow: "shadow-violet-500/25",
    rating: 4.8,
    reviewsCount: 2450,
    badge: "Top AI Note-Taker",
    tagline: "Automated real-time meeting transcription, AI-generated summary notes, and action items for Zoom, Google Meet & Teams — so you never miss a detail.",
    highlightDeal: "Free Forever Tier • Save 20% on Annual Pro & Business Plans",
    savingsLabel: "SAVE 20%",
    pricing: "Free tier available",
    features: [
      "Live transcription with speaker identification",
      "Automated AI meeting summaries emailed after call",
      "Instant Q&A with Otter Chat during meetings",
      "Integrates with Google Calendar, Zoom, and Slack",
    ],
    affiliateUrl: "https://go.ultrainfluence.com/u1-z139Cs7gZ",
    reviewUrl: "/reviews/otter-ai",
  },
  {
    id: "foxit",
    name: "Foxit PDF Editor",
    category: "productivity",
    categoryLabel: "PDF & Document Suite",
    icon: <FileText className="w-7 h-7 text-amber-600" />,
    accentColor: "deal-card-productivity",
    ctaBg: "bg-amber-600",
    ctaHover: "hover:bg-amber-700",
    ctaShadow: "shadow-amber-500/25",
    rating: 4.8,
    reviewsCount: 1850,
    badge: "#1 Adobe Alternative",
    tagline: "Full-featured PDF editing, form filling, OCR scanning, and legal e-Signatures — without the outrageous Adobe Acrobat subscription tax.",
    highlightDeal: "Up to 20% Off Lifetime License & Cloud Subscriptions",
    savingsLabel: "SAVE 20%",
    pricing: "From $6.99/mo",
    features: [
      "Edit text, images, and formatting directly inside PDFs",
      "Legally binding e-Signatures and form creation",
      "Advanced OCR to turn scanned papers into editable docs",
      "Lightweight, 3x faster startup than Adobe Acrobat",
    ],
    affiliateUrl: "https://pbee.me/R21i8dEeC",
    reviewUrl: "/reviews/foxit",
  },
];

const STATS = [
  { number: "12,400+", label: "Users Helped", icon: <Users className="w-5 h-5" /> },
  { number: "5", label: "Tools Vetted", icon: <Award className="w-5 h-5" /> },
  { number: "$2.4M+", label: "Reader Savings", icon: <TrendingUp className="w-5 h-5" /> },
  { number: "47", label: "Countries", icon: <Globe className="w-5 h-5" /> },
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
      {/* Top Urgency Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white text-xs py-2.5 px-4 text-center font-medium flex items-center justify-center gap-2">
        <Flame className="w-4 h-4 text-orange-400 animate-pulse" />
        <span>
          <strong className="text-amber-300">September 2026 Verified Deals</strong> — All coupons tested & confirmed working this week
        </span>
        <Flame className="w-4 h-4 text-orange-400 animate-pulse" />
      </div>

      {/* Header */}
      <header className="border-b border-slate-200 bg-white/95 backdrop-blur sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white shadow-lg shadow-blue-200 group-hover:scale-105 transition-transform">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center">
                <span className="font-extrabold text-lg text-slate-900 tracking-tight">UrbanEssential</span>
                <span className="text-blue-600 font-extrabold text-lg">Hub</span>
              </div>
              <span className="text-[10px] text-slate-400 uppercase tracking-[0.2em] -mt-0.5 font-semibold">
                Curated Software & Deals
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {[
              { id: "all" as CategoryFilter, label: "All Deals" },
              { id: "hosting" as CategoryFilter, label: "Cloud" },
              { id: "telecom" as CategoryFilter, label: "Telecom" },
              { id: "security" as CategoryFilter, label: "Security" },
              { id: "ai" as CategoryFilter, label: "AI" },
              { id: "productivity" as CategoryFilter, label: "PDF" },
            ].map((nav) => (
              <button
                key={nav.id}
                onClick={() => setActiveCategory(nav.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  activeCategory === nav.id
                    ? "bg-blue-600 text-white shadow-md shadow-blue-200"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                {nav.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
              <CheckCircle2 className="w-3.5 h-3.5" /> 100% Tested
            </span>
          </div>
        </div>
      </header>

      {/* Hero Section — Animated Gradient + Pattern */}
      <section className="hero-gradient hero-pattern border-b border-slate-200 py-16 md:py-20 relative overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-violet-200/30 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold bg-white/80 text-blue-700 border border-blue-200 shadow-sm backdrop-blur">
            <Clock className="w-3.5 h-3.5" /> Updated for September 2026
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
            Stop Overpaying for{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
              Business Software
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            We independently test, benchmark, and verify deals on the best cloud hosting, telecom, security, and AI tools.
            <strong className="text-slate-800"> Every coupon is manually checked weekly.</strong>
          </p>

          {/* Stats Row */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 pt-2">
            {STATS.map((stat, i) => (
              <div key={i} className="flex items-center gap-2 text-slate-600">
                <div className="w-8 h-8 rounded-lg bg-white/80 border border-slate-200 flex items-center justify-center text-blue-600 shadow-sm">
                  {stat.icon}
                </div>
                <div className="text-left">
                  <div className="text-sm font-black stat-number">{stat.number}</div>
                  <div className="text-[10px] text-slate-500 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Search Bar */}
          <div className="pt-2 max-w-xl mx-auto">
            <div className="relative">
              <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search: Cloudways, 800.com, 1Password, VPN..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 bg-white border border-slate-300 rounded-2xl text-sm shadow-lg shadow-slate-200/50 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition"
              />
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
            {[
              { id: "all", label: "🔥 All Software", count: DEALS.length },
              { id: "hosting", label: "☁️ Cloud & Hosting" },
              { id: "telecom", label: "📞 Business Phone" },
              { id: "security", label: "🔒 Security" },
              { id: "ai", label: "🤖 AI Tools" },
              { id: "productivity", label: "📄 Productivity" },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as CategoryFilter)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? "bg-slate-900 text-white shadow-lg shadow-slate-900/20 scale-105"
                    : "bg-white/80 text-slate-600 border border-slate-200 hover:border-slate-300 hover:bg-white hover:shadow-sm"
                }`}
              >
                {cat.label}
                {"count" in cat && <span className="ml-1.5 text-[10px] opacity-70">({(cat as { count: number }).count})</span>}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Area: Deals List */}
      <main className="max-w-6xl mx-auto px-4 py-10 sm:py-14 w-full space-y-8 flex-1">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900">
              {activeCategory === "all" ? "🏆 Top Curated Deals" : `Category: ${activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)}`}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              Showing {filteredDeals.length} hand-picked and verified software solutions
            </p>
          </div>
          <div className="text-xs text-slate-400 flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-slate-200">
            <ThumbsUp className="w-3.5 h-3.5 text-emerald-500" />
            <span className="font-semibold">Tested & Vetted</span>
          </div>
        </div>

        {/* Deal Cards */}
        <div className="space-y-6">
          {filteredDeals.map((deal, index) => (
            <div
              key={deal.id}
              className={`relative bg-white rounded-2xl border border-slate-200/80 p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-300 space-y-5 group ${deal.accentColor} animate-fade-up`}
              style={{ animationDelay: `${index * 80}ms` }}
            >
              {/* Savings Ribbon */}
              <div className="savings-ribbon">{deal.savingsLabel}</div>

              {/* Card Top Row */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                    {deal.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-xl sm:text-2xl font-black text-slate-900">{deal.name}</h3>
                      <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                        {deal.categoryLabel}
                      </span>
                      <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200 flex items-center gap-1">
                        <Award className="w-3 h-3" /> {deal.badge}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 pt-1.5 text-xs text-slate-500">
                      <div className="flex items-center gap-0.5 text-amber-500">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-3.5 h-3.5 ${i < Math.floor(deal.rating) ? "fill-amber-400 text-amber-400" : "fill-slate-200 text-slate-200"}`} />
                        ))}
                      </div>
                      <span className="font-black text-slate-800">{deal.rating}</span>
                      <span className="text-slate-300">|</span>
                      <span>{deal.reviewsCount.toLocaleString()} reviews</span>
                      <span className="text-slate-300">|</span>
                      <span className="font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded-md">{deal.pricing}</span>
                    </div>
                  </div>
                </div>

                {/* Primary CTA Button */}
                <div className="flex flex-col sm:items-end gap-2 shrink-0">
                  <a
                    href={deal.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className={`cta-glow inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl ${deal.ctaBg} ${deal.ctaHover} text-white font-bold text-sm shadow-lg ${deal.ctaShadow} transition-all cursor-pointer hover:scale-105`}
                  >
                    <Zap className="w-4 h-4" />
                    <span>Claim Deal & Visit</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>

                  {deal.reviewUrl && (
                    <Link
                      href={deal.reviewUrl}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-slate-100 hover:bg-blue-50 border border-slate-200 hover:border-blue-300 text-sm text-slate-700 hover:text-blue-700 font-bold transition group/link"
                    >
                      <span>📖 Read In-Depth Review</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  )}
                </div>
              </div>

              {/* Tagline & Deal Highlights Box */}
              <div className="space-y-3">
                <p className="text-sm text-slate-600 leading-relaxed">{deal.tagline}</p>

                {/* Promotional Deal Banner */}
                <div className="bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50 border border-amber-200/80 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-2 text-amber-950 font-bold">
                    <Tag className="w-4 h-4 text-amber-600 shrink-0" />
                    <span className="text-sm">{deal.highlightDeal}</span>
                  </div>

                  {deal.couponCode && (
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-slate-500">Coupon:</span>
                      <button
                        type="button"
                        onClick={() => handleCopyCode(deal.couponCode!)}
                        className="px-3 py-1.5 rounded-lg bg-white border-2 border-dashed border-amber-400 font-mono font-black text-amber-900 hover:bg-amber-100 transition cursor-pointer text-sm tracking-wider"
                      >
                        {copiedCode === deal.couponCode ? "✅ Copied!" : deal.couponCode}
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Feature Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-slate-100 text-xs text-slate-700">
                {deal.features.map((feat, i) => (
                  <div key={i} className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-slate-50 transition">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span className="font-medium">{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Trust Section — Redesigned */}
        <section className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-10 space-y-6">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">Why Trust Us</span>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
              How We Evaluate & Test Software
            </h3>
            <p className="text-sm text-slate-500 max-w-xl mx-auto">
              Our mission: cut through marketing fluff to find tools that genuinely save your business time and money.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-2">
            <div className="trust-card p-5 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-100 space-y-2 text-center">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mx-auto text-blue-600">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <span className="font-black text-sm text-slate-900 block">Real Hands-On Testing</span>
              <p className="text-xs text-slate-500 leading-relaxed">We create active paid accounts and simulate real customer workflows before recommending.</p>
            </div>
            <div className="trust-card p-5 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl border border-emerald-100 space-y-2 text-center">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center mx-auto text-emerald-600">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <span className="font-black text-sm text-slate-900 block">Weekly Verified Coupons</span>
              <p className="text-xs text-slate-500 leading-relaxed">Expired discounts are pruned weekly so you never waste time at checkout.</p>
            </div>
            <div className="trust-card p-5 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl border border-amber-100 space-y-2 text-center">
              <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center mx-auto text-amber-600">
                <BadgePercent className="w-6 h-6" />
              </div>
              <span className="font-black text-sm text-slate-900 block">FTC Transparency</span>
              <p className="text-xs text-slate-500 leading-relaxed">Reader-supported via affiliate commissions at no extra cost to you. Full disclosure always.</p>
            </div>
          </div>
        </section>

        {/* FAQ Section for SEO */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">FAQ</span>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900">Software Buying & Deals FAQ</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-slate-600">
            <div className="space-y-2 p-4 rounded-xl bg-slate-50/50 border border-slate-100">
              <h4 className="font-black text-slate-900 text-sm sm:text-base">
                Why does a business need a 1-800 toll-free number?
              </h4>
              <p className="leading-relaxed">
                A US 1-800 or 888 number instantly builds credibility with North American buyers. Payment processors like Stripe and PayPal check for verifiable support contacts. <strong>800.com</strong> lets you forward calls to any mobile globally.
              </p>
            </div>

            <div className="space-y-2 p-4 rounded-xl bg-slate-50/50 border border-slate-100">
              <h4 className="font-black text-slate-900 text-sm sm:text-base">
                Why choose managed cloud hosting over shared cPanel?
              </h4>
              <p className="leading-relaxed">
                Shared hosting bundles thousands of sites on one server. Cloudways provides dedicated cloud instances with isolated resources, built-in caching, and automated staging — no command-line needed.
              </p>
            </div>

            <div className="space-y-2 p-4 rounded-xl bg-slate-50/50 border border-slate-100">
              <h4 className="font-black text-slate-900 text-sm sm:text-base">
                Are password managers safe against data breaches?
              </h4>
              <p className="leading-relaxed">
                1Password uses dual-key zero-knowledge encryption (master password + 128-bit Secret Key). Even if servers are compromised, your vault cannot be decrypted without the Secret Key stored only on your device.
              </p>
            </div>

            <div className="space-y-2 p-4 rounded-xl bg-slate-50/50 border border-slate-100">
              <h4 className="font-black text-slate-900 text-sm sm:text-base">
                How do I redeem promo codes on this site?
              </h4>
              <p className="leading-relaxed">
                Click any <strong>Claim Deal</strong> button to activate the promotional tracking link. For offers with a coupon code (like Cloudways), copy and paste it at checkout.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-10 text-xs text-slate-500">
        <div className="max-w-6xl mx-auto px-4 space-y-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-100 pb-6">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white shadow-md">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <span className="font-black text-slate-900 text-sm">UrbanEssentialHub.com</span>
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
              Trademarks, product names, logos, and brands mentioned are the property of their respective owners.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
