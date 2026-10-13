'use client';

import React, { useState } from 'react';

export default function FoxitCostCalculator() {
  const [seats, setSeats] = useState<number>(50);
  const [termYears, setTermYears] = useState<number>(3);

  /* Published standard commercial annual list prices */
  const ADOBE_ANNUAL_PER_SEAT = 287.88; /* $23.99/mo x 12 */
  const FOXIT_ANNUAL_PER_SEAT = 159.99; /* $13.33/mo x 12 */

  const adobeAnnualTotal = seats * ADOBE_ANNUAL_PER_SEAT;
  const foxitAnnualTotal = seats * FOXIT_ANNUAL_PER_SEAT;
  const annualSavings = adobeAnnualTotal - foxitAnnualTotal;
  const percentageSavings = ((annualSavings / adobeAnnualTotal) * 100).toFixed(1);

  const cumulativeAdobe = adobeAnnualTotal * termYears;
  const cumulativeFoxit = foxitAnnualTotal * termYears;
  const cumulativeSavings = annualSavings * termYears;

  return (
    <div className="w-full max-w-4xl mx-auto my-8 p-6 sm:p-8 bg-slate-900 text-white rounded-2xl shadow-xl border border-slate-800 overflow-x-hidden box-border">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 pb-6 border-b border-slate-800">
        <div>
          <span className="inline-block px-3 py-1 bg-amber-500/20 text-amber-400 font-semibold text-xs tracking-wider uppercase rounded-full mb-2">
            Interactive B2B Financial Model
          </span>
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
            Foxit vs. Adobe Acrobat Enterprise Cost Calculator
          </h3>
          <p className="text-slate-400 text-sm mt-1">
            Calculate licensing expenses and net ROI based on official 2026 commercial team pricing.
          </p>
        </div>
      </div>

      {/* Input Controls */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-slate-800/60 p-4 sm:p-5 rounded-xl border border-slate-700/60">
          <div className="flex justify-between items-center mb-2">
            <label htmlFor="seatSlider" className="text-sm font-semibold text-slate-200">
              Active Enterprise Seats
            </label>
            <span className="text-lg font-bold text-amber-400 font-mono">
              {seats} {seats === 1 ? 'Seat' : 'Seats'}
            </span>
          </div>
          <input
            id="seatSlider"
            type="range"
            min="5"
            max="300"
            step="5"
            value={seats}
            onChange={(e) => setSeats(parseInt(e.target.value, 10))}
            className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
          />
          <div className="flex justify-between text-xs text-slate-400 mt-2 font-mono">
            <span>5 Seats</span>
            <span>50 Seats</span>
            <span>150 Seats</span>
            <span>300 Seats</span>
          </div>
        </div>

        <div className="bg-slate-800/60 p-4 sm:p-5 rounded-xl border border-slate-700/60 flex flex-col justify-between">
          <label className="text-sm font-semibold text-slate-200 mb-2">
            Contract Projection Horizon
          </label>
          <div className="grid grid-cols-3 gap-2">
            {[1, 3, 5].map((yr) => (
              <button
                key={yr}
                type="button"
                onClick={() => setTermYears(yr)}
                className={`py-2 px-3 rounded-lg text-xs sm:text-sm font-bold transition ${
                  termYears === yr
                    ? 'bg-amber-500 text-slate-950 shadow-md'
                    : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                }`}
              >
                {yr} {yr === 1 ? 'Year' : 'Years'}
              </button>
            ))}
          </div>
          <span className="text-xs text-slate-400 mt-2">
            Reflects recurring renewal compounding over time.
          </span>
        </div>
      </div>

      {/* Results Matrix */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div className="bg-slate-800/40 p-4 rounded-xl border border-slate-700/50">
          <span className="text-xs uppercase font-bold text-slate-400 block mb-1">
            Adobe Acrobat Pro
          </span>
          <span className="text-2xl font-extrabold text-slate-200 font-mono block">
            ${cumulativeAdobe.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </span>
          <span className="text-xs text-slate-400 mt-1 block">
            ${adobeAnnualTotal.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}/yr ($287.88/seat)
          </span>
        </div>

        <div className="bg-slate-800/40 p-4 rounded-xl border border-slate-700/50">
          <span className="text-xs uppercase font-bold text-slate-400 block mb-1">
            Foxit PDF Editor Pro
          </span>
          <span className="text-2xl font-extrabold text-amber-400 font-mono block">
            ${cumulativeFoxit.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </span>
          <span className="text-xs text-slate-400 mt-1 block">
            ${foxitAnnualTotal.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}/yr ($159.99/seat)
          </span>
        </div>

        <div className="bg-emerald-950/40 p-4 rounded-xl border border-emerald-500/30">
          <span className="text-xs uppercase font-bold text-emerald-400 block mb-1">
            Cumulative Cost Savings
          </span>
          <span className="text-2xl font-extrabold text-emerald-400 font-mono block">
            ${cumulativeSavings.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </span>
          <span className="text-xs text-emerald-300/80 mt-1 block">
            Save {percentageSavings}% (${annualSavings.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}/yr)
          </span>
        </div>
      </div>

      <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 text-xs sm:text-sm text-slate-300 leading-relaxed">
        <strong>Procurement Insight:</strong> For a {seats}-seat deployment over {termYears} {termYears === 1 ? 'year' : 'years'}, standardizing on Foxit reduces PDF software spend by <span className="text-emerald-400 font-bold">${cumulativeSavings.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span> while delivering identical ISO 32000-2 compliance, SAML 2.0 Okta/Azure SSO, and SCIM automated provisioning.
      </div>
    </div>
  );
}
