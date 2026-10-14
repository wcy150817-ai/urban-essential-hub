import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import {
  Users,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  ChevronRight,
  ArrowLeft,
  Zap,
  Clock,
  BarChart3,
  DollarSign,
  HelpCircle,
  AlertTriangle,
  ArrowRight,
  Target,
  Sparkles,
  Trophy,
  GraduationCap,
  Calendar,
  Layers,
  XCircle,
  TrendingUp,
} from 'lucide-react';
import SkoolRevenueCalc from './SkoolRevenueCalc';

export const metadata: Metadata = {
  title: 'Is Skool Worth It in 2026? Community Pricing, Feature Analysis & Creator Revenue Calculator',
  description:
    'An independent analysis of Skool for course creators, educators, and community builders: $99/mo flat pricing math, student retention gamification, Stripe fees, and comparison vs Kajabi, Circle, and Teachable.',
  alternates: { canonical: '/reviews/skool' },
  openGraph: {
    title: 'Is Skool Worth It in 2026? Community Pricing, Feature Analysis & Creator Revenue Calculator',
    description:
      'Verified platform pricing, unit economics modeling, gamification mechanics, and creator subscription economics.',
    url: 'https://urbanessentialhub.com/reviews/skool',
    type: 'article',
  },
};

const PAGE_URL = 'https://urbanessentialhub.com/reviews/skool';

export default function SkoolReviewPage() {
  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Is Skool Worth It in 2026? Community Pricing, Feature Analysis & Creator Revenue Calculator',
    description:
      'A comprehensive evaluation of Skool creator economics, comparing flat-fee subscription models, course engagement rates, and Stripe payment processing overhead against legacy course platforms.',
    datePublished: '2026-10-14',
    dateModified: '2026-10-14',
    mainEntityOfPage: PAGE_URL,
    author: { '@type': 'Organization', name: 'Urban Essential Hub Software Research Desk' },
    publisher: { '@type': 'Organization', name: 'Urban Essential Hub' },
  };

  const softwareLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Skool Community & Course Platform',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, iOS, Android',
    offers: {
      '@type': 'Offer',
      price: '99.00',
      priceCurrency: 'USD',
    },
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How much does Skool cost per month in 2026?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Skool maintains a single flat-rate pricing plan of $99 per month per group (or $990 per year when billed annually, effectively providing two months free). There are no tiered upgrades, user tiers, or student caps. Creators receive unlimited members, unlimited classroom courses, native video hosting, and mobile apps without incremental seat charges.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does Skool take a percentage cut of creator membership sales?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. Skool does not charge a platform revenue take-rate on creator sales. Transactions are processed directly through your connected Stripe account at standard merchant processing rates (typically 2.9% plus $0.30 per successful charge in the US). This contrasts with platforms like Teachable Basic, which charges a 5% transaction fee on top of monthly software subscriptions.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does Skool differ from Kajabi, Teachable, and Circle?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Kajabi and Teachable are built primarily as traditional course hosting and marketing funnel suites with complex website builders and upsell funnels. Circle is designed as an enterprise community platform with granular channel permissions. Skool strips away complex funnel architecture in favor of a unified single-tab interface combining a community discussion feed, a classroom tab, a synchronized event calendar, and a 9-level engagement gamification engine.',
        },
      },
      {
        '@type': 'Question',
        name: 'How many paying members are needed to break even on Skool?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Because Skool charges a flat $99 monthly fee, the breakeven threshold is remarkably low. If you charge $49 per month for your community, you achieve net profitability with just 3 active paying members. If you charge $99 per month, only 2 members are required to completely cover all platform and merchant processing expenses.',
        },
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-slate-50 text-slate-900 pb-16 sm:pb-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />

      {/* Header */}
      <header className="border-b border-slate-200 bg-white/95 backdrop-blur sticky top-0 z-40">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group text-slate-600 hover:text-slate-900 transition">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-semibold">Back to All Tools</span>
          </Link>
          <div className="flex items-center gap-4 text-xs font-medium text-slate-500">
            <span>SaaS Architecture & Pricing Desk</span>
            <span className="hidden sm:inline-block px-2.5 py-1 rounded-full bg-orange-100 text-orange-800 font-bold">
              Updated Oct 2026
            </span>
          </div>
        </div>
      </header>

      {/* Breadcrumbs */}
      <div className="bg-slate-100 border-b border-slate-200 text-xs text-slate-500 py-2.5">
        <div className="max-w-5xl mx-auto px-4 flex items-center gap-1.5 flex-wrap">
          <Link href="/" className="hover:text-slate-800">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span>SaaS Reviews</span>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-800 font-semibold">Skool Creator Platform Analysis</span>
        </div>
      </div>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-4 py-8 sm:py-12 flex-1">
        {/* Title & Meta */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 border border-orange-200 text-orange-800 text-xs font-bold uppercase tracking-wider mb-4">
            Creator Economy Financial Audit
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Is Skool Worth It in 2026? Community Pricing, Feature Analysis & Creator Revenue Calculator
          </h1>
          <p className="text-lg text-slate-600 mt-4 leading-relaxed">
            The creator economy has shifted decisively from isolated one-off digital video downloads to recurring subscription communities. While legacy platforms like Kajabi and Teachable charge tiered subscription penalties as your audience expands, Skool’s flat $99/month pricing and native gamification have disrupted the learning management market. This technical evaluation models the unit economics, student retention data, and software architecture to determine whether Skool is the right vehicle for your knowledge business.
          </p>
          <div className="mt-4 p-3.5 bg-blue-50 border border-blue-200 rounded-lg text-xs text-blue-800">
            <strong>Editorial & Financial Disclosure:</strong> Software specifications, Stripe payment processing calculations, and feature comparisons in this guide are derived from verified public documentation as of October 2026. This review contains affiliate and partner referral links; we may receive compensation if you start a paid plan through our links at no extra cost to you.
          </div>
        </div>

        {/* Executive Summary Card */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 mb-10 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Zap className="w-5 h-5 text-orange-600" />
            Executive Verdict: The Skool Unit Economics Advantage
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="border-l-4 border-emerald-500 pl-4">
              <div className="font-bold text-slate-900 mb-1">Predictable Flat Overhead</div>
              <p className="text-slate-600 text-xs leading-relaxed">
                Skool charges exactly $99/month whether you host 10 students or 10,000 members. No contact surcharges, no video bandwidth bills, and 0% platform revenue cuts.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <div className="font-bold text-slate-900 mb-1">Built-in Gamification Engine</div>
              <p className="text-slate-600 text-xs leading-relaxed">
                9 progression levels tie forum participation to unlocking premium modules. Peer-driven likes award points, transforming passive course consumers into active contributors.
              </p>
            </div>
            <div className="border-l-4 border-amber-500 pl-4">
              <div className="font-bold text-slate-900 mb-1">Intentional Simplicity</div>
              <p className="text-slate-600 text-xs leading-relaxed">
                Skool lacks complex marketing checkout funnels, webinar automation, and extensive email marketing suites. You will need an external tool like ConvertKit or MailerLite for lead generation.
              </p>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-slate-100 flex flex-wrap gap-4 items-center justify-between">
            <div className="text-xs text-slate-500">
              Official pricing: <strong>$99/month</strong> per group &bull; 14-day risk-free creator trial
            </div>
            <div dangerouslySetInnerHTML={{ __html: '<a href="https://www.skool.com/signup?ref=dfdaa1968c7442149993730d69fa0487" target="_blank" rel="sponsored noopener" style="display:inline-block;color:#ffffff !important;background:#ea580c;padding:12px 24px;border-radius:10px;font-weight:700;text-decoration:none;font-size:0.875rem">Start 14-Day Free Skool Trial &rarr;</a>' }} />
          </div>
        </div>

        {/* Interactive Simulator Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-2 flex items-center gap-2">
            <BarChart3 className="w-6 h-6 text-orange-600" />
            Interactive Skool Creator Revenue & Profit Simulator
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-6">
            Use this financial calculator to forecast your gross billing volume, Stripe credit card processing overhead, and net creator profit based on your specific audience size and community membership pricing.
          </p>

          <SkoolRevenueCalc />
        </section>

        {/* Deep Dive: The Death of the $997 Course */}
        <section className="mb-12 space-y-4 text-slate-700 leading-relaxed">
          <h2 className="text-2xl font-bold text-slate-900">
            The Death of the One-Off $997 Course & The Rise of Micro-MRR
          </h2>
          <p>
            For over a decade, digital information marketing followed a predictable playbook: creators spent months constructing an elaborate video curriculum, created a high-pressure countdown webinar, and sold the course for a one-off fee of $497 to $1,997. However, industry analytics consistently showed a devastating flaw in this model: fewer than 10% of purchasers ever completed the third module, and refund requests surged when lonely students became stuck without personalized accountability.
          </p>
          <p>
            Moreover, one-off course sales create immense operational volatility. Every month, creators restart their sales pipeline from zero. If an algorithm update suppresses organic reach or paid ad costs fluctuate, creator income collapses.
          </p>
          <p>
            Skool was engineered specifically to solve both completion drop-off and revenue volatility by replacing static digital video hosting with a <strong>Subscription Community (Micro-MRR) ecosystem</strong>. Instead of demanding $1,000 upfront, creators charge $29 to $99 per month. For the student, the entry barrier is minimal. For the creator, recurring subscription revenue compounds each month:
          </p>
          
          <div className="overflow-x-auto my-6 border border-slate-200 rounded-xl bg-white">
            <table className="w-full text-left text-sm border-collapse min-w-[580px]">
              <thead className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                <tr>
                  <th className="p-3.5">Community Tier</th>
                  <th className="p-3.5">Monthly Dues</th>
                  <th className="p-3.5">Member Count</th>
                  <th className="p-3.5">Gross MRR</th>
                  <th className="p-3.5">Annualized ARR</th>
                  <th className="p-3.5">Net Creator Take-Home</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-600">
                <tr>
                  <td className="p-3.5 font-semibold text-slate-900">Starter Hobbyists</td>
                  <td className="p-3.5">$29 / mo</td>
                  <td className="p-3.5">50 members</td>
                  <td className="p-3.5">$1,450 / mo</td>
                  <td className="p-3.5">$17,400 / yr</td>
                  <td className="p-3.5 text-emerald-600 font-bold">$1,294 / mo</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-semibold text-slate-900">Core Community</td>
                  <td className="p-3.5">$49 / mo</td>
                  <td className="p-3.5">150 members</td>
                  <td className="p-3.5">$7,350 / mo</td>
                  <td className="p-3.5">$88,200 / yr</td>
                  <td className="p-3.5 text-emerald-600 font-bold">$6,994 / mo</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-semibold text-slate-900">Pro Academy</td>
                  <td className="p-3.5">$99 / mo</td>
                  <td className="p-3.5">250 members</td>
                  <td className="p-3.5">$24,750 / mo</td>
                  <td className="p-3.5">$297,000 / yr</td>
                  <td className="p-3.5 text-emerald-600 font-bold">$23,859 / mo</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-semibold text-slate-900">High-Ticket Mastermind</td>
                  <td className="p-3.5">$299 / mo</td>
                  <td className="p-3.5">75 members</td>
                  <td className="p-3.5">$22,425 / mo</td>
                  <td className="p-3.5">$269,100 / yr</td>
                  <td className="p-3.5 text-emerald-600 font-bold">$21,653 / mo</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 italic">
            *Net creator take-home pay reflects Skool’s flat $99/mo fee and standard Stripe processing fees (2.9% + $0.30 per charge).
          </p>
        </section>

        {/* Competitor Comparison Matrix */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Platform Head-to-Head: Skool vs Kajabi vs Circle vs Teachable
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-6">
            When choosing where to anchor your digital business, selecting the right software architecture determines your operational overhead for years to come. Here is how Skool compares to the top three industry alternatives:
          </p>

          <div className="overflow-x-auto border border-slate-200 rounded-xl bg-white shadow-sm mb-6">
            <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[620px]">
              <thead className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                <tr>
                  <th className="p-3.5">Feature / Metric</th>
                  <th className="p-3.5 bg-orange-50/70 text-orange-950">Skool</th>
                  <th className="p-3.5">Circle.so</th>
                  <th className="p-3.5">Kajabi</th>
                  <th className="p-3.5">Teachable</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-600">
                <tr>
                  <td className="p-3.5 font-semibold text-slate-900">Base Price (Monthly)</td>
                  <td className="p-3.5 bg-orange-50/40 font-bold text-orange-700">$99 / mo flat</td>
                  <td className="p-3.5">$99 / mo (Basic)</td>
                  <td className="p-3.5">$149 / mo (Basic)</td>
                  <td className="p-3.5">$59 / mo (Basic)</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-semibold text-slate-900">Student / Member Limits</td>
                  <td className="p-3.5 bg-orange-50/40 font-semibold text-emerald-600">Unlimited</td>
                  <td className="p-3.5">Tiered (extra per 1k)</td>
                  <td className="p-3.5 text-rose-600">1,000 active contacts</td>
                  <td className="p-3.5">Tiered tiers</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-semibold text-slate-900">Platform Transaction Cuts</td>
                  <td className="p-3.5 bg-orange-50/40 font-semibold text-emerald-600">0%</td>
                  <td className="p-3.5">1% to 4% on lower tiers</td>
                  <td className="p-3.5">0% (Stripe only)</td>
                  <td className="p-3.5 text-rose-600">5% on Basic plan</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-semibold text-slate-900">Gamification Engine</td>
                  <td className="p-3.5 bg-orange-50/40 font-semibold text-emerald-600">Built-in (9 levels, locks)</td>
                  <td className="p-3.5 text-slate-400">Limited / Custom Zapier</td>
                  <td className="p-3.5 text-slate-400">None native</td>
                  <td className="p-3.5 text-slate-400">None native</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-semibold text-slate-900">Native Mobile Apps</td>
                  <td className="p-3.5 bg-orange-50/40 font-semibold text-slate-900">iOS & Android (Free)</td>
                  <td className="p-3.5">iOS & Android</td>
                  <td className="p-3.5">Kajabi App (Shared)</td>
                  <td className="p-3.5">iOS & Android</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-semibold text-slate-900">Primary Product Focus</td>
                  <td className="p-3.5 bg-orange-50/40 font-bold text-slate-900">Community + Classroom</td>
                  <td className="p-3.5">Enterprise Community</td>
                  <td className="p-3.5">Marketing Funnels + LMS</td>
                  <td className="p-3.5">Course Sales LMS</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="flex flex-wrap gap-4 items-center justify-between p-4 bg-slate-100 rounded-xl">
            <span className="text-xs text-slate-600">Looking for accredited degree curriculum or academic university certifications instead?</span>
            <div dangerouslySetInnerHTML={{ __html: '<a href="https://bbux.me/WarLXD1C" target="_blank" rel="sponsored noopener" style="display:inline-block;color:#ffffff !important;background:#1e40af;padding:10px 20px;border-radius:8px;font-weight:700;font-size:0.8rem;text-decoration:none">Explore Coursera Professional Programs &rarr;</a>' }} />
          </div>
        </section>

        {/* Feature Deep Dive: The 5 Core Pillars */}
        <section className="mb-12 space-y-6">
          <h2 className="text-2xl font-bold text-slate-900">
            The 5 Pillars of Skool’s Architecture
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <div className="w-10 h-10 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center font-bold mb-4">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">1. The Community Forum</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Modeled after modern social feeds like Reddit and Twitter, the Community tab supports pinned posts, rich formatting, video embeds, gif reactions, and nested discussions. Categories allow creators to organize discussions (e.g., #wins, #introductions, #ask-the-coach) without the cognitive overload of complex multi-channel Slack/Discord trees.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center font-bold mb-4">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">2. The Integrated Classroom</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Creators can host an unlimited number of courses, organized into modular sets. Skool includes native, lightning-fast video hosting with zero buffering, powered by Cloudflare Stream. Lessons support file attachments, interactive action checklists, and drip releases based on days enrolled or community level.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center font-bold mb-4">
                <Trophy className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">3. Level-Based Gamification</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Skool automatically ranks members across 9 customizable levels based on points earned from community likes. High-value course modules, exclusive masterminds, or direct coaching calls can be locked behind specific levels, incentivizing students to help peers and maintain daily login streaks.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold mb-4">
                <Calendar className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">4. Event Calendar with Timezone Sync</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Live coaching calls, workshops, and office hours are scheduled in the Calendar tab. Skool automatically translates event times into each student’s local timezone and provides 1-click sync buttons for Google Calendar, Apple Calendar, and Outlook, dramatically reducing live attendance drop-off.
              </p>
            </div>
          </div>
        </section>

        {/* When NOT to Choose Skool */}
        <section className="mb-12 bg-amber-50 border border-amber-200 rounded-2xl p-6 sm:p-8">
          <h2 className="text-xl font-bold text-amber-900 mb-4 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-amber-600" />
            Honest Limitations: When You Should Avoid Skool
          </h2>
          <p className="text-sm text-amber-800 leading-relaxed mb-4">
            While Skool is exceptional for community-driven learning, it is not a complete all-in-one replacement for every business model:
          </p>
          <ul className="space-y-2.5 text-sm text-amber-900">
            <li className="flex items-start gap-2">
              <XCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <span><strong>No Native Email Marketing Funnels:</strong> Skool sends automated transaction emails and community activity digests, but it does not have a broadcast newsletter engine or behavioral automation builder. You will need an external email platform like ConvertKit.</span>
            </li>
            <li className="flex items-start gap-2">
              <XCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <span><strong>No Checkout Bump Offers / 1-Click Upsells:</strong> Unlike Kajabi or ClickFunnels, Skool’s checkout is simple: a single subscription or one-time payment page. Complex multi-tier order bumps are not currently supported natively.</span>
            </li>
            <li className="flex items-start gap-2">
              <XCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <span><strong>No Standalone Website CMS:</strong> You cannot build a full company blog, marketing portfolio, or public documentation site on Skool. You should maintain your external web presence on WordPress, Webflow, or Next.js.</span>
            </li>
          </ul>
        </section>

        {/* Final CTA Bar */}
        <div className="bg-gradient-to-r from-orange-600 to-amber-600 text-white rounded-2xl p-8 text-center my-10 shadow-lg">
          <h2 className="text-2xl sm:text-3xl font-black mb-3">
            Ready to Turn Your Expertise into Predictable MRR?
          </h2>
          <p className="text-orange-100 max-w-2xl mx-auto text-sm sm:text-base mb-6 leading-relaxed">
            Test Skool’s complete feature set risk-free for 14 days. Set up your classroom, invite your first beta cohort, and experience the engagement power of level-based gamification.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div dangerouslySetInnerHTML={{ __html: '<a href="https://www.skool.com/signup?ref=dfdaa1968c7442149993730d69fa0487" target="_blank" rel="sponsored noopener" style="display:inline-block;color:#ea580c !important;background:#ffffff;padding:14px 32px;border-radius:12px;font-weight:800;font-size:1rem;text-decoration:none;box-shadow:0 4px 6px rgba(0,0,0,0.1)">Start 14-Day Free Skool Trial &rarr;</a>' }} />
          </div>
          <div className="text-xs text-orange-200 mt-4">
            $99/month flat after trial &bull; Unlimited students &bull; Cancel anytime with one click
          </div>
        </div>

        {/* FAQs */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <details className="bg-white border border-slate-200 rounded-xl p-4 cursor-pointer">
              <summary className="font-semibold text-slate-900">How much does Skool cost per month in 2026?</summary>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                Skool maintains a single flat-rate pricing plan of $99 per month per group (or $990 per year when billed annually, effectively providing two months free). There are no tiered upgrades, user tiers, or student caps. Creators receive unlimited members, unlimited classroom courses, native video hosting, and mobile apps without incremental seat charges.
              </p>
            </details>

            <details className="bg-white border border-slate-200 rounded-xl p-4 cursor-pointer">
              <summary className="font-semibold text-slate-900">Does Skool take a percentage cut of creator membership sales?</summary>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                No. Skool does not charge a platform revenue take-rate on creator sales. Transactions are processed directly through your connected Stripe account at standard merchant processing rates (typically 2.9% plus $0.30 per successful charge in the US). This contrasts with platforms like Teachable Basic, which charges a 5% transaction fee on top of monthly software subscriptions.
              </p>
            </details>

            <details className="bg-white border border-slate-200 rounded-xl p-4 cursor-pointer">
              <summary className="font-semibold text-slate-900">How does Skool differ from Kajabi, Teachable, and Circle?</summary>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                Kajabi and Teachable are built primarily as traditional course hosting and marketing funnel suites with complex website builders and upsell funnels. Circle is designed as an enterprise community platform with granular channel permissions. Skool strips away complex funnel architecture in favor of a unified single-tab interface combining a community discussion feed, a classroom tab, a synchronized event calendar, and a 9-level engagement gamification engine.
              </p>
            </details>

            <details className="bg-white border border-slate-200 rounded-xl p-4 cursor-pointer">
              <summary className="font-semibold text-slate-900">How many paying members are needed to break even on Skool?</summary>
              <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                Because Skool charges a flat $99 monthly fee, the breakeven threshold is remarkably low. If you charge $49 per month for your community, you achieve net profitability with just 3 active paying members. If you charge $99 per month, only 2 members are required to completely cover all platform and merchant processing expenses.
              </p>
            </details>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-8 text-center text-xs text-slate-500">
        <div className="max-w-5xl mx-auto px-4">
          <p>© 2026 Urban Essential Hub. All rights reserved. Independent B2B SaaS benchmarks, unit economics modeling, and software infrastructure analysis.</p>
        </div>
      </footer>
    </div>
  );
}
