"use client";

import { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

function formatCurrency(v: number) {
  return v.toLocaleString("en-IN");
}

function calculatePPF(annual: number, rate: number, years: number) {
  let balance = 0;
  for (let i = 1; i <= years; i++) {
    balance = (balance + annual) * (1 + rate / 100);
  }
  return balance;
}

export default function PPFCalculator() {
  const [annual, setAnnual] = useState(150000);
  const [rate, setRate] = useState(7.1);
  const years = 15;

  const maturity = calculatePPF(annual, rate, years);
  const invested = annual * years;

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6 bg-white border rounded-lg">
      {/* H1 for SEO */}
      <h1 className="text-xl font-semibold">PPF Calculator</h1>

      {/* Annual Contribution */}
      <div>
        <label className="block font-medium">
          Annual Contribution (₹)
        </label>
        <input
          type="number"
          value={annual}
          onChange={(e) => setAnnual(Number(e.target.value))}
          className="border p-2 w-full"
        />
      </div>

      {/* Interest Rate */}
      <div>
        <label className="block font-medium">
          Interest Rate (%): {rate}
        </label>
        <Slider
          min={6}
          max={8}
          step={0.1}
          value={rate}
          onChange={(v) => setRate(v as number)}
        />
      </div>

      {/* Result */}
      <div className="border-t pt-4 text-sm space-y-1">
        <p>
          <strong>Total Invested:</strong>{" "}
          ₹{formatCurrency(invested)}
        </p>
        <p>
          <strong>Maturity Amount:</strong>{" "}
          ₹{formatCurrency(Math.round(maturity))}
        </p>
      </div>

      {/* Info / SEO micro-content */}
      <div className="mt-6 bg-gray-50 border border-gray-200 rounded-lg p-5 text-sm text-gray-700 space-y-4">
        <h2 className="text-base font-semibold text-gray-900">
          About Public Provident Fund (PPF)
        </h2>

        <p>
          Public Provident Fund (PPF) is a government-backed long-term
          savings scheme in India that offers fixed returns and tax
          benefits under Section 80C.
        </p>

        <p>
          PPF has a lock-in period of 15 years, with interest compounded
          annually. The interest rate is declared quarterly by the
          Government of India.
        </p>

        <p>
          This calculator provides an indicative estimate assuming a
          constant annual contribution and interest rate. Actual returns
          may vary based on official rate revisions and contribution timing.
        </p>
      </div>
    </div>
  );
}
