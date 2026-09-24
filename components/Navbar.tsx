'use client';

import React, { useState, useEffect } from 'react';
import { Calendar, PhoneCall, Menu, X, ArrowUpRight, ShieldCheck, ChevronRight, Calculator, Award, Briefcase, BookOpen, Users, HelpCircle } from 'lucide-react';

interface NavbarProps {
  onOpenNda?: () => void;
}

export default function Navbar({ onOpenNda }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { href: '#expertise', label: 'Expertise & Solutions', icon: Briefcase },
    { href: '#track-record', label: 'Audited Track Record', icon: Award },
    { href: '#calculator', label: 'Wealth Simulator', badge: 'Alpha', icon: Calculator },
    { href: '#philosophy', label: 'Investment Philosophy', icon: BookOpen },
    { href: '#case-studies', label: 'Confidential Case Studies', icon: Briefcase },
    { href: '#testimonials', label: 'Client Endorsements', icon: Users },
    { href: '#faq', label: 'FAQ & Compliance', icon: HelpCircle },
  ];

  return (
    <div className="w-full max-w-full overflow-x-hidden">
      {/* Top Compliance & Live Market Ticker Bar */}
      <aside
        aria-label="Market and Compliance Banner"
        className="w-full bg-[#070D20] border-b border-amber-500/15 py-1 px-3 sm:px-6 lg:px-8 text-xs text-slate-400 relative z-30"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 text-[10px] sm:text-[11px] whitespace-nowrap">
          {/* Left: SEBI Accreditation */}
          <div className="flex items-center space-x-1.5 sm:space-x-2 flex-shrink-0">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 font-medium font-mono text-[9.5px] sm:text-[10.5px]">
              <span className="live-dot"></span> SEBI RIA: INA00019482
            </span>
            <span className="hidden md:inline text-slate-400 font-medium text-[11px]">
              • Fee-Only Fiduciary Advisory
            </span>
          </div>

          {/* Right: Live Market Ticker & Lounge Link */}
          <div className="flex items-center space-x-2.5 sm:space-x-4 font-mono text-[10px] sm:text-[11px] flex-shrink-0">
            <div className="hidden lg:flex items-center space-x-3 text-slate-400">
              <span>NIFTY 50: <strong className="text-emerald-400 font-semibold">24,810 (+0.64%)</strong></span>
              <span className="hidden 2xl:inline">S&P 500: <strong className="text-emerald-400 font-semibold">5,718 (+0.42%)</strong></span>
              <span className="hidden xl:inline">AIF ALPHA: <strong className="text-emerald-400 font-semibold">+18.4%</strong></span>
            </div>
            <a
              href="#consultation"
              className="text-amber-400 hover:text-amber-300 font-medium underline underline-offset-4 flex items-center gap-0.5 sm:gap-1 flex-shrink-0 text-[10px] sm:text-[11px]"
            >
              Direct Access <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </aside>

      {/* Main Sticky Navbar */}
      <header
        id="mainNavbar"
        className={`w-full sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#050814]/95 backdrop-blur-xl border-b border-amber-400/20 shadow-2xl py-2 sm:py-3'
            : 'bg-[#050814]/90 backdrop-blur-lg border-b border-slate-800/80 py-2 sm:py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between gap-2 sm:gap-4">
          
          {/* Monogram Brand Identity */}
          <a href="#" className="flex items-center gap-2 sm:gap-3 flex-shrink-0 group">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-amber-300 via-amber-500 to-amber-700 p-[1px] shadow-lg shadow-amber-500/10 group-hover:shadow-amber-500/25 transition-all flex-shrink-0">
              <div className="w-full h-full bg-[#0A1128] rounded-[7px] flex items-center justify-center">
                <span className="font-serif font-bold text-amber-300 text-xs sm:text-base tracking-wider">VR</span>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="font-serif text-[13px] sm:text-base font-bold tracking-wide text-slate-100 group-hover:text-amber-300 transition-colors whitespace-nowrap">
                  Vikramaditya Roy
                </span>
                <span className="text-[8px] sm:text-[9.5px] uppercase font-bold tracking-wider px-1 py-0.2 rounded bg-amber-400/10 text-amber-300 border border-amber-400/20 font-mono flex-shrink-0">
                  CFA
                </span>
              </div>
              <p className="text-[8.5px] sm:text-[10px] text-slate-400 tracking-wider uppercase font-medium whitespace-nowrap">
                Private Wealth & Family Office
              </p>
            </div>
          </a>

          {/* Desktop Nav Links (Visible on >= 1200px / xl) */}
          <nav className="hidden xl:flex items-center space-x-3.5 2xl:space-x-6 text-[12px] 2xl:text-[13.5px] font-medium text-slate-300 whitespace-nowrap">
            <a href="#expertise" className="hover:text-amber-300 transition-colors whitespace-nowrap">
              Expertise
            </a>
            <a href="#track-record" className="hover:text-amber-300 transition-colors whitespace-nowrap">
              Track Record
            </a>
            <a href="#calculator" className="hover:text-amber-300 transition-colors flex items-center gap-1.5 whitespace-nowrap">
              <span>Simulator</span>
              <span className="text-[9px] px-1.5 py-0.2 bg-emerald-500/20 text-emerald-400 rounded-full border border-emerald-500/30">
                Alpha
              </span>
            </a>
            <a href="#philosophy" className="hover:text-amber-300 transition-colors whitespace-nowrap">
              Philosophy
            </a>
            <a href="#case-studies" className="hover:text-amber-300 transition-colors whitespace-nowrap">
              Case Studies
            </a>
            <a href="#testimonials" className="hover:text-amber-300 transition-colors whitespace-nowrap">
              Clients
            </a>
          </nav>

          {/* Right Action Area */}
          <div className="flex items-center space-x-1.5 sm:space-x-3 flex-shrink-0">
            {/* Phone link (shown on wide screens >= 1536px) */}
            <a
              href="tel:+919820019800"
              className="hidden 2xl:inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-slate-800 hover:border-slate-700 bg-slate-900/60 text-xs font-mono text-slate-300 hover:text-amber-300 transition-all flex-shrink-0 whitespace-nowrap"
            >
              <PhoneCall className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
              <span>+91 (022) 6900-ROY</span>
            </a>

            {/* Strategy Call Button - Adaptive text for mobile vs desktop */}
            <a
              href="#consultation"
              className="btn-gold px-2.5 sm:px-4 py-1.5 sm:py-2.5 rounded-lg text-[10px] sm:text-xs font-bold uppercase tracking-wider flex items-center gap-1 sm:gap-1.5 flex-shrink-0 whitespace-nowrap shadow-md shadow-amber-500/10"
            >
              <span className="hidden sm:inline">Private Strategy Call</span>
              <span className="sm:hidden">Book Call</span>
              <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5 flex-shrink-0" />
            </a>

            {/* Mobile / Tablet Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="xl:hidden p-1.5 sm:p-2 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-200 hover:text-amber-300 hover:border-amber-400/40 transition-colors flex-shrink-0 flex items-center justify-center min-w-[36px] min-h-[36px]"
              aria-label="Open Navigation Menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>

        </div>
      </header>

      {/* Fullscreen High-Converting Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-[#050814]/98 backdrop-blur-2xl flex flex-col xl:hidden animate-fadeIn">
          {/* Drawer Top Bar */}
          <div className="flex items-center justify-between px-4 py-3.5 border-b border-slate-800/80 bg-[#050814]">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-300 via-amber-500 to-amber-700 p-[1px] shadow-lg">
                <div className="w-full h-full bg-[#0A1128] rounded-[7px] flex items-center justify-center">
                  <span className="font-serif font-bold text-amber-300 text-xs tracking-wider">VR</span>
                </div>
              </div>
              <div>
                <span className="font-serif text-sm font-bold text-slate-100 block">Vikramaditya Roy</span>
                <span className="text-[9px] text-slate-400 font-mono">SEBI RIA: INA00019482</span>
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-amber-300 hover:border-amber-400/40 transition-colors"
              aria-label="Close Navigation Menu"
            >
              <X className="w-5 h-5 text-amber-400" />
            </button>
          </div>

          {/* Drawer Scrollable Content */}
          <div className="flex-1 overflow-y-auto px-4 py-5 space-y-5">
            {/* Trust Pill */}
            <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-900/90 border border-amber-500/20 text-xs text-slate-300 shadow-inner">
              <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <div className="flex flex-col">
                <span className="text-slate-200 font-semibold text-[11px]">Fee-Only Fiduciary Practice</span>
                <span className="text-slate-400 text-[9.5px] font-mono">Zero Commission • 100% Client-Aligned</span>
              </div>
            </div>

            {/* Navigation List */}
            <div className="space-y-1">
              <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest px-2 mb-2">Navigation</p>
              {navLinks.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <a
                    key={idx}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-900/80 active:bg-amber-500/10 border border-transparent hover:border-slate-800 transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-lg bg-slate-850 border border-slate-800 flex items-center justify-center text-slate-400 group-hover:text-amber-300 group-hover:border-amber-500/30 transition-colors">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-sm font-medium text-slate-200 group-hover:text-amber-300 transition-colors">
                        {item.label}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      {item.badge && (
                        <span className="text-[9px] px-2 py-0.5 bg-emerald-500/20 text-emerald-400 rounded-full border border-emerald-500/30 font-mono">
                          {item.badge}
                        </span>
                      )}
                      <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-amber-400 transition-colors" />
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Drawer Fixed Footer Actions */}
          <div className="p-4 bg-[#070D20] border-t border-slate-800/80 space-y-2.5">
            <a
              href="tel:+919820019800"
              className="flex items-center justify-center gap-2 py-2.5 rounded-xl border border-slate-700 bg-slate-900 text-xs font-mono text-slate-200 hover:border-amber-400/40 transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
              <span>Priority Desk: +91 (022) 6900-ROY</span>
            </a>

            <a
              href="#consultation"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-gold w-full py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-center flex items-center justify-center gap-2 shadow-xl shadow-amber-500/25"
            >
              <span>Schedule Private Strategy Session</span>
              <Calendar className="w-4 h-4" />
            </a>

            <p className="text-[9.5px] text-center text-slate-400 font-mono">
              Strict Non-Disclosure Guarantee • Fiduciary Advisory
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

