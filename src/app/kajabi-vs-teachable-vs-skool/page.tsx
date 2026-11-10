import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import CreatorMarginClient from "./CreatorMarginClient";

export const metadata: Metadata = {
  title:
    "Kajabi vs Teachable vs Skool: Course Hosting Bandwidth, Funnel Builders & 3-Year Creator Net Margin Calculator (2026)",
  description:
    "Compare Kajabi (0% fee + native email/funnels), Teachable (Basic 5% vs Pro 0% + EU/US tax handling), and Skool (Hobby $9 at 10% vs Pro $99 at 2.9%) with our 3-year creator margin calculator.",
  alternates: {
    canonical: "/kajabi-vs-teachable-vs-skool",
  },
  openGraph: {
    title:
      "Kajabi vs Teachable vs Skool: Course Hosting Bandwidth, Funnel Builders & 3-Year Creator Net Margin Calculator (2026)",
    description:
      "36-month creator net profit audit comparing Kajabi all-in-one marketing funnels, Teachable Merchant-of-Record checkout, Skool gamified cohorts, and self-hosted WordPress LMS.",
    url: "https://www.urbanessentialhub.com/kajabi-vs-teachable-vs-skool",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline":
        "Kajabi vs Teachable vs Skool: Course Hosting Bandwidth, Funnel Builders & 3-Year Creator Net Margin Calculator (2026)",
      "description":
        "Financial and architectural comparison of Kajabi, Teachable, and Skool in 2026, modeling platform transaction fees, Wistia/native video hosting bandwidth, email marketing SaaS consolidation, and 3-year creator take-home profit.",
      "datePublished": "2026-10-24",
      "dateModified": "2026-10-24",
      "author": {
        "@type": "Organization",
        "name": "Urban Essential Hub SaaS Research Desk",
        "url": "https://www.urbanessentialhub.com",
      },
      "publisher": {
        "@type": "Organization",
        "name": "Urban Essential Hub",
        "url": "https://www.urbanessentialhub.com",
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://www.urbanessentialhub.com/kajabi-vs-teachable-vs-skool",
      },
    },
    {
      "@type": "SoftwareApplication",
      "name": "3-Year Creator Course & Community Net Margin Calculator",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
      },
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "At what monthly sales volume should a creator upgrade from Teachable Basic ($39/mo) to Teachable Pro ($119/mo)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Teachable Basic ($39/month billed annually, or $59 billed monthly) charges a 5% platform transaction fee on top of standard credit card processing (2.9% + $0.30), whereas Teachable Pro ($119/month billed annually, or $159 billed monthly) drops the platform transaction fee to 0%. Because the annual-billed monthly subscription difference is $80 ($119 minus $39), the exact mathematical breakeven point is $80 / 0.05 = $1,600 per month in gross course sales. Once your school sells more than $1,600/month, Teachable Pro immediately increases your net margin.",
          },
        },
        {
          "@type": "Question",
          "name": "Why does Kajabi often cost less than Skool or Teachable once your email list passes 10,000 subscribers?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "While Kajabi Basic ($119/mo annual) and Kajabi Growth ($159/mo annual) look expensive compared to Skool Pro ($99/mo) or Teachable Basic ($39/mo), Kajabi includes a built-in email marketing engine (up to 10,000 active contacts on Basic and 25,000 on Growth), automated webinar/opt-in sales funnels, custom website hosting, and 0% platform transaction fees. Creators on Skool must pay separately for an external ESP (such as Kit/ConvertKit or ActiveCampaign at $100–$200+/mo) plus a landing page builder (ClickFunnels or Unbounce at $79–$147/mo), making Kajabi cheaper on a consolidated TCO basis.",
          },
        },
        {
          "@type": "Question",
          "name": "Which platform handles EU VAT, UK digital taxes, and US state sales tax automatically at checkout?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Teachable (via Teachable:Pay / BackOffice) and Skool (via Skool's built-in merchant checkout) automatically calculate, collect, and remit global digital goods VAT/GST and applicable US sales taxes at checkout without requiring you to configure third-party tax software. Kajabi integrates with Kajabi Payments and Stripe Tax to calculate and collect global sales tax and VAT, though you remain the merchant of record responsible for tax remittance filings in your registered jurisdictions.",
          },
        },
        {
          "@type": "Question",
          "name": "Can you host a self-paced video course on Skool without Kajabi or Teachable?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Every Skool group ($9/mo Hobby or $99/mo Pro) includes a native Classroom tab with unlimited native video hosting, module/lesson hierarchies, drip schedules, action items, and level-based gamification unlocks. However, Skool does not include graded multiple-choice quizzes, formal completion certificates, 1-click post-purchase order bumps/upsells, or public marketing landing pages with multi-pay installment plans.",
          },
        },
        {
          "@type": "Question",
          "name": "How much can a creator save over 3 years by self-hosting WordPress (LearnDash + FluentCommunity) on Cloudways?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A self-hosted WordPress LMS stack running on a Cloudways 2GB or 4GB Managed Cloud VM ($28 to $54/month) paired with LearnDash or TutorLMS, FluentCRM (unlimited email subscribers via Amazon SES at $0.10 per 1,000 emails), and WooCommerce/SureCart charges 0% platform transaction fees and never raises your bill as your email list grows from 5,000 to 100,000 contacts—saving $4,000 to $9,000 over 36 months compared to hosted SaaS tiers.",
          },
        },
      ],
    },
  ],
};

export default function KajabiVsTeachableVsSkoolPage() {
  return (
    <div
      className="min-h-screen w-full min-w-0 overflow-x-hidden bg-slate-50 text-slate-900 font-sans"
      style={{ maxWidth: "100vw", overflowX: "hidden" }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="border-b border-slate-200 bg-white sticky top-0 z-30">
        <div className="max-w-4xl mx-auto px-4 h-14 flex items-center justify-between text-sm">
          <Link href="/" className="font-extrabold text-slate-900 hover:text-indigo-600">
            &larr; UrbanEssentialHub
          </Link>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-700">
            Creator Economy &amp; LMS Audit &bull; Oct 2026
          </span>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8 sm:py-12 w-full min-w-0 overflow-x-hidden">
        <nav className="text-xs text-slate-500 mb-4 flex flex-wrap gap-1.5 items-center">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <span>/</span>
          <Link href="/reviews/skool" className="hover:underline">
            Skool Review
          </Link>
          <span>/</span>
          <span className="text-slate-800 font-semibold">
            Kajabi vs Teachable vs Skool
          </span>
        </nav>

        <section className="bg-slate-900 text-white rounded-2xl p-6 sm:p-9 mb-8 border border-slate-800">
          <span className="inline-block text-xs font-bold uppercase tracking-wider bg-indigo-500/20 text-indigo-200 border border-indigo-400/30 px-3 py-1 rounded-full mb-3">
            36-Month Creator Net Profit &amp; LMS Architecture Comparison
          </span>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight text-white mb-4">
            Kajabi vs Teachable vs Skool: Course Hosting Bandwidth, Funnel Builders &amp; 3-Year Creator Net Margin Calculator (2026)
          </h1>
          <p className="text-slate-200 text-base sm:text-lg leading-relaxed">
            Should you build your digital education business on <strong>Kajabi</strong> (all-in-one
            marketing funnels + email automation + 0% platform fee), <strong>Teachable</strong>{" "}
            (structured curriculum + automated global VAT/sales tax checkout), or{" "}
            <strong>Skool</strong> (high-engagement gamified community + Classroom under one
            roof)? Below is the complete 2026 3-year creator net margin audit.
          </p>
        </section>

        <div className="bg-blue-50 border-l-4 border-indigo-600 p-4 rounded-r-xl text-xs text-slate-700 mb-6 leading-relaxed">
          <strong>Methodology &amp; Affiliate Disclosure:</strong> Subscription tiers (`$71–$159/mo`
          on Kajabi, `$39–$119/mo` on Teachable, `$9–$99/mo` on Skool), platform transaction fee
          rates (`0%`, `5%`, `10%`, `2.9% + $0.30`), and video/email limits are verified against
          official vendor documentation as of October 2026. Some CTA buttons below are affiliate
          links (<code>rel=&quot;sponsored&quot;</code>) that may earn us a commission at no extra
          cost to you.
        </div>

        <p className="text-slate-700 leading-relaxed mb-4">
          In our standalone{" "}
          <Link
            href="/reviews/skool"
            className="text-indigo-600 font-semibold underline hover:text-indigo-800"
          >
            Skool Platform Review &amp; Creator Economics Guide
          </Link>{" "}
          and our 3-way{" "}
          <Link
            href="/skool-vs-circle-vs-mighty-networks"
            className="text-indigo-600 font-semibold underline hover:text-indigo-800"
          >
            Skool vs. Circle vs. Mighty Networks Community Comparison
          </Link>
          , we focused on pure community platforms. However, most course creators, coaches, and
          info-product founders aren&apos;t just comparing community feeds—they are deciding between{" "}
          <strong>three fundamentally different business models</strong>: the{" "}
          <strong>All-in-One Marketing Funnel &amp; Email Empire (Kajabi)</strong>, the{" "}
          <strong>Structured Self-Paced Curriculum &amp; Tax-Automated Checkout (Teachable)</strong>,
          and the <strong>Habit-Forming Gamified Cohort (Skool)</strong>—plus the option to own 100%
          of their stack via <strong>WordPress + LearnDash/FluentCommunity on Cloudways</strong>.
        </p>

        <div className="flex flex-wrap gap-3 my-6">
          <div
            dangerouslySetInnerHTML={{
              __html:
                '<a href="https://bbux.me/XarLClkjd" target="_blank" rel="sponsored noopener" style="display:inline-block;background:#ea580c;color:#ffffff !important;font-weight:700;padding:12px 18px;border-radius:10px;text-decoration:none;font-size:14px;">Build a 0%-Fee Self-Hosted Course &amp; Community Stack on Cloudways ($28/mo) &rarr;</a>',
            }}
          />
        </div>

        <section id="calculator" className="my-10">
          <h2 className="text-2xl font-extrabold text-slate-900 mb-2">
            1. Interactive 3-Year Creator Net Margin &amp; SaaS Consolidation Calculator
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-4">
            Plug in your course or membership price, monthly sales volume, email subscriber list
            size, and whether you require external email/funnel tools to compare 36-month net
            take-home profit across Kajabi, Teachable, and Skool:
          </p>
          <CreatorMarginClient />
        </section>

        <section id="comparison-matrix" className="my-10">
          <h2 className="text-2xl font-extrabold text-slate-900 mb-3">
            2. Master 2026 Course &amp; Creator Platform Matrix: Kajabi vs. Teachable vs. Skool
          </h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            Looking only at the entry subscription price is the #1 mistake creators make. A $39/month
            plan that charges a 5% transaction fee and requires a $149/month external email tool
            plus a $97/month funnel builder actually costs far more than a $159/month all-in-one
            platform:
          </p>

          <div className="overflow-x-auto border border-slate-200 rounded-xl bg-white my-5">
            <table className="w-full text-left text-sm border-collapse min-w-[740px]">
              <thead className="bg-slate-900 text-white font-bold">
                <tr>
                  <th className="p-3.5">Platform Dimension</th>
                  <th className="p-3.5">Kajabi (Basic / Growth)</th>
                  <th className="p-3.5">Teachable (Basic / Pro)</th>
                  <th className="p-3.5">Skool (Hobby / Pro)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                <tr className="bg-indigo-50/40">
                  <td className="p-3.5 font-bold text-slate-900">Annual Billing Price</td>
                  <td className="p-3.5 font-semibold text-indigo-900">
                    $71 (Kickstarter) &bull; $119 (Basic) &bull; $159/mo (Growth)
                  </td>
                  <td className="p-3.5">
                    $39/mo (Basic) &bull; $119/mo (Pro) &bull; $199/mo (Pro+)
                  </td>
                  <td className="p-3.5 font-semibold text-emerald-800">
                    $9/mo (Hobby) &bull; $99/mo (Pro per group)
                  </td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-slate-900">Platform Transaction Fee</td>
                  <td className="p-3.5 font-semibold text-emerald-800">
                    0% platform fee (+ ~2.9% + $0.30 Stripe)
                  </td>
                  <td className="p-3.5 text-amber-800 font-semibold">
                    5% on Basic (+ Stripe); 0% on Pro ($119/mo)
                  </td>
                  <td className="p-3.5 font-semibold">
                    10% + $0.30 (Hobby) &bull; 2.9% + $0.30 total (Pro)
                  </td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-3.5 font-bold text-slate-900">Video Hosting Bandwidth</td>
                  <td className="p-3.5">
                    Unlimited Wistia-backed video hosting included
                  </td>
                  <td className="p-3.5">
                    Unlimited course video bandwidth on paid plans
                  </td>
                  <td className="p-3.5 font-semibold text-emerald-800">
                    Unlimited native course + community video hosting
                  </td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-slate-900">Native Email Marketing &amp; Funnels</td>
                  <td className="p-3.5 font-semibold text-emerald-800">
                    Yes — Full ESP (10k–25k contacts) + Pipelines + Opt-ins
                  </td>
                  <td className="p-3.5">
                    Basic student broadcasts only; requires external ESP
                  </td>
                  <td className="p-3.5">
                    Member post broadcasts (every 72h); no external lead ESP
                  </td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-3.5 font-bold text-slate-900">Checkout Upsells &amp; Order Bumps</td>
                  <td className="p-3.5 font-semibold text-emerald-800">
                    1-Click Upsells, Order Bumps, Cart Abandonment, Multi-Pay
                  </td>
                  <td className="p-3.5">
                    Order Bumps, Upsells, BNPL (Klarna/Afterpay), Coupons
                  </td>
                  <td className="p-3.5 text-amber-800">
                    Minimal 1-click recurring or one-time course unlocks only
                  </td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold text-slate-900">Quizzes, Certificates &amp; Compliance</td>
                  <td className="p-3.5">
                    Assessments, quizzes, and completion certificates
                  </td>
                  <td className="p-3.5 font-semibold text-emerald-800">
                    Graded quizzes, CEU certificates, enforced video compliance
                  </td>
                  <td className="p-3.5">
                    Action items &amp; point-level course unlocks (no formal exams)
                  </td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-3.5 font-bold text-slate-900">Community &amp; Gamification</td>
                  <td className="p-3.5">
                    Kajabi Communities (Vibely-powered challenges &amp; live)
                  </td>
                  <td className="p-3.5">
                    Basic discussion forum spaces
                  </td>
                  <td className="p-3.5 font-semibold text-emerald-800">
                    Industry-best 9-level leaderboard + single-feed habit loop
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="margin-math" className="my-10 space-y-4 text-slate-700 leading-relaxed">
          <h2 className="text-2xl font-extrabold text-slate-900">
            3. The 3-Year Creator Margin Equations: Breakeven Thresholds &amp; SaaS Consolidation
          </h2>
          <p>
            Every creator crosses two distinct mathematical inflection points as their education
            business scales from $1,000/month to $15,000/month: first, the{" "}
            <strong>transaction-fee breakeven point</strong> between starter and pro plans; and
            second, the <strong>SaaS consolidation breakeven point</strong> where Kajabi (or a
            self-hosted WordPress stack on Cloudways) eliminates external email marketing and funnel
            subscriptions.
          </p>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 font-mono text-xs sm:text-sm text-slate-900 leading-relaxed">
            <div className="font-sans font-extrabold text-amber-900 uppercase tracking-wide mb-2">
              📐 Three Essential Creator Breakeven Proofs (2026 Rates)
            </div>
            1. Teachable Basic ($39/mo annual + 5% fee) vs. Teachable Pro ($119/mo annual + 0% fee):
            <br />
            &nbsp;&nbsp;&bull; Monthly Subscription Delta = $119 - $39 = $80.00 / month
            <br />
            &nbsp;&nbsp;&bull; Breakeven Gross Monthly Sales = $80.00 &divide; 0.05 (5% fee) = $1,600.00 / month!
            <br />
            2. Skool Hobby ($9/mo + 10% fee) vs. Skool Pro ($99/mo + 2.9% fee):
            <br />
            &nbsp;&nbsp;&bull; Monthly Subscription Delta = $99 - $9 = $90.00 / month &divide; 0.071 (7.1% fee delta) = $1,267.61 / month!
            <br />
            3. 3-Year TCO at $10,000/mo Gross Revenue + 15,000 Email Subscribers + Sales Funnels:
            <br />
            &nbsp;&nbsp;&bull; Kajabi Growth ($159/mo + $308 Stripe + $0 External ESP/Funnel) = $16,812 / 3 yrs
            <br />
            &nbsp;&nbsp;&bull; Skool Pro ($99/mo + $308 Skool fee + $149 ESP + $97 Funnel SaaS) = $23,508 / 3 yrs (+$6,696 higher!)
            <br />
            &nbsp;&nbsp;&bull; Self-Hosted WordPress on Cloudways ($28/mo VM + $20/mo FluentCRM/LearnDash + $308 Stripe) = $12,816 / 3 yrs (Lowest 3-Yr Cost!)
          </div>

          <p>
            Look closely at Proof #3 above. When a creator only runs a paid community driven by
            organic YouTube or Instagram DMs with zero email list or multi-step sales funnel,{" "}
            <strong>Skool Pro ($99/mo)</strong> is unbeatable. But the moment that creator builds a
            15,000-person email newsletter and runs automated webinar or lead-magnet funnels, paying
            for Skool <em>plus</em> ConvertKit/ActiveCampaign <em>plus</em> ClickFunnels costs{" "}
            <strong>$6,696 more over 3 years</strong> than consolidating everything inside{" "}
            <strong>Kajabi Growth</strong>—or <strong>$10,692 more over 3 years</strong> than running
            a self-hosted WordPress stack on Cloudways.
          </p>
        </section>

        <section id="architecture-deep-dive" className="my-10 space-y-5 text-slate-700 leading-relaxed">
          <h2 className="text-2xl font-extrabold text-slate-900">
            4. Deep-Dive Architectural Comparison: Funnels, Tax Compliance &amp; Student Retention
          </h2>
          <p>
            Beyond the spreadsheet math, each platform optimizes for a different stage of the
            student journey:
          </p>

          <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-3">
            <h3 className="text-lg font-extrabold text-slate-900">
              Kajabi: Top-of-Funnel Conversion, Order Bumps &amp; Email Automation
            </h3>
            <p className="text-sm leading-relaxed">
              <strong>Kajabi</strong> is built to maximize <strong>Average Order Value (AOV)</strong>{" "}
              and automated lead nurturing. Because your landing pages, opt-in forms, email drip
              sequences, checkout pages, and course player live inside one database, you can build
              conditional automations that external tools struggle to match without Zapier glue: for
              example, <em>&quot;When a student watches 75% of Module 3 Video 2, automatically send
              an email offering a 1-on-1 coaching upsell, and if they purchase the order bump at
              checkout, revoke their beginner tag.&quot;</em> Adding a single $37 checkout order
              bump and a $97 post-purchase 1-click upsell on Kajabi routinely lifts gross launch
              revenue by 18% to 30%.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-3">
            <h3 className="text-lg font-extrabold text-slate-900">
              Teachable: Global VAT/Sales Tax Automation, BNPL &amp; Academic Compliance
            </h3>
            <p className="text-sm leading-relaxed">
              <strong>Teachable</strong> shines in two areas where both Kajabi and Skool fall short
              for traditional curriculum schools: <strong>academic structure</strong> and{" "}
              <strong>hands-off international tax remittance</strong>. If you sell a $497
              certification course to students across California, Texas, Germany, the UK, and
              Australia, tracking digital goods VAT thresholds is an accounting nightmare. Through{" "}
              <strong>Teachable:Pay and BackOffice</strong>, Teachable acts as the automated tax
              handler at checkout—calculating, collecting, and remitting EU/UK VAT and US state
              sales tax while also offering built-in{" "}
              <strong>Buy Now, Pay Later (Klarna and Afterpay)</strong> so students can pay in 4
              installments while you receive your payout upfront.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-3">
            <h3 className="text-lg font-extrabold text-slate-900">
              Skool (And Self-Hosted WordPress Alternatives): Solving the 8% Course Completion Problem
            </h3>
            <p className="text-sm leading-relaxed">
              Traditional standalone video courses on Kajabi and Teachable suffer from a notoriously
              low industry completion rate (often 5% to 12%) because students watch two modules in
              isolation and forget to log back in. <strong>Skool</strong> flips the hierarchy: the{" "}
              <strong>Community feed is the front door</strong>, and the{" "}
              <strong>Classroom tab sits one click away</strong>, tied directly to the 9-level
              gamified leaderboard and live call calendar. And for creators who want Skool&apos;s
              community-plus-course layout <em>without</em> paying $99/month per group or giving up
              HTML/SEO ownership, deploying <strong>FluentCommunity + LearnDash + FluentCRM</strong>{" "}
              on a managed{" "}
              <strong>Cloudways</strong> server delivers a 100% self-owned creator portal with zero
              platform fees.
            </p>
          </div>
        </section>

        <section id="buyer-scenarios" className="my-10 space-y-4 text-slate-700 leading-relaxed">
          <h2 className="text-2xl font-extrabold text-slate-900">
            5. Worked Buyer Decision Scenarios: Which Platform Should You Build On?
          </h2>
          <ul className="list-disc pl-6 space-y-3 text-sm sm:text-base">
            <li>
              <strong>Scenario A — High-Engagement Coaching Cohorts &amp; Recurring Paid Communities:</strong>{" "}
              Choose <strong>Skool ($9 Hobby &rarr; $99 Pro above $1,268/mo)</strong>. When your main
              value proposition is weekly Q&amp;A calls, peer accountability, and gamified course
              unlocks, Skool&apos;s habit loop keeps monthly churn significantly lower than static
              course portals. Read our{" "}
              <Link
                href="/reviews/skool"
                className="text-indigo-600 font-semibold underline"
              >
                Full Skool Review
              </Link>{" "}
              and{" "}
              <Link
                href="/skool-vs-circle-vs-mighty-networks"
                className="text-indigo-600 font-semibold underline"
              >
                Skool vs. Circle vs. Mighty Networks Breakdown
              </Link>
              .
            </li>
            <li>
              <strong>Scenario B — Multi-Product Digital Educators Running Evergreen Webinars &amp; Email Funnels:</strong>{" "}
              Choose <strong>Kajabi Basic ($119/mo) or Growth ($159/mo)</strong>. Replacing your
              external ESP, landing page software, checkout cart, course host, and coaching scheduler
              with one unified login saves hours of Zapier debugging and $2,000+/year in stacked
              SaaS bills.
            </li>
            <li>
              <strong>Scenario C — Certification Academies Selling Globally &amp; Creators Wanting 100% Ownership:</strong>{" "}
              Choose <strong>Teachable Pro ($119/mo)</strong> if you need enforced lesson
              compliance, graded exams, CEU certificates, and automated EU/UK VAT handling—or deploy
              a <strong>Self-Hosted WordPress LMS on Cloudways ($28/mo)</strong> if you want full
              source-code ownership, SEO authority on your root domain, and 0% platform fees forever.
            </li>
          </ul>
        </section>

        <div className="flex flex-wrap gap-3 my-8">
          <div
            dangerouslySetInnerHTML={{
              __html:
                '<a href="https://bbux.me/XarLClkjd" target="_blank" rel="sponsored noopener" style="display:inline-block;background:#4f46e5;color:#ffffff !important;font-weight:700;padding:12px 18px;border-radius:10px;text-decoration:none;font-size:14px;">Launch Your Self-Hosted WordPress LMS &amp; Community on Cloudways (Free Trial) &rarr;</a>',
            }}
          />
        </div>

        <section id="faq" className="my-10">
          <h2 className="text-2xl font-extrabold text-slate-900 mb-4">
            6. Frequently Asked Questions: Kajabi vs. Teachable vs. Skool
          </h2>
          <div className="space-y-4">
            <div className="bg-white border border-slate-200 rounded-xl p-5">
              <h3 className="font-bold text-slate-900 text-base mb-2">
                At what monthly sales volume should a creator upgrade from Teachable Basic ($39/mo) to Teachable Pro ($119/mo)?
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Teachable Basic ($39/month billed annually, or $59 billed monthly) charges a{" "}
                <strong>5% platform transaction fee</strong> on top of standard credit card
                processing (2.9% + $0.30), whereas Teachable Pro ($119/month billed annually, or
                $159 billed monthly) drops the platform transaction fee to <strong>0%</strong>.
                Because the annual-billed monthly subscription difference is $80 ($119 minus $39),
                the exact mathematical breakeven point is{" "}
                <code>$80 / 0.05 = $1,600 per month</code> in gross course sales. Once your school
                sells more than $1,600/month, Teachable Pro immediately increases your net margin.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-5">
              <h3 className="font-bold text-slate-900 text-base mb-2">
                Why does Kajabi often cost less than Skool or Teachable once your email list passes 10,000 subscribers?
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                While Kajabi Basic ($119/mo annual) and Kajabi Growth ($159/mo annual) look
                expensive compared to Skool Pro ($99/mo) or Teachable Basic ($39/mo), Kajabi
                includes a <strong>built-in email marketing engine</strong> (up to 10,000 active
                contacts on Basic and 25,000 on Growth), automated webinar/opt-in sales funnels,
                custom website hosting, and 0% platform transaction fees. Creators on Skool must pay
                separately for an external ESP (such as Kit/ConvertKit or ActiveCampaign at
                $100–$200+/mo) plus a landing page builder (ClickFunnels or Unbounce at
                $79–$147/mo), making Kajabi cheaper on a consolidated TCO basis.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-5">
              <h3 className="font-bold text-slate-900 text-base mb-2">
                Which platform handles EU VAT, UK digital taxes, and US state sales tax automatically at checkout?
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                <strong>Teachable</strong> (via Teachable:Pay / BackOffice) and{" "}
                <strong>Skool</strong> (via Skool&apos;s built-in merchant checkout) automatically
                calculate, collect, and remit global digital goods VAT/GST and applicable US sales
                taxes at checkout without requiring you to configure third-party tax software.
                Kajabi integrates with Kajabi Payments and Stripe Tax to calculate and collect
                global sales tax and VAT, though you remain the merchant of record responsible for
                tax remittance filings in your registered jurisdictions.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-5">
              <h3 className="font-bold text-slate-900 text-base mb-2">
                Can you host a self-paced video course on Skool without Kajabi or Teachable?
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Yes. Every Skool group ($9/mo Hobby or $99/mo Pro) includes a native{" "}
                <strong>Classroom tab</strong> with unlimited native video hosting, module/lesson
                hierarchies, drip schedules, action items, and level-based gamification unlocks.
                However, Skool does not include graded multiple-choice quizzes, formal completion
                certificates, 1-click post-purchase order bumps/upsells, or public marketing landing
                pages with multi-pay installment plans.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-5">
              <h3 className="font-bold text-slate-900 text-base mb-2">
                How much can a creator save over 3 years by self-hosting WordPress (LearnDash + FluentCommunity) on Cloudways?
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                A self-hosted WordPress LMS stack running on a{" "}
                <strong>Cloudways 2GB or 4GB Managed Cloud VM ($28 to $54/month)</strong> paired with
                LearnDash or TutorLMS, FluentCRM (unlimited email subscribers via Amazon SES at
                $0.10 per 1,000 emails), and WooCommerce/SureCart charges{" "}
                <strong>0% platform transaction fees</strong> and never raises your bill as your
                email list grows from 5,000 to 100,000 contacts—saving $4,000 to $9,000 over 36
                months compared to hosted SaaS tiers.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-slate-900 text-slate-200 rounded-2xl p-6 my-8">
          <h3 className="text-lg font-extrabold text-white mb-3">
            Related Creator Platform &amp; Community Guides
          </h3>
          <ul className="space-y-2 text-sm list-disc pl-5">
            <li>
              <Link
                href="/reviews/skool"
                className="text-indigo-300 hover:underline font-semibold"
              >
                Skool Review (2026): Hobby ($9) vs. Pro ($99) Pricing, Gamification &amp; Pros/Cons
              </Link>
            </li>
            <li>
              <Link
                href="/skool-vs-circle-vs-mighty-networks"
                className="text-indigo-300 hover:underline font-semibold"
              >
                Skool vs. Circle vs. Mighty Networks: Community Transaction Fees &amp; Feature Matrix
              </Link>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
