"use client";

import React, { useState } from "react";
import { Calculator, PhoneCall, Users, Clock, ShieldCheck, ArrowRight } from "lucide-react";

export default function TollFreeRoutingCalculator() {
  const [agents, setAgents] = useState<number>(4);
  const [tollFreeMins, setTollFreeMins] = useState<number>(1500);
  const [routingTier, setRoutingTier] = useState<string>("ivr_sms");
  const [billingCycle, setBillingCycle] = useState<string>("annual");

  const safeAgents = Math.max(1, Math.min(100, agents || 1));
  const safeMins = Math.max(100, Math.min(50000, tollFreeMins || 100));

  // 1. 800.com: Pooled minutes with unlimited forwarding extensions
  // Entry: $19/mo annual ($24/mo monthly) for 1,000 mins; Unlimited/Pro: $49/mo annual ($59/mo monthly) for 5,000+ mins & multi-level IVR; Power: $199/mo for >10,000 mins
  let eightHundredMonthly = 19;
  let eightHundredTierName = "Personal (1,000 Pooled Mins)";
  if (safeMins > 10000) {
    eightHundredMonthly = billingCycle === "annual" ? 159 : 199;
    eightHundredTierName = "Power (High-Volume Vanity Pool)";
  } else if (safeMins > 1000 || routingTier !== "basic") {
    eightHundredMonthly = billingCycle === "annual" ? 49 : 59;
    eightHundredTierName = "Unlimited / Pro (Multi-Level IVR + SMS)";
  } else {
    eightHundredMonthly = billingCycle === "annual" ? 19 : 24;
  }

  // 2. Grasshopper: Flat-rate by number/extension tier (Unlimited users on Solo Plus & Small Business)
  // True Solo: $14/mo annual ($18/mo monthly) — 1 user, 1 number, 1 extension
  // Solo Plus: $25/mo annual ($32/mo monthly) — Unlimited users, 1 number, 3 extensions
  // Small Business: $55/mo annual ($70/mo monthly) — Unlimited users, 4 numbers, unlimited extensions
  let grasshopperMonthly = 14;
  let grasshopperTierName = "True Solo (1 User, 1 Ext)";
  if (safeAgents > 3 || routingTier === "omnichannel") {
    grasshopperMonthly = billingCycle === "annual" ? 55 : 70;
    grasshopperTierName = "Small Business (4 Numbers, Unlim. Exts)";
  } else if (safeAgents > 1 || routingTier === "ivr_sms") {
    grasshopperMonthly = billingCycle === "annual" ? 25 : 32;
    grasshopperTierName = "Solo Plus (1 Number, 3 Exts)";
  } else {
    grasshopperMonthly = billingCycle === "annual" ? 14 : 18;
  }

  // 3. Nextiva: Per-User / Per-Seat UCaaS model
  // Core: $15/user/mo annual ($23/user/mo monthly) + Toll-Free add-on (~$15/mo + $0.025/min over 500)
  // Engage: $25/user/mo annual ($50/user/mo monthly) — Includes Toll-Free Number & 2,000 pooled minutes ($0.025/min overage)
  // Power Suite / Scale: $75/user/mo annual
  let nextivaSeatRate = 25;
  let nextivaTierName = "Engage ($25/user/mo + Toll-Free Included)";
  let nextivaIncludedMins = 2000;
  let nextivaAddon = 0;

  if (routingTier === "omnichannel") {
    nextivaSeatRate = billingCycle === "annual" ? 75 : 85;
    nextivaTierName = "Scale / Power Suite CX ($75/user/mo)";
    nextivaIncludedMins = 5000;
  } else if (routingTier === "basic") {
    nextivaSeatRate = billingCycle === "annual" ? 15 : 23;
    nextivaTierName = `Core ($${nextivaSeatRate}/user/mo + TF Add-on)`;
    nextivaIncludedMins = 500;
    nextivaAddon = 15;
  } else {
    nextivaSeatRate = billingCycle === "annual" ? 25 : 50;
    nextivaTierName = `Engage ($${nextivaSeatRate}/user/mo Annual/Mo)`;
    nextivaIncludedMins = 2000;
  }

  const nextivaOverage = Math.max(0, safeMins - nextivaIncludedMins) * 0.025;
  const nextivaMonthly = Math.round(safeAgents * nextivaSeatRate + nextivaAddon + nextivaOverage);

  const annualEightHundred = eightHundredMonthly * 12;
  const annualGrasshopper = grasshopperMonthly * 12;
  const annualNextiva = nextivaMonthly * 12;

  const annualSavingsVsNextiva = Math.max(0, annualNextiva - annualEightHundred);

  return (
    <div className="my-10 bg-slate-900 border border-slate-700 rounded-2xl p-6 sm:p-8 text-slate-100 shadow-2xl">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-3 bg-emerald-500/20 text-emerald-400 rounded-xl border border-emerald-500/30">
          <Calculator className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            2026 Toll-Free Phone Bill &amp; Multi-Agent Routing Simulator
          </h3>
          <p className="text-sm text-slate-400">
            Compare 800.com pooled minutes vs Grasshopper extension tiers vs Nextiva per-seat UCaaS licensing.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-6">
        <div>
          <label
            htmlFor="inputTeamAgents"
            className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2"
          >
            Team Size / Forwarding Seats
          </label>
          <input
            id="inputTeamAgents"
            type="number"
            min={1}
            max={100}
            value={agents}
            onChange={(e) => setAgents(parseInt(e.target.value) || 1)}
            className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 text-sm font-bold"
          />
        </div>

        <div>
          <label
            htmlFor="inputTollFreeMins"
            className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2"
          >
            Monthly Inbound 1-800 Mins
          </label>
          <input
            id="inputTollFreeMins"
            type="number"
            min={100}
            max={50000}
            step={100}
            value={tollFreeMins}
            onChange={(e) => setTollFreeMins(parseInt(e.target.value) || 500)}
            className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 text-sm font-bold"
          />
        </div>

        <div>
          <label
            htmlFor="selectRoutingTier"
            className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2"
          >
            Call Routing &amp; SMS Workflow
          </label>
          <select
            id="selectRoutingTier"
            value={routingTier}
            onChange={(e) => setRoutingTier(e.target.value)}
            className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 text-sm"
          >
            <option value="basic">Basic Forwarding + Voicemail</option>
            <option value="ivr_sms">Multi-Level IVR + 10DLC/TFV SMS</option>
            <option value="omnichannel">Full Contact Center + CRM Sync</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="selectBillingCycle"
            className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2"
          >
            Contract Billing Term
          </label>
          <select
            id="selectBillingCycle"
            value={billingCycle}
            onChange={(e) => setBillingCycle(e.target.value)}
            className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 text-sm"
          >
            <option value="annual">Annual Prepay (Lowest Rate)</option>
            <option value="monthly">Month-to-Month Flexible</option>
          </select>
        </div>
      </div>

      <button
        id="btnSimulateTelecomBill"
        type="button"
        onClick={() => setAgents((prev) => Math.max(1, prev))}
        className="w-full py-3 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition shadow-lg mb-6 cursor-pointer"
      >
        Recalculate Monthly &amp; Annual Telecom TCO
      </button>

      <div
        id="dispTelecomResult"
        className="bg-slate-800/90 border border-slate-700 rounded-xl p-5 sm:p-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-6 border-b border-slate-700">
          <div className="p-4 bg-emerald-950/50 border border-emerald-500/40 rounded-xl">
            <div className="text-xs text-emerald-400 font-bold uppercase tracking-wider mb-1">
              800.com ({eightHundredTierName})
            </div>
            <div className="text-3xl font-extrabold text-white">
              ${eightHundredMonthly}
              <span className="text-xs text-slate-400 font-normal">/mo</span>
            </div>
            <div className="text-xs text-emerald-300 mt-1 font-medium">
              ${annualEightHundred.toLocaleString()}/yr total for {safeAgents} agents &amp; {safeMins.toLocaleString()} mins
            </div>
          </div>

          <div className="p-4 bg-slate-900 border border-slate-700 rounded-xl">
            <div className="text-xs text-blue-400 font-bold uppercase tracking-wider mb-1">
              Grasshopper ({grasshopperTierName})
            </div>
            <div className="text-3xl font-extrabold text-slate-100">
              ${grasshopperMonthly}
              <span className="text-xs text-slate-400 font-normal">/mo</span>
            </div>
            <div className="text-xs text-slate-400 mt-1">
              ${annualGrasshopper.toLocaleString()}/yr total ({safeAgents <= 3 ? "Fits 1–3 Exts" : "Requires Small Business Tier"})
            </div>
          </div>

          <div className="p-4 bg-slate-900 border border-slate-700 rounded-xl">
            <div className="text-xs text-indigo-400 font-bold uppercase tracking-wider mb-1">
              Nextiva ({nextivaTierName})
            </div>
            <div className="text-3xl font-extrabold text-slate-100">
              ${nextivaMonthly}
              <span className="text-xs text-slate-400 font-normal">/mo</span>
            </div>
            <div className="text-xs text-slate-400 mt-1">
              ${annualNextiva.toLocaleString()}/yr total ({safeAgents} seats × ${nextivaSeatRate}/seat)
            </div>
          </div>
        </div>

        <div className="pt-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
              Multi-Agent Cost Variance Analysis ({safeAgents} Team Members)
            </div>
            <div className="text-base sm:text-lg font-bold text-emerald-400 mt-0.5">
              {annualSavingsVsNextiva > 0
                ? `Pooled/Flat billing saves $${annualSavingsVsNextiva.toLocaleString()}/year vs Nextiva per-seat licensing for ${safeAgents} users.`
                : `For ${safeAgents} user(s), Nextiva Core/Engage and pooled toll-free plans are within $${Math.abs(annualNextiva - annualEightHundred)}/yr.`}
            </div>
          </div>
          <div className="flex flex-wrap gap-2 w-full sm:w-auto">
            <a
              href="https://bbux.me/GarMX6i7"
              target="_blank"
              rel="sponsored noopener noreferrer"
              style={{ color: "#ffffff" }}
              data-qa="color: #ffffff !important"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl text-xs transition shadow whitespace-nowrap"
            >
              Check Nextiva Plans &rarr;
            </a>
            <a
              href="https://pbee.me/E21fjvxT"
              target="_blank"
              rel="sponsored noopener noreferrer"
              style={{ color: "#ffffff" }}
              data-qa="color: #ffffff !important"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-xs transition shadow whitespace-nowrap"
            >
              Search 800.com Numbers &rarr;
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
