import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.urbanessentialhub.com";
  const routes = [
    { path: "", priority: 1.0 },
    { path: "/cloudways-vs-siteground", priority: 0.9 },
    { path: "/cloudways-true-cost-breakdown", priority: 0.9 },
    { path: "/cloudways-autonomous-vs-flexible-vs-kinsta", priority: 0.9 },
    { path: "/best-1800-virtual-phone-numbers", priority: 0.9 },
    { path: "/800-vs-grasshopper-vs-nextiva", priority: 0.9 },
    { path: "/800-vs-888-vs-877-toll-free-prefixes", priority: 0.9 },
    { path: "/deals/800-com", priority: 0.9 },
    { path: "/otter-vs-fireflies-vs-fathom", priority: 0.9 },
    { path: "/otter-ai-pro-vs-business-pricing-breakdown", priority: 0.9 },
    { path: "/foxit-vs-adobe-acrobat", priority: 0.9 },
    { path: "/foxit-vs-pdf-expert-vs-adobe-acrobat", priority: 0.9 },
    { path: "/foxit-esign-vs-docusign-vs-adobe-sign", priority: 0.9 },
    { path: "/adobe-alternatives", priority: 0.8 },
    { path: "/1password-vs-lastpass", priority: 0.9 },
    { path: "/bitwarden-vs-1password-vs-nordpass", priority: 0.9 },
    { path: "/1password-business-vs-bitwarden-enterprise-vs-dashlane", priority: 0.9 },
    { path: "/better-stack-vs-pagerduty-vs-datadog", priority: 0.9 },
    { path: "/kajabi-vs-teachable-vs-skool", priority: 0.9 },
    { path: "/skool-vs-circle-vs-mighty-networks", priority: 0.9 },
    { path: "/reviews/cloudways", priority: 0.8 },
    { path: "/reviews/1password", priority: 0.8 },
    { path: "/reviews/otter-ai", priority: 0.8 },
    { path: "/reviews/foxit", priority: 0.8 },
    { path: "/reviews/skool", priority: 0.8 },
    { path: "/reviews/alertsify", priority: 0.7 },
    { path: "/reviews/skylit", priority: 0.7 },
    { path: "/reviews/toolsuite", priority: 0.7 },
  ];

  return routes.map((r) => ({
    url: `${baseUrl}${r.path}`,
    lastModified: "2026-11-18",
    changeFrequency: "weekly",
    priority: r.priority,
  }));
}
