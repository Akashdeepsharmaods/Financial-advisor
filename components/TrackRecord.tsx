import React from 'react';

interface TrackRecordProps {
  onOpenNda?: () => void;
}

export default function TrackRecord({ onOpenNda }: TrackRecordProps) {
  return (
    <section id="track-record" className="py-24 bg-[#070D22]/60 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs uppercase tracking-widest text-emerald-400 font-bold font-mono">AUDITED PERFORMANCE</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-100">
              Unwavering Alpha Through Market Cycles
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              True wealth management is not about chasing momentum at the peak; it is about asymmetric capital protection during drawdowns and systematic compounding during expansions.
            </p>
            
            <div className="space-y-4 pt-2">
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900/70 border border-slate-800">
                <span className="text-xs text-slate-300">Sharpe Ratio (5-Year Risk-Adjusted)</span>
                <span className="font-mono font-bold text-emerald-400">1.84 (vs Nifty 1.12)</span>
              </div>
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900/70 border border-slate-800">
                <span className="text-xs text-slate-300">2020 March Correction Max Drawdown</span>
                <span className="font-mono font-bold text-amber-300">-12.8% (vs Benchmark -38.4%)</span>
              </div>
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900/70 border border-slate-800">
                <span className="text-xs text-slate-300">Commission Leakage Saved to Clients</span>
                <span className="font-mono font-bold text-emerald-400">₹14.2+ Cr in 5 Yrs</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-2xl border-slate-800">
            <h3 className="font-serif text-lg font-bold text-slate-100 mb-6 flex items-center justify-between">
              <span>Cumulative Multi-Asset Strategy Performance</span>
              <span className="text-xs font-mono text-slate-400">Audited CAGR (2019-2024)</span>
            </h3>

            <div className="space-y-5">
              {/* Metric 1 */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-amber-300 flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span> Vikramaditya Roy Core Advisory Alpha
                  </span>
                  <span className="font-mono text-amber-300 font-bold">18.4% CAGR</span>
                </div>
                <div className="w-full bg-slate-800 h-3.5 rounded-full overflow-hidden p-0.5 border border-amber-500/20">
                  <div className="bg-gradient-to-r from-amber-500 to-amber-300 h-full rounded-full" style={{ width: '92%' }}></div>
                </div>
              </div>

              {/* Metric 2 */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-slate-300 flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-500"></span> NIFTY 50 Total Return Index (TRI)
                  </span>
                  <span className="font-mono text-slate-300">12.8% CAGR</span>
                </div>
                <div className="w-full bg-slate-800 h-3 rounded-full overflow-hidden">
                  <div className="bg-slate-500 h-full rounded-full" style={{ width: '64%' }}></div>
                </div>
              </div>

              {/* Metric 3 */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-600"></span> Mutual Fund Hybrid Category Average
                  </span>
                  <span className="font-mono text-slate-400">10.4% CAGR</span>
                </div>
                <div className="w-full bg-slate-800 h-3 rounded-full overflow-hidden">
                  <div className="bg-slate-600 h-full rounded-full" style={{ width: '52%' }}></div>
                </div>
              </div>

              {/* Metric 4 */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-slate-500 flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-700"></span> 10Y Indian Sovereign G-Sec Benchmark
                  </span>
                  <span className="font-mono text-slate-500">7.1% CAGR</span>
                </div>
                <div className="w-full bg-slate-800 h-3 rounded-full overflow-hidden">
                  <div className="bg-slate-700 h-full rounded-full" style={{ width: '35%' }}></div>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200 flex items-center justify-between">
              <span>Want to audit the complete historical transaction ledger?</span>
              <button
                onClick={onOpenNda}
                className="font-bold underline underline-offset-4 hover:text-white transition-colors"
              >
                Request Confidential Track Record Report
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
