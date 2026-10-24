"use client";

import React, { useState } from "react";

export default function CommunityFeeCalculator() {
  const [members, setMembers] = useState<number>(120);
  const [monthlyPrice, setMonthlyPrice] = useState<number>(49);
  const [emailHubNeeded, setEmailHubNeeded] = useState<string>("no");
  const [calcRun, setCalcRun] = useState<number>(1);

  const safeMembers = members > 0 ? members : 1;
  const safePrice = monthlyPrice > 0 ? monthlyPrice : 1;
  const grossMonthly = safeMembers * safePrice;

  // 1. Skool Hobby ($9/mo + 10% + $0.30/tx)
  const skoolHobbySub = 9;
  const skoolHobbyTxFees = grossMonthly * 0.1 + safeMembers * 0.3;
  const skoolHobbyTotalCost = skoolHobbySub + skoolHobbyTxFees;

  // 2. Skool Pro ($99/mo + 2.9% + $0.30/tx; 3.9% if ticket > $900)
  const skoolProSub = 99;
  const skoolProRate = safePrice > 900 ? 0.039 : 0.029;
  const skoolProTxFees = grossMonthly * skoolProRate + safeMembers * 0.3;
  const skoolProTotalCost = skoolProSub + skoolProTxFees;

  // Optimal Skool tier
  const bestSkoolName =
    skoolHobbyTotalCost < skoolProTotalCost ? "Skool Hobby ($9/mo)" : "Skool Pro ($99/mo)";
  const bestSkoolCost = Math.min(skoolHobbyTotalCost, skoolProTotalCost);
  const bestSkoolNet = grossMonthly - bestSkoolCost;

  // 3. Circle Professional ($89/mo annual + 2% platform + 2.9% + $0.30 Stripe + optional $99 Email Hub)
  const circleProSub = 89 + (emailHubNeeded === "yes" ? 99 : 0);
  const circleProTxFees = grossMonthly * 0.049 + safeMembers * 0.3;
  const circleProTotalCost = circleProSub + circleProTxFees;
  const circleProNet = grossMonthly - circleProTotalCost;

  // 4. Circle Business ($199/mo annual + 1% platform + 2.9% + $0.30 Stripe + optional $99 Email Hub)
  const circleBizSub = 199 + (emailHubNeeded === "yes" ? 99 : 0);
  const circleBizTxFees = grossMonthly * 0.039 + safeMembers * 0.3;
  const circleBizTotalCost = circleBizSub + circleBizTxFees;

  // 5. Mighty Networks Courses/Scale ($119/mo avg + 2% platform + 2.9% + $0.30 Stripe)
  const mightySub = 119;
  const mightyTxFees = grossMonthly * 0.049 + safeMembers * 0.3;
  const mightyTotalCost = mightySub + mightyTxFees;
  const mightyNet = grossMonthly - mightyTotalCost;

  const annualSavingsVsCircle = (circleProTotalCost - bestSkoolCost) * 12;

  return (
    <div className="bg-white border-2 border-slate-900 rounded-2xl p-5 sm:p-7 shadow-sm my-8">
      <div className="text-xs font-extrabold uppercase tracking-wider text-indigo-600 mb-1">
        Interactive Creator Unit-Economics &amp; Take-Rate Engine
      </div>
      <h3 className="text-xl font-extrabold text-slate-900 mb-4">
        Compare Monthly Software + Transaction Fee Drag Across Skool, Circle &amp; Mighty Networks
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">
        <div>
          <label
            htmlFor="membersInput"
            className="block text-xs font-bold text-slate-700 mb-1.5"
          >
            Active Paying Members
          </label>
          <input
            id="membersInput"
            type="number"
            min={1}
            max={50000}
            value={members}
            onChange={(e) => setMembers( Number(e.target.value) || 1 )}
            className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm font-semibold text-slate-900"
          />
        </div>

        <div>
          <label
            htmlFor="priceInput"
            className="block text-xs font-bold text-slate-700 mb-1.5"
          >
            Monthly Membership Price ($ USD)
          </label>
          <input
            id="priceInput"
            type="number"
            min={1}
            max={5000}
            value={monthlyPrice}
            onChange={(e) => setMonthlyPrice( Number(e.target.value) || 1 )}
            className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm font-semibold text-slate-900"
          />
        </div>

        <div>
          <label
            htmlFor="emailHubSelect"
            className="block text-xs font-bold text-slate-700 mb-1.5"
          >
            Circle Native Email Hub (+$99/mo)?
          </label>
          <select
            id="emailHubSelect"
            value={emailHubNeeded}
            onChange={(e) => setEmailHubNeeded(e.target.value)}
            className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm font-semibold text-slate-900 bg-white"
          >
            <option value="no">No (Use Broadcasts / External ESP)</option>
            <option value="yes">Yes (+$99/mo Circle Email Hub)</option>
          </select>
        </div>
      </div>

      <button
        type="button"
        id="calcCommunityBtn"
        onClick={() => setCalcRun((r) => r + 1)}
        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-xl text-sm transition cursor-pointer mb-5"
      >
        Calculate Net Creator Take-Home &amp; Annual Fee Drag
      </button>

      <div
        id="communityResultBox"
        className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5"
      >
        <div className="flex flex-wrap items-baseline justify-between gap-2 pb-3 mb-4 border-b border-slate-200">
          <span className="text-xs font-bold uppercase tracking-wide text-slate-500">
            Gross Monthly Community Billing ({safeMembers} &times; ${safePrice}/mo):
          </span>
          <strong className="text-2xl font-extrabold text-slate-900">
            ${grossMonthly.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} / mo
          </strong>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm mb-4">
          <div className="bg-white border border-emerald-300 rounded-lg p-3.5">
            <div className="text-xs font-bold text-emerald-800 uppercase">
              Best Skool Tier: {bestSkoolName}
            </div>
            <div className="text-lg font-extrabold text-slate-900 mt-1">
              Net: ${bestSkoolNet.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}/mo
            </div>
            <div className="text-xs text-slate-600 mt-1">
              Total Fee + Sub: ${bestSkoolCost.toFixed(2)}/mo (Hobby: ${skoolHobbyTotalCost.toFixed(2)} vs Pro: ${skoolProTotalCost.toFixed(2)})
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-lg p-3.5">
            <div className="text-xs font-bold text-slate-700 uppercase">
              Circle Professional (4.9% + $0.30)
            </div>
            <div className="text-lg font-extrabold text-slate-900 mt-1">
              Net: ${circleProNet.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}/mo
            </div>
            <div className="text-xs text-slate-600 mt-1">
              Total Fee + Sub: ${circleProTotalCost.toFixed(2)}/mo (Circle Business: ${circleBizTotalCost.toFixed(2)}/mo)
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-lg p-3.5">
            <div className="text-xs font-bold text-slate-700 uppercase">
              Mighty Networks Courses (4.9% + $0.30)
            </div>
            <div className="text-lg font-extrabold text-slate-900 mt-1">
              Net: ${mightyNet.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}/mo
            </div>
            <div className="text-xs text-slate-600 mt-1">
              Total Fee + Sub: ${mightyTotalCost.toFixed(2)}/mo ($119 sub + ${mightyTxFees.toFixed(2)} fees)
            </div>
          </div>
        </div>

        <div className="text-xs font-semibold text-indigo-900 bg-indigo-50 border border-indigo-200 rounded-lg px-3.5 py-2.5">
          {annualSavingsVsCircle >= 0
            ? `Annual Fee Savings with ${bestSkoolName} vs. Circle Pro: +$${annualSavingsVsCircle.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}/year retained by creator (Scenario #${calcRun}).`
            : `At this volume, Circle Pro costs $${Math.abs(annualSavingsVsCircle).toFixed(2)}/year less than ${bestSkoolName} (Scenario #${calcRun}).`}
        </div>
      </div>
    </div>
  );
}
