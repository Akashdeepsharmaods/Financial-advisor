'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "How does your fee-only fiduciary model differ from banks and mutual fund distributors?",
      a: "Standard banks and distributors earn 1.0% to 2.2% annual trailing commissions hidden inside the regular mutual funds and insurance policies they sell you. We operate as a SEBI Registered Investment Advisor (RIA) charging a transparent fixed fee / AUM basis points, while ensuring you invest strictly in Direct plans and institutional direct equity feeds. All distributor rebates are 100% credited back to you."
    },
    {
      q: "Do you take custody of client funds or hold my assets?",
      a: "Never. 100% of your assets, shares, and bonds remain strictly in your own institutional Demat and bank account (e.g. HDFC, ICICI, Zerodha, or Institutional Custodians). We operate purely on a discretionary or advisory mandate via Power of Attorney (POA) for execution, ensuring maximum bankruptcy protection and custody transparency."
    },
    {
      q: "What is the minimum portfolio size required to engage?",
      a: "Our comprehensive multi-asset discretionary advisory typically requires a minimum investable corpus of ₹2 Crores (or $250,000 for NRIs). For standalone Private Family Trust structuring and Estate Succession charters, we engage on custom project retainers irrespective of immediate liquidity."
    },
    {
      q: "How do you handle cross-border tax compliance for NRI clients?",
      a: "We work closely with affiliated cross-border chartered accountants and tax attorneys specializing in US-India DTAA, PFIC compliance, FEMA regulations, and RNOR transition planning to ensure your domestic growth never creates foreign audit liabilities."
    }
  ];

  return (
    <section className="py-24 bg-[#070D22]/60 border-t border-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-14 space-y-3">
          <span className="text-xs uppercase tracking-widest text-amber-400 font-bold font-mono">TRANSPARENCY & GOVERNANCE</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-100">
            Frequently Addressed Questions
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Understanding how fee-only fiduciary wealth management differs from commission brokers and bank relationship managers.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="glass-panel rounded-xl border-slate-800 overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between text-slate-100 font-serif font-bold text-base hover:text-amber-300 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-amber-400 transition-transform duration-300 flex-shrink-0 ml-4 ${
                      isOpen ? 'rotate-180' : 'rotate-0'
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-slate-300 leading-relaxed border-t border-slate-800/80 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
