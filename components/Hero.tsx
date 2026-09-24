'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { ShieldCheck, Award, Lock, ArrowRight, Calculator, TrendingUp } from 'lucide-react';

export default function Hero() {
  const [aum, setAum] = useState(0);
  const [alpha, setAlpha] = useState(0);
  const [retention, setRetention] = useState(0);
  const [families, setFamilies] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const start = performance.now();

    const animate = (time: number) => {
      const progress = Math.min((time - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);

      setAum(Math.round(ease * 850));
      setAlpha(parseFloat((ease * 18.4).toFixed(1)));
      setRetention(parseFloat((ease * 99.4).toFixed(1)));
      setFamilies(Math.round(ease * 140));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, []);

  return (
    <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-28 overflow-hidden">
      {/* Ambient Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition & Authority */}
          <div className="lg:col-span-7 space-y-7">
            
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/80 border border-amber-400/30 shadow-inner">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
              <span className="text-xs font-bold tracking-widest text-amber-300 uppercase font-mono">
                CHAMPIONING ULTRA-HNI & FAMILY OFFICES
              </span>
            </div>

            {/* Main Hero Title - single H1 per SEO best practice */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[58px] leading-[1.12] font-bold text-slate-100">
              Preserving Wealth. <br />
              <span className="gold-gradient-text">Compounding Legacy</span> Across Generations.
            </h1>

            {/* Subtitle / Positioning */}
            <p className="text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
              Bespoke fiduciary wealth advisory for founders, corporate leaders, and multi-generational business families. Zero product commissions, absolute alignment of interest, and institutional-grade alpha generation.
            </p>

            {/* Credential Badges Row */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800 text-xs text-slate-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>SEBI Reg. Advisor (INA00019482)</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800 text-xs text-slate-300">
                <Award className="w-4 h-4 text-amber-400" />
                <span>CFA® Charterholder</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800 text-xs text-slate-300">
                <Lock className="w-4 h-4 text-amber-400" />
                <span>Strict NDA & Custody Security</span>
              </div>
            </div>

            {/* Dual Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3">
              <a
                href="#consultation"
                className="btn-gold px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wider text-center flex items-center justify-center gap-3 group"
              >
                <span>Schedule Private Strategy Session</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#calculator"
                className="btn-outline-gold px-6 py-4 rounded-xl text-sm font-semibold text-center flex items-center justify-center gap-2"
              >
                <Calculator className="w-4 h-4 text-amber-400" />
                <span>Simulate Portfolio Compounding</span>
              </a>
            </div>

            {/* Quick Trust Metrics Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-800/80">
              <div>
                <p className="text-xs text-slate-400 uppercase tracking-wider font-medium">Assets Advised</p>
                <p className="text-2xl font-bold text-slate-100 font-mono mt-1">₹{aum}+ Cr</p>
                <p className="text-[11px] text-emerald-400 flex items-center gap-1 mt-0.5 font-medium">
                  <TrendingUp className="w-3 h-3" /> Top 1% in India
                </p>
              </div>
              <div>
                <p className="text-xs text-slate-400 uppercase tracking-wider font-medium">5-Yr CAGR Alpha</p>
                <p className="text-2xl font-bold text-emerald-400 font-mono mt-1">{alpha}%</p>
                <p className="text-[11px] text-slate-400 mt-0.5">vs 12.8% Nifty 50 TRI</p>
              </div>
              <div>
                <p className="text-xs text-slate-400 uppercase tracking-wider font-medium">Retention Rate</p>
                <p className="text-2xl font-bold text-slate-100 font-mono mt-1">{retention}%</p>
                <p className="text-[11px] text-slate-400 mt-0.5">Over 14+ Years</p>
              </div>
              <div>
                <p className="text-xs text-slate-400 uppercase tracking-wider font-medium">Families Advised</p>
                <p className="text-2xl font-bold text-amber-300 font-mono mt-1">{families}+</p>
                <p className="text-[11px] text-slate-400 mt-0.5">Average AUM ₹6.2 Cr</p>
              </div>
            </div>

          </div>

          {/* Right Column: Editorial Visual & Live Floating Metric Badges */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Luxury Frame Wrapper */}
              <div className="relative rounded-2xl p-1 bg-gradient-to-b from-amber-400/40 via-slate-800 to-amber-500/20 shadow-2xl shadow-black/80">
                <div className="relative rounded-[14px] overflow-hidden bg-slate-900 aspect-[4/5] flex items-center justify-center">
                  
                  <Image
                    src="/images/advisor.jpg"
                    alt="Vikramaditya Roy - Senior Wealth Consultant & Family Office Advisor"
                    fill
                    sizes="(max-width: 768px) 100vw, 500px"
                    priority
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/images/advisor-fallback.svg';
                    }}
                    className="object-cover object-top filter brightness-[0.92] contrast-[1.05]"
                  />
                  
                  {/* Gradient Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050814] via-transparent to-transparent opacity-90"></div>
                  
                  {/* Advisor Name Card */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-950/80 backdrop-blur-md border border-amber-500/30">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-serif text-base font-bold text-slate-100">Vikramaditya Roy</h3>
                        <p className="text-xs text-amber-300 font-medium">Managing Partner & Principal Fiduciary</p>
                      </div>
                      <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                        <ShieldCheck className="w-5 h-5" />
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Floating Card 1 (Top Right): Real-time Alpha */}
              <div className="absolute -top-6 -right-4 sm:-right-8 p-3.5 rounded-xl glass-panel-gold animate-float shadow-xl max-w-[210px]">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-slate-300 font-mono">5-YR ALPHA METRIC</span>
                </div>
                <p className="text-sm font-bold text-slate-100 font-mono">+5.6% vs Nifty TRI</p>
                <div className="mt-1 flex items-center justify-between text-[11px] text-emerald-400 font-medium">
                  <span>Annualized Alpha</span>
                  <span className="font-mono font-bold">18.4% Net</span>
                </div>
              </div>

              {/* Floating Card 2 (Bottom Left): Confidential Trust */}
              <div className="absolute -bottom-6 -left-4 sm:-left-8 p-3.5 rounded-xl glass-panel animate-float-delayed shadow-xl max-w-[230px] border-emerald-500/30">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
                    <Lock className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-100">₹42 Cr Trust Executed</p>
                    <p className="text-[10px] text-slate-400">0% Probate Drag • Protected</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
