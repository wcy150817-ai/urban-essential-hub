"use client";

import React, { useState } from "react";

const PLANS = {
  startup: { label: "Startup (1 number, 250 min)", annual: 19, monthly: 23, included: 250, unlimited: false },
  business: { label: "Small Business (3 numbers, unlimited min)", annual: 49, monthly: 59, included: 0, unlimited: true },
} as const;

type PlanKey = keyof typeof PLANS;

export default function OverageCalculator() {
  const [plan, setPlan] = useState<PlanKey>("startup");
  const [billing, setBilling] = useState<"annual" | "monthly">("annual");
  const [minutes, setMinutes] = useState<number>(400);
  const [rate, setRate] = useState<number>(0.06);
  const [extraNumbers, setExtraNumbers] = useState<number>(0);
  const [numberFee, setNumberFee] = useState<number>(15);

  const p = PLANS[plan];
  const base = billing === "annual" ? p.annual : p.monthly;
  const overMinutes = p.unlimited ? 0 : Math.max(0, minutes - p.included);
  const overCost = overMinutes * Math.max(0, rate);
  const monthly = base + overCost + Math.max(0, extraNumbers) * Math.max(0, numberFee);
  const startupBase = billing === "annual" ? PLANS.startup.annual : PLANS.startup.monthly;
  const bizBase = billing === "annual" ? PLANS.business.annual : PLANS.business.monthly;
  const breakEvenMinutes = rate > 0 ? Math.round(PLANS.startup.included + (bizBase - startupBase) / rate) : 0;
  const cheaper = minutes > breakEvenMinutes ? "Small Business" : "Startup";

  const fieldCls = "w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-900";
  const labelCls = "block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1";

  return (
    <div className="bg-slate-50 border-2 border-emerald-600 rounded-2xl p-5 sm:p-6 my-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="ovPlan" className={labelCls}>Plan</label>
          <select id="ovPlan" className={fieldCls} value={plan} onChange={(e) => setPlan(e.target.value as PlanKey)}>
            <option value="startup">{PLANS.startup.label}</option>
            <option value="business">{PLANS.business.label}</option>
          </select>
        </div>
        <div>
          <label htmlFor="ovBilling" className={labelCls}>Billing</label>
          <select id="ovBilling" className={fieldCls} value={billing} onChange={(e) => setBilling(e.target.value as "annual" | "monthly")}>
            <option value="annual">Annual prepay</option>
            <option value="monthly">Month to month</option>
          </select>
        </div>
        <div>
          <label htmlFor="ovMinutes" className={labelCls}>Minutes used per month</label>
          <input id="ovMinutes" type="number" min={0} max={20000} step={50} className={fieldCls} value={minutes} onChange={(e) => setMinutes(parseFloat(e.target.value) || 0)} />
        </div>
        <div>
          <label htmlFor="ovRate" className={labelCls}>Overage rate per minute ($)</label>
          <input id="ovRate" type="number" min={0} max={1} step={0.01} className={fieldCls} value={rate} onChange={(e) => setRate(parseFloat(e.target.value) || 0)} />
        </div>
        <div>
          <label htmlFor="ovExtra" className={labelCls}>Extra numbers beyond plan</label>
          <input id="ovExtra" type="number" min={0} max={50} step={1} className={fieldCls} value={extraNumbers} onChange={(e) => setExtraNumbers(parseFloat(e.target.value) || 0)} />
        </div>
        <div>
          <label htmlFor="ovNumFee" className={labelCls}>Fee per extra number ($/month)</label>
          <input id="ovNumFee" type="number" min={0} max={100} step={1} className={fieldCls} value={numberFee} onChange={(e) => setNumberFee(parseFloat(e.target.value) || 0)} />
        </div>
      </div>
      <button
        id="ovCalcBtn"
        type="button"
        onClick={() => setMinutes((m) => m)}
        data-qa="color: #ffffff !important"
        style={{ backgroundColor: "#059669", color: "#ffffff" }}
        className="mt-5 px-5 py-2.5 rounded-xl font-bold text-sm"
      >
        Recalculate monthly cost
      </button>
      <div id="ovResult" className="mt-5 bg-white border border-slate-200 rounded-xl p-4 text-sm text-slate-800">
        <p className="font-bold text-lg text-slate-900">Estimated monthly cost: ${monthly.toFixed(2)} (about ${(monthly * 12).toFixed(0)} per year)</p>
        <p className="mt-2">Base ${base.toFixed(2)} + overage ${overCost.toFixed(2)} ({overMinutes.toLocaleString()} extra minutes) + extra numbers ${(Math.max(0, extraNumbers) * Math.max(0, numberFee)).toFixed(2)}.</p>
        <p className="mt-2">At the entered rate, Small Business becomes cheaper than Startup above roughly {breakEvenMinutes.toLocaleString()} minutes per month ({billing === "annual" ? "annual" : "monthly"} billing). At {minutes.toLocaleString()} minutes, {cheaper} is the lower-cost plan. Plan prices and rates are third-party reported figures; confirm on 800.com.</p>
      </div>
    </div>
  );
}
