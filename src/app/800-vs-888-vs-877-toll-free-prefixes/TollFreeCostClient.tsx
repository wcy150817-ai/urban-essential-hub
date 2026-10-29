"use client";

import React, { useState } from "react";

export default function TollFreeCostClient() {
  const [inboundMinutes, setInboundMinutes] = useState<number>(2500);
  const [smsVolume, setSmsVolume] = useState<number>(500);
  const [extensions, setExtensions] = useState<number>(5);
  const [vanityType, setVanityType] = useState<string>("true800");
  const [calcRun, setCalcRun] = useState<number>(1);

  const safeMinutes = inboundMinutes >= 0 ? inboundMinutes : 0;
  const safeSms = smsVolume >= 0 ? smsVolume : 0;
  const safeExt = extensions > 0 ? extensions : 1;

  // 1. 800.com (Personal $19/mo annual w/ 1,000 mins + $0.059/min overage vs Unlimited $59/mo annual w/ unlimited mins)
  const personalBase = 19;
  const personalOverageMins = Math.max(0, safeMinutes - 1000);
  const personalTotal = personalBase + personalOverageMins * 0.059 + (safeSms > 500 ? (safeSms - 500) * 0.02 : 0);
  const unlimitedBase = 59;
  const unlimitedTotal = unlimitedBase + (safeSms > 2500 ? (safeSms - 2500) * 0.015 : 0);

  const best800PlanName =
    personalTotal < unlimitedTotal ? "800.com Personal ($19/mo)" : "800.com Unlimited ($59/mo)";
  const best800Monthly = Math.min(personalTotal, unlimitedTotal);
  const best800Annual = best800Monthly * 12;

  // 2. Grasshopper (True Solo $14/mo for 1 user/1 ext, Solo Plus $25/mo for 3 ext, Small Business $55/mo for unlimited ext + TCR fees)
  let grasshopperBase = 25;
  let grasshopperTier = "Solo Plus ($25/mo)";
  if (safeExt > 3) {
    grasshopperBase = 55;
    grasshopperTier = "Small Business ($55/mo)";
  } else if (safeExt === 1) {
    grasshopperBase = 14;
    grasshopperTier = "True Solo ($14/mo)";
  }
  const vanityPremiumGrasshopper = vanityType === "true800" ? 15 : 0;
  const grasshopperMonthly = grasshopperBase + vanityPremiumGrasshopper + 1.5; // +$1.50 TCR/regulatory
  const grasshopperAnnual = grasshopperMonthly * 12;

  // 3. Metered Cloud SIP / CPaaS (Twilio / Bandwidth style: $2/mo number + $0.022/min inbound TF + $0.0079/SMS + PBX seat hosting $15/ext)
  const sipVoiceCost = safeMinutes * 0.022;
  const sipSmsCost = safeSms * 0.0079;
  const sipPbxSeats = safeExt * 15;
  const sipMonthly = 2 + sipVoiceCost + sipSmsCost + sipPbxSeats;
  const sipAnnual = sipMonthly * 12;

  return (
    <div className="bg-white border-2 border-slate-900 rounded-2xl p-5 sm:p-7 shadow-sm my-8">
      <div className="text-xs font-extrabold uppercase tracking-wider text-indigo-600 mb-1">
        Interactive Toll-Free Prefix &amp; Per-Minute Telecom Cost Engine
      </div>
      <h3 className="text-xl font-extrabold text-slate-900 mb-4">
        Calculate Monthly &amp; Annual Toll-Free Costs Across 800.com, Grasshopper &amp; Metered SIP
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-5">
        <div>
          <label
            htmlFor="tfMinutesInput"
            className="block text-xs font-bold text-slate-700 mb-1.5"
          >
            Monthly Inbound Minutes
          </label>
          <input
            id="tfMinutesInput"
            type="number"
            min={0}
            max={100000}
            step={100}
            value={inboundMinutes}
            onChange={(e) => setInboundMinutes(Number(e.target.value) || 0)}
            className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm font-semibold text-slate-900"
          />
        </div>

        <div>
          <label
            htmlFor="tfSmsInput"
            className="block text-xs font-bold text-slate-700 mb-1.5"
          >
            Monthly Toll-Free SMS Volume
          </label>
          <input
            id="tfSmsInput"
            type="number"
            min={0}
            max={100000}
            step={100}
            value={smsVolume}
            onChange={(e) => setSmsVolume(Number(e.target.value) || 0)}
            className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm font-semibold text-slate-900"
          />
        </div>

        <div>
          <label
            htmlFor="tfExtInput"
            className="block text-xs font-bold text-slate-700 mb-1.5"
          >
            Team Extensions / Users
          </label>
          <input
            id="tfExtInput"
            type="number"
            min={1}
            max={200}
            value={extensions}
            onChange={(e) => setExtensions(Number(e.target.value) || 1)}
            className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm font-semibold text-slate-900"
          />
        </div>

        <div>
          <label
            htmlFor="vanitySelect"
            className="block text-xs font-bold text-slate-700 mb-1.5"
          >
            Prefix &amp; Vanity Requirement
          </label>
          <select
            id="vanitySelect"
            value={vanityType}
            onChange={(e) => setVanityType(e.target.value)}
            className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm font-semibold text-slate-900 bg-white"
          >
            <option value="true800">True 1-800 Prefix / Custom Word</option>
            <option value="modern">888 / 877 / 866 / 855 / 844 / 833 Pool</option>
          </select>
        </div>
      </div>

      <button
        type="button"
        id="calcTollFreeBtn"
        onClick={() => setCalcRun((r) => r + 1)}
        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-xl text-sm transition cursor-pointer mb-5"
      >
        Calculate Optimal Toll-Free Plan &amp; RespOrg Portability Fit
      </button>

      <div
        id="tollFreeResultBox"
        className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5"
      >
        <div className="flex flex-wrap items-baseline justify-between gap-2 pb-3 mb-4 border-b border-slate-200">
          <span className="text-xs font-bold uppercase tracking-wide text-slate-500">
            Telecom Traffic Profile ({safeMinutes.toLocaleString("en-US")} min/mo &bull;{" "}
            {safeSms.toLocaleString("en-US")} SMS &bull; {safeExt} ext):
          </span>
          <strong className="text-lg sm:text-xl font-extrabold text-slate-900">
            {vanityType === "true800"
              ? "True 1-800 High-Recall Inventory"
              : "SOMOS 888–833 Open Prefix Pool"}
          </strong>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm mb-4">
          <div className="bg-white border-2 border-emerald-400 rounded-lg p-3.5">
            <div className="text-xs font-bold text-emerald-800 uppercase">
              Best 800.com Plan: {best800PlanName}
            </div>
            <div className="text-lg font-extrabold text-slate-900 mt-1">
              ${best800Monthly.toFixed(2)} / mo
            </div>
            <div className="text-xs font-semibold text-emerald-700 mt-0.5">
              Annual TCO: ${best800Annual.toFixed(0)} / yr
            </div>
            <div className="text-xs text-slate-600 mt-1.5">
              Personal: ${personalTotal.toFixed(2)}/mo vs Unlimited: ${unlimitedTotal.toFixed(2)}/mo
              &bull; Deep 1-800 &amp; vanity word bank
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-lg p-3.5">
            <div className="text-xs font-bold text-slate-700 uppercase">
              Grasshopper ({grasshopperTier})
            </div>
            <div className="text-lg font-extrabold text-slate-900 mt-1">
              ${grasshopperMonthly.toFixed(2)} / mo
            </div>
            <div className="text-xs font-semibold text-slate-700 mt-0.5">
              Annual TCO: ${grasshopperAnnual.toFixed(0)} / yr
            </div>
            <div className="text-xs text-slate-600 mt-1.5">
              Base: ${grasshopperBase}/mo + TCR/Reg ($1.50){" "}
              {vanityPremiumGrasshopper > 0 ? "+ True 800 search ($15)" : ""}
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-lg p-3.5">
            <div className="text-xs font-bold text-slate-700 uppercase">
              Metered SIP Trunk + Cloud PBX
            </div>
            <div className="text-lg font-extrabold text-slate-900 mt-1">
              ${sipMonthly.toFixed(2)} / mo
            </div>
            <div className="text-xs font-semibold text-slate-700 mt-0.5">
              Annual TCO: ${sipAnnual.toFixed(0)} / yr
            </div>
            <div className="text-xs text-slate-600 mt-1.5">
              Voice ($0.022/m): ${sipVoiceCost.toFixed(2)} + SMS: ${sipSmsCost.toFixed(2)} +{" "}
              {safeExt} SIP seats (${sipPbxSeats})
            </div>
          </div>
        </div>

        <div className="text-xs font-semibold text-indigo-900 bg-indigo-50 border border-indigo-200 rounded-lg px-3.5 py-2.5">
          Breakeven &amp; Portability Verdict (Run #{calcRun}): On 800.com, the breakeven point
          between Personal ($19/mo for 1,000 mins) and Unlimited ($59/mo) sits at{" "}
          <strong>1,678 inbound minutes/month</strong>. Under FCC 47 CFR &sect; 52.101, your business
          retains full legal portability rights to port any 800/888/877/866/855/844/833 number
          between RespOrgs.
        </div>
      </div>
    </div>
  );
}
