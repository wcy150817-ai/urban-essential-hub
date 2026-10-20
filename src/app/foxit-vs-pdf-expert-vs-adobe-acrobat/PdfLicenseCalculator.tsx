'use client';

import React, { useState } from 'react';

export default function PdfLicenseCalculator() {
  const [seats, setSeats] = useState<number>(15);
  const [osMix, setOsMix] = useState<string>('mixed');
  const [redactionNeed, setRedactionNeed] = useState<string>('legal_bates');
  const [years, setYears] = useState<number>(3);
  const [calcTrigger, setCalcTrigger] = useState<number>(0);

  const safeSeats = seats > 0 ? seats : 1;
  const safeYears = years > 0 ? years : 1;

  const adobeAnnualPerSeat = 287.88;
  const foxitBasePerSeat = 129.99;
  const foxitPlusPerSeat = 159.99;
  const pdfExpertAnnualPerSeat = 79.99;
  const pdfExpertLifetimePerSeat = 139.99;

  const foxitRate = redactionNeed === 'legal_bates' ? foxitPlusPerSeat : foxitBasePerSeat;

  const adobeTotal = Math.round(safeSeats * adobeAnnualPerSeat * safeYears);
  const foxitTotal = Math.round(safeSeats * foxitRate * safeYears);
  const pdfExpertSubTotal = Math.round(safeSeats * pdfExpertAnnualPerSeat * safeYears);
  const pdfExpertLifeTotal = Math.round(safeSeats * pdfExpertLifetimePerSeat);

  const foxitSavings = adobeTotal - foxitTotal;
  const pdfExpertSubSavings = adobeTotal - pdfExpertSubTotal;

  let recommendedTool = 'Foxit PDF Editor+ (Cross-Platform Team Suite)';
  let recommendedNote =
    'Required for mixed Windows + macOS teams or legal/accounting workflows needing ISO 32000-2 permanent redaction, bulk regex search-and-redact, and Bates numbering.';

  if (osMix === 'mac_only' && redactionNeed === 'basic_redact') {
    recommendedTool = 'PDF Expert Pro by Readdle (Apple Silicon Native)';
    recommendedNote =
      'All-Mac / iPadOS team without bulk Bates numbering requirements: saves up to 72% vs Adobe Acrobat Pro while delivering ultra-fast Metal-accelerated PDF editing and area redaction.';
  } else if (osMix === 'mac_only' && redactionNeed === 'legal_bates') {
    recommendedTool = 'Foxit PDF Editor+ for Mac (Bates & Bulk Redaction)';
    recommendedNote =
      'Even on an all-Mac team, PDF Expert lacks multi-file Bates numbering and regex pattern sanitization—making Foxit PDF Editor+ ($159.99/yr) the lowest-cost compliant alternative to Acrobat Pro ($287.88/yr).';
  }

  return (
    <div className="my-8 rounded-2xl border-2 border-indigo-600 bg-white p-5 sm:p-7 shadow-md max-w-full overflow-hidden">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-4 mb-5">
        <div>
          <span className="inline-block rounded-full bg-indigo-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-indigo-800 mb-1">
            Interactive TCO &amp; Redaction Fit Calculator
          </span>
          <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">
            Small Business PDF Licensing &amp; 3-Year Savings Estimator
          </h3>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
        <div>
          <label htmlFor="teamSeatsInput" className="block text-xs sm:text-sm font-bold text-slate-800 mb-1">
            1. Number of Licensed Team Seats
          </label>
          <input
            id="teamSeatsInput"
            type="number"
            min={1}
            max={500}
            value={seats}
            onChange={(e) => setSeats( parseInt(e.target.value, 10) || 1 )}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-indigo-600 focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="osMixSelect" className="block text-xs sm:text-sm font-bold text-slate-800 mb-1">
            2. Workstation Operating System Environment
          </label>
          <select
            id="osMixSelect"
            value={osMix}
            onChange={(e) => setOsMix(e.target.value)}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 bg-white focus:border-indigo-600 focus:outline-none"
          >
            <option value="mixed">Mixed Windows + macOS (or Windows Only)</option>
            <option value="mac_only">100% Apple Ecosystem (macOS + iPadOS Only)</option>
          </select>
        </div>

        <div>
          <label htmlFor="redactionNeedSelect" className="block text-xs sm:text-sm font-bold text-slate-800 mb-1">
            3. Redaction &amp; Compliance Workflow Level
          </label>
          <select
            id="redactionNeedSelect"
            value={redactionNeed}
            onChange={(e) => setRedactionNeed(e.target.value)}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 bg-white focus:border-indigo-600 focus:outline-none"
          >
            <option value="legal_bates">Legal / Finance: Permanent Redaction + Bates + Metadata Sanitization</option>
            <option value="basic_redact">Standard Business: Single-Document Text Redact + OCR + eSign</option>
          </select>
        </div>

        <div>
          <label htmlFor="yearsSelect" className="block text-xs sm:text-sm font-bold text-slate-800 mb-1">
            4. Contract Evaluation Horizon (Years)
          </label>
          <select
            id="yearsSelect"
            value={years}
            onChange={(e) => setYears(parseInt(e.target.value, 10) || 3)}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 bg-white focus:border-indigo-600 focus:outline-none"
          >
            <option value={1}>1-Year Annual Budget</option>
            <option value={3}>3-Year Total Cost of Ownership (TCO)</option>
            <option value={5}>5-Year Total Cost of Ownership (TCO)</option>
          </select>
        </div>
      </div>

      <button
        id="calcPdfBtn"
        type="button"
        onClick={() => setCalcTrigger((prev) => prev + 1)}
        className="w-full rounded-lg bg-indigo-600 px-4 py-3 text-sm font-bold text-white shadow hover:bg-indigo-700 transition mb-5 cursor-pointer"
      >
        Calculate {safeSeats}-Seat PDF Licensing TCO &amp; Redaction Match
      </button>

      <div
        id="pdfCalcResult"
        data-calc-run={calcTrigger}
        className="rounded-xl bg-slate-50 border border-indigo-200 p-4 sm:p-5"
      >
        <div className="text-xs font-bold uppercase tracking-wider text-indigo-700 mb-1">
          Optimal Procurement Recommendation ({safeSeats} Seats &bull; {safeYears}-Year Horizon)
        </div>
        <div className="text-base sm:text-lg font-extrabold text-slate-900 mb-1">
          {recommendedTool}
        </div>
        <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed">
          {recommendedNote}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs sm:text-sm border-t border-slate-200 pt-4">
          <div className="bg-white p-3 rounded-lg border border-slate-200">
            <div className="text-slate-500 font-semibold">Adobe Acrobat Pro Teams</div>
            <div className="text-base font-extrabold text-slate-900 mt-1">${adobeTotal.toLocaleString()}</div>
            <div className="text-[11px] text-slate-500">$287.88 / seat / yr</div>
          </div>

          <div className="bg-white p-3 rounded-lg border border-emerald-300">
            <div className="text-emerald-800 font-semibold">Foxit PDF Editor ({redactionNeed === 'legal_bates' ? 'Editor+' : 'Base'})</div>
            <div className="text-base font-extrabold text-emerald-700 mt-1">${foxitTotal.toLocaleString()}</div>
            <div className="text-[11px] text-emerald-700 font-semibold">Saves ${foxitSavings.toLocaleString()} vs Adobe</div>
          </div>

          <div className="bg-white p-3 rounded-lg border border-slate-200">
            <div className="text-slate-700 font-semibold">PDF Expert Pro (Annual)</div>
            <div className="text-base font-extrabold text-slate-900 mt-1">
              {osMix === 'mac_only' ? `$${pdfExpertSubTotal.toLocaleString()}` : 'Mac/iOS Only'}
            </div>
            <div className="text-[11px] text-slate-500">
              {osMix === 'mac_only' ? `Saves $${pdfExpertSubSavings.toLocaleString()} ($79.99/yr)` : 'Not compatible with Windows'}
            </div>
          </div>

          <div className="bg-white p-3 rounded-lg border border-slate-200">
            <div className="text-slate-700 font-semibold">PDF Expert Lifetime (Mac)</div>
            <div className="text-base font-extrabold text-slate-900 mt-1">
              {osMix === 'mac_only' ? `$${pdfExpertLifeTotal.toLocaleString()}` : 'Mac Only'}
            </div>
            <div className="text-[11px] text-slate-500">$139.99 one-time (no iPad/AI)</div>
          </div>
        </div>
      </div>
    </div>
  );
}
