"use client";

import React, { useState } from "react";

export default function IncidentCostClient() {
  const [seats, setSeats] = useState<number>(12);
  const [monitors, setMonitors] = useState<number>(50);
  const [statusPages, setStatusPages] = useState<number>(2);
  const [monthlyLogsGb, setMonthlyLogsGb] = useState<number>(120);
  const [checkLocations, setCheckLocations] = useState<number>(3);
  const [calcRun, setCalcRun] = useState<number>(1);

  const safeSeats = seats > 0 ? seats : 1;
  const safeMonitors = monitors > 0 ? monitors : 1;
  const safeStatusPages = statusPages >= 0 ? statusPages : 0;
  const safeLogsGb = monthlyLogsGb >= 0 ? monthlyLogsGb : 0;
  const safeLocations = checkLocations > 0 ? checkLocations : 1;

  // 1. Better Stack (Published 2026 list model: ~$29/mo per responder seat annual, bundled 50 monitors + 1 status page,
  // extra monitor packs ~$21 per 50 monitors, extra status page ~$15/mo, Telemetry logs 30GB included then ~$0.10/GB)
  const betterStackSeatCost = safeSeats * 29;
  const extraMonitorPacks = Math.max(0, Math.ceil((safeMonitors - 50) / 50));
  const betterStackMonitorCost = extraMonitorPacks * 21;
  const extraStatusPages = Math.max(0, safeStatusPages - 1);
  const betterStackStatusCost = extraStatusPages * 15;
  const billableBetterStackLogs = Math.max(0, safeLogsGb - 30);
  const betterStackLogCost = billableBetterStackLogs * 0.25; // ingestion + 30-day retention effective rate
  const betterStackMonthly =
    betterStackSeatCost + betterStackMonitorCost + betterStackStatusCost + betterStackLogCost;
  const betterStackAnnual = betterStackMonthly * 12;

  // 2. PagerDuty Business ($41/user/mo annual) + Status Page add-on ($89/mo per extra page beyond basic) + External Pingdom/Uptime + Log tool
  // Note: PagerDuty is incident response only; teams still need synthetic checks & log storage
  const pagerDutySeatCost = safeSeats * 41;
  const pagerDutyStatusCost = safeStatusPages > 1 ? (safeStatusPages - 1) * 89 : 0;
  const externalUptimeCost = Math.ceil(safeMonitors / 50) * 45;
  const externalLogCost = safeLogsGb * 0.5;
  const pagerDutyMonthly =
    pagerDutySeatCost + pagerDutyStatusCost + externalUptimeCost + externalLogCost;
  const pagerDutyAnnual = pagerDutyMonthly * 12;

  // 3. Datadog (Synthetics $5 per 10,000 API test runs + On-Call/Incident ~$20-$30/seat + Logs ingestion $0.10/GB + Indexing ~$1.70/M events)
  // 30-second interval = 2 checks/min * 60 * 24 * 30 = 86,400 runs/month per monitor per location
  const monthlyTestRuns = safeMonitors * 86400 * safeLocations;
  const datadogSyntheticsCost = (monthlyTestRuns / 10000) * 5;
  const datadogOnCallCost = safeSeats * 25;
  // Approx 1 GB logs ≈ 1M log events; ingestion ($0.10/GB) + 15-day standard indexing ($1.70/M events) ≈ $1.80/GB
  const datadogLogCost = safeLogsGb * 1.8;
  const datadogMonthly = datadogSyntheticsCost + datadogOnCallCost + datadogLogCost;
  const datadogAnnual = datadogMonthly * 12;

  const annualSavingsVsPagerDuty = pagerDutyAnnual - betterStackAnnual;
  const annualSavingsVsDatadog = datadogAnnual - betterStackAnnual;

  return (
    <div className="bg-white border-2 border-slate-900 rounded-2xl p-5 sm:p-7 shadow-sm my-8">
      <div className="text-xs font-extrabold uppercase tracking-wider text-indigo-600 mb-1">
        Interactive SRE &amp; DevOps Observability TCO Engine
      </div>
      <h3 className="text-xl font-extrabold text-slate-900 mb-4">
        Calculate Annual Incident Management, 30-Sec Uptime &amp; Log Ingestion Costs
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-5">
        <div>
          <label
            htmlFor="sreSeatsInput"
            className="block text-xs font-bold text-slate-700 mb-1.5"
          >
            On-Call Responder Seats
          </label>
          <input
            id="sreSeatsInput"
            type="number"
            min={1}
            max={1000}
            value={seats}
            onChange={(e) => setSeats(Number(e.target.value) || 1)}
            className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm font-semibold text-slate-900"
          />
        </div>

        <div>
          <label
            htmlFor="monitorsInput"
            className="block text-xs font-bold text-slate-700 mb-1.5"
          >
            30-Sec Uptime Monitors
          </label>
          <input
            id="monitorsInput"
            type="number"
            min={1}
            max={5000}
            value={monitors}
            onChange={(e) => setMonitors(Number(e.target.value) || 1)}
            className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm font-semibold text-slate-900"
          />
        </div>

        <div>
          <label
            htmlFor="locationsSelect"
            className="block text-xs font-bold text-slate-700 mb-1.5"
          >
            Check Regions per Monitor
          </label>
          <select
            id="locationsSelect"
            value={checkLocations}
            onChange={(e) => setCheckLocations(Number(e.target.value) || 1)}
            className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm font-semibold text-slate-900 bg-white"
          >
            <option value={1}>1 Region (86.4k runs/mo)</option>
            <option value={3}>3 Regions (259.2k runs/mo)</option>
            <option value={5}>5 Regions (432.0k runs/mo)</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="statusPagesInput"
            className="block text-xs font-bold text-slate-700 mb-1.5"
          >
            Public/Private Status Pages
          </label>
          <input
            id="statusPagesInput"
            type="number"
            min={0}
            max={100}
            value={statusPages}
            onChange={(e) => setStatusPages(Number(e.target.value) || 0)}
            className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm font-semibold text-slate-900"
          />
        </div>

        <div>
          <label
            htmlFor="logsGbInput"
            className="block text-xs font-bold text-slate-700 mb-1.5"
          >
            Monthly Log Volume (GB)
          </label>
          <input
            id="logsGbInput"
            type="number"
            min={0}
            max={50000}
            value={monthlyLogsGb}
            onChange={(e) => setMonthlyLogsGb(Number(e.target.value) || 0)}
            className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm font-semibold text-slate-900"
          />
        </div>
      </div>

      <button
        type="button"
        id="calcIncidentBtn"
        onClick={() => setCalcRun((r) => r + 1)}
        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-xl text-sm transition cursor-pointer mb-5"
      >
        Recalculate Annual Observability &amp; On-Call TCO
      </button>

      <div
        id="incidentResultBox"
        className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5"
      >
        <div className="flex flex-wrap items-baseline justify-between gap-2 pb-3 mb-4 border-b border-slate-200">
          <span className="text-xs font-bold uppercase tracking-wide text-slate-500">
            Monthly Synthetic Check Execution Volume ({safeMonitors} monitors &times; 30s &times;{" "}
            {safeLocations} regions):
          </span>
          <strong className="text-xl sm:text-2xl font-extrabold text-slate-900">
            {monthlyTestRuns.toLocaleString("en-US")} checks / month
          </strong>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm mb-4">
          <div className="bg-white border-2 border-emerald-400 rounded-lg p-3.5">
            <div className="text-xs font-bold text-emerald-800 uppercase">
              Better Stack (Uptime + Telemetry)
            </div>
            <div className="text-lg font-extrabold text-slate-900 mt-1">
              ${betterStackMonthly.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} / mo
            </div>
            <div className="text-xs font-semibold text-emerald-700 mt-0.5">
              Annual TCO: ${betterStackAnnual.toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 0 })} / yr
            </div>
            <div className="text-xs text-slate-600 mt-1.5">
              Seats: ${betterStackSeatCost}/mo &bull; Monitors/Status: $
              {betterStackMonitorCost + betterStackStatusCost}/mo &bull; ClickHouse Logs: $
              {betterStackLogCost.toFixed(2)}/mo
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-lg p-3.5">
            <div className="text-xs font-bold text-slate-700 uppercase">
              PagerDuty Business + External Stack
            </div>
            <div className="text-lg font-extrabold text-slate-900 mt-1">
              ${pagerDutyMonthly.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} / mo
            </div>
            <div className="text-xs font-semibold text-slate-700 mt-0.5">
              Annual TCO: ${pagerDutyAnnual.toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 0 })} / yr
            </div>
            <div className="text-xs text-slate-600 mt-1.5">
              PD Seats: ${pagerDutySeatCost}/mo &bull; Status Add-on: ${pagerDutyStatusCost}/mo
              &bull; Ext Uptime/Logs: ${(externalUptimeCost + externalLogCost).toFixed(0)}/mo
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-lg p-3.5">
            <div className="text-xs font-bold text-slate-700 uppercase">
              Datadog (Synthetics + On-Call + Logs)
            </div>
            <div className="text-lg font-extrabold text-slate-900 mt-1">
              ${datadogMonthly.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} / mo
            </div>
            <div className="text-xs font-semibold text-slate-700 mt-0.5">
              Annual TCO: ${datadogAnnual.toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 0 })} / yr
            </div>
            <div className="text-xs text-slate-600 mt-1.5">
              Synthetics ($5/10k): ${datadogSyntheticsCost.toFixed(0)}/mo &bull; On-Call: $
              {datadogOnCallCost}/mo &bull; Indexed Logs: ${datadogLogCost.toFixed(0)}/mo
            </div>
          </div>
        </div>

        <div className="text-xs font-semibold text-indigo-900 bg-indigo-50 border border-indigo-200 rounded-lg px-3.5 py-2.5">
          Estimated Annual TCO Delta (Run #{calcRun}): Better Stack saves{" "}
          <strong>
            ${Math.max(0, annualSavingsVsPagerDuty).toLocaleString("en-US", { maximumFractionDigits: 0 })}/yr
          </strong>{" "}
          vs. PagerDuty Business stack and{" "}
          <strong>
            ${Math.max(0, annualSavingsVsDatadog).toLocaleString("en-US", { maximumFractionDigits: 0 })}/yr
          </strong>{" "}
          vs. Datadog Synthetics + Indexed Logs at {safeMonitors} 30-second monitors.
        </div>
      </div>
    </div>
  );
}
