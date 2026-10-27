"use client";

import React, { useState } from "react";

export default function AutonomousScalingClient() {
  const [monthlyVisits, setMonthlyVisits] = useState<number>(120000);
  const [spikeMultiplier, setSpikeMultiplier] = useState<number>(3);
  const [bandwidthGb, setBandwidthGb] = useState<number>(220);
  const [diskGb, setDiskGb] = useState<number>(30);
  const [sitesCount, setSitesCount] = useState<number>(2);
  const [calcRun, setCalcRun] = useState<number>(1);

  const safeVisits = monthlyVisits > 0 ? monthlyVisits : 1000;
  const safeSpike = spikeMultiplier >= 1 ? spikeMultiplier : 1;
  const safeBw = bandwidthGb > 0 ? bandwidthGb : 10;
  const safeDisk = diskGb > 0 ? diskGb : 5;
  const safeSites = sitesCount > 0 ? sitesCount : 1;

  // 1. Cloudways Autonomous (GKE Kubernetes Auto-Scaling + Bundled Cloudflare Enterprise + Object Cache Pro)
  // Published reference tiers:
  // Plan 1 ($35/mo): 1 app, 30k visits, 15GB disk, 100GB bw
  // Plan 2 ($90/mo): 3 apps, 100k visits, 25GB disk, 200GB bw
  // Plan 3 ($165/mo): 10 apps, 250k visits, 30GB disk, 400GB bw
  // Plan 4 ($310/mo): 20 apps, 500k visits, 50GB disk, 800GB bw
  let autoBase = 35;
  let autoPlanName = "Plan 1 ($35/mo)";
  let incVisits = 30000;
  let incDisk = 15;
  let incBw = 100;

  if (safeVisits > 250000 || safeSites > 10 || safeDisk > 35) {
    autoBase = 310;
    autoPlanName = "Plan 4 ($310/mo)";
    incVisits = 500000;
    incDisk = 50;
    incBw = 800;
  } else if (safeVisits > 100000 || safeSites > 3) {
    autoBase = 165;
    autoPlanName = "Plan 3 ($165/mo)";
    incVisits = 250000;
    incDisk = 30;
    incBw = 400;
  } else if (safeVisits > 30000 || safeSites > 1) {
    autoBase = 90;
    autoPlanName = "Plan 2 ($90/mo)";
    incVisits = 100000;
    incDisk = 25;
    incBw = 200;
  }

  const extraVisitsK = Math.max(0, Math.ceil((safeVisits - incVisits) / 1000));
  const extraBwGb = Math.max(0, safeBw - incBw);
  const extraDiskBlocks = Math.max(0, Math.ceil((safeDisk - incDisk) / 5));
  const autoOverage = extraVisitsK * 1.5 + extraBwGb * 0.08 + extraDiskBlocks * 5;
  const autonomousMonthly = autoBase + autoOverage;

  // 2. Cloudways Flexible (DO Premium / Vultr HF VM + $4.99/domain Cloudflare Enterprise + $0.033/GB backup)
  // Because Flexible VMs do not horizontally auto-scale PHP workers during a flash spike,
  // you must provision for (average load * spike headroom)
  const effectivePeakEquivalentVisits = safeVisits * (1 + (safeSpike - 1) * 0.5);
  let flexVmBase = 28; // 2GB Premium
  let flexVmSpec = "2GB / 1 vCPU Premium";
  if (effectivePeakEquivalentVisits > 400000 || safeDisk > 160) {
    flexVmBase = 174;
    flexVmSpec = "16GB / 8 vCPU Premium";
  } else if (effectivePeakEquivalentVisits > 150000 || safeDisk > 80) {
    flexVmBase = 99;
    flexVmSpec = "8GB / 4 vCPU Premium";
  } else if (effectivePeakEquivalentVisits > 60000 || safeDisk > 50) {
    flexVmBase = 54;
    flexVmSpec = "4GB / 2 vCPU Premium";
  }
  const cfEnterpriseAddOn = safeSites * 4.99;
  const flexBackupCost = Math.max(1, Math.round(safeDisk * 0.066 * 100) / 100);
  const flexibleMonthly = flexVmBase + cfEnterpriseAddOn + flexBackupCost;

  // 3. Kinsta Managed WordPress (Visit-capped plans + $20/10GB disk add-on + $1.50/1k visit overage)
  let kinstaBase = 35;
  let kinstaTier = "Single 35k / WP 2";
  let kinstaIncVisits = 35000;
  let kinstaIncDisk = 10;

  if (safeVisits > 250000 || safeSites > 10) {
    kinstaBase = 340;
    kinstaTier = "WP 20 (400k visits)";
    kinstaIncVisits = 400000;
    kinstaIncDisk = 50;
  } else if (safeVisits > 125000 || safeSites > 5) {
    kinstaBase = 225;
    kinstaTier = "WP 10 (250k visits)";
    kinstaIncVisits = 250000;
    kinstaIncDisk = 40;
  } else if (safeVisits > 65000 || safeSites > 2) {
    kinstaBase = 115;
    kinstaTier = "WP 5 (125k visits)";
    kinstaIncVisits = 125000;
    kinstaIncDisk = 30;
  } else if (safeVisits > 35000 || safeSites > 1) {
    kinstaBase = 70;
    kinstaTier = "WP 2 (70k visits)";
    kinstaIncVisits = 70000;
    kinstaIncDisk = 20;
  }

  const kinstaDiskAddOn = Math.max(0, Math.ceil((safeDisk - kinstaIncDisk) / 10)) * 20;
  const kinstaVisitOverage = Math.max(0, Math.ceil((safeVisits - kinstaIncVisits) / 1000)) * 1.5;
  const kinstaMonthly = kinstaBase + kinstaDiskAddOn + kinstaVisitOverage;

  return (
    <div className="bg-white border-2 border-slate-900 rounded-2xl p-5 sm:p-7 shadow-sm my-8">
      <div className="text-xs font-extrabold uppercase tracking-wider text-indigo-600 mb-1">
        Interactive High-Traffic WordPress &amp; WooCommerce TCO Calculator
      </div>
      <h3 className="text-xl font-extrabold text-slate-900 mb-4">
        Compare Cloudways Autonomous (GKE) vs. Cloudways Flexible (VM) vs. Kinsta
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-5">
        <div>
          <label
            htmlFor="visitsInput"
            className="block text-xs font-bold text-slate-700 mb-1.5"
          >
            Monthly Visits
          </label>
          <input
            id="visitsInput"
            type="number"
            min={1000}
            max={5000000}
            step={5000}
            value={monthlyVisits}
            onChange={(e) => setMonthlyVisits(Number(e.target.value) || 1000)}
            className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm font-semibold text-slate-900"
          />
        </div>

        <div>
          <label
            htmlFor="spikeSelect"
            className="block text-xs font-bold text-slate-700 mb-1.5"
          >
            Peak Traffic Spike Multiplier
          </label>
          <select
            id="spikeSelect"
            value={spikeMultiplier}
            onChange={(e) => setSpikeMultiplier(Number(e.target.value) || 1)}
            className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm font-semibold text-slate-900 bg-white"
          >
            <option value={1}>1x (Steady Evergreen SEO)</option>
            <option value={3}>3x (Email Blast / Product Drop)</option>
            <option value={6}>6x (Black Friday / Viral Burst)</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="bwInput"
            className="block text-xs font-bold text-slate-700 mb-1.5"
          >
            Monthly Bandwidth (GB)
          </label>
          <input
            id="bwInput"
            type="number"
            min={10}
            max={10000}
            value={bandwidthGb}
            onChange={(e) => setBandwidthGb(Number(e.target.value) || 10)}
            className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm font-semibold text-slate-900"
          />
        </div>

        <div>
          <label
            htmlFor="diskInput"
            className="block text-xs font-bold text-slate-700 mb-1.5"
          >
            Disk Storage (GB)
          </label>
          <input
            id="diskInput"
            type="number"
            min={5}
            max={1000}
            value={diskGb}
            onChange={(e) => setDiskGb(Number(e.target.value) || 5)}
            className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm font-semibold text-slate-900"
          />
        </div>

        <div>
          <label
            htmlFor="sitesInput"
            className="block text-xs font-bold text-slate-700 mb-1.5"
          >
            Number of WP Sites
          </label>
          <input
            id="sitesInput"
            type="number"
            min={1}
            max={50}
            value={sitesCount}
            onChange={(e) => setSitesCount(Number(e.target.value) || 1)}
            className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm font-semibold text-slate-900"
          />
        </div>
      </div>

      <button
        type="button"
        id="calcScalingBtn"
        onClick={() => setCalcRun((r) => r + 1)}
        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-xl text-sm transition cursor-pointer mb-5"
      >
        Calculate Monthly &amp; Annual Managed WordPress Infrastructure TCO
      </button>

      <div
        id="scalingResultBox"
        className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5"
      >
        <div className="flex flex-wrap items-baseline justify-between gap-2 pb-3 mb-4 border-b border-slate-200">
          <span className="text-xs font-bold uppercase tracking-wide text-slate-500">
            Workload Profile ({safeVisits.toLocaleString("en-US")} visits/mo &bull; {safeSpike}x peak
            burst &bull; {safeSites} {safeSites === 1 ? "site" : "sites"}):
          </span>
          <strong className="text-lg sm:text-xl font-extrabold text-slate-900">
            CF Enterprise + Redis Object Cache Pro Included
          </strong>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm mb-4">
          <div className="bg-white border-2 border-indigo-400 rounded-lg p-3.5">
            <div className="text-xs font-bold text-indigo-800 uppercase">
              Cloudways Autonomous ({autoPlanName})
            </div>
            <div className="text-lg font-extrabold text-slate-900 mt-1">
              ${autonomousMonthly.toFixed(2)} / mo
            </div>
            <div className="text-xs font-semibold text-indigo-700 mt-0.5">
              Annual: ${(autonomousMonthly * 12).toFixed(0)} / yr
            </div>
            <div className="text-xs text-slate-600 mt-1.5">
              GKE Kubernetes auto-scaling pods &bull; $0 CF Enterprise &bull; Overage: $
              {autoOverage.toFixed(2)}/mo
            </div>
          </div>

          <div className="bg-white border-2 border-emerald-400 rounded-lg p-3.5">
            <div className="text-xs font-bold text-emerald-800 uppercase">
              Cloudways Flexible ({flexVmSpec})
            </div>
            <div className="text-lg font-extrabold text-slate-900 mt-1">
              ${flexibleMonthly.toFixed(2)} / mo
            </div>
            <div className="text-xs font-semibold text-emerald-700 mt-0.5">
              Annual: ${(flexibleMonthly * 12).toFixed(0)} / yr
            </div>
            <div className="text-xs text-slate-600 mt-1.5">
              VM: ${flexVmBase}/mo + CF Ent (${cfEnterpriseAddOn.toFixed(2)}) + Backups ($
              {flexBackupCost.toFixed(2)}) &bull; Zero visit caps
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-lg p-3.5">
            <div className="text-xs font-bold text-slate-700 uppercase">
              Kinsta ({kinstaTier})
            </div>
            <div className="text-lg font-extrabold text-slate-900 mt-1">
              ${kinstaMonthly.toFixed(2)} / mo
            </div>
            <div className="text-xs font-semibold text-slate-700 mt-0.5">
              Annual: ${(kinstaMonthly * 12).toFixed(0)} / yr
            </div>
            <div className="text-xs text-slate-600 mt-1.5">
              Base: ${kinstaBase}/mo + Disk Add-on (${kinstaDiskAddOn}) + Visit Overage ($
              {kinstaVisitOverage.toFixed(0)})
            </div>
          </div>
        </div>

        <div className="text-xs font-semibold text-indigo-900 bg-indigo-50 border border-indigo-200 rounded-lg px-3.5 py-2.5">
          Architecture Verdict (Scenario #{calcRun}):{" "}
          {safeSpike >= 3
            ? `With a ${safeSpike}x traffic spike multiplier (e.g., WooCommerce flash sale), Cloudways Autonomous automatically spins up extra GKE Kubernetes PHP pods without downtime, saving $${Math.max(0, (kinstaMonthly - autonomousMonthly) * 12).toFixed(0)}/yr vs. Kinsta.`
            : `For steady traffic without sudden 3x–6x checkout spikes, Cloudways Flexible (${flexVmSpec}) delivers the lowest TCO at $${flexibleMonthly.toFixed(2)}/mo with zero monthly visit counters.`}
        </div>
      </div>
    </div>
  );
}
