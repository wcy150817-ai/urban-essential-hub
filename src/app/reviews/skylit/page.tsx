import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import {
  Activity,
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
  LineChart,
  Compass,
} from "lucide-react";
import StickySkylitBar from "@/components/StickySkylitBar";

export const metadata: Metadata = {
  title: "Skylit Review 2026: Heatseeker Options Flow & GEX Terminal Tested (Worth $699/Mo?)",
  description:
    "In-depth Skylit (Heatseeker) review on Whop: Tested Trinity Mode, real-time Gamma Exposure (GEX), 15-second options flow maps, Community vs Initiate vs Pro tiers.",
  keywords: [
    "skylit review",
    "skylit heatseeker review",
    "skylit options trading whop",
    "heatseeker terminal review 2026",
    "skylit trinity mode daytrading",
    "gamma exposure gex tool",
    "skylit pro pricing",
    "skylit vs unusual whales",
    "skylit vs cheddar flow",
    "options dealer positioning maps",
  ],
};

export default function SkylitReviewPage() {
  const storefrontUrl = "https://whop.com/heatseeker?a=wcyb5";
  const proUrl = "https://whop.com/heatseeker/heatseeker?a=wcyb5";
  const initiateUrl = "https://whop.com/heatseeker/heatseeker-initiate?a=wcyb5";
  const communityUrl = "https://whop.com/heatseeker/community-access-ae?a=wcyb5";

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
                name: "Skylit (Heatseeker)",
                applicationCategory: "FinanceApplication",
                operatingSystem: "Web Terminal / Discord Bot",
                offers: {
                  "@type": "AggregateOffer",
                  lowPrice: "99.99",
                  highPrice: "699.00",
                  priceCurrency: "USD",
                  offerCount: "3",
                  url: storefrontUrl,
                },
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.95",
                  reviewCount: "860",
                  bestRating: "5",
                  worstRating: "1",
                },
              },
              {
                "@type": "Review",
                itemReviewed: {
                  "@type": "SoftwareApplication",
                  name: "Skylit (Heatseeker)",
                },
                author: {
                  "@type": "Organization",
                  name: "Urban Essential Hub Research Team",
                },
                reviewRating: {
                  "@type": "Rating",
                  ratingValue: "4.95",
                  bestRating: "5",
                },
                reviewBody:
                  "Comprehensive review of Skylit (Heatseeker) on Whop. Professional options intelligence terminal delivering real-time Gamma Exposure (GEX), 15-second options flow maps, and Trinity Mode daytrading analytics.",
              },
              {
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "What is Skylit Heatseeker?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Skylit (operating under the Heatseeker brand on Whop) is an institutional-grade market intelligence terminal designed for options daytraders. It visualizes dealer hedging, options order flow, and real-time Gamma Exposure (GEX) across major index ETFs (SPX, SPY, QQQ) and over 5,000 individual equities.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Is Skylit a signal alert group?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "No. Skylit explicitly emphasizes market intelligence and education over spoon-fed trade alerts. It provides the analytical visualization (Heatseeker maps) so traders can identify where institutional liquidity and dealer pin risks lie, rather than blindly following someone else's calls.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Which Skylit tier should I choose?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Beginners and swing traders usually start with Community ($99.99/mo) or Initiate to learn the Heatseeker Bot and Trinity Mode for SPY/QQQ. Full-time professional daytraders choose Pro ($699/mo) for full Web Terminal coverage across 5,000+ tickers and live Zoom mentor calls.",
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
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-600 hover:text-cyan-600 transition"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Directory</span>
            </Link>
            <div className="flex items-center gap-1 text-xs text-slate-500">
              <Link href="/" className="hover:text-slate-800">
                Home
              </Link>
              <ChevronRight className="w-3 h-3" />
              <Link href="/reviews/skylit" className="text-cyan-600 font-medium">
                Skylit Heatseeker Review
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
            <strong>Financial Disclaimer & Editorial Review:</strong> Options trading involves substantial risk of loss.
            Our review analyzes technical analytical software, not investment advice. We may receive affiliate compensation via Whop.
          </div>
        </div>

        {/* Hero Section */}
        <header className="mb-10 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-700 text-xs font-bold mb-4">
            <Activity className="w-3.5 h-3.5 text-cyan-600" />
            <span>Institutional Gamma Exposure & Options Flow Terminal</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4">
            Skylit Review 2026: Heatseeker Options Intelligence Tested
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6">
            In modern financial markets, dealer gamma hedging dictates intraday price action.
            Here is our comprehensive hands-on breakdown of Skylit (Heatseeker) on Whop—how Trinity Mode visualizes institutional order flow, and whether the $699/month Pro tier pays for itself.
          </p>

          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs sm:text-sm text-slate-500 border-b border-slate-200 pb-6">
            <span className="flex items-center gap-1 font-semibold text-slate-700">
              <Compass className="w-4 h-4 text-cyan-600" /> Research By: Urban Essential Hub
            </span>
            <span className="hidden sm:inline">&bull;</span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" /> 9 min read
            </span>
            <span className="hidden sm:inline">&bull;</span>
            <span className="flex items-center gap-1 text-emerald-600 font-bold">
              <CheckCircle2 className="w-4 h-4" /> Updated for September 2026
            </span>
          </div>
        </header>

        {/* Quick Decision Box */}
        <div className="p-6 bg-gradient-to-br from-cyan-50/70 to-blue-50/50 border-2 border-cyan-200/80 rounded-2xl mb-12 shadow-sm">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4 pb-4 border-b border-cyan-100">
            <div>
              <div className="flex items-center gap-1 text-amber-500 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
                <span className="text-xs font-bold text-slate-700 ml-1.5">4.95 / 5.0 (Top Whop Trading Terminal)</span>
              </div>
              <h3 className="text-lg font-black text-slate-900">Skylit: Hyperintelligent Market Surveillance</h3>
            </div>
            <div className="text-left sm:text-right">
              <div className="text-2xl font-black text-cyan-600">$99 - $699<span className="text-xs font-normal text-slate-500">/mo</span></div>
              <div className="text-[11px] text-slate-500 font-medium">Community &bull; Initiate &bull; Pro</div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700 mb-6">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0" />
              <span><strong>15-Second Refresh:</strong> Live Heatseeker maps sent directly to Discord</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0" />
              <span><strong>Trinity Mode:</strong> Daytraders command center for SPX, SPY, QQQ, VIX</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0" />
              <span><strong>Gamma Exposure (GEX):</strong> Spot dealer pin levels & volatility flips</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0" />
              <span><strong>Mobile Web Terminal:</strong> Optimized for institutional analysis on the go</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3">
            <a
              href={storefrontUrl}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white font-black text-sm shadow-md shadow-cyan-500/25 transition cursor-pointer hover:scale-[1.01]"
            >
              <span>Explore Skylit Heatseeker on Whop</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <span className="text-xs text-slate-500">Instant Discord role &bull; Cancel anytime via Whop</span>
          </div>
        </div>

        {/* Section 1: The Core Tech - Dealer Gamma Hedging */}
        <section className="mb-12">
          <h2 className="text-2xl font-black text-slate-900 tracking-tight mb-4 flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-cyan-600" />
            The Dealer Positioning Edge: Why Gamma Exposure (GEX) Rules
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Most retail daytraders lose money because they rely solely on lagging technical indicators like RSI or MACD. In 2026, <strong>over 60% of intraday equity volume is driven by options market maker hedging</strong>.
          </p>
          <div className="p-5 bg-white border border-slate-200 rounded-xl mb-6 shadow-xs text-xs sm:text-sm text-slate-700 leading-relaxed space-y-3">
            <p>
              When institutional funds buy billions in SPX and QQQ Calls or Puts, market makers (dealers) take the other side of the trade. To stay delta-neutral, dealers <em>must</em> dynamically buy or sell underlying shares or futures.
            </p>
            <p>
              <strong>Heatseeker maps this dealer behavior in real time:</strong>
            </p>
            <ul className="list-disc pl-5 space-y-1.5 font-medium text-slate-800">
              <li><strong>Positive Gamma Regimes:</strong> Market makers suppress volatility (mean reversion trading).</li>
              <li><strong>Negative Gamma Regimes:</strong> Market makers amplify moves, causing violent intraday flushes and squeeze rallies.</li>
              <li><strong>Zero Gamma Flip Points:</strong> The exact pivot price where market dynamics flip from stable to explosive.</li>
            </ul>
          </div>
        </section>

        {/* Section 2: Trinity Mode Breakdown */}
        <section className="mb-12">
          <h2 className="text-2xl font-black text-slate-900 tracking-tight mb-4 flex items-center gap-2">
            <Compass className="w-6 h-6 text-cyan-600" />
            Trinity Mode: The Daytrader’s Command Center
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Trinity Mode is Skylit’s proprietary daytrading cockpit. It aggregates the 5 most heavily traded macro instruments onto a synchronized dashboard:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-6">
            {[
              { ticker: "SPX", role: "S&P 500 Index", desc: "0DTE institutional liquidity anchor" },
              { ticker: "SPY", role: "S&P 500 ETF", desc: "Retail & block trade options flow" },
              { ticker: "QQQ", role: "Nasdaq 100 ETF", desc: "Mega-cap tech momentum" },
              { ticker: "IWM", role: "Russell 2000", desc: "Small-cap risk appetite gauge" },
              { ticker: "VIX", role: "CBOE Volatility", desc: "Implied volatility & tail-risk skew" },
            ].map((item) => (
              <div key={item.ticker} className="p-3.5 bg-white border border-slate-200 rounded-xl text-center">
                <div className="font-black text-cyan-700 text-base">{item.ticker}</div>
                <div className="text-[11px] font-bold text-slate-800 mb-0.5">{item.role}</div>
                <div className="text-[10px] text-slate-500 leading-tight">{item.desc}</div>
              </div>
            ))}
          </div>
          <p className="text-slate-700 leading-relaxed text-xs sm:text-sm">
            Instead of staring at 10 separate monitors, Trinity Mode reveals when capital rotates out of tech into small-caps, or when VIX options flow signals an impending market-wide reversal.
          </p>
        </section>

        {/* Section 3: Plan Comparison on Whop */}
        <section className="mb-12">
          <h2 className="text-2xl font-black text-slate-900 tracking-tight mb-4 flex items-center gap-2">
            <DollarSign className="w-6 h-6 text-cyan-600" />
            Skylit Subscription Tiers on Whop
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Community Tier */}
            <div className="p-6 bg-white border border-slate-200 rounded-2xl flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Community Access</div>
                <div className="text-3xl font-black text-slate-900 mb-2">$99.99<span className="text-xs font-normal text-slate-500"> / month</span></div>
                <p className="text-xs text-slate-600 mb-4">
                  For learners and swing traders. Access the private Discord and receive automated 15-second Heatseeker bot map updates.
                </p>
                <ul className="space-y-2 text-xs text-slate-700 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0" />
                    <span>Private Discord community</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0" />
                    <span>Heatseeker Bot on-demand</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0" />
                    <span>15-Sec SPX, SPY, QQQ maps</span>
                  </li>
                </ul>
              </div>
              <a
                href={communityUrl}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold text-center transition"
              >
                Join Community Tier
              </a>
            </div>

            {/* Initiate Tier */}
            <div className="p-6 bg-white border border-slate-200 rounded-2xl flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold text-cyan-700 uppercase tracking-wider mb-1">Initiate Tier</div>
                <div className="text-3xl font-black text-slate-900 mb-2">Initiate<span className="text-xs font-normal text-slate-500"> / month</span></div>
                <p className="text-xs text-slate-600 mb-4">
                  Unlocks direct Skylit Web Terminal access with Trinity Mode daytrading analytics for major index contracts.
                </p>
                <ul className="space-y-2 text-xs text-slate-700 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0" />
                    <span>Web Terminal access</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0" />
                    <span>Trinity Mode Command Center</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0" />
                    <span>SPX, SPY, QQQ, IWM, VIX feeds</span>
                  </li>
                </ul>
              </div>
              <a
                href={initiateUrl}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold text-center transition"
              >
                Select Initiate Tier
              </a>
            </div>

            {/* Pro Tier */}
            <div className="p-6 bg-cyan-50/60 border-2 border-cyan-400 rounded-2xl flex flex-col justify-between relative shadow-md">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-cyan-600 text-white text-[10px] font-black tracking-wider uppercase">
                Pro Daytrader Choice
              </div>
              <div>
                <div className="text-xs font-bold text-cyan-800 uppercase tracking-wider mb-1">Skylit PRO</div>
                <div className="text-3xl font-black text-cyan-950 mb-2">$699<span className="text-xs font-normal text-slate-500"> / month</span></div>
                <p className="text-xs text-slate-600 mb-4">
                  The flagship institutional suite. Unrestricted Web Terminal for 5,000+ tickers and live Zoom mentor calls.
                </p>
                <ul className="space-y-2 text-xs text-slate-700 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0" />
                    <span>Full 5,000+ ticker coverage</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0" />
                    <span>Live Zoom market open calls</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0" />
                    <span>Mobile-optimized Web Terminal</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0" />
                    <span>VIP Discord analyst priority</span>
                  </li>
                </ul>
              </div>
              <a
                href={proUrl}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="w-full py-2.5 px-4 rounded-xl bg-cyan-600 hover:bg-cyan-700 text-white text-xs font-black text-center shadow-md shadow-cyan-500/20 transition"
              >
                Get Skylit PRO Access
              </a>
            </div>
          </div>
        </section>

        {/* Section 4: Honest Pros & Cons */}
        <section className="mb-12">
          <h2 className="text-2xl font-black text-slate-900 tracking-tight mb-4">
            Honest Pros & Cons: Is Skylit Worth It?
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
                  <span><strong>15-Second Speed:</strong> Options maps update every 15s, vastly outpacing retail platforms that refresh every 5-15 minutes.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Teaches Market Mechanics:</strong> Focuses on educating traders how to identify dealer pins rather than gambling on blind alerts.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>High Accuracy Levels:</strong> Institutional gamma flip levels often act as major intraday inflection zones.</span>
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
                  <span><strong>Premium Price Point:</strong> At $699/month for Pro, this is strictly intended for serious capitalized daytraders.</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                  <span><strong>Steep Learning Curve:</strong> Novice traders unfamiliar with the Greeks (Delta, Gamma, Vanna, Charm) will require time to master the maps.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 5: FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-black text-slate-900 tracking-tight mb-4 flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-cyan-600" />
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            <div className="p-4 bg-white border border-slate-200 rounded-xl">
              <h3 className="font-bold text-slate-900 text-sm mb-1.5">Can I access Skylit from my phone?</h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Yes. The Skylit Web Terminal is fully responsive and mobile-optimized, allowing daytraders to monitor Heatseeker maps and Trinity Mode levels from mobile Safari or Chrome while away from their trading desk.
              </p>
            </div>
            <div className="p-4 bg-white border border-slate-200 rounded-xl">
              <h3 className="font-bold text-slate-900 text-sm mb-1.5">How does Skylit compare to Unusual Whales?</h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Unusual Whales focuses broadly on individual options flow alerts and congressional trade tracking. Skylit is hyper-focused on institutional dealer positioning, Gamma Exposure (GEX), and synchronized index daytrading through Trinity Mode.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA Box */}
        <div className="p-8 bg-gradient-to-r from-cyan-950 via-slate-900 to-blue-950 text-white rounded-3xl text-center shadow-xl">
          <h2 className="text-2xl sm:text-3xl font-black mb-3">
            Stop Guessing. See Where Market Makers Are Positioned.
          </h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto mb-6">
            Join the elite options traders leveraging Skylit Heatseeker to navigate intraday market volatility.
          </p>
          <a
            href={storefrontUrl}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black text-base shadow-lg shadow-cyan-500/30 transition hover:scale-105"
          >
            <span>Access Skylit Heatseeker on Whop</span>
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </main>

      {/* Floating CTA Sticky Bar */}
      <StickySkylitBar />
    </div>
  );
}
