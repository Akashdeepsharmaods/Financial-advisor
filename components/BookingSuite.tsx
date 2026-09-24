'use client';

import React, { useState, useEffect } from 'react';
import {
  Calendar,
  CheckCircle2,
  Circle,
  Video,
  Building2,
  Lock,
  ChevronLeft,
  ChevronRight,
  Check,
  CheckCircle,
  MessageCircle
} from 'lucide-react';

interface BookingSuiteProps {
  initialObjective?: string;
}

const AVAILABLE_DATES = [
  { display: 'Fri, Sep 25', dayName: 'Fri', monthName: 'Sep', dayNum: 25 },
  { display: 'Mon, Sep 28', dayName: 'Mon', monthName: 'Sep', dayNum: 28 },
  { display: 'Tue, Sep 29', dayName: 'Tue', monthName: 'Sep', dayNum: 29 },
  { display: 'Wed, Sep 30', dayName: 'Wed', monthName: 'Sep', dayNum: 30 },
  { display: 'Thu, Oct 1', dayName: 'Thu', monthName: 'Oct', dayNum: 1 },
  { display: 'Fri, Oct 2', dayName: 'Fri', monthName: 'Oct', dayNum: 2 },
  { display: 'Mon, Oct 5', dayName: 'Mon', monthName: 'Oct', dayNum: 5 },
  { display: 'Tue, Oct 6', dayName: 'Tue', monthName: 'Oct', dayNum: 6 },
];

const TIME_SLOTS = ['11:30 AM IST', '02:30 PM IST', '05:00 PM IST', '07:30 PM IST'];

export default function BookingSuite({ initialObjective }: BookingSuiteProps) {
  const [mounted, setMounted] = useState(false);
  const [currentStep, setCurrentStep] = useState<number>(1);
  const totalSteps = 3;

  const [bookingState, setBookingState] = useState({
    objective: initialObjective || 'HNW Portfolio Optimization & Alpha',
    portfolioSize: '₹5 Cr – ₹15 Cr',
    date: 'Fri, Sep 25',
    time: '11:30 AM IST',
    mode: 'Encrypted Video (Zoom / Google Meet)',
    name: '',
    email: '',
    phone: '',
    notes: ''
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (initialObjective) {
      setBookingState((prev) => ({ ...prev, objective: initialObjective }));
    }
  }, [initialObjective]);

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isConfirmed, setIsConfirmed] = useState<boolean>(false);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Post booking data to API Route
      await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookingState),
      });

      setIsConfirmed(true);

      const confettiModule = await import('canvas-confetti');
      const confetti = confettiModule.default;
      confetti({
        particleCount: 75,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#D4AF37', '#F3E5AB', '#10B981', '#FFFFFF', '#C5A059']
      });
    } catch (err) {
      console.error('Submission error:', err);
      setIsConfirmed(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNextStep = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setCurrentStep((prev) => Math.min(totalSteps, prev + 1));
    setTimeout(() => {
      const el = document.getElementById('consultation');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 50);
  };

  const handlePrevStep = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setCurrentStep((prev) => Math.max(1, prev - 1));
    setTimeout(() => {
      const el = document.getElementById('consultation');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 50);
  };

  return (
    <section id="consultation" className="pt-20 pb-36 sm:pb-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono">
            <span className="live-dot"></span> STRICTLY CONFIDENTIAL & PRIVATE
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-100">
            Initiate Your Private Strategy Review
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Schedule a 45-minute confidential portfolio audit and capital allocation session with Vikramaditya Roy directly.
          </p>
        </div>

        {/* Card Container */}
        <div className="glass-panel-gold rounded-2xl sm:rounded-3xl p-4 sm:p-8 lg:p-10 border-amber-500/30 relative">
          
          {!isConfirmed ? (
            <div className="space-y-6 sm:space-y-8">
              
              {/* Wizard Progress Header with Clickable Steps */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 sm:pb-6 border-b border-slate-800/80 gap-3">
                <div className="flex items-center space-x-2.5 sm:space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-300 flex items-center justify-center font-bold text-xs font-mono border border-amber-400/40 flex-shrink-0">
                    VR
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <p className="text-xs sm:text-sm font-bold text-slate-200">Vikramaditya Roy</p>
                      <span className="text-[10px] text-slate-400 hidden xs:inline">• Private Wealth Office</span>
                    </div>
                    <p className="text-[10.5px] sm:text-[11.5px] text-slate-400">45-Min Executive Strategy Review</p>
                  </div>
                </div>
                
                {/* Step indicator Tabs (Clickable) */}
                <div className="flex items-center justify-between sm:justify-end space-x-2 self-stretch sm:self-auto pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-800/50">
                  <span className="text-[11px] sm:text-xs text-amber-300 font-mono font-semibold">
                    Step {currentStep} of {totalSteps}
                  </span>
                  <div className="flex items-center space-x-1.5 ml-2">
                    {[1, 2, 3].map((stepNum) => (
                      <button
                        key={stepNum}
                        type="button"
                        onClick={() => setCurrentStep(stepNum)}
                        aria-label={`Jump to Step ${stepNum}`}
                        className={`w-4 h-4 rounded-full flex items-center justify-center transition-all cursor-pointer ${
                          stepNum === currentStep
                            ? 'bg-amber-400 ring-2 ring-amber-400/40 scale-110'
                            : stepNum < currentStep
                            ? 'bg-emerald-500/80'
                            : 'bg-slate-700 hover:bg-slate-600'
                        }`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-950"></span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* STEP 1: Objective & Portfolio */}
              {currentStep === 1 && (
                <div className="space-y-5 sm:space-y-6">
                  <h3 className="text-xs sm:text-sm uppercase tracking-wider text-amber-400 font-mono font-bold">
                    1. Select Your Primary Advisory Objective
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    {[
                      {
                        title: 'HNW Portfolio Optimization & Alpha',
                        desc: 'Forensic audit of current mutual funds, PMS, and direct equity holdings for commission leakage.'
                      },
                      {
                        title: 'Estate, Trust & Succession',
                        desc: 'Ring-fencing family assets, establishing irrevocable private trusts, and cross-border wills.'
                      },
                      {
                        title: 'Corporate Treasury & Tax Arbitrage',
                        desc: 'Maximizing idle corporate cash yields and structuring promoter secondary exit tax shields.'
                      },
                      {
                        title: 'Multi-Family Office Mandate',
                        desc: 'End-to-end investment policy statement, AIF Category II co-investments, and consolidated reporting.'
                      }
                    ].map((item, i) => {
                      const isSelected = bookingState.objective === item.title;
                      return (
                        <div
                          key={i}
                          role="button"
                          tabIndex={0}
                          onClick={() => setBookingState((prev) => ({ ...prev, objective: item.title }))}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              setBookingState((prev) => ({ ...prev, objective: item.title }));
                            }
                          }}
                          className={`p-3.5 sm:p-4 rounded-xl border cursor-pointer select-none transition-all active:scale-[0.99] ${
                            isSelected
                              ? 'border-amber-400 bg-amber-500/10 ring-1 ring-amber-400/40'
                              : 'border-slate-700/70 bg-slate-900/40 hover:border-slate-600'
                          }`}
                        >
                          <div className="flex items-start justify-between gap-2">
                            <div className="space-y-1">
                              <h4 className="text-xs sm:text-sm font-bold text-slate-100 font-serif leading-snug">{item.title}</h4>
                              <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                            </div>
                            {isSelected ? (
                              <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                            ) : (
                              <Circle className="w-4 h-4 sm:w-5 sm:h-5 text-slate-600 flex-shrink-0 mt-0.5" />
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="space-y-2.5 pt-2 sm:pt-4">
                    <label className="text-[11px] sm:text-xs text-slate-300 font-semibold uppercase tracking-wider block">
                      Estimated Deployable Portfolio Size
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
                      {['₹2 Cr – ₹5 Cr', '₹5 Cr – ₹15 Cr', '₹15 Cr – ₹50 Cr', '₹50+ Cr (Family Office)'].map((tier) => {
                        const isSelected = bookingState.portfolioSize === tier;
                        return (
                          <button
                            key={tier}
                            type="button"
                            onClick={() => setBookingState((prev) => ({ ...prev, portfolioSize: tier }))}
                            className={`p-2 sm:p-2.5 rounded-lg border text-center text-[10.5px] sm:text-xs font-mono transition-all cursor-pointer active:scale-95 ${
                              isSelected
                                ? 'border-amber-400 bg-amber-500/20 text-amber-300 font-bold'
                                : 'border-slate-700 bg-slate-900/60 text-slate-300 hover:border-slate-600'
                            }`}
                          >
                            {tier}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 2: Date, Time & Channel */}
              {currentStep === 2 && (
                <div className="space-y-5 sm:space-y-6">
                  <h3 className="text-xs sm:text-sm uppercase tracking-wider text-amber-400 font-mono font-bold">
                    2. Select Date, Time & Preferred Channel
                  </h3>

                  <div className="space-y-2">
                    <label className="text-xs text-slate-300 font-medium">Select Available Date</label>
                    <div className="grid grid-cols-4 sm:grid-cols-8 gap-1.5 sm:gap-2">
                      {AVAILABLE_DATES.map((d, idx) => {
                        const isSelected = bookingState.date === d.display;
                        return (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => setBookingState({ ...bookingState, date: d.display })}
                            className={`flex flex-col items-center justify-center p-2 sm:p-3 rounded-xl border transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-amber-500/20 border-amber-400 text-amber-300 ring-1 ring-amber-400/50'
                                : 'bg-slate-900/60 border-slate-700/60 text-slate-300 hover:border-amber-400/40 hover:bg-slate-800'
                            }`}
                          >
                            <span className="text-[10px] sm:text-xs uppercase tracking-wider text-slate-400">{d.dayName}</span>
                            <span className="text-base sm:text-lg font-bold text-slate-100 font-mono my-0.5">{d.dayNum}</span>
                            <span className="text-[10px] sm:text-[11px] text-amber-400/90">{d.monthName}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="space-y-2 pt-2">
                    <div className="flex flex-col xs:flex-row xs:items-center justify-between gap-1">
                      <label className="text-xs text-slate-300 font-medium">Select Preferred Slot (IST)</label>
                      <span className="text-[10px] sm:text-[11px] text-slate-400 font-mono">Timezone: Asia/Kolkata (GMT +5:30)</span>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
                      {TIME_SLOTS.map((time) => {
                        const isSelected = bookingState.time === time;
                        return (
                          <button
                            key={time}
                            type="button"
                            onClick={() => setBookingState({ ...bookingState, time })}
                            className={`p-2 sm:p-2.5 rounded-lg border text-[11px] sm:text-xs font-mono font-bold transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-amber-500/20 border-amber-400 text-amber-300 ring-1 ring-amber-400/50'
                                : 'bg-slate-900/60 border-slate-700/60 text-slate-300 hover:border-amber-400/40'
                            }`}
                          >
                            {time}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="space-y-3 pt-2 sm:pt-3">
                    <label className="text-[11px] sm:text-xs text-slate-300 font-semibold uppercase tracking-wider">Session Format</label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
                      {[
                        {
                          mode: 'Encrypted Video (Zoom / Google Meet)',
                          icon: Video,
                          title: 'Encrypted Video',
                          desc: 'Direct screen share & portfolio model run'
                        },
                        {
                          mode: 'Private Lounge (Mumbai BKC)',
                          icon: Building2,
                          title: 'Mumbai BKC Lounge',
                          desc: 'The Capital, Bandra Kurla Complex'
                        },
                        {
                          mode: 'Private Lounge (Gurugram CyberCity)',
                          icon: Building2,
                          title: 'Gurugram / Delhi NCR',
                          desc: 'One Horizon Centre, Golf Course Rd'
                        }
                      ].map((ch, idx) => {
                        const isSelected = bookingState.mode === ch.mode;
                        const Icon = ch.icon;
                        return (
                          <div
                            key={idx}
                            onClick={() => setBookingState({ ...bookingState, mode: ch.mode })}
                            className={`p-3 rounded-xl border text-left cursor-pointer transition-all ${
                              isSelected
                                ? 'border-amber-400 bg-amber-500/15'
                                : 'border-slate-700 bg-slate-900/60 hover:border-slate-600'
                            }`}
                          >
                            <p className="text-xs font-bold text-slate-200 flex items-center gap-1.5">
                              <Icon className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" /> {ch.title}
                            </p>
                            <p className="text-[10.5px] sm:text-[11px] text-slate-400 mt-1 leading-relaxed">{ch.desc}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 3: Client Details */}
              {currentStep === 3 && (
                <form id="privateBookingForm" onSubmit={handleFormSubmit} className="space-y-4">
                  <h3 className="text-xs sm:text-sm uppercase tracking-wider text-amber-400 font-mono font-bold">
                    3. Contact Details & Executive Summary
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="clientName" className="text-xs text-slate-300 font-medium">Full Name / Entity Name *</label>
                      <input
                        id="clientName"
                        type="text"
                        required
                        value={bookingState.name}
                        onChange={(e) => setBookingState({ ...bookingState, name: e.target.value })}
                        placeholder="e.g. Siddharth Singhal"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/80 border border-slate-700 text-slate-100 placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="clientEmail" className="text-xs text-slate-300 font-medium">Confidential Work/Personal Email *</label>
                      <input
                        id="clientEmail"
                        type="email"
                        required
                        value={bookingState.email}
                        onChange={(e) => setBookingState({ ...bookingState, email: e.target.value })}
                        placeholder="e.g. s.singhal@enterprise.com"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/80 border border-slate-700 text-slate-100 placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="clientPhone" className="text-xs text-slate-300 font-medium">Direct Mobile Number (WhatsApp) *</label>
                      <input
                        id="clientPhone"
                        type="tel"
                        required
                        value={bookingState.phone}
                        onChange={(e) => setBookingState({ ...bookingState, phone: e.target.value })}
                        placeholder="+91 98200 XXXXX"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/80 border border-slate-700 text-slate-100 placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="clientNotes" className="text-xs text-slate-300 font-medium">Brief Mandate Context (Optional)</label>
                      <input
                        id="clientNotes"
                        type="text"
                        value={bookingState.notes}
                        onChange={(e) => setBookingState({ ...bookingState, notes: e.target.value })}
                        placeholder="e.g. Reviewing existing mutual fund portfolio & trust setup"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/80 border border-slate-700 text-slate-100 placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
                      />
                    </div>
                  </div>

                  {/* Summary Card */}
                  <div className="p-3.5 sm:p-4 rounded-xl bg-slate-950/80 border border-amber-500/20 text-xs space-y-2 mt-3">
                    <div className="flex flex-col xs:flex-row justify-between gap-0.5">
                      <span className="text-slate-400">Selected Mandate:</span>
                      <span className="font-semibold text-slate-100 font-serif">{bookingState.objective}</span>
                    </div>
                    <div className="flex flex-col xs:flex-row justify-between gap-0.5">
                      <span className="text-slate-400">Date & Slot:</span>
                      <span className="font-mono font-bold text-amber-300">{bookingState.date}, {bookingState.time}</span>
                    </div>
                    <div className="flex flex-col xs:flex-row justify-between gap-0.5">
                      <span className="text-slate-400">Meeting Format:</span>
                      <span className="text-slate-200">{bookingState.mode}</span>
                    </div>
                    <div className="flex flex-col xs:flex-row justify-between gap-0.5">
                      <span className="text-slate-400">Portfolio Scale:</span>
                      <span className="font-mono text-emerald-400">{bookingState.portfolioSize}</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 pt-2 text-[10.5px] sm:text-[11px] text-slate-400">
                    <Lock className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                    <span>Strict Non-Disclosure Guarantee. Your identity and data are never shared or commercialized.</span>
                  </div>
                </form>
              )}

              {/* Wizard Navigation Footer */}
              <div className="flex items-center justify-between pt-5 sm:pt-6 border-t border-slate-800/80 gap-3 relative z-10">
                <button
                  type="button"
                  onClick={handlePrevStep}
                  className={`btn-outline-gold px-3.5 sm:px-5 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 cursor-pointer active:scale-95 transition-all ${
                    currentStep === 1 ? 'invisible pointer-events-none' : ''
                  }`}
                >
                  <ChevronLeft className="w-4 h-4" /> Back
                </button>

                <div className="flex items-center space-x-3">
                  {currentStep < totalSteps ? (
                    <button
                      type="button"
                      onClick={handleNextStep}
                      className="btn-gold px-6 sm:px-7 py-2.5 sm:py-3 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-lg shadow-amber-500/20 active:scale-95 transition-all"
                    >
                      Continue <ChevronRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      form="privateBookingForm"
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-gold px-5 sm:px-8 py-3 sm:py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-xl shadow-amber-500/20 cursor-pointer active:scale-95 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-4 h-4 border-2 border-slate-900 border-t-transparent rounded-full animate-spin"></span>
                          <span>Securing Reservation...</span>
                        </>
                      ) : (
                        <>
                          <Check className="w-4 h-4" />
                          <span className="hidden sm:inline">Confirm Private Strategy Session</span>
                          <span className="sm:hidden">Confirm Strategy Session</span>
                        </>
                      )}
                    </button>
                  )}
                </div>
              </div>

            </div>
          ) : (
            /* Confirmation View */
            <div className="text-center py-12 px-4 space-y-6">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400/50 text-emerald-400 flex items-center justify-center mx-auto text-2xl shadow-xl shadow-emerald-500/20">
                <CheckCircle className="w-8 h-8" />
              </div>

              <div className="space-y-2 max-w-lg mx-auto">
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-100">Private Session Reserved</h3>
                <p className="text-sm text-slate-300">
                  Thank you, <span className="font-semibold text-amber-300">{bookingState.name || 'Client'}</span>. Your calendar reservation has been registered directly with Vikramaditya Roy's executive desk.
                </p>
              </div>

              <div className="max-w-md mx-auto p-5 rounded-2xl bg-slate-950/80 border border-amber-500/30 text-xs text-left space-y-3 font-mono">
                <div className="flex justify-between border-b border-slate-800 pb-2">
                  <span className="text-slate-400">Scheduled Time:</span>
                  <span className="text-amber-300 font-bold">{bookingState.date}, {bookingState.time}</span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-2">
                  <span className="text-slate-400">Objective:</span>
                  <span className="text-slate-200">{bookingState.objective}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Channel:</span>
                  <span className="text-emerald-400">{bookingState.mode}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <a
                  href={`https://wa.me/919820019800?text=${encodeURIComponent(
                    `Hi Vikramaditya, I just scheduled a Private Strategy Session via your portfolio website (${bookingState.name}, ${bookingState.objective}).`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" /> Quick WhatsApp Confirmation
                </a>
                <button
                  onClick={() => setIsConfirmed(false)}
                  className="btn-outline-gold px-6 py-3 rounded-xl text-xs font-semibold"
                >
                  Book Another Session
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
