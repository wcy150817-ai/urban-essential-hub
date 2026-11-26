"use client";

import React, { useState } from "react";

export default function SubscriptionAuditCalc() {
  const [monthlyCount, setMonthlyCount] = useState<number>(3);
  const [avgMonthlyCost, setAvgMonthlyCost] = useState<number>(12.99);
  const [annualCount, setAnnualCount] = useState<number>(2);
  const [avgAnnualCost, setAvgAnnualCost] = useState<number>(79);
  const [calculated, setCalculated] = useState<boolean>(false);

  const monthlyLeak = monthlyCount * avgMonthlyCost + (annualCount * avgAnnualCost) / 12;
  const yearlySavings = monthlyCount * avgMonthlyCost * 12 + annualCount * avgAnnualCost;
  const threeYearSavings = yearlySavings * 3;
  const fiveYearCompounded =
    yearlySavings * ((Math.pow(1 + 0.05, 5) - 1) / 0.05);

  return (
    <section
      aria-label="Subscription Leak & Annual Savings Calculator"
      className="rounded-2xl border border-cyan-500/30 bg-slate-950 text-slate-100 p-6 sm:p-8 shadow-xl space-y-6 my-8"
    >
      <div className="space-y-2">
        <span className="inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-cyan-500/15 text-cyan-300 border border-cyan-400/30">
          Interactive Everyday Money-Saving Tool
        </span>
        <h2 className="text-xl sm:text-2xl font-black text-white">
          15-Minute Forgotten Subscription Leak Calculator
        </h2>
        <p className="text-sm text-slate-300 leading-relaxed">
          Estimate how much cash quietly leaves your checking account, Apple ID, Google Play, and PayPal billing agreements from underused monthly apps and surprise annual renewals.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label htmlFor="sub-monthly-count" className="block text-xs font-bold text-slate-300">
            Unused / Rarely Opened Monthly Apps
          </label>
          <input
            id="sub-monthly-count"
            type="number"
            min={0}
            max={30}
            step={1}
            value={monthlyCount}
            onChange={(e) => setMonthlyCount(Math.max(0, Number(e.target.value) || 0))}
            className="w-full rounded-xl bg-slate-900 border border-slate-700 px-3.5 py-2.5 text-sm text-white focus:border-cyan-400 focus:outline-none"
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="sub-monthly-price" className="block text-xs font-bold text-slate-300">
            Average Monthly App Charge ($)
          </label>
          <input
            id="sub-monthly-price"
            type="number"
            min={0}
            max={500}
            step={0.5}
            value={avgMonthlyCost}
            onChange={(e) => setAvgMonthlyCost(Math.max(0, Number(e.target.value) || 0))}
            className="w-full rounded-xl bg-slate-900 border border-slate-700 px-3.5 py-2.5 text-sm text-white focus:border-cyan-400 focus:outline-none"
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="sub-annual-count" className="block text-xs font-bold text-slate-300">
            Forgotten Annual Auto-Renewals per Year
          </label>
          <input
            id="sub-annual-count"
            type="number"
            min={0}
            max={20}
            step={1}
            value={annualCount}
            onChange={(e) => setAnnualCount(Math.max(0, Number(e.target.value) || 0))}
            className="w-full rounded-xl bg-slate-900 border border-slate-700 px-3.5 py-2.5 text-sm text-white focus:border-cyan-400 focus:outline-none"
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="sub-annual-price" className="block text-xs font-bold text-slate-300">
            Average Annual Renewal Charge ($)
          </label>
          <input
            id="sub-annual-price"
            type="number"
            min={0}
            max={2000}
            step={5}
            value={avgAnnualCost}
            onChange={(e) => setAvgAnnualCost(Math.max(0, Number(e.target.value) || 0))}
            className="w-full rounded-xl bg-slate-900 border border-slate-700 px-3.5 py-2.5 text-sm text-white focus:border-cyan-400 focus:outline-none"
          />
        </div>
      </div>

      <button
        id="sub-calc-btn"
        type="button"
        onClick={() => setCalculated(true)}
        style={{ backgroundColor: "#06b6d4", color: "#020617" }}
        className="w-full sm:w-auto px-6 py-3 rounded-xl font-extrabold text-sm tracking-tight hover:opacity-95 transition cursor-pointer"
      >
        Calculate My Annual Cash Recovery
      </button>

      <div
        id="sub-result"
        className="rounded-xl bg-slate-900/90 border border-slate-800 p-5 space-y-3"
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <div className="text-xs text-slate-400">Effective Monthly Leak</div>
            <div className="text-2xl font-black text-cyan-300">
              ${monthlyLeak.toFixed(2)}/mo
            </div>
          </div>
          <div>
            <div className="text-xs text-slate-400">12-Month Cash Saved</div>
            <div className="text-2xl font-black text-emerald-400">
              ${yearlySavings.toFixed(2)}/yr
            </div>
          </div>
          <div>
            <div className="text-xs text-slate-400">5-Year Value (at 5% HYSA/Index)</div>
            <div className="text-2xl font-black text-indigo-300">
              ${fiveYearCompounded.toFixed(0)}
            </div>
          </div>
        </div>
        <p className="text-xs text-slate-300 leading-relaxed">
          {calculated ? "Updated audit projection: " : "Illustrative baseline: "}
          Canceling {monthlyCount} monthly subscription(s) at ${avgMonthlyCost.toFixed(2)} and {annualCount} annual renewal(s) at ${avgAnnualCost.toFixed(0)} recovers{" "}
          <strong>${threeYearSavings.toFixed(0)}</strong> in direct cash over 36 months—equivalent to funding a dedicated hardware upgrade or emergency buffer without earning an extra dollar.
        </p>
      </div>
    </section>
  );
}
