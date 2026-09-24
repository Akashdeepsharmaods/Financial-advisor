'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ShieldAlert } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#050814] flex items-center justify-center px-4">
      <div className="glass-panel-gold max-w-md w-full p-8 rounded-2xl text-center space-y-6 border-amber-500/30">
        <div className="w-16 h-16 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 flex items-center justify-center mx-auto text-2xl">
          <ShieldAlert className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <p className="text-xs uppercase font-mono tracking-widest text-amber-400 font-bold">404 • MANDATE NOT FOUND</p>
          <h1 className="font-serif text-2xl font-bold text-slate-100">Page Not Found</h1>
          <p className="text-xs text-slate-400 leading-relaxed">
            The requested portfolio resource does not exist or has been relocated under our strict privacy protocol.
          </p>
        </div>

        <div className="pt-2">
          <Link
            href="/"
            className="btn-gold w-full py-3 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" /> Return to Private Wealth Office
          </Link>
        </div>
      </div>
    </div>
  );
}
