import type { Metadata } from "next";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bharath Financial – Indian Financial Calculators",
  description:
    "Free Indian financial calculators for SIP, FD, RD, EMI, PPF, CAGR, Gratuity and more.",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <div className="min-h-screen flex flex-col">
          {/* HEADER */}
          <header className="py-5 bg-gray-700 text-white px-6">
            <Link href="/" className="inline-block">
              <strong className="text-xl cursor-pointer hover:opacity-90">
                Bharath Financial
              </strong>
            </Link>
          </header>

          {/* MAIN CONTENT */}
          <main className="flex-1 p-6 main-content">{children}</main>
          <Analytics />
          {/* FOOTER */}
          <footer className="py-3 bg-gray-700 text-center text-white text-sm px-6">
            <strong>Disclaimer:</strong> This site provides financial
            calculators for understanding and planning. Results are indicative.
            Please verify details with official sources before acting.
          </footer>
        </div>
      </body>
    </html>
  );
}
