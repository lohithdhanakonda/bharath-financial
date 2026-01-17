"use client";

import { useState } from "react";

/* ---------- Helpers ---------- */
function formatCurrency(v: number) {
  return v.toLocaleString("en-IN");
}

/* ---------- Component ---------- */
export default function GratuityCalculatorClient() {
  const [salary, setSalary] = useState(50000);
  const [years, setYears] = useState(10);

  const gratuity = (salary * 15 * years) / 26;

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6 bg-white border rounded-lg">
      {/* ✅ Single H1 */}
      <h1 className="text-xl font-semibold">Gratuity Calculator</h1>

      {/* Salary */}
      <div>
        <label className="block font-medium">
          Last Drawn Monthly Salary (Basic + DA) (₹)
        </label>
        <input
          type="number"
          value={salary}
          onChange={(e) => setSalary(Number(e.target.value))}
          className="border p-2 w-full"
        />
      </div>

      {/* Years */}
      <div>
        <label className="block font-medium">Years of Service</label>
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
          <strong>Estimated Gratuity Amount:</strong> ₹
          {formatCurrency(Math.round(gratuity))}
        </p>
      </div>

      {/* SEO + UX-friendly info */}
      {/* Information box */}
      <div
        className="mt-6 bg-gray-50 border border-gray-200 rounded-lg p-5 text-sm text-gray-700 space-y-4"
        style={{ padding: "15px", fontSize: "10px" }}
      >
        <h2 className="text-base font-semibold text-gray-900">
          About Gratuity Calculation
        </h2>

        <div>
          <h3 className="font-medium text-gray-800">What is gratuity?</h3>
          <p className="mt-1">
            Gratuity is a lump sum amount paid by an employer to an employee as
            a recognition of long-term service, governed by the Payment of
            Gratuity Act, 1972.
          </p>
        </div>

        <div>
          <h3 className="font-medium text-gray-800">
            How is gratuity calculated?
          </h3>
          <p className="mt-1">
            Gratuity is calculated using the formula:
            <br />
            <em>(Last drawn salary × 15 × years of service) ÷ 26</em>
          </p>
        </div>

        <div>
          <h3 className="font-medium text-gray-800">
            Accuracy of this calculator
          </h3>
          <p className="mt-1">
            This calculator provides an indicative estimate. Actual gratuity
            payable may vary based on eligibility conditions, statutory limits,
            and company policies.
          </p>
        </div>
      </div>
    </div>
  );
}
