"use client";

import React, { useState } from "react";

const ADOBE_PLANS = {
  cc_pro: { label: "Creative Cloud Pro — All Apps + Full Firefly AI ($69.99/mo)", monthly: 69.99 },
  cc_std: { label: "Creative Cloud Standard — All Apps, Limited AI ($54.99/mo)", monthly: 54.99 },
  single: { label: "Adobe Single App — e.g. Photoshop or Premiere ($22.99/mo)", monthly: 22.99 },
  photo: { label: "Adobe Photography Plan — Photoshop + Lightroom ($19.99/mo)", monthly: 19.99 },
} as const;

const ALT_STACKS = {
  zero_cost: { label: "Free Stack: Affinity Suite ($0) + DaVinci Resolve Free ($0)", oneTime: 0, annual: 0 },
  creator_perp: { label: "Creator Perpetual: Affinity ($0) + Filmora Perpetual (~$79.99)", oneTime: 79.99, annual: 0 },
  studio_pro: { label: "Pro Perpetual: Affinity ($0) + DaVinci Studio ($295) + Foxit Perpetual (~$209.99)", oneTime: 504.99, annual: 0 },
  canva_hybrid: { label: "Hybrid Cloud: Affinity ($0) + Canva Pro ($144/yr) + DaVinci Free ($0)", oneTime: 0, annual: 144 },
} as const;

type AdobeKey = keyof typeof ADOBE_PLANS;
type AltKey = keyof typeof ALT_STACKS;

export default function AdobePerpetualCalc() {
  const [adobePlan, setAdobePlan] = useState<AdobeKey>("cc_pro");
  const [altStack, setAltStack] = useState<AltKey>("studio_pro");
  const [seats, setSeats] = useState<number>(1);
  const [years, setYears] = useState<number>(5);

  const s = Math.max(1, Math.round(seats || 1));
  const y = Math.max(1, Math.min(5, Math.round(years || 5)));

  const adobeTotal = s * ADOBE_PLANS[adobePlan].monthly * 12 * y;
  const altTotal = s * (ALT_STACKS[altStack].oneTime + ALT_STACKS[altStack].annual * y);
  const netSavings = adobeTotal - altTotal;

  const cls = "w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-900";
  const lbl = "block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1";

  return (
    <div className="bg-indigo-50/50 border-2 border-indigo-600 rounded-2xl p-5 sm:p-6 my-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="adPlan" className={lbl}>Current Adobe Plan</label>
          <select id="adPlan" className={cls} value={adobePlan} onChange={(e) => setAdobePlan(e.target.value as AdobeKey)}>
            {Object.entries(ADOBE_PLANS).map(([k, v]) => (
              <option key={k} value={k}>{v.label}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="adAlt" className={lbl}>Replacement Stack</label>
          <select id="adAlt" className={cls} value={altStack} onChange={(e) => setAltStack(e.target.value as AltKey)}>
            {Object.entries(ALT_STACKS).map(([k, v]) => (
              <option key={k} value={k}>{v.label}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="adSeats" className={lbl}>Number of Creator Seats</label>
          <input id="adSeats" type="number" min={1} max={200} className={cls} value={seats} onChange={(e) => setSeats(parseFloat(e.target.value) || 1)} />
        </div>
        <div>
          <label htmlFor="adYears" className={lbl}>Time Horizon (Years)</label>
          <select id="adYears" className={cls} value={years} onChange={(e) => setYears(parseInt(e.target.value, 10) || 5)}>
            <option value={1}>1 Year</option>
            <option value={2}>2 Years</option>
            <option value={3}>3 Years</option>
            <option value={5}>5 Years</option>
          </select>
        </div>
      </div>

      <button
        id="adCalcBtn"
        type="button"
        onClick={() => setSeats((v) => v)}
        style={{ backgroundColor: "#4f46e5", color: "#ffffff" }}
        className="mt-5 px-5 py-2.5 rounded-xl font-bold text-sm"
      >
        Calculate {y}-Year Creative Software Savings &rarr;
      </button>

      <div id="adCalcResult" className="mt-5 bg-white border border-slate-200 rounded-xl p-4 text-sm text-slate-800 space-y-2">
        <p className="font-bold text-base sm:text-lg text-slate-900">
          {y}-Year Total ({s} Seat{s === 1 ? "" : "s"}): Adobe ${adobeTotal.toFixed(2)} vs Replacement ${altTotal.toFixed(2)} &mdash; Net Difference: ${netSavings.toFixed(2)}
        </p>
        <p className="text-xs text-slate-500">
          Based on November 2026 reported individual list rates before regional tax or team tier surcharges; verify live terms on each vendor&apos;s checkout page.
        </p>
      </div>
    </div>
  );
}
