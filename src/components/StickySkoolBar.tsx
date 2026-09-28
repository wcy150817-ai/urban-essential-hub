"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

export default function StickySkoolBar() {
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
      className={`fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-orange-200/80 px-4 py-3 shadow-2xl transition-all duration-300 transform ${
        showStickyBar ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="max-w-4xl mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-orange-100 border border-orange-200 flex items-center justify-center shrink-0 text-orange-600 font-black">
            S
          </div>
          <div>
            <div className="text-xs sm:text-sm font-black text-slate-900 flex items-center gap-1.5">
              <span>Skool for Course Creators</span>
              <span className="hidden sm:inline-block px-2 py-0.5 rounded-full bg-orange-100 text-orange-800 text-[10px] font-bold">
                14-Day Free Trial
              </span>
            </div>
            <div className="text-[11px] text-slate-500 hidden sm:block">
              Build recurring MRR &bull; Unlimited students &bull; 0% platform cuts
            </div>
          </div>
        </div>

        <a
          href="https://www.skool.com/signup?ref=dfdaa1968c7442149993730d69fa0487"
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="cta-glow inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-orange-500/30 transition shrink-0 cursor-pointer hover:scale-105"
        >
          <span>Start Free Creator Trial</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}
