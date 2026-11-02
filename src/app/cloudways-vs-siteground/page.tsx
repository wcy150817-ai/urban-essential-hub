import Link from 'next/link';
import type { Metadata } from 'next';

const TITLE = 'Cloudways vs SiteGround (2026): Which Is Cheaper After Renewal?';
const PAGE_URL = 'https://www.urbanessentialhub.com/cloudways-vs-siteground';
const SITEGROUND_URL = 'https://www.siteground.com/wordpress-hosting.htm';

export const metadata: Metadata = {
  title: TITLE,
  description:
    'Cloudways vs SiteGround: SiteGround GrowBig jumps from $4.99 to $29.99/mo at renewal; Cloudways bills a flat monthly server price. 3-year cost math, checked Nov 2, 2026.',
  alternates: { canonical: '/cloudways-vs-siteground' },
  openGraph: {
    title: TITLE,
    description:
      'Which host is cheaper after the intro price ends? Month-12, 24 and 36 cost math, what each plan includes, and who should pick which.',
    url: PAGE_URL,
    type: 'article',
  },
};

const faqs = [
  {
    q: 'Is Cloudways cheaper than SiteGround when you factor in the actual server costs?',
    a: 'Over three years, usually yes against SiteGround GrowBig and GoGeek, and roughly a tie against StartUp. SiteGround lists StartUp at $2.99/mo renewing at $17.99, GrowBig at $4.99 renewing at $29.99 and GoGeek at $7.99 renewing at $44.99, each prepaid for 12 months (checked November 2, 2026). That is $467.64, $779.64 and $1,175.64 over 36 months. Cloudways listings show a 1GB DigitalOcean server at about $11/mo (Standard) or $14/mo (Premium), which is $396 to $504 over 36 months, and a 2GB Premium server at about $28/mo, or $1,008. Add email, which SiteGround bundles and Cloudways sells separately. In year one SiteGround is always cheaper.',
  },
  {
    q: 'Does Cloudways raise prices at renewal?',
    a: 'Cloudways bills servers monthly in arrears with no introductory term, so there is no first-term discount to expire. Its pricing page describes this as pay-as-you-go pricing that keeps costs predictable. That is the vendor description, and any provider can change list prices, so check the current rate before you commit.',
  },
  {
    q: 'Which is faster, Cloudways or SiteGround?',
    a: 'We did not measure it and we found no independent, dated benchmark we could cite, so we do not name a winner. Time to first byte depends mostly on data center distance, caching, PHP and database configuration, and your own theme and plugins. The only way to know is to run both free trial or refund windows with your own site.',
  },
  {
    q: 'Is SiteGround or Cloudways better for beginners?',
    a: 'SiteGround bundles a free domain (a limited-time offer per its page), free email, WordPress-specific tools and live chat in one dashboard, so fewer decisions are needed. Cloudways asks you to pick a cloud provider, region and server size, and to set up email and your domain elsewhere. Beginners with a single site generally face less setup on SiteGround.',
  },
  {
    q: 'Can I try either host without paying?',
    a: 'Cloudways advertises a 3-day free trial with no credit card required. SiteGround advertises a 30-day money-back guarantee on its WordPress plans. Read the current terms at checkout, because refund conditions can exclude add-ons and domains.',
  },
];

export default function CloudwaysVsSiteground() {
  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: TITLE,
    description:
      'Research-based comparison of Cloudways and SiteGround using each vendor pricing page, with a 3-year renewal cost table and an explanation of what drives TTFB.',
    datePublished: '2026-10-11',
    dateModified: '2026-11-02',
    mainEntityOfPage: PAGE_URL,
    author: { '@type': 'Organization', name: 'Urban Essential Hub Editorial Team' },
    publisher: { '@type': 'Organization', name: 'Urban Essential Hub' },
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  const cwButton = (label: string) =>
    `<a href="https://bbux.me/XarLClkjd" target="_blank" rel="sponsored noopener" style="display:inline-block;color:#ffffff !important;background:#4f46e5;padding:14px 28px;border-radius:12px;font-weight:700;text-decoration:none;text-align:center">${label}</a>`;

  const th = 'px-6 py-4 font-semibold text-gray-900';
  const tdLabel = 'px-6 py-4 text-sm font-medium text-gray-700';
  const td = 'px-6 py-4 text-sm text-gray-700';
  const h2 = 'text-3xl font-bold text-gray-900 mb-6';
  const p = 'mb-4 text-lg text-gray-700 leading-relaxed';

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <div className="w-full max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8 bg-white text-gray-900 font-sans overflow-x-hidden">
        <header className="mb-12 border-b pb-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Cloudways vs SiteGround (2026): Which Is Cheaper After Renewal? Real Server Cost Math
          </h1>
          <div className="flex flex-wrap items-center text-gray-600 text-sm mb-6 gap-x-4 gap-y-1">
            <span>By the Urban Essential Hub editorial team</span>
            <span>•</span>
            <span>Updated November 2, 2026</span>
            <span>•</span>
            <span>Research-based analysis, no hands-on testing</span>
          </div>
          <p className="text-xl text-gray-700 leading-relaxed mb-4">
            This cloudways vs siteground comparison is about the two things that can actually be checked from public sources: what each host charges once the introductory discount ends, and what you are really renting. We did not run speed tests or host a site on either platform, so you will not find a performance chart here. Where a claim comes from a vendor, we say so and give the date we read it.
          </p>
          <p className="text-sm text-gray-600 bg-gray-50 border border-gray-200 rounded-lg p-3">
            <strong>Disclosure:</strong> the Cloudways links on this page are affiliate links (marked sponsored). If you buy through them we may earn a commission at no extra cost to you. The SiteGround link is a plain, non-affiliate link. Commissions did not change the facts reported here. For our single-vendor write-up of the platform, see the <Link href="/reviews/cloudways" className="text-indigo-700 underline font-medium">Cloudways review</Link>; this page is the head-to-head.
          </p>
        </header>

        <section className="mb-12">
          <h2 className={h2}>The short answer</h2>
          <p className={p}>
            Choose <strong>SiteGround</strong> if you want one dashboard that includes email, a free domain on promotion, WordPress tooling and a 30-day refund window, and you run one site or a handful of small ones. Choose <strong>Cloudways</strong> if you want to pick the underlying cloud provider and region, pay by the month with no multi-year prepay cycle, and host many sites on a server whose resources you control and can resize.
          </p>
          <p className={p}>
            On price, the pattern is simple. SiteGround is cheapest in year one by a wide margin and then renews at roughly six times the intro rate. Cloudways has no intro-then-renew cycle, so its line is flat. Over 36 months a 1GB Cloudways server beats SiteGround GrowBig and GoGeek comfortably and roughly ties SiteGround StartUp; a 2GB Premium Cloudways server costs more than GrowBig. The cost section and the month-by-month break-even table below show every figure.
          </p>
          <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-lg my-8">
            <h3 className="text-xl font-bold text-indigo-900 mb-2">Our recommendation</h3>
            <p className="text-indigo-900 mb-4">
              If you are comfortable choosing a server size and setting up email separately, start with the Cloudways free trial and check the price in your own console. If you want everything bundled and plan to move or renegotiate before the first renewal, SiteGround is the simpler path.
            </p>
            <div dangerouslySetInnerHTML={{ __html: cwButton('Try Cloudways free for 3 days') }} />
          </div>
        </section>

        <section className="mb-12">
          <h2 className={h2}>At a glance: what the vendor pages say</h2>
          <p className="mb-6 text-lg text-gray-700 leading-relaxed">
            Every row below comes from the vendor&apos;s own pricing or product page as read on October 11, 2026, with SiteGround re-checked on November 2, 2026. These are marketing pages, so treat them as claims about what is offered, not as measured results.
          </p>
          <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm mb-4">
            <table className="min-w-full divide-y divide-gray-200 text-left">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className={th}>Factor</th>
                  <th scope="col" className={th}>Cloudways</th>
                  <th scope="col" className={th}>SiteGround</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                <tr>
                  <td className={tdLabel}>Model</td>
                  <td className={td}>Managed layer on top of DigitalOcean, Vultr, Linode, AWS or Google Cloud servers you choose</td>
                  <td className={td}>Managed WordPress hosting on SiteGround&apos;s own platform</td>
                </tr>
                <tr>
                  <td className={tdLabel}>Locations listed</td>
                  <td className={td}>Provider dependent: DigitalOcean 9, Vultr 30, Linode 25, AWS 28, Google Cloud 28</td>
                  <td className={td}>11 data centers on 4 continents, changeable from the client area</td>
                </tr>
                <tr>
                  <td className={tdLabel}>Billing</td>
                  <td className={td}>Monthly, in arrears, by server size</td>
                  <td className={td}>Prepaid, 12 months shown on the plan cards</td>
                </tr>
                <tr>
                  <td className={tdLabel}>Websites per plan</td>
                  <td className={td}>Unlimited, bounded by server resources</td>
                  <td className={td}>StartUp 1 site; GrowBig and GoGeek unlimited</td>
                </tr>
                <tr>
                  <td className={tdLabel}>Email</td>
                  <td className={td}>Separate add-on, listed from $1 per month</td>
                  <td className={td}>Free email listed in the plan features</td>
                </tr>
                <tr>
                  <td className={tdLabel}>Free trial or refund</td>
                  <td className={td}>3-day free trial, no credit card</td>
                  <td className={td}>30-day money-back guarantee</td>
                </tr>
                <tr>
                  <td className={tdLabel}>Server stack</td>
                  <td className={td}>Lightning Stack (NGINX-based) listed as included</td>
                  <td className={td}>Multilevel caching and a Speed Optimizer plugin listed</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 italic">
            Sources: Cloudways pricing page and SiteGround WordPress hosting page, both read October 11, 2026. Links are in the source list at the bottom.
          </p>
        </section>

        <section className="mb-12">
          <h2 className={h2}>What you are actually renting</h2>
          <p className={p}>
            The biggest difference is not a feature. It is who runs the hardware and how much of it is yours.
          </p>
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Cloudways: a management layer over someone else&apos;s cloud</h3>
          <p className={p}>
            Cloudways does not sell its own data centers. Its pricing page shows you pick a cloud provider (DigitalOcean, Vultr, Linode, AWS or Google Cloud), then a server type and size, and Cloudways handles the stack, security tooling, backups and a control panel on top. The page lists for each plan the RAM, vCPUs, storage and bandwidth, and says unlimited websites and visits are allowed on every plan. The practical consequence is that your limits are server limits: a small server shared among many sites will slow down when they are all busy, and the fix is to resize it.
          </p>
          <p className={p}>
            That model also means more decisions. You choose a provider and a region, you pick whether you want a standard or premium DigitalOcean droplet, and you decide how much RAM your sites need. Cloudways lists vertical scaling as a feature, so moving up a size is a console action rather than a migration, but you are the one who has to notice that you need it.
          </p>
          <h3 className="text-2xl font-bold text-gray-900 mb-3">SiteGround: a packaged WordPress platform</h3>
          <p className={p}>
            SiteGround sells plans, not servers. The plan cards list a site count, a storage figure (10 GB, 50 GB and 100 GB for StartUp, GrowBig and GoGeek), and a bundle: free SSL, CDN and backups, free email, managed auto-updates, WP-CLI and SSH, plus its own Speed Optimizer and Security Optimizer plugins. Its FAQ lists 11 data centers, including Ashburn, Council Bluffs, Dallas, Los Angeles, London, Madrid, Eemshaven, Frankfurt, Paris, Sydney and Singapore, and says you can change the location later from the client area. The company has also publicly described building on Google Cloud. You do not choose a CPU or RAM figure; resources are allocated by the platform.
          </p>
          <p className={p}>
            Staging and Git are tied to the higher plans: the page lists staging under GrowBig and staging plus Git under GoGeek, while StartUp is described as for personal projects and small sites. If you need a staging environment, the entry plan is not the one to price.
          </p>
        </section>

        <section className="mb-12">
          <h2 className={h2}>What drives TTFB, and why we show no speed chart</h2>
          <p className={p}>
            Time to first byte is the delay between a browser sending a request and receiving the first byte of the response. Earlier versions of this page showed millisecond bars and said both hosts had been tested for months. That was wrong: nobody on our team ran those tests, so those numbers and that claim have been removed. We also looked for independent, dated benchmarks of these two hosts that we could cite with a link and a test date, and we are not presenting any, because a chart without a method is worse than none.
          </p>
          <p className={p}>
            What we can do is explain what moves the number, so you can judge claims from either vendor, including ours.
          </p>
          <ul className="list-disc pl-6 mb-4 text-lg text-gray-700 leading-relaxed space-y-2">
            <li><strong>Distance to the data center.</strong> Light has a speed limit. A server on another continent adds round-trip latency before any software runs. This is why both vendors let you pick a location, and why the location list above matters more than any brand name.</li>
            <li><strong>Whether the page is served from cache.</strong> A cached page skips PHP and the database entirely. Uncached WordPress pages, logged-in users and WooCommerce carts and checkouts bypass most page caches, so TTFB for those requests depends on raw PHP and database speed.</li>
            <li><strong>Object caching.</strong> Redis or a similar object cache keeps repeated database results in memory. Cloudways lists Redis as included and says Object Cache Pro is free on 4GB servers and above. SiteGround lists multilevel caching.</li>
            <li><strong>The web server and PHP setup.</strong> Cloudways says its new Lightning Stack is NGINX-based and included. SiteGround says GrowBig and above get &quot;30% faster PHP&quot;, a vendor claim we did not verify.</li>
            <li><strong>Resource isolation.</strong> A dedicated server slice is exposed to your own traffic only. A shared environment can be affected by neighboring accounts depending on how the host isolates them, which neither vendor&apos;s marketing page quantifies for you.</li>
            <li><strong>Your own site.</strong> A heavy theme, dozens of plugins and slow database queries will dominate TTFB on any host.</li>
          </ul>
          <p className={p}>
            SiteGround publishes its own before-and-after migration comparison on its WordPress page, measured with Lighthouse on sites migrated between January and June 2025. It is a vendor-run dataset, and the same page states that SiteGround does not claim industry-leading page speed or TTFB. We read it as marketing and have not reproduced its numbers here.
          </p>
          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg my-8">
            <h3 className="text-xl font-bold text-amber-900 mb-2">How to compare speed yourself</h3>
            <p className="text-amber-900">
              Use the free windows both vendors advertise. Install a copy of your real site on each, choose the data center closest to your visitors, and test the same URL several times from a location near your audience with a public tool such as WebPageTest. Test a cached page and an uncached page separately, and repeat on different days. That takes an afternoon and beats any chart, ours included.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className={h2}>3-year renewal cost, checked November 2, 2026</h2>
          <p className="mb-6 text-lg text-gray-700 leading-relaxed">
            SiteGround&apos;s plan cards show an introductory price with a &quot;Renews at&quot; price and say the plans are prepaid for 12 months. Cloudways bills monthly with no introductory term. The table projects 36 months in US dollars, before tax, domains and add-ons, assuming list prices do not change.
          </p>
          <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm mb-4">
            <table className="min-w-full divide-y divide-gray-200 text-left">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className={th}>Plan</th>
                  <th scope="col" className={th}>Intro price</th>
                  <th scope="col" className={th}>Renewal price</th>
                  <th scope="col" className={th}>Year 1</th>
                  <th scope="col" className={th}>Years 2 and 3 (each)</th>
                  <th scope="col" className={th}>36-month total</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                <tr>
                  <td className={tdLabel}>SiteGround StartUp (1 site)</td>
                  <td className={td}>$2.99/mo</td>
                  <td className={td}>$17.99/mo</td>
                  <td className={td}>$35.88</td>
                  <td className={td}>$215.88</td>
                  <td className={td}>$467.64</td>
                </tr>
                <tr>
                  <td className={tdLabel}>SiteGround GrowBig</td>
                  <td className={td}>$4.99/mo</td>
                  <td className={td}>$29.99/mo</td>
                  <td className={td}>$59.88</td>
                  <td className={td}>$359.88</td>
                  <td className={td}>$779.64</td>
                </tr>
                <tr>
                  <td className={tdLabel}>SiteGround GoGeek</td>
                  <td className={td}>$7.99/mo</td>
                  <td className={td}>$44.99/mo</td>
                  <td className={td}>$95.88</td>
                  <td className={td}>$539.88</td>
                  <td className={td}>$1,175.64</td>
                </tr>
                <tr className="bg-indigo-50">
                  <td className="px-6 py-4 text-sm font-medium text-indigo-900">Cloudways DigitalOcean Standard 1GB (1 vCPU, 25GB)</td>
                  <td className="px-6 py-4 text-sm text-indigo-900">$11/mo</td>
                  <td className="px-6 py-4 text-sm text-indigo-900">$11/mo (no intro term)</td>
                  <td className="px-6 py-4 text-sm text-indigo-900">$132.00</td>
                  <td className="px-6 py-4 text-sm text-indigo-900">$132.00</td>
                  <td className="px-6 py-4 text-sm text-indigo-900">$396.00</td>
                </tr>
                <tr className="bg-indigo-50">
                  <td className="px-6 py-4 text-sm font-medium text-indigo-900">Cloudways DigitalOcean Premium 1GB (1 vCPU, 25GB NVMe)</td>
                  <td className="px-6 py-4 text-sm text-indigo-900">$14/mo</td>
                  <td className="px-6 py-4 text-sm text-indigo-900">$14/mo (no intro term)</td>
                  <td className="px-6 py-4 text-sm text-indigo-900">$168.00</td>
                  <td className="px-6 py-4 text-sm text-indigo-900">$168.00</td>
                  <td className="px-6 py-4 text-sm text-indigo-900">$504.00</td>
                </tr>
                <tr className="bg-indigo-50">
                  <td className="px-6 py-4 text-sm font-medium text-indigo-900">Cloudways DigitalOcean Premium 2GB (50GB NVMe)</td>
                  <td className="px-6 py-4 text-sm text-indigo-900">$28/mo</td>
                  <td className="px-6 py-4 text-sm text-indigo-900">$28/mo (no intro term)</td>
                  <td className="px-6 py-4 text-sm text-indigo-900">$336.00</td>
                  <td className="px-6 py-4 text-sm text-indigo-900">$336.00</td>
                  <td className="px-6 py-4 text-sm text-indigo-900">$1,008.00</td>
                </tr>
                <tr className="bg-indigo-50">
                  <td className="px-6 py-4 text-sm font-medium text-indigo-900">Cloudways DigitalOcean Premium 4GB (80GB NVMe)</td>
                  <td className="px-6 py-4 text-sm text-indigo-900">$54/mo</td>
                  <td className="px-6 py-4 text-sm text-indigo-900">$54/mo (no intro term)</td>
                  <td className="px-6 py-4 text-sm text-indigo-900">$648.00</td>
                  <td className="px-6 py-4 text-sm text-indigo-900">$648.00</td>
                  <td className="px-6 py-4 text-sm text-indigo-900">$1,944.00</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 italic mb-6">
            Sources: SiteGround WordPress hosting page, read November 2, 2026 (StartUp $2.99 renewing at $17.99, GrowBig $4.99 renewing at $29.99, GoGeek $7.99 renewing at $44.99, each &quot;Prepaid for 12 months&quot;). The Cloudways pricing page blocks automated reading, so the Cloudways rows come from search listings of that page as of November 2026 (1GB Standard about $11, 1GB Premium about $14, 2GB Premium about $28, 4GB Premium about $54 per month). An earlier version of this table labeled the $11/$14 server as 2GB; listings show it is the 1GB size, and the table has been corrected. Confirm the exact price for your provider and region in the Cloudways console before you buy.
          </p>
          <h3 className="text-2xl font-bold text-gray-900 mb-3">What the numbers say</h3>
          <ul className="list-disc pl-6 mb-4 text-lg text-gray-700 leading-relaxed space-y-2">
            <li>The renewal multiple is large but plan-specific. $17.99 divided by $2.99 is about 6.0 times for StartUp, $29.99 divided by $4.99 is about 6.0 times for GrowBig, and $44.99 divided by $7.99 is about 5.6 times for GoGeek.</li>
            <li>GrowBig versus a 1GB Cloudways server over 36 months: $779.64 minus $396 is $383.64 more on SiteGround, or $275.64 more against the $504 Premium figure.</li>
            <li>GrowBig versus a 2GB Premium Cloudways server: $1,008 minus $779.64 means Cloudways costs $228.36 more over 36 months. Bigger servers are not automatically cheaper than SiteGround.</li>
            <li>StartUp is close to a tie: $467.64 sits between the two 1GB Cloudways figures, $71.64 above the $396 case and $36.36 below the $504 case.</li>
            <li>A Cloudways server and a SiteGround plan are not equivalent products. SiteGround GrowBig lists unlimited sites and 50 GB of storage; a 1GB Cloudways server is listed with 25 GB of disk and 1TB of transfer, with limits set by RAM and CPU.</li>
            <li>Year one favors SiteGround strongly: $59.88 for GrowBig versus $132 to $168 for Cloudways. If you plan to leave before the first renewal, the intro price is the relevant one.</li>
          </ul>
          <h3 className="text-2xl font-bold text-gray-900 mb-3">What the table leaves out</h3>
          <p className={p}>
            Cloudways bills in arrears and adds charges for things SiteGround bundles. The pricing page lists email hosting from $1 per month, and notes that DigitalOcean extra bandwidth is charged at $0.02 per GB and offsite backup storage at $0.033 per GB per server. It also describes a paid Cloudflare Enterprise add-on, so do not assume the CDN level is included. SiteGround lists free email, free SSL and backups in the plan features and, per its page, a free domain for a limited time. A fair three-year comparison should add your own domain, email and backup needs to both columns.
          </p>
          <p className={p}>
            One more caveat on promotions. The Cloudways page advertises 30% off for 3 months on all plans, and SiteGround advertises up to 83% off its intro prices. Promotional terms change often, and we have not confirmed that any particular signup link carries a specific discount. If the discount matters to your decision, confirm it at checkout.
          </p>
          <div className="my-6">
            <div dangerouslySetInnerHTML={{ __html: cwButton('See Cloudways plans') }} />
          </div>
        </section>

        <section className="mb-12">
          <h2 className={h2}>Is Cloudways cheaper than SiteGround once you factor in the real server costs?</h2>
          <p className={p}>
            This is the question most people searching this comparison actually ask, so here is the cumulative cost at the three points where SiteGround&apos;s prepaid bills land. SiteGround charges 12 months up front, so its running total jumps at month 1, month 13 and month 25. Cloudways bills monthly, so its total climbs evenly. Figures are list prices in US dollars before tax, domains and add-ons, using the November 2, 2026 SiteGround page and November 2026 Cloudways listings.
          </p>
          <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm mb-4">
            <table className="min-w-full divide-y divide-gray-200 text-left">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className={th}>Plan</th>
                  <th scope="col" className={th}>Paid by month 12</th>
                  <th scope="col" className={th}>Paid by month 24</th>
                  <th scope="col" className={th}>Paid by month 36</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                <tr><td className={tdLabel}>SiteGround StartUp</td><td className={td}>$35.88</td><td className={td}>$251.76</td><td className={td}>$467.64</td></tr>
                <tr><td className={tdLabel}>SiteGround GrowBig</td><td className={td}>$59.88</td><td className={td}>$419.76</td><td className={td}>$779.64</td></tr>
                <tr><td className={tdLabel}>SiteGround GoGeek</td><td className={td}>$95.88</td><td className={td}>$635.76</td><td className={td}>$1,175.64</td></tr>
                <tr className="bg-indigo-50"><td className={tdLabel}>Cloudways 1GB Standard ($11/mo)</td><td className={td}>$132.00</td><td className={td}>$264.00</td><td className={td}>$396.00</td></tr>
                <tr className="bg-indigo-50"><td className={tdLabel}>Cloudways 1GB Premium ($14/mo)</td><td className={td}>$168.00</td><td className={td}>$336.00</td><td className={td}>$504.00</td></tr>
                <tr className="bg-indigo-50"><td className={tdLabel}>Cloudways 2GB Premium ($28/mo)</td><td className={td}>$336.00</td><td className={td}>$672.00</td><td className={td}>$1,008.00</td></tr>
              </tbody>
            </table>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-3">How to read the break-even</h3>
          <ul className="list-disc pl-6 mb-4 text-lg text-gray-700 leading-relaxed space-y-2">
            <li><strong>GrowBig vs Cloudways 1GB:</strong> SiteGround is cheaper through month 12 ($59.88 vs $132 to $168). Once the $359.88 renewal is billed at month 13, SiteGround has cost $419.76, more than the $264 to $336 a 1GB Cloudways server costs by month 24. From the first renewal on, Cloudways 1GB is the cheaper line.</li>
            <li><strong>StartUp vs Cloudways 1GB:</strong> StartUp stays cheaper at month 24 ($251.76 vs $264 to $336) and ends month 36 between the two Cloudways figures. If you host one small site, the price difference over three years is under $72 either way.</li>
            <li><strong>GrowBig vs Cloudways 2GB Premium:</strong> SiteGround stays cheaper at every checkpoint. If your sites need 2GB of RAM, the flat Cloudways bill is not the bargain the &quot;no renewal hike&quot; headline suggests.</li>
            <li><strong>Leaving before renewal:</strong> anyone who will migrate within 12 months pays far less on SiteGround. The renewal only matters if you stay.</li>
          </ul>
          <h3 className="text-2xl font-bold text-gray-900 mb-3">The extras that change the answer</h3>
          <p className={p}>
            The table compares hosting only. Three line items can flip a close result. <strong>Email:</strong> SiteGround lists free email in its plans; Cloudways listed email hosting as a paid add-on from $1 per month when we read its page on October 11, 2026, and many Cloudways users pay for a separate email provider instead. Over 36 months even a small per-mailbox fee adds up when you have several addresses. <strong>Bandwidth and backups:</strong> on that October read, Cloudways listed extra DigitalOcean bandwidth at $0.02 per GB and offsite backup storage at $0.033 per GB, both billed in arrears. A small brochure site will rarely notice; a media-heavy site might. <strong>Renewal term:</strong> SiteGround&apos;s knowledge base, as summarized by search results, lists lower monthly renewal rates for 24-month terms than for 12-month terms; if you plan to stay, ask for the 24-month renewal price before your first term ends.
          </p>
          <p className={p}>
            A practical way to settle it for your own site: write down how many sites you host, how many mailboxes you need and roughly how much RAM your busiest site uses, then add the email and backup costs to the Cloudways column and compare the month-36 totals. For a closer look at Cloudways&apos; own plan types, including its Autonomous plan for traffic spikes, see <Link href="/cloudways-autonomous-vs-flexible-vs-kinsta" className="text-indigo-700 underline font-medium">Cloudways Autonomous vs Flexible vs Kinsta</Link> and the <Link href="/cloudways-true-cost-breakdown" className="text-indigo-700 underline font-medium">Cloudways true cost breakdown</Link>.
          </p>
          <div className="my-6">
            <div dangerouslySetInnerHTML={{ __html: cwButton('Check current Cloudways server prices') }} />
          </div>
        </section>

        <section className="mb-12">
          <h2 className={h2}>Day to day: panel, email, staging and support</h2>
          <p className={p}>
            Both vendors advertise 24/7 support, and neither claim can be checked from outside, so we do not rank support quality. What differs is the surface area you will touch.
          </p>
          <p className={p}>
            <strong>Control panel and setup.</strong> SiteGround positions its client area and site tools around WordPress, with one-click setup and free site migration in the plan features. Cloudways lists a free migration too, plus per-app PHP versions, an application manager and cloning. The difference is the number of choices: on Cloudways you also choose the provider, region and server size before the first page loads.
          </p>
          <p className={p}>
            <strong>Email and domains.</strong> If you want email in the same account as your site, SiteGround&apos;s feature list says it is included. On Cloudways it is a paid add-on, and most people pair it with a separate email provider and register the domain elsewhere. That is not a flaw, but it is a second bill and a second login to manage.
          </p>
          <p className={p}>
            <strong>Staging and backups.</strong> Cloudways lists free staging and cloning and automated backups, with offsite backup storage billed per GB. SiteGround lists free daily backups and ties staging to GrowBig and above. Check the retention period and restore process for your plan, because the pages summarize rather than specify them.
          </p>
          <p className={p}>
            <strong>Support scope.</strong> Cloudways lists chat and ticketing support on every plan and sells Advanced and Premium support add-ons with faster response and broader help. SiteGround lists live chat and phone options and a WordPress-focused support team. In both cases the useful question is what happens when a plugin misbehaves: ask each vendor&apos;s sales chat in writing whether application-level problems are in scope for your plan, and keep the answer.
          </p>
        </section>

        <section className="mb-12">
          <h2 className={h2}>Who should pick which</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border-2 border-indigo-600 p-6 shadow-md flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-extrabold text-gray-900 mb-3">Cloudways</h3>
                <p className="text-gray-700 mb-4">A fit if you host several sites, want to choose your provider and region, prefer monthly billing without a renewal cycle, and are fine setting up email and domains separately. Expect to make sizing decisions yourself.</p>
              </div>
              <div dangerouslySetInnerHTML={{ __html: cwButton('Start the Cloudways trial') }} />
            </div>
            <div className="rounded-2xl border-2 border-gray-300 p-6 shadow-md flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-extrabold text-gray-900 mb-3">SiteGround</h3>
                <p className="text-gray-700 mb-4">A fit if you run one or a few WordPress sites, want email and tooling bundled, and either plan to leave before the first renewal or have budgeted for the renewal price shown above.</p>
              </div>
              <a href={SITEGROUND_URL} target="_blank" rel="nofollow noopener" className="inline-block rounded-xl border border-gray-400 px-7 py-3 text-center font-bold text-gray-800">
                View SiteGround plans
              </a>
            </div>
          </div>
          <p className="mt-8 text-lg text-gray-700 leading-relaxed">
            Whichever you pick, you will create a hosting login and server credentials that are worth protecting. Our <Link href="/1password-vs-lastpass" className="text-indigo-700 underline font-medium">1Password vs LastPass</Link> comparison covers how password managers differ after a breach. For a deeper single-vendor look at the platform, see the <Link href="/reviews/cloudways" className="text-indigo-700 underline font-medium">Cloudways review</Link>.
          </p>
        </section>

        <section className="mb-12">
          <h2 className={h2}>Frequently asked questions</h2>
          <div className="space-y-6">
            {faqs.map((f) => (
              <div key={f.q}>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{f.q}</h3>
                <p className="text-lg text-gray-700 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12 border-t pt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Sources and what we could not verify</h2>
          <ul className="list-disc pl-6 text-sm text-gray-700 space-y-1 mb-6">
            <li><a href="https://www.cloudways.com/en/pricing.php" target="_blank" rel="nofollow noopener" className="text-indigo-700 underline">Cloudways pricing page (read October 11, 2026; November 2026 prices from search listings because the page blocks automated reading)</a></li>
            <li><a href={SITEGROUND_URL} target="_blank" rel="nofollow noopener" className="text-indigo-700 underline">SiteGround WordPress hosting page, read November 2, 2026</a></li>
          </ul>
          <p className="text-sm text-gray-600 leading-relaxed mb-3">
            <strong>Not verified:</strong> we did not test either host, so we make no claim about speed, uptime or support quality. Cloudways prices in this update come from search listings of its pricing page (the page itself blocked our automated read on November 2, 2026), so confirm them in the Cloudways console. Cloudways add-on prices (email, bandwidth, offsite backups) are from our October 11, 2026 read. SiteGround&apos;s 24-month renewal rates come from a search summary of its knowledge base, not a page we fetched. The SiteGround Google Cloud statement comes from the company&apos;s public descriptions as surfaced by search. We did not verify the 30% faster PHP claim, any promotional discount, or refund terms beyond what the pages state. We found no independent dated TTFB benchmark we could cite, so none is included.
          </p>
          <p className="text-xs text-gray-500">
            Affiliate disclosure: the Cloudways links marked sponsored may earn us a commission. The SiteGround link is a plain, non-affiliate link.
          </p>
        </section>
      </div>
    </>
  );
}
