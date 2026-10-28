"use client";

import React, { useState } from "react";

export default function OtterPricingClient() {
  const [seats, setSeats] = useState<number>(8);
  const [meetingsPerWeek, setMeetingsPerWeek] = useState<number>(10);
  const [meetingDuration, setMeetingDuration] = useState<number>(60);
  const [billingCycle, setBillingCycle] = useState<string>("annual");
  const [calcRun, setCalcRun] = useState<number>(1);

  const safeSeats = seats > 0 ? seats : 1;
  const safeMeetingsWeek = meetingsPerWeek > 0 ? meetingsPerWeek : 1;
  const safeDuration = meetingDuration > 0 ? meetingDuration : 30;

  // Monthly minutes per seat (4.33 weeks/month)
  const monthlyMinutesPerUser = Math.round(safeMeetingsWeek * safeDuration * 4.33);
  const monthlyHoursPerUser = monthlyMinutesPerUser / 60;
  const totalTeamHoursPerMonth = monthlyHoursPerUser * safeSeats;

  // Check if Otter Pro (1,200 min/mo cap & 90 min/meeting cap) is exceeded
  const exceedsProMinutes = monthlyMinutesPerUser > 1200;
  const exceedsProDuration = safeDuration > 90;
  const requiresOtterBusiness = exceedsProMinutes || exceedsProDuration;

  // Otter Pro & Business per-seat rates (Published 2026 rates: Pro $8.33 annual / $16.99 monthly; Business $20 annual / $30 monthly)
  const otterProRate = billingCycle === "annual" ? 8.33 : 16.99;
  const otterBizRate = billingCycle === "annual" ? 20.0 : 30.0;

  const activeOtterTierName = requiresOtterBusiness
    ? "Otter Business (6,000 min/mo)"
    : "Otter Pro (1,200 min/mo)";
  const activeOtterRate = requiresOtterBusiness ? otterBizRate : otterProRate;
  const otterTeamMonthly = safeSeats * activeOtterRate;
  const otterEffectivePerHour =
    totalTeamHoursPerMonth > 0 ? otterTeamMonthly / totalTeamHoursPerMonth : 0;

  // Fireflies.ai Pro ($10/seat annual / $18 monthly, unlimited transcription) vs Business ($19 annual / $29 monthly)
  const firefliesRate =
    monthlyMinutesPerUser > 2400
      ? billingCycle === "annual"
        ? 19.0
        : 29.0
      : billingCycle === "annual"
      ? 10.0
      : 18.0;
  const firefliesTeamMonthly = safeSeats * firefliesRate;
  const firefliesEffectivePerHour =
    totalTeamHoursPerMonth > 0 ? firefliesTeamMonthly / totalTeamHoursPerMonth : 0;

  // MeetGeek AI Pro ($15/seat annual / $19 monthly) vs Business ($29 annual / $39 monthly)
  const meetGeekRate = billingCycle === "annual" ? 15.0 : 19.0;
  const meetGeekTeamMonthly = safeSeats * meetGeekRate;
  const meetGeekEffectivePerHour =
    totalTeamHoursPerMonth > 0 ? meetGeekTeamMonthly / totalTeamHoursPerMonth : 0;

  return (
    <div className="bg-white border-2 border-slate-900 rounded-2xl p-5 sm:p-7 shadow-sm my-8">
      <div className="text-xs font-extrabold uppercase tracking-wider text-indigo-600 mb-1">
        Interactive AI Meeting Transcription Cap &amp; Cost-Per-Hour Engine
      </div>
      <h3 className="text-xl font-extrabold text-slate-900 mb-4">
        Calculate Whether Your Team Hits Otter Pro&apos;s 1,200-Minute Cap &amp; Compare Per-Hour Costs
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-5">
        <div>
          <label
            htmlFor="otterSeatsInput"
            className="block text-xs font-bold text-slate-700 mb-1.5"
          >
            Team Size (Seats)
          </label>
          <input
            id="otterSeatsInput"
            type="number"
            min={1}
            max={500}
            value={seats}
            onChange={(e) => setSeats(Number(e.target.value) || 1)}
            className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm font-semibold text-slate-900"
          />
        </div>

        <div>
          <label
            htmlFor="meetingsWeekInput"
            className="block text-xs font-bold text-slate-700 mb-1.5"
          >
            Meetings / User / Week
          </label>
          <input
            id="meetingsWeekInput"
            type="number"
            min={1}
            max={60}
            value={meetingsPerWeek}
            onChange={(e) => setMeetingsPerWeek(Number(e.target.value) || 1)}
            className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm font-semibold text-slate-900"
          />
        </div>

        <div>
          <label
            htmlFor="durationSelect"
            className="block text-xs font-bold text-slate-700 mb-1.5"
          >
            Avg Meeting Duration
          </label>
          <select
            id="durationSelect"
            value={meetingDuration}
            onChange={(e) => setMeetingDuration(Number(e.target.value) || 45)}
            className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm font-semibold text-slate-900 bg-white"
          >
            <option value={30}>30 mins (Fits Basic/Pro)</option>
            <option value={45}>45 mins (Exceeds Basic 30m cap)</option>
            <option value={60}>60 mins (Standard 1-Hour Call)</option>
            <option value={105}>105 mins (Exceeds Pro 90m cap!)</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="billingCycleSelect"
            className="block text-xs font-bold text-slate-700 mb-1.5"
          >
            Billing Cycle
          </label>
          <select
            id="billingCycleSelect"
            value={billingCycle}
            onChange={(e) => setBillingCycle(e.target.value)}
            className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm font-semibold text-slate-900 bg-white"
          >
            <option value="annual">Annual Billing (Up to 51% Off)</option>
            <option value="monthly">Month-to-Month Billing</option>
          </select>
        </div>
      </div>

      <button
        type="button"
        id="calcOtterBtn"
        onClick={() => setCalcRun((r) => r + 1)}
        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-xl text-sm transition cursor-pointer mb-5"
      >
        Calculate Monthly Minute Quota Status &amp; Cost Per Transcribed Hour
      </button>

      <div
        id="otterResultBox"
        className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5"
      >
        <div className="flex flex-wrap items-baseline justify-between gap-2 pb-3 mb-4 border-b border-slate-200">
          <span className="text-xs font-bold uppercase tracking-wide text-slate-500">
            Monthly Usage Per User ({safeMeetingsWeek} calls/wk &times; {safeDuration} min):
          </span>
          <strong className="text-xl sm:text-2xl font-extrabold text-slate-900">
            {monthlyMinutesPerUser.toLocaleString("en-US")} mins / mo ({monthlyHoursPerUser.toFixed(1)}{" "}
            hrs/user)
          </strong>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm mb-4">
          <div className="bg-white border-2 border-indigo-400 rounded-lg p-3.5">
            <div className="text-xs font-bold text-indigo-800 uppercase">
              Required Otter Tier: {activeOtterTierName}
            </div>
            <div className="text-lg font-extrabold text-slate-900 mt-1">
              ${otterTeamMonthly.toFixed(2)} / mo (${(otterTeamMonthly * 12).toFixed(0)}/yr)
            </div>
            <div className="text-xs font-semibold text-indigo-700 mt-0.5">
              Effective Rate: ${otterEffectivePerHour.toFixed(2)} / transcribed hr
            </div>
            <div className="text-xs text-slate-600 mt-1.5">
              {requiresOtterBusiness
                ? `Forced to Business ($${otterBizRate}/seat) because ${
                    exceedsProMinutes ? `${monthlyMinutesPerUser}m > 1,200m Pro cap` : "calls > 90m"
                  }.`
                : `Fits inside Otter Pro ($${otterProRate}/seat) 1,200m/mo & 90m/call caps.`}
            </div>
          </div>

          <div className="bg-white border-2 border-emerald-400 rounded-lg p-3.5">
            <div className="text-xs font-bold text-emerald-800 uppercase">
              Fireflies.ai ({monthlyMinutesPerUser > 2400 ? "Business" : "Pro"} Unlimited)
            </div>
            <div className="text-lg font-extrabold text-slate-900 mt-1">
              ${firefliesTeamMonthly.toFixed(2)} / mo (${(firefliesTeamMonthly * 12).toFixed(0)}/yr)
            </div>
            <div className="text-xs font-semibold text-emerald-700 mt-0.5">
              Effective Rate: ${firefliesEffectivePerHour.toFixed(2)} / transcribed hr
            </div>
            <div className="text-xs text-slate-600 mt-1.5">
              ${firefliesRate.toFixed(2)}/seat &bull; Unlimited meeting minutes &bull; 100+ languages
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-lg p-3.5">
            <div className="text-xs font-bold text-slate-700 uppercase">
              MeetGeek AI Pro (${meetGeekRate}/seat)
            </div>
            <div className="text-lg font-extrabold text-slate-900 mt-1">
              ${meetGeekTeamMonthly.toFixed(2)} / mo (${(meetGeekTeamMonthly * 12).toFixed(0)}/yr)
            </div>
            <div className="text-xs font-semibold text-slate-700 mt-0.5">
              Effective Rate: ${meetGeekEffectivePerHour.toFixed(2)} / transcribed hr
            </div>
            <div className="text-xs text-slate-600 mt-1.5">
              Automated KPI coaching templates, CRM auto-sync &amp; multi-language support
            </div>
          </div>
        </div>

        <div className="text-xs font-semibold text-indigo-900 bg-indigo-50 border border-indigo-200 rounded-lg px-3.5 py-2.5">
          Quota Alert (Run #{calcRun}): At {monthlyMinutesPerUser.toLocaleString("en-US")} minutes
          per user per month,{" "}
          {requiresOtterBusiness
            ? `your team breaches Otter Pro's hard 1,200-minute/month (20-hour) or 90-minute/call ceiling, forcing a 2.4x price jump to Otter Business ($${otterBizRate}/seat/mo). Switching to Fireflies.ai Pro saves $${Math.max(0, (otterTeamMonthly - firefliesTeamMonthly) * 12).toFixed(0)}/year.`
            : `your team stays safely below Otter Pro's 1,200-minute/month ceiling, keeping per-hour transcription cost at $${otterEffectivePerHour.toFixed(2)}/hr.`}
        </div>
      </div>
    </div>
  );
}
