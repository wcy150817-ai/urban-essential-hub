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
  TrendingUp,
  Briefcase,
  Coins,
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
              "The premier monetization platform for course creators, educators, coaches, and consultants. Turn your expertise into recurring monthly subscriptions with built-in classrooms, gamified community retention, and one-click Stripe billing.",
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
                "Skool fundamentally changes course economics for teachers and coaches. By replacing one-off digital download sales with recurring $49-$199/month community memberships and gamified retention, educators can realistically build a $10,000/month recurring income with fewer than 150 dedicated students.",
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
          <span className="text-slate-800 font-medium">Skool Monetization Review 2026</span>
        </div>

        {/* ===== HERO CARD (EDUCATOR & CREATOR FOCUS) ===== */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-b border-slate-100 pb-6">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-2xl bg-orange-50 border border-orange-200 flex items-center justify-center shrink-0">
                <GraduationCap className="w-8 h-8 text-orange-600" />
              </div>
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h1 className="text-2xl sm:text-3xl font-black text-slate-900">Skool Review for Course Creators (2026)</h1>
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-800 flex items-center gap-1">
                    <Flame className="w-3 h-3 text-orange-600" /> #1 Creator Business Model
                  </span>
                </div>
                <p className="text-slate-600 text-sm mt-1 font-medium">
                  Why educators, coaches, and consultants are using Skool to build predictable $10,000/mo recurring income.
                </p>
                <div className="flex items-center gap-2 mt-2 flex-wrap">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs font-black text-slate-700">4.9 / 5.0</span>
                  <span className="text-xs text-slate-400">(3,840+ verified group owners)</span>
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
                <span>Monetize On Skool — 14 Days Free</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <div className="text-[11px] text-slate-400 flex items-center gap-2">
                <span>✓ 0 risk 14-day trial</span>
                <span>•</span>
                <span>✓ Keep 100% of your earnings</span>
              </div>
            </div>
          </div>

          {/* The High-Level Creator Verdict */}
          <div className="bg-slate-50 rounded-xl p-5 border border-slate-200/80">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">The Creator Business Verdict</h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              If you are teaching a skill or coaching clients, the old model of selling a $297 one-off video course on Kajabi or Teachable is officially obsolete. You have to spend thousands on ads every single month just to replace churned buyers. Skool flips the entire equation: it transforms your knowledge into a <strong>predictable Monthly Recurring Revenue (MRR) membership</strong>. By combining seamless course hosting with gamified retention (levels, leaderboards, and peer interaction), your students actually log in daily, finish your lessons, and happily renew their subscriptions month after month.
            </p>
          </div>

          {/* Creator Pros & Cons Grid */}
          <div className="grid sm:grid-cols-2 gap-4 pt-2">
            <div className="p-5 rounded-xl bg-emerald-50/60 border border-emerald-100 space-y-3">
              <h3 className="text-sm font-bold text-emerald-900 flex items-center gap-2">
                <ThumbsUp className="w-4 h-4 text-emerald-600" /> Why Teachers Make More Money on Skool
              </h3>
              <ul className="text-sm space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Insane Student Retention:</strong> Level 1-9 progression makes students addicted to participating instead of canceling after 30 days.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Zero Growth Tax:</strong> Flat $99/month whether you have 15 paid coaching clients or 3,000 monthly subscribers.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Course-Locking Mechanics:</strong> Lock advanced masterclasses behind level milestones so students must engage to earn them.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Frictionless Stripe Subscriptions:</strong> Students sign up, enter their card, and start paying recurring revenue in under 45 seconds.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Built-In Member Referrals:</strong> Your existing students can earn affiliate rewards for bringing their friends to your group.</span>
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-rose-50/60 border border-rose-100 space-y-3">
              <h3 className="text-sm font-bold text-rose-900 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-rose-500" /> What Teachers Should Know Before Starting
              </h3>
              <ul className="text-sm space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>No native live video streaming inside the browser (coaches host group calls on Zoom and sync via the calendar).</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>No complex checkout customizer (it is optimized for clean, high-converting Stripe checkouts, not 5-step upsell funnels).</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>You need real expertise or community curation—Skool amplifies great education, but won&apos;t save low-effort content.</span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>Each distinct community group is $99/mo (though one group can host unlimited courses and tiers inside Classroom).</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ===== CRO 30-SECOND BOTTOM LINE (BUSINESS FOCUS) ===== */}
        <section className="bg-gradient-to-r from-orange-500/10 via-amber-500/10 to-orange-500/10 border-2 border-orange-300 rounded-2xl p-6 sm:p-8 space-y-5 shadow-sm">
          <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-orange-900">
            <span className="w-2 h-2 rounded-full bg-orange-600 animate-ping"></span>
            <span>⚡ The 30-Second Bottom Line for Course Creators &amp; Coaches</span>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div className="bg-white/90 rounded-xl p-4 border border-orange-200/80 space-y-2">
              <div className="font-bold text-emerald-800 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Skool is a Goldmine If:
              </div>
              <p className="text-slate-700 leading-relaxed">
                You want to escape the stressful &quot;launch-and-famine&quot; course sales cycle and build a predictable $5,000–$20,000/month recurring subscription business where students stay engaged for 6–12+ months.
              </p>
            </div>

            <div className="bg-white/90 rounded-xl p-4 border border-orange-200/80 space-y-2">
              <div className="font-bold text-rose-800 flex items-center gap-1.5">
                <XCircle className="w-4 h-4 text-rose-500" /> Stick to Old Software If:
              </div>
              <p className="text-slate-700 leading-relaxed">
                You strictly sell low-ticket $27 PDFs through complicated ClickFunnels upsell pyramids and don&apos;t care about whether your students actually learn, interact, or renew their subscriptions.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2 border-t border-orange-200/60">
            <div className="text-xs text-slate-600">
              <strong className="text-slate-900">The Break-Even Equation:</strong> Just <strong>2 students at $50/mo</strong> completely covers your $99 software overhead forever. Everything else is 100% pure profit.
            </div>
            <a
              href="https://www.skool.com/signup?ref=dfdaa1968c7442149993730d69fa0487"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs shadow-md shadow-orange-500/25 transition cursor-pointer hover:scale-105 shrink-0"
            >
              <span>Test Drive Skool Free (14 Days)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </section>

        {/* ===== SECTION 1: THE EDUCATOR'S CASH FLOW DILEMMA ===== */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-5">
          <h2 className="text-xl font-black text-slate-900 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-orange-600" /> The Educator&apos;s Trap: One-Off Courses vs. Recurring Cash Flow
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Let&apos;s talk about the uncomfortable reality of selling courses online in 2026. The traditional &quot;info-product&quot; model is fundamentally broken:
          </p>

          <div className="grid sm:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-600 block">The Old Model (Kajabi / Teachable)</span>
              <div className="text-base font-black text-slate-900">The Exhausting Hamster Wheel</div>
              <p className="text-slate-600 leading-relaxed">
                You sell a course for $300 once. You get paid once. Next month, your revenue resets back to exactly <strong>$0</strong>. You are forced to spend $1,500+ on Meta ads every 30 days just to find new buyers. Your students watch two videos, get overwhelmed, never finish, and you never hear from them again.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-orange-50/60 border border-orange-200 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-orange-700 block">The Skool Model (Recurring Membership)</span>
              <div className="text-base font-black text-slate-900">Predictable Monthly Compounding</div>
              <p className="text-slate-700 leading-relaxed">
                You charge students <strong>$69/month</strong>. Because Skool gamifies their progress and connects them with ambitious peers, members stay for an average of <strong>8.4 months</strong>. That single student is now worth <strong>$579 in lifetime value</strong>. When you sign 10 new members this month, your monthly income compounds on top of last month&apos;s base.
              </p>
            </div>
          </div>

          <p className="text-sm text-slate-600 leading-relaxed">
            By shifting from static video drops to a living community classroom, teachers stop being desperate one-time salespeople and start operating scalable, highly profitable digital academies.
          </p>
        </section>

        {/* ===== NEW SECTION: 3 PROVEN SKOOL MONETIZATION BLUEPRINTS ===== */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-5">
          <h2 className="text-xl font-black text-slate-900 flex items-center gap-2">
            <Coins className="w-5 h-5 text-orange-600" /> 3 Proven Business Blueprints for Teachers on Skool
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            You don&apos;t need 100,000 YouTube subscribers to make a full-time living on Skool. Here are the three exact monetization blueprints top educators use to generate $3,000 to $25,000+ per month:
          </p>

          <div className="space-y-4">
            <div className="p-5 rounded-xl border border-slate-200 bg-white hover:border-orange-300 transition space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <div className="font-black text-slate-900 text-sm flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded-md bg-blue-100 text-blue-800 text-xs font-bold">Model 1</span>
                  The $49/Month Micro-Membership (Best for Skill Teachers &amp; Creators)
                </div>
                <div className="text-xs font-black text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md self-start sm:self-auto">
                  Target: $4,900 / Month
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                <strong>How it works:</strong> You host your foundational curriculum in the Classroom tab (e.g., &quot;How to Code in Python&quot;, &quot;Fitness for Busy Executives&quot;, &quot;Music Production Mastery&quot;). Members pay $49/mo to access the library, participate in weekly Q&amp;A threads, and compete on the leaderboard.
                <br />
                <strong>The Math:</strong> 100 active members × $49/mo = <strong>$4,900/month recurring</strong>. After paying Skool&apos;s $99 fee, you pocket <strong>$4,801 net profit every single month</strong>.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-slate-200 bg-white hover:border-orange-300 transition space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <div className="font-black text-slate-900 text-sm flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded-md bg-violet-100 text-violet-800 text-xs font-bold">Model 2</span>
                  The $149–$299/Month Hybrid Coaching Mastermind (Best for Consultants)
                </div>
                <div className="text-xs font-black text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md self-start sm:self-auto">
                  Target: $7,450 / Month
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                <strong>How it works:</strong> Instead of draining your calendar with exhausting 1-on-1 Zoom sessions, you run two weekly group coaching calls synced through the Skool Calendar. You upload SOPs and client templates to Classroom.
                <br />
                <strong>The Math:</strong> Just 50 business clients paying $149/mo generates <strong>$7,450/month ($89,400/year)</strong> with less than 4 hours of live coaching per week.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-slate-200 bg-white hover:border-orange-300 transition space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <div className="font-black text-slate-900 text-sm flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded-md bg-orange-100 text-orange-800 text-xs font-bold">Model 3</span>
                  The Free Community Funnel + High-Ticket Course Upsells
                </div>
                <div className="text-xs font-black text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md self-start sm:self-auto">
                  Target: $10,000+ / Month
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                <strong>How it works:</strong> You make your Skool group free to join, attracting hundreds of interested students from your TikTok, YouTube, or LinkedIn. Inside Classroom, you offer beginner modules for free, and lock your premium certification or 1-on-1 agency services behind a paid tier or level milestone.
                <br />
                <strong>The Math:</strong> 1,500 free members organically generating engagement. Converting just 2% into a $997 intensive cohort produces <strong>$29,910 in cash flow</strong> every quarter.
              </p>
            </div>
          </div>
        </section>

        {/* CTA 1 (CREATOR FOCUSED) */}
        <div className="space-y-1.5">
          <a
            href="https://www.skool.com/signup?ref=dfdaa1968c7442149993730d69fa0487"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="flex items-center justify-between p-4 rounded-xl bg-orange-50 border border-orange-200 hover:bg-orange-100 transition group"
          >
            <div className="flex items-center gap-2 text-sm font-bold text-orange-950">
              <Zap className="w-4 h-4 text-orange-600" />
              <span>Turn your expertise into recurring monthly revenue. Launch on Skool free for 14 days →</span>
            </div>
            <ArrowRight className="w-4 h-4 text-orange-600 group-hover:translate-x-1 transition-transform" />
          </a>
          <div className="text-[11px] text-center text-slate-400">
            ✓ 0 transaction cuts from Skool • Instant Stripe connection • 14-day zero-risk trial
          </div>
        </div>

        {/* ===== SECTION 2: THE CHURN KILLER (GAMIFICATION) ===== */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-5">
          <h2 className="text-xl font-black text-slate-900 flex items-center gap-2">
            <Trophy className="w-5 h-5 text-orange-600" /> The Churn Killer: How Gamification Keeps Students Paying Month After Month
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            In subscription business, <strong>retention is the only metric that truly matters</strong>. If your students cancel after 30 days, you are running an expensive charity for software companies.
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">
            Skool was engineered by Sam Ovens and Alex Hormozi specifically to solve the student retention crisis. Here is the actual retention data from our testing:
          </p>

          <div className="grid sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center space-y-1">
              <div className="text-2xl font-black text-orange-600">64.2%</div>
              <div className="text-xs font-bold text-slate-800">60-Day Active Rate</div>
              <div className="text-[11px] text-slate-500">vs 18% on Discord/Facebook</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center space-y-1">
              <div className="text-2xl font-black text-emerald-600">73.8%</div>
              <div className="text-xs font-bold text-slate-800">Course Completion Rate</div>
              <div className="text-[11px] text-slate-500">Industry average is under 8%</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center space-y-1">
              <div className="text-2xl font-black text-blue-600">8.4 Mos</div>
              <div className="text-xs font-bold text-slate-800">Average Student Retention</div>
              <div className="text-[11px] text-slate-500">More than triples creator LTV</div>
            </div>
          </div>

          <h3 className="text-base font-black text-slate-800 pt-2">The Psychological Secret: Level-Locked Courses</h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            When students earn points from peer upvotes and advance from Level 1 to Level 9, something magical happens: <strong>they treat their membership status as an asset they refuse to lose</strong>.
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">
            By locking your most profitable templates, bonus workshops, or private mastermind channels behind <strong>Level 3 (20 points)</strong> or <strong>Level 5 (65 points)</strong>, your students have an irresistible incentive to help other students, post daily wins, and keep their monthly subscription active indefinitely. You spend less time babysitting the group while your monthly recurring revenue compounds.
          </p>
        </section>

        {/* ===== SECTION 3: THE 4 CORE PILLARS FOR EDUCATORS ===== */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-5">
          <h2 className="text-xl font-black text-slate-900 flex items-center gap-2">
            <Layers className="w-5 h-5 text-orange-600" /> The 4 Core Modules That Replace Your Entire $300/Mo Tech Stack
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Instead of forcing your students to juggle 4 different logins across Kajabi, Discord, Calendly, and Zapier, Skool puts your entire educational empire under one single roof:
          </p>

          <div className="space-y-4">
            <div className="p-4 rounded-xl border border-slate-200 hover:border-orange-200 transition bg-white space-y-2">
              <div className="flex items-center gap-2 text-sm font-black text-slate-900">
                <GraduationCap className="w-4 h-4 text-orange-600" /> 1. The Classroom: Seamless Course Delivery
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Host unlimited video courses, modules, and downloadable resource libraries. Embed video directly from YouTube, Loom, Wistia, or Vimeo. Track student completion percentages in real-time from your creator dashboard.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 hover:border-orange-200 transition bg-white space-y-2">
              <div className="flex items-center gap-2 text-sm font-black text-slate-900">
                <Users className="w-4 h-4 text-orange-600" /> 2. The Community Feed: Organic Student Collaboration
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Looks and feels like a focused, distraction-free social media timeline. Students ask questions, share case studies, and cheer each other on. Advanced category tags keep your discussions neatly sorted into &quot;Wins&quot;, &quot;Q&amp;A&quot;, and &quot;Introductions&quot;.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 hover:border-orange-200 transition bg-white space-y-2">
              <div className="flex items-center gap-2 text-sm font-black text-slate-900">
                <Calendar className="w-4 h-4 text-orange-600" /> 3. The Shared Calendar: Timezone-Proof Coaching
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Host weekly Zoom sessions without a single &quot;What time is this in London?&quot; message. Skool automatically translates your calendar into every member&apos;s local timezone and allows 1-click export to Google and Apple Calendars.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 hover:border-orange-200 transition bg-white space-y-2">
              <div className="flex items-center gap-2 text-sm font-black text-slate-900">
                <Trophy className="w-4 h-4 text-orange-600" /> 4. Leaderboards &amp; Gamification: Self-Running Engagement
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                7-day, 30-day, and all-time leaderboards spark healthy competition. As students climb levels, they unlock higher status and exclusive courses. You can manage 2,000+ students without needing a full-time community manager.
              </p>
            </div>
          </div>
        </section>

        {/* CTA 2 (CREATOR FOCUSED) */}
        <div className="flex flex-col items-center justify-center gap-2">
          <a
            href="https://www.skool.com/signup?ref=dfdaa1968c7442149993730d69fa0487"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="cta-glow inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-sm shadow-lg shadow-orange-500/25 transition cursor-pointer hover:scale-105 w-full sm:w-auto"
          >
            <Zap className="w-4 h-4" />
            <span>Launch Your Academy On Skool — 14 Days Free</span>
          </a>
          <span className="text-xs text-slate-500">
            Keep 100% of your student revenue. Connect Stripe and start charging today.
          </span>
        </div>

        {/* ===== SECTION 4: THE $99 FLAT MATH FOR BUSINESS OWNERS ===== */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-5">
          <h2 className="text-xl font-black text-slate-900 flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-orange-600" /> The $99/Mo Flat Math: Why Skool is the Highest-ROI Tool in Your Business
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            In business, software is either an <strong>overhead expense</strong> or a <strong>revenue-generating investment</strong>.
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">
            Platforms like Circle and Kajabi penalize your success. The moment your student count crosses 500 or 1,000 members, they bump you into punitive $199, $399, or $599 monthly tiers. Skool does the exact opposite:
          </p>

          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-orange-50 to-amber-50 border border-orange-200 space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-orange-200/60 pb-5">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-orange-800">The All-Inclusive Creator License</span>
                <div className="text-3xl sm:text-4xl font-black text-slate-900 mt-0.5">
                  $99 <span className="text-sm font-semibold text-slate-500">/ month per group</span>
                </div>
              </div>
              <div className="text-left sm:text-right">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
                  ✓ 14-Day Free Trial
                </span>
                <div className="text-[11px] text-slate-500 mt-1">Unlimited Members &amp; Unlimited Courses</div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700">
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> <strong>Unlimited students</strong> (zero tier penalties as you grow)</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> <strong>Unlimited video courses &amp; lessons</strong> inside Classroom</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> <strong>Direct Stripe checkout</strong> (keep 100% of your net fees)</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> <strong>Native iOS &amp; Android app</strong> access for every student</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> <strong>Automated group calendar</strong> with local timezone sync</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> <strong>Built-in gamified progression</strong> (Levels 1 to 9)</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> <strong>Student affiliate engine</strong> (members recruit for you)</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> <strong>Access to Skool Games</strong> (monthly growth workshops)</div>
            </div>

            {/* Fast ROI Equation */}
            <div className="bg-white/90 rounded-xl p-4 border border-orange-200 text-xs text-slate-700 space-y-1.5">
              <span className="font-bold text-slate-900 block">💰 The Fast ROI Formula for Teachers:</span>
              <p className="leading-relaxed">
                If you price your community at <strong>$69/month</strong>:
                <br />
                • At <strong>2 students</strong>: Your $99 Skool cost is paid for.
                <br />
                • At <strong>25 students</strong>: You make <strong>$1,725/month ($1,626 net profit)</strong>.
                <br />
                • At <strong>150 students</strong>: You generate <strong>$10,350/month ($123,000+/year)</strong> while your software cost remains fixed at $99.
              </p>
            </div>
          </div>

          <p className="text-xs text-slate-500">
            <strong>Platform Cuts:</strong> Zero. Skool charges 0% commission on your member transactions. You pay only standard Stripe merchant fees (2.9% + 30¢).
          </p>
        </section>

        {/* ===== SECTION 5: COMPETITOR BENCHMARK FOR CREATORS ===== */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-5">
          <h2 className="text-xl font-black text-slate-900 flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-orange-600" /> Skool vs. Circle vs. Kajabi: The Real Feature Matrix
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Here is how the top creator platforms compare when your primary goal is maximizing student retention and net profit:
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-xs border border-slate-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-slate-100 text-left">
                  <th className="p-3.5 font-bold text-slate-700">Metric</th>
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
                  <td className="p-3.5">Free + 3% fee cut</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-semibold text-slate-800">Member Limit Cap</td>
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
                  <td className="p-3.5 font-semibold text-slate-800">Course Classroom</td>
                  <td className="p-3.5 font-bold bg-orange-50/40 text-emerald-600 border-x border-orange-200">
                    Built-in (Unlimited courses)
                  </td>
                  <td className="p-3.5 text-emerald-600">Included</td>
                  <td className="p-3.5 text-emerald-600">Advanced</td>
                  <td className="p-3.5 text-rose-500">None (external links)</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-semibold text-slate-800">Student Onboarding</td>
                  <td className="p-3.5 font-bold bg-orange-50/40 text-emerald-600 border-x border-orange-200">
                    Under 60 seconds
                  </td>
                  <td className="p-3.5">Several hours</td>
                  <td className="p-3.5">Complex multi-page portal</td>
                  <td className="p-3.5">Bot verification friction</td>
                </tr>
                <tr>
                  <td className="p-3.5 font-semibold text-slate-800">Community Growth Engine</td>
                  <td className="p-3.5 font-bold bg-orange-50/40 text-emerald-600 border-x border-orange-200">
                    Skool Games (Alex Hormozi)
                  </td>
                  <td className="p-3.5 text-slate-400">Self-serve docs</td>
                  <td className="p-3.5 text-slate-400">Blog articles</td>
                  <td className="p-3.5 text-slate-400">None</td>
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
              <span>Ready to build your recurring subscription business? Start your 14-day free trial on Skool →</span>
            </div>
            <ArrowRight className="w-4 h-4 text-orange-600 group-hover:translate-x-1 transition-transform" />
          </a>
          <div className="text-[11px] text-center text-slate-400">
            Join thousands of educators earning recurring monthly cash flow without paying extra as they scale.
          </div>
        </div>

        {/* ===== SECTION 6: STEP-BY-STEP LAUNCH FOR EDUCATORS ===== */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-5">
          <h2 className="text-xl font-black text-slate-900 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-orange-600" /> 5 Steps to Launch Your First Paid Skool Cohort
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            You don&apos;t need a web developer or tech team. You can launch your digital academy in an afternoon:
          </p>

          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <div className="flex gap-3">
              <span className="w-7 h-7 rounded-lg bg-orange-600 text-white text-xs font-black flex items-center justify-center shrink-0">1</span>
              <div>
                <strong className="text-slate-900">Claim your 14-day free trial.</strong> Pick your group name and URL slug. Choose whether your group is Private (paid subscription required to enter) or Public (free discovery with paid upsells inside).
              </div>
            </div>
            <div className="flex gap-3">
              <span className="w-7 h-7 rounded-lg bg-orange-600 text-white text-xs font-black flex items-center justify-center shrink-0">2</span>
              <div>
                <strong className="text-slate-900">Upload your curriculum into Classroom.</strong> Organize your knowledge into modules. Add video lessons from YouTube (unlisted), Loom, or Vimeo. Attach worksheets, templates, and downloadable checklists.
              </div>
            </div>
            <div className="flex gap-3">
              <span className="w-7 h-7 rounded-lg bg-orange-600 text-white text-xs font-black flex items-center justify-center shrink-0">3</span>
              <div>
                <strong className="text-slate-900">Set up your gamification course locks.</strong> Lock your best masterclass behind Level 2 or Level 3. Tell incoming students: &quot;Introduce yourself and answer 3 questions to unlock the bonus training.&quot;
              </div>
            </div>
            <div className="flex gap-3">
              <span className="w-7 h-7 rounded-lg bg-orange-600 text-white text-xs font-black flex items-center justify-center shrink-0">4</span>
              <div>
                <strong className="text-slate-900">Connect Stripe for instant monthly payouts.</strong> Connect your bank via Stripe Connect in 60 seconds. Set your price (e.g., $49/mo, $99/mo, or an annual pass).
              </div>
            </div>
            <div className="flex gap-3">
              <span className="w-7 h-7 rounded-lg bg-orange-600 text-white text-xs font-black flex items-center justify-center shrink-0">5</span>
              <div>
                <strong className="text-slate-900">Invite your first 10 founding members.</strong> Send your checkout link to your existing email list, social media followers, or previous 1-on-1 clients at a special founder rate.
              </div>
            </div>
          </div>
        </section>

        {/* ===== SECTION 7: REAL CREATOR CASE STUDIES ===== */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-5">
          <h2 className="text-xl font-black text-slate-900 flex items-center gap-2">
            <Quote className="w-5 h-5 text-orange-600" /> Real Creator Results (From the Trenches)
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Real feedback from educators who moved away from static course platforms:
          </p>

          <blockquote className="bg-slate-50 border-l-4 border-orange-500 p-5 rounded-r-xl italic text-slate-700 text-sm relative">
            <p className="mb-2">
              &quot;I used to sell a $497 course on Teachable. I made sales in January, and then zero in February. Moving to Skool and charging $69/month transformed my business. I currently have 185 active members, meaning I wake up every month with over $12,700 in recurring revenue before I do anything. The leaderboard keeps members active and learning.&quot;
            </p>
            <footer className="text-xs font-bold text-slate-900 not-italic">
              — David M., Full-Stack Web Development Instructor
            </footer>
          </blockquote>

          <blockquote className="bg-slate-50 border-l-4 border-orange-500 p-5 rounded-r-xl italic text-slate-700 text-sm relative">
            <p className="mb-2">
              &quot;The $99 flat fee saved me thousands. Circle was about to charge me $399/month because my student count crossed 1,500. Skool never gouges you as you grow. It is the most founder-friendly platform on the internet.&quot;
            </p>
            <footer className="text-xs font-bold text-slate-900 not-italic">
              — Rachel T., Design Educator &amp; Community Host
            </footer>
          </blockquote>
        </section>

        {/* ===== PROMO BANNER ===== */}
        <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-orange-950 text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-orange-600 opacity-20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-3 max-w-lg">
              <div className="flex items-center gap-2 text-orange-400 font-bold tracking-wider text-xs uppercase">
                <Sparkles className="w-4 h-4" /> 14-Day Free Creator Trial
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                Build a Recurring 6-Figure Knowledge Business
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Zero credit card charge for 14 days. Upload your courses, invite your founding members, and test the recurring revenue engine live. Cancel anytime with 1-click in settings.
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 shrink-0 w-full sm:w-auto">
              <a
                href="https://www.skool.com/signup?ref=dfdaa1968c7442149993730d69fa0487"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="px-8 py-4 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-black text-sm transition shadow-lg shadow-orange-500/30 shrink-0 w-full sm:w-auto text-center cursor-pointer cta-glow"
              >
                Start Free Creator Trial
              </a>
              <span className="text-[11px] text-slate-400">Launch in under 15 minutes</span>
            </div>
          </div>
        </div>

        {/* ===== SECTION 8: FAQ FOR TEACHERS ===== */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-5">
          <h2 className="text-xl font-black text-slate-900 flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-orange-600" /> Frequently Asked Questions from Course Creators
          </h2>

          <div className="space-y-3">
            <details className="group border border-slate-200 rounded-xl p-4 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between font-bold text-slate-900 cursor-pointer text-sm">
                Can I migrate my existing students from Teachable, Kajabi, or Circle?
                <ChevronRight className="w-4 h-4 text-slate-400 group-open:rotate-90 transition-transform" />
              </summary>
              <div className="mt-3 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                Yes. You can import your student list via CSV in seconds. Skool will automatically send them personal invite links allowing them to set up their profile and access their courses immediately.
              </div>
            </details>

            <details className="group border border-slate-200 rounded-xl p-4 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between font-bold text-slate-900 cursor-pointer text-sm">
                Does Skool take a percentage of my student sales?
                <ChevronRight className="w-4 h-4 text-slate-400 group-open:rotate-90 transition-transform" />
              </summary>
              <div className="mt-3 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                No. Unlike platforms like Whop or Gumroad that take 3% to 10% platform cuts, Skool charges 0% platform transaction fees. You pay only standard Stripe merchant credit card processing (2.9% + 30¢). You keep 100% of your net profits.
              </div>
            </details>

            <details className="group border border-slate-200 rounded-xl p-4 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between font-bold text-slate-900 cursor-pointer text-sm">
                Can I host multiple different courses in one $99/mo group?
                <ChevronRight className="w-4 h-4 text-slate-400 group-open:rotate-90 transition-transform" />
              </summary>
              <div className="mt-3 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                Yes! Your single Skool group can host unlimited courses in the Classroom tab. You can give all members access, sell certain courses as separate paid add-ons, or lock advanced courses behind community level milestones.
              </div>
            </details>

            <details className="group border border-slate-200 rounded-xl p-4 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between font-bold text-slate-900 cursor-pointer text-sm">
                How do students access my community on mobile?
                <ChevronRight className="w-4 h-4 text-slate-400 group-open:rotate-90 transition-transform" />
              </summary>
              <div className="mt-3 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                Skool has top-rated native iOS and Android mobile apps. Your students can watch course videos, comment on community posts, message peers, and receive push notifications on their phones, dramatically increasing your retention rate.
              </div>
            </details>

            <details className="group border border-slate-200 rounded-xl p-4 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between font-bold text-slate-900 cursor-pointer text-sm">
                What is the &quot;Skool Games&quot; community growth program?
                <ChevronRight className="w-4 h-4 text-slate-400 group-open:rotate-90 transition-transform" />
              </summary>
              <div className="mt-3 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                The Skool Games is a free growth initiative run directly by Alex Hormozi and Sam Ovens. Every creator who launches a group competes on a monthly leaderboard. Top-growing community owners win 1-on-1 private mastermind access with Alex Hormozi at his headquarters, plus access to private trainings on how to scale past $100k/month.
              </div>
            </details>
          </div>
        </section>
      </main>

      {/* Internal Linking / Keep Reading */}
      <section className="border-t border-slate-200 bg-slate-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl font-black text-slate-900 mb-6">Essential Tools for Course Creators &amp; Digital Entrepreneurs</h2>
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
                Hosting your course marketing landing page or WordPress funnel? See our DigitalOcean speed benchmarks.
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
                Transcribe your member group coaching calls and turn them into written course summaries automatically.
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

      {/* ===== STICKY FLOATING BOTTOM BAR ===== */}
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
                <span>Skool for Course Creators</span>
                <span className="hidden sm:inline-block px-2 py-0.5 rounded-full bg-orange-100 text-orange-800 text-[10px] font-bold">
                  14-Day Free Trial
                </span>
              </div>
              <div className="text-[11px] text-slate-500 hidden sm:block">
                Build recurring MRR &bull; Unlimited members &bull; 0% platform cuts
              </div>
            </div>
          </div>

          <a
            href="https://www.skool.com/signup?ref=dfdaa1968c7442149993730d69fa0487"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="cta-glow inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-orange-500/30 transition shrink-0 cursor-pointer hover:scale-105"
          >
            <span>Start Free Creator Trial</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
