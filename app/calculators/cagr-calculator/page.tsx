import type { Metadata } from "next";
import CAGRCalculator from "./CagrCalculatorClient";

export const metadata: Metadata = {
  title: "CAGR Calculator – Calculate Annualized Investment Returns",
  description:
    "Use this CAGR calculator to find the annualized rate of return for your investments based on initial value, final value, and investment duration.",
};

export default function CAGRCalculatorPage() {
  return <CAGRCalculator />;

}
