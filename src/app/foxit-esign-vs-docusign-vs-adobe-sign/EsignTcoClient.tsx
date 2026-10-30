"use client";

import React, { useState } from "react";

export default function EsignTcoClient() {
  const [senderSeats, setSenderSeats] = useState<number>(10);
  const [annualEnvelopes, setAnnualEnvelopes] = useState<number>(2400);
  const [complianceLevel, setComplianceLevel] = useState<string>("hipaa");
  const [needPdfEditor, setNeedPdfEditor] = useState<string>("yes");
  const [calcRun, setCalcRun] = useState<number>(1);

  const safeSeats = senderSeats > 0 ? senderSeats : 1;
  const safeEnvelopes = annualEnvelopes > 0 ? annualEnvelopes : 100;

  // 1. Foxit eSign Enterprise / Pro (~$25/user/mo = $300/seat/yr w/ 250 envelopes/seat/yr pooled + HIPAA BAA included)
  // If bundled with Foxit PDF Editor+ (~$159–$190/seat/yr total or ~$300/yr combined enterprise suite), massive savings
  const foxitIncludedEnvelopes = safeSeats * 250;
  const foxitExtraEnvelopes = Math.max(0, safeEnvelopes - foxitIncludedEnvelopes);
  const foxitBaseSeatAnnual = needPdfEditor === "yes" ? 320 : 300;
  const foxitOverageCost = foxitExtraEnvelopes * 1.25;
  const foxitAnnualTco = safeSeats * foxitBaseSeatAnnual + foxitOverageCost;

  // 2. DocuSign Business Pro ($40/user/mo annual = $480/seat/yr, strictly capped at 100 envelopes/seat/yr)
  // HIPAA BAA or >100 env/seat requires custom Enterprise quote or ~$3.50/envelope overage + separate PDF editor
  const docusignIncludedEnvelopes = safeSeats * 100;
  const docusignExtraEnvelopes = Math.max(0, safeEnvelopes - docusignIncludedEnvelopes);
  const docusignSeatRateAnnual = complianceLevel === "hipaa" ? 660 : 480; // HIPAA requires Enterprise tier uplift
  const docusignOverageCost = docusignExtraEnvelopes * 3.5;
  const externalPdfEditorAnnual = needPdfEditor === "yes" ? safeSeats * 180 : 0;
  const docusignAnnualTco =
    safeSeats * docusignSeatRateAnnual + docusignOverageCost + externalPdfEditorAnnual;

  // 3. Adobe Acrobat Pro / Acrobat Sign Solutions
  // Standard Acrobat Pro ($23.99/mo = $287.88/yr) includes basic e-sign, while HIPAA / 150-env/yr Acrobat Sign Business is ~$420-$540/seat/yr
  const adobeIncludedEnvelopes = safeSeats * 150;
  const adobeExtraEnvelopes = Math.max(0, safeEnvelopes - adobeIncludedEnvelopes);
  const adobeSeatRateAnnual = complianceLevel === "hipaa" ? 500 : 288;
  const adobeOverageCost = adobeExtraEnvelopes * 2.75;
  const adobeAnnualTco = safeSeats * adobeSeatRateAnnual + adobeOverageCost;

  const savingsVsDocusign = docusignAnnualTco - foxitAnnualTco;

  return (
    <div className="bg-white border-2 border-slate-900 rounded-2xl p-5 sm:p-7 shadow-sm my-8">
      <div className="text-xs font-extrabold uppercase tracking-wider text-indigo-600 mb-1">
        Interactive eSignature Envelope Cap &amp; Compliance TCO Calculator
      </div>
      <h3 className="text-xl font-extrabold text-slate-900 mb-4">
        Model Annual Envelope Overage Charges Across Foxit eSign, DocuSign &amp; Adobe Acrobat Sign
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-5">
        <div>
          <label
            htmlFor="esignSeatsInput"
            className="block text-xs font-bold text-slate-700 mb-1.5"
          >
            Sender Seats (Users)
          </label>
          <input
            id="esignSeatsInput"
            type="number"
            min={1}
            max={500}
            value={senderSeats}
            onChange={(e) => setSenderSeats(Number(e.target.value) || 1)}
            className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm font-semibold text-slate-900"
          />
        </div>

        <div>
          <label
            htmlFor="envelopesInput"
            className="block text-xs font-bold text-slate-700 mb-1.5"
          >
            Total Annual Envelopes Sent
          </label>
          <input
            id="envelopesInput"
            type="number"
            min={50}
            max={250000}
            step={100}
            value={annualEnvelopes}
            onChange={(e) => setAnnualEnvelopes(Number(e.target.value) || 50)}
            className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm font-semibold text-slate-900"
          />
        </div>

        <div>
          <label
            htmlFor="complianceSelect"
            className="block text-xs font-bold text-slate-700 mb-1.5"
          >
            Compliance Mandate
          </label>
          <select
            id="complianceSelect"
            value={complianceLevel}
            onChange={(e) => setComplianceLevel(e.target.value)}
            className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm font-semibold text-slate-900 bg-white"
          >
            <option value="standard">ESIGN / UETA / SOC 2 Type II</option>
            <option value="hipaa">HIPAA BAA / 21 CFR Part 11</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="pdfEditorSelect"
            className="block text-xs font-bold text-slate-700 mb-1.5"
          >
            Desktop PDF Editor Required?
          </label>
          <select
            id="pdfEditorSelect"
            value={needPdfEditor}
            onChange={(e) => setNeedPdfEditor(e.target.value)}
            className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm font-semibold text-slate-900 bg-white"
          >
            <option value="yes">Yes (Include PDF Editor + Redaction)</option>
            <option value="no">No (Browser eSignature Only)</option>
          </select>
        </div>
      </div>

      <button
        type="button"
        id="calcEsignBtn"
        onClick={() => setCalcRun((r) => r + 1)}
        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-xl text-sm transition cursor-pointer mb-5"
      >
        Calculate Annual Envelope Allowance, Overage Fees &amp; 3-Platform TCO
      </button>

      <div
        id="esignResultBox"
        className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5"
      >
        <div className="flex flex-wrap items-baseline justify-between gap-2 pb-3 mb-4 border-b border-slate-200">
          <span className="text-xs font-bold uppercase tracking-wide text-slate-500">
            Company Envelope Velocity ({safeEnvelopes.toLocaleString("en-US")} envelopes/yr across{" "}
            {safeSeats} seats = {Math.round(safeEnvelopes / safeSeats)}/seat/yr):
          </span>
          <strong className="text-lg sm:text-xl font-extrabold text-slate-900">
            DocuSign 100-Env Cap:{" "}
            {docusignExtraEnvelopes > 0
              ? `Exceeded by +${docusignExtraEnvelopes.toLocaleString("en-US")} envelopes!`
              : "Within 100/seat cap"}
          </strong>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm mb-4">
          <div className="bg-white border-2 border-emerald-400 rounded-lg p-3.5">
            <div className="text-xs font-bold text-emerald-800 uppercase">
              Foxit eSign Pro {needPdfEditor === "yes" ? "+ PDF Editor" : ""}
            </div>
            <div className="text-lg font-extrabold text-slate-900 mt-1">
              ${foxitAnnualTco.toLocaleString("en-US", { maximumFractionDigits: 0 })} / yr
            </div>
            <div className="text-xs font-semibold text-emerald-700 mt-0.5">
              Effective: ${(foxitAnnualTco / safeEnvelopes).toFixed(2)} / envelope
            </div>
            <div className="text-xs text-slate-600 mt-1.5">
              Includes {foxitIncludedEnvelopes.toLocaleString("en-US")} env/yr (250/seat) + HIPAA
              BAA &bull; Overage: ${foxitOverageCost.toFixed(0)}
            </div>
          </div>

          <div className="bg-white border-2 border-indigo-300 rounded-lg p-3.5">
            <div className="text-xs font-bold text-indigo-800 uppercase">
              Adobe Acrobat Pro + Sign
            </div>
            <div className="text-lg font-extrabold text-slate-900 mt-1">
              ${adobeAnnualTco.toLocaleString("en-US", { maximumFractionDigits: 0 })} / yr
            </div>
            <div className="text-xs font-semibold text-indigo-700 mt-0.5">
              Effective: ${(adobeAnnualTco / safeEnvelopes).toFixed(2)} / envelope
            </div>
            <div className="text-xs text-slate-600 mt-1.5">
              Includes {adobeIncludedEnvelopes.toLocaleString("en-US")} env/yr + native Acrobat PDF
              suite &bull; Overage: ${adobeOverageCost.toFixed(0)}
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-lg p-3.5">
            <div className="text-xs font-bold text-slate-700 uppercase">
              DocuSign ({complianceLevel === "hipaa" ? "Enterprise HIPAA" : "Business Pro"})
            </div>
            <div className="text-lg font-extrabold text-slate-900 mt-1">
              ${docusignAnnualTco.toLocaleString("en-US", { maximumFractionDigits: 0 })} / yr
            </div>
            <div className="text-xs font-semibold text-slate-700 mt-0.5">
              Effective: ${(docusignAnnualTco / safeEnvelopes).toFixed(2)} / envelope
            </div>
            <div className="text-xs text-slate-600 mt-1.5">
              Capped at {docusignIncludedEnvelopes.toLocaleString("en-US")} env/yr (100/seat) &bull;
              Overage + PDF tool: ${(docusignOverageCost + externalPdfEditorAnnual).toFixed(0)}
            </div>
          </div>
        </div>

        <div className="text-xs font-semibold text-indigo-900 bg-indigo-50 border border-indigo-200 rounded-lg px-3.5 py-2.5">
          Envelope Cap Audit (Run #{calcRun}): Because DocuSign caps self-serve plans at{" "}
          <strong>100 envelopes per user per year (~8.3 envelopes/month)</strong>, sending{" "}
          {safeEnvelopes.toLocaleString("en-US")} annual agreements triggers{" "}
          <strong>{docusignExtraEnvelopes.toLocaleString("en-US")} overage envelopes</strong>.
          Consolidating onto Foxit or Adobe Acrobat saves up to{" "}
          <strong>${Math.max(0, savingsVsDocusign).toLocaleString("en-US", { maximumFractionDigits: 0 })}/year</strong>.
        </div>
      </div>
    </div>
  );
}
