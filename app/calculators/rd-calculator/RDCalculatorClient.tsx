"use client";

import { useState } from "react";
import RDForm from "./RDForm";

export default function RDCalculatorClient() {
  const [forms, setForms] = useState<number[]>([0]);

  const addForm = () => {
    if (forms.length >= 2) return;
    setForms((prev) => [...prev, prev.length]);
  };

  const isSingle = forms.length === 1;

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-4">
      {/* ✅ PAGE H1 */}
      <h1 className="text-xl font-semibold">
        Recurring Deposit (RD) Calculator
      </h1>

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
        <strong>Note on interest rates:</strong> Interest rates shown are
        indicative and based on publicly available information. Rates may change
        over time or vary across banks and branches. You can use the slider or
        input field to adjust the interest rate based on your assumptions.
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
            <RDForm />
          </div>
        ))}
      </div>

      {/* ✅ Info box (plain style, SEO-safe) */}
      <div
        className="mt-8 max-w-4xl mx-auto bg-gray-50 border border-gray-200 rounded-lg p-5 text-sm text-gray-700 space-y-4"
        style={{ padding: "15px", fontSize: "10px" }}
      >
        <h2 className="text-base font-semibold text-gray-900">
          About Recurring Deposits
        </h2>

        <div>
          <h3 className="font-medium text-gray-800">
            What is a Recurring Deposit?
          </h3>
          <p className="mt-1">
            A Recurring Deposit (RD) is a savings scheme offered by banks where
            a fixed amount is deposited every month for a chosen tenure, earning
            interest over time.
          </p>
        </div>

        <div>
          <h3 className="font-medium text-gray-800">
            How is RD maturity calculated?
          </h3>
          <p className="mt-1">
            RD maturity depends on the monthly deposit amount, tenure, interest
            rate, and compounding frequency. Each monthly deposit earns interest
            for a different duration until maturity.
          </p>
        </div>

        <div>
          <h3 className="font-medium text-gray-800">
            Accuracy of this calculator
          </h3>
          <p className="mt-1">
            This calculator provides indicative results for planning purposes.
            Actual RD returns may differ based on bank-specific rules and
            compounding methods.
          </p>
        </div>
      </div>
    </div>
  );
}
