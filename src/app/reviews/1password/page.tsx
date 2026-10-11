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
    a: "Direct from the vendor, 1Password Individual lists at $3.99/month billed annually. However, listings show an introductory 25% first-year discount, bringing it to $2.99/month; confirm the current offer on the vendor's site. 1Password Families (for up to 5 users) lists at $5.99/month but drops to $4.49/month for the first year under the same promotion. There is no free tier.",
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
            We did not run our own hands-on test of 1Password. This review is built from the vendor's published documentation and public information, and we say where something could not be verified. 1Password is distinguished heavily by its "Secret Key" architecture, a second layer of encryption that runs locally on your device, separating it from competitors that rely solely on a master password.
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
              <p className="text-sm text-slate-600">1Password supports saving passkeys in your vault and using them to sign in to supported websites without typing a password. Passkey support depends on the website, your browser and your operating system version, so check 1Password&apos;s passkey documentation for the platforms you use.</p>
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
          <h2 className={h2}><DollarSign className="w-6 h-6 text-indigo-600" /> Pricing (October 2026)</h2>
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
                  <td className="px-6 py-4 text-slate-600">1 user</td>
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
            *Prices are the figures shown in 1Password listings as of October 2026; the vendor&apos;s pricing page is rendered client-side, so we could not read it directly. Promotions change, so confirm the current price on 1Password.com before you buy.
          </p>
          <div className="mt-8 text-center flex flex-col items-center justify-center gap-3">
             <AffiliateCta label="Get 1Password Now" />
             <span className="text-xs text-slate-400">14-day free trial available.</span>
          </div>
        </section>

        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
          <h2 className={h2}><KeyRound className="w-6 h-6 text-indigo-600" /> Getting Started: What Setup Involves</h2>
          <p className={p}>
            Setting up 1Password is more deliberate than turning on a browser's built-in password saver, mainly because of the Secret Key. A typical first-time setup follows these steps, based on 1Password&apos;s published onboarding flow:
          </p>
          <ol className="list-decimal pl-5 space-y-3 text-sm text-slate-600">
            <li><strong>Create the account and master password.</strong> Choose a long, unique master password you can remember, because it is never stored by 1Password in a form it can read.</li>
            <li><strong>Save the Emergency Kit.</strong> 1Password generates a document containing your account details and Secret Key. Store a printed copy somewhere safe, because you will need it to sign in on a new device.</li>
            <li><strong>Install the apps and browser extension.</strong> Desktop apps, mobile apps and browser extensions all connect to the same vault.</li>
            <li><strong>Import existing logins.</strong> Most people move data from a browser or another manager using an export file, then delete that export afterwards because it is unencrypted.</li>
            <li><strong>Run Watchtower.</strong> Review reused, weak or exposed passwords and fix the most important accounts first, such as email and banking.</li>
          </ol>
          <p className={p + " mt-4"}>
            The trade-off is a few more minutes at the start in exchange for a stronger security model. If you would rather not manage an Emergency Kit at all, a simpler manager may suit you better.
          </p>
        </section>

        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
          <h2 className={h2}><Users className="w-6 h-6 text-indigo-600" /> Team and Business Capabilities</h2>
          <p className={p}>
            While the Individual and Families plans are popular, 1Password also sells plans for teams and businesses. The same encryption design that protects single users is paired with administrative controls aimed at organizations.
          </p>
          <p className={p}>
            1Password&apos;s Teams and Business plans offer shared vaults with permission controls, so administrators can decide who can view, edit or manage the credentials in a given vault. Exact plan prices and which features sit in which tier change over time and are listed on the vendor&apos;s pricing page, so we do not quote team prices here. Check that page for current figures before you decide.
          </p>
          <p className={p}>
            According to 1Password&apos;s business documentation, higher tiers add identity-provider integrations, automated provisioning and enforceable security policies. Confirm which of these your chosen tier includes, because features vary by plan. 1Password has also stated that its business plans include a family account for each employee, which is worth verifying with the vendor if it matters to you.
          </p>
        </section>

        <section className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
          <h2 className={h2}><CheckCircle2 className="w-6 h-6 text-indigo-600" /> Who 1Password Fits, and Who Should Look Elsewhere</h2>
          <div className="grid sm:grid-cols-2 gap-6 mt-4">
            <div className="bg-slate-50 p-5 rounded-xl border border-slate-100">
              <h4 className="font-bold text-slate-900 mb-2">A good fit if you:</h4>
              <ul className="list-disc pl-5 space-y-2 text-sm text-slate-600">
                <li>Want a second secret protecting your vault beyond the master password.</li>
                <li>Share logins with family or a small team and want clear vault permissions.</li>
                <li>Use several operating systems and want the same vault everywhere.</li>
                <li>Travel across borders and value Travel Mode.</li>
              </ul>
            </div>
            <div className="bg-slate-50 p-5 rounded-xl border border-slate-100">
              <h4 className="font-bold text-slate-900 mb-2">Consider alternatives if you:</h4>
              <ul className="list-disc pl-5 space-y-2 text-sm text-slate-600">
                <li>Need a permanent free tier. Bitwarden and the built-in keychains on Apple and Google platforms are free.</li>
                <li>Do not want to look after an Emergency Kit.</li>
                <li>Only use one Apple device and are happy with the built-in keychain.</li>
              </ul>
            </div>
          </div>
          <p className={p + " mt-4"}>
            If you are weighing 1Password against LastPass specifically, our <Link href="/1password-vs-lastpass" className="font-bold underline text-indigo-700">1Password vs LastPass comparison</Link> covers pricing and security design side by side.
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
          <h2 className={h2}><AlertTriangle className="w-6 h-6 text-indigo-600" /> How This Review Was Built and What We Could Not Verify</h2>
          <p className={p}>
            This page draws on 1Password&apos;s published documentation, public pricing listings and its documented security design. We did not run our own long-term hands-on test, so we make no claims about everyday speed, autofill reliability or customer support quality beyond what the vendor documents.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm text-slate-600">
            <li>We could not read the vendor&apos;s pricing page directly, so prices are marked as listings from October 2026.</li>
            <li>We do not quote team or business prices, because they change and we could not confirm current figures.</li>
            <li>Feature availability differs by plan and platform. Confirm any feature you depend on in 1Password&apos;s documentation before you subscribe.</li>
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
