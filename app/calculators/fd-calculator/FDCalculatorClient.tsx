"use client";

import { useState } from "react";
import FDForm from "./FDForm";

export default function FDCalculatorClient() {
  const [forms, setForms] = useState<number[]>([0]);

  const addForm = () => {
    if (forms.length >= 2) return;
    setForms((prev) => [...prev, prev.length]);
  };

  const isSingle = forms.length === 1;

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-4">
      {/* ✅ PAGE H1 (ONLY ONE) */}
      <h1 className="text-xl font-semibold">Fixed Deposit (FD) Calculator</h1>

      {/* Add comparison */}
      <div className="flex justify-end">
        {forms.length < 2 && (
          <button
            onClick={addForm}
            className="px-4 py-2 border rounded-md text-sm font-medium hover:bg-gray-100"
          >
            + Add bank for comparison
          </button>
        )}
      </div>

      {/* Rates disclaimer */}
      <div className="text-sm text-gray-600 bg-gray-50 border rounded-md p-3">
        <strong>Note on interest rates:</strong> Fixed Deposit interest rates
        shown are indicative and based on publicly available information. Actual
        rates may vary based on tenure, payout option, and bank policies. Use
        the slider or input field to adjust the interest rate based on your
        assumptions.
      </div>

      {/* Forms */}
      <div
        className={
          isSingle
            ? "flex justify-center"
            : "grid grid-cols-1 md:grid-cols-2 gap-6"
        }
      >
        {forms.map((id) => (
          <div key={id} className={isSingle ? "w-full max-w-xl" : ""}>
            <FDForm />
          </div>
        ))}
      </div>

      {/* SEO micro-content */}
      <div className="mt-10 max-w-4xl mx-auto">
        <div
          className="bg-gray-50 border border-gray-200 rounded-lg p-6 space-y-4 text-sm text-gray-700"
          style={{ padding: "15px", fontSize: "10px" }}
        >
          <h2 className="text-base font-semibold text-gray-900">
            About Fixed Deposits
          </h2>

          <div>
            <h3 className="font-medium text-gray-800">
              What is a Fixed Deposit?
            </h3>
            <p className="mt-1">
              A Fixed Deposit (FD) is a one-time investment option offered by
              banks where a lump sum amount earns interest over a fixed tenure
              at a predetermined rate.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-gray-800">
              How is FD interest calculated?
            </h3>
            <p className="mt-1">
              FD interest is generally compounded quarterly or annually
              depending on the bank and payout option. The maturity amount
              depends on the deposit amount, tenure, interest rate, and
              compounding frequency.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-gray-800">
              Accuracy of this calculator
            </h3>
            <p className="mt-1">
              This calculator provides indicative results for planning purposes.
              Actual FD returns may differ based on bank-specific rules and
              compounding methods.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
