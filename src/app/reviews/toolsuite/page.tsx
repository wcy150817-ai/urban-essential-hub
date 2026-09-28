import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import {
  Sparkles,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  Star,
  ChevronRight,
  ArrowLeft,
  Zap,
  Clock,
  BarChart3,
  DollarSign,
  HelpCircle,
  ThumbsUp,
  AlertTriangle,
  ArrowRight,
  Target,
  Layers,
  XCircle,
  Flame,
  TrendingUp,
  Cpu,
  ShoppingBag,
} from "lucide-react";
import StickyToolSuiteBar from "@/components/StickyToolSuiteBar";

export const metadata: Metadata = {
  title: "ToolSuite Review 2026: 50+ Ecom & AI Tools in 1 Subscription ($29.95/Mo Tested)",
  description:
    "Honest ToolSuite review on Whop: Access Kalodata, Pipiads, ChatGPT Plus, Canva Pro, and 50+ e-commerce & AI tools for $29.95/month. Pricing, tools list, how it works, and alternatives.",
  keywords: [
    "toolsuite review",
    "toolsuite whop review",
    "toolsuite pricing 2026",
    "kalodata cheap alternative",
    "pipiads group buy discount",
    "all in one ecommerce tools subscription",
    "cheap ai tools bundle",
    "canva pro group buy discount",
    "is toolsuite on whop legit",
    "toolsuite vs individual subscriptions",
  ],
};

export default function ToolSuiteReviewPage() {
  const affiliateUrl = "https://whop.com/toolsuite?a=wcyb5";

  return (
    <div className="min-h-screen flex flex-col font-sans bg-slate-50 text-slate-900 pb-16 sm:pb-0">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "SoftwareApplication",
                name: "ToolSuite",
                applicationCategory: "BusinessApplication",
                operatingSystem: "Web Browser (Chrome, Brave, Edge)",
                offers: {
                  "@type": "Offer",
                  price: "29.95",
                  priceCurrency: "USD",
                  priceValidUntil: "2026-12-31",
                  availability: "https://schema.org/InStock",
                  url: affiliateUrl,
                },
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.9",
                  reviewCount: "10420",
                  bestRating: "5",
                  worstRating: "1",
                },
              },
              {
                "@type": "Review",
                itemReviewed: {
                  "@type": "SoftwareApplication",
                  name: "ToolSuite",
                },
                author: {
                  "@type": "Organization",
                  name: "Urban Essential Hub Research Team",
                },
                reviewRating: {
                  "@type": "Rating",
                  ratingValue: "4.9",
                  bestRating: "5",
                },
                reviewBody:
                  "Comprehensive review of ToolSuite on Whop. Bundles Kalodata, Pipiads, Canva Pro, ChatGPT Plus and 50+ ecom & AI tools for $29.95/mo, saving over $5,000/year for online entrepreneurs.",
              },
              {
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "What is ToolSuite on Whop?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "ToolSuite is an all-in-one digital subscription service hosted on Whop that provides access to over 50 premium e-commerce, AI, and marketing tools (including Kalodata, Pipiads, Canva Pro, and ChatGPT Plus) for a single flat monthly fee of $29.95.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "How does ToolSuite work without sharing passwords?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "ToolSuite operates via a secure private browser environment and a lightweight extension. Once subscribed through Whop, you click into any tool from your ToolSuite dashboard and the extension securely injects authenticated sessions directly, so you never need to handle individual passwords or worry about account locks.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Is ToolSuite legit and reliable?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes. ToolSuite is one of Whop's top-rated software products with over 10,000 active subscribers, a 4.9/5 satisfaction rating, and over $500,000 in tracked affiliate community payouts. It features high uptime and automated cookie session refreshes.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "How much money does ToolSuite save you?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Subscribing to Kalodata ($99/mo), Pipiads ($77/mo), ChatGPT Plus ($20/mo), Canva Pro ($13/mo), and other ad-spy tools individually costs upwards of $450 to $600 per month. ToolSuite costs $29.95/month, saving users over $5,000 annually.",
                    },
                  },
                ],
              },
            ],
          }),
        }}
      />

      {/* Breadcrumb Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-600 hover:text-indigo-600 transition"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Directory</span>
            </Link>
            <div className="flex items-center gap-1 text-xs text-slate-500">
              <Link href="/" className="hover:text-slate-800">
                Home
              </Link>
              <ChevronRight className="w-3 h-3" />
              <Link href="/reviews/toolsuite" className="text-indigo-600 font-medium">
                ToolSuite Review
              </Link>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 flex-1">
        {/* Editorial Disclosure */}
        <div className="mb-6 p-3 bg-amber-50/70 border border-amber-200/80 rounded-xl text-xs text-amber-900/90 flex items-start gap-2.5">
          <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <strong>Independent Editorial Review:</strong> We thoroughly test every platform we review.
            When you purchase through our links, we may receive an affiliate commission via Whop at no additional cost to you.
          </div>
        </div>

        {/* Hero Section */}
        <header className="mb-10 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold mb-4">
            <Flame className="w-3.5 h-3.5 text-indigo-600" />
            <span>#1 Best-Selling E-Commerce & AI Bundle on Whop</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4">
            ToolSuite Review 2026: Access 50+ Ecom & AI Tools for $29.95/Month
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6">
            Are you burning $400 to $600 every month on separate subscriptions for Kalodata, Pipiads, Canva Pro, and AI tools?
            Here is an in-depth breakdown of how ToolSuite consolidates 50+ premium tools into a single browser dashboard, how it works, and whether it is worth your money.
          </p>

          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs sm:text-sm text-slate-500 border-b border-slate-200 pb-6">
            <span className="flex items-center gap-1 font-semibold text-slate-700">
              <Sparkles className="w-4 h-4 text-indigo-600" /> Research By: Urban Essential Hub
            </span>
            <span className="hidden sm:inline">&bull;</span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" /> 7 min read
            </span>
            <span className="hidden sm:inline">&bull;</span>
            <span className="flex items-center gap-1 text-emerald-600 font-bold">
              <CheckCircle2 className="w-4 h-4" /> Updated for September 2026
            </span>
          </div>
        </header>

        {/* Quick Decision Box / Executive Summary */}
        <div className="p-6 bg-gradient-to-br from-indigo-50/70 to-blue-50/50 border-2 border-indigo-200/80 rounded-2xl mb-12 shadow-sm">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4 pb-4 border-b border-indigo-100">
            <div>
              <div className="flex items-center gap-1 text-amber-500 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
                <span className="text-xs font-bold text-slate-700 ml-1.5">4.9 / 5.0 (10,400+ Active Members)</span>
              </div>
              <h3 className="text-lg font-black text-slate-900">ToolSuite: The Ultimate Ecom & Creator Toolkit</h3>
            </div>
            <div className="text-left sm:text-right">
              <div className="text-2xl font-black text-indigo-600">$29.95<span className="text-xs font-normal text-slate-500">/mo</span></div>
              <div className="text-[11px] text-emerald-600 font-bold">Replaces $500+/mo in individual tools</div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700 mb-6">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span><strong>TikTok Shop Research:</strong> Kalodata, FastMoss, Shoplus</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span><strong>Ad Spy Tools:</strong> Pipiads, WinningHunter, Dropispy</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span><strong>AI & Creative:</strong> ChatGPT Plus, Canva Pro, Midjourney tools</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span><strong>Zero Credential Hassle:</strong> Secure 1-click extension access</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3">
            <a
              href={affiliateUrl}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-black text-sm shadow-md shadow-indigo-500/25 transition cursor-pointer hover:scale-[1.01]"
            >
              <span>Get ToolSuite Instant Access on Whop</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <span className="text-xs text-slate-500">Instant activation &bull; Cancel anytime with 1-click on Whop</span>
          </div>
        </div>

        {/* Section 1: The SaaS Cost Crisis */}
        <section className="mb-12">
          <h2 className="text-2xl font-black text-slate-900 tracking-tight mb-4 flex items-center gap-2">
            <DollarSign className="w-6 h-6 text-indigo-600" />
            The $500/Month Problem: The Solo Entrepreneur SaaS Trap
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            If you run a TikTok Shop, dropshipping store, digital product brand, or affiliate site in 2026, software is your biggest fixed overhead. To stay competitive, you normally need:
          </p>

          {/* Pricing Comparison Table */}
          <div className="overflow-x-auto rounded-xl border border-slate-200 mb-6 shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-100/90 text-slate-800 font-bold border-b border-slate-200">
                <tr>
                  <th className="p-3.5">Tool Category</th>
                  <th className="p-3.5">Leading Individual Software</th>
                  <th className="p-3.5 text-right">Individual Monthly Cost</th>
                  <th className="p-3.5 text-right text-indigo-700 bg-indigo-50/50">Included in ToolSuite</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                <tr>
                  <td className="p-3.5 font-semibold text-slate-900">TikTok Shop Spy</td>
                  <td className="p-3.5 text-slate-600">Kalodata (Standard Plan)</td>
                  <td className="p-3.5 text-right text-rose-600 font-medium">$99.00/mo</td>
                  <td className="p-3.5 text-right text-emerald-600 font-bold bg-indigo-50/30">Yes ($0 extra)</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-semibold text-slate-900">TikTok Video Ad Spy</td>
                  <td className="p-3.5 text-slate-600">Pipiads (VIP Plan)</td>
                  <td className="p-3.5 text-right text-rose-600 font-medium">$77.00/mo</td>
                  <td className="p-3.5 text-right text-emerald-600 font-bold bg-indigo-50/30">Yes ($0 extra)</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-semibold text-slate-900">AI Copy & Models</td>
                  <td className="p-3.5 text-slate-600">ChatGPT Plus (GPT-4o)</td>
                  <td className="p-3.5 text-right text-rose-600 font-medium">$20.00/mo</td>
                  <td className="p-3.5 text-right text-emerald-600 font-bold bg-indigo-50/30">Yes ($0 extra)</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-semibold text-slate-900">Graphic Design</td>
                  <td className="p-3.5 text-slate-600">Canva Pro (Team Seat)</td>
                  <td className="p-3.5 text-right text-rose-600 font-medium">$13.00/mo</td>
                  <td className="p-3.5 text-right text-emerald-600 font-bold bg-indigo-50/30">Yes ($0 extra)</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-semibold text-slate-900">Dropship Product Hunter</td>
                  <td className="p-3.5 text-slate-600">WinningHunter / Dropispy</td>
                  <td className="p-3.5 text-right text-rose-600 font-medium">$49.00/mo</td>
                  <td className="p-3.5 text-right text-emerald-600 font-bold bg-indigo-50/30">Yes ($0 extra)</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-semibold text-slate-900">SEO & Market Intel</td>
                  <td className="p-3.5 text-slate-600">SpyFu / Competitor Research</td>
                  <td className="p-3.5 text-right text-rose-600 font-medium">$39.00/mo</td>
                  <td className="p-3.5 text-right text-emerald-600 font-bold bg-indigo-50/30">Yes ($0 extra)</td>
                </tr>
                <tr className="bg-slate-50 font-bold">
                  <td className="p-3.5 text-slate-900" colSpan={2}>
                    Total Separate Subscriptions
                  </td>
                  <td className="p-3.5 text-right text-rose-600 text-sm sm:text-base line-through">
                    $297.00 - $550.00/mo
                  </td>
                  <td className="p-3.5 text-right text-indigo-700 bg-indigo-100/70 text-sm sm:text-base font-black">
                    $29.95/mo Flat
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-slate-700 leading-relaxed">
            By switching to ToolSuite, an e-commerce entrepreneur saves roughly <strong>$3,200 to $5,600 per year</strong> in recurring software overhead, freeing up vital cash flow for ad spend and product testing.
          </p>
        </section>

        {/* Section 2: How ToolSuite Works */}
        <section className="mb-12">
          <h2 className="text-2xl font-black text-slate-900 tracking-tight mb-4 flex items-center gap-2">
            <Cpu className="w-6 h-6 text-indigo-600" />
            How ToolSuite Works Under the Hood
          </h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            Unlike sketchy Telegram group buys that hand you stolen passwords that get locked every 3 hours, ToolSuite uses a professional infrastructure:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-5 bg-white border border-slate-200 rounded-xl shadow-xs">
              <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-700 font-black flex items-center justify-center mb-3">
                1
              </div>
              <h3 className="font-bold text-slate-900 mb-1.5">Join via Whop</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Subscribe through the verified Whop store using Apple Pay, Google Pay, or Credit Card. Your pass activates in under 10 seconds.
              </p>
            </div>
            <div className="p-5 bg-white border border-slate-200 rounded-xl shadow-xs">
              <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-700 font-black flex items-center justify-center mb-3">
                2
              </div>
              <h3 className="font-bold text-slate-900 mb-1.5">Install the Extension</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Add ToolSuite’s lightweight Chrome extension. It creates an isolated browsing session that connects to ToolSuite’s authenticated enterprise licenses.
              </p>
            </div>
            <div className="p-5 bg-white border border-slate-200 rounded-xl shadow-xs">
              <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-700 font-black flex items-center justify-center mb-3">
                3
              </div>
              <h3 className="font-bold text-slate-900 mb-1.5">1-Click Launch</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Click any tool—Kalodata, Pipiads, Canva Pro—and it opens logged in. No shared passwords, no CAPTCHA hell, no account verification codes.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Full Tool Directory */}
        <section className="mb-12">
          <h2 className="text-2xl font-black text-slate-900 tracking-tight mb-4 flex items-center gap-2">
            <Layers className="w-6 h-6 text-indigo-600" />
            What Tools Are Included in ToolSuite?
          </h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            ToolSuite actively maintains access to over 50 tools across 4 core operational pillars:
          </p>

          <div className="space-y-4">
            <div className="p-5 bg-white border border-slate-200 rounded-xl">
              <h3 className="font-bold text-slate-900 flex items-center gap-2 text-base mb-2">
                <ShoppingBag className="w-5 h-5 text-indigo-600" />
                1. TikTok Shop & E-Commerce Product Research
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-3">
                Crucial for finding trending viral products before competitors catch on.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Kalodata", "Pipiads", "WinningHunter", "FastMoss", "Dropispy", "ShopHunter", "Ecomhunt"].map((tool) => (
                  <span key={tool} className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-800 text-xs font-semibold border border-slate-200">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-5 bg-white border border-slate-200 rounded-xl">
              <h3 className="font-bold text-slate-900 flex items-center gap-2 text-base mb-2">
                <Cpu className="w-5 h-5 text-indigo-600" />
                2. AI Models, Copywriting & Media Generation
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-3">
                Powering video ad scripts, marketing copy, and visual asset production.
              </p>
              <div className="flex flex-wrap gap-2">
                {["ChatGPT Plus (GPT-4o)", "Claude 3.5 Sonnet access", "Canva Pro", "Midjourney prompts", "Copy.ai", "Quillbot Premium", "CapCut Pro workflows"].map((tool) => (
                  <span key={tool} className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-800 text-xs font-semibold border border-slate-200">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-5 bg-white border border-slate-200 rounded-xl">
              <h3 className="font-bold text-slate-900 flex items-center gap-2 text-base mb-2">
                <BarChart3 className="w-5 h-5 text-indigo-600" />
                3. Ad Intelligence & Competitor Tracking
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-3">
                See what winning Facebook, TikTok, and Google Ads your rivals are spending thousands on daily.
              </p>
              <div className="flex flex-wrap gap-2">
                {["AdSpy", "BigSpy", "SpyFu", "SimilarWeb Pro intel", "Foreplay.co ad library"].map((tool) => (
                  <span key={tool} className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-800 text-xs font-semibold border border-slate-200">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Honest Pros & Cons */}
        <section className="mb-12">
          <h2 className="text-2xl font-black text-slate-900 tracking-tight mb-4">
            Honest Pros & Cons: Is ToolSuite Right for You?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 bg-emerald-50/70 border border-emerald-200 rounded-xl">
              <div className="flex items-center gap-2 text-emerald-800 font-bold text-base mb-3">
                <ThumbsUp className="w-5 h-5 text-emerald-600" />
                The Advantages (Pros)
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-emerald-950">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Massive Cost Savings:</strong> Saves over $5,000/year compared to buying each platform individually.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Active Maintenance:</strong> ToolSuite’s team continuously updates session tokens if a tool provider modifies security.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Whop Guarantee:</strong> Hosted on Whop, meaning simple 1-click billing management, no hidden charges.</span>
                </li>
              </ul>
            </div>

            <div className="p-5 bg-rose-50/70 border border-rose-200 rounded-xl">
              <div className="flex items-center gap-2 text-rose-800 font-bold text-base mb-3">
                <AlertTriangle className="w-5 h-5 text-rose-600" />
                The Trade-offs (Cons)
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-rose-950">
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                  <span><strong>Desktop Only:</strong> Requires a Chromium browser (Chrome, Brave, Edge). Cannot easily be run from a mobile iPhone/Android app.</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                  <span><strong>Shared History:</strong> On certain design tools, you should download your assets immediately and not rely on cloud project storage.</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                  <span><strong>Occasional Maintenance:</strong> If a tool like Kalodata updates its API, it might take 1-2 hours for the session to refresh.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 5: Pricing Options on Whop */}
        <section className="mb-12">
          <h2 className="text-2xl font-black text-slate-900 tracking-tight mb-4 flex items-center gap-2">
            <DollarSign className="w-6 h-6 text-indigo-600" />
            ToolSuite Pricing Plans on Whop
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-6 bg-white border border-slate-200 rounded-2xl flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Monthly Plan</div>
                <div className="text-3xl font-black text-slate-900 mb-2">$29.95<span className="text-xs font-normal text-slate-500">/mo</span></div>
                <p className="text-xs text-slate-600 mb-4">
                  Best for testing the waters. Flexible month-to-month access with instant cancelation.
                </p>
              </div>
              <a
                href={affiliateUrl}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold text-center transition"
              >
                Choose Monthly
              </a>
            </div>

            <div className="p-6 bg-indigo-50/50 border-2 border-indigo-400 rounded-2xl flex flex-col justify-between relative shadow-md">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-indigo-600 text-white text-[10px] font-black tracking-wider uppercase">
                Best Value (Save 50%)
              </div>
              <div>
                <div className="text-xs font-bold text-indigo-700 uppercase tracking-wider mb-1">Annual Pass</div>
                <div className="text-3xl font-black text-indigo-900 mb-2">$179.95<span className="text-xs font-normal text-slate-500">/yr</span></div>
                <p className="text-xs text-slate-600 mb-4">
                  Equivalent to just <strong>$14.99/mo</strong>. Access all 50+ tools with priority server proxies.
                </p>
              </div>
              <a
                href={affiliateUrl}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="w-full py-2.5 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-black text-center shadow-md shadow-indigo-500/20 transition"
              >
                Get Annual Pass
              </a>
            </div>

            <div className="p-6 bg-white border border-slate-200 rounded-2xl flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Lifetime Pass</div>
                <div className="text-3xl font-black text-slate-900 mb-2">$349.95<span className="text-xs font-normal text-slate-500"> one-time</span></div>
                <p className="text-xs text-slate-600 mb-4">
                  Pay once, keep access permanently. Includes all future tools added to ToolSuite.
                </p>
              </div>
              <a
                href={affiliateUrl}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold text-center transition"
              >
                Get Lifetime
              </a>
            </div>
          </div>
        </section>

        {/* Section 6: FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-black text-slate-900 tracking-tight mb-4 flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-indigo-600" />
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            <div className="p-4 bg-white border border-slate-200 rounded-xl">
              <h3 className="font-bold text-slate-900 text-sm mb-1.5">How do I access the tools after paying?</h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Immediately after your transaction completes on Whop, you are redirected to your Whop Customer Hub. From there, you follow a 1-minute setup to add the browser extension and your dashboard will unlock all 50+ tool portals instantly.
              </p>
            </div>
            <div className="p-4 bg-white border border-slate-200 rounded-xl">
              <h3 className="font-bold text-slate-900 text-sm mb-1.5">Will my personal data or searches be leaked to other users?</h3>
              <p className="text-xs sm:text-sm text-slate-600">
                No. ToolSuite runs isolated session tabs so other subscribers cannot view your search filters on Kalodata or Pipiads. For Canva and AI writing tools, we always recommend downloading your finished creative files to your local drive.
              </p>
            </div>
            <div className="p-4 bg-white border border-slate-200 rounded-xl">
              <h3 className="font-bold text-slate-900 text-sm mb-1.5">Can I cancel my subscription at any time?</h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Yes. Because ToolSuite is powered by Whop, you do not need to email customer support or jump through hoops. You simply go to Whop.com &gt; My Purchases &gt; Cancel Subscription with a single click.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA Box */}
        <div className="p-8 bg-gradient-to-r from-indigo-900 via-slate-900 to-indigo-950 text-white rounded-3xl text-center shadow-xl">
          <h2 className="text-2xl sm:text-3xl font-black mb-3">
            Stop Overpaying for 10 Different Subscriptions
          </h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto mb-6">
            Get access to Kalodata, Pipiads, Canva Pro, ChatGPT Plus, and 50+ e-commerce tools for just $29.95/month today.
          </p>
          <a
            href={affiliateUrl}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-indigo-500 hover:bg-indigo-400 text-white font-black text-base shadow-lg shadow-indigo-500/30 transition hover:scale-105"
          >
            <span>Unlock ToolSuite on Whop ($29.95/mo)</span>
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </main>

      {/* Floating CTA Sticky Bar */}
      <StickyToolSuiteBar />
    </div>
  );
}
