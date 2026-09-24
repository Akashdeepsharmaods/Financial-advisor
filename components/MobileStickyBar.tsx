'use client';

import React, { useState, useEffect } from 'react';
import { Phone, Calendar } from 'lucide-react';

export default function MobileStickyBar() {
  const [inConsultation, setInConsultation] = useState(false);

  useEffect(() => {
    const consultationEl = document.getElementById('consultation');
    if (!consultationEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInConsultation(entry.isIntersecting);
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -80px 0px'
      }
    );

    observer.observe(consultationEl);
    return () => observer.disconnect();
  }, []);

  return (
    <aside
      id="mobileStickyBar"
      aria-label="Mobile Quick Action Bar"
      className={`fixed bottom-0 left-0 right-0 z-30 p-2.5 sm:p-3 bg-[#050814]/95 backdrop-blur-xl border-t border-amber-500/30 flex items-center justify-between gap-2.5 sm:hidden shadow-[0_-10px_25px_rgba(0,0,0,0.7)] transition-all duration-300 pb-[calc(0.65rem+env(safe-area-inset-bottom,0px))] ${
        inConsultation ? 'translate-y-full opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'
      }`}
    >
      {/* Priority Call Action */}
      <a
        href="tel:+919820019800"
        className="flex-1 py-3 px-3 rounded-xl border border-slate-700/80 bg-slate-900/90 text-xs font-bold text-center text-slate-200 hover:text-amber-300 hover:border-amber-400/40 active:scale-[0.98] flex items-center justify-center gap-1.5 font-mono shadow-md transition-all"
        aria-label="Call Priority Desk"
      >
        <Phone className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
        <span className="whitespace-nowrap text-[11.5px]">Priority Call</span>
      </a>

      {/* Book Strategy Call Primary CTA */}
      <a
        href="#consultation"
        className="flex-1 btn-gold py-3 px-3 rounded-xl text-xs font-bold uppercase tracking-wider text-center flex items-center justify-center gap-1.5 shadow-lg shadow-amber-500/25 active:scale-[0.98] transition-all"
        aria-label="Book Private Strategy Session"
      >
        <Calendar className="w-3.5 h-3.5 flex-shrink-0" />
        <span className="whitespace-nowrap text-[11.5px]">Book Strategy</span>
      </a>
    </aside>
  );
}


