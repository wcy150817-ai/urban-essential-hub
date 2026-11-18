"use client";

import React, { useState } from "react";

const TIERS = {
  do_std_1: { label: "DigitalOcean Standard 1 GB (1 vCPU, 25 GB SSD)", monthly: 11 },
  do_prem_1: { label: "DigitalOcean Premium 1 GB (1 vCPU, 25 GB NVMe)", monthly: 14 },
  vultr_hf_1: { label: "Vultr High Frequency 1 GB (1 vCPU, 32 GB NVMe)", monthly: 16 },
  do_prem_2: { label: "DigitalOcean Premium 2 GB (1 vCPU, 50 GB NVMe)", monthly: 28 },
  vultr_hf_2: { label: "Vultr High Frequency 2 GB (1 vCPU, 64 GB NVMe)", monthly: 32 },
  do_prem_4: { label: "DigitalOcean Premium 4 GB (2 vCPU, 80 GB NVMe)", monthly: 54 },
} as const;

type TierKey = keyof typeof TIERS;

export default function CloudwaysCostCalc() {
  const [tier, setTier] = useState<TierKey>("do_prem_1");
  const [cfDomains, setCfDomains] = useState<number>(2);
  const [mailboxes, setMailboxes] = useState<number>(1);
  const [backupGb, setBackupGb] = useState<number>(20);

  const base = TIERS[tier].monthly;
  const d = Math.max(0, Math.round(cfDomains || 0));
  const cfRate = d >= 25 ? 1.99 : d >= 10 ? 2.99 : d >= 5 ? 3.99 : 4.99;
  const cfCost = d * cfRate;
  const mailCost = Math.max(0, Math.round(mailboxes || 0)) * 1.0;
  const backupCost = Math.max(0.5, Math.ceil((Math.max(0, backupGb || 0) * 0.033) * 2) / 2);
  const totalMo = base + cfCost + mailCost + (backupGb > 0 ? backupCost : 0);

  const cls = "w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-900";
  const lbl = "block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1";

  return (
    <div className="bg-slate-50 border-2 border-blue-600 rounded-2xl p-5 sm:p-6 my-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="cwTier" className={lbl}>Cloudways Instance Tier</label>
          <select id="cwTier" className={cls} value={tier} onChange={(e) => setTier(e.target.value as TierKey)}>
            {Object.entries(TIERS).map(([k, v]) => (
              <option key={k} value={k}>{v.label} (~${v.monthly}/mo)</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="cwCfDomains" className={lbl}>Cloudflare Enterprise Add-On Domains</label>
          <input id="cwCfDomains" type="number" min={0} max={100} className={cls} value={cfDomains} onChange={(e) => setCfDomains(parseFloat(e.target.value) || 0)} />
        </div>
        <div>
          <label htmlFor="cwMailboxes" className={lbl}>Rackspace Email Add-On Mailboxes ($1/mo)</label>
          <input id="cwMailboxes" type="number" min={0} max={100} className={cls} value={mailboxes} onChange={(e) => setMailboxes(parseFloat(e.target.value) || 0)} />
        </div>
        <div>
          <label htmlFor="cwBackupGb" className={lbl}>Off-Site Backup Footprint (GB)</label>
          <input id="cwBackupGb" type="number" min={0} max={1000} step={10} className={cls} value={backupGb} onChange={(e) => setBackupGb(parseFloat(e.target.value) || 0)} />
        </div>
      </div>
      <button
        id="cwCalcBtn"
        type="button"
        onClick={() => setCfDomains((v) => v)}
        data-qa="color: #ffffff !important"
        style={{ backgroundColor: "#2563eb", color: "#ffffff" }}
        className="mt-5 px-5 py-2.5 rounded-xl font-bold text-sm"
      >
        Calculate Real Monthly Bill &rarr;
      </button>
      <div id="cwCalcResult" className="mt-5 bg-white border border-slate-200 rounded-xl p-4 text-sm text-slate-800">
        <p className="font-bold text-lg text-slate-900">
          Estimated All-In Monthly Bill: ${totalMo.toFixed(2)}/mo (~${(totalMo * 12).toFixed(0)}/yr, flat with zero year-2 renewal hike)
        </p>
        <p className="mt-2">
          Breakdown: Base server ${base.toFixed(2)} + Cloudflare Enterprise ${cfCost.toFixed(2)} ({d} domain{d === 1 ? "" : "s"} @ ${cfRate.toFixed(2)}/mo) + Rackspace Email ${mailCost.toFixed(2)} + Off-site backups ${(backupGb > 0 ? backupCost : 0).toFixed(2)}. Reported November 2026 listing rates; verify live pricing on Cloudways.
        </p>
      </div>
    </div>
  );
}
