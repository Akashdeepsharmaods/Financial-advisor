'use client';

import React, { useState } from 'react';

export default function CaseStudies() {
  const [filter, setFilter] = useState<'all' | 'founder' | 'family' | 'nri'>('all');

  const cases = [
    {
      category: 'founder',
      badge: 'Tech Founder Secondary Liquidity',
      badgeColor: 'amber',
      location: 'Bengaluru • 2023',
      title: 'Restructuring ₹65 Cr Secondary Share Sale with Zero Unnecessary Tax Drag',
      stats: [
        { label: 'Capital Handled', value: '₹65.0 Cr', highlight: false },
        { label: 'Tax Shield Saved', value: '₹8.4 Cr', highlight: 'emerald' },
        { label: 'Perpetual Yield', value: '9.8% p.a.', highlight: 'amber' },
      ],
      desc: 'Client executed a partial equity exit in a Series C fintech. We structured a Section 54EE and private family holding company model, diverting proceeds into low-beta arbitrage, REIT yields, and venture co-investments to replace active salary with monthly tax-free cash flows.'
    },
    {
      category: 'family',
      badge: '3rd-Gen Manufacturing Group',
      badgeColor: 'emerald',
      location: 'Mumbai • 2022',
      title: '₹180 Cr Multi-Entity Family Trust & Succession Governance',
      stats: [
        { label: 'Assets Unified', value: '₹180.0 Cr', highlight: false },
        { label: 'Probate Risk', value: '0% Delay', highlight: 'emerald' },
        { label: 'Generations', value: '3 Generations', highlight: 'amber' },
      ],
      desc: 'Resolved complex promoter cross-holding friction across 4 operating private limited entities. Formed a multi-tier private family irrevocable trust with institutional governance guidelines, preventing future dispute fragmentation.'
    },
    {
      category: 'founder',
      badge: 'Corporate Treasury Optimization',
      badgeColor: 'amber',
      location: 'Gurugram • 2024',
      title: 'Enhancing ₹45 Cr Idle Healthcare Treasury from 5.5% to 11.2% Net',
      stats: [
        { label: 'Treasury Pool', value: '₹45.0 Cr', highlight: false },
        { label: 'Additional Alpha', value: '+₹2.56 Cr', highlight: 'emerald' },
        { label: 'T+1 Liquidity', value: '100% Backed', highlight: 'amber' },
      ],
      desc: 'Reallocated idle hospital group bank deposits into Category II Senior Secured Private Credit (12.4% gross) and Overnight Arbitrage, retaining instant 48-hour working capital liquidity while doubling corporate bottom-line interest yield.'
    },
    {
      category: 'nri',
      badge: 'Cross-Border US-India Repatriation',
      badgeColor: 'purple',
      location: 'Bay Area / Mumbai • 2023',
      title: '$4.2M Dollar-Rupee Hedging & Returning NRI Tax Shielding',
      stats: [
        { label: 'Dollar Portfolio', value: '$4.2 Million', highlight: false },
        { label: 'Double Tax Risk', value: '0% Penalty', highlight: 'emerald' },
        { label: 'RNOR Window', value: '3 Yrs Preserved', highlight: 'amber' },
      ],
      desc: "Facilitated a Silicon Valley Senior VP's relocation back to India. Engineered RNOR (Resident but Not Ordinarily Resident) transition, protecting offshore 401(k) and RSU vesting from domestic taxation while seizing high-growth Indian equity opportunities."
    }
  ];

  const filteredCases = filter === 'all' ? cases : cases.filter(c => c.category === filter);

  return (
    <section id="case-studies" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-amber-400 font-bold font-mono">CONFIDENTIAL CLIENT ARCHIVES</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-100 mt-2">
              Realized Capital Outcomes & Tax Optimization
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
              Strict client confidentiality preserved under NDA. Figures and asset allocations reflect actual client engagements.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                filter === 'all'
                  ? 'bg-amber-500/20 border border-amber-400 text-amber-300'
                  : 'bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              All Mandates
            </button>
            <button
              onClick={() => setFilter('founder')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                filter === 'founder'
                  ? 'bg-amber-500/20 border border-amber-400 text-amber-300'
                  : 'bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              Tech Founders
            </button>
            <button
              onClick={() => setFilter('family')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                filter === 'family'
                  ? 'bg-amber-500/20 border border-amber-400 text-amber-300'
                  : 'bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              Family Business
            </button>
            <button
              onClick={() => setFilter('nri')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                filter === 'nri'
                  ? 'bg-amber-500/20 border border-amber-400 text-amber-300'
                  : 'bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              Cross-Border NRI
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCases.map((item, idx) => (
            <div key={idx} className="glass-panel p-8 rounded-2xl border-slate-800 space-y-5">
              <div className="flex items-center justify-between">
                <span className={`text-[11px] font-mono px-2.5 py-1 rounded uppercase ${
                  item.badgeColor === 'emerald'
                    ? 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/20'
                    : item.badgeColor === 'purple'
                    ? 'bg-purple-500/10 text-purple-300 border border-purple-500/20'
                    : 'bg-amber-500/10 text-amber-300 border border-amber-500/20'
                }`}>
                  {item.badge}
                </span>
                <span className="text-xs text-slate-400 font-mono">{item.location}</span>
              </div>

              <h3 className="font-serif text-xl font-bold text-slate-100">
                {item.title}
              </h3>

              <div className="grid grid-cols-3 gap-3 p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 text-center">
                {item.stats.map((s, i) => (
                  <div key={i}>
                    <p className="text-[10px] text-slate-400 uppercase">{s.label}</p>
                    <p className={`text-sm font-bold font-mono ${
                      s.highlight === 'emerald'
                        ? 'text-emerald-400'
                        : s.highlight === 'amber'
                        ? 'text-amber-300'
                        : 'text-slate-100'
                    }`}>
                      {s.value}
                    </p>
                  </div>
                ))}
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
