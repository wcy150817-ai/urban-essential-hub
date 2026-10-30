"use client";

import React, { useState } from "react";

export default function EnterpriseVaultTcoClient() {
  const [employees, setEmployees] = useState<number>(50);
  const [guestContractors, setGuestContractors] = useState<number>(10);
  const [idpProvider, setIdpProvider] = useState<string>("okta");
  const [onePassQuote, setOnePassQuote] = useState<number>(8.5);
  const [bitwardenQuote, setBitwardenQuote] = useState<number>(6.0);
  const [dashlaneQuote, setDashlaneQuote] = useState<number>(9.0);
  const [calcRun, setCalcRun] = useState<number>(1);

  const safeEmployees = employees > 0 ? employees : 1;
  const safeGuests = guestContractors >= 0 ? guestContractors : 0;
  const safeOnePassRate = onePassQuote > 0 ? onePassQuote : 1;
  const safeBitwardenRate = bitwardenQuote > 0 ? bitwardenQuote : 1;
  const safeDashlaneRate = dashlaneQuote > 0 ? dashlaneQuote : 1;

  // 1Password Business includes up to 20 free guest accounts; extra guests billed at a seat rate
  const extraOnePassGuests = Math.max(0, safeGuests - 20);
  const onePassMonthly = (safeEmployees + extraOnePassGuests) * safeOnePassRate;
  const onePass3YearTco = onePassMonthly * 36;

  // Value of complimentary 1Password Families accounts included for each employee
  // Verified 1Password Families list rate is ~$5.99/mo list ($4.49/mo intro annual)
  const familyBenefit3YearValue = safeEmployees * 4.49 * 36;

  // Bitwarden Enterprise (requires seat per active user/contractor in org vault)
  const bitwardenMonthly = (safeEmployees + safeGuests) * safeBitwardenRate;
  const bitwarden3YearTco = bitwardenMonthly * 36;

  // Dashlane Business / Omnix (note: business plans often enforce a seat floor or minimum seats)
  const dashlaneBillableSeats = Math.max(10, safeEmployees + safeGuests);
  const dashlaneMonthly = dashlaneBillableSeats * safeDashlaneRate;
  const dashlane3YearTco = dashlaneMonthly * 36;

  return (
    <div className="bg-white border-2 border-slate-900 rounded-2xl p-5 sm:p-7 shadow-sm my-8">
      <div className="text-xs font-extrabold uppercase tracking-wider text-indigo-600 mb-1">
        Interactive 3-Year Enterprise Password Manager &amp; SCIM TCO Engine
      </div>
      <h3 className="text-xl font-extrabold text-slate-900 mb-2">
        Model 3-Year Seat Licensing, Guest Accounts &amp; Employee Family Perk Value
      </h3>
      <p className="text-xs text-slate-500 mb-4">
        <em>
          Note: Because enterprise per-seat rates vary by annual commitment, seat volume, and
          regional quote, the monthly seat fields below are fully editable so IT procurement teams
          can plug in their exact vendor quote.
        </em>
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
        <div>
          <label
            htmlFor="empSeatsInput"
            className="block text-xs font-bold text-slate-700 mb-1.5"
          >
            Full-Time Employee Seats
          </label>
          <input
            id="empSeatsInput"
            type="number"
            min={1}
            max={10000}
            value={employees}
            onChange={(e) => setEmployees(Number(e.target.value) || 1)}
            className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm font-semibold text-slate-900"
          />
        </div>

        <div>
          <label
            htmlFor="guestSeatsInput"
            className="block text-xs font-bold text-slate-700 mb-1.5"
          >
            External Contractor / Guest Seats
          </label>
          <input
            id="guestSeatsInput"
            type="number"
            min={0}
            max={1000}
            value={guestContractors}
            onChange={(e) => setGuestContractors(Number(e.target.value) || 0)}
            className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm font-semibold text-slate-900"
          />
        </div>

        <div>
          <label
            htmlFor="idpSelect"
            className="block text-xs font-bold text-slate-700 mb-1.5"
          >
            Identity Provider (SSO + SCIM)
          </label>
          <select
            id="idpSelect"
            value={idpProvider}
            onChange={(e) => setIdpProvider(e.target.value)}
            className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm font-semibold text-slate-900 bg-white"
          >
            <option value="okta">Okta Workforce Identity (SAML + SCIM)</option>
            <option value="entra">Microsoft Entra ID / Azure AD</option>
            <option value="google">Google Workspace + CLI/SSH Secrets</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
        <div>
          <label
            htmlFor="onePassRateInput"
            className="block text-xs font-bold text-slate-700 mb-1"
          >
            1Password Business Quote ($/seat/mo)
          </label>
          <input
            id="onePassRateInput"
            type="number"
            step="0.5"
            min={1}
            max={50}
            value={onePassQuote}
            onChange={(e) => setOnePassQuote(Number(e.target.value) || 1)}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-900 bg-white"
          />
        </div>

        <div>
          <label
            htmlFor="bitwardenRateInput"
            className="block text-xs font-bold text-slate-700 mb-1"
          >
            Bitwarden Enterprise Quote ($/seat/mo)
          </label>
          <input
            id="bitwardenRateInput"
            type="number"
            step="0.5"
            min={1}
            max={50}
            value={bitwardenQuote}
            onChange={(e) => setBitwardenQuote(Number(e.target.value) || 1)}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-900 bg-white"
          />
        </div>

        <div>
          <label
            htmlFor="dashlaneRateInput"
            className="block text-xs font-bold text-slate-700 mb-1"
          >
            Dashlane Business Quote ($/seat/mo)
          </label>
          <input
            id="dashlaneRateInput"
            type="number"
            step="0.5"
            min={1}
            max={50}
            value={dashlaneQuote}
            onChange={(e) => setDashlaneQuote(Number(e.target.value) || 1)}
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-900 bg-white"
          />
        </div>
      </div>

      <button
        type="button"
        id="calcVaultBtn"
        onClick={() => setCalcRun((r) => r + 1)}
        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-xl text-sm transition cursor-pointer mb-5"
      >
        Calculate 3-Year Enterprise TCO &amp; Bundled Family Perk Value
      </button>

      <div
        id="vaultResultBox"
        className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5"
      >
        <div className="flex flex-wrap items-baseline justify-between gap-2 pb-3 mb-4 border-b border-slate-200">
          <span className="text-xs font-bold uppercase tracking-wide text-slate-500">
            Deployment Scope ({safeEmployees} staff + {safeGuests} guests &bull;{" "}
            {idpProvider.toUpperCase()} SCIM):
          </span>
          <strong className="text-lg sm:text-xl font-extrabold text-slate-900">
            36-Month Contract Horizon
          </strong>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm mb-4">
          <div className="bg-white border-2 border-indigo-400 rounded-lg p-3.5">
            <div className="text-xs font-bold text-indigo-800 uppercase">
              1Password Business (20 Free Guests)
            </div>
            <div className="text-lg font-extrabold text-slate-900 mt-1">
              ${onePass3YearTco.toLocaleString("en-US", { maximumFractionDigits: 0 })} / 3 yrs
            </div>
            <div className="text-xs font-semibold text-indigo-700 mt-0.5">
              Monthly: ${onePassMonthly.toFixed(2)}/mo ({safeEmployees + extraOnePassGuests} billed
              seats)
            </div>
            <div className="text-xs text-slate-600 mt-1.5">
              Includes ${familyBenefit3YearValue.toFixed(0)} in free 1Password Families perks ($4.49
              intro / $5.99 list value/emp)
            </div>
          </div>

          <div className="bg-white border-2 border-emerald-400 rounded-lg p-3.5">
            <div className="text-xs font-bold text-emerald-800 uppercase">
              Bitwarden Enterprise (Open-Source)
            </div>
            <div className="text-lg font-extrabold text-slate-900 mt-1">
              ${bitwarden3YearTco.toLocaleString("en-US", { maximumFractionDigits: 0 })} / 3 yrs
            </div>
            <div className="text-xs font-semibold text-emerald-700 mt-0.5">
              Monthly: ${bitwardenMonthly.toFixed(2)}/mo ({safeEmployees + safeGuests} billed seats)
            </div>
            <div className="text-xs text-slate-600 mt-1.5">
              Self-host or Cloud &bull; Argon2id + PBKDF2 &bull; Free Families plan included
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-lg p-3.5">
            <div className="text-xs font-bold text-slate-700 uppercase">
              Dashlane Business / Omnix
            </div>
            <div className="text-lg font-extrabold text-slate-900 mt-1">
              ${dashlane3YearTco.toLocaleString("en-US", { maximumFractionDigits: 0 })} / 3 yrs
            </div>
            <div className="text-xs font-semibold text-slate-700 mt-0.5">
              Monthly: ${dashlaneMonthly.toFixed(2)}/mo ({dashlaneBillableSeats} billed seats)
            </div>
            <div className="text-xs text-slate-600 mt-1.5">
              Confidential computing SSO + anti-phishing credential nudge alerts
            </div>
          </div>
        </div>

        <div className="text-xs font-semibold text-indigo-900 bg-indigo-50 border border-indigo-200 rounded-lg px-3.5 py-2.5">
          Procurement Insight (Run #{calcRun}): Because <strong>1Password Business</strong> includes
          up to <strong>20 external contractor/guest accounts at $0</strong>, your{" "}
          {safeGuests} guest seats add ${extraOnePassGuests * safeOnePassRate}/mo on 1Password vs. $
          {safeGuests * safeBitwardenRate}/mo on Bitwarden—plus every employee receives a linked{" "}
          <strong>1Password Families</strong> account (worth ~$4.49/mo intro to ~$5.99/mo list) at no
          extra charge.
        </div>
      </div>
    </div>
  );
}
