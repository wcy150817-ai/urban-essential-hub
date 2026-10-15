'use client';

import React, { useState, useMemo } from 'react';

export default function AlertsifyExecutionCalc() {
  const [monthlyTrades, setMonthlyTrades] = useState<number>(30);
  const [contractCount, setContractCount] = useState<number>(5);
  const [avgSlippageCents, setAvgSlippageCents] = useState<number>(12);
  const [planCost, setPlanCost] = useState<number>(99);

  const calc = useMemo(() => {
    const trades = Math.max(1, Number(monthlyTrades) || 1);
    const contracts = Math.max(1, Number(contractCount) || 1);
    const slippagePerContract = (Math.max(1, Number(avgSlippageCents) || 1)) / 100 * 100; // cents * 100 multiplier per option contract
    const subCost = Math.max(0, Number(planCost) || 0);

    /* Monthly slippage cost in dollars: trades * contracts * ($0.12 * 100 shares = $12 per contract) */
    const slippageLossPerTrade = contracts * slippagePerContract;
    const monthlySlippageBleed = trades * slippageLossPerTrade;
    const annualSlippageBleed = monthlySlippageBleed * 12;

    /* Net monthly benefit assuming 80% slippage recovery with sub-300ms automated execution */
    const recoveredSlippage = monthlySlippageBleed * 0.8;
    const netMonthlyBenefit = recoveredSlippage - subCost;
    const netAnnualBenefit = netMonthlyBenefit * 12;

    /* Breakeven trades required to cover subscription */
    const breakevenTrades = recoveredSlippage > 0 ? Math.ceil(subCost / (slippageLossPerTrade * 0.8)) : 0;

    return {
      slippageLossPerTrade,
      monthlySlippageBleed,
      annualSlippageBleed,
      recoveredSlippage,
      netMonthlyBenefit,
      netAnnualBenefit,
      breakevenTrades,
    };
  }, [monthlyTrades, contractCount, avgSlippageCents, planCost]);

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 my-8 text-slate-100 shadow-xl">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4 mb-6">
        <div>
          <span className="text-xs uppercase tracking-wider font-bold text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded">
            Interactive Trader Tool
          </span>
          <h3 className="text-xl font-bold text-white mt-1">
            Execution Latency &amp; Slippage Bleed Calculator
          </h3>
        </div>
        <span className="text-xs text-slate-400">Measure options delay costs vs sub-second webhooks</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1.5" htmlFor="inputMonthlyTrades">
            Monthly Trades Executed:
          </label>
          <input
            id="inputMonthlyTrades"
            type="number"
            min={1}
            max={500}
            value={monthlyTrades}
            onChange={(e) => setMonthlyTrades(Number(e.target.value))}
            className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white font-mono focus:outline-none focus:border-emerald-500"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1.5" htmlFor="inputContracts">
            Avg Contracts Per Order:
          </label>
          <input
            id="inputContracts"
            type="number"
            min={1}
            max={100}
            value={contractCount}
            onChange={(e) => setContractCount(Number(e.target.value))}
            className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white font-mono focus:outline-none focus:border-emerald-500"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1.5" htmlFor="inputSlippage">
            Manual Lag Slippage (Cents/Contract):
          </label>
          <input
            id="inputSlippage"
            type="number"
            min={1}
            max={100}
            value={avgSlippageCents}
            onChange={(e) => setAvgSlippageCents(Number(e.target.value))}
            className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white font-mono focus:outline-none focus:border-emerald-500"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1.5" htmlFor="inputPlanCost">
            Software Monthly Cost ($):
          </label>
          <input
            id="inputPlanCost"
            type="number"
            min={0}
            max={500}
            value={planCost}
            onChange={(e) => setPlanCost(Number(e.target.value))}
            className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white font-mono focus:outline-none focus:border-emerald-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-slate-800/80 border border-slate-700 rounded-lg p-4 text-center">
        <div>
          <span className="block text-xs uppercase tracking-wider text-rose-400 font-bold">
            Monthly Slippage Loss
          </span>
          <div id="dispSlippageLoss" className="text-2xl font-extrabold text-rose-400 font-mono my-1">
            ${calc.monthlySlippageBleed.toFixed(2)}
          </div>
          <span className="text-xs text-slate-400">
            ${calc.annualSlippageBleed.toFixed(0)} lost per year to execution delays
          </span>
        </div>

        <div>
          <span className="block text-xs uppercase tracking-wider text-emerald-400 font-bold">
            Est. Net Monthly Benefit
          </span>
          <div id="dispNetBenefit" className="text-2xl font-extrabold text-emerald-400 font-mono my-1">
            ${calc.netMonthlyBenefit.toFixed(2)}
          </div>
          <span className="text-xs text-slate-400">
            Net savings after ${planCost}/mo software fee
          </span>
        </div>

        <div>
          <span className="block text-xs uppercase tracking-wider text-sky-400 font-bold">
            Breakeven Order Volume
          </span>
          <div id="dispBreakeven" className="text-2xl font-extrabold text-sky-400 font-mono my-1">
            {calc.breakevenTrades} trades
          </div>
          <span className="text-xs text-slate-400">
            Orders needed each month to pay for automated tooling
          </span>
        </div>
      </div>
    </div>
  );
}
