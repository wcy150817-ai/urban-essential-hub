"use client";

import React, { useState } from "react";
import { PhoneCall, Users, Clock, Calculator, ShieldCheck, DollarSign, ArrowRight } from "lucide-react";

export default function PhoneCostCalculator() {
  const [seats, setSeats] = useState<number>(3);
  const [minutes, setMinutes] = useState<number>(1000);
  const [featureNeed, setFeatureNeed] = useState<string>("sms");
  const [billingCycle, setBillingCycle] = useState<string>("annual");

  // Calculations
  // 800.com charges primarily per pool of minutes with unlimited team extensions on higher tiers
  // Entry: ~$19/mo (1,000 mins), Standard: ~$49/mo (5,000 mins), Pro: ~$199/mo (unlimited)
  let eightHundredMonthly = 29;
  if (minutes > 5000) {
    eightHundredMonthly = 199;
  } else if (minutes > 1000) {
    eightHundredMonthly = 49;
  }
  if (billingCycle === "annual") {
    eightHundredMonthly = Math.round(eightHundredMonthly * 0.8);
  }

  // OpenPhone: $15/user/mo (Starter) or $23/user/mo (Business) + toll-free inbound is $0.02/min
  const openPhoneBasePerSeat = featureNeed === "ivr" ? 23 : 15;
  let openPhoneMonthly = seats * openPhoneBasePerSeat + minutes * 0.02;
  if (billingCycle === "annual") {
    openPhoneMonthly = Math.round(openPhoneMonthly * 0.83);
  }

  // Grasshopper: TrueSolo $14, SoloPlus $28, Small Business $80 (flat, up to 5 extensions)
  let grasshopperMonthly = 28;
  if (seats > 3 || minutes > 2000) {
    grasshopperMonthly = 80;
  }
  if (billingCycle === "annual") {
    grasshopperMonthly = Math.round(grasshopperMonthly * 0.85);
  }

  // RingCentral: $20 to $35/user/mo + strict pooled toll-free minute limits (100 to 1,000 mins) with $0.039/min overage
  const rcRatePerSeat = featureNeed === "ivr" ? 35 : 25;
  const rcIncludedMins = seats * 250;
  const rcOverage = Math.max(0, minutes - rcIncludedMins) * 0.039;
  let ringCentralMonthly = seats * rcRatePerSeat + rcOverage;
  if (billingCycle === "annual") {
    ringCentralMonthly = Math.round(ringCentralMonthly * 0.8);
  }

  const annualSavingsVsOpenPhone = Math.max(0, (openPhoneMonthly - eightHundredMonthly) * 12);
  const annualSavingsVsRingCentral = Math.max(0, (ringCentralMonthly - eightHundredMonthly) * 12);

  return (
    <div className="my-10 bg-slate-900 border border-slate-700 rounded-2xl p-6 sm:p-8 text-slate-100 shadow-2xl">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-3 bg-emerald-500/20 text-emerald-400 rounded-xl border border-emerald-500/30">
          <Calculator className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-white">Multi-Seat Business Phone Cost &amp; Savings Calculator</h3>
          <p className="text-sm text-slate-400">Model real monthly and annual communications spend across top US toll-free providers.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
        <div>
          <label htmlFor="calcInputSeats" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
            Team Seats / Staff Extensions: <span className="text-emerald-400 font-bold text-sm">{seats} Users</span>
          </label>
          <input
            id="calcInputSeats"
            type="number"
            min={1}
            max={50}
            value={seats}
            onChange={(e) => setSeats(Math.max(1, parseInt(e.target.value) || 1))}
            className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 text-sm"
          />
        </div>

        <div>
          <label htmlFor="calcInputMinutes" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
            Estimated Monthly Inbound Toll-Free Mins: <span className="text-emerald-400 font-bold text-sm">{minutes.toLocaleString()} Mins</span>
          </label>
          <select
            id="calcInputMinutes"
            value={minutes}
            onChange={(e) => setMinutes(parseInt(e.target.value))}
            className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 text-sm"
          >
            <option value={500}>Light Volume (500 mins/mo)</option>
            <option value={1000}>Moderate Volume (1,000 mins/mo)</option>
            <option value={2500}>Growth Volume (2,500 mins/mo)</option>
            <option value={5000}>High Volume (5,000 mins/mo)</option>
            <option value={10000}>Enterprise Marketing (10,000+ mins/mo)</option>
          </select>
        </div>

        <div>
          <label htmlFor="calcInputFeature" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
            Primary Feature Architecture
          </label>
          <select
            id="calcInputFeature"
            value={featureNeed}
            onChange={(e) => setFeatureNeed(e.target.value)}
            className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 text-sm"
          >
            <option value="basic">Call Forwarding &amp; Voicemail Only</option>
            <option value="sms">Two-Way Business SMS + MMS</option>
            <option value="ivr">Multi-Level IVR Receptionist + Call Recording</option>
          </select>
        </div>

        <div>
          <label htmlFor="calcInputBilling" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
            Billing Frequency
          </label>
          <select
            id="calcInputBilling"
            value={billingCycle}
            onChange={(e) => setBillingCycle(e.target.value)}
            className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 text-sm"
          >
            <option value="annual">Annual Prepay (Up to 20% Discount)</option>
            <option value="monthly">Month-to-Month Billing</option>
          </select>
        </div>
      </div>

      <div className="bg-slate-800/80 border border-slate-700/80 rounded-xl p-5 sm:p-6 mt-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pb-6 border-b border-slate-700 text-center">
          <div className="p-3 bg-emerald-950/40 border border-emerald-500/30 rounded-lg">
            <div className="text-xs text-emerald-400 font-semibold mb-1">800.com (Toll-Free)</div>
            <div className="text-2xl font-extrabold text-white" id="dispCalc800">${eightHundredMonthly}<span className="text-xs text-slate-400 font-normal">/mo</span></div>
            <div className="text-[10px] text-emerald-300 mt-1 font-medium">Pooled Minutes + Unlimited Exts</div>
          </div>
          <div className="p-3 bg-slate-900 border border-slate-700 rounded-lg">
            <div className="text-xs text-slate-400 font-semibold mb-1">OpenPhone</div>
            <div className="text-2xl font-extrabold text-slate-200" id="dispCalcOpenPhone">${Math.round(openPhoneMonthly)}<span className="text-xs text-slate-400 font-normal">/mo</span></div>
            <div className="text-[10px] text-slate-400 mt-1">Per-seat + $0.02/min inbound</div>
          </div>
          <div className="p-3 bg-slate-900 border border-slate-700 rounded-lg">
            <div className="text-xs text-slate-400 font-semibold mb-1">Grasshopper</div>
            <div className="text-2xl font-extrabold text-slate-200" id="dispCalcGrasshopper">${grasshopperMonthly}<span className="text-xs text-slate-400 font-normal">/mo</span></div>
            <div className="text-[10px] text-slate-400 mt-1">Tier-capped extensions</div>
          </div>
          <div className="p-3 bg-slate-900 border border-slate-700 rounded-lg">
            <div className="text-xs text-slate-400 font-semibold mb-1">RingCentral</div>
            <div className="text-2xl font-extrabold text-slate-200" id="dispCalcRingCentral">${Math.round(ringCentralMonthly)}<span className="text-xs text-slate-400 font-normal">/mo</span></div>
            <div className="text-[10px] text-slate-400 mt-1">Per-seat + overage fees</div>
          </div>
        </div>

        <div className="pt-5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div>
            <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Estimated Net Savings vs Traditional Per-Seat Plans</div>
            <div className="text-lg font-bold text-emerald-400" id="dispCalcSavings">
              Save up to ${Math.round(annualSavingsVsRingCentral).toLocaleString()}/year vs RingCentral (${Math.round(annualSavingsVsOpenPhone).toLocaleString()}/yr vs OpenPhone)
            </div>
          </div>
          <a
            href="https://pbee.me/E21fjvxT"
            target="_blank"
            rel="sponsored noopener noreferrer"
            data-style="color:#ffffff !important"
            style={{ color: "#ffffff" }}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-sm transition shadow-lg shadow-emerald-900/30 whitespace-nowrap w-full sm:w-auto"
          >
            Claim 800.com Free Trial &rarr;
          </a>
        </div>
      </div>
    </div>
  );
}
