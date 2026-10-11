import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '1Password vs LastPass (2026): Breach History, Encryption Architecture & Pricing',
  description:
    'A source-by-source comparison of 1Password and LastPass: every disclosed security incident since 2015 on a timeline, how the Secret Key changes the threat model, PBKDF2 iteration counts, and current pricing.',
  alternates: { canonical: '/1password-vs-lastpass' },
  openGraph: {
    title: '1Password vs LastPass (2026): Breach History, Encryption Architecture & Pricing',
    description:
      'Verified incident timeline, Secret Key architecture explained, KDF iteration comparison and a dated pricing table.',
    url: 'https://www.urbanessentialhub.com/1password-vs-lastpass',
    type: 'article',
  },
};

const PAGE_URL = 'https://www.urbanessentialhub.com/1password-vs-lastpass';

export default function OnePasswordVsLastPass() {
  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: '1Password vs LastPass (2026): Breach History, Encryption Architecture & Pricing',
    description:
      'Comparison of 1Password and LastPass based on vendor incident disclosures, the 1Password security white paper and published pricing.',
    datePublished: '2026-10-11',
    dateModified: '2026-10-11',
    mainEntityOfPage: PAGE_URL,
    author: { '@type': 'Organization', name: 'Urban Essential Hub Editorial Team' },
    publisher: { '@type': 'Organization', name: 'Urban Essential Hub' },
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Was LastPass hacked?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. LastPass disclosed an intrusion into its development environment on August 25, 2022, and on December 22, 2022 said the same attacker later copied a backup of customer vault data from cloud storage. Its March 1, 2023 update said the backups covered all customer vault data. LastPass states that sensitive vault fields were encrypted and that master passwords were not in the stolen data, but website URLs were stored unencrypted.',
        },
      },
      {
        '@type': 'Question',
        name: 'Was 1Password breached?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Not in the way LastPass was. In an October 23, 2023 statement (updated October 25), 1Password said it detected suspicious activity on its Okta instance on September 29, 2023, terminated it, and found no compromise of user data or other sensitive systems. The cause was later tied to the Okta support system incident. This is the vendor account of events.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the 1Password Secret Key?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The Secret Key is a random value generated on your device when you create an account. According to the 1Password security white paper it has slightly more than 2^128 possible values, it is combined with your account password to derive the key that protects your data, and 1Password does not hold it. A thief who obtains only server-side data would need both secrets.',
        },
      },
      {
        '@type': 'Question',
        name: 'How many PBKDF2 iterations do 1Password and LastPass use?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The current 1Password white paper states 650,000 iterations of PBKDF2-HMAC-SHA256, with older accounts using a lower count until the password or Secret Key is changed. LastPass stated 100,100 iterations as its default in its December 22, 2022 notice, and its help documentation now lists 600,000 as the current minimum for new accounts.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is LastPass still worth using?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'It can be for users who value its free tier and low price, provided the account uses a long unique master password and a high iteration count. For readers choosing fresh, the documented incident record and the lack of a second secret make 1Password the stronger default on security grounds alone.',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8 bg-white text-gray-900 font-sans">
        <header className="mb-12 border-b pb-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            1Password vs LastPass (2026): Breach History, Encryption Architecture &amp; Pricing
          </h1>
          <div className="flex flex-wrap items-center text-gray-600 text-sm mb-6 gap-x-4 gap-y-1">
            <span>By the Urban Essential Hub editorial team</span>
            <span>•</span>
            <span>Updated October 11, 2026</span>
            <span>•</span>
            <span>Research-based analysis, no hands-on testing</span>
          </div>
          <p className="text-xl text-gray-700 leading-relaxed mb-4">
            Most 1Password vs LastPass pages argue about interface polish. This one is about the only question that really separates the two products: what happened when each company was attacked, and what the design of each vault means for you if it happens again. Every date and claim below traces to a named public source, listed at the bottom, and anything we could not confirm is labeled as such.
          </p>
          <p className="text-sm text-gray-600 bg-gray-50 border border-gray-200 rounded-lg p-3">
            <strong>Disclosure:</strong> some links on this page are affiliate links (marked sponsored). If you buy through them we may earn a commission at no extra cost to you. Commissions did not change the facts reported here, and no product was hands-on tested for this article: it is an analysis of vendor disclosures, a published white paper and public pricing pages.
          </p>
        </header>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The short answer</h2>
          <p className="mb-4 text-lg text-gray-700 leading-relaxed">
            On the documented record, <strong>1Password is the safer default</strong>, for two reasons that do not depend on marketing language. First, LastPass has confirmed that an attacker copied backups of customer vault data in 2022, while 1Password&apos;s one disclosed 2023 incident, by its own account, touched no user data. Second, 1Password&apos;s design mixes your account password with a locally generated 128-bit Secret Key, so a stolen server-side copy cannot be attacked with password guesses alone. LastPass vaults are derived from the master password only.
          </p>
          <p className="mb-4 text-lg text-gray-700 leading-relaxed">
            LastPass still has real advantages on price and on having a free tier, and we cover them honestly below. If you want a third option, NordPass is a credible alternative that uses a different cryptographic approach (XChaCha20 encryption with Argon2 key derivation, according to NordPass).
          </p>
          <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-lg my-8">
            <h3 className="text-xl font-bold text-indigo-900 mb-2">Our recommendation</h3>
            <p className="text-indigo-900 mb-4">
              Choose 1Password if breach resilience is your priority and a paid plan is acceptable. Its listed price is $2.99 per month for one user on annual billing at the time of writing, with a 14-day free trial.
            </p>
            <div dangerouslySetInnerHTML={{ __html: '<a href="https://bbux.me/P9xAzh5at" target="_blank" rel="sponsored noopener" style="display:inline-block;color:#ffffff !important;background:#4f46e5;padding:14px 28px;border-radius:12px;font-weight:700;text-decoration:none;text-align:center">Try 1Password free for 14 days</a>' }} />
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">At a glance: what the sources say</h2>
          <p className="mb-6 text-lg text-gray-700 leading-relaxed">
            The table compresses the sections that follow. Each row is expanded, with its source, further down the page.
          </p>
          <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm mb-4">
            <table className="min-w-full divide-y divide-gray-200 text-left">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-4 font-semibold text-gray-900">Factor</th>
                  <th scope="col" className="px-6 py-4 font-semibold text-gray-900">1Password</th>
                  <th scope="col" className="px-6 py-4 font-semibold text-gray-900">LastPass</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-700">Vault data stolen in a disclosed incident</td>
                  <td className="px-6 py-4 text-sm text-gray-700">None reported. Oct 2023 Okta-related incident: vendor says no user data accessed</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Yes. Backups of customer vault data copied (disclosed Dec 22, 2022; scope updated Mar 1, 2023)</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-700">Second secret besides your password</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Yes, a device-generated Secret Key (2^128 order of magnitude)</td>
                  <td className="px-6 py-4 text-sm text-gray-700">No. Vault key derived from the master password</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-700">PBKDF2-SHA256 iterations</td>
                  <td className="px-6 py-4 text-sm text-gray-700">650,000 (current white paper)</td>
                  <td className="px-6 py-4 text-sm text-gray-700">100,100 stated in Dec 2022; 600,000 now listed as the minimum for new accounts</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-700">Website URLs encrypted in the vault</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Yes. White paper says item overviews, including URLs, are encrypted with the vault key</td>
                  <td className="px-6 py-4 text-sm text-gray-700">No. LastPass confirmed URLs were stored unencrypted</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-700">Free plan</td>
                  <td className="px-6 py-4 text-sm text-gray-700">No, 14-day free trial</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Yes, limited to one device type</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 italic">
            Sources: LastPass notices of Dec 22, 2022 and Mar 1, 2023; 1Password statement of Oct 23, 2023; 1Password Security Design white paper; 1Password and LastPass pricing pages. Full links are in the source list below.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Security incident timeline, 2015 to 2023</h2>
          <p className="mb-4 text-lg text-gray-700 leading-relaxed">
            The timeline below lists each incident either company has publicly disclosed, in date order. Rose markers are LastPass, indigo markers are 1Password. Every entry is drawn from the company&apos;s own post, and the wording says &quot;LastPass said&quot; or &quot;1Password said&quot; wherever the claim is the vendor&apos;s and cannot be independently audited.
          </p>

          <ol className="relative border-l-2 border-gray-200 ml-3 my-8 space-y-10">
            <li className="ml-6">
              <span className="absolute -left-[9px] mt-1.5 h-4 w-4 rounded-full bg-rose-500 border-2 border-white"></span>
              <p className="text-sm font-semibold text-rose-700 uppercase tracking-wide">June 2015 · LastPass</p>
              <h3 className="text-xl font-bold text-gray-900 mb-1">Network breach, no vault data reported</h3>
              <p className="text-gray-700 leading-relaxed">
                LastPass reported that attackers obtained account email addresses, password reminders, per-user salts and authentication hashes. It said it found no evidence that encrypted vault data was taken, and it prompted users to change their master passwords. The company&apos;s notice was still being updated on July 10, 2015. This is the least severe of the LastPass incidents, but it matters for context: it shows the company&apos;s breach history did not begin in 2022.
              </p>
            </li>
            <li className="ml-6">
              <span className="absolute -left-[9px] mt-1.5 h-4 w-4 rounded-full bg-rose-500 border-2 border-white"></span>
              <p className="text-sm font-semibold text-rose-700 uppercase tracking-wide">August 25, 2022 · LastPass</p>
              <h3 className="text-xl font-bold text-gray-900 mb-1">Development environment intrusion disclosed</h3>
              <p className="text-gray-700 leading-relaxed">
                LastPass said it detected unusual activity in its development environment two weeks earlier. An unauthorized party used a single compromised developer account to take portions of source code and proprietary technical information. LastPass said at the time that it saw no evidence of access to customer data or encrypted vaults. Its September 15, 2022 update, written with Mandiant, said the activity was limited to a four-day period in August, that the attacker reached the environment through a developer&apos;s compromised endpoint, and that the attacker impersonated the developer after the developer had authenticated with multi-factor authentication.
              </p>
            </li>
            <li className="ml-6">
              <span className="absolute -left-[9px] mt-1.5 h-4 w-4 rounded-full bg-rose-500 border-2 border-white"></span>
              <p className="text-sm font-semibold text-rose-700 uppercase tracking-wide">November 30, 2022 · LastPass</p>
              <h3 className="text-xl font-bold text-gray-900 mb-1">Second incident: cloud storage</h3>
              <p className="text-gray-700 leading-relaxed">
                LastPass told customers it had detected unusual activity in a third-party cloud storage service shared by LastPass and its affiliate GoTo. It engaged Mandiant, alerted law enforcement, and said an unauthorized party had used information from the August incident to access some customer information. It said passwords remained encrypted under its Zero Knowledge architecture.
              </p>
            </li>
            <li className="ml-6">
              <span className="absolute -left-[9px] mt-1.5 h-4 w-4 rounded-full bg-rose-500 border-2 border-white"></span>
              <p className="text-sm font-semibold text-rose-700 uppercase tracking-wide">December 22, 2022 · LastPass</p>
              <h3 className="text-xl font-bold text-gray-900 mb-1">Customer vault backups confirmed copied</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                LastPass said the attacker used credentials and keys obtained by targeting another employee, after source code was stolen in August, to access and decrypt storage volumes. It confirmed the attacker copied basic account information (company names, end-user names, billing addresses, email addresses, telephone numbers and the IP addresses customers used) and also a backup of customer vault data.
              </p>
              <p className="text-gray-700 leading-relaxed">
                In LastPass&apos;s description, the vault backup used a proprietary format with unencrypted data such as website URLs alongside encrypted fields for usernames, passwords, secure notes and form-filled data. The encrypted fields use 256-bit AES with a key derived from each master password. The same post stated a twelve-character minimum master password since 2018 and a default of 100,100 PBKDF2 iterations, and warned that anyone not using those defaults would need far fewer guesses to be cracked. It also said it notified fewer than 3% of its Business customers with specific recommendations.
              </p>
            </li>
            <li className="ml-6">
              <span className="absolute -left-[9px] mt-1.5 h-4 w-4 rounded-full bg-rose-500 border-2 border-white"></span>
              <p className="text-sm font-semibold text-rose-700 uppercase tracking-wide">March 1, 2023 · LastPass</p>
              <h3 className="text-xl font-bold text-gray-900 mb-1">Final update: scope and an apology</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                LastPass reported that the attacker accessed 14 of its 200 software repositories, internal scripts containing secrets and certificates, and DevOps secrets used to reach its cloud backup storage. That storage held configuration data, API secrets, third-party integration secrets, customer metadata and backups of all customer vault data. LastPass said all sensitive vault data other than URLs, the file paths to installed LastPass Windows or macOS software and certain email-address use cases was encrypted.
              </p>
              <p className="text-gray-700 leading-relaxed">
                A backup of the MFA and federation database was also taken, containing LastPass Authenticator seeds, phone numbers used for the MFA backup option and a federation key component. It was encrypted, but LastPass said the decryption key was among the secrets stolen in the second incident. The CEO wrote that he accepted criticism of the company&apos;s slow and unclear communication and took full responsibility. Press coverage of LastPass&apos;s follow-up bulletins, from Sophos and SecurityWeek among others, reported that the second intrusion began with malware on a DevOps engineer&apos;s home computer; we cite this as reporting, not as a primary-source fact.
              </p>
            </li>
            <li className="ml-6">
              <span className="absolute -left-[9px] mt-1.5 h-4 w-4 rounded-full bg-indigo-600 border-2 border-white"></span>
              <p className="text-sm font-semibold text-indigo-700 uppercase tracking-wide">September 29 to October 25, 2023 · 1Password</p>
              <h3 className="text-xl font-bold text-gray-900 mb-1">Okta support system incident, no user data accessed</h3>
              <p className="text-gray-700 leading-relaxed">
                1Password said it detected suspicious activity on September 29, 2023 on the Okta instance it uses to manage employee-facing apps, terminated it immediately and found no compromise of user data or other sensitive systems. On October 20 it confirmed the root cause was Okta&apos;s support system breach. Its October 23 post, updated October 25 after Okta supplied more logs, also confirmed that its Google instance was not affected. As with every entry here, this is the vendor&apos;s account.
              </p>
            </li>
          </ol>
          <p className="mb-4 text-lg text-gray-700 leading-relaxed">
            Reading the timeline fairly means separating three things. The 2015 and 2023 entries are limited events. The 2022 chain is categorically different: the attacker walked away with copies of every customer&apos;s encrypted vault. And all of it is self-reported. We have no basis to claim that 1Password has never been breached, only that it has not disclosed an incident involving customer vault data.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Secret Key and zero-knowledge architecture, explained</h2>
          <p className="mb-4 text-lg text-gray-700 leading-relaxed">
            Both vendors describe their products as zero-knowledge, meaning the company says it never sees your master password or your decrypted data. That phrase tells you where encryption happens, not how hard a stolen vault is to crack. The difference lies in what an attacker needs once they hold an encrypted copy.
          </p>
          <h3 className="text-2xl font-bold text-gray-900 mb-3">LastPass: one secret</h3>
          <p className="mb-4 text-lg text-gray-700 leading-relaxed">
            Per LastPass&apos;s December 22, 2022 notice, the sensitive fields in a vault are encrypted with 256-bit AES under a key derived from the master password, and encryption and decryption happen only in the local client. The hardness of cracking a stolen copy therefore equals the strength of that one password multiplied by the cost of the key-derivation function. That is exactly why LastPass told customers that weak or non-default settings would reduce the number of guesses needed.
          </p>
          <h3 className="text-2xl font-bold text-gray-900 mb-3">1Password: two secrets (2SKD)</h3>
          <p className="mb-4 text-lg text-gray-700 leading-relaxed">
            The 1Password Security Design white paper describes what it calls two-secret key derivation. The sequence, in plain terms:
          </p>
          <div className="grid gap-4 sm:grid-cols-2 mb-6">
            <div className="rounded-xl border border-indigo-200 bg-indigo-50 p-5">
              <p className="text-sm font-bold text-indigo-900 mb-1">Step 1: account password</p>
              <p className="text-sm text-indigo-900">Trimmed and normalized, combined with a salt, then run through PBKDF2-HMAC-SHA256 with 650,000 iterations to produce 32 bytes.</p>
            </div>
            <div className="rounded-xl border border-indigo-200 bg-indigo-50 p-5">
              <p className="text-sm font-bold text-indigo-900 mb-1">Step 2: Secret Key</p>
              <p className="text-sm text-indigo-900">Generated on your device at sign-up and processed with HKDF alongside your account ID to produce another 32 bytes.</p>
            </div>
            <div className="rounded-xl border border-indigo-200 bg-indigo-50 p-5">
              <p className="text-sm font-bold text-indigo-900 mb-1">Step 3: combine</p>
              <p className="text-sm text-indigo-900">The two results are XORed into the Account Unlock Key. Neither input alone is enough to reproduce it.</p>
            </div>
            <div className="rounded-xl border border-indigo-200 bg-indigo-50 p-5">
              <p className="text-sm font-bold text-indigo-900 mb-1">Step 4: key chain</p>
              <p className="text-sm text-indigo-900">The Account Unlock Key encrypts your private key, which decrypts the vault keys, which encrypt your items.</p>
            </div>
          </div>
          <p className="mb-4 text-lg text-gray-700 leading-relaxed">
            Per the white paper, the Secret Key consists of a version tag, your account ID and 26 random characters, and the space of possible secrets is slightly more than 2 to the power of 128, roughly 3.4 followed by 38 zeros. The paper also states that the data held on 1Password&apos;s servers cannot be used to check whether an account-password guess is correct, which is the property that matters after a breach. An attacker holding only server-side data would have to guess the account password and the Secret Key together.
          </p>
          <p className="mb-4 text-lg text-gray-700 leading-relaxed">
            A second, easily missed difference is what sits outside the encryption. LastPass confirmed that website URLs in vault backups were unencrypted. The 1Password white paper says item overviews, which include the title, URLs and tags, are encrypted with the vault key like the rest of the item. For a breach victim, a list of every site you have an account with is a ready-made phishing target list.
          </p>
          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg my-8">
            <h3 className="text-xl font-bold text-amber-900 mb-2">Honest limits of the Secret Key</h3>
            <p className="text-amber-900 mb-3">
              The Secret Key protects against stolen server-side data. It does not protect against malware on a device that is already unlocked or that records your keystrokes, and anyone who has your Secret Key (for example from a saved Emergency Kit) is back to needing only your password. The white paper itself notes that an attacker who obtains the Secret Key faces 650,000 PBKDF2 rounds per guess.
            </p>
            <p className="text-amber-900">
              There is a recovery trade-off too: the white paper says the vendor cannot reset or recover your account password or Secret Key, so losing every device and your Emergency Kit can mean losing the vault on individual plans.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Key-derivation iterations compared</h2>
          <p className="mb-6 text-lg text-gray-700 leading-relaxed">
            A key-derivation function stretches a password so each offline guess is expensive. Iteration counts are only comparable between identical algorithms, and here both vendors use PBKDF2 with SHA-256. Only the figures we could source are shown.
          </p>
          <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm mb-4">
            <table className="min-w-full divide-y divide-gray-200 text-left">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-4 font-semibold text-gray-900">Product</th>
                  <th scope="col" className="px-6 py-4 font-semibold text-gray-900">KDF and count</th>
                  <th scope="col" className="px-6 py-4 font-semibold text-gray-900">Source</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-700">LastPass (default cited in 2022)</td>
                  <td className="px-6 py-4 text-sm text-gray-700">PBKDF2, 100,100 iterations</td>
                  <td className="px-6 py-4 text-sm text-gray-700">LastPass notice, Dec 22, 2022</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-700">LastPass (current minimum, new accounts)</td>
                  <td className="px-6 py-4 text-sm text-gray-700">PBKDF2-SHA256, 600,000 iterations</td>
                  <td className="px-6 py-4 text-sm text-gray-700">LastPass help documentation, as surfaced by search; confirm in your own settings</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-700">1Password</td>
                  <td className="px-6 py-4 text-sm text-gray-700">PBKDF2-HMAC-SHA256, 650,000 iterations, plus the 128-bit Secret Key</td>
                  <td className="px-6 py-4 text-sm text-gray-700">1Password Security Design white paper</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-700">NordPass</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Argon2 (memory-hard); iteration parameters not verified here</td>
                  <td className="px-6 py-4 text-sm text-gray-700">NordPass security documentation</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mb-4 text-lg text-gray-700 leading-relaxed">
            The arithmetic is simple. 650,000 divided by 600,000 is about 1.08, so the 1Password and current LastPass iteration counts are within roughly 8 percent of each other, a gap that is trivial next to the 128-bit Secret Key. Against LastPass&apos;s 2022-era default of 100,100 iterations, the 1Password count is about 6.5 times higher. Neither number is the main point. The iteration count only slows guessing down; the Secret Key removes guessing as a standalone attack.
          </p>
          <p className="mb-4 text-lg text-gray-700 leading-relaxed">
            Two caveats from the sources. The 1Password white paper states that accounts created before January 27, 2023 use a lower iteration count until the account password or Secret Key is changed. And the same paper explains that 1Password uses PBKDF2 rather than a memory-hard function such as Argon2 because of limits in browser cryptography, so on pure KDF design NordPass&apos;s Argon2 is the more modern choice. LastPass lets you view and change your count in advanced account settings, according to its help center.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Pricing, checked October 11, 2026</h2>
          <p className="mb-6 text-lg text-gray-700 leading-relaxed">
            Prices below are those listed by each vendor, billed annually, in US dollars. Promotions change, so treat the tables as a dated snapshot and confirm at checkout.
          </p>
          <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm mb-4">
            <table className="min-w-full divide-y divide-gray-200 text-left">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-4 font-semibold text-gray-900">Plan</th>
                  <th scope="col" className="px-6 py-4 font-semibold text-gray-900">Listed price (per month, billed yearly)</th>
                  <th scope="col" className="px-6 py-4 font-semibold text-gray-900">Users</th>
                  <th scope="col" className="px-6 py-4 font-semibold text-gray-900">Trial</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                <tr className="bg-indigo-50">
                  <td className="px-6 py-4 text-sm font-medium text-indigo-900">1Password Individual</td>
                  <td className="px-6 py-4 text-sm text-indigo-900">$2.99 current (regular $3.99)</td>
                  <td className="px-6 py-4 text-sm text-indigo-900">1</td>
                  <td className="px-6 py-4 text-sm text-indigo-900">14 days</td>
                </tr>
                <tr className="bg-indigo-50">
                  <td className="px-6 py-4 text-sm font-medium text-indigo-900">1Password Families</td>
                  <td className="px-6 py-4 text-sm text-indigo-900">$4.49 current (regular $5.99)</td>
                  <td className="px-6 py-4 text-sm text-indigo-900">5</td>
                  <td className="px-6 py-4 text-sm text-indigo-900">14 days</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-700">LastPass Free</td>
                  <td className="px-6 py-4 text-sm text-gray-700">$0, limited to one device type and basic features</td>
                  <td className="px-6 py-4 text-sm text-gray-700">1</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Not applicable</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-700">LastPass Premium</td>
                  <td className="px-6 py-4 text-sm text-gray-700">About $3 (reported via search of lastpass.com; the pricing page fills prices with JavaScript)</td>
                  <td className="px-6 py-4 text-sm text-gray-700">1</td>
                  <td className="px-6 py-4 text-sm text-gray-700">30 days</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-700">LastPass Families</td>
                  <td className="px-6 py-4 text-sm text-gray-700">About $4 (same caveat)</td>
                  <td className="px-6 py-4 text-sm text-gray-700">6</td>
                  <td className="px-6 py-4 text-sm text-gray-700">30 days</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-gray-700">LastPass Plus (password manager plus VPN)</td>
                  <td className="px-6 py-4 text-sm text-gray-700">$7.00</td>
                  <td className="px-6 py-4 text-sm text-gray-700">1</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Not listed</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 italic mb-6">
            1Password figures: 1password.com personal pricing page, which also mentions an additional 25 percent first-year offer with its own terms. LastPass Free, Families user count, Plus price and trial lengths: lastpass.com product and pricing pages. LastPass Business is listed at $7 per user per month versus $7.99 for 1Password Business on LastPass&apos;s own comparison page, which is dated August 15, 2024 and so may be stale.
          </p>
          <h3 className="text-2xl font-bold text-gray-900 mb-3">What the numbers work out to</h3>
          <ul className="list-disc pl-6 mb-4 text-lg text-gray-700 leading-relaxed space-y-2">
            <li>1Password Individual: 12 months at $2.99 is $35.88 a year. At the regular $3.99 it is $47.88 a year, or $143.64 over three years.</li>
            <li>1Password Families: $4.49 for five users is about $0.90 per person per month. At the regular $5.99 it is about $1.20.</li>
            <li>LastPass Families: about $4 for six users is roughly $0.67 per person per month, so it is cheaper per head than 1Password Families on listed prices.</li>
            <li>Three-year illustration for one user: about $108 for LastPass Premium versus $107.64 for 1Password at the current promotional price or $143.64 at the regular price. This assumes prices stay flat, which promotions rarely do, so plug in your own numbers.</li>
          </ul>
          <p className="mb-4 text-lg text-gray-700 leading-relaxed">
            The takeaway: the price gap for one person is a few dollars a year. For a household LastPass is somewhat cheaper per seat. If cost is the only constraint, the free LastPass tier is the cheapest of the paid-or-free options here, but it comes with the incident history above and no second secret.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Who should pick which</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border-2 border-indigo-600 p-6 shadow-md flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-extrabold text-gray-900 mb-3">1Password</h3>
                <p className="text-gray-700 mb-4">Best on documented resilience: a Secret Key, encrypted URLs, no disclosed vault-data theft. You pay for it, and you must store your Emergency Kit safely.</p>
              </div>
              <div dangerouslySetInnerHTML={{ __html: '<a href="https://bbux.me/P9xAzh5at" target="_blank" rel="sponsored noopener" style="display:inline-block;color:#ffffff !important;background:#4f46e5;padding:14px 28px;border-radius:12px;font-weight:700;text-decoration:none;text-align:center">Start the 1Password trial</a>' }} />
            </div>
            <div className="rounded-2xl border-2 border-teal-600 p-6 shadow-md flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-extrabold text-gray-900 mb-3">NordPass</h3>
                <p className="text-gray-700 mb-4">A credible alternative if you prefer Argon2 and XChaCha20, which NordPass documents for its zero-knowledge design. We did not verify its current pricing, so check its plans page.</p>
              </div>
              <div dangerouslySetInnerHTML={{ __html: '<a href="https://bbux.me/earMnghc" target="_blank" rel="sponsored noopener" style="display:inline-block;color:#ffffff !important;background:#0f766e;padding:14px 28px;border-radius:12px;font-weight:700;text-decoration:none;text-align:center">See NordPass plans</a>' }} />
            </div>
            <div className="rounded-2xl border-2 border-gray-300 p-6 shadow-md flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-extrabold text-gray-900 mb-3">LastPass</h3>
                <p className="text-gray-700 mb-4">Reasonable only if you need the free tier or the lowest family price, use a long unique master password, and have raised your iteration count.</p>
              </div>
              <a href="https://www.lastpass.com/pricing" target="_blank" rel="nofollow noopener" className="inline-block rounded-xl border border-gray-400 px-7 py-3 text-center font-bold text-gray-800">
                View LastPass pricing
              </a>
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-3">If you already use LastPass</h3>
          <p className="mb-4 text-lg text-gray-700 leading-relaxed">
            LastPass&apos;s own December 2022 notice said customers whose master password did not meet its defaults should consider changing the passwords of the sites stored in the vault. Because stolen vault copies can be attacked offline indefinitely, the conservative response is to treat high-value logins (email, banking, domain registrars) as candidates for rotation, check that your iteration count is at least 600,000 in advanced settings, and review LastPass&apos;s own security bulletins for your plan type.
          </p>
          <p className="mb-4 text-lg text-gray-700 leading-relaxed">
            Password managers also hold hosting and server credentials. If you are weighing infrastructure choices as well, see our comparison of <Link href="/cloudways-vs-siteground" className="text-indigo-700 underline font-medium">Cloudways vs SiteGround</Link>, and store whichever login you create in a manager you trust.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently asked questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Was LastPass hacked?</h3>
              <p className="text-lg text-gray-700 leading-relaxed">Yes. LastPass disclosed an intrusion into its development environment on August 25, 2022, and on December 22, 2022 said the same attacker later copied a backup of customer vault data from cloud storage. Its March 1, 2023 update said the backups covered all customer vault data. LastPass states that sensitive vault fields were encrypted and that master passwords were not in the stolen data, but website URLs were stored unencrypted.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Was 1Password breached?</h3>
              <p className="text-lg text-gray-700 leading-relaxed">Not in the way LastPass was. In an October 23, 2023 statement (updated October 25), 1Password said it detected suspicious activity on its Okta instance on September 29, 2023, terminated it, and found no compromise of user data or other sensitive systems. The cause was later tied to the Okta support system incident. This is the vendor account of events.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">What is the 1Password Secret Key?</h3>
              <p className="text-lg text-gray-700 leading-relaxed">The Secret Key is a random value generated on your device when you create an account. According to the 1Password security white paper it has slightly more than 2^128 possible values, it is combined with your account password to derive the key that protects your data, and 1Password does not hold it. A thief who obtains only server-side data would need both secrets.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">How many PBKDF2 iterations do 1Password and LastPass use?</h3>
              <p className="text-lg text-gray-700 leading-relaxed">The current 1Password white paper states 650,000 iterations of PBKDF2-HMAC-SHA256, with older accounts using a lower count until the password or Secret Key is changed. LastPass stated 100,100 iterations as its default in its December 22, 2022 notice, and its help documentation now lists 600,000 as the current minimum for new accounts.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Is LastPass still worth using?</h3>
              <p className="text-lg text-gray-700 leading-relaxed">It can be for users who value its free tier and low price, provided the account uses a long unique master password and a high iteration count. For readers choosing fresh, the documented incident record and the lack of a second secret make 1Password the stronger default on security grounds alone.</p>
            </div>
          </div>
        </section>

        <section className="mb-12 border-t pt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Sources and what we could not verify</h2>
          <ul className="list-disc pl-6 text-sm text-gray-700 space-y-1 mb-6">
            <li><a href="https://blog.lastpass.com/posts/notice-of-recent-security-incident" target="_blank" rel="nofollow noopener" className="text-indigo-700 underline">LastPass notices: Aug 25, Sep 15, Nov 30 and Dec 22, 2022</a></li>
            <li><a href="https://blog.lastpass.com/posts/2023/03/security-incident-update-recommended-actions" target="_blank" rel="nofollow noopener" className="text-indigo-700 underline">LastPass security incident update, March 1, 2023</a></li>
            <li><a href="https://blog.lastpass.com/2015/06/lastpass-security-notice/" target="_blank" rel="nofollow noopener" className="text-indigo-700 underline">LastPass security notice, June 2015 (updated July 10, 2015)</a></li>
            <li><a href="https://blog.1password.com/okta-incident/" target="_blank" rel="nofollow noopener" className="text-indigo-700 underline">1Password: Okta Support System incident and 1Password, Oct 23, 2023</a></li>
            <li><a href="https://1passwordstatic.com/files/security/1password-white-paper.pdf" target="_blank" rel="nofollow noopener" className="text-indigo-700 underline">1Password Security Design white paper</a></li>
            <li><a href="https://1password.com/pricing/password-manager" target="_blank" rel="nofollow noopener" className="text-indigo-700 underline">1Password personal pricing</a></li>
            <li><a href="https://www.lastpass.com/compare/lastpass-vs-1password" target="_blank" rel="nofollow noopener" className="text-indigo-700 underline">LastPass vs 1Password comparison page (dated Aug 15, 2024)</a></li>
          </ul>
          <p className="text-sm text-gray-600 leading-relaxed mb-3">
            <strong>Not verified against a primary source:</strong> the 2015 incident details were confirmed from LastPass&apos;s notice summary and press coverage because the full notice text did not load in our fetch. The 600,000 LastPass iteration minimum and the LastPass Premium and Families prices come from search results citing lastpass.com, because those pages render values with JavaScript. NordPass encryption details come from NordPass pages as surfaced by search. The home-computer detail of the second LastPass intrusion comes from press reports. We did not verify NordPass pricing or 1Password Business pricing.
          </p>
          <p className="text-xs text-gray-500">
            Affiliate disclosure: links to 1Password and NordPass marked sponsored may earn us a commission. LastPass links are plain, non-affiliate links.
          </p>
        </section>
      </div>
    </>
  );
}
