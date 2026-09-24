import React from 'react';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      text: "Vikramaditya saved our family office over ₹3.8 Cr in avoidable commission fees in the first two years alone. His direct equity selection and private credit structuring have delivered consistent double-digit alpha without sleepless nights.",
      initials: 'SK',
      name: 'S. K. Singhania',
      role: 'Promoter & MD, Auto Components Group',
      meta: 'Client since 2017 • ₹45 Cr Mandate',
      color: 'amber'
    },
    {
      text: "After our secondary liquidity event, private bankers flooded my inbox pushing opaque structured products. Vikram was the only advisor who sat down with a purely fiduciary fee model, creating a bulletproof tax-efficient generational fortress.",
      initials: 'AR',
      name: 'Ananya R.',
      role: 'Co-Founder, B2B SaaS Unicorn',
      meta: 'Client since 2020 • ₹30 Cr Mandate',
      color: 'emerald'
    },
    {
      text: "Navigating cross-border US-India tax compliance and 401(k) rollover while retiring in Goa felt overwhelming. Vikram's depth in FEMA, DTAA, and private trusts is world-class. Truly institutional-level counsel.",
      initials: 'VM',
      name: 'Dr. Vivek Murthy',
      role: 'Former Managing Director, Global Investment Bank',
      meta: 'Client since 2019 • $6M Global Mandate',
      color: 'purple'
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-[#070D22]/60 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase tracking-widest text-amber-400 font-bold font-mono">TRUST & FIDUCIARY TESTIMONIALS</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-100">
            What Leaders Entrust to Us
          </h2>
          <p className="text-slate-400 text-base">
            Long-term partnerships forged across market turmoil, liquidity windfalls, and generational milestones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, idx) => (
            <div key={idx} className="glass-panel p-8 rounded-2xl border-slate-800 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex text-amber-400 space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-slate-300 leading-relaxed italic">
                  "{r.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold font-mono text-xs ${
                  r.color === 'emerald'
                    ? 'bg-emerald-500/20 border border-emerald-400/40 text-emerald-300'
                    : r.color === 'purple'
                    ? 'bg-purple-500/20 border border-purple-400/40 text-purple-300'
                    : 'bg-amber-500/20 border border-amber-400/40 text-amber-300'
                }`}>
                  {r.initials}
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-100">{r.name}</p>
                  <p className="text-[11px] text-slate-400">{r.role}</p>
                  <span className="text-[10px] text-amber-400/80 font-mono">{r.meta}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
