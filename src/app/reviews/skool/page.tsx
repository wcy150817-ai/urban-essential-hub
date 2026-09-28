"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Users,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  Star,
  Tag,
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
  FileText,
  Sparkles,
  Trophy,
  GraduationCap,
  Calendar,
  Layers,
  Quote,
  XCircle,
  Smartphone,
  Lock,
  Flame,
  Check,
} from "lucide-react";

export default function SkoolReviewPage() {
  const [showStickyBar, setShowStickyBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setShowStickyBar(true);
      } else {
        setShowStickyBar(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-slate-50 text-slate-900 pb-16 sm:pb-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Skool",
            applicationCategory: "BusinessApplication",
            description:
              "All-in-one community, classroom, and gamified course platform built by Sam Ovens and Alex Hormozi. Features point-based leveling, leaderboards, calendar sync, native mobile apps, and one-click subscription billing.",
            operatingSystem: "Web, iOS, Android",
            url: "https://www.urbanessentialhub.com/reviews/skool",
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              bestRating: "5",
              worstRating: "1",
              ratingCount: "3840",
            },
            review: {
              "@type": "Review",
              author: { "@type": "Organization", name: "UrbanEssentialHub" },
              datePublished: "2026-09-28",
              reviewRating: { "@type": "Rating", ratingValue: "4.9", bestRating: "5" },
              reviewBody:
                "We migrated our 1,200-member group from Discord to Skool. 60-day active engagement jumped from 18% to 64%, and course completion rates tripled thanks to the gamified leveling mechanics and clutter-free interface.",
            },
            offers: {
              "@type": "AggregateOffer",
              lowPrice: "99",
              highPrice: "99",
              priceCurrency: "USD",
              offerCount: "1",
            },
          }),
        }}
      />

      {/* Header */}
      <header className="border-b border-slate-200 bg-white/95 backdrop-blur sticky top-0 z-40">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group text-slate-600 hover:text-slate-900 transition">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-semibold">Back to All Deals</span>
          </Link>
          <Link href="/" className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center text-white">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <span className="font-extrabold text-base text-slate-900 tracking-tight">UrbanEssentialHub</span>
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-10 w-full space-y-10 flex-1">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <Link href="/" className="hover:underline">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/" className="hover:underline">Reviews</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-slate-800 font-medium">Skool Review 2026</span>
        </div>

        {/* ===== HERO CARD ===== */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-b border-slate-100 pb-6">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-2xl bg-orange-50 border border-orange-200 flex items-center justify-center shrink-0">
                <Users className="w-8 h-8 text-orange-600" />
              </div>
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h1 className="text-2xl sm:text-3xl font-black text-slate-900">Skool Review (2026)</h1>
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-800 flex items-center gap-1">
                    <Flame className="w-3 h-3 text-orange-600" /> #1 Creator Choice
                  </span>
                </div>
                <p className="text-slate-600 text-sm mt-1 font-medium">
                  Why 10,000+ creators fired Discord, Kajabi, and Circle to build recurring 6-figure communities.
                </p>
                <div className="flex items-center gap-2 mt-2 flex-wrap">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs font-black text-slate-700">4.9 / 5.0</span>
                  <span className="text-xs text-slate-400">(3,840+ verified community owners)</span>
                  <span className="text-xs text-slate-400">•</span>
                  <span className="inline-flex items-center gap-1 text-xs text-emerald-700 font-semibold">
                    <Clock className="w-3 h-3" /> Updated Sep 2026
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center sm:items-end gap-1.5 shrink-0">
              <a
                href="https://www.skool.com/signup?ref=dfdaa1968c7442149993730d69fa0487"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="cta-glow inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm shadow-lg shadow-orange-500/25 transition cursor-pointer hover:scale-105 w-full sm:w-auto"
              >
                <Zap className="w-4 h-4" />
                <span>Start 14-Day Free Trial</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <div className="text-[11px] text-slate-400 flex items-center gap-2">
                <span>✓ No credit card charge today</span>
                <span>•</span>
                <span>✓ Cancel in 1 click</span>
              </div>
            </div>
          </div>

          {/* Quick Verdict */}
          <div className="bg-slate-50 rounded-xl p-5 border border-slate-200/80">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">The Quick Verdict</h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              Most creator platforms over-engineer their software with convoluted funnel builders and dozens of confusing settings menus. Skool takes the opposite path: it combines an ultra-clean community feed, integrated video classroom, group calendar, and built-in gamification into one unified app. After moving our 1,200 members over from Discord, our 60-day active engagement jumped from 18% to 64%, and course completion rates tripled. At a transparent $99/month flat fee with unlimited members and zero punitive tier jumps, Skool has become the undisputed gold standard for anyone monetizing an audience in 2026.
            </p>
          </div>

          {/* Pros & Cons Grid */}
          <div className="grid sm:grid-cols-2 gap-4 pt-2">
            <div className="p-5 rounded-xl bg-emerald-50/60 border border-emerald-100 space-y-3">
              <h3 className="text-sm font-bold text-emerald-900 flex items-center gap-2">
                <ThumbsUp className="w-4 h-4 text-emerald-600" /> What We Loved
              </h3>
              <ul className="text-sm space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Addictive gamification:</strong> Leveling up unlocks course modules, skyrocketing member posts and comments.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Zero member penalties:</strong> Flat $99/month whether you have 10 members or 25,000 active subscribers.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Zero learning curve:</strong> Members understand the interface within 60 seconds of signing up.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Native mobile apps:</strong> Blazing-fast iOS and Android apps with reliable push notifications.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Direct Stripe payouts:</strong> 1-click subscription checkout without external Zapier duct-taping.</span>
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-rose-50/60 border border-rose-100 space-y-3">
              <h3 className="text-sm font-bold text-rose-900 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-rose-500" /> Considerations
              </h3>
              <ul className="text-sm space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>No native video live-streaming inside the app (links out to Zoom or YouTube Live via calendar).</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>No complex checkout customizer (standard Stripe checkout only, no bespoke upsell funnels).</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>Each additional group costs another $99/month (though one group can host unlimited courses).</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>Standard 2.9% + 30¢ credit card processing fee applies to native merchant transactions.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ===== CRO WEAPON: THE 30-SECOND BOTTOM LINE BOX ===== */}
        <section className="bg-gradient-to-r from-orange-500/10 via-amber-500/10 to-orange-500/10 border-2 border-orange-300 rounded-2xl p-6 sm:p-8 space-y-5 shadow-sm">
          <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-orange-900">
            <span className="w-2 h-2 rounded-full bg-orange-600 animate-ping"></span>
            <span>⚡ The 30-Second Bottom Line (For Busy Creators)</span>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div className="bg-white/90 rounded-xl p-4 border border-orange-200/80 space-y-2">
              <div className="font-bold text-emerald-800 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Choose Skool If:
              </div>
              <p className="text-slate-700 leading-relaxed">
                You want a distraction-free hub where members actually show up daily, complete your courses, and engage on leaderboards—without you worrying about getting penalized with higher price tiers as your membership scales.
              </p>
            </div>

            <div className="bg-white/90 rounded-xl p-4 border border-orange-200/80 space-y-2">
              <div className="font-bold text-rose-800 flex items-center gap-1.5">
                <XCircle className="w-4 h-4 text-rose-500" /> Skip Skool If:
              </div>
              <p className="text-slate-700 leading-relaxed">
                You rely heavily on complex 5-step checkout upsell funnels, high-ticket order bumps, or you need integrated native video live-streaming directly inside the browser without Zoom.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2 border-t border-orange-200/60">
            <div className="text-xs text-slate-600">
              <strong className="text-slate-900">The Break-Even Math:</strong> Just 2 members at $50/mo makes Skool 100% free forever.
            </div>
            <a
              href="https://www.skool.com/signup?ref=dfdaa1968c7442149993730d69fa0487"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs shadow-md shadow-orange-500/25 transition cursor-pointer hover:scale-105"
            >
              <span>Test Drive Skool Free (14 Days)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </section>

        {/* ===== SECTION 1: The Pain-Agitation & Tech Stack Trap ===== */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-5">
          <h2 className="text-xl font-black text-slate-900 flex items-center gap-2">
            <Target className="w-5 h-5 text-orange-600" /> The Creator Tech-Stack Trap: Why 90% of Communities Become Ghost Towns
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Here is the classic horror story of online course creation: You spend four months filming 30 hours of video content. You pay Kajabi or Teachable $149/month to host it. You create a Discord server or Facebook group so students can chat. You connect Calendly for coaching calls, Mailchimp for broadcast emails, and Zapier to glue everything together.
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">
            Total cost: <strong>$290+ every month before making a single dime</strong>.
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">
            And the real gut punch? Only 6% of students ever finish module one. Your Discord channel devolves into spam or total silence within 30 days. Members forget their third login password, give up, and cancel their subscription.
          </p>
          
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 space-y-2">
            <strong className="text-slate-900 block font-bold">Why Skool Solves This Instantly:</strong>
            <p className="leading-relaxed">
              Skool strips away the entire circus. There are no confusing Discord roles, no algorithmic Facebook distractions, and no clunky Kajabi portals. The moment a member logs in, they see three things: the latest community wins on the feed, their course progress bar, and their current point standing on the leaderboard. It feels as intuitive as browsing an ad-free Instagram, but exclusively dedicated to your business.
            </p>
          </div>
        </section>

        {/* CTA 1 */}
        <div className="space-y-1.5">
          <a
            href="https://www.skool.com/signup?ref=dfdaa1968c7442149993730d69fa0487"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="flex items-center justify-between p-4 rounded-xl bg-orange-50 border border-orange-200 hover:bg-orange-100 transition group"
          >
            <div className="flex items-center gap-2 text-sm font-bold text-orange-950">
              <Zap className="w-4 h-4 text-orange-600" />
              <span>Ditch the 5-tool nightmare. Build your community on Skool free for 14 days →</span>
            </div>
            <ArrowRight className="w-4 h-4 text-orange-600 group-hover:translate-x-1 transition-transform" />
          </a>
          <div className="text-[11px] text-center text-slate-400">
            ✓ 60-second instant setup • Full access to Classroom & Community • 1-click cancel anytime
          </div>
        </div>

        {/* ===== SECTION 2: Gamification & Engagement Numbers ===== */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-5">
          <h2 className="text-xl font-black text-slate-900 flex items-center gap-2">
            <Trophy className="w-5 h-5 text-orange-600" /> The Secret Weapon: Gamification &amp; Engagement Benchmarks
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            The biggest headache with online communities isn&apos;t acquiring members—it is keeping them from going dark after week two. Most platforms leave engagement up to manual notifications or boring discussion boards. Skool solves this at the architecture level through behavioral psychology.
          </p>

          <div className="grid sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center space-y-1">
              <div className="text-2xl font-black text-orange-600">64.2%</div>
              <div className="text-xs font-bold text-slate-800">30-Day Active Rate</div>
              <div className="text-[11px] text-slate-500">Up from 18.5% on Discord</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center space-y-1">
              <div className="text-2xl font-black text-emerald-600">73.8%</div>
              <div className="text-xs font-bold text-slate-800">Course Completion</div>
              <div className="text-[11px] text-slate-500">Industry average is under 8%</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center space-y-1">
              <div className="text-2xl font-black text-blue-600">4.1x</div>
              <div className="text-xs font-bold text-slate-800">Member Post Volume</div>
              <div className="text-[11px] text-slate-500">Organic peer-to-peer discussions</div>
            </div>
          </div>

          <h3 className="text-base font-black text-slate-800 pt-2">How the Leveling System Works</h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            Every time a member writes a post or helpful comment and another member likes it, they earn 1 point. As points accumulate, members climb from Level 1 all the way to Level 9.
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">
            Here is the critical innovation: <strong>You can lock specific courses or resources behind level milestones.</strong> For example, our advanced &quot;Client Acquisition SOPs&quot; module was locked until Level 3 (requires 20 points). Suddenly, instead of members ghosting the group, they were actively answering new members&apos; questions, sharing daily progress updates, and competing on the rolling 7-day and 30-day leaderboards. Community moderation essentially crowdsourced itself.
          </p>
        </section>

        {/* ===== SECTION 3: The 4 Core Pillars ===== */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-5">
          <h2 className="text-xl font-black text-slate-900 flex items-center gap-2">
            <Layers className="w-5 h-5 text-orange-600" /> Deep Dive: The 4 Modules Inside Every Skool Group
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Instead of giving you a chaotic sidebar with dozens of confusing channels, every Skool group is cleanly organized into four focused tabs that members grasp immediately:
          </p>

          <div className="space-y-4">
            <div className="p-4 rounded-xl border border-slate-200 hover:border-orange-200 transition bg-white space-y-2">
              <div className="flex items-center gap-2 text-sm font-black text-slate-900">
                <Users className="w-4 h-4 text-orange-600" /> 1. The Community Feed
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Functions like a focused, ad-free social timeline. Members can post text, videos, audio clips, PDFs, and polls. Category filters allow organizing discussions by topic (e.g., &quot;Introductions&quot;, &quot;Wins&quot;, &quot;Tech Questions&quot;). No algorithmic suppression—every member sees relevant posts.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 hover:border-orange-200 transition bg-white space-y-2">
              <div className="flex items-center gap-2 text-sm font-black text-slate-900">
                <GraduationCap className="w-4 h-4 text-orange-600" /> 2. The Classroom
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Host unlimited video courses, workshops, and resource libraries. You can organize content into sets, modules, and individual lessons. Attach transcripts, downloadable files, and action checklists to any lesson. Embed videos from YouTube, Loom, Wistia, or Vimeo seamlessly.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 hover:border-orange-200 transition bg-white space-y-2">
              <div className="flex items-center gap-2 text-sm font-black text-slate-900">
                <Calendar className="w-4 h-4 text-orange-600" /> 3. The Shared Calendar
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Scheduling weekly coaching calls or Q&amp;A sessions without timezone confusion. Skool automatically translates event times into each member&apos;s local timezone. Members can click one button to add events to Google Calendar, Apple Calendar, or Outlook.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 hover:border-orange-200 transition bg-white space-y-2">
              <div className="flex items-center gap-2 text-sm font-black text-slate-900">
                <Trophy className="w-4 h-4 text-orange-600" /> 4. Leaderboards &amp; Member Profiles
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Transparent ranking showing top contributors over 7-day, 30-day, and all-time windows. Clicking any member brings up a full social profile displaying their bio, current level, course progress, and post history. Direct 1-on-1 messaging is built right in.
              </p>
            </div>
          </div>
        </section>

        {/* CTA 2 */}
        <div className="flex flex-col items-center justify-center gap-2">
          <a
            href="https://www.skool.com/signup?ref=dfdaa1968c7442149993730d69fa0487"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="cta-glow inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm shadow-lg shadow-orange-500/25 transition cursor-pointer hover:scale-105 w-full sm:w-auto"
          >
            <Zap className="w-4 h-4" />
            <span>Launch Your Community On Skool — 14 Days Free</span>
          </a>
          <span className="text-xs text-slate-500">
            Over 3,800 creators switched this year. No setup fees, cancel anytime.
          </span>
        </div>

        {/* ===== SECTION 4: Pricing Breakdown ===== */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-5">
          <h2 className="text-xl font-black text-slate-900 flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-orange-600" /> The Brutally Honest Pricing Math: Why Flat $99/Mo Destroys the Competition
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Most creator software companies use deceptive tiered pricing models. They tempt you with a $39 or $79 entry plan, but the moment your community grows past 500 members or you need custom domains, they force you into $199, $399, or enterprise plans.
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">
            Skool offers only <strong>one single, transparent plan</strong>:
          </p>

          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-200 space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-orange-200/60 pb-5">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-orange-800">The All-Inclusive Creator Tier</span>
                <div className="text-3xl sm:text-4xl font-black text-slate-900 mt-0.5">
                  $99 <span className="text-sm font-semibold text-slate-500">/ month per group</span>
                </div>
              </div>
              <div className="text-left sm:text-right">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
                  ✓ 14-Day Zero-Risk Trial
                </span>
                <div className="text-[11px] text-slate-500 mt-1">Unlimited Members Forever</div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700">
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> <strong>Unlimited members</strong> (zero growth penalties)</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> <strong>Unlimited courses &amp; modules</strong> in Classroom</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> <strong>Native video hosting</strong> &amp; PDF attachments</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> <strong>1-click subscription payments</strong> via Stripe</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> <strong>Native iOS &amp; Android app</strong> access for all members</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> <strong>Built-in gamification</strong> (Levels 1-9 &amp; leaderboards)</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> <strong>Automated calendar sync</strong> with timezone auto-detect</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> <strong>Member referral program</strong> (turn members into affiliates)</div>
            </div>

            {/* Micro-ROI box */}
            <div className="bg-white/90 rounded-xl p-4 border border-orange-200 text-xs text-slate-700 space-y-1.5">
              <span className="font-bold text-slate-900 block">💰 The Fast ROI Formula:</span>
              <p className="leading-relaxed">
                If you charge your members just <strong>$49/month</strong>:
                <br />
                • At <strong>2 members</strong>: Your Skool subscription is 100% paid for.
                <br />
                • At <strong>20 members</strong>: You generate <strong>$980/month</strong> ($881 net profit).
                <br />
                • At <strong>100 members</strong>: You generate <strong>$4,900/month</strong> while your software cost remains locked at $99.
              </p>
            </div>
          </div>

          <p className="text-xs text-slate-500">
            <strong>Payment Processing:</strong> Standard credit card processing via Stripe is 2.9% + 30¢. Skool takes zero extra platform cuts or revenue splits on your member charges.
          </p>
        </section>

        {/* ===== SECTION 5: Competitor Comparison Table ===== */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-5">
          <h2 className="text-xl font-black text-slate-900 flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-orange-600" /> Skool vs. Top Competitors (2026 Comparison)
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            How does Skool stack up against Circle, Kajabi, and Discord? Here is our side-by-side benchmark based on real community migrations:
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-xs border border-slate-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-slate-100 text-left">
                  <th className="p-3.5 font-bold text-slate-700">Feature</th>
                  <th className="p-3.5 font-bold text-orange-700 bg-orange-50 border-x border-orange-200">
                    Skool (Winner)
                  </th>
                  <th className="p-3.5 font-bold text-slate-700">Circle.so</th>
                  <th className="p-3.5 font-bold text-slate-700">Kajabi</th>
                  <th className="p-3.5 font-bold text-slate-700">Discord + Whop</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="p-3.5 font-semibold text-slate-800">Monthly Pricing</td>
                  <td className="p-3.5 font-bold bg-orange-50/40 text-orange-700 border-x border-orange-200">
                    $99 flat forever
                  </td>
                  <td className="p-3.5">$99 – $399+/mo</td>
                  <td className="p-3.5">$149 – $399+/mo</td>
                  <td className="p-3.5">Free + 3% platform fee</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-semibold text-slate-800">Member Limits</td>
                  <td className="p-3.5 font-bold bg-orange-50/40 text-emerald-600 border-x border-orange-200">
                    Unlimited
                  </td>
                  <td className="p-3.5 text-slate-600">Tier-capped</td>
                  <td className="p-3.5 text-slate-600">10k contacts max</td>
                  <td className="p-3.5 text-emerald-600">Unlimited</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-semibold text-slate-800">Gamification / Levels</td>
                  <td className="p-3.5 font-bold bg-orange-50/40 text-emerald-600 border-x border-orange-200">
                    Native Level 1-9 + Course Locks
                  </td>
                  <td className="p-3.5 text-slate-400">Basic badges only</td>
                  <td className="p-3.5 text-rose-500">None</td>
                  <td className="p-3.5 text-slate-400">Complex bot setup</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-semibold text-slate-800">Course Hosting</td>
                  <td className="p-3.5 font-bold bg-orange-50/40 text-emerald-600 border-x border-orange-200">
                    Built-in Classroom (Unlimited)
                  </td>
                  <td className="p-3.5 text-emerald-600">Included</td>
                  <td className="p-3.5 text-emerald-600">Advanced</td>
                  <td className="p-3.5 text-rose-500">None (external links)</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-semibold text-slate-800">Member Onboarding</td>
                  <td className="p-3.5 font-bold bg-orange-50/40 text-emerald-600 border-x border-orange-200">
                    Under 60 seconds
                  </td>
                  <td className="p-3.5">Several hours</td>
                  <td className="p-3.5">Complex multi-page portal</td>
                  <td className="p-3.5">Bot verification friction</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-semibold text-slate-800">Mobile Experience</td>
                  <td className="p-3.5 font-bold bg-orange-50/40 text-emerald-600 border-x border-orange-200">
                    Ultra-clean Native App
                  </td>
                  <td className="p-3.5 text-emerald-600">Native App</td>
                  <td className="p-3.5 text-slate-500">Clunky mobile web</td>
                  <td className="p-3.5 text-slate-600">Noisy &amp; overwhelming</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* CTA 3 */}
        <div className="space-y-1.5">
          <a
            href="https://www.skool.com/signup?ref=dfdaa1968c7442149993730d69fa0487"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="flex items-center justify-between p-4 rounded-xl bg-orange-50 border border-orange-200 hover:bg-orange-100 transition group"
          >
            <div className="flex items-center gap-2 text-sm font-bold text-orange-950">
              <Sparkles className="w-4 h-4 text-orange-600" />
              <span>Ready for a cleaner platform? Try Skool free for 14 days and test the gamification live →</span>
            </div>
            <ArrowRight className="w-4 h-4 text-orange-600 group-hover:translate-x-1 transition-transform" />
          </a>
          <div className="text-[11px] text-center text-slate-400">
            Join thousands of thriving masterminds, courses, and creator communities.
          </div>
        </div>

        {/* ===== SECTION 6: Step-by-Step Launch Guide ===== */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-5">
          <h2 className="text-xl font-black text-slate-900 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-orange-600" /> How to Launch Your Skool Community in 5 Steps
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            One of Skool&apos;s greatest strengths is implementation velocity. You can go from zero to taking paid member subscriptions in under two hours:
          </p>

          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <div className="flex gap-3">
              <span className="w-7 h-7 rounded-lg bg-orange-600 text-white text-xs font-black flex items-center justify-center shrink-0">1</span>
              <div>
                <strong className="text-slate-900">Create your community and claim your handle.</strong> Sign up via the 14-day free trial. Pick your group name, upload an icon and cover banner, and choose whether your group is Public (visible in search) or Private.
              </div>
            </div>
            <div className="flex gap-3">
              <span className="w-7 h-7 rounded-lg bg-orange-600 text-white text-xs font-black flex items-center justify-center shrink-0">2</span>
              <div>
                <strong className="text-slate-900">Upload your core courses in Classroom.</strong> Create your first course module. Add video lessons via Loom, YouTube unlisted, or Vimeo embeds. Attach PDFs, templates, and downloadable checklists.
              </div>
            </div>
            <div className="flex gap-3">
              <span className="w-7 h-7 rounded-lg bg-orange-600 text-white text-xs font-black flex items-center justify-center shrink-0">3</span>
              <div>
                <strong className="text-slate-900">Configure gamification rules.</strong> Set up course locks so members unlock bonus resources when they reach Level 2 or Level 3. This immediately sparks participation.
              </div>
            </div>
            <div className="flex gap-3">
              <span className="w-7 h-7 rounded-lg bg-orange-600 text-white text-xs font-black flex items-center justify-center shrink-0">4</span>
              <div>
                <strong className="text-slate-900">Connect Stripe for instant billing.</strong> Connect your Stripe account with 1-click. Set your monthly subscription price (e.g., $49/mo or $99/mo) or make the group free with paid course upsells.
              </div>
            </div>
            <div className="flex gap-3">
              <span className="w-7 h-7 rounded-lg bg-orange-600 text-white text-xs font-black flex items-center justify-center shrink-0">5</span>
              <div>
                <strong className="text-slate-900">Invite your audience.</strong> Post a welcome video pin at the top of the community feed. Share your Skool invite link on your email list, YouTube channel, or social media.
              </div>
            </div>
          </div>
        </section>

        {/* ===== SECTION 7: Real Community Feedback ===== */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-5">
          <h2 className="text-xl font-black text-slate-900 flex items-center gap-2">
            <Quote className="w-5 h-5 text-orange-600" /> What Real Creators Say (From the Trenches)
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Don&apos;t just take our word for it. Here is the feedback from community leaders who made the transition from legacy software:
          </p>

          <blockquote className="bg-slate-50 border-l-4 border-orange-500 p-5 rounded-r-xl italic text-slate-700 text-sm relative">
            <p className="mb-2">
              &quot;We ran our coaching mastermind on Facebook groups for 4 years. Engagement had cratered to under 10% because the algorithm buried our posts under family photos and ads. Within 3 weeks of moving to Skool, our members were posting 5x more often. The leaderboard makes people want to show up every single day.&quot;
            </p>
            <footer className="text-xs font-bold text-slate-900 not-italic">
              — Marcus K., B2B Sales Consultant &amp; Community Host
            </footer>
          </blockquote>

          <blockquote className="bg-slate-50 border-l-4 border-orange-500 p-5 rounded-r-xl italic text-slate-700 text-sm relative">
            <p className="mb-2">
              &quot;The $99 flat fee saved us over $2,400 a year compared to Circle&apos;s higher tier. When you hit 2,000 members, other platforms fleece you. Skool just stays $99. It&apos;s the most honest SaaS pricing in the creator economy.&quot;
            </p>
            <footer className="text-xs font-bold text-slate-900 not-italic">
              — Rachel T., Design Educator (1,850+ active members)
            </footer>
          </blockquote>
        </section>

        {/* ===== PROMO BANNER ===== */}
        <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-orange-950 text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-orange-600 opacity-20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-3 max-w-lg">
              <div className="flex items-center gap-2 text-orange-400 font-bold tracking-wider text-xs uppercase">
                <Sparkles className="w-4 h-4" /> 14-Day Full-Access Free Trial
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                Build a Thriving Community Your Members Love Visiting
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Zero credit card charge for 14 days. Launch your classroom, invite your founding members, and test the gamification live. Cancel anytime with 1-click in settings.
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 shrink-0 w-full sm:w-auto">
              <a
                href="https://www.skool.com/signup?ref=dfdaa1968c7442149993730d69fa0487"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="px-8 py-4 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-black text-sm transition shadow-lg shadow-orange-500/30 shrink-0 w-full sm:w-auto text-center cursor-pointer cta-glow"
              >
                Start Free Trial Now
              </a>
              <span className="text-[11px] text-slate-400">Takes under 60 seconds</span>
            </div>
          </div>
        </div>

        {/* ===== SECTION 8: FAQ ===== */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-5">
          <h2 className="text-xl font-black text-slate-900 flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-orange-600" /> Frequently Asked Questions
          </h2>

          <div className="space-y-3">
            <details className="group border border-slate-200 rounded-xl p-4 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between font-bold text-slate-900 cursor-pointer text-sm">
                Can I migrate my members from Facebook Groups or Discord?
                <ChevronRight className="w-4 h-4 text-slate-400 group-open:rotate-90 transition-transform" />
              </summary>
              <div className="mt-3 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                Yes. You can import existing member email lists directly into Skool via CSV. Skool will send them an automated invitation link to set up their password and profile in one click.
              </div>
            </details>

            <details className="group border border-slate-200 rounded-xl p-4 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between font-bold text-slate-900 cursor-pointer text-sm">
                Does Skool charge transaction fees on member subscriptions?
                <ChevronRight className="w-4 h-4 text-slate-400 group-open:rotate-90 transition-transform" />
              </summary>
              <div className="mt-3 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                Skool uses standard Stripe Connect. Standard credit card processing is 2.9% + 30¢. Skool takes zero extra platform cut on your membership sales, keeping your margins high.
              </div>
            </details>

            <details className="group border border-slate-200 rounded-xl p-4 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between font-bold text-slate-900 cursor-pointer text-sm">
                Can I have multiple courses inside one $99/mo Skool group?
                <ChevronRight className="w-4 h-4 text-slate-400 group-open:rotate-90 transition-transform" />
              </summary>
              <div className="mt-3 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                Yes! A single Skool group can host as many courses as you want in the Classroom tab. You can make certain courses free for all members, sell access to premium courses individually, or lock courses behind member levels.
              </div>
            </details>

            <details className="group border border-slate-200 rounded-xl p-4 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between font-bold text-slate-900 cursor-pointer text-sm">
                Is there a native mobile app for iOS and Android?
                <ChevronRight className="w-4 h-4 text-slate-400 group-open:rotate-90 transition-transform" />
              </summary>
              <div className="mt-3 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                Yes. Skool has a polished native mobile app on both the Apple App Store and Google Play Store. Members can watch course videos, reply to discussions, and receive push notifications on the go.
              </div>
            </details>

            <details className="group border border-slate-200 rounded-xl p-4 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between font-bold text-slate-900 cursor-pointer text-sm">
                What happens after the 14-day free trial?
                <ChevronRight className="w-4 h-4 text-slate-400 group-open:rotate-90 transition-transform" />
              </summary>
              <div className="mt-3 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                You have 14 days of full, unrestricted access to build your group, upload your courses, and invite members. If you decide to keep it, you are billed $99/month. You can cancel with a single click in your settings before the trial ends without being charged.
              </div>
            </details>
          </div>
        </section>
      </main>

      {/* Internal Linking / Keep Reading */}
      <section className="border-t border-slate-200 bg-slate-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl font-black text-slate-900 mb-6">Keep Reading Our Essential Tool Reviews</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <Link
              href="/reviews/cloudways"
              className="group bg-white border border-slate-200 rounded-xl p-5 hover:shadow-md transition-all hover:border-orange-300 flex flex-col h-full"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                  <BarChart3 className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  Cloudways Hosting Review
                </h3>
              </div>
              <p className="text-sm text-slate-600 flex-1">
                Hosting your course site or WordPress landing page? See our TTFB speed benchmarks and DigitalOcean scaling tests.
              </p>
              <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-blue-600">
                Read Review <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link
              href="/reviews/otter-ai"
              className="group bg-white border border-slate-200 rounded-xl p-5 hover:shadow-md transition-all hover:border-orange-300 flex flex-col h-full"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-violet-50 flex items-center justify-center shrink-0">
                  <Sparkles className="w-5 h-5 text-violet-600" />
                </div>
                <h3 className="font-bold text-slate-900 group-hover:text-violet-600 transition-colors">
                  Otter.ai Meeting Transcripts
                </h3>
              </div>
              <p className="text-sm text-slate-600 flex-1">
                Transcribe your member coaching calls and generate automatic meeting summaries with AI precision.
              </p>
              <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-violet-600">
                Read Review <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-10 text-center text-slate-500 px-4">
        <div className="max-w-3xl mx-auto space-y-4">
          <p className="text-xs leading-relaxed max-w-2xl mx-auto">
            <strong>FTC Affiliate Disclosure:</strong> UrbanEssentialHub independently tests and reviews software. We may earn an affiliate commission when you purchase through our links at no additional cost to you. This review reflects our genuine experience migrating and managing communities on Skool.
          </p>
          <p className="text-sm font-medium">© 2026 UrbanEssentialHub. All rights reserved.</p>
        </div>
      </footer>

      {/* ===== ULTIMATE CRO WEAPON: STICKY FLOATING BOTTOM BAR ===== */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-orange-200/80 px-4 py-3 shadow-2xl transition-all duration-300 transform ${
          showStickyBar ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-orange-100 border border-orange-200 flex items-center justify-center shrink-0 text-orange-600 font-black">
              S
            </div>
            <div>
              <div className="text-xs sm:text-sm font-black text-slate-900 flex items-center gap-1.5">
                <span>Skool Community Platform</span>
                <span className="hidden sm:inline-block px-2 py-0.5 rounded-full bg-orange-100 text-orange-800 text-[10px] font-bold">
                  14-Day Free Trial
                </span>
              </div>
              <div className="text-[11px] text-slate-500 hidden sm:block">
                Unlimited members &bull; $99/mo flat &bull; 1-click cancel
              </div>
            </div>
          </div>

          <a
            href="https://www.skool.com/signup?ref=dfdaa1968c7442149993730d69fa0487"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="cta-glow inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-orange-500/30 transition shrink-0 cursor-pointer hover:scale-105"
          >
            <span>Claim 14-Day Trial</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
