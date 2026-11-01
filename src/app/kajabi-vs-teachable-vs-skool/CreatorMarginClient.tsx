"use client";

import React, { useState } from "react";

export default function CreatorMarginClient() {
  const [ticketPrice, setTicketPrice] = useState<number>(197);
  const [monthlySales, setMonthlySales] = useState<number>(60);
  const [emailSubscribers, setEmailSubscribers] = useState<number>(10000);
  const [replaceFunnelStack, setReplaceFunnelStack] = useState<string>("yes");
  const [calcRun, setCalcRun] = useState<number>(1);

  const safePrice = ticketPrice > 0 ? ticketPrice : 1;
  const safeSales = monthlySales > 0 ? monthlySales : 1;
  const safeSubs = emailSubscribers >= 0 ? emailSubscribers : 0;

  const grossMonthly = safePrice * safeSales;
  const gross3Year = grossMonthly * 36;

  // External Email + Funnel SaaS cost if platform does NOT include marketing funnels/email (e.g., Skool / Teachable)
  const externalEmailMonthly =
    replaceFunnelStack === "yes"
      ? safeSubs > 25000
        ? 229
        : safeSubs > 10000
        ? 149
        : safeSubs > 2500
        ? 79
        : 39
      : 0;
  const externalFunnelMonthly = replaceFunnelStack === "yes" ? 97 : 0;
  const externalStackMonthly = externalEmailMonthly + externalFunnelMonthly;

  // 1. Kajabi (Basic $119/mo annual up to 10k contacts / Growth $159/mo annual up to 25k contacts + 0% platform fee + 2.9% + $0.30 Stripe)
  // Replaces external email + funnel builders natively!
  const kajabiSub = safeSubs > 10000 ? 159 : 119;
  const kajabiStripeFees = grossMonthly * 0.029 + safeSales * 0.3;
  const kajabiMonthlyCost = kajabiSub + kajabiStripeFees;
  const kajabi3YearNet = gross3Year - kajabiMonthlyCost * 36;

  // 2. Teachable (Basic $39/mo annual + 5% platform + 2.9% + $0.30 vs Pro $119/mo annual + 0% platform + 2.9% + $0.30)
  // Breakeven between Teachable Basic ($39 + 5%) and Pro ($119 + 0%) is $80 / 0.05 = $1,600/mo gross!
  const teachableBasicCost = 39 + grossMonthly * 0.079 + safeSales * 0.3 + externalEmailMonthly;
  const teachableProCost = 119 + grossMonthly * 0.029 + safeSales * 0.3 + externalEmailMonthly;
  const bestTeachableName =
    teachableBasicCost < teachableProCost
      ? "Teachable Basic ($39/mo + 5%)"
      : "Teachable Pro ($119/mo + 0%)";
  const bestTeachableMonthlyCost = Math.min(teachableBasicCost, teachableProCost);
  const teachable3YearNet = gross3Year - bestTeachableMonthlyCost * 36;

  // 3. Skool (Hobby $9/mo + 10% + $0.30 vs Pro $99/mo + 2.9% + $0.30 [3.9% if ticket > $900])
  const skoolProRate = safePrice > 900 ? 0.039 : 0.029;
  const skoolHobbyCost = 9 + grossMonthly * 0.1 + safeSales * 0.3 + externalStackMonthly;
  const skoolProCost = 99 + grossMonthly * skoolProRate + safeSales * 0.3 + externalStackMonthly;
  const bestSkoolName =
    skoolHobbyCost < skoolProCost ? "Skool Hobby ($9/mo)" : "Skool Pro ($99/mo)";
  const bestSkoolMonthlyCost = Math.min(skoolHobbyCost, skoolProCost);
  const skool3YearNet = gross3Year - bestSkoolMonthlyCost * 36;

  return (
    <div className="bg-white border-2 border-slate-900 rounded-2xl p-5 sm:p-7 shadow-sm my-8">
      <div className="text-xs font-extrabold uppercase tracking-wider text-indigo-600 mb-1">
        Interactive 3-Year Creator Net Margin &amp; SaaS Consolidation Calculator
      </div>
      <h3 className="text-xl font-extrabold text-slate-900 mb-4">
        Compare 36-Month Net Creator Take-Home Across Kajabi, Teachable &amp; Skool
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-5">
        <div>
          <label
            htmlFor="coursePriceInput"
            className="block text-xs font-bold text-slate-700 mb-1.5"
          >
            Course / Membership Price ($)
          </label>
          <input
            id="coursePriceInput"
            type="number"
            min={1}
            max={10000}
            value={ticketPrice}
            onChange={(e) => setTicketPrice(Number(e.target.value) || 1)}
            className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm font-semibold text-slate-900"
          />
        </div>

        <div>
          <label
            htmlFor="monthlySalesInput"
            className="block text-xs font-bold text-slate-700 mb-1.5"
          >
            Monthly Sales / Active Members
          </label>
          <input
            id="monthlySalesInput"
            type="number"
            min={1}
            max={50000}
            value={monthlySales}
            onChange={(e) => setMonthlySales(Number(e.target.value) || 1)}
            className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm font-semibold text-slate-900"
          />
        </div>

        <div>
          <label
            htmlFor="emailListInput"
            className="block text-xs font-bold text-slate-700 mb-1.5"
          >
            Email Subscriber List Size
          </label>
          <input
            id="emailListInput"
            type="number"
            min={0}
            max={250000}
            step={1000}
            value={emailSubscribers}
            onChange={(e) => setEmailSubscribers(Number(e.target.value) || 0)}
            className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm font-semibold text-slate-900"
          />
        </div>

        <div>
          <label
            htmlFor="funnelReplaceSelect"
            className="block text-xs font-bold text-slate-700 mb-1.5"
          >
            Need External Email + Funnels?
          </label>
          <select
            id="funnelReplaceSelect"
            value={replaceFunnelStack}
            onChange={(e) => setReplaceFunnelStack(e.target.value)}
            className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm font-semibold text-slate-900 bg-white"
          >
            <option value="yes">Yes (Kajabi replaces ESP + Funnel SaaS)</option>
            <option value="no">No (Community/Course checkout only)</option>
          </select>
        </div>
      </div>

      <button
        type="button"
        id="calcCreatorMarginBtn"
        onClick={() => setCalcRun((r) => r + 1)}
        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-xl text-sm transition cursor-pointer mb-5"
      >
        Calculate 3-Year Creator Net Margin &amp; Transaction Fee Drag
      </button>

      <div
        id="creatorMarginResultBox"
        className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5"
      >
        <div className="flex flex-wrap items-baseline justify-between gap-2 pb-3 mb-4 border-b border-slate-200">
          <span className="text-xs font-bold uppercase tracking-wide text-slate-500">
            Gross Revenue ({safeSales} sales/mo &times; ${safePrice} = $
            {grossMonthly.toLocaleString("en-US")}/mo):
          </span>
          <strong className="text-xl sm:text-2xl font-extrabold text-slate-900">
            3-Year Gross: ${gross3Year.toLocaleString("en-US")}
          </strong>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm mb-4">
          <div className="bg-white border-2 border-indigo-400 rounded-lg p-3.5">
            <div className="text-xs font-bold text-indigo-800 uppercase">
              Kajabi ({safeSubs > 10000 ? "Growth $159" : "Basic $119"} + 0% Fee)
            </div>
            <div className="text-lg font-extrabold text-slate-900 mt-1">
              3-Yr Net: ${kajabi3YearNet.toLocaleString("en-US", { maximumFractionDigits: 0 })}
            </div>
            <div className="text-xs font-semibold text-indigo-700 mt-0.5">
              Total Drag: ${kajabiMonthlyCost.toFixed(2)}/mo (Includes Email + Funnels)
            </div>
            <div className="text-xs text-slate-600 mt-1.5">
              Saves ${externalStackMonthly}/mo in external ESP &amp; landing page tools
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-lg p-3.5">
            <div className="text-xs font-bold text-slate-700 uppercase">
              {bestTeachableName}
            </div>
            <div className="text-lg font-extrabold text-slate-900 mt-1">
              3-Yr Net: ${teachable3YearNet.toLocaleString("en-US", { maximumFractionDigits: 0 })}
            </div>
            <div className="text-xs font-semibold text-slate-700 mt-0.5">
              Total Drag: ${bestTeachableMonthlyCost.toFixed(2)}/mo (Incl. ${externalEmailMonthly}{" "}
              ESP)
            </div>
            <div className="text-xs text-slate-600 mt-1.5">
              Automated US/EU/UK Sales Tax &amp; VAT Merchant-of-Record checkout
            </div>
          </div>

          <div className="bg-white border-2 border-emerald-400 rounded-lg p-3.5">
            <div className="text-xs font-bold text-emerald-800 uppercase">
              {bestSkoolName}
            </div>
            <div className="text-lg font-extrabold text-slate-900 mt-1">
              3-Yr Net: ${skool3YearNet.toLocaleString("en-US", { maximumFractionDigits: 0 })}
            </div>
            <div className="text-xs font-semibold text-emerald-700 mt-0.5">
              Total Drag: ${bestSkoolMonthlyCost.toFixed(2)}/mo (Incl. ${externalStackMonthly} ext
              stack)
            </div>
            <div className="text-xs text-slate-600 mt-1.5">
              Highest cohort completion &amp; gamified leaderboard retention
            </div>
          </div>
        </div>

        <div className="text-xs font-semibold text-indigo-900 bg-indigo-50 border border-indigo-200 rounded-lg px-3.5 py-2.5">
          Unit-Economics Verdict (Run #{calcRun}):{" "}
          {replaceFunnelStack === "yes"
            ? `When consolidating email marketing (${safeSubs.toLocaleString("en-US")} contacts) and sales funnels, Kajabi eliminates ~$${(externalStackMonthly * 12).toLocaleString("en-US")}/yr in third-party SaaS bills while charging 0% platform transaction fees.`
            : `When you do not need external email/funnel SaaS, ${bestSkoolName} delivers the lowest total monthly cost ($${bestSkoolMonthlyCost.toFixed(2)}/mo) and highest community retention.`}
        </div>
      </div>
    </div>
  );
}
