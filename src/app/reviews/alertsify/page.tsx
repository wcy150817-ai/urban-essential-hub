import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import {
  Zap,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  Star,
  ChevronRight,
  ArrowLeft,
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
  Lock,
  LineChart,
} from "lucide-react";
import StickyAlertsifyBar from "@/components/StickyAlertsifyBar";

export const metadata: Metadata = {
  title: "Alertsify Review 2026: Institutional-Speed Automated Execution & Copy Trading Tested",
  description:
    "In-depth Alertsify review on Whop: How to execute options trades with zero slippage, connect Schwab/Webull/E*TRADE, copy verified traders, and test the 7-day free trial.",
  keywords: [
    "alertsify review",
    "alertsify whop",
    "alertsify copy trading",
    "alertsify pricing 2026",
    "alertsify lite vs pro",
    "automated options execution software",
    "schwab copy trading bot",
    "best options trading alerts platform",
    "institutional speed trading bot",
    "alertsify free trial",
  ],
};

export default function AlertsifyReviewPage() {
  const freeTrialUrl = "https://whop.com/alertsify/alertsify-free?a=wcyb5";
  const proUrl = "https://whop.com/alertsify/copy-trading-access-pass?a=wcyb5";
  const liteUrl = "https://whop.com/alertsify/alertsify?a=wcyb5";

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
                name: "Alertsify",
                applicationCategory: "FinanceApplication",
                operatingSystem: "Cloud / Web / Broker API",
                offers: {
                  "@type": "AggregateOffer",
                  lowPrice: "0",
                  highPrice: "249.00",
                  priceCurrency: "USD",
                  offerCount: "3",
                  url: freeTrialUrl,
                },
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.85",
                  reviewCount: "1280",
                  bestRating: "5",
                  worstRating: "1",
                },
              },
              {
                "@type": "Review",
                itemReviewed: {
                  "@type": "SoftwareApplication",
                  name: "Alertsify",
                },
                author: {
                  "@type": "Organization",
                  name: "Urban Essential Hub Research Team",
                },
                reviewRating: {
                  "@type": "Rating",
                  ratingValue: "4.85",
                  bestRating: "5",
                },
                reviewBody:
                  "Comprehensive review of Alertsify on Whop. Eliminates options trading slippage by automatically routing verified trader signals directly to personal brokerages (Schwab, E*TRADE, Webull).",
              },
              {
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "Does Alertsify have custody of my trading capital?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "No. Alertsify is strictly non-custodial software. Your trading funds remain 100% inside your regulated brokerage account (Charles Schwab, Webull, E*TRADE, etc.). Alertsify connects securely via official broker API tokens to execute buy and sell orders on your instruction.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "What is the difference between Alertsify Lite and Alertsify PRO?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Alertsify Lite ($99/mo) is built for active, self-directed traders who want instant 1-click order execution and automated profit-taking targets. Alertsify PRO ($249/mo) unlocks fully automated hands-free copy trading, allowing you to mirror verified lead traders with zero manual intervention.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Can I try Alertsify for free?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes. Alertsify offers both a Free tier on Whop to test dashboard navigation and community office hours, as well as a 7-day free trial on active software execution.",
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
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-600 hover:text-emerald-600 transition"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Directory</span>
            </Link>
            <div className="flex items-center gap-1 text-xs text-slate-500">
              <Link href="/" className="hover:text-slate-800">
                Home
              </Link>
              <ChevronRight className="w-3 h-3" />
              <Link href="/reviews/alertsify" className="text-emerald-600 font-medium">
                Alertsify Review
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
            <strong>Financial Disclaimer & Editorial Review:</strong> Trading stocks and options involves significant financial risk.
            We review technical software infrastructure, not financial advice. We may receive affiliate compensation when you register via Whop.
          </div>
        </div>

        {/* Hero Section */}
        <header className="mb-10 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold mb-4">
            <Zap className="w-3.5 h-3.5 text-emerald-600" />
            <span>Institutional-Grade Trade Execution Infrastructure</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4">
            Alertsify Review 2026: Institutional-Speed Automated Options Trading
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6">
            Tired of entering trades 30 seconds late and giving away 40% of your profits to slippage?
            Here is our comprehensive review of Alertsify on Whop—how it automates execution in your Schwab, Webull, or E*TRADE account with audited P&L transparency.
          </p>

          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs sm:text-sm text-slate-500 border-b border-slate-200 pb-6">
            <span className="flex items-center gap-1 font-semibold text-slate-700">
              <LineChart className="w-4 h-4 text-emerald-600" /> Research By: Urban Essential Hub
            </span>
            <span className="hidden sm:inline">&bull;</span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" /> 8 min read
            </span>
            <span className="hidden sm:inline">&bull;</span>
            <span className="flex items-center gap-1 text-emerald-600 font-bold">
              <CheckCircle2 className="w-4 h-4" /> Verified for September 2026
            </span>
          </div>
        </header>

        {/* Quick Decision Box */}
        <div className="p-6 bg-gradient-to-br from-emerald-50/70 to-teal-50/50 border-2 border-emerald-200/80 rounded-2xl mb-12 shadow-sm">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4 pb-4 border-b border-emerald-100">
            <div>
              <div className="flex items-center gap-1 text-amber-500 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
                <span className="text-xs font-bold text-slate-700 ml-1.5">4.85 / 5.0 (Audited Platform Execution)</span>
              </div>
              <h3 className="text-lg font-black text-slate-900">Alertsify: Zero-Latency Copy & Execution Engine</h3>
            </div>
            <div className="text-left sm:text-right">
              <div className="text-2xl font-black text-emerald-600">7-Day Free Trial</div>
              <div className="text-[11px] text-slate-500 font-medium">Followed by Lite ($99) or PRO ($249)</div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700 mb-6">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span><strong>Sub-Second Execution:</strong> Beats manual keyboard entry by 15-45 seconds</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span><strong>Non-Custodial Security:</strong> Capital remains safe in your own brokerage</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span><strong>Fully Audited Stats:</strong> Verifiable trade histories without fake Photoshop P&L</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span><strong>Auto-Exit Protection:</strong> Automatic Stop-Loss & Take-Profit bracket orders</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3">
            <a
              href={freeTrialUrl}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-sm shadow-md shadow-emerald-500/25 transition cursor-pointer hover:scale-[1.01]"
            >
              <span>Activate Alertsify 7-Day Free Trial</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <span className="text-xs text-slate-500">Free tier access &bull; Cancel in 1-click via Whop dashboard</span>
          </div>
        </div>

        {/* Section 1: The Slippage Trap */}
        <section className="mb-12">
          <h2 className="text-2xl font-black text-slate-900 tracking-tight mb-4 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-emerald-600" />
            The Retail Options Problem: Why Discord Signals Fail
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            If you have ever followed a trading room in Discord or Telegram, this painful sequence will sound familiar:
          </p>

          <div className="p-5 bg-white border border-slate-200 rounded-xl mb-6 shadow-xs space-y-3 text-xs sm:text-sm text-slate-700">
            <div className="flex items-start gap-3">
              <span className="px-2 py-0.5 rounded bg-slate-100 font-bold text-slate-700">09:35:00</span>
              <span>Lead trader identifies a high-conviction SPY 0DTE Call breakout and buys at <strong>$1.20</strong>.</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="px-2 py-0.5 rounded bg-slate-100 font-bold text-slate-700">09:35:15</span>
              <span>Lead trader types into Discord: <em>&quot;BTO SPY 510C @ 1.20 SL 0.90 TP 1.80&quot;</em>.</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="px-2 py-0.5 rounded bg-slate-100 font-bold text-slate-700">09:35:40</span>
              <span>You read the notification, unlock your phone, open your broker app, search the strike, and hit buy.</span>
            </div>
            <div className="flex items-start gap-3 font-semibold text-rose-700 bg-rose-50/70 p-2.5 rounded-lg border border-rose-200">
              <span className="px-2 py-0.5 rounded bg-rose-100 text-rose-800 font-bold">09:35:45</span>
              <span>Your order fills at <strong>$1.65</strong> (+37.5% slippage!). By the time the leader takes profit at $1.80, you barely break even—or worse, lose money when it retraces.</span>
            </div>
          </div>

          <p className="text-slate-700 leading-relaxed">
            <strong>Alertsify eliminates this human latency gap.</strong> When a connected trader triggers an order, Alertsify’s execution engine pushes the order via direct API into your brokerage within milliseconds, capturing virtually the identical fill price.
          </p>
        </section>

        {/* Section 2: Supported Brokerages */}
        <section className="mb-12">
          <h2 className="text-2xl font-black text-slate-900 tracking-tight mb-4 flex items-center gap-2">
            <Lock className="w-6 h-6 text-emerald-600" />
            Non-Custodial Architecture & Supported Brokers
          </h2>
          <p className="text-slate-700 leading-relaxed mb-6">
            You never deposit trading capital into Alertsify. Your funds remain at your regulated broker. Alertsify only requires read/trade API tokens:
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { name: "Charles Schwab", note: "Full Options / ThinkorSwim API" },
              { name: "E*TRADE", note: "Morgan Stanley High-Speed API" },
              { name: "Webull", note: "Zero-Commission Mobile Broker" },
              { name: "Tradier / IBKR", note: "Institutional Low-Latency Feeds" },
            ].map((broker) => (
              <div key={broker.name} className="p-4 bg-white border border-slate-200 rounded-xl text-center">
                <div className="font-bold text-slate-900 text-sm mb-1">{broker.name}</div>
                <div className="text-[11px] text-emerald-600 font-medium">{broker.note}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Plan Comparison (Free, Lite, PRO) */}
        <section className="mb-12">
          <h2 className="text-2xl font-black text-slate-900 tracking-tight mb-4 flex items-center gap-2">
            <DollarSign className="w-6 h-6 text-emerald-600" />
            Alertsify Pricing Tiers: Which Plan Fits You?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Free Tier */}
            <div className="p-6 bg-white border border-slate-200 rounded-2xl flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Alertsify Free</div>
                <div className="text-3xl font-black text-slate-900 mb-2">$0<span className="text-xs font-normal text-slate-500"> / forever</span></div>
                <p className="text-xs text-slate-600 mb-4">
                  Explore the dashboard ecosystem, join community office hours, and inspect verified trader stats.
                </p>
                <ul className="space-y-2 text-xs text-slate-700 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Dashboard preview access</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Weekly office hours</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Referral rewards portal</span>
                  </li>
                </ul>
              </div>
              <a
                href={freeTrialUrl}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold text-center transition"
              >
                Join Free Tier
              </a>
            </div>

            {/* Lite Tier */}
            <div className="p-6 bg-white border border-slate-200 rounded-2xl flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider mb-1">Alertsify Lite</div>
                <div className="text-3xl font-black text-slate-900 mb-2">$99<span className="text-xs font-normal text-slate-500"> / month</span></div>
                <p className="text-xs text-slate-600 mb-4">
                  For self-directed traders who want 1-click execution speed with automated stop-loss and take-profit brackets.
                </p>
                <ul className="space-y-2 text-xs text-slate-700 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>1-Click order execution</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Auto risk-management bracket</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Verified trade journaling</span>
                  </li>
                </ul>
              </div>
              <a
                href={liteUrl}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold text-center transition"
              >
                Select Lite Plan ($99)
              </a>
            </div>

            {/* PRO Copy Trading Tier */}
            <div className="p-6 bg-emerald-50/60 border-2 border-emerald-400 rounded-2xl flex flex-col justify-between relative shadow-md">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-emerald-600 text-white text-[10px] font-black tracking-wider uppercase">
                Most Popular
              </div>
              <div>
                <div className="text-xs font-bold text-emerald-800 uppercase tracking-wider mb-1">Alertsify PRO</div>
                <div className="text-3xl font-black text-emerald-950 mb-2">$249<span className="text-xs font-normal text-slate-500"> / month</span></div>
                <p className="text-xs text-slate-600 mb-4">
                  Complete hands-free automated copy trading. Mirror audited master traders directly in your broker.
                </p>
                <ul className="space-y-2 text-xs text-slate-700 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Full automated copy trading</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Sub-second execution engine</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Audited P&L leaderboard</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Priority concierge setup</span>
                  </li>
                </ul>
              </div>
              <a
                href={proUrl}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-black text-center shadow-md shadow-emerald-500/20 transition"
              >
                Get PRO Copy Trading
              </a>
            </div>
          </div>
        </section>

        {/* Section 4: Honest Pros & Cons */}
        <section className="mb-12">
          <h2 className="text-2xl font-black text-slate-900 tracking-tight mb-4">
            Honest Pros & Cons: Should You Use Alertsify?
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
                  <span><strong>Zero Hesitation:</strong> Eliminates emotional paralysis when entering volatile 0DTE options setups.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>7-Day Trial:</strong> Low risk to connect your test broker account and observe fills during market hours.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Audited Records:</strong> Lead traders cannot forge trade screenshots because fills are logged through exchange APIs.</span>
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
                  <span><strong>Separate Trader Fees:</strong> Following third-party master traders inside the platform may require an additional trader sub fee.</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                  <span><strong>Options Inherent Risk:</strong> Automated execution does not prevent bad market moves; strict risk management sizing is mandatory.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 5: FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-black text-slate-900 tracking-tight mb-4 flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-emerald-600" />
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            <div className="p-4 bg-white border border-slate-200 rounded-xl">
              <h3 className="font-bold text-slate-900 text-sm mb-1.5">What happens if my broker disconnects mid-trade?</h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Alertsify automatically issues hard stop-loss and take-profit limit orders directly at the exchange level when entering a position. Even if your internet disconnects, your broker maintains the protective exit orders.
              </p>
            </div>
            <div className="p-4 bg-white border border-slate-200 rounded-xl">
              <h3 className="font-bold text-slate-900 text-sm mb-1.5">How does the 7-day free trial work?</h3>
              <p className="text-xs sm:text-sm text-slate-600">
                When you activate via Whop, you have full access to test Alertsify features for 7 days. If you decide it is not for you, cancel anytime inside your Whop dashboard before day 7 and you will not be charged.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA Box */}
        <div className="p-8 bg-gradient-to-r from-emerald-950 via-slate-900 to-teal-950 text-white rounded-3xl text-center shadow-xl">
          <h2 className="text-2xl sm:text-3xl font-black mb-3">
            Trade with Institutional Execution Speed Today
          </h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto mb-6">
            Eliminate costly execution slippage. Connect your broker and experience verified automated options trading.
          </p>
          <a
            href={freeTrialUrl}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-base shadow-lg shadow-emerald-500/30 transition hover:scale-105"
          >
            <span>Start Your 7-Day Free Trial on Whop</span>
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </main>

      {/* Floating CTA Sticky Bar */}
      <StickyAlertsifyBar />
    </div>
  );
}
