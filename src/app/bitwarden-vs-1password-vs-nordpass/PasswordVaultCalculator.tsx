"use client";

import React, { useState } from "react";

export default function PasswordVaultCalculator() {
  const [planMode, setPlanMode] = useState<"individual" | "family" | "teams" | "business">("family");
  const [seatCount, setSeatCount] = useState<number>(5);
  const [years, setYears] = useState<number>(3);
  const [threatPriority, setThreatPriority] = useState<"secret_key" | "open_source" | "xchacha20">("secret_key");
  const [computed, setComputed] = useState({
    bitwardenTotal: 120,
    onePassTotal: 179.64,
    nordPassTotal: 132.84,
    winnerName: "1Password Families (128-bit Secret Key + AES-256-GCM)",
    winnerReason:
      "Combines your Master Password with a local 34-character Secret Key (>2^128 entropy) + 650,000 PBKDF2-SHA256 iterations, neutralizing offline brute-force attacks even if server vaults were ever exposed.",
    summaryLabel: "5-User Family Vault · 3-Year Total Cost & Cryptographic Match",
  });

  const handleCalculate = () => {
    const cleanSeats = Math.max(1, Math.min(250, Number(seatCount) || 5));
    const cleanYears = Math.max(1, Math.min(5, Number(years) || 3));

    let bwAnnual = 10;
    let opAnnual = 35.88;
    let npAnnual = 23.88;

    if (planMode === "individual") {
      bwAnnual = 10 * cleanSeats;
      opAnnual = 35.88 * cleanSeats;
      npAnnual = 23.88 * cleanSeats;
    } else if (planMode === "family") {
      const familyPacks6 = Math.ceil(cleanSeats / 6);
      bwAnnual = 40 * familyPacks6;
      const extraOpSeats = cleanSeats > 5 ? cleanSeats - 5 : 0;
      opAnnual = 59.88 + extraOpSeats * 12;
      npAnnual = 44.28 * familyPacks6;
    } else if (planMode === "teams") {
      bwAnnual = cleanSeats * 4 * 12;
      opAnnual = cleanSeats <= 10 ? 19.95 * 12 : cleanSeats * 7.99 * 12;
      npAnnual = Math.max(10, cleanSeats) * 1.99 * 12;
    } else {
      bwAnnual = cleanSeats * 6 * 12;
      opAnnual = cleanSeats * 7.99 * 12;
      npAnnual = cleanSeats * 3.99 * 12;
    }

    const bwTotal = Math.round(bwAnnual * cleanYears * 100) / 100;
    const opTotal = Math.round(opAnnual * cleanYears * 100) / 100;
    const npTotal = Math.round(npAnnual * cleanYears * 100) / 100;

    let winnerName = "1Password (Dual-Secret Key Derivation + Travel Mode)";
    let winnerReason =
      "Adds a mandatory device-side 128-bit Secret Key on top of 650,000 PBKDF2-HMAC-SHA256 iterations so server-side ciphertexts cannot be brute-forced with master password dictionaries.";

    if (threatPriority === "open_source") {
      winnerName = "Bitwarden (Open-Source GPLv3 + Argon2id + Docker Self-Host)";
      winnerReason =
        "100% open-source codebase audited by Cure53, native Argon2id memory-hard KDF (64 MB RAM default), and optional Docker self-hosting on your own VPS.";
    } else if (threatPriority === "xchacha20") {
      winnerName = "NordPass (XChaCha20-Poly1305 AEAD + Argon2id)";
      winnerReason =
        "Replaces legacy AES-CBC with 256-bit XChaCha20-Poly1305 (192-bit nonce) and Argon2id key derivation for constant-time software encryption across mobile and desktop.";
    }

    setComputed({
      bitwardenTotal: bwTotal,
      onePassTotal: opTotal,
      nordPassTotal: npTotal,
      winnerName,
      winnerReason,
      summaryLabel: `${cleanSeats} User(s) · ${planMode.toUpperCase()} Tier · ${cleanYears}-Year Cumulative TCO`,
    });
  };

  return (
    <div className="my-8 rounded-2xl border-2 border-indigo-200 bg-indigo-50/60 p-5 sm:p-7 shadow-sm">
      <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-2">
        Interactive Password Manager TCO &amp; Threat-Model Selector (2026)
      </h3>
      <p className="text-sm text-slate-600 mb-5">
        Compare multi-year licensing costs across Individual, Family (5–6 seats), Teams, and Enterprise tiers alongside your preferred cryptographic architecture.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-5">
        <div>
          <label htmlFor="pvPlanMode" className="block text-xs font-bold uppercase tracking-wider text-indigo-950 mb-1.5">
            Plan Tier
          </label>
          <select
            id="pvPlanMode"
            value={planMode}
            onChange={(e) => setPlanMode(e.target.value as "individual" | "family" | "teams" | "business")}
            className="w-full rounded-lg border border-indigo-300 bg-white px-3 py-2.5 text-sm text-slate-900"
          >
            <option value="individual">Individual (Personal)</option>
            <option value="family">Family Plan (5–6 Users)</option>
            <option value="teams">Small Team / Starter</option>
            <option value="business">Enterprise / Business (SSO + SCIM)</option>
          </select>
        </div>

        <div>
          <label htmlFor="pvSeats" className="block text-xs font-bold uppercase tracking-wider text-indigo-950 mb-1.5">
            Total Users / Seats
          </label>
          <input
            id="pvSeats"
            type="number"
            min={1}
            max={250}
            value={seatCount}
            onChange={(e) => setSeatCount(Number(e.target.value))}
            className="w-full rounded-lg border border-indigo-300 bg-white px-3 py-2.5 text-sm text-slate-900"
          />
        </div>

        <div>
          <label htmlFor="pvYears" className="block text-xs font-bold uppercase tracking-wider text-indigo-950 mb-1.5">
            Time Horizon (Years)
          </label>
          <select
            id="pvYears"
            value={years}
            onChange={(e) => setYears(Number(e.target.value))}
            className="w-full rounded-lg border border-indigo-300 bg-white px-3 py-2.5 text-sm text-slate-900"
          >
            <option value={1}>1 Year</option>
            <option value={2}>2 Years</option>
            <option value={3}>3 Years</option>
            <option value={5}>5 Years</option>
          </select>
        </div>

        <div>
          <label htmlFor="pvThreatPriority" className="block text-xs font-bold uppercase tracking-wider text-indigo-950 mb-1.5">
            Primary Security Priority
          </label>
          <select
            id="pvThreatPriority"
            value={threatPriority}
            onChange={(e) => setThreatPriority(e.target.value as "secret_key" | "open_source" | "xchacha20")}
            className="w-full rounded-lg border border-indigo-300 bg-white px-3 py-2.5 text-sm text-slate-900"
          >
            <option value="secret_key">Dual-Secret Key (128-bit Local Key)</option>
            <option value="open_source">Open-Source + Self-Hosted Docker</option>
            <option value="xchacha20">XChaCha20 + Argon2id Simplicity</option>
          </select>
        </div>
      </div>

      <button
        id="pvCalcBtn"
        type="button"
        onClick={handleCalculate}
        className="rounded-xl bg-indigo-600 px-6 py-3 text-sm font-bold text-white shadow hover:bg-indigo-700 transition"
      >
        Calculate Multi-Year Vault TCO &amp; Encryption Fit
      </button>

      <div id="pvResultBox" className="mt-5 rounded-xl border border-indigo-200 bg-white p-5">
        <p className="text-xs font-bold uppercase tracking-wider text-indigo-700 mb-2">{computed.summaryLabel}</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
          <div className="rounded-lg bg-slate-50 p-3.5 border border-slate-200">
            <div className="text-xs font-semibold text-slate-500">Bitwarden Total</div>
            <div className="text-xl font-extrabold text-slate-900">${computed.bitwardenTotal.toFixed(2)}</div>
            <div className="text-xs text-slate-600 mt-0.5">AES-256-CBC · Argon2id / PBKDF2 600k</div>
          </div>
          <div className="rounded-lg bg-indigo-50 p-3.5 border border-indigo-200">
            <div className="text-xs font-semibold text-indigo-700">1Password Total</div>
            <div className="text-xl font-extrabold text-indigo-950">${computed.onePassTotal.toFixed(2)}</div>
            <div className="text-xs text-indigo-800 mt-0.5">AES-256-GCM · 128-bit Secret Key + 650k</div>
          </div>
          <div className="rounded-lg bg-teal-50 p-3.5 border border-teal-200">
            <div className="text-xs font-semibold text-teal-700">NordPass Total</div>
            <div className="text-xl font-extrabold text-teal-950">${computed.nordPassTotal.toFixed(2)}</div>
            <div className="text-xs text-teal-800 mt-0.5">XChaCha20-Poly1305 · Argon2id KDF</div>
          </div>
        </div>
        <p className="text-sm font-bold text-slate-900 mb-1">Recommended Vault Architecture: {computed.winnerName}</p>
        <p className="text-xs text-slate-600 leading-relaxed">{computed.winnerReason}</p>
      </div>
    </div>
  );
}
