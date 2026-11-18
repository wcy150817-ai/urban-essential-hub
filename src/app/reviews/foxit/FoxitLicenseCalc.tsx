"use client";

import React, { useState } from "react";

export default function FoxitLicenseCalc() {
  const [seats, setSeats] = useState<number>(5);
  const [years, setYears] = useState<number>(3);
  const [needEsign, setNeedEsign] = useState<boolean>(false);

  const s = Math.max(1, Math.round(seats || 1));
  const y = Math.max(1, Math.min(5, Math.round(years || 3)));

  const foxitSubRate = needEsign ? 159.99 : 129.99;
  const foxitSubTotal = s * foxitSubRate * y;
  const foxitPerpTotal = s * 209.99 + (needEsign ? s * 120 * y : 0);
  const adobeTotal = s * 239.88 * y;

  const bestFoxit = Math.min(foxitSubTotal, foxitPerpTotal);
  const savingsVsAdobe = adobeTotal - bestFoxit;

  const cls = "w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-900";
  const lbl = "block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1";

  return (
    <div className="bg-amber-50/50 border-2 border-amber-500 rounded-2xl p-5 sm:p-6 my-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label htmlFor="fxSeats" className={lbl}>Team Seats</label>
          <input
            id="fxSeats"
            type="number"
            min={1}
            max={500}
            className={cls}
            value={seats}
            onChange={(e) => setSeats(parseFloat(e.target.value) || 1)}
          />
        </div>
        <div>
          <label htmlFor="fxYears" className={lbl}>Planning Horizon (Years)</label>
          <select
            id="fxYears"
            className={cls}
            value={years}
            onChange={(e) => setYears(parseInt(e.target.value, 10) || 3)}
          >
            <option value={1}>1 Year</option>
            <option value={2}>2 Years</option>
            <option value={3}>3 Years</option>
            <option value={4}>4 Years</option>
            <option value={5}>5 Years</option>
          </select>
        </div>
        <div>
          <label htmlFor="fxEsign" className={lbl}>Mobile Apps + eSign Needed?</label>
          <select
            id="fxEsign"
            className={cls}
            value={needEsign ? "yes" : "no"}
            onChange={(e) => setNeedEsign(e.target.value === "yes")}
          >
            <option value="no">Desktop PDF + OCR Only</option>
            <option value="yes">Yes (Editor+ w/ Mobile &amp; eSign)</option>
          </select>
        </div>
      </div>

      <button
        id="fxCalcBtn"
        type="button"
        onClick={() => setSeats((v) => v)}
        style={{ backgroundColor: "#d97706", color: "#ffffff" }}
        className="mt-5 px-5 py-2.5 rounded-xl font-bold text-sm"
      >
        Compare Multi-Year PDF Seat TCO &rarr;
      </button>

      <div id="fxCalcResult" className="mt-5 bg-white border border-slate-200 rounded-xl p-4 text-sm text-slate-800 space-y-2">
        <p className="font-bold text-base sm:text-lg text-slate-900">
          {s} Seat{s === 1 ? "" : "s"} Over {y} Year{y === 1 ? "" : "s"}: Lowest Foxit Option Saves ~${Math.max(0, savingsVsAdobe).toFixed(0)} vs Adobe Acrobat Pro
        </p>
        <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-slate-700">
          <li>
            <strong>Foxit Annual Subscription ({needEsign ? "PDF Editor+ ~$159.99/yr" : "PDF Editor Standard ~$129.99/yr"}):</strong>{" "}
            ${foxitSubTotal.toFixed(2)} total
          </li>
          <li>
            <strong>Foxit Perpetual Desktop (~$209.99 one-time{needEsign ? " + standalone eSign ~$120/yr" : ", single major version"}):</strong>{" "}
            ${foxitPerpTotal.toFixed(2)} total
          </li>
          <li>
            <strong>Adobe Acrobat Pro Annual Benchmark (~$239.88/seat/yr):</strong> ${adobeTotal.toFixed(2)} total
          </li>
        </ul>
        <p className="text-xs text-slate-500">
          Illustrative arithmetic using November 2026 reported list prices before volume discounts or sales tax; confirm live seat pricing on each vendor&apos;s checkout page.
        </p>
      </div>
    </div>
  );
}
