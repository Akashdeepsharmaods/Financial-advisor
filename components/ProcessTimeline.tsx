import React from 'react';

export default function ProcessTimeline() {
  const steps = [
    {
      num: '01',
      phase: 'Phase 1',
      title: 'Discovery & Risk DNA Audit',
      desc: 'Exhaustive forensic review of existing mutual fund portfolios, hidden distribution commission leakage, concentrated promoter stock risk, and liabilities.',
      deliverable: 'Asset Health Audit Dossier'
    },
    {
      num: '02',
      phase: 'Phase 2',
      title: 'Custom Architecture & IPS',
      desc: 'Formulation of an institutional Investment Policy Statement (IPS), strategic multi-asset allocation, trust layering, and tax-loss harvesting blueprints.',
      deliverable: 'Institutional IPS & Tax Blueprint'
    },
    {
      num: '03',
      phase: 'Phase 3',
      title: 'Direct Execution & Hedging',
      desc: 'Deployment through direct institutional feeds (Zero distributor commission), private debt origination, pre-IPO blocks, and asymmetric downside put hedges.',
      deliverable: 'Direct Demat Deployments'
    },
    {
      num: '04',
      phase: 'Phase 4',
      title: 'Quarterly Rebalancing & Governance',
      desc: 'Continuous risk surveillance, quarterly macroeconomic reviews, opportunistic tactical shifts, and multi-generational family office councils.',
      deliverable: 'Quarterly Executive Board Dossier'
    }
  ];

  return (
    <section id="philosophy" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase tracking-widest text-amber-400 font-bold font-mono">THE FIDUCIARY PROCESS</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-100">
            How We Architect & Protect Your Balance Sheet
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            No boilerplate templates. A disciplined 4-stage institutional protocol deployed for every individual client and family office mandate.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className={`glass-panel p-6 rounded-2xl relative border-slate-800 space-y-4 ${
                idx < steps.length - 1 ? 'step-line' : ''
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 flex items-center justify-center font-serif font-bold text-lg">
                  {step.num}
                </div>
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                  {step.phase}
                </span>
              </div>
              <h3 className="font-serif text-lg font-bold text-slate-100">{step.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
              <div className="text-[11px] text-amber-300/80 font-mono">
                Deliverable: {step.deliverable}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
