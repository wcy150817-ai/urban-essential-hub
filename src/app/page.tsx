import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { ShieldCheck, Calculator } from "lucide-react";

const PAGE_URL = "https://www.urbanessentialhub.com";
const TITLE = "Urban Essential Hub — B2B Software TCO Calculators & Pricing Comparisons (2026)";
const DESCRIPTION =
  "Transparent B2B software total cost of ownership (TCO) calculators and specification comparisons for cloud hosting, 1-800 virtual phone systems, PDF suites, password managers, and AI meeting tools.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    type: "website",
  },
};

const faqs = [
  {
    q: "How does Urban Essential Hub calculate B2B software total cost of ownership (TCO)?",
    a: "Rather than quoting introductory year-one promo banners, every calculator on Urban Essential Hub models multi-year contract math across four cost drivers: standard renewal seat or server rates after month twelve, mandatory tier upgrades triggered by usage caps (such as monthly transcription minutes, eSign envelopes, or toll-free call pools), infrastructure add-ons (such as CDN, off-site backups, or SSO/SCIM directory sync), and perpetual versus subscription break-even horizons.",
  },
  {
    q: "Do you publish user star ratings or claim in-house lab benchmarks?",
    a: "No. All guides on Urban Essential Hub rely strictly on publicly documented vendor specifications, regulatory rules (such as FCC RespOrg portability and FTC billing standards), November 2026 pricing summaries, and verifiable arithmetic formulas. We do not display synthetic aggregate star ratings or unverified lab benchmark claims.",
  },
  {
    q: "Why do headline SaaS prices often double or triple in year two?",
    a: "Across shared WordPress hosting, virtual phone lines, and team collaboration software, vendors frequently subsidize customer acquisition with 50% to 75% first-term discounts—or advertise base per-seat prices that exclude essential business controls like SAML SSO, permanent PDF redaction, or pooled toll-free minutes. Modeling a 24-to-60-month horizon exposes those hidden step-ups before you migrate production data.",
  },
  {
    q: "How is Urban Essential Hub funded?",
    a: "Urban Essential Hub is reader-supported. Some comparison and specification guides contain clearly marked sponsored affiliate links. If you subscribe or purchase software through those partner links, we may earn a referral commission at no additional cost to you. Affiliate availability never alters the mathematical formulas in our calculators.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      name: TITLE,
      description: DESCRIPTION,
      url: PAGE_URL,
      publisher: { "@type": "Organization", name: "Urban Essential Hub" },
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

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-slate-50 text-slate-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <header className="border-b border-slate-200 bg-white/95 backdrop-blur sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <span className="font-extrabold text-lg text-slate-900 tracking-tight">
              UrbanEssential<span className="text-blue-600">Hub</span>
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-5 text-xs font-semibold text-slate-600">
            <Link href="/cloudways-vs-siteground" className="hover:text-blue-600">Cloud Hosting</Link>
            <Link href="/best-1800-virtual-phone-numbers" className="hover:text-blue-600">1-800 Numbers</Link>
            <Link href="/foxit-vs-adobe-acrobat" className="hover:text-blue-600">PDF Suites</Link>
            <Link href="/1password-business-vs-bitwarden-enterprise-vs-dashlane" className="hover:text-blue-600">Security</Link>
            <Link href="/otter-vs-fireflies-vs-fathom" className="hover:text-blue-600">AI Meetings</Link>
          </nav>
        </div>
      </header>

      <section className="bg-white border-b border-slate-200 py-14 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200">
            <Calculator className="w-3.5 h-3.5" /> Specification-Based B2B Software Calculators (Updated Nov 2026)
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Calculate Real B2B Software TCO Before You Subscribe
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Introductory software pricing routinely hides year-two renewal jumps, per-seat multipliers, toll-free minute overages, and e-signature envelope caps. Explore our specification audits and interactive total-cost calculators across 27 business software guides.
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-xs text-amber-950 max-w-2xl mx-auto text-left leading-relaxed">
            <strong>Editorial &amp; Affiliate Disclosure:</strong> Every guide on UrbanEssentialHub relies on published vendor documentation, regulatory rules, and transparent arithmetic formulas—never fabricated lab benchmarks or synthetic star ratings. Software pricing changes frequently; confirm live terms on each vendor&apos;s checkout page. When you purchase through sponsored partner links, we may earn a referral commission at no extra cost to you.
          </div>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 py-12 w-full space-y-12 flex-1 leading-relaxed">
        {/* Static server-rendered B2B software cluster directory & TCO methodology */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-sm space-y-3">
            <h2 className="text-xl font-black text-slate-900">1. Managed Cloud Hosting &amp; DevOps Monitoring</h2>
            <p className="text-sm text-slate-600">
              Model promotional versus renewal WordPress hosting curves, DigitalOcean Premium NVMe versus Vultr High Frequency compute tiers, Kubernetes auto-scaling, and incident alerting seat math.
            </p>
            <ul className="divide-y divide-slate-100 text-sm font-semibold text-slate-800 pt-1">
              <li className="py-2.5"><Link href="/cloudways-vs-siteground" className="hover:text-blue-600">Cloudways vs SiteGround (2026): Promo Trap vs 3-Year Renewal Break-Even Calculator &rarr;</Link></li>
              <li className="py-2.5"><Link href="/cloudways-autonomous-vs-flexible-vs-kinsta" className="hover:text-blue-600">Cloudways Autonomous vs Flexible vs Kinsta: Auto-Scaling &amp; Bandwidth Math &rarr;</Link></li>
              <li className="py-2.5"><Link href="/cloudways-true-cost-breakdown" className="hover:text-blue-600">Cloudways True Cost Breakdown: Bandwidth, Backups &amp; Cloudflare Enterprise Add-On &rarr;</Link></li>
              <li className="py-2.5"><Link href="/reviews/cloudways" className="hover:text-blue-600">Cloudways Architecture &amp; Pricing Review (2026): DigitalOcean vs Vultr HF Specs &rarr;</Link></li>
              <li className="py-2.5"><Link href="/better-stack-vs-pagerduty-vs-datadog" className="hover:text-blue-600">Better Stack vs PagerDuty vs Datadog: On-Call Incident &amp; Log Retention TCO &rarr;</Link></li>
            </ul>
          </section>

          <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-sm space-y-3">
            <h2 className="text-xl font-black text-slate-900">2. 1-800 Toll-Free &amp; Business Virtual Phone Systems</h2>
            <p className="text-sm text-slate-600">
              Compare pooled-minute toll-free virtual number routing against per-user UCaaS seat licenses, instant multi-number provisioning, and FCC RespOrg portability rules across 800, 888, 877, and 866 prefixes.
            </p>
            <ul className="divide-y divide-slate-100 text-sm font-semibold text-slate-800 pt-1">
              <li className="py-2.5"><Link href="/best-1800-virtual-phone-numbers" className="hover:text-blue-600">Best 1-800 Virtual Phone Numbers &amp; Enterprise Temp Number Services (2026) &rarr;</Link></li>
              <li className="py-2.5"><Link href="/deals/800-com" className="hover:text-blue-600">800.com Review &amp; Value Calculator: Pooled Minute Overage &amp; Porting Math &rarr;</Link></li>
              <li className="py-2.5"><Link href="/800-vs-grasshopper-vs-nextiva" className="hover:text-blue-600">800.com vs Grasshopper vs Nextiva: Multi-Seat &amp; Extension Pricing Matrix &rarr;</Link></li>
              <li className="py-2.5"><Link href="/800-vs-888-vs-877-toll-free-prefixes" className="hover:text-blue-600">800 vs 888 vs 877 vs 866 Toll-Free Prefixes: NANP Availability &amp; Portability &rarr;</Link></li>
            </ul>
          </section>

          <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-sm space-y-3">
            <h2 className="text-xl font-black text-slate-900">3. PDF Editing, e-Signatures &amp; Perpetual Creative Suites</h2>
            <p className="text-sm text-slate-600">
              Audit multi-year licensing savings between annual SaaS subscriptions and one-time perpetual desktop licenses across PDF redaction, OCR, legally binding e-signatures, and creative tools.
            </p>
            <ul className="divide-y divide-slate-100 text-sm font-semibold text-slate-800 pt-1">
              <li className="py-2.5"><Link href="/foxit-vs-adobe-acrobat" className="hover:text-blue-600">Foxit PDF Editor vs Adobe Acrobat Enterprise: Perpetual vs Subscription TCO &rarr;</Link></li>
              <li className="py-2.5"><Link href="/foxit-vs-pdf-expert-vs-adobe-acrobat" className="hover:text-blue-600">Foxit vs PDF Expert vs Adobe Acrobat: macOS &amp; Cross-Platform Matrix &rarr;</Link></li>
              <li className="py-2.5"><Link href="/foxit-esign-vs-docusign-vs-adobe-sign" className="hover:text-blue-600">Foxit eSign vs DocuSign vs Adobe Sign: Envelope Quotas &amp; API Tier Math &rarr;</Link></li>
              <li className="py-2.5"><Link href="/reviews/foxit" className="hover:text-blue-600">Foxit PDF Editor &amp; Editor+ Review (2026): Seat Licensing &amp; Break-Even Math &rarr;</Link></li>
              <li className="py-2.5"><Link href="/adobe-alternatives" className="hover:text-blue-600">Best Non-Subscription Adobe Alternatives (2026): Free Affinity &amp; 5-Year TCO &rarr;</Link></li>
            </ul>
          </section>

          <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-sm space-y-3">
            <h2 className="text-xl font-black text-slate-900">4. Enterprise Password Managers &amp; Vault Security</h2>
            <p className="text-sm text-slate-600">
              Evaluate zero-knowledge encryption models, 128-bit Secret Key architecture, SAML SSO / SCIM directory provisioning surcharges, passkey support, and per-employee vault costs.
            </p>
            <ul className="divide-y divide-slate-100 text-sm font-semibold text-slate-800 pt-1">
              <li className="py-2.5"><Link href="/1password-business-vs-bitwarden-enterprise-vs-dashlane" className="hover:text-blue-600">1Password Business vs Bitwarden Enterprise vs Dashlane: SSO &amp; Seat TCO &rarr;</Link></li>
              <li className="py-2.5"><Link href="/1password-vs-lastpass" className="hover:text-blue-600">1Password vs LastPass: Zero-Knowledge Vault Design &amp; Security Architecture &rarr;</Link></li>
              <li className="py-2.5"><Link href="/bitwarden-vs-1password-vs-nordpass" className="hover:text-blue-600">Bitwarden vs 1Password vs NordPass: Open-Source vs Secret Key Comparison &rarr;</Link></li>
              <li className="py-2.5"><Link href="/reviews/1password" className="hover:text-blue-600">1Password Review (2026): Secret Key Cryptography, Passkeys &amp; Plan Structure &rarr;</Link></li>
            </ul>
          </section>

          <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-sm space-y-3">
            <h2 className="text-xl font-black text-slate-900">5. AI Meeting Transcription &amp; Creator Community Platforms</h2>
            <p className="text-sm text-slate-600">
              Calculate monthly transcription minute ceilings, per-meeting duration cutoffs, and gross merchandise value (GMV) transaction-fee break-even points for course and membership operators.
            </p>
            <ul className="divide-y divide-slate-100 text-sm font-semibold text-slate-800 pt-1">
              <li className="py-2.5"><Link href="/otter-vs-fireflies-vs-fathom" className="hover:text-blue-600">Otter.ai vs Fireflies.ai vs Fathom: Free-Plan Caps &amp; Team Transcription TCO &rarr;</Link></li>
              <li className="py-2.5"><Link href="/otter-ai-pro-vs-business-pricing-breakdown" className="hover:text-blue-600">Otter.ai Pro vs Business Pricing Breakdown: Minute Caps &amp; Seat Math &rarr;</Link></li>
              <li className="py-2.5"><Link href="/reviews/otter-ai" className="hover:text-blue-600">Otter.ai Review (2026): Automated Meeting Notes, Limits &amp; Alternatives &rarr;</Link></li>
              <li className="py-2.5"><Link href="/kajabi-vs-teachable-vs-skool" className="hover:text-blue-600">Kajabi vs Teachable vs Skool: Transaction Fees &amp; Course Margin Calculator &rarr;</Link></li>
              <li className="py-2.5"><Link href="/skool-vs-circle-vs-mighty-networks" className="hover:text-blue-600">Skool vs Circle vs Mighty Networks: Community Platform Cost Comparison &rarr;</Link></li>
              <li className="py-2.5"><Link href="/reviews/skool" className="hover:text-blue-600">Skool Platform Review (2026): Hobby ($9/mo) vs Pro ($99/mo) Break-Even Math &rarr;</Link></li>
            </ul>
          </section>

          <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-sm space-y-3">
            <h2 className="text-xl font-black text-slate-900">6. Specialized Webhook, Analytics &amp; Bundle Architecture Briefs</h2>
            <p className="text-sm text-slate-600">
              Technical specification audits covering non-custodial TradingView webhook routing, options dealer Gamma Exposure (GEX) subscription drag, and shared-session browser bundle risks.
            </p>
            <ul className="divide-y divide-slate-100 text-sm font-semibold text-slate-800 pt-1">
              <li className="py-2.5"><Link href="/reviews/alertsify" className="hover:text-blue-600">Alertsify Setup Guide: TradingView Webhooks &amp; Non-Custodial Broker API Routing &rarr;</Link></li>
              <li className="py-2.5"><Link href="/reviews/skylit" className="hover:text-blue-600">Skylit (Heatseeker) Review (2026): GEX Maps, Trinity Mode &amp; Capital Drag Math &rarr;</Link></li>
              <li className="py-2.5"><Link href="/reviews/toolsuite" className="hover:text-blue-600">ToolSuite Review (2026): Shared-Session Architecture, Pricing &amp; SaaS ToS Risks &rarr;</Link></li>
            </ul>
          </section>
        </div>

        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4">
          <h2 className="text-2xl font-black text-slate-900">
            Our 4-Factor B2B Software Total Cost of Ownership (TCO) Methodology
          </h2>
          <p className="text-sm sm:text-base text-slate-700">
            Most software comparison blogs rank products by copying first-year promotional prices off a vendor&apos;s pricing table without modeling what happens in month thirteen or when a five-person team scales to twenty seats. Every calculator and specification guide on Urban Essential Hub evaluates software purchasing decisions across four verifiable arithmetic dimensions:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-700">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
              <h3 className="font-bold text-slate-900">1. Promo vs Renewal Curve</h3>
              <p>
                Shared web hosts and telecom providers routinely advertise $2.99 to $4.99 introductory monthly rates that reset to $17.99 to $29.99 upon renewal. We compute 24-month and 36-month cumulative cash outlay so you see exact crossover months against flat pay-as-you-go cloud alternatives.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
              <h3 className="font-bold text-slate-900">2. Metering &amp; Quota Cliffs</h3>
              <p>
                Per-seat SaaS plans frequently impose secondary usage ceilings—such as 1,200 monthly AI transcription minutes, 150 annual eSign envelopes, or 1,000 pooled toll-free voice minutes. Crossing a single threshold often forces an entire organization onto a double-priced enterprise tier.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
              <h3 className="font-bold text-slate-900">3. Unbundled Infrastructure Add-Ons</h3>
              <p>
                A $14/month cloud VM still needs transactional email, off-site backup retention, and edge CDN caching; an $8/seat password vault may still charge extra for SAML single sign-on or SCIM automated offboarding. Our calculators add every required production component back into the monthly bill.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
              <h3 className="font-bold text-slate-900">4. Perpetual vs Subscription Break-Even</h3>
              <p>
                In categories where mature desktop workflows change slowly—such as PDF redaction, photo retouching, vector illustration, and timeline video editing—one-time perpetual or free core licenses routinely pay back against annual SaaS rentals within 14 to 20 months.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4">
          <h2 className="text-2xl font-black text-slate-900">
            5-Minute Pre-Purchase SaaS Procurement Audit Checklist
          </h2>
          <p className="text-sm sm:text-base text-slate-700">
            Before entering a corporate card on any annual software contract, run through five operational checks that prevent surprise renewal invoices and vendor lock-in across small and mid-sized teams:
          </p>
          <ol className="list-decimal pl-6 space-y-2.5 text-sm text-slate-700">
            <li>
              <strong>Check Early Cancellation Penalties on &quot;Annual, Paid Monthly&quot; Contracts:</strong> Several major creative and document vendors advertise low monthly prices that are legally binding twelve-month commitments. Canceling after the initial two-week window can trigger a lump-sum fee equal to 50% of your remaining annual balance.
            </li>
            <li>
              <strong>Verify Data Export &amp; Number Portability Rules Before Migrating:</strong> Confirm that toll-free numbers can port out cleanly under FCC RespOrg rules without hold fees, password vaults export unencrypted or standard CSV/JSON archives for admins, and cloud hosts allow full `.tar.gz` file and SQL database downloads at any time.
            </li>
            <li>
              <strong>Separate Admin Seats from Read-Only Viewers:</strong> Collaboration, AI transcription, and e-signature platforms often let external guests, clients, or read-only reviewers view shared workspaces at zero cost—avoiding unnecessary paid seat licenses for occasional stakeholders.
            </li>
            <li>
              <strong>Audit SAML Single Sign-On (SSO) &amp; SCIM Provisioning Tiers:</strong> Many B2B SaaS products gate Okta, Microsoft Entra ID, or Google Workspace SSO behind their highest enterprise tier. Check whether SSO is included in the standard business plan or billed as an enterprise add-on.
            </li>
            <li>
              <strong>Set a Calendar Reminder 14 Days Before Auto-Renewal:</strong> Most annual B2B subscriptions require cancellation notice prior to the renewal timestamp; logging the renewal date alongside your contract ledger preserves negotiating leverage every year and prevents unintended multi-seat billing renewals on departed staff accounts.
            </li>
          </ol>
        </section>

        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4">
          <h2 className="text-2xl font-black text-slate-900">Frequently Asked Questions</h2>
          <details className="border border-slate-200 rounded-xl p-4">
            <summary className="font-bold text-sm sm:text-base cursor-pointer text-slate-900">
              How does Urban Essential Hub calculate B2B software total cost of ownership (TCO)?
            </summary>
            <p className="mt-2 text-sm text-slate-700">
              Rather than quoting introductory year-one promo banners, every calculator on Urban Essential Hub models multi-year contract math across four cost drivers: standard renewal seat or server rates after month twelve, mandatory tier upgrades triggered by usage caps (such as monthly transcription minutes, eSign envelopes, or toll-free call pools), infrastructure add-ons (such as CDN, off-site backups, or SSO/SCIM directory sync), and perpetual versus subscription break-even horizons.
            </p>
          </details>
          <details className="border border-slate-200 rounded-xl p-4">
            <summary className="font-bold text-sm sm:text-base cursor-pointer text-slate-900">
              Do you publish user star ratings or claim in-house lab benchmarks?
            </summary>
            <p className="mt-2 text-sm text-slate-700">
              No. All guides on Urban Essential Hub rely strictly on publicly documented vendor specifications, regulatory rules (such as FCC RespOrg portability and FTC billing standards), November 2026 pricing summaries, and verifiable arithmetic formulas. We do not display synthetic aggregate star ratings or unverified lab benchmark claims.
            </p>
          </details>
          <details className="border border-slate-200 rounded-xl p-4">
            <summary className="font-bold text-sm sm:text-base cursor-pointer text-slate-900">
              Why do headline SaaS prices often double or triple in year two?
            </summary>
            <p className="mt-2 text-sm text-slate-700">
              Across shared WordPress hosting, virtual phone lines, and team collaboration software, vendors frequently subsidize customer acquisition with 50% to 75% first-term discounts—or advertise base per-seat prices that exclude essential business controls like SAML SSO, permanent PDF redaction, or pooled toll-free minutes. Modeling a 24-to-60-month horizon exposes those hidden step-ups before you migrate production data.
            </p>
          </details>
          <details className="border border-slate-200 rounded-xl p-4">
            <summary className="font-bold text-sm sm:text-base cursor-pointer text-slate-900">
              How is Urban Essential Hub funded?
            </summary>
            <p className="mt-2 text-sm text-slate-700">
              Urban Essential Hub is reader-supported. Some comparison and specification guides contain clearly marked sponsored affiliate links. If you subscribe or purchase software through those partner links, we may earn a referral commission at no additional cost to you. Affiliate availability never alters the mathematical formulas in our calculators.
            </p>
          </details>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white py-10 text-xs text-slate-500">
        <div className="max-w-6xl mx-auto px-4 space-y-3 text-center">
          <p>
            <strong>FTC Affiliate Disclosure:</strong> Urban Essential Hub is reader-supported. When you purchase through sponsored links on our site, we may earn a referral commission at no additional cost to you.
          </p>
          <p>&copy; 2026 Urban Essential Hub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
