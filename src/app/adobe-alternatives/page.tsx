import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Best Adobe Alternatives in 2026: No Subscriptions',
  description: 'A complete directory of the best free and one-time payment alternatives to Adobe Creative Cloud (Photoshop, Illustrator, Premiere Pro, etc.).',
  alternates: {
    canonical: 'https://urbanessentialhub.com/adobe-alternatives',
  },
};

export default function AdobeAlternativesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the best alternative to Photoshop?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The best premium alternative without a subscription is Affinity Photo. For a completely free, browser-based alternative, Photopea is the closest clone to Photoshop."
        }
      },
      {
        "@type": "Question",
        "name": "Is there a free alternative to Premiere Pro?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, DaVinci Resolve offers an incredibly powerful free version that is an industry standard for video editing and color grading."
        }
      }
    ]
  };

  const alternatives = [
    {
      adobe: "Photoshop",
      icon: "🖼️",
      tools: [
        { name: "Affinity Photo", price: "$69.99 (One-time)", type: "Premium", url: "https://bbux.me/ZarL9LTTT" },
        { name: "Photopea", price: "Free", type: "Browser", url: "https://bbux.me/ZarL9LTTT" },
        { name: "GIMP", price: "Free", type: "Open Source", url: "https://bbux.me/ZarL9LTTT" },
      ]
    },
    {
      adobe: "Illustrator",
      icon: "✒️",
      tools: [
        { name: "Affinity Designer", price: "$69.99 (One-time)", type: "Premium", url: "https://bbux.me/ZarL9LTTT" },
        { name: "Inkscape", price: "Free", type: "Open Source", url: "https://bbux.me/ZarL9LTTT" },
      ]
    },
    {
      adobe: "Premiere Pro",
      icon: "🎬",
      tools: [
        { name: "DaVinci Resolve", price: "Free / $295", type: "Freemium", url: "https://bbux.me/ZarL9LTTT" },
        { name: "Final Cut Pro", price: "$299.99 (Mac Only)", type: "Premium", url: "https://bbux.me/ZarL9LTTT" },
        { name: "CapCut", price: "Free / Freemium", type: "Beginner", url: "https://bbux.me/ZarL9LTTT" },
      ]
    },
    {
      adobe: "Lightroom",
      icon: "📸",
      tools: [
        { name: "Capture One", price: "Subscription / One-time", type: "Pro", url: "https://bbux.me/ZarL9LTTT" },
        { name: "RawTherapee", price: "Free", type: "Open Source", url: "https://bbux.me/ZarL9LTTT" },
        { name: "Darktable", price: "Free", type: "Open Source", url: "https://bbux.me/ZarL9LTTT" },
      ]
    },
    {
      adobe: "After Effects",
      icon: "✨",
      tools: [
        { name: "Cavalry", price: "Free / Subscription", type: "Freemium", url: "https://bbux.me/ZarL9LTTT" },
        { name: "Blender", price: "Free", type: "Open Source", url: "https://bbux.me/ZarL9LTTT" },
      ]
    },
    {
      adobe: "InDesign",
      icon: "📰",
      tools: [
        { name: "Affinity Publisher", price: "$69.99 (One-time)", type: "Premium", url: "https://bbux.me/ZarL9LTTT" },
        { name: "Scribus", price: "Free", type: "Open Source", url: "https://bbux.me/ZarL9LTTT" },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Hero Section */}
      <header className="bg-blue-600 text-white py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            The Best Adobe Alternatives in 2026
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8">
            Stop paying monthly subscriptions. Discover professional, one-time payment and open-source tools that can replace your Adobe Creative Cloud workflow.
          </p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Cost Comparison Section */}
        <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-12 text-center">
          <h2 className="text-3xl font-bold mb-6">The True Cost of Adobe CC vs Alternatives</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-red-50 p-6 rounded-xl border border-red-100">
              <h3 className="text-xl font-bold text-red-700 mb-2">Adobe CC (5 Years)</h3>
              <p className="text-5xl font-black text-red-600 mb-4">$3,599+</p>
              <p className="text-red-800 font-medium">You rent the software and lose access if you stop paying.</p>
            </div>
            <div className="bg-green-50 p-6 rounded-xl border border-green-100">
              <h3 className="text-xl font-bold text-green-700 mb-2">Affinity + Resolve (5 Years)</h3>
              <p className="text-5xl font-black text-green-600 mb-4">$165</p>
              <p className="text-green-800 font-medium">You own the software forever. No forced upgrades.</p>
            </div>
          </div>
        </section>

        {/* Directory Grid */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">The Alternative Software Directory</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {alternatives.map((cat, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{cat.icon}</span>
                  <h3 className="text-xl font-bold">Replace {cat.adobe}</h3>
                </div>
                <div className="space-y-4">
                  {cat.tools.map((tool, tidx) => (
                    <div key={tidx} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg border border-gray-100">
                      <div>
                        <div className="font-bold text-gray-800">{tool.name}</div>
                        <div className="text-sm text-gray-500">{tool.type}</div>
                      </div>
                      <div className="text-sm font-semibold bg-blue-100 text-blue-800 px-2 py-1 rounded">
                        {tool.price}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mt-16 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <h2 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4 max-w-3xl mx-auto">
            <details className="group border border-gray-200 rounded-lg">
              <summary className="font-semibold cursor-pointer p-4 bg-gray-50 group-open:bg-blue-50">Can I open PSD files without Photoshop?</summary>
              <div className="p-4 border-t border-gray-200 text-gray-700">
                Yes, both Affinity Photo and Photopea natively support reading, editing, and exporting PSD files with layers intact.
              </div>
            </details>
            <details className="group border border-gray-200 rounded-lg">
              <summary className="font-semibold cursor-pointer p-4 bg-gray-50 group-open:bg-blue-50">Is DaVinci Resolve actually free?</summary>
              <div className="p-4 border-t border-gray-200 text-gray-700">
                Yes, DaVinci Resolve has a massive free version that includes 95% of the features you need. The Studio version (one-time $295 fee) is only needed for advanced AI features and noise reduction.
              </div>
            </details>
            <details className="group border border-gray-200 rounded-lg">
              <summary className="font-semibold cursor-pointer p-4 bg-gray-50 group-open:bg-blue-50">Is Affinity better than Adobe?</summary>
              <div className="p-4 border-t border-gray-200 text-gray-700">
                Affinity lacks some of the cloud and AI generative features of Adobe, but it is significantly faster, highly capable for professional work, and charges a single lifetime fee instead of a monthly subscription.
              </div>
            </details>
          </div>
        </section>
      </main>
    </div>
  );
}
