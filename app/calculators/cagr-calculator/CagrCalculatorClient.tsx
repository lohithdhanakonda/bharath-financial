"use client";

import { useState } from "react";

function formatCurrency(v: number) {
  return v.toLocaleString("en-IN");
}

export default function CAGRCalculator() {
  const [initial, setInitial] = useState(100000);
  const [final, setFinal] = useState(200000);
  const [years, setYears] = useState(5);

  const cagr =
    initial > 0 && years > 0
      ? (Math.pow(final / initial, 1 / years) - 1) * 100
      : 0;

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6 bg-white border rounded-lg">

      {/* H1 */}
      <h1 className="text-xl font-semibold">
        CAGR Calculator
      </h1>

      {/* Inputs */}
      <div>
        <label>Initial Value (₹)</label>
        <input
          type="number"
          value={initial}
          onChange={(e) => setInitial(Number(e.target.value))}
          className="border p-2 w-full"
        />
      </div>

      <div>
        <label>Final Value (₹)</label>
        <input
          type="number"
          value={final}
          onChange={(e) => setFinal(Number(e.target.value))}
          className="border p-2 w-full"
        />
      </div>

      <div>
        <label>Investment Duration (Years)</label>
        <input
          type="number"
          value={years}
          onChange={(e) => setYears(Number(e.target.value))}
          className="border p-2 w-full"
        />
      </div>

      {/* Result */}
      <div className="border-t pt-4">
        <p>
          <strong>CAGR:</strong> {cagr.toFixed(2)}% per year
        </p>
      </div>

      {/* Info box */}
      <div className="mt-6 bg-gray-50 border border-gray-200 rounded-lg p-5 text-sm text-gray-700 space-y-4">
        <h2 className="text-base font-semibold text-gray-900">
          About CAGR
        </h2>

        <p>
          CAGR (Compound Annual Growth Rate) represents the annualized rate
          at which an investment grows over a specific period, assuming the
          growth happens evenly every year.
        </p>

        <p>
          CAGR is useful for comparing the long-term performance of different
          investments such as stocks, mutual funds, or portfolios, even when
          the investment duration varies.
        </p>

        <p>
          CAGR does not reflect year-to-year fluctuations or volatility.
          Actual returns may vary significantly each year due to market
          conditions.
        </p>

        <p>
          This calculator provides an indicative CAGR value based on the
          inputs provided. It does not account for intermediate cash flows
          or withdrawals.
        </p>
      </div>
    </div>
  );
}
