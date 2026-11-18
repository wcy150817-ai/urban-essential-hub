import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import SkylitTierCalc from "./SkylitTierCalc";
import StickySkylitBar from "@/components/StickySkylitBar";

const SITE = "https://www.urbanessentialhub.com";
const SLUG = "/reviews/skylit";
const PAGE_URL = SITE + SLUG;
const TITLE = "Skylit (Heatseeker) Review 2026: Gamma Exposure (GEX), Trinity Mode & Pricing";
const DESC =
  "Specification-based Skylit (Heatseeker) review for 2026: dealer Gamma & Vanna Exposure (GEX/VEX) maps, Trinity Mode index views, Community vs Initiate vs Pro pricing, and overhead calculator.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: TITLE,
    description: DESC,
    url: PAGE_URL,
    type: "article",
  },
};

const faqs = [
  {
    q: "Are Skylit and Heatseeker the same platform?",
    a: "Yes. Skylit is the overarching options market intelligence company (available at skylit.ai and through its Whop storefront), while Heatseeker is Skylit's flagship dealer positioning module that maps strike-by-strike Gamma Exposure (GEX) and Vanna Exposure (VEX). Earlier links pointing to /reviews/heatseeker now permanently redirect here so all specifications stay consolidated on one page.",
  },
  {
    q: "What is the difference between Skylit Community, Initiate, and Pro tiers?",
    a: "Based on November 2026 published Skylit and Whop plan summaries, Community (~$99.99 per month) provides Discord access, Discord bot index maps, and basic Flowseeker flow feeds. Initiate (~$299 per month) unlocks the Heatseeker web terminal for core index and ETF symbols (such as SPX/SPXW, SPY, QQQ, IWM, and VIX) including Trinity Mode. Pro ($699 per month) expands Heatseeker across 5,000+ single-stock equities and adds Atlas charting overlays, the Talon AI copilot, Tempest volatility tools (beta), 1:1 sessions, and 100,000 monthly API/MCP credits.",
  },
  {
    q: "What does Trinity Mode show inside Heatseeker?",
    a: "Trinity Mode is a synchronized multi-index workspace inside Heatseeker that displays live dealer positioning heatmaps for SPXW, SPY, and QQQ side by side. Intraday index traders use it to check whether institutional gamma walls and liquidity nodes align across the S&P 500 cash index, the S&P 500 ETF, and the Nasdaq-100 ETF before entering a trade.",
  },
  {
    q: "Does Skylit send automated buy/sell trade signals or manage capital?",
    a: "No. Skylit is strictly an analytical visualization and market data subscription—not a registered investment advisor, broker-dealer, or copy-trading signal service. It visualizes options order flow and dealer hedging levels; users make their own trading decisions inside their separate brokerage accounts.",
  },
  {
    q: "How large should a trading account be before paying $299 or $699 per month for options analytics?",
    a: "At $299 per month ($3,588 per year) or $699 per month ($8,388 per year), fixed subscription fees create substantial percentage drag on small retail accounts. On a $10,000 account, the Pro plan consumes 83.9% of total equity per year just to break even on software overhead. Most disciplined traders keep total data and software subscriptions below 5% to 10% of active trading capital.",
  },
  {
    q: "Did UrbanEssentialHub test Skylit live with real trading capital?",
    a: "No. An earlier version of this page used 'Tested' and 'hands-on' phrasing alongside undocumented aggregate star ratings, all of which have been removed. This guide evaluates Skylit strictly from its published product documentation, November 2026 Whop tier specifications, options market-microstructure definitions, and transparent overhead arithmetic.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: TITLE,
      description: DESC,
      mainEntityOfPage: PAGE_URL,
      datePublished: "2026-09-28",
      dateModified: "2026-11-18",
      author: { "@type": "Organization", name: "Urban Essential Hub Editorial Team" },
      publisher: { "@type": "Organization", name: "Urban Essential Hub" },
    },
    {
      "@type": "SoftwareApplication",
      name: "Skylit (Heatseeker)",
      applicationCategory: "FinanceApplication",
      operatingSystem: "Web Terminal, Desktop App, Discord",
      url: PAGE_URL,
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

const ctaWhop =
  '<a href="https://whop.com/heatseeker?a=wcyb5" target="_blank" rel="sponsored noopener" style="display:inline-block;color:#ffffff !important;background:#0891b2;padding:13px 24px;border-radius:10px;font-weight:700;text-decoration:none;font-size:14px;">Inspect Live Skylit (Heatseeker) Tiers on Whop &rarr;</a>';

export default function SkylitReviewPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-slate-50 text-slate-900 pb-16 sm:pb-0">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <header className="border-b border-slate-200 bg-white/95 backdrop-blur sticky top-0 z-40">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="text-sm font-semibold text-slate-600 hover:text-cyan-700">
            &larr; All B2B Software Calculators
          </Link>
          <Link href="/" className="font-extrabold text-base text-slate-900 tracking-tight">
            UrbanEssential<span className="text-blue-600">Hub</span>
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-10 w-full space-y-10 flex-1 leading-relaxed">
        {/* Specification-based Skylit & Heatseeker GEX platform overview */}
        <nav className="flex items-center gap-2 text-xs text-slate-500">
          <Link href="/" className="hover:underline">Home</Link>
          <span>/</span>
          <span className="text-slate-800 font-medium">Skylit (Heatseeker) Architecture &amp; Pricing</span>
        </nav>

        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-5">
          <div className="inline-block text-xs font-bold px-3 py-1 rounded-full bg-cyan-50 text-cyan-800 border border-cyan-200">
            Options Analytics &amp; Subscription Drag Audit &bull; Updated November 2026
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
            Skylit (Heatseeker) Review 2026: Gamma Exposure (GEX), Trinity Mode &amp; Tier Breakdown
          </h1>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-xs text-amber-950 leading-relaxed">
            <strong>Financial Risk &amp; Editorial Disclosure:</strong> Options and derivatives trading carry a high risk of rapid capital loss and are unsuitable for many retail investors. Nothing on this page constitutes financial or investment advice. This article is a specification and cost-drag analysis built from published Skylit/Whop documentation as of November 2026—not a live-funded trading test. Earlier &quot;Tested&quot; phrasing and undocumented aggregate star ratings have been removed. If you subscribe via Whop links on this page, we may receive an affiliate commission at no extra cost to you.
          </div>
          <p className="text-base text-slate-700">
            <strong>Skylit</strong> (widely searched under the name of its core visualization engine, <strong>Heatseeker</strong>) is an options market-microstructure and dealer-positioning platform distributed via web terminal, desktop app, and the Whop marketplace. Rather than plotting traditional lagging price-candle oscillators like RSI or MACD, Skylit models strike-by-strike options open interest and intraday volume to estimate where options market makers hold concentrated <strong>Gamma Exposure (GEX)</strong> and <strong>Vanna Exposure (VEX)</strong>.
          </p>
          <p className="text-base text-slate-700">
            Because Skylit&apos;s subscription tiers span from roughly <strong>$99.99/month</strong> (Community) to <strong>$299/month</strong> (Initiate) and <strong>$699/month</strong> (Pro), the central question for any self-directed trader is not merely what the heatmaps display, but whether your account size and trading universe justify $1,200 to $8,388 in annual data overhead. Run your account numbers in the calculator below first.
          </p>
          <div dangerouslySetInnerHTML={{ __html: ctaWhop }} />
        </section>

        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4">
          <h2 className="text-2xl font-black text-slate-900">
            Interactive Skylit Subscription Overhead &amp; Capital Drag Calculator
          </h2>
          <p className="text-sm text-slate-600">
            Enter your active options account equity, choose a Skylit tier, and input your monthly trade count to measure annualized software drag as a percentage of capital.
          </p>
          <SkylitTierCalc />
        </section>

        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-5">
          <h2 className="text-2xl font-black text-slate-900">
            1. Skylit Module Architecture: Heatseeker, Trinity Mode, Flowseeker &amp; Atlas
          </h2>
          <p className="text-sm sm:text-base text-slate-700">
            In options-heavy index products such as SPX/SPXW, SPY, and QQQ, institutional funds and retail traders buy and sell large blocks of short-dated (including zero-days-to-expiration, or 0DTE) calls and puts. Options market makers who take the opposing side of those customer orders dynamically buy or sell underlying futures or shares to keep their books delta-neutral. When dealers sit in <strong>positive gamma</strong> territory, they typically sell into rallies and buy dips, dampening realized volatility around high-gamma strike &quot;pins.&quot; Conversely, in <strong>negative gamma</strong> regimes, dealer hedging flows move in the same direction as price, accelerating directional breakouts or intraday flushes.
          </p>
          <p className="text-sm sm:text-base text-slate-700">
            Published Skylit documentation organizes these microstructure calculations into five core modules depending on your subscription level:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-sm text-slate-700">
            <li><strong>Heatseeker (GEX &amp; VEX Maps):</strong> Plots strike-by-strike and expiration-by-expiration dealer gamma and vanna exposure nodes so traders can see major liquidity magnets (&quot;king nodes&quot;) and potential gamma-flip thresholds.</li>
            <li><strong>Trinity Mode:</strong> Aligns simultaneous live heatmaps for major index benchmarks (notably SPXW, SPY, and QQQ) side by side in a unified workspace, allowing index daytraders to spot cross-index confirmation or divergence without toggling separate tabs.</li>
            <li><strong>Flowseeker:</strong> Tracks institutional options order flow and unusual sweep activity alongside the dealer positioning levels.</li>
            <li><strong>Atlas &amp; Nexus:</strong> Atlas overlays Heatseeker and Flowseeker strike levels directly onto interactive price charts (unlocked on Pro), while Nexus provides simulated paper-trading execution so users can validate strategies without risking live capital.</li>
            <li><strong>Talon &amp; Tempest (Pro Tier):</strong> Talon acts as an AI analytical copilot over Skylit&apos;s market data, paired with the Tempest volatility suite (listed in beta) and programmatic API/MCP credit allowances.</li>
          </ul>
        </section>

        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-5">
          <h2 className="text-2xl font-black text-slate-900">
            2. Published Skylit Tier Comparison: Community vs Initiate vs Pro (Nov 2026)
          </h2>
          <p className="text-sm sm:text-base text-slate-700">
            Skylit structures its pricing around instrument breadth (index-only versus 5,000+ single-stock equities) and delivery interface (Discord bot snapshots versus full interactive web terminal and charting overlays):
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-[640px] w-full text-xs sm:text-sm border border-slate-200 rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-slate-100 text-left font-bold text-slate-800">
                  <th className="p-3 border-b border-slate-200">Tier Name</th>
                  <th className="p-3 border-b border-slate-200">Reported Monthly Rate</th>
                  <th className="p-3 border-b border-slate-200">Annualized Cost</th>
                  <th className="p-3 border-b border-slate-200">Ticker Coverage</th>
                  <th className="p-3 border-b border-slate-200">Primary Modules Included</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                <tr>
                  <td className="p-3 font-semibold">Community</td>
                  <td className="p-3 font-bold">~$99.99/mo</td>
                  <td className="p-3">~$1,199.88/yr</td>
                  <td className="p-3">Core indices via bot</td>
                  <td className="p-3">Discord community, index bot maps, basic Flowseeker</td>
                </tr>
                <tr className="bg-cyan-50/40">
                  <td className="p-3 font-semibold">Initiate</td>
                  <td className="p-3 font-bold text-cyan-800">~$299.00/mo</td>
                  <td className="p-3">~$3,588.00/yr</td>
                  <td className="p-3">Major Index &amp; ETF suite (SPX, SPY, QQQ, IWM, VIX)</td>
                  <td className="p-3">Heatseeker Web Terminal + Trinity Mode</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold">Pro</td>
                  <td className="p-3 font-bold">$699.00/mo</td>
                  <td className="p-3">$8,388.00/yr</td>
                  <td className="p-3">5,000+ single-stock tickers + indices</td>
                  <td className="p-3">Full Web Terminal, Atlas charts, Talon AI, Tempest (beta), 100k API/MCP credits</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500">
            Source note: Tier names, feature boundaries, and pricing reflect publicly reported Skylit and Whop storefront listings as of November 2026. Promotional bundles, billing intervals, or Discord role entitlements can change; always confirm live terms on Whop before checkout.
          </p>
          <div dangerouslySetInnerHTML={{ __html: ctaWhop }} />
        </section>

        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4">
          <h2 className="text-2xl font-black text-slate-900">
            3. Honest Economics: Account Size Math &amp; Execution Infrastructure
          </h2>
          <p className="text-sm sm:text-base text-slate-700">
            The single biggest mistake new options traders make with institutional-style GEX terminals is ignoring <strong>subscription drag</strong>. Consider three illustrative account sizes:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-sm text-slate-700">
            <li><strong>$5,000 Retail Account on Pro ($699/mo = $8,388/yr):</strong> Requires a <strong>+167.8% gross annual trading return</strong> just to pay for the software subscription before taxes or broker commissions—mathematically unsustainable for almost any retail trader.</li>
            <li><strong>$30,000 Index Daytrading Account on Initiate (~$299/mo = $3,588/yr):</strong> Represents an <strong>11.96% annual hurdle</strong>; viable only if you exclusively trade liquid SPX/SPY/QQQ setups daily and first validate positive expectancy in a paper environment.</li>
            <li><strong>$150,000+ Active Portfolio on Pro ($699/mo = $8,388/yr):</strong> Drops software overhead to <strong>5.59% per year</strong>, where single-stock GEX across mega-cap earnings names (NVDA, TSLA, AAPL, META) and API/MCP data access align with institutional data budgets.</li>
          </ul>
          <p className="text-sm sm:text-base text-slate-700">
            Note also that Skylit only visualizes market structure—it does not dispatch orders to your broker. Traders who separately automate TradingView webhook alerts into retail brokerages such as Charles Schwab, Webull, or Tradovate can compare middleware architecture in our <Link href="/reviews/alertsify" className="text-cyan-700 underline font-semibold">Alertsify Webhook &amp; Broker API Setup Guide</Link>.
          </p>
        </section>

        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4">
          <h2 className="text-2xl font-black text-slate-900">
            4. Key Limitations &amp; What You Should Know Before Subscribing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-sm">
            <div className="p-5 rounded-xl bg-emerald-50/60 border border-emerald-200 space-y-2">
              <h3 className="font-bold text-emerald-950 text-base">Where Skylit Fits Well</h3>
              <ul className="list-disc pl-5 space-y-1.5 text-slate-700">
                <li>Experienced intraday SPX, SPY, and QQQ traders who already understand delta/gamma/vanna mechanics and want synchronized Trinity Mode index maps on Initiate.</li>
                <li>Well-capitalized equity options desks ($100k+) needing 5,000+ single-stock GEX coverage, Atlas chart levels, and programmatic API/MCP data credits on Pro.</li>
              </ul>
            </div>
            <div className="p-5 rounded-xl bg-rose-50/60 border border-rose-200 space-y-2">
              <h3 className="font-bold text-rose-950 text-base">Who Should Skip Skylit</h3>
              <ul className="list-disc pl-5 space-y-1.5 text-slate-700">
                <li>Beginners looking for &quot;buy/sell callout alerts&quot; or learning basic options Greeks—GEX models estimate dealer positioning under specific assumptions and never guarantee price reversals.</li>
                <li>Under-capitalized accounts (&lt;$15,000) where $100 to $699 monthly fees eat double-digit percentages of principal every year.</li>
                <li>Long-term buy-and-hold equity investors who do not trade short-dated options liquidity regimes.</li>
              </ul>
            </div>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs text-slate-600">
            <strong>What We Could Not Verify:</strong> Dealer GEX/VEX models across all retail options platforms infer market-maker positioning from OPRA volume/open-interest heuristics (such as buy-to-open at the ask versus sell-to-open at the bid) rather than private prime-brokerage clearing ledgers. We did not run audited live-trading PnL trials on Skylit and make no claims regarding win rates or trading profitability.
          </div>
        </section>

        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4">
          <h2 className="text-2xl font-black text-slate-900">Frequently Asked Questions</h2>
          <details className="border border-slate-200 rounded-xl p-4">
            <summary className="font-bold text-sm sm:text-base cursor-pointer text-slate-900">
              Are Skylit and Heatseeker the same platform?
            </summary>
            <p className="mt-2 text-sm text-slate-700">
              Yes. Skylit is the overarching options market intelligence company (available at skylit.ai and through its Whop storefront), while Heatseeker is Skylit&apos;s flagship dealer positioning module that maps strike-by-strike Gamma Exposure (GEX) and Vanna Exposure (VEX). Earlier links pointing to /reviews/heatseeker now permanently redirect here so all specifications stay consolidated on one page.
            </p>
          </details>
          <details className="border border-slate-200 rounded-xl p-4">
            <summary className="font-bold text-sm sm:text-base cursor-pointer text-slate-900">
              What is the difference between Skylit Community, Initiate, and Pro tiers?
            </summary>
            <p className="mt-2 text-sm text-slate-700">
              Based on November 2026 published Skylit and Whop plan summaries, Community (~$99.99 per month) provides Discord access, Discord bot index maps, and basic Flowseeker flow feeds. Initiate (~$299 per month) unlocks the Heatseeker web terminal for core index and ETF symbols (such as SPX/SPXW, SPY, QQQ, IWM, and VIX) including Trinity Mode. Pro ($699 per month) expands Heatseeker across 5,000+ single-stock equities and adds Atlas charting overlays, the Talon AI copilot, Tempest volatility tools (beta), 1:1 sessions, and 100,000 monthly API/MCP credits.
            </p>
          </details>
          <details className="border border-slate-200 rounded-xl p-4">
            <summary className="font-bold text-sm sm:text-base cursor-pointer text-slate-900">
              What does Trinity Mode show inside Heatseeker?
            </summary>
            <p className="mt-2 text-sm text-slate-700">
              Trinity Mode is a synchronized multi-index workspace inside Heatseeker that displays live dealer positioning heatmaps for SPXW, SPY, and QQQ side by side. Intraday index traders use it to check whether institutional gamma walls and liquidity nodes align across the S&amp;P 500 cash index, the S&amp;P 500 ETF, and the Nasdaq-100 ETF before entering a trade.
            </p>
          </details>
          <details className="border border-slate-200 rounded-xl p-4">
            <summary className="font-bold text-sm sm:text-base cursor-pointer text-slate-900">
              Does Skylit send automated buy/sell trade signals or manage capital?
            </summary>
            <p className="mt-2 text-sm text-slate-700">
              No. Skylit is strictly an analytical visualization and market data subscription—not a registered investment advisor, broker-dealer, or copy-trading signal service. It visualizes options order flow and dealer hedging levels; users make their own trading decisions inside their separate brokerage accounts.
            </p>
          </details>
          <details className="border border-slate-200 rounded-xl p-4">
            <summary className="font-bold text-sm sm:text-base cursor-pointer text-slate-900">
              How large should a trading account be before paying $299 or $699 per month for options analytics?
            </summary>
            <p className="mt-2 text-sm text-slate-700">
              At $299 per month ($3,588 per year) or $699 per month ($8,388 per year), fixed subscription fees create substantial percentage drag on small retail accounts. On a $10,000 account, the Pro plan consumes 83.9% of total equity per year just to break even on software overhead. Most disciplined traders keep total data and software subscriptions below 5% to 10% of active trading capital.
            </p>
          </details>
          <details className="border border-slate-200 rounded-xl p-4">
            <summary className="font-bold text-sm sm:text-base cursor-pointer text-slate-900">
              Did UrbanEssentialHub test Skylit live with real trading capital?
            </summary>
            <p className="mt-2 text-sm text-slate-700">
              No. An earlier version of this page used &apos;Tested&apos; and &apos;hands-on&apos; phrasing alongside undocumented aggregate star ratings, all of which have been removed. This guide evaluates Skylit strictly from its published product documentation, November 2026 Whop tier specifications, options market-microstructure definitions, and transparent overhead arithmetic.
            </p>
          </details>
        </section>

        <section className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 space-y-4">
          <h2 className="text-xl font-black">Related Trading Infrastructure &amp; Software TCO Guides</h2>
          <ul className="space-y-2 text-sm text-slate-300">
            <li>&rarr; <Link href="/reviews/alertsify" className="text-cyan-300 underline">Alertsify Setup Guide: TradingView Webhooks &amp; Non-Custodial Broker API Routing</Link></li>
            <li>&rarr; <Link href="/better-stack-vs-pagerduty-vs-datadog" className="text-cyan-300 underline">Better Stack vs PagerDuty vs Datadog: Webhook Uptime &amp; Incident Alerting TCO</Link></li>
            <li>&rarr; <Link href="/1password-business-vs-bitwarden-enterprise-vs-dashlane" className="text-cyan-300 underline">1Password vs Bitwarden vs Dashlane: Securing API Keys &amp; Financial Credentials</Link></li>
          </ul>
          <div className="pt-2" dangerouslySetInnerHTML={{ __html: ctaWhop }} />
        </section>
      </main>

      <StickySkylitBar />
    </div>
  );
}
