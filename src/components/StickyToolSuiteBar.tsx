"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, Sparkles } from "lucide-react";

export default function StickyToolSuiteBar() {
  const [showStickyBar, setShowStickyBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setShowStickyBar(true);
      } else {
        setShowStickyBar(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-indigo-200/80 px-4 py-3 shadow-2xl transition-all duration-300 transform ${
        showStickyBar ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="max-w-4xl mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-indigo-100 border border-indigo-200 flex items-center justify-center shrink-0 text-indigo-600 font-black">
            <Sparkles className="w-5 h-5 text-indigo-600" />
          </div>
          <div>
            <div className="text-xs sm:text-sm font-black text-slate-900 flex items-center gap-1.5">
              <span>ToolSuite Shared-Access Bundle</span>
              <span className="hidden sm:inline-block px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-800 text-[10px] font-bold">
                ~$29.95/mo on Whop
              </span>
            </div>
            <div className="text-[11px] text-slate-500 hidden sm:block">
              Ecom Ad-Spy &bull; AI Research &bull; Review Shared-Session Trade-Offs First
            </div>
          </div>
        </div>

        <a
          href="https://whop.com/toolsuite?a=wcyb5"
          target="_blank"
          rel="sponsored noopener"
          style={{ backgroundColor: "#4f46e5", color: "#ffffff" }}
          className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm shadow-md transition shrink-0"
        >
          <span>Check ToolSuite on Whop</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}
