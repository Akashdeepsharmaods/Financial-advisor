import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

interface FooterProps {
  onOpenNda?: () => void;
}

export default function Footer({ onOpenNda }: FooterProps) {
  return (
    <footer className="bg-[#040711] border-t border-slate-800 pt-16 pb-28 lg:pb-16 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Summary */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-amber-300 to-amber-700 p-[1px]">
                <div className="w-full h-full bg-[#0A1128] rounded-[7px] flex items-center justify-center font-serif font-bold text-amber-300">
                  VR
                </div>
              </div>
              <div>
                <span className="font-serif text-base font-bold text-slate-100">Vikramaditya Roy</span>
                <p className="text-[10px] text-slate-400 font-mono uppercase">Private Wealth & Family Office Advisory</p>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-md">
              Dedicated to protecting, compounding, and seamlessly transferring generational family fortunes through institutional multi-asset discipline and absolute fiduciary integrity.
            </p>
            <div className="text-[11px] text-amber-300 font-mono">
              Principal Office: Suite 1402, The Capital, G-Block, Bandra Kurla Complex (BKC), Mumbai 400051.
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <p className="text-xs uppercase font-mono tracking-wider text-slate-200 font-bold">Pillars & Solutions</p>
            <ul className="space-y-2 text-xs">
              <li><a href="#expertise" className="hover:text-amber-300 transition-colors">Discretionary Portfolio Mgmt</a></li>
              <li><a href="#expertise" className="hover:text-amber-300 transition-colors">Estate & Family Trust Setup</a></li>
              <li><a href="#expertise" className="hover:text-amber-300 transition-colors">Corporate Treasury Optimization</a></li>
              <li><a href="#expertise" className="hover:text-amber-300 transition-colors">Pre-IPO & Category II AIFs</a></li>
              <li><a href="#calculator" className="hover:text-amber-300 transition-colors">Wealth Compounding Simulator</a></li>
            </ul>
          </div>

          {/* Direct Touchpoints */}
          <div className="space-y-3">
            <p className="text-xs uppercase font-mono tracking-wider text-slate-200 font-bold">Direct Access</p>
            <ul className="space-y-2 text-xs">
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <a href="tel:+919820019800" className="hover:text-amber-300">+91 (022) 6900-7690</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-400" />
                <a href="mailto:concierge@vikramadityaroy.com" className="hover:text-amber-300">concierge@vikramadityaroy.com</a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>Mumbai • Delhi NCR • Bengaluru</span>
              </li>
              {onOpenNda && (
                <li>
                  <button
                    onClick={onOpenNda}
                    className="text-amber-400 underline underline-offset-4 hover:text-white mt-1"
                  >
                    Download Client Confidentiality NDA
                  </button>
                </li>
              )}
            </ul>
          </div>

        </div>

        {/* Regulatory Compliance & Disclaimers */}
        <div className="pt-8 border-t border-slate-900 space-y-4 text-[11px] text-slate-400 leading-relaxed font-mono">
          <p>
            <strong className="text-slate-300">Regulatory Compliance Notice:</strong> Vikramaditya Roy is a SEBI Registered Investment Advisor (Registration No: INA00019482) operating under SEBI (Investment Advisers) Regulations, 2013. Investments in securities markets are subject to market risks. Read all related scheme and statutory documents carefully before investing. Past performance is no guarantee of future returns. Registration granted by SEBI and certification from NISM in no way guarantee the performance of the intermediary or provide any assurance of returns to investors.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-900/60 text-slate-400">
            <p>© 2026 Vikramaditya Roy Private Wealth. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-slate-200">Fiduciary Charter</a>
              <a href="#" className="hover:text-slate-200">Privacy Policy</a>
              <a href="#" className="hover:text-slate-200">SEBI Disclosures</a>
              <a href="#" className="hover:text-slate-200">Investor Charter</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
