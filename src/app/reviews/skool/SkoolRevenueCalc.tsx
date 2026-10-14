'use client';

import React, { useState, useMemo } from 'react';

export default function SkoolRevenueCalc() {
  const [audienceSize, setAudienceSize] = useState<number>(5000);
  const [conversionRate, setConversionRate] = useState<number>(2.0);
  const [subscriptionPrice, setSubscriptionPrice] = useState<number>(49);
  const [churnRate, setChurnRate] = useState<number>(5.0);

  const calc = useMemo(() => {
    /* Safe parsing */
    const audience = Math.max(0, Number(audienceSize) || 0);
    const conv = Math.max(0.1, Math.min(100, Number(conversionRate) || 0));
    const price = Math.max(1, Number(subscriptionPrice) || 0);
    const churn = Math.max(0, Math.min(100, Number(churnRate) || 0));

    /* Active members calculation */
    const activeMembers = Math.round(audience * (conv / 100));
    const grossMRR = activeMembers * price;
    const grossARR = grossMRR * 12;

    /* Fixed platform costs */
    const skoolFee = 99; // Flat $99/month

    /* Variable payment processing (Stripe standard: 2.9% + $0.30 per transaction) */
    const stripeFeePerMember = price * 0.029 + 0.3;
    const totalStripeFees = activeMembers * stripeFeePerMember;

    /* Net monthly profit */
    const totalMonthlyCost = activeMembers > 0 ? skoolFee + totalStripeFees : skoolFee;
    const netMonthlyProfit = Math.max(-skoolFee, grossMRR - totalMonthlyCost);
    const netARR = netMonthlyProfit * 12;
    const profitMargin = grossMRR > 0 ? Math.round((netMonthlyProfit / grossMRR) * 100) : 0;

    /* Breakeven analysis */
    const netPerMember = price - (price * 0.029 + 0.3);
    const breakevenMembers = netPerMember > 0 ? Math.ceil(skoolFee / netPerMember) : 0;

    /* Customer Lifetime Value (LTV) = Monthly Price / Monthly Churn Rate */
    const averageRetentionMonths = churn > 0 ? Math.round((1 / (churn / 100)) * 10) / 10 : 24;
    const customerLTV = Math.round(price * averageRetentionMonths);

    return {
      activeMembers,
      grossMRR,
      grossARR,
      skoolFee,
      totalStripeFees,
      totalMonthlyCost,
      netMonthlyProfit,
      netARR,
      profitMargin,
      breakevenMembers,
      averageRetentionMonths,
      customerLTV,
    };
  }, [audienceSize, conversionRate, subscriptionPrice, churnRate]);

  return (
    <div className="my-10 p-4 sm:p-8 bg-slate-900 text-white rounded-2xl border border-slate-800 shadow-xl max-w-full overflow-hidden box-border" id="skool-calculator">
      <div className="border-b border-slate-800 pb-5 mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-semibold uppercase tracking-wider mb-2">
          Interactive Financial Simulator
        </div>
        <h3 className="text-xl sm:text-2xl font-black text-white">
          Skool Creator Revenue & Profit Simulator (2026)
        </h3>
        <p className="text-slate-400 text-sm mt-1">
          Model your monthly recurring revenue (MRR), Stripe processing overhead, and net creator take-home pay based on Skool’s flat $99/mo pricing structure.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Controls */}
        <div className="space-y-5 bg-slate-950/50 p-5 rounded-xl border border-slate-800/80">
          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label htmlFor="input-audience" className="text-xs font-bold uppercase tracking-wider text-slate-300">
                Audience / Email List Size
              </label>
              <span className="text-sm font-black text-orange-400" id="val-audience">
                {audienceSize.toLocaleString()} contacts
              </span>
            </div>
            <input
              id="input-audience"
              type="range"
              min="200"
              max="50000"
              step="200"
              value={audienceSize}
              onChange={(e) => setAudienceSize(Number(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-orange-500"
            />
            <div className="flex justify-between text-[11px] text-slate-500 mt-1">
              <span>200</span>
              <span>10,000</span>
              <span>25,000</span>
              <span>50,000+</span>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label htmlFor="input-conversion" className="text-xs font-bold uppercase tracking-wider text-slate-300">
                Paid Community Conversion Rate
              </label>
              <span className="text-sm font-black text-orange-400" id="val-conversion">
                {conversionRate.toFixed(1)}%
              </span>
            </div>
            <input
              id="input-conversion"
              type="range"
              min="0.5"
              max="8.0"
              step="0.1"
              value={conversionRate}
              onChange={(e) => setConversionRate(Number(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-orange-500"
            />
            <div className="flex justify-between text-[11px] text-slate-500 mt-1">
              <span>0.5% (Cold)</span>
              <span>2.0% (Average)</span>
              <span>5.0%+ (Engaged)</span>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label htmlFor="input-price" className="text-xs font-bold uppercase tracking-wider text-slate-300">
                Monthly Subscription Price ($/mo)
              </label>
              <span className="text-sm font-black text-orange-400" id="val-price">
                ${subscriptionPrice}/mo
              </span>
            </div>
            <input
              id="input-price"
              type="range"
              min="19"
              max="299"
              step="5"
              value={subscriptionPrice}
              onChange={(e) => setSubscriptionPrice(Number(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-orange-500"
            />
            <div className="flex justify-between text-[11px] text-slate-500 mt-1">
              <span>$19/mo</span>
              <span>$49/mo (Standard)</span>
              <span>$99/mo</span>
              <span>$299/mo (Mastermind)</span>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label htmlFor="input-churn" className="text-xs font-bold uppercase tracking-wider text-slate-300">
                Estimated Monthly Member Churn
              </label>
              <span className="text-sm font-black text-slate-400" id="val-churn">
                {churnRate.toFixed(1)}% / month
              </span>
            </div>
            <input
              id="input-churn"
              type="range"
              min="1.0"
              max="15.0"
              step="0.5"
              value={churnRate}
              onChange={(e) => setChurnRate(Number(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-slate-400"
            />
            <div className="flex justify-between text-[11px] text-slate-500 mt-1">
              <span>1% (High Retention)</span>
              <span>5% (Industry Median)</span>
              <span>15% (High Churn)</span>
            </div>
          </div>
        </div>

        {/* Results Panel */}
        <div className="space-y-4">
          <div className="bg-gradient-to-br from-slate-950 to-slate-900 p-6 rounded-xl border border-orange-500/30">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
              Estimated Net Creator Take-Home Pay
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl sm:text-4xl font-black text-emerald-400" id="result-net-mrr">
                ${Math.max(0, Math.round(calc.netMonthlyProfit)).toLocaleString()}
              </span>
              <span className="text-slate-400 text-sm font-semibold">/ month</span>
            </div>
            <div className="text-xs text-slate-400 mt-1">
              Annualized Run Rate (ARR): <strong className="text-slate-200" id="result-net-arr">${Math.max(0, Math.round(calc.netARR)).toLocaleString()} / year</strong>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-800 grid grid-cols-2 gap-3 text-xs">
              <div>
                <span className="text-slate-400 block">Active Paying Members:</span>
                <strong className="text-slate-100 text-sm" id="result-members">
                  {calc.activeMembers.toLocaleString()} members
                </strong>
              </div>
              <div>
                <span className="text-slate-400 block">Gross Monthly Billings:</span>
                <strong className="text-slate-100 text-sm" id="result-gross-mrr">
                  ${Math.round(calc.grossMRR).toLocaleString()} / mo
                </strong>
              </div>
              <div>
                <span className="text-slate-400 block">Skool Platform Cost:</span>
                <strong className="text-orange-400 text-sm">$99 / mo (Flat)</strong>
              </div>
              <div>
                <span className="text-slate-400 block">Stripe Processing (2.9% + $0.30):</span>
                <strong className="text-slate-300 text-sm" id="result-stripe-fees">
                  ${Math.round(calc.totalStripeFees).toLocaleString()} / mo
                </strong>
              </div>
            </div>
          </div>

          {/* Unit Economics Card */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800">
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Breakeven Member Threshold
              </div>
              <div className="text-xl font-extrabold text-white mt-1" id="result-breakeven">
                {calc.breakevenMembers} {calc.breakevenMembers === 1 ? 'member' : 'members'}
              </div>
              <div className="text-[11px] text-slate-500 mt-1">
                At ${subscriptionPrice}/mo, you only need {calc.breakevenMembers} members to cover the entire Skool $99/mo fee.
              </div>
            </div>

            <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800">
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Net Profit Margin
              </div>
              <div className="text-xl font-extrabold text-emerald-400 mt-1" id="result-margin">
                {calc.profitMargin}%
              </div>
              <div className="text-[11px] text-slate-500 mt-1">
                Avg. Member LTV: ${calc.customerLTV} (~{calc.averageRetentionMonths} months retention).
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
