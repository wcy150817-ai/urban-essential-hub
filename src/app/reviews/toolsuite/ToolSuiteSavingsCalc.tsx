"use client";

import React, { useState } from "react";

export default function ToolSuiteSavingsCalc() {
  const [standaloneSpend, setStandaloneSpend] = useState<number>(210);
  const [months, setMonths] = useState<number>(6);
  const [confidentialData, setConfidentialData] = useState<boolean>(false);

  const spend = Math.max(0, standaloneSpend || 0);
  const m = Math.max(1, Math.min(24, Math.round(months || 6)));
  const bundleCost = 29.95 * m;
  const directCost = spend * m;
  const diff = directCost - bundleCost;

  const cls = "w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-900";
  const lbl = "block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1";

  return (
    <div className="bg-indigo-50/50 border-2 border-indigo-600 rounded-2xl p-5 sm:p-6 my-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label htmlFor="tsDirectSpend" className={lbl}>Current Standalone SaaS Spend ($/mo)</label>
          <input
            id="tsDirectSpend"
            type="number"
            min={0}
            max={2000}
            step={10}
            className={cls}
            value={standaloneSpend}
            onChange={(e) => setStandaloneSpend(parseFloat(e.target.value) || 0)}
          />
        </div>
        <div>
          <label htmlFor="tsMonths" className={lbl}>Evaluation Period (Months)</label>
          <select
            id="tsMonths"
            className={cls}
            value={months}
            onChange={(e) => setMonths(parseInt(e.target.value, 10) || 6)}
          >
            <option value={1}>1 Month (Product Validation Sprint)</option>
            <option value={3}>3 Months (Quarterly Test)</option>
            <option value={6}>6 Months</option>
            <option value={12}>12 Months</option>
          </select>
        </div>
        <div>
          <label htmlFor="tsConfidential" className={lbl}>Uploading Client / NDA Files?</label>
          <select
            id="tsConfidential"
            className={cls}
            value={confidentialData ? "yes" : "no"}
            onChange={(e) => setConfidentialData(e.target.value === "yes")}
          >
            <option value="no">No — Public Ad &amp; Product Research Only</option>
            <option value="yes">Yes — Client Assets, Prompts or Private Data</option>
          </select>
        </div>
      </div>

      <button
        id="tsCalcBtn"
        type="button"
        onClick={() => setStandaloneSpend((v) => v)}
        style={{ backgroundColor: "#4f46e5", color: "#ffffff" }}
        className="mt-5 px-5 py-2.5 rounded-xl font-bold text-sm"
      >
        Evaluate Cost Savings &amp; Privacy Fit &rarr;
      </button>

      <div id="tsCalcResult" className="mt-5 bg-white border border-slate-200 rounded-xl p-4 text-sm text-slate-800 space-y-2">
        <p className="font-bold text-base sm:text-lg text-slate-900">
          {m}-Month Cost Comparison: Direct Licenses ${directCost.toFixed(2)} vs ToolSuite ~${bundleCost.toFixed(2)} ({diff >= 0 ? `Saves ~$${diff.toFixed(2)}` : `Costs ~$${Math.abs(diff).toFixed(2)} more`})
        </p>
        {confidentialData ? (
          <p className="text-rose-700 font-semibold">
            Privacy Warning: Do NOT use shared-session group-buy accounts for client deliverables, private brand kits, or confidential prompts. Pooled workspaces are accessible to other subscribers—purchase individual vendor seats instead.
          </p>
        ) : (
          <p className="text-slate-700">
            Fit Assessment: For read-only public ad-spy and TikTok Shop product discovery, a ~$29.95/mo month-to-month pass reduces fixed research overhead—provided you accept occasional peak-hour AI rate caps and session resets.
          </p>
        )}
      </div>
    </div>
  );
}
