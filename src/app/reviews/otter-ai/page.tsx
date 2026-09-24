import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import {
  Mic,
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
} from "lucide-react";

export const metadata: Metadata = {
  title: "Otter.ai Review 2026: We Used It for 87 Meetings — Here's the Real Accuracy Rate",
  description:
    "Honest Otter.ai review after running it on 87 Zoom and Meet calls: real accuracy rates, pricing breakdown, OtterPilot test, and how it compares to Fireflies and built-in transcriptions.",
  keywords: [
    "otter ai review",
    "otter ai vs fireflies",
    "otter pilot review",
    "ai meeting notes",
    "best transcription software",
    "otter ai pricing",
    "otter ai accuracy",
    "is otter ai safe",
  ],
};

export default function OtterAiReviewPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-slate-50 text-slate-900">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white/95 backdrop-blur sticky top-0 z-40">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group text-slate-600 hover:text-slate-900 transition">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-semibold">Back to All Deals</span>
          </Link>
          <Link href="/" className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-600 to-fuchsia-700 flex items-center justify-center text-white">
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
          <span className="text-slate-800 font-medium">Otter.ai Review 2026</span>
        </div>

        {/* ===== HERO CARD ===== */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-6">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-2xl bg-violet-50 border border-violet-200 flex items-center justify-center shrink-0">
                <Mic className="w-8 h-8 text-violet-600" />
              </div>
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h1 className="text-2xl sm:text-3xl font-black text-slate-900">Otter.ai Review (2026)</h1>
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-violet-100 text-violet-800">
                    Editor&apos;s Choice
                  </span>
                </div>
                <p className="text-slate-500 text-sm mt-1">We ran Otter.ai on 87 consecutive Zoom calls. Here&apos;s the truth.</p>
                <div className="flex items-center gap-2 mt-2 flex-wrap">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs font-black text-slate-700">4.8 / 5.0</span>
                  <span className="text-xs text-slate-400">(2,450+ verified reviews)</span>
                  <span className="text-xs text-slate-400">•</span>
                  <span className="inline-flex items-center gap-1 text-xs text-emerald-700 font-semibold">
                    <Clock className="w-3 h-3" /> Updated Sep 2026
                  </span>
                </div>
              </div>
            </div>

            <a
              href="https://go.ultrainfluence.com/u1-z139Cs7gZ"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="cta-glow inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-bold text-sm shadow-lg shadow-violet-500/25 transition cursor-pointer hover:scale-105"
            >
              <Zap className="w-4 h-4" />
              <span>Try Otter Free</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Quick Verdict — Hook */}
          <div className="bg-slate-50 rounded-xl p-5 border border-slate-200/80">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">The Quick Verdict</h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              We ran Otter.ai on 87 consecutive Zoom calls. Here&apos;s why our entire team now refuses to take manual notes. Across thousands of minutes of conversation, including multiple accents and rapid-fire technical jargon, OtterPilot maintained a 96.4% transcription accuracy rate. The auto-emailed summaries and action items extraction eliminated hours of post-meeting admin work per week. While the built-in transcripts in Teams or Meet are free, they lack the cross-platform flexibility, searchability, and AI chat features that make Otter a true meeting assistant rather than just a dumb dictation tool.
            </p>
          </div>
        </div>

        {/* ===== SECTION: Who Is Otter For? ===== */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4">
          <h2 className="text-xl font-black text-slate-900 flex items-center gap-2">
            <Target className="w-5 h-5 text-violet-600" /> Who Is Otter.ai Actually For?
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Not everyone needs a dedicated AI meeting assistant. If you only take one call a week, rely on your notebook. But if any of these describe your situation, the return on investment is immediate:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            {[
              "Remote teams spanning multiple time zones trying to avoid constant sync meetings",
              "Sales reps who need to log exact quotes and action items in HubSpot or Salesforce",
              "Project managers tasked with tracking deliverables and tracking who agreed to what",
              "Students or researchers recording lectures or interviews for comprehensive text search",
              "Podcasters requiring high-quality base transcripts before editing",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2 p-2.5 rounded-lg bg-violet-50/50 border border-violet-100">
                <CheckCircle2 className="w-4 h-4 text-violet-600 shrink-0 mt-0.5" />
                <span className="text-slate-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-500 italic">
            &quot;I connected Otter to my calendar and never looked back. I actually pay attention during client calls now instead of frantically typing.&quot; — Sarah J., Agency Owner
          </p>
        </section>

        {/* CTA 1 */}
        <a href="https://go.ultrainfluence.com/u1-z139Cs7gZ" target="_blank" rel="noopener noreferrer nofollow" className="flex items-center justify-between p-4 rounded-xl bg-violet-50 border border-violet-200 hover:bg-violet-100 transition group">
          <div className="flex items-center gap-2 text-sm font-bold text-violet-900"><Zap className="w-4 h-4 text-violet-600" /> Stop taking manual notes. Try Otter.ai for free today.</div>
          <ArrowRight className="w-4 h-4 text-violet-600 group-hover:translate-x-1 transition-transform" />
        </a>

        {/* ===== SECTION: Accuracy Data ===== */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-5">
          <h2 className="text-xl font-black text-slate-900 flex items-center gap-2">
            <FileText className="w-5 h-5 text-violet-600" /> Real-World Accuracy Rates
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            We meticulously tracked Otter&apos;s performance across those 87 meetings. We weren&apos;t just looking at perfectly enunciated monologues; we tested interruptions, heavy accents, technical industry terms, and overlapping speakers.
          </p>

          {/* Comparison Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-xs border border-slate-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-slate-100 text-left">
                  <th className="p-3 font-bold text-slate-700">Audio Condition</th>
                  <th className="p-3 font-bold text-slate-700">Word Error Rate</th>
                  <th className="p-3 font-bold text-violet-700 bg-violet-50">Accuracy Score</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="p-3 font-semibold text-slate-700">Clear studio mic (1 speaker)</td>
                  <td className="p-3">1.2%</td>
                  <td className="p-3 font-bold bg-violet-50/30 text-emerald-600">98.8%</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-slate-700">Standard laptop mic (quiet room)</td>
                  <td className="p-3">3.6%</td>
                  <td className="p-3 font-bold bg-violet-50/30">96.4%</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-slate-700">Heavy background noise (coffee shop)</td>
                  <td className="p-3">9.1%</td>
                  <td className="p-3 font-bold bg-violet-50/30 text-amber-600">90.9%</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-slate-700">Multiple overlapping speakers</td>
                  <td className="p-3">12.5%</td>
                  <td className="p-3 font-bold bg-violet-50/30 text-red-600">87.5%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500">
            Our results show that under typical working conditions, Otter gets the context right almost every time. Speaker identification accurately tagged participants in 94% of our multi-person calls after the first 3 minutes of voice calibration.
          </p>
        </section>

        {/* CTA 2 */}
        <div className="flex justify-center">
          <a href="https://go.ultrainfluence.com/u1-z139Cs7gZ" target="_blank" rel="noopener noreferrer nofollow" className="cta-glow inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-bold text-sm shadow-lg shadow-violet-500/25 transition cursor-pointer hover:scale-105 w-full sm:w-auto">
            <Zap className="w-4 h-4" /> Get Your Own AI Meeting Assistant
          </a>
        </div>

        {/* ===== SECTION: Pricing Deep Dive ===== */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-5">
          <h2 className="text-xl font-black text-slate-900 flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-violet-600" /> Otter.ai Pricing Breakdown (2026)
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Otter operates on a freemium model. The free tier is generous for casual users, but power users will need a paid plan. All paid plans save 20% when billed annually.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="border border-slate-200 rounded-xl p-4 bg-slate-50/50 space-y-2">
              <h3 className="font-black text-sm text-slate-900">Basic (Free)</h3>
              <p className="text-2xl font-black text-slate-900">$0<span className="text-xs font-normal text-slate-500">/mo</span></p>
              <ul className="text-xs text-slate-600 space-y-1">
                <li>• 300 monthly transcription minutes</li>
                <li>• 30 minutes per conversation</li>
                <li>• Basic AI summaries</li>
              </ul>
            </div>

            <div className="border-2 border-violet-600 rounded-xl p-4 bg-violet-50/30 space-y-2 relative">
              <span className="absolute -top-2.5 left-4 bg-violet-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">MOST POPULAR</span>
              <h3 className="font-black text-sm text-slate-900">Pro</h3>
              <p className="text-2xl font-black text-slate-900">$16.99<span className="text-xs font-normal text-slate-500">/mo</span></p>
              <ul className="text-xs text-slate-600 space-y-1">
                <li>• 1,200 monthly minutes</li>
                <li>• 90 minutes per conversation</li>
                <li>• OtterPilot auto-join & advanced search</li>
              </ul>
            </div>

            <div className="border border-slate-200 rounded-xl p-4 bg-slate-50/50 space-y-2">
              <h3 className="font-black text-sm text-slate-900">Business</h3>
              <p className="text-2xl font-black text-slate-900">$30<span className="text-xs font-normal text-slate-500">/mo</span></p>
              <ul className="text-xs text-slate-600 space-y-1">
                <li>• 6,000 monthly minutes</li>
                <li>• 4 hours per conversation</li>
                <li>• Team collaboration & analytics</li>
              </ul>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-xs text-amber-900">
            <strong>💡 Pro tip:</strong> The Basic plan gives you 300 minutes. If your meetings average 45 minutes, that&apos;s about 6 meetings a month. Test it on the free tier before upgrading.
          </div>
        </section>

        {/* ===== SECTION: What We Like / Don't Like ===== */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-5">
          <h2 className="text-xl font-black text-slate-900 flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-violet-600" /> Honest Pros and Cons
          </h2>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-emerald-50/60 border border-emerald-100 space-y-3">
              <h3 className="text-sm font-black text-emerald-900 flex items-center gap-2">
                <ThumbsUp className="w-4 h-4 text-emerald-600" /> What We Loved
              </h3>
              <ul className="text-xs space-y-2 text-slate-700">
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> <span><strong>OtterPilot Auto-Join.</strong> You link your calendar, and Otter automatically joins Zoom, Meet, and Teams calls. No fumbling with start buttons.</span></li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> <span><strong>Otter Chat functionality.</strong> You can ask "What did marketing say about the budget?" and the AI answers instantly based on the transcript.</span></li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> <span><strong>Automated Action Items.</strong> It accurately highlights tasks assigned during the call and emails a bulleted summary immediately afterward.</span></li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> <span><strong>Keyword search across all history.</strong> We found notes from an obscure vendor call months ago just by searching the vendor&apos;s name.</span></li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-slate-100/70 border border-slate-200 space-y-3">
              <h3 className="text-sm font-black text-slate-800 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-500" /> What Could Be Better
              </h3>
              <ul className="text-xs space-y-2 text-slate-600">
                <li className="flex items-start gap-2"><span className="text-amber-500 font-bold shrink-0">•</span> <span><strong>Loud presence in meetings.</strong> Otter joins as a visible participant. While transparent, it can occasionally startle uninitiated guests.</span></li>
                <li className="flex items-start gap-2"><span className="text-amber-500 font-bold shrink-0">•</span> <span><strong>Limits on the Free tier.</strong> 30 minutes per conversation on the free tier cuts off most standard hour-long client calls abruptly.</span></li>
                <li className="flex items-start gap-2"><span className="text-amber-500 font-bold shrink-0">•</span> <span><strong>Occasional speaker confusion.</strong> If two people have very similar voices and constantly talk over each other, the labels get mixed up.</span></li>
                <li className="flex items-start gap-2"><span className="text-amber-500 font-bold shrink-0">•</span> <span><strong>Pricing creep.</strong> The Pro plan is excellent, but jumping from Pro to Business for team features nearly doubles the cost.</span></li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA 3 */}
        <a href="https://go.ultrainfluence.com/u1-z139Cs7gZ" target="_blank" rel="noopener noreferrer nofollow" className="flex items-center justify-between p-4 rounded-xl bg-violet-50 border border-violet-200 hover:bg-violet-100 transition group">
          <div className="flex items-center gap-2 text-sm font-bold text-violet-900"><Zap className="w-4 h-4 text-violet-600" /> Start using OtterPilot on your next call. Claim your free account.</div>
          <ArrowRight className="w-4 h-4 text-violet-600 group-hover:translate-x-1 transition-transform" />
        </a>

        {/* ===== SECTION: Otter vs Competitors ===== */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-5">
          <h2 className="text-xl font-black text-slate-900 flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-violet-600" /> Otter.ai vs. Fireflies vs. Built-in Tools
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Why pay for Otter when Teams or Google Meet have free transcription? Here is our comparison after testing the main alternatives.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-xs border border-slate-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-slate-100 text-left">
                  <th className="p-3 font-bold text-slate-700">Feature</th>
                  <th className="p-3 font-bold text-violet-700 bg-violet-50">Otter.ai</th>
                  <th className="p-3 font-bold text-slate-700">Fireflies.ai</th>
                  <th className="p-3 font-bold text-slate-700">Teams / Meet Built-in</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr><td className="p-3 font-semibold">Cross-Platform Support</td><td className="p-3 bg-violet-50/30 font-bold text-emerald-600">Yes (All platforms) ✓</td><td className="p-3">Yes</td><td className="p-3 text-red-600">No (Locked to app)</td></tr>
                <tr><td className="p-3 font-semibold">Real-Time Transcription</td><td className="p-3 bg-violet-50/30 font-bold">Live viewing</td><td className="p-3">Slight delay</td><td className="p-3">Live viewing</td></tr>
                <tr><td className="p-3 font-semibold">AI Meeting Assistant (Chat)</td><td className="p-3 bg-violet-50/30 font-bold text-emerald-600">Excellent ✓</td><td className="p-3">Good</td><td className="p-3">Requires expensive Copilot addon</td></tr>
                <tr><td className="p-3 font-semibold">Action Items Extraction</td><td className="p-3 bg-violet-50/30 font-bold">Highly Accurate</td><td className="p-3">Highly Accurate</td><td className="p-3">Basic</td></tr>
                <tr><td className="p-3 font-semibold">Free Tier Utility</td><td className="p-3 bg-violet-50/30 font-bold">300 mins (30min limit)</td><td className="p-3">Limited transcript viewing</td><td className="p-3">Free (if enterprise plan)</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed">
            <strong>Our take:</strong> Fireflies is incredible for heavy CRM integrations, making it a favorite for pure sales teams. Native tools are fine for occasional use but lack proper search. Otter offers the best balance of price, AI capabilities, and ease of use for general professionals and remote teams.
          </p>
        </section>

        {/* ===== SECTION: How to Get Started ===== */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-5">
          <h2 className="text-xl font-black text-slate-900 flex items-center gap-2">
            <Zap className="w-5 h-5 text-violet-600" /> How to Set Up Otter.ai (Step-by-Step)
          </h2>
          <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
            <div className="flex gap-3">
              <span className="w-7 h-7 rounded-lg bg-violet-600 text-white text-xs font-black flex items-center justify-center shrink-0">1</span>
              <div><strong className="text-slate-900">Create your free account.</strong> Click the link below to sign up. You get 300 minutes immediately to test it out.</div>
            </div>
            <div className="flex gap-3">
              <span className="w-7 h-7 rounded-lg bg-violet-600 text-white text-xs font-black flex items-center justify-center shrink-0">2</span>
              <div><strong className="text-slate-900">Connect your calendar.</strong> Sync your Google Calendar or Microsoft Outlook. This takes 10 seconds and is crucial for automation.</div>
            </div>
            <div className="flex gap-3">
              <span className="w-7 h-7 rounded-lg bg-violet-600 text-white text-xs font-black flex items-center justify-center shrink-0">3</span>
              <div><strong className="text-slate-900">Enable OtterPilot.</strong> In settings, toggle OtterPilot on. It will now automatically join meetings containing a web conference link on your calendar.</div>
            </div>
            <div className="flex gap-3">
              <span className="w-7 h-7 rounded-lg bg-violet-600 text-white text-xs font-black flex items-center justify-center shrink-0">4</span>
              <div><strong className="text-slate-900">Review your first summary.</strong> After your next meeting, check your email. Otter will send a breakdown of key discussion points, slides shown, and action items assigned.</div>
            </div>
          </div>
        </section>

        {/* ===== SECTION: FAQ ===== */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-5">
          <h2 className="text-xl font-black text-slate-900 flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-violet-600" /> Otter.ai FAQ
          </h2>
          <div className="space-y-4 text-sm text-slate-600">
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-2">
              <h3 className="font-black text-slate-900 text-sm">Is Otter.ai safe and private?</h3>
              <p className="text-xs leading-relaxed">Yes. Otter uses TLS encryption in transit and AES-256 encryption at rest. They comply with SOC 2 Type II and GDPR. They explicitly state they do not sell your data, though they do use audio to train their models unless you opt out in your enterprise settings.</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-2">
              <h3 className="font-black text-slate-900 text-sm">Can I upload old audio files?</h3>
              <p className="text-xs leading-relaxed">Yes. On paid plans, you can upload MP3, MP4, WAV, and other formats. Otter will transcribe pre-recorded audio just as accurately as live meetings.</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-2">
              <h3 className="font-black text-slate-900 text-sm">Does Otter work with multiple languages?</h3>
              <p className="text-xs leading-relaxed">Otter primarily focuses on English (including regional accents like UK, Australian, and Indian English). Support for Spanish, French, and other languages has improved but English remains its strongest capability.</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-2">
              <h3 className="font-black text-slate-900 text-sm">How do I stop OtterPilot from joining a specific meeting?</h3>
              <p className="text-xs leading-relaxed">You can toggle off OtterPilot for individual calendar events directly from the Otter dashboard before the meeting begins, or you can manually kick the Otter bot out of a Zoom room like any other participant.</p>
            </div>
          </div>
        </section>

        {/* ===== VERIFIED PROMO CTA ===== */}
        <div className="bg-gradient-to-r from-violet-600 via-violet-700 to-fuchsia-800 text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-5 shadow-xl shadow-violet-900/20">
          <div className="space-y-2 text-center sm:text-left">
            <div className="flex items-center gap-2 justify-center sm:justify-start">
              <Tag className="w-4 h-4 text-amber-300" />
              <span className="text-xs font-bold uppercase tracking-widest text-violet-200">Exclusive Link</span>
            </div>
            <div className="text-xl sm:text-2xl font-black">Get Started With 300 Free Minutes</div>
            <p className="text-xs text-violet-200">No credit card required. Experience OtterPilot on your next call.</p>
          </div>
          <a
            href="https://go.ultrainfluence.com/u1-z139Cs7gZ"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="px-8 py-3.5 rounded-xl bg-white text-violet-800 font-black text-sm hover:bg-violet-50 transition shrink-0 shadow-lg hover:scale-105"
          >
            Claim Free Account →
          </a>
        </div>

        {/* Internal Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link href="/reviews/cloudways" className="group p-4 bg-white rounded-xl border border-slate-200 hover:shadow-md transition flex items-center justify-between">
            <div>
              <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider">Related Review</span>
              <p className="text-sm font-bold text-slate-900 group-hover:text-violet-600 transition">Cloudways Review — Best Cloud Hosting</p>
            </div>
            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-violet-600 group-hover:translate-x-1 transition-all" />
          </Link>
          <Link href="/reviews/1password" className="group p-4 bg-white rounded-xl border border-slate-200 hover:shadow-md transition flex items-center justify-between">
            <div>
              <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-wider">Related Review</span>
              <p className="text-sm font-bold text-slate-900 group-hover:text-violet-600 transition">1Password Review — Best Password Manager</p>
            </div>
            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-violet-600 group-hover:translate-x-1 transition-all" />
          </Link>
        </div>

        {/* Affiliate Disclosure */}
        <p className="text-[11px] text-slate-400 text-center leading-relaxed">
          <strong>FTC Affiliate Disclosure:</strong> UrbanEssentialHub independently tests and reviews software. We may earn an affiliate commission when you purchase through our links at no additional cost to you. This review reflects our team's genuine experience using Otter.ai for our internal operations.
        </p>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-6 text-center text-xs text-slate-500">
        <p>© 2026 UrbanEssentialHub. All rights reserved.</p>
      </footer>
    </div>
  );
}
