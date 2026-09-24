'use client';

import React, { useState, useEffect, useRef } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Info, ArrowRight } from 'lucide-react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function WealthCalculator() {
  const [mounted, setMounted] = useState(false);
  const [initialCorpusCr, setInitialCorpusCr] = useState<number>(5.0);
  const [monthlyInflowLakhs, setMonthlyInflowLakhs] = useState<number>(5.0);
  const [years, setYears] = useState<number>(10);
  const [strategyRate, setStrategyRate] = useState<number>(0.168); // 16.8%
  const [adjustInflation, setAdjustInflation] = useState<boolean>(false);

  // Projections
  const [bespokeTotal, setBespokeTotal] = useState<number>(0);
  const [baselineTotal, setBaselineTotal] = useState<number>(0);
  const [alphaGained, setAlphaGained] = useState<number>(0);
  const [taxSavings, setTaxSavings] = useState<number>(0);

  const [chartData, setChartData] = useState<{
    labels: string[];
    datasets: any[];
  }>({
    labels: [],
    datasets: []
  });

  useEffect(() => {
    setMounted(true);
  }, []);


  useEffect(() => {
    const initialCorpus = initialCorpusCr * 10000000;
    const monthlyInflow = monthlyInflowLakhs * 100000;
    
    let bespokeRate = strategyRate;
    let baselineRate = 0.105; // 10.5% standard Mutual Fund

    if (adjustInflation) {
      const inflationRate = 0.055;
      bespokeRate = (1 + bespokeRate) / (1 + inflationRate) - 1;
      baselineRate = (1 + baselineRate) / (1 + inflationRate) - 1;
    }

    const labels: string[] = ['Now'];
    const bespokeData: number[] = [parseFloat((initialCorpus / 10000000).toFixed(2))];
    const baselineData: number[] = [parseFloat((initialCorpus / 10000000).toFixed(2))];
    const principalData: number[] = [parseFloat((initialCorpus / 10000000).toFixed(2))];

    let currentBespoke = initialCorpus;
    let currentBaseline = initialCorpus;
    let cumulativeInvested = initialCorpus;

    for (let yr = 1; yr <= years; yr++) {
      labels.push(`Yr ${yr}`);
      for (let m = 0; m < 12; m++) {
        currentBespoke = (currentBespoke + monthlyInflow) * (1 + bespokeRate / 12);
        currentBaseline = (currentBaseline + monthlyInflow) * (1 + baselineRate / 12);
        cumulativeInvested += monthlyInflow;
      }
      bespokeData.push(parseFloat((currentBespoke / 10000000).toFixed(2)));
      baselineData.push(parseFloat((currentBaseline / 10000000).toFixed(2)));
      principalData.push(parseFloat((cumulativeInvested / 10000000).toFixed(2)));
    }

    const finalBespoke = bespokeData[bespokeData.length - 1];
    const finalBaseline = baselineData[baselineData.length - 1];
    const finalAlpha = Math.max(0, finalBespoke - finalBaseline);
    const finalTaxSaved = finalBespoke * 0.082;

    setBespokeTotal(finalBespoke);
    setBaselineTotal(finalBaseline);
    setAlphaGained(finalAlpha);
    setTaxSavings(finalTaxSaved);

    setChartData({
      labels,
      datasets: [
        {
          label: 'Bespoke Advisory Multi-Asset Alpha',
          data: bespokeData,
          borderColor: '#D4AF37',
          backgroundColor: 'rgba(212, 175, 55, 0.15)',
          borderWidth: 3,
          fill: true,
          tension: 0.35,
          pointBackgroundColor: '#F3E5AB',
          pointBorderColor: '#0A1128',
          pointRadius: 4,
          pointHoverRadius: 7
        },
        {
          label: 'Standard Benchmark / Generic MF (10.5%)',
          data: baselineData,
          borderColor: '#64748B',
          backgroundColor: 'rgba(100, 116, 139, 0.05)',
          borderWidth: 2,
          borderDash: [5, 5],
          fill: true,
          tension: 0.35,
          pointRadius: 2,
          pointHoverRadius: 5
        },
        {
          label: 'Cumulative Capital Contributed',
          data: principalData,
          borderColor: 'rgba(255, 255, 255, 0.25)',
          borderWidth: 1.5,
          fill: false,
          tension: 0,
          pointRadius: 0
        }
      ]
    });
  }, [initialCorpusCr, monthlyInflowLakhs, years, strategyRate, adjustInflation]);

  const chartOptions: any = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: 'index' as const,
      intersect: false,
    },
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: '#94A3B8',
          font: { family: 'var(--font-plus-jakarta)', size: 12 },
          usePointStyle: true,
          boxWidth: 8
        }
      },
      tooltip: {
        backgroundColor: 'rgba(15, 23, 42, 0.95)',
        borderColor: 'rgba(212, 175, 55, 0.3)',
        borderWidth: 1,
        titleColor: '#F8FAFC',
        bodyColor: '#E2E8F0',
        titleFont: { family: 'var(--font-plus-jakarta)', weight: 'bold' },
        bodyFont: { family: 'var(--font-jetbrains)' },
        padding: 12,
        displayColors: true,
        callbacks: {
          label: function (context: any) {
            return ` ${context.dataset.label}: ₹${context.parsed.y.toFixed(2)} Cr`;
          }
        }
      }
    },
    scales: {
      x: {
        grid: { color: 'rgba(255, 255, 255, 0.04)' },
        ticks: { color: '#64748B', font: { family: 'var(--font-jetbrains)', size: 11 } }
      },
      y: {
        grid: { color: 'rgba(255, 255, 255, 0.05)' },
        ticks: {
          color: '#64748B',
          font: { family: 'var(--font-jetbrains)', size: 11 },
          callback: function (value: any) {
            return '₹' + value + ' Cr';
          }
        }
      }
    }
  };

  return (
    <section id="calculator" className="py-24 bg-[#070C1E]/90 relative border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs uppercase tracking-widest text-emerald-400 font-bold font-mono">INTERACTIVE SIMULATOR</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-100">
            The Power of Fiduciary Alpha Compounding
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Simulate how institutional portfolio design, tax loss harvesting, and non-linear asset allocation compound wealth versus conventional retail portfolios over 5 to 30 years.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column */}
          <div className="lg:col-span-5 glass-panel p-6 sm:p-8 rounded-2xl space-y-6 border-slate-800">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <h3 className="font-serif text-lg font-bold text-slate-100">Simulation Parameters</h3>
              <span className="text-xs font-mono text-amber-400 px-2 py-1 bg-amber-400/10 rounded border border-amber-400/20">Live Model</span>
            </div>

            {/* Slider 1: Initial Corpus */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <label htmlFor="calcInitialCorpus" className="text-slate-300 font-medium">Initial Deployable Corpus</label>
                <span className="font-mono font-bold text-amber-300 text-base">₹{initialCorpusCr.toFixed(1)} Cr</span>
              </div>
              <input
                id="calcInitialCorpus"
                type="range"
                min="1"
                max="50"
                step="0.5"
                value={initialCorpusCr}
                onChange={(e) => setInitialCorpusCr(parseFloat(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-[11px] text-slate-400 font-mono">
                <span>₹1 Cr</span>
                <span>₹25 Cr</span>
                <span>₹50+ Cr</span>
              </div>
            </div>

            {/* Slider 2: Monthly Inflow */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <label htmlFor="calcMonthlyInflow" className="text-slate-300 font-medium">Monthly Capital Inflow</label>
                <span className="font-mono font-bold text-slate-100 text-base">
                  {monthlyInflowLakhs === 0 ? '₹0' : `₹${monthlyInflowLakhs.toFixed(1)} L/mo`}
                </span>
              </div>
              <input
                id="calcMonthlyInflow"
                type="range"
                min="0"
                max="25"
                step="0.5"
                value={monthlyInflowLakhs}
                onChange={(e) => setMonthlyInflowLakhs(parseFloat(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-[11px] text-slate-400 font-mono">
                <span>₹0 (Lump-sum)</span>
                <span>₹10 L</span>
                <span>₹25 L/mo</span>
              </div>
            </div>

            {/* Slider 3: Horizon */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <label htmlFor="calcYears" className="text-slate-300 font-medium">Investment Horizon</label>
                <span className="font-mono font-bold text-emerald-400 text-base">{years} Years</span>
              </div>
              <input
                id="calcYears"
                type="range"
                min="3"
                max="25"
                step="1"
                value={years}
                onChange={(e) => setYears(parseInt(e.target.value, 10))}
                className="w-full"
              />
              <div className="flex justify-between text-[11px] text-slate-400 font-mono">
                <span>3 Years</span>
                <span>10 Years</span>
                <span>25 Years</span>
              </div>
            </div>

            {/* Strategy Selection Cards */}
            <div className="space-y-2 pt-2">
              <label className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Target Allocation Mandate</label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setStrategyRate(0.132)}
                  className={`p-2.5 rounded-xl border text-center transition-all ${
                    strategyRate === 0.132
                      ? 'border-amber-400 bg-amber-500/15'
                      : 'border-slate-700 bg-slate-900/60 hover:border-slate-600'
                  }`}
                >
                  <p className="text-[11px] text-slate-400 font-medium">Preservation</p>
                  <p className="text-xs font-bold text-slate-100 font-mono">13.2% CAGR</p>
                </button>
                <button
                  type="button"
                  onClick={() => setStrategyRate(0.168)}
                  className={`p-2.5 rounded-xl border text-center transition-all ${
                    strategyRate === 0.168
                      ? 'border-amber-400 bg-amber-500/15'
                      : 'border-slate-700 bg-slate-900/60 hover:border-slate-600'
                  }`}
                >
                  <p className="text-[11px] text-amber-300 font-medium">Dynamic Alpha</p>
                  <p className="text-xs font-bold text-amber-300 font-mono">16.8% CAGR</p>
                </button>
                <button
                  type="button"
                  onClick={() => setStrategyRate(0.195)}
                  className={`p-2.5 rounded-xl border text-center transition-all ${
                    strategyRate === 0.195
                      ? 'border-amber-400 bg-amber-500/15'
                      : 'border-slate-700 bg-slate-900/60 hover:border-slate-600'
                  }`}
                >
                  <p className="text-[11px] text-slate-400 font-medium">Aggressive AIF</p>
                  <p className="text-xs font-bold text-emerald-400 font-mono">19.5% CAGR</p>
                </button>
              </div>
            </div>

            {/* Inflation Toggle */}
            <div className="flex items-center justify-between pt-3 border-t border-slate-800">
              <div className="flex items-center space-x-2">
                <input
                  id="calcInflation"
                  type="checkbox"
                  checked={adjustInflation}
                  onChange={(e) => setAdjustInflation(e.target.checked)}
                  className="w-4 h-4 rounded text-amber-500 focus:ring-amber-400 bg-slate-800 border-slate-700 cursor-pointer"
                />
                <label htmlFor="calcInflation" className="text-xs text-slate-300 font-medium cursor-pointer">
                  Adjust for 5.5% Long-term Inflation
                </label>
              </div>
              <span className="text-[10px] text-slate-400 font-mono">Real vs Nominal</span>
            </div>

          </div>

          {/* Simulation Output & Chart */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-2xl space-y-6 border-slate-800">
            
            {/* Output KPI Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-slate-950/70 border border-slate-800">
              <div>
                <p className="text-[11px] text-slate-400 uppercase tracking-wider">Estimated Corpus</p>
                <p className="text-xl sm:text-2xl font-bold text-amber-300 font-mono mt-1">₹{bespokeTotal.toFixed(2)} Cr</p>
                <p className="text-[10px] text-amber-400 font-medium">With Fiduciary Alpha</p>
              </div>
              <div>
                <p className="text-[11px] text-slate-400 uppercase tracking-wider">Generic Baseline</p>
                <p className="text-xl sm:text-2xl font-bold text-slate-400 font-mono mt-1">₹{baselineTotal.toFixed(2)} Cr</p>
                <p className="text-[10px] text-slate-400">10.5% Standard MF</p>
              </div>
              <div>
                <p className="text-[11px] text-slate-400 uppercase tracking-wider">Alpha Advantage</p>
                <p className="text-xl sm:text-2xl font-bold text-emerald-400 font-mono mt-1">+₹{alphaGained.toFixed(2)} Cr</p>
                <p className="text-[10px] text-emerald-400 font-medium">Excess Value Generated</p>
              </div>
              <div>
                <p className="text-[11px] text-slate-400 uppercase tracking-wider">Tax Saved Est.</p>
                <p className="text-xl sm:text-2xl font-bold text-slate-100 font-mono mt-1">~₹{taxSavings.toFixed(2)} Cr</p>
                <p className="text-[10px] text-slate-400">Via Harvesting & Trusts</p>
              </div>
            </div>

            {/* Chart Container */}
            <div className="relative h-72 sm:h-80 w-full pt-2">
              {mounted && chartData.labels.length > 0 && <Line data={chartData} options={chartOptions} />}
            </div>

            {/* Action Footnote */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-800 text-xs text-slate-400">
              <p className="flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                <span>Simulations reflect historical multi-asset models net of all fiduciary fees.</span>
              </p>
              <a
                href="#consultation"
                className="btn-gold px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 whitespace-nowrap"
              >
                <span>Execute This Mandate</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
