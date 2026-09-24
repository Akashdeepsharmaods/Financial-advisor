import React from 'react';
import { PieChart, Landmark, Briefcase, Gem, CheckCircle, ChevronRight } from 'lucide-react';

interface CoreServicesProps {
  onSelectService?: (objective: string) => void;
}

export default function CoreServices({ onSelectService }: CoreServicesProps) {
  const handleInquire = (objective: string) => {
    if (onSelectService) {
      onSelectService(objective);
    } else {
      const el = document.getElementById('consultation');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="expertise" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase tracking-widest text-amber-400 font-bold font-mono">BESPOKE EXPERTISE</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-100">
            Institutional-Grade Solutions for Significant Capital
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            We operate exclusively on a fee-only fiduciary model. Every recommendation is engineered strictly to preserve capital, minimize tax drag, and capture asymmetric upside.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Pillar 1 */}
          <div className="glass-panel glass-panel-hover p-8 rounded-2xl flex flex-col justify-between border-slate-800 group relative">
            <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 rounded-bl-full pointer-events-none group-hover:bg-amber-500/10 transition-colors"></div>
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-300 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <PieChart className="w-6 h-6" />
              </div>
              <p className="text-xs text-amber-400 font-mono font-semibold uppercase tracking-wider mb-2">Pillar 01</p>
              <h3 className="font-serif text-xl font-bold text-slate-100 mb-3 group-hover:text-amber-300 transition-colors">
                Discretionary HNI Portfolio Management
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-6">
                Custom multi-asset allocation spanning Large/Mid Alpha Equities, Sovereign Debt Ladders, REITs, and Direct Indexing with zero mutual fund distributor commission leakage.
              </p>
              <ul className="space-y-2 text-xs text-slate-300 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  <span>Direct Demat Institutional Ownership</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  <span>Tax-Loss Harvesting & Rebalancing</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  <span>Asymmetric Downside Hedging</span>
                </li>
              </ul>
            </div>
            <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
              <span className="text-[11px] font-mono text-slate-400">Min. ₹2 Cr Corpus</span>
              <button
                type="button"
                onClick={() => handleInquire('HNW Portfolio Optimization & Alpha')}
                className="text-xs font-semibold text-amber-400 hover:text-amber-300 flex items-center gap-1 transition-colors"
              >
                Inquire <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="glass-panel glass-panel-hover p-8 rounded-2xl flex flex-col justify-between border-slate-800 group relative">
            <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-bl-full pointer-events-none group-hover:bg-emerald-500/10 transition-colors"></div>
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Landmark className="w-6 h-6" />
              </div>
              <p className="text-xs text-emerald-400 font-mono font-semibold uppercase tracking-wider mb-2">Pillar 02</p>
              <h3 className="font-serif text-xl font-bold text-slate-100 mb-3 group-hover:text-emerald-300 transition-colors">
                Estate & Generational Succession Trusts
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-6">
                Ring-fencing family assets against litigation, probate delays, and future estate tax exposures through Private Family Trusts, Wills, and cross-border governance charters.
              </p>
              <ul className="space-y-2 text-xs text-slate-300 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  <span>Private Family Trust Structuring</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  <span>Cross-Border NRI Succession</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  <span>Asset Ring-Fencing & Governance</span>
                </li>
              </ul>
            </div>
            <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
              <span className="text-[11px] font-mono text-slate-400">Custom Retainer</span>
              <button
                type="button"
                onClick={() => handleInquire('Estate, Trust & Succession')}
                className="text-xs font-semibold text-amber-400 hover:text-amber-300 flex items-center gap-1 transition-colors"
              >
                Inquire <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="glass-panel glass-panel-hover p-8 rounded-2xl flex flex-col justify-between border-slate-800 group relative">
            <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 rounded-bl-full pointer-events-none group-hover:bg-amber-500/10 transition-colors"></div>
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-300 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Briefcase className="w-6 h-6" />
              </div>
              <p className="text-xs text-amber-400 font-mono font-semibold uppercase tracking-wider mb-2">Pillar 03</p>
              <h3 className="font-serif text-xl font-bold text-slate-100 mb-3 group-hover:text-amber-300 transition-colors">
                Corporate Treasury & Tax Arbitrage
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-6">
                Transforming low-yield corporate bank deposits into high-yield, short-duration arbitrage instruments, structured debt notes, and tax-shielded corporate treasuries.
              </p>
              <ul className="space-y-2 text-xs text-slate-300 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  <span>Zero Lock-in Liquidity Management</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  <span>Pre-Tax to Post-Tax Spread Boost</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  <span>Promoter Secondary Exit Tax Shield</span>
                </li>
              </ul>
            </div>
            <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
              <span className="text-[11px] font-mono text-slate-400">Min. ₹5 Cr Treasury</span>
              <button
                type="button"
                onClick={() => handleInquire('Corporate Treasury & Tax Arbitrage')}
                className="text-xs font-semibold text-amber-400 hover:text-amber-300 flex items-center gap-1 transition-colors"
              >
                Inquire <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Pillar 4 */}
          <div className="glass-panel glass-panel-hover p-8 rounded-2xl flex flex-col justify-between border-slate-800 group relative">
            <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/5 rounded-bl-full pointer-events-none group-hover:bg-purple-500/10 transition-colors"></div>
            <div>
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-300 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Gem className="w-6 h-6" />
              </div>
              <p className="text-xs text-purple-400 font-mono font-semibold uppercase tracking-wider mb-2">Pillar 04</p>
              <h3 className="font-serif text-xl font-bold text-slate-100 mb-3 group-hover:text-purple-300 transition-colors">
                Alternative Assets & Private Credit
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-6">
                Exclusive curation of Category II/III AIFs, senior secured real estate debt yielding 12-14%, vetted Pre-IPO secondary rounds, and global private equity co-investments.
              </p>
              <ul className="space-y-2 text-xs text-slate-300 mb-6">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  <span>Institutional Due Diligence Dossiers</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  <span>Senior Secured 12-14% Credit</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  <span>Direct Pre-IPO Secondary Allocation</span>
                </li>
              </ul>
            </div>
            <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
              <span className="text-[11px] font-mono text-slate-400">SEBI Accredited HNI</span>
              <button
                type="button"
                onClick={() => handleInquire('Multi-Family Office Mandate')}
                className="text-xs font-semibold text-amber-400 hover:text-amber-300 flex items-center gap-1 transition-colors"
              >
                Inquire <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}



