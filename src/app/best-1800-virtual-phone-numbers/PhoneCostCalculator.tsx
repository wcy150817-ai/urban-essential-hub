"use client";

import React, { useState } from "react";
import { Calculator } from "lucide-react";

export default function PhoneCostCalculator() {
  const [seats, setSeats] = useState<number>(4);
  const [numbersCount, setNumbersCount] = useState<number>(3);
  const [minutes, setMinutes] = useState<number>(2500);
  const [featureNeed, setFeatureNeed] = useState<string>("ivr");
  const [billingCycle, setBillingCycle] = useState<string>("annual");

  /* Illustrative pooled-minute vs per-seat modeling based on published vendor structures */
  let eightHundredBase = 29;
  let includedNumbers800 = 1;
  if (minutes > 5000 || numbersCount > 5) {
    eightHundredBase = 199;
    includedNumbers800 = 10;
  } else if (minutes > 1000 || numbersCount > 1) {
    eightHundredBase = 59;
    includedNumbers800 = 5;
  }
  const extraNums800 = Math.max(0, numbersCount - includedNumbers800) * 5;
  let eightHundredMonthly = eightHundredBase + extraNums800;
  if (billingCycle === "annual") {
    eightHundredMonthly = Math.round(eightHundredMonthly * 0.8);
  }

  /* Nextiva / Per-Seat UCaaS illustrative model */
  const nextivaPerSeat = featureNeed === "ivr" ? 25 : 20;
  const extraNumsNextiva = Math.max(0, numbersCount - 1) * 5;
  let nextivaMonthly = seats * nextivaPerSeat + extraNumsNextiva;
  if (billingCycle === "annual") {
    nextivaMonthly = Math.round(nextivaMonthly * 0.85);
  }

  /* Grasshopper tier-capped model */
  let grasshopperMonthly = 28 + Math.max(0, numbersCount - 1) * 10;
  if (seats > 3 || numbersCount >= 3) {
    grasshopperMonthly = 80 + Math.max(0, numbersCount - 4) * 10;
  }
  if (billingCycle === "annual") {
    grasshopperMonthly = Math.round(grasshopperMonthly * 0.85);
  }

  /* RingCentral per-seat + toll-free minute overage model */
  const rcRatePerSeat = featureNeed === "ivr" ? 35 : 25;
  const rcIncludedMins = seats * 250;
  const rcOverage = Math.max(0, minutes - rcIncludedMins) * 0.039;
  const rcExtraNums = Math.max(0, numbersCount - 1) * 5;
  let ringCentralMonthly = seats * rcRatePerSeat + rcOverage + rcExtraNums;
  if (billingCycle === "annual") {
    ringCentralMonthly = Math.round(ringCentralMonthly * 0.8);
  }

  const annualSavingsVsRingCentral = Math.max(0, (ringCentralMonthly - eightHundredMonthly) * 12);
  const annualSavingsVsNextiva = Math.max(0, (nextivaMonthly - eightHundredMonthly) * 12);

  return (
    <div className="my-10 bg-slate-900 border border-slate-700 rounded-2xl p-6 sm:p-8 text-slate-100 shadow-2xl">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-3 bg-emerald-500/20 text-emerald-400 rounded-xl border border-emerald-500/30">
          <Calculator className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            Multi-Number &amp; Toll-Free Minute Cost Calculator (2026)
          </h3>
          <p className="text-sm text-slate-400">
            Compare pooled-minute toll-free plans (800.com, Grasshopper) against per-seat UCaaS platforms (Nextiva, RingCentral) by team size, number count, and inbound minutes.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-6">
        <div>
          <label htmlFor="calcInputSeats" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
            Team Seats / Forwarding Staff: <span className="text-emerald-400 font-bold text-sm">{seats} Users</span>
          </label>
          <input
            id="calcInputSeats"
            type="number"
            min={1}
            max={100}
            value={seats}
            onChange={(e) => setSeats(Math.max(1, parseInt(e.target.value, 10) || 1))}
            className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 text-sm"
          />
        </div>

        <div>
          <label htmlFor="calcInputNumbers" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
            Active Virtual / Temp Numbers: <span className="text-emerald-400 font-bold text-sm">{numbersCount} Lines</span>
          </label>
          <input
            id="calcInputNumbers"
            type="number"
            min={1}
            max={50}
            value={numbersCount}
            onChange={(e) => setNumbersCount(Math.max(1, parseInt(e.target.value, 10) || 1))}
            className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 text-sm"
          />
        </div>

        <div>
          <label htmlFor="calcInputMinutes" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
            Monthly Inbound Toll-Free Mins: <span className="text-emerald-400 font-bold text-sm">{minutes.toLocaleString()} Mins</span>
          </label>
          <select
            id="calcInputMinutes"
            value={minutes}
            onChange={(e) => setMinutes(parseInt(e.target.value, 10))}
            className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 text-sm"
          >
            <option value={500}>Light Volume (500 mins/mo)</option>
            <option value={1000}>Moderate Volume (1,000 mins/mo)</option>
            <option value={2500}>Growth Volume (2,500 mins/mo)</option>
            <option value={5000}>High Volume (5,000 mins/mo)</option>
            <option value={10000}>Enterprise Campaign (10,000+ mins/mo)</option>
          </select>
        </div>

        <div>
          <label htmlFor="calcInputFeature" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
            Primary Routing &amp; IVR Scope
          </label>
          <select
            id="calcInputFeature"
            value={featureNeed}
            onChange={(e) => setFeatureNeed(e.target.value)}
            className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 text-sm"
          >
            <option value="basic">Instant Call Forwarding &amp; Voicemail</option>
            <option value="sms">Two-Way Business SMS (TFV / 10DLC)</option>
            <option value="ivr">Multi-Level IVR + Call Tracking &amp; Recording</option>
          </select>
        </div>

        <div>
          <label htmlFor="calcInputBilling" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
            Billing Cadence
          </label>
          <select
            id="calcInputBilling"
            value={billingCycle}
            onChange={(e) => setBillingCycle(e.target.value)}
            className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 text-sm"
          >
            <option value="annual">Annual Prepay (Discounted Tier)</option>
            <option value="monthly">Month-to-Month Billing</option>
          </select>
        </div>

        <div className="flex items-end">
          <button
            type="button"
            id="phoneCalcBtn"
            onClick={() => setSeats((s) => s)}
            style={{ backgroundColor: "#059669", color: "#ffffff" }}
            className="w-full py-3 px-4 rounded-xl font-bold text-sm shadow-lg transition hover:opacity-95"
          >
            Calculate Telecom TCO &rarr;
          </button>
        </div>
      </div>

      <div id="phoneCalcResultPanel" className="bg-slate-800/80 border border-slate-700/80 rounded-xl p-5 sm:p-6 mt-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pb-6 border-b border-slate-700 text-center">
          <div className="p-3 bg-emerald-950/40 border border-emerald-500/30 rounded-lg">
            <div className="text-xs text-emerald-400 font-semibold mb-1">800.com (Pooled)</div>
            <div className="text-2xl font-extrabold text-white" id="dispCalc800">
              ${eightHundredMonthly}<span className="text-xs text-slate-400 font-normal">/mo</span>
            </div>
            <div className="text-[10px] text-emerald-300 mt-1 font-medium">Unlimited Forwarding Exts</div>
          </div>
          <div className="p-3 bg-slate-900 border border-slate-700 rounded-lg">
            <div className="text-xs text-slate-400 font-semibold mb-1">Nextiva (UCaaS)</div>
            <div className="text-2xl font-extrabold text-slate-200" id="dispCalcNextiva">
              ${Math.round(nextivaMonthly)}<span className="text-xs text-slate-400 font-normal">/mo</span>
            </div>
            <div className="text-[10px] text-slate-400 mt-1">Per-seat + extra line fees</div>
          </div>
          <div className="p-3 bg-slate-900 border border-slate-700 rounded-lg">
            <div className="text-xs text-slate-400 font-semibold mb-1">Grasshopper</div>
            <div className="text-2xl font-extrabold text-slate-200" id="dispCalcGrasshopper">
              ${grasshopperMonthly}<span className="text-xs text-slate-400 font-normal">/mo</span>
            </div>
            <div className="text-[10px] text-slate-400 mt-1">Tier-capped numbers/exts</div>
          </div>
          <div className="p-3 bg-slate-900 border border-slate-700 rounded-lg">
            <div className="text-xs text-slate-400 font-semibold mb-1">RingCentral</div>
            <div className="text-2xl font-extrabold text-slate-200" id="dispCalcRingCentral">
              ${Math.round(ringCentralMonthly)}<span className="text-xs text-slate-400 font-normal">/mo</span>
            </div>
            <div className="text-[10px] text-slate-400 mt-1">Per-seat + minute overages</div>
          </div>
        </div>

        <div className="pt-5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div>
            <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
              Illustrative Annual TCO Comparison ({seats} Staff, {numbersCount} Numbers, {minutes.toLocaleString()} Mins/Mo)
            </div>
            <div className="text-lg font-bold text-emerald-400" id="dispCalcSavings">
              Pooled routing saves ~${Math.round(annualSavingsVsRingCentral).toLocaleString()}/yr vs RingCentral (~${Math.round(annualSavingsVsNextiva).toLocaleString()}/yr vs Nextiva)
            </div>
          </div>
          <div className="flex flex-wrap gap-2 w-full sm:w-auto">
            <a
              href="https://bbux.me/GarMX6i7"
              target="_blank"
              rel="sponsored noopener noreferrer"
              style={{ backgroundColor: "#2563eb", color: "#ffffff" }}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-white font-bold rounded-xl text-xs transition shadow whitespace-nowrap"
            >
              Compare Nextiva Plans (CPS) &rarr;
            </a>
            <a
              href="https://bbux.me/xarL1T8Ga"
              target="_blank"
              rel="sponsored noopener noreferrer"
              style={{ backgroundColor: "#059669", color: "#ffffff" }}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-white font-bold rounded-xl text-xs transition shadow whitespace-nowrap"
            >
              Search 800.com Numbers &rarr;
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
