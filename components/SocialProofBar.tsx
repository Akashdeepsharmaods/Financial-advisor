import React from 'react';

export default function SocialProofBar() {
  return (
    <section className="border-y border-slate-800/80 bg-[#070D22]/60 py-10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          
          <div className="md:w-1/4">
            <p className="text-xs uppercase tracking-widest text-amber-400 font-bold font-mono">AUTHORITATIVE INSIGHTS</p>
            <p className="text-sm text-slate-300 font-serif font-medium mt-0.5">Featured & Quoted in Premier Financial Media</p>
          </div>

          <div className="md:w-3/4 grid grid-cols-3 sm:grid-cols-6 gap-6 items-center opacity-75 grayscale hover:grayscale-0 transition-all">
            <div className="flex items-center justify-center p-2 rounded-lg bg-slate-900/40 border border-slate-800 hover:border-amber-400/40 transition-colors">
              <span className="font-serif text-sm font-bold tracking-tighter text-slate-200">FINANCIAL TIMES</span>
            </div>
            <div className="flex items-center justify-center p-2 rounded-lg bg-slate-900/40 border border-slate-800 hover:border-amber-400/40 transition-colors">
              <span className="font-serif text-sm font-bold tracking-tight text-slate-200">Forbes</span>
            </div>
            <div className="flex items-center justify-center p-2 rounded-lg bg-slate-900/40 border border-slate-800 hover:border-amber-400/40 transition-colors">
              <span className="font-heading text-sm font-extrabold tracking-tight text-slate-200">mint</span>
            </div>
            <div className="flex items-center justify-center p-2 rounded-lg bg-slate-900/40 border border-slate-800 hover:border-amber-400/40 transition-colors">
              <span className="font-serif text-xs font-bold tracking-tight text-slate-200">THE ECONOMIC TIMES</span>
            </div>
            <div className="flex items-center justify-center p-2 rounded-lg bg-slate-900/40 border border-slate-800 hover:border-amber-400/40 transition-colors">
              <span className="font-heading text-sm font-bold tracking-wide text-slate-200">Bloomberg</span>
            </div>
            <div className="flex items-center justify-center p-2 rounded-lg bg-slate-900/40 border border-slate-800 hover:border-amber-400/40 transition-colors">
              <span className="font-mono text-xs font-bold tracking-wider text-slate-200">CNBC-TV18</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
