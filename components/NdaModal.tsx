'use client';

import React from 'react';
import { Lock, X } from 'lucide-react';

interface NdaModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAccept: () => void;
}

export default function NdaModal({ isOpen, onClose, onAccept }: NdaModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="glass-panel-gold max-w-xl w-full p-6 sm:p-8 rounded-2xl space-y-5 border-amber-500/40 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <Lock className="w-5 h-5 text-amber-400" />
            <h3 className="font-serif text-lg font-bold text-slate-100">
              Fiduciary Confidentiality & NDA
            </h3>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-3 text-xs text-slate-300 leading-relaxed max-h-72 overflow-y-auto pr-2">
          <p>
            All portfolio analyses, balance sheet forensic data, family trust charters, and prospective client disclosures shared with the Office of Vikramaditya Roy are governed by a strict Bilateral Non-Disclosure Covenant.
          </p>
          <p>
            1. <strong>Zero Data Commercialization:</strong> We never share, distribute, or monetize client contact information or financial statements with third-party brokers, lenders, or insurance agencies.
          </p>
          <p>
            2. <strong>Direct Demat Isolation:</strong> Investment recommendations are implemented strictly within your authenticated institutional accounts under your direct legal name.
          </p>
          <p>
            3. <strong>Fiduciary Immunity:</strong> Our advisory operates under fiduciary duty where our fee is our sole remuneration.
          </p>
        </div>

        <div className="pt-4 border-t border-slate-800 flex justify-end space-x-3">
          <button
            type="button"
            onClick={onAccept}
            className="btn-gold px-6 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider"
          >
            Acknowledge & Book Strategy Session
          </button>
        </div>
      </div>
    </div>
  );
}
