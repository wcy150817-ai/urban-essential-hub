"use client";

import React, { useState } from "react";

const PLANS = {
  community: { label: "Community (~$99.99/mo — Discord Bot & Index Maps)", monthly: 99.99 },
  initiate: { label: "Initiate (~$299/mo — Web Terminal + SPX/SPY/QQQ/IWM/VIX)", monthly: 299.0 },
  pro: { label: "Pro ($699/mo — 5,000+ Single Stocks + Atlas + Talon AI)", monthly: 699.0 },
} as const;

type PlanKey = keyof typeof PLANS;

export default function SkylitTierCalc() {
  const [capital, setCapital] = useState<number>(25000);
  const [plan, setPlan] = useState<PlanKey>("initiate");
  const [tradesPerMo, setTradesPerMo] = useState<number>(20);

  const cap = Math.max(1000, capital || 1000);
  const moCost = PLANS[plan].monthly;
  const yrCost = moCost * 12;
  const annualDragPct = (yrCost / cap) * 100;
  const t = Math.max(1, Math.round(tradesPerMo || 1));
  const perTradeHurdle = moCost / t;

  const cls = "w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-900";
  const lbl = "block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1";

  return (
    <div className="bg-cyan-50/50 border-2 border-cyan-600 rounded-2xl p-5 sm:p-6 my-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label htmlFor="skCapital" className={lbl}>Trading Account Size (USD)</label>
          <input
            id="skCapital"
            type="number"
            min={1000}
            step={5000}
            className={cls}
            value={capital}
            onChange={(e) => setCapital(parseFloat(e.target.value) || 1000)}
          />
        </div>
        <div>
          <label htmlFor="skPlan" className={lbl}>Skylit Subscription Tier</label>
          <select
            id="skPlan"
            className={cls}
            value={plan}
            onChange={(e) => setPlan(e.target.value as PlanKey)}
          >
            {Object.entries(PLANS).map(([k, v]) => (
              <option key={k} value={k}>{v.label}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="skTrades" className={lbl}>Estimated Round-Trip Trades / Month</label>
          <input
            id="skTrades"
            type="number"
            min={1}
            max={500}
            className={cls}
            value={tradesPerMo}
            onChange={(e) => setTradesPerMo(parseFloat(e.target.value) || 1)}
          />
        </div>
      </div>

      <button
        id="skCalcBtn"
        type="button"
        onClick={() => setCapital((v) => v)}
        style={{ backgroundColor: "#0891b2", color: "#ffffff" }}
        className="mt-5 px-5 py-2.5 rounded-xl font-bold text-sm"
      >
        Calculate Annual Software Drag &amp; Break-Even Hurdle &rarr;
      </button>

      <div id="skCalcResult" className="mt-5 bg-white border border-slate-200 rounded-xl p-4 text-sm text-slate-800 space-y-2">
        <p className="font-bold text-base sm:text-lg text-slate-900">
          Annual Subscription Cost: ${yrCost.toFixed(2)}/yr ({annualDragPct.toFixed(2)}% Annual Overhead Drag on ${cap.toLocaleString()})
        </p>
        <p className="text-slate-700">
          Across {t} monthly trades, this tier adds <strong>${perTradeHurdle.toFixed(2)} in fixed software cost per trade</strong> before brokerage commissions and bid-ask slippage.{" "}
          {annualDragPct > 10
            ? "Caution: An annual software fee exceeding 10% of account equity creates severe structural drag—consider a lower tier or paper-testing until capital scales."
            : "This overhead ratio stays within typical institutional-lite software budgeting (<10% of trading equity per year)."}
        </p>
      </div>
    </div>
  );
}
