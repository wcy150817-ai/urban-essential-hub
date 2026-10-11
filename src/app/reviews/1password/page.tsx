import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import {
  Lock,
  CheckCircle2,
  ShieldCheck,
  ChevronRight,
  ArrowLeft,
  DollarSign,
  HelpCircle,
  ThumbsUp,
  KeyRound,
  Smartphone,
  XCircle,
  AlertTriangle,
  Info,
  Users,
  Plane,
} from "lucide-react";

const PAGE_URL = "https://urbanessentialhub.com/reviews/1password";
const TITLE = "1Password Review (2026): Features, Security Design, Pricing and Drawbacks";
const DESCRIPTION =
  "A research-based 1Password review: features, Secret Key security design, current pricing, platform support, who it fits and its real drawbacks.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/reviews/1password" },
};

const faqs = [
  {
    q: "How much does 1Password cost in 2026?",
    a: "Direct from the vendor, 1Password Individual lists at $3.99/month billed annually. However, they are currently running an introductory 25% discount for the first year, bringing it to $2.99/month. 1Password Families (for up to 5 users) lists at $5.99/month but drops to $4.49/month for the first year under the same promotion. There is no free tier.",
  },
  {
    q: "Which devices does 1Password support?",
    a: "Per 1Password’s system requirements page, 1Password 8 needs macOS 12 or later, iOS or iPadOS 18 or later, a 64-bit version of Windows 10 or later, Android 12 or later with Google Play, or a supported 64-bit Linux distribution. Browser extensions cover Chrome, Firefox, Edge, Brave and Safari.",
  },
  {
    q: "Does 1Password support passkeys?",
    a: "Yes. 1Password says you can save passkeys, sign in with them in your browser, and view, edit, move and share them like any other item. Saving passkeys on mobile and Windows has version floors: iOS 18 or later, Android 14 or later, and Windows 11.",
  },
  {
    q: "Has 1Password been hacked?",
    a: "The one incident write-up we reviewed is 1Password’s October 2023 post about suspicious activity on its Okta instance. 1Password says it terminated the activity and found no compromise of user data or other sensitive systems. For a detailed comparison of security histories, see our head-to-head comparison pages.",
  },
];

const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: TITLE,
  description: DESCRIPTION,
  datePublished: "2026-10-11",
  dateModified: "2026-10-11",
  mainEntityOfPage: PAGE_URL,
  author: { "@type": "Organization", name: "Urban Essential Hub Editorial Team" },
  publisher: { "@type": "Organization", name: "Urban Essential Hub" },
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const softwareLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "1Password",
  applicationCategory: "SecurityApplication",
  operatingSystem: "macOS, Windows, Linux, iOS, Android",
  url: "https://1password.com/",
  description:
    "Subscription password manager with end-to-end encryption, a device-generated Secret Key, Watchtower alerts, passkey storage and Travel Mode.",
  offers: [
    {
      "@type": "Offer",
      name: "1Password Individual, billed yearly (promotional first-year price per month)",
      price: "2.99",
      priceCurrency: "USD",
      description: "Regular price 3.99 USD per month. Promotion applies to new customers who subscribe directly, first year, annual billing.",
    },
    {
      "@type": "Offer",
      name: "1Password Families, billed yearly (promotional first-year price per month)",
      price: "4.49",
      priceCurrency: "USD",
      description: "Includes 5 users. Regular price 5.99 USD per month.",
    }
  ],
};

function AffiliateCta({ label }: { label: string }) {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<a href="https://bbux.me/P9xAzh5at" target="_blank" rel="sponsored noopener" style="display:inline-block;color:#ffffff !important;background:#4f46e5;padding:14px 28px;border-radius:12px;font-weight:700;text-decoration:none;text-align:center">${label}</a>`,
      }}
    />
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-5">
      {children}
    </section>
  );
}

export default function OnePasswordReview() {
  const p = "text-sm text-slate-600 leading-relaxed mb-4";
  const h2 = "text-xl font-black text-slate-900 flex items-center gap-2 mt-8 mb-4";
  const h3 = "text-lg font-black text-slate-800 mt-6 mb-3";

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareLd) }} />

      <header className="bg-white border-b border-slate-200 sticky top-0 z-40 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 py-8 relative z-10">
          <Link href="/" className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-800 transition mb-6 bg-slate-100 px-3 py-1.5 rounded-full">
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
          </Link>
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
            <div className="space-y-4 max-w-2xl">
              <h1 className="text-3xl sm:text-4xl font-black text-slate-900 leading-[1.1] tracking-tight">
                {TITLE}
              </h1>
              <p className="text-base text-slate-600 leading-relaxed font-medium">
                {DESCRIPTION}
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-500 pt-2">
                <span className="flex items-center gap-1.5 bg-slate-100 px-2.5 py-1 rounded-md"><Lock className="w-3.5 h-3.5" /> Security Application</span>
                <span className="flex items-center gap-1.5 bg-slate-100 px-2.5 py-1 rounded-md"><CheckCircle2 className="w-3.5 h-3.5" /> Fact Checked (2026)</span>
              </div>
            </div>
            <div className="md:shrink-0 flex items-center bg-slate-50 rounded-xl p-4 border border-slate-200 shadow-sm w-fit">
              <div className="text-center w-full">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Pricing From</div>
                <div className="text-2xl font-black text-slate-900">$2.99<span className="text-sm text-slate-500 font-semibold">/mo</span></div>
                <div className="mt-3">
                  <AffiliateCta label="Check 1Password Pricing" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-10 space-y-12">
        
        <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-5 mb-8">
          <p className="text-sm font-medium text-indigo-900 mb-2"><strong>Looking for a comparison?</strong></p>
          <p className="text-sm text-indigo-700">If you are trying to decide between 1Password and LastPass, read our deep-dive head-to-head analysis here: <Link href="/1password-vs-lastpass" className="font-bold underline text-indigo-800">1Password vs LastPass (2026): Security Architecture & Pricing</Link>.</p>
        </div>

        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
          <h2 className={h2}><ShieldCheck className="w-6 h-6 text-indigo-600" /> Executive Summary</h2>
          <p className={p}>
            1Password has transitioned over the years from a standalone, locally-hosted vault app to a fully cloud-synced subscription service. It is widely considered one of the leading password managers for personal and enterprise use. In this review, we break down what 1Password actually delivers in 2026, focusing purely on its documented features, security architecture, and pricing.
          </p>
          <p className={p}>
            Unlike many reviews that rely on fabricated testing claims, this analysis relies entirely on verified technical documentation from 1Password and observable facts about its platform support. 1Password is distinguished heavily by its "Secret Key" architecture, a second layer of encryption that runs locally on your device, separating it from competitors that rely solely on a master password.
          </p>
        </section>

        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
          <h2 className={h2}><KeyRound className="w-6 h-6 text-indigo-600" /> Security Architecture: The Secret Key</h2>
          <p className={p}>
            The core of 1Password's security model is its dual-factor encryption scheme. While almost every password manager uses AES-256 bit encryption and PBKDF2 (or Argon2) to derive a key from your Master Password, 1Password adds a unique 34-character <strong>Secret Key</strong>.
          </p>
          <h3 className={h3}>How the Secret Key Works</h3>
          <p className={p}>
            When you first create a 1Password account, your device generates this Secret Key locally. It is never sent to 1Password's servers in plaintext. 
          </p>
          <p className={p}>
            To decrypt your vault, the software requires <em>both</em> your Master Password (which you memorize) and the Secret Key (which is stored locally on authenticated devices or printed on your Emergency Kit). This means that even if a malicious actor were to completely breach 1Password's servers and steal the encrypted vaults, they could not brute-force the vaults using just a database of compromised passwords. They would also need the locally-generated Secret Key for every specific user.
          </p>
          <p className={p}>
            This architecture is a massive defensive moat and is the primary reason many security professionals recommend 1Password. It heavily mitigates the risk of a centralized server breach affecting end-users.
          </p>
        </section>

        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
          <h2 className={h2}><CheckCircle2 className="w-6 h-6 text-indigo-600" /> Core Features Overview</h2>
          <p className={p}>
            Beyond standard password storage and form-filling, 1Password includes several notable features that define its current tier offering.
          </p>
          
          <ul className="space-y-6 mt-6">
            <li className="bg-slate-50 p-5 rounded-xl border border-slate-100">
              <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2"><Smartphone className="w-4 h-4 text-indigo-500" /> Passkey Support</h4>
              <p className="text-sm text-slate-600">1Password has fully integrated Passkey support. Users can save passkeys directly into their 1Password vaults and use them to authenticate across different websites, bypassing passwords entirely. This feature is supported natively in modern browsers, as well as on iOS 18+ and Android 14+.</p>
            </li>
            
            <li className="bg-slate-50 p-5 rounded-xl border border-slate-100">
              <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2"><AlertTriangle className="w-4 h-4 text-indigo-500" /> Watchtower</h4>
              <p className="text-sm text-slate-600">Watchtower is 1Password’s built-in auditing tool. It cross-references your saved logins with HaveIBeenPwned to alert you if a site you use has been compromised. It also flags reused, weak, or expiring passwords, and warns you if you are using HTTP instead of HTTPS on saved URLs.</p>
            </li>

            <li className="bg-slate-50 p-5 rounded-xl border border-slate-100">
              <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2"><Plane className="w-4 h-4 text-indigo-500" /> Travel Mode</h4>
              <p className="text-sm text-slate-600">A unique feature for international travelers. By toggling Travel Mode on your 1Password web dashboard, the apps on your devices will automatically remove vaults that aren't marked as "safe for travel." This prevents border security from forcing you to unlock and expose sensitive work or personal vaults.</p>
            </li>
          </ul>
        </section>

        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
          <h2 className={h2}><DollarSign className="w-6 h-6 text-indigo-600" /> Verified Pricing (2026)</h2>
          <p className={p}>
            1Password does not offer a free tier. They offer a 14-day free trial, after which a paid subscription is required. 
          </p>
          <div className="overflow-x-auto mt-4 rounded-xl border border-slate-200">
            <table className="w-full text-left text-sm whitespace-nowrap">
              <thead className="bg-slate-50 text-slate-600">
                <tr>
                  <th className="px-6 py-4 font-bold border-b border-slate-200">Plan Name</th>
                  <th className="px-6 py-4 font-bold border-b border-slate-200">Standard Price</th>
                  <th className="px-6 py-4 font-bold border-b border-slate-200">First-Year Promo</th>
                  <th className="px-6 py-4 font-bold border-b border-slate-200">Key Limits</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                <tr>
                  <td className="px-6 py-4 font-semibold text-slate-900">Individual</td>
                  <td className="px-6 py-4 text-slate-600">$3.99 / mo (billed annually)</td>
                  <td className="px-6 py-4 text-slate-900 font-bold">$2.99 / mo</td>
                  <td className="px-6 py-4 text-slate-600">1 User, 1GB Storage</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-slate-900">Families</td>
                  <td className="px-6 py-4 text-slate-600">$5.99 / mo (billed annually)</td>
                  <td className="px-6 py-4 text-slate-900 font-bold">$4.49 / mo</td>
                  <td className="px-6 py-4 text-slate-600">5 Users, Shared Vaults</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-4 text-center">
            *Pricing verified direct from 1Password.com. First-year promo prices reflect the 25% discount currently offered to new direct subscribers.
          </p>
          <div className="mt-8 text-center flex flex-col items-center justify-center gap-3">
             <AffiliateCta label="Get 1Password Now" />
             <span className="text-xs text-slate-400">14-day free trial available.</span>
          </div>
        </section>

        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
          <h2 className={h2}><Users className="w-6 h-6 text-indigo-600" /> Team and Business Capabilities</h2>
          <p className={p}>
            While the Individual and Families plans are popular, 1Password has built a significant footprint in the enterprise space. The architecture that protects single users scales up to protect large organizations, with additional administrative controls layered on top.
          </p>
          <p className={p}>
            1Password Teams (starting at $19.95/month for up to 10 users) and 1Password Business ($7.99/user/month) offer granular permission structures. Administrators can create shared vaults for specific departments (e.g., Marketing, Engineering) and precisely control who can view, edit, or manage the credentials within those vaults.
          </p>
          <p className={p}>
            The Business tier includes integrations with identity providers (IdPs) like Okta, Microsoft Entra ID, and Google Workspace for automated provisioning (SCIM) and single sign-on (SSO) integration. Furthermore, 1Password Business includes Advanced Protection features, allowing administrators to enforce two-factor authentication, set master password policies, and restrict access to 1Password from specific IP addresses or locations using firewall rules. This level of control is a primary reason why many organizations choose 1Password over simpler, consumer-focused alternatives.
          </p>
          <p className={p}>
            Additionally, every 1Password Business account includes a complimentary 1Password Families account for every team member, encouraging good security habits both at work and at home.
          </p>
        </section>

        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
          <h2 className={h2}><XCircle className="w-6 h-6 text-indigo-600" /> Drawbacks and Limitations</h2>
          <p className={p}>
            While 1Password is an industry leader, there are a few objective drawbacks to consider before committing to the ecosystem:
          </p>
          <ul className="list-disc pl-5 space-y-3 mt-4 text-sm text-slate-600">
            <li><strong>No Free Tier:</strong> Unlike Bitwarden or standard iCloud Keychain, 1Password has no permanent free version. Once the trial ends, you must pay.</li>
            <li><strong>Secret Key Burden:</strong> If you lose your Master Password AND your Emergency Kit containing the Secret Key, your data is gone. 1Password cannot recover it for you. This strict security model requires the user to be responsible with their Emergency Kit.</li>
            <li><strong>Electron App Architecture:</strong> With version 8, 1Password moved its desktop applications (macOS and Windows) to the Electron framework. While this unifies the codebase, some users prefer the lower memory footprint of a fully native application (like the older 1Password 7 on Mac).</li>
          </ul>
        </section>
        
        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
          <h2 className={h2}><HelpCircle className="w-6 h-6 text-indigo-600" /> Frequently Asked Questions</h2>
          <div className="space-y-4 mt-6">
            {faqs.map((faq, idx) => (
              <details key={idx} className="group bg-slate-50 border border-slate-200 rounded-xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex items-center justify-between px-6 py-4 cursor-pointer font-bold text-slate-900 hover:bg-slate-100 transition text-sm">
                  {faq.q}
                  <ChevronRight className="w-5 h-5 text-slate-400 group-open:rotate-90 transition-transform duration-200" />
                </summary>
                <div className="px-6 pb-4 text-sm text-slate-600 leading-relaxed border-t border-slate-200 pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}
