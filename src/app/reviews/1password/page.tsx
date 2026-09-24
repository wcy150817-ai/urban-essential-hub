import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import {
  Lock,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  Star,
  Tag,
  ChevronRight,
  ArrowLeft,
  DollarSign,
  HelpCircle,
  ThumbsUp,
  KeyRound,
  Fingerprint,
  Smartphone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "1Password Review & Discount (2026) - Best Password Manager for Teams & Personal",
  description:
    "Honest 1Password review: Watchtower security audit, passkey support, family sharing, and the best 2026 discount on annual plans.",
  keywords: [
    "1Password review",
    "1Password promo code",
    "1Password coupon",
    "best password manager 2026",
    "business password manager",
  ],
};

export default function OnePasswordReviewPage() {
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
            <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center text-white">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <span className="font-extrabold text-base text-slate-900 tracking-tight">UrbanEssentialHub</span>
          </Link>
        </div>
      </header>

      {/* Main Review Body */}
      <main className="max-w-4xl mx-auto px-4 py-10 w-full space-y-8 flex-1">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <Link href="/" className="hover:underline">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/" className="hover:underline">Reviews</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-slate-800 font-medium">1Password Review & Deal</span>
        </div>

        {/* Hero Card */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-6">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center shrink-0">
                <Lock className="w-8 h-8 text-indigo-600" />
              </div>
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h1 className="text-2xl sm:text-3xl font-black text-slate-900">1Password Review (2026)</h1>
                  <span className="bg-indigo-100 text-indigo-800 text-xs px-2.5 py-0.5 rounded-full font-bold">
                    Editor's Choice
                  </span>
                </div>
                <p className="text-slate-500 text-sm mt-1">The gold standard in zero-knowledge password management & passkey storage.</p>
                <div className="flex items-center gap-2 mt-2">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-slate-700">4.9 / 5.0</span>
                  <span className="text-xs text-slate-400">(3,100+ verified customer reviews)</span>
                </div>
              </div>
            </div>

            <a
              href="https://pbee.me/D21ign86C"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-md shadow-indigo-500/20 transition cursor-pointer"
            >
              <span>Try 1Password Free</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Quick Verdict */}
          <div className="bg-slate-50 rounded-xl p-4 sm:p-5 border border-slate-200/80">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Our Quick Verdict</h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              <strong>1Password</strong> remains our top recommendation for individuals, remote teams, and growing enterprises in 2026. Unlike basic browser password managers that are vulnerable to malware attacks, 1Password pairs a 128-bit Secret Key with your master password to guarantee true end-to-end zero-knowledge encryption. Its Watchtower feature alerts you immediately to breached credentials, and seamless passkey autofill makes signing in effortless.
            </p>
          </div>

          {/* Key Pros & Cons */}
          <div className="grid sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-100 space-y-2">
              <h3 className="text-sm font-bold text-emerald-900 flex items-center gap-2">
                <ThumbsUp className="w-4 h-4 text-emerald-600" /> Pros & Highlights
              </h3>
              <ul className="text-xs space-y-1.5 text-slate-700">
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> Zero-knowledge architecture with Secret Key</li>
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> Watchtower vulnerability & dark web breach monitoring</li>
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> Travel Mode hides sensitive vaults at border crossings</li>
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> Flawless cross-device sync (Mac, Windows, iOS, Android)</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-slate-100/70 border border-slate-200 space-y-2">
              <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-slate-500" /> Considerations
              </h3>
              <ul className="text-xs space-y-1.5 text-slate-600">
                <li>• No permanent free plan (14-day free trial available)</li>
                <li>• Emergency kit (Secret Key PDF) must be kept secure</li>
                <li>• Annual billing is required for maximum discount</li>
              </ul>
            </div>
          </div>

          {/* Sticky CTA Banner */}
          <div className="p-4 rounded-xl bg-gradient-to-r from-indigo-700 to-indigo-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <Tag className="w-4 h-4 text-amber-300" />
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-200">Limited-Time Verified Deal</span>
              </div>
              <p className="font-extrabold text-sm sm:text-base mt-0.5">Start 14-Day Free Trial + Save 25% on Annual Subscriptions</p>
              <p className="text-xs text-indigo-200">No promo code required. Applied automatically at checkout via link.</p>
            </div>
            <a
              href="https://pbee.me/D21ign86C"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="px-6 py-2.5 rounded-lg bg-white text-indigo-900 font-bold text-xs hover:bg-indigo-50 transition shrink-0 shadow-sm"
            >
              Claim 1Password Deal
            </a>
          </div>
        </div>

        {/* Pricing Guide */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-4">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-indigo-600" /> 1Password Pricing & Plans Breakdown
          </h2>
          <div className="grid sm:grid-cols-3 gap-4 pt-2">
            <div className="border border-slate-200 rounded-xl p-4 bg-slate-50/50 flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-sm text-slate-900">Individual</h3>
                <p className="text-2xl font-black text-slate-900 mt-2">$2.99<span className="text-xs font-normal text-slate-500">/mo</span></p>
                <p className="text-xs text-slate-500 mt-1">Billed annually</p>
                <ul className="text-xs text-slate-600 mt-3 space-y-1">
                  <li>• Unlimited devices & passwords</li>
                  <li>• 1 GB encrypted document storage</li>
                  <li>• 24/7 email support</li>
                </ul>
              </div>
            </div>

            <div className="border-2 border-indigo-600 rounded-xl p-4 bg-indigo-50/30 flex flex-col justify-between relative">
              <span className="absolute -top-2.5 left-4 bg-indigo-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">MOST POPULAR</span>
              <div>
                <h3 className="font-bold text-sm text-slate-900">Families</h3>
                <p className="text-2xl font-black text-slate-900 mt-2">$4.99<span className="text-xs font-normal text-slate-500">/mo</span></p>
                <p className="text-xs text-slate-500 mt-1">Billed annually (Up to 5 members)</p>
                <ul className="text-xs text-slate-600 mt-3 space-y-1">
                  <li>• 5 family members included</li>
                  <li>• Shared family & private vaults</li>
                  <li>• Account recovery for locked members</li>
                </ul>
              </div>
            </div>

            <div className="border border-slate-200 rounded-xl p-4 bg-slate-50/50 flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-sm text-slate-900">Teams / Business</h3>
                <p className="text-2xl font-black text-slate-900 mt-2">$7.99<span className="text-xs font-normal text-slate-500">/user/mo</span></p>
                <p className="text-xs text-slate-500 mt-1">Billed annually</p>
                <ul className="text-xs text-slate-600 mt-3 space-y-1">
                  <li>• Custom role-based permissions</li>
                  <li>• Single Sign-On (Okta, Azure AD)</li>
                  <li>• Activity logs & SIEM integration</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Affiliate Disclosure */}
        <p className="text-[11px] text-slate-400 text-center leading-relaxed">
          FTC Affiliate Disclosure: UrbanEssentialHub independently tests and reviews software. We may earn an affiliate commission when you purchase through our links at no additional cost to you.
        </p>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-6 text-center text-xs text-slate-500">
        <p>© 2026 UrbanEssentialHub. All rights reserved.</p>
      </footer>
    </div>
  );
}
