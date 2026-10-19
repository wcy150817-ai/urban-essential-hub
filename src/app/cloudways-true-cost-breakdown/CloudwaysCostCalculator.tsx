"use client";

import React, { useState } from "react";

interface PlanOption {
  id: string;
  label: string;
  provider: string;
  ramGb: number;
  vcpu: number;
  storageGb: number;
  bandwidthTb: number;
  baseMonthly: number;
  hourlyRate: number;
}

const PLAN_OPTIONS: PlanOption[] = [
  {
    id: "do_std_1gb",
    label: "DigitalOcean Standard — 1 GB RAM ($11/mo)",
    provider: "DigitalOcean Standard (SSD)",
    ramGb: 1,
    vcpu: 1,
    storageGb: 25,
    bandwidthTb: 1,
    baseMonthly: 11.0,
    hourlyRate: 0.015,
  },
  {
    id: "do_prem_1gb",
    label: "DigitalOcean Premium NVMe — 1 GB RAM ($14/mo)",
    provider: "DigitalOcean Premium (NVMe)",
    ramGb: 1,
    vcpu: 1,
    storageGb: 25,
    bandwidthTb: 1,
    baseMonthly: 14.0,
    hourlyRate: 0.019,
  },
  {
    id: "do_std_2gb",
    label: "DigitalOcean Standard — 2 GB RAM ($24/mo)",
    provider: "DigitalOcean Standard (SSD)",
    ramGb: 2,
    vcpu: 1,
    storageGb: 50,
    bandwidthTb: 2,
    baseMonthly: 24.0,
    hourlyRate: 0.033,
  },
  {
    id: "do_prem_2gb",
    label: "DigitalOcean Premium NVMe — 2 GB RAM ($28/mo)",
    provider: "DigitalOcean Premium (NVMe)",
    ramGb: 2,
    vcpu: 1,
    storageGb: 50,
    bandwidthTb: 2,
    baseMonthly: 28.0,
    hourlyRate: 0.038,
  },
  {
    id: "do_prem_4gb",
    label: "DigitalOcean Premium NVMe — 4 GB RAM ($54/mo)",
    provider: "DigitalOcean Premium (NVMe)",
    ramGb: 4,
    vcpu: 2,
    storageGb: 80,
    bandwidthTb: 4,
    baseMonthly: 54.0,
    hourlyRate: 0.074,
  },
  {
    id: "vultr_std_1gb",
    label: "Vultr Standard — 1 GB RAM ($14/mo)",
    provider: "Vultr Standard (SSD)",
    ramGb: 1,
    vcpu: 1,
    storageGb: 25,
    bandwidthTb: 1,
    baseMonthly: 14.0,
    hourlyRate: 0.019,
  },
  {
    id: "vultr_hf_1gb",
    label: "Vultr High Frequency (3GHz+ NVMe) — 1 GB RAM ($16/mo)",
    provider: "Vultr High Frequency (NVMe)",
    ramGb: 1,
    vcpu: 1,
    storageGb: 32,
    bandwidthTb: 1,
    baseMonthly: 16.0,
    hourlyRate: 0.022,
  },
  {
    id: "vultr_hf_2gb",
    label: "Vultr High Frequency (3GHz+ NVMe) — 2 GB RAM ($30/mo)",
    provider: "Vultr High Frequency (NVMe)",
    ramGb: 2,
    vcpu: 1,
    storageGb: 64,
    bandwidthTb: 2,
    baseMonthly: 30.0,
    hourlyRate: 0.04,
  },
  {
    id: "aws_ec2_2gb",
    label: "AWS EC2 Baseline — 2 GB RAM (~$38.56/mo)",
    provider: "Amazon Web Services (EC2)",
    ramGb: 2,
    vcpu: 2,
    storageGb: 20,
    bandwidthTb: 0.1,
    baseMonthly: 38.56,
    hourlyRate: 0.052,
  },
];

export default function CloudwaysCostCalculator() {
  const [selectedPlanId, setSelectedPlanId] = useState<string>("do_prem_1gb");
  const [wpSitesCount, setWpSitesCount] = useState<number>(3);
  const [backupStorageGb, setBackupStorageGb] = useState<number>(30);
  const [cfEnterpriseDomains, setCfEnterpriseDomains] = useState<number>(1);
  const [rackspaceMailboxes, setRackspaceMailboxes] = useState<number>(2);
  const [safeUpdatesApps, setSafeUpdatesApps] = useState<number>(0);

  const activePlan =
    PLAN_OPTIONS.find((p) => p.id === selectedPlanId) || PLAN_OPTIONS[1];

  const cleanSites = Math.max(1, Math.min(50, Number(wpSitesCount) || 1));
  const cleanBackupGb = Math.max(0, Math.min(2000, Number(backupStorageGb) || 0));
  const cleanCfDomains = Math.max(0, Math.min(50, Number(cfEnterpriseDomains) || 0));
  const cleanMailboxes = Math.max(0, Math.min(100, Number(rackspaceMailboxes) || 0));
  const cleanSafeApps = Math.max(0, Math.min(50, Number(safeUpdatesApps) || 0));

  // Off-site backup: $0.033/GB/mo, billed in $0.50 increments (approx every 15 GB)
  const rawBackupFee = cleanBackupGb * 0.033;
  const billedBackupFee =
    cleanBackupGb === 0 ? 0 : Math.max(0.5, Math.ceil(rawBackupFee * 2) / 2);

  // Cloudflare Enterprise add-on: $4.99/domain for 1-4 domains
  const cfUnitRate = cleanCfDomains >= 5 ? 3.99 : 4.99;
  const cfMonthlyFee = cleanCfDomains * cfUnitRate;

  // Rackspace Email add-on: $1.50/mailbox/mo
  const emailMonthlyFee = cleanMailboxes * 1.5;

  // SafeUpdates add-on: $3/app for 1-5 apps, $2/app for 6+ apps
  const safeUnitRate = cleanSafeApps >= 6 ? 2.0 : 3.0;
  const safeMonthlyFee = cleanSafeApps * safeUnitRate;

  const totalAddonsMonthly =
    billedBackupFee + cfMonthlyFee + emailMonthlyFee + safeMonthlyFee;
  const trueMonthlyInvoice = activePlan.baseMonthly + totalAddonsMonthly;
  const trueAnnualCost = trueMonthlyInvoice * 12;
  const threeYearFlatCost = trueMonthlyInvoice * 36;
  const effectiveCostPerSite = trueMonthlyInvoice / cleanSites;

  const handleRecalculate = () => {
    setWpSitesCount((prev) => Math.max(1, Number(prev) || 1));
  };

  return (
    <div
      id="cloudways-cost-calculator"
      className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 my-8"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4 mb-6">
        <div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
            Interactive Cloudways &ldquo;No-Surprises&rdquo; Monthly Bill Calculator
          </h3>
          <p className="text-sm text-slate-600 mt-1">
            Model your exact base droplet/server rate plus off-site backups ($0.033/GB), Cloudflare Enterprise ($4.99/domain), Rackspace Email ($1.50/mailbox), and SafeUpdates ($3/app).
          </p>
        </div>
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-200 shrink-0">
          2026 PAYG Rate Engine
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div>
          <label
            htmlFor="cwPlanSelect"
            className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
          >
            1. Cloud Infrastructure &amp; RAM Tier
          </label>
          <select
            id="cwPlanSelect"
            value={selectedPlanId}
            onChange={(e) => setSelectedPlanId(e.target.value)}
            className="w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-2.5 text-sm font-medium text-slate-900 focus:border-indigo-600 focus:outline-none"
          >
            {PLAN_OPTIONS.map((plan) => (
              <option key={plan.id} value={plan.id}>
                {plan.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="cwSitesInput"
            className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
          >
            2. WordPress Sites Hosted on Server
          </label>
          <input
            id="cwSitesInput"
            type="number"
            min={1}
            max={50}
            value={wpSitesCount}
            onChange={(e) => setWpSitesCount(Number(e.target.value))}
            className="w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-2.5 text-sm font-medium text-slate-900 focus:border-indigo-600 focus:outline-none"
          />
        </div>

        <div>
          <label
            htmlFor="cwBackupGbInput"
            className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
          >
            3. Off-Site Backup Volume (GB @ $0.033/GB)
          </label>
          <input
            id="cwBackupGbInput"
            type="number"
            min={0}
            max={2000}
            step={5}
            value={backupStorageGb}
            onChange={(e) => setBackupStorageGb(Number(e.target.value))}
            className="w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-2.5 text-sm font-medium text-slate-900 focus:border-indigo-600 focus:outline-none"
          />
        </div>

        <div>
          <label
            htmlFor="cwCfDomainsInput"
            className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
          >
            4. Cloudflare Enterprise Domains ($4.99/ea)
          </label>
          <input
            id="cwCfDomainsInput"
            type="number"
            min={0}
            max={50}
            value={cfEnterpriseDomains}
            onChange={(e) => setCfEnterpriseDomains(Number(e.target.value))}
            className="w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-2.5 text-sm font-medium text-slate-900 focus:border-indigo-600 focus:outline-none"
          />
        </div>

        <div>
          <label
            htmlFor="cwMailboxesInput"
            className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
          >
            5. Rackspace Email Mailboxes ($1.50/ea)
          </label>
          <input
            id="cwMailboxesInput"
            type="number"
            min={0}
            max={100}
            value={rackspaceMailboxes}
            onChange={(e) => setRackspaceMailboxes(Number(e.target.value))}
            className="w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-2.5 text-sm font-medium text-slate-900 focus:border-indigo-600 focus:outline-none"
          />
        </div>

        <div>
          <label
            htmlFor="cwSafeUpdatesInput"
            className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
          >
            6. SafeUpdates Automated Apps ($3.00/ea)
          </label>
          <input
            id="cwSafeUpdatesInput"
            type="number"
            min={0}
            max={50}
            value={safeUpdatesApps}
            onChange={(e) => setSafeUpdatesApps(Number(e.target.value))}
            className="w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-2.5 text-sm font-medium text-slate-900 focus:border-indigo-600 focus:outline-none"
          />
        </div>
      </div>

      <div className="mt-5">
        <button
          id="cwCalcBtn"
          type="button"
          onClick={handleRecalculate}
          style={{ backgroundColor: "#1e293b", color: "#ffffff" }}
          className="px-5 py-2.5 rounded-lg font-bold text-sm cursor-pointer hover:opacity-95 transition"
        >
          Calculate Exact Monthly Invoice &amp; 3-Year TCO
        </button>
      </div>

      <div
        id="cwCalcResultBox"
        className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 bg-slate-50 p-5 rounded-xl border border-slate-200"
      >
        <div className="bg-white p-4 rounded-lg border border-slate-200 border-l-4 border-l-indigo-600">
          <div className="text-xs font-bold uppercase text-slate-500">
            True All-In Monthly Invoice
          </div>
          <div className="text-2xl font-black text-slate-900 mt-1">
            ${trueMonthlyInvoice.toFixed(2)} / mo
          </div>
          <div className="text-xs text-slate-600 mt-1">
            Base: ${activePlan.baseMonthly.toFixed(2)} + Add-ons: $
            {totalAddonsMonthly.toFixed(2)} (~${activePlan.hourlyRate.toFixed(3)}
            /hr base)
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg border border-slate-200 border-l-4 border-l-emerald-600">
          <div className="text-xs font-bold uppercase text-slate-500">
            Effective Cost Per Hosted Site
          </div>
          <div className="text-2xl font-black text-slate-900 mt-1">
            ${effectiveCostPerSite.toFixed(2)} / site / mo
          </div>
          <div className="text-xs text-slate-600 mt-1">
            Across {cleanSites} WordPress site{cleanSites > 1 ? "s" : ""} ({activePlan.storageGb} GB disk / {activePlan.bandwidthTb} TB transfer)
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg border border-slate-200 border-l-4 border-l-amber-500">
          <div className="text-xs font-bold uppercase text-slate-500">
            Annual &amp; 36-Month Flat TCO
          </div>
          <div className="text-2xl font-black text-slate-900 mt-1">
            ${trueAnnualCost.toFixed(2)} / yr
          </div>
          <div className="text-xs text-slate-600 mt-1">
            36-Month Total: ${threeYearFlatCost.toFixed(2)} (No renewal price jump)
          </div>
        </div>
      </div>

      <div className="mt-4 text-xs text-slate-600 bg-slate-100 rounded-lg p-3 leading-relaxed">
        <strong>Line-Item Invoice Breakdown:</strong> {activePlan.provider} ({activePlan.ramGb} GB RAM / {activePlan.vcpu} vCPU) = <strong>${activePlan.baseMonthly.toFixed(2)}/mo</strong> • Off-site Backups ({cleanBackupGb} GB) = <strong>${billedBackupFee.toFixed(2)}/mo</strong> • Cloudflare Enterprise ({cleanCfDomains} domain{cleanCfDomains === 1 ? "" : "s"}) = <strong>${cfMonthlyFee.toFixed(2)}/mo</strong> • Rackspace Email ({cleanMailboxes} mailbox{cleanMailboxes === 1 ? "" : "es"}) = <strong>${emailMonthlyFee.toFixed(2)}/mo</strong> • SafeUpdates ({cleanSafeApps} app{cleanSafeApps === 1 ? "" : "s"}) = <strong>${safeMonthlyFee.toFixed(2)}/mo</strong>.
      </div>
    </div>
  );
}
