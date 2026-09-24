'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('App runtime error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#050814] flex items-center justify-center px-4">
      <div className="glass-panel-gold max-w-md w-full p-8 rounded-2xl text-center space-y-6 border-amber-500/30">
        <div className="w-16 h-16 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 flex items-center justify-center mx-auto text-2xl">
          <AlertTriangle className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <p className="text-xs uppercase font-mono tracking-widest text-amber-400 font-bold">APPLICATION ERROR</p>
          <h1 className="font-serif text-2xl font-bold text-slate-100">Something went wrong</h1>
          <p className="text-xs text-slate-400 leading-relaxed">
            An unexpected glitch occurred while rendering this session. Our fiduciary system has logged the event.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <button
            onClick={() => reset()}
            className="btn-gold flex-1 py-3 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
          >
            <RefreshCw className="w-4 h-4" /> Try Again
          </button>
          <Link
            href="/"
            className="btn-outline-gold flex-1 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" /> Home
          </Link>
        </div>
      </div>
    </div>
  );
}
