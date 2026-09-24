'use client';

import React from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="bg-[#050814] text-slate-100 flex items-center justify-center min-h-screen p-4 font-sans">
        <div className="max-w-md w-full p-8 rounded-2xl bg-[#0A1128] border border-amber-500/30 text-center space-y-4">
          <h2 className="text-xl font-bold text-amber-300">Application Error</h2>
          <p className="text-xs text-slate-400">A global application error occurred.</p>
          <button
            onClick={() => reset()}
            className="px-6 py-2.5 rounded-lg bg-amber-500 text-slate-950 font-bold text-xs uppercase"
          >
            Refresh Session
          </button>
        </div>
      </body>
    </html>
  );
}
