'use client';

import React, { useState } from 'react';

export default function MeetingAssistantCalculator() {
  const [seats, setSeats] = useState<number>(10);
  const [weeklyHoursPerSeat, setWeeklyHoursPerSeat] = useState<number>(8);
  const [billing, setBilling] = useState<'annual' | 'monthly'>('annual');
  const [needCrmSync, setNeedCrmSync] = useState<boolean>(true);

  const safeSeats = Math.max(1, seats || 1);
  const monthlyMinutesPerSeat = Math.round(weeklyHoursPerSeat * 60 * 4.33);

  /* Otter.ai: Pro is capped at 1,200 mins/mo ($8.33 annual / $16.99 monthly); above 1,200 mins requires Business ($19.99 annual / $30 monthly) */
  const otterNeedsBusiness = monthlyMinutesPerSeat > 1200 || needCrmSync;
  const otterRate = otterNeedsBusiness
    ? (billing === 'annual' ? 19.99 : 30.0)
    : (billing === 'annual' ? 8.33 : 16.99);
  const otterTierName = otterNeedsBusiness ? 'Business (Unlimited Mins)' : 'Pro (1,200 Min Cap)';
  const otterAnnualTotal = Math.round(safeSeats * otterRate * 12);

  /* Fireflies.ai: Pro ($10 annual / $18 monthly) or Business ($19 annual / $29 monthly) */
  const firefliesNeedsBusiness = monthlyMinutesPerSeat > 1800 || needCrmSync;
  const firefliesRate = firefliesNeedsBusiness
    ? (billing === 'annual' ? 19.0 : 29.0)
    : (billing === 'annual' ? 10.0 : 18.0);
  const firefliesTierName = firefliesNeedsBusiness ? 'Business (Unlimited Storage)' : 'Pro (8,000 Min Storage)';
  const firefliesAnnualTotal = Math.round(safeSeats * firefliesRate * 12);

  /* Fathom: Team ($15 annual / $19 monthly, 2-seat min) or Business ($25 annual / $34 monthly for CRM sync, 2-seat min) */
  const fathomBillableSeats = Math.max(2, safeSeats);
  const fathomRate = needCrmSync
    ? (billing === 'annual' ? 25.0 : 34.0)
    : (billing === 'annual' ? 15.0 : 19.0);
  const fathomTierName = needCrmSync ? 'Business (CRM Field Sync)' : 'Team (2-User Min)';
  const fathomAnnualTotal = Math.round(fathomBillableSeats * fathomRate * 12);

  /* MeetGeek: Pro ($9.99 annual for <=1,200 mins) or Business ($17 annual for unlimited + CRM) */
  const meetgeekNeedsBusiness = monthlyMinutesPerSeat > 1200 || needCrmSync;
  const meetgeekRate = meetgeekNeedsBusiness ? 17.0 : 9.99;
  const meetgeekTierName = meetgeekNeedsBusiness ? 'Business (Unlimited + CRM)' : 'Pro (20 Hr/Mo)';
  const meetgeekAnnualTotal = Math.round(safeSeats * meetgeekRate * 12);

  return (
    <div className="w-full max-w-4xl mx-auto my-8 p-6 sm:p-8 bg-slate-900 text-white rounded-2xl shadow-xl border border-slate-800 overflow-x-hidden box-border">
      <div className="mb-6 pb-5 border-b border-slate-800">
        <span className="inline-block px-3 py-1 bg-indigo-500/20 text-indigo-300 font-semibold text-xs tracking-wider uppercase rounded-full mb-2">
          Interactive 2026 SaaS Licensing Model
        </span>
        <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
          AI Meeting Assistant Minute-Cap &amp; Annual Team Cost Calculator
        </h3>
        <p className="text-slate-400 text-sm mt-1">
          Enter your team size and weekly call hours per rep to see when Otter&apos;s 1,200-minute Pro ceiling forces a tier upgrade versus Fireflies, Fathom, and MeetGeek.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-slate-800/70 p-4 rounded-xl border border-slate-700">
          <label htmlFor="inputTeamSeats" className="block text-xs font-bold uppercase text-slate-300 mb-2">
            1. Active Team Seats
          </label>
          <input
            id="inputTeamSeats"
            type="number"
            min={1}
            max={500}
            value={seats}
            onChange={(e) => setSeats(parseInt(e.target.value || '1', 10))}
            className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-white font-mono text-base"
          />
        </div>

        <div className="bg-slate-800/70 p-4 rounded-xl border border-slate-700">
          <label htmlFor="inputWeeklyHours" className="block text-xs font-bold uppercase text-slate-300 mb-2">
            2. Weekly Call Hours / Seat
          </label>
          <input
            id="inputWeeklyHours"
            type="number"
            min={1}
            max={40}
            value={weeklyHoursPerSeat}
            onChange={(e) => setWeeklyHoursPerSeat(parseInt(e.target.value || '1', 10))}
            className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-white font-mono text-base"
          />
        </div>

        <div className="bg-slate-800/70 p-4 rounded-xl border border-slate-700">
          <label htmlFor="selectBillingCycle" className="block text-xs font-bold uppercase text-slate-300 mb-2">
            3. Billing Commitment
          </label>
          <select
            id="selectBillingCycle"
            value={billing}
            onChange={(e) => setBilling(e.target.value as 'annual' | 'monthly')}
            className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-white text-sm"
          >
            <option value="annual">Annual Billing (Lowest Rate)</option>
            <option value="monthly">Month-to-Month Billing</option>
          </select>
        </div>

        <div className="bg-slate-800/70 p-4 rounded-xl border border-slate-700">
          <label htmlFor="selectCrmSync" className="block text-xs font-bold uppercase text-slate-300 mb-2">
            4. Automated CRM Field Sync
          </label>
          <select
            id="selectCrmSync"
            value={needCrmSync ? 'yes' : 'no'}
            onChange={(e) => setNeedCrmSync(e.target.value === 'yes')}
            className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-white text-sm"
          >
            <option value="yes">Required (HubSpot / Salesforce)</option>
            <option value="no">Not Needed (Transcripts Only)</option>
          </select>
        </div>
      </div>

      <button
        id="btnCalcMeetingCost"
        type="button"
        onClick={() => setSeats((s) => Math.max(1, s))}
        className="w-full py-3 px-4 mb-6 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm transition cursor-pointer"
      >
        Recalculate Annual Team Licensing &amp; Minute Allocation
      </button>

      <div id="meetingCalcResult" className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
            <span className="text-xs uppercase font-bold text-slate-400 block">Otter.ai Estimate</span>
            <span className="text-2xl font-extrabold text-white font-mono block mt-1">
              ${otterAnnualTotal.toLocaleString('en-US')}/yr
            </span>
            <span className="text-xs text-amber-300 mt-1 block">{otterTierName}</span>
            <span className="text-[11px] text-slate-400 block mt-0.5">${otterRate.toFixed(2)}/seat/mo</span>
          </div>

          <div className="bg-slate-800/50 p-4 rounded-xl border border-indigo-500/40">
            <span className="text-xs uppercase font-bold text-indigo-300 block">Fireflies.ai Estimate</span>
            <span className="text-2xl font-extrabold text-indigo-300 font-mono block mt-1">
              ${firefliesAnnualTotal.toLocaleString('en-US')}/yr
            </span>
            <span className="text-xs text-slate-300 mt-1 block">{firefliesTierName}</span>
            <span className="text-[11px] text-slate-400 block mt-0.5">${firefliesRate.toFixed(2)}/seat/mo</span>
          </div>

          <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
            <span className="text-xs uppercase font-bold text-slate-400 block">Fathom Estimate</span>
            <span className="text-2xl font-extrabold text-white font-mono block mt-1">
              ${fathomAnnualTotal.toLocaleString('en-US')}/yr
            </span>
            <span className="text-xs text-slate-300 mt-1 block">{fathomTierName}</span>
            <span className="text-[11px] text-slate-400 block mt-0.5">${fathomRate.toFixed(2)}/seat/mo</span>
          </div>

          <div className="bg-emerald-950/40 p-4 rounded-xl border border-emerald-500/40">
            <span className="text-xs uppercase font-bold text-emerald-300 block">MeetGeek Estimate</span>
            <span className="text-2xl font-extrabold text-emerald-400 font-mono block mt-1">
              ${meetgeekAnnualTotal.toLocaleString('en-US')}/yr
            </span>
            <span className="text-xs text-emerald-200 mt-1 block">{meetgeekTierName}</span>
            <span className="text-[11px] text-emerald-300/80 block mt-0.5">${meetgeekRate.toFixed(2)}/seat/mo (Annual)</span>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 text-xs sm:text-sm text-slate-200 leading-relaxed">
          <strong>Usage Diagnostic ({monthlyMinutesPerSeat.toLocaleString('en-US')} mins/seat/month):</strong> At {weeklyHoursPerSeat} hours of calls per week per user ({safeSeats} seats), each team member generates roughly <strong>{monthlyMinutesPerSeat.toLocaleString('en-US')} transcription minutes per month</strong>. {monthlyMinutesPerSeat > 1200 ? 'Because this exceeds Otter Pro’s 1,200-minute monthly ceiling, Otter users must upgrade to the Business tier ($19.99–$30/seat/mo), whereas Fireflies Pro ($10–$18/seat/mo) and Fathom ($15–$25/seat/mo) include unlimited transcription minutes.' : 'This fits within Otter Pro’s 1,200-minute monthly cap ($8.33–$16.99/seat/mo), provided no single meeting exceeds 90 minutes.'}
        </div>
      </div>
    </div>
  );
}
