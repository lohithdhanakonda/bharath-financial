import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TextConstants from "./constants/textConstants";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Simple Finance",
  description: "Your friendly financial planner",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <div className="min-h-screen flex flex-col">
          {/* HEADER */}
          <header className="py-5 bg-gray-700 text-white px-6">
            <strong className="text-xl">{TextConstants.title}</strong>
          </header>

          {/* MAIN CONTENT */}
          <main className="flex-1 p-6 main-content">{children}</main>

          {/* FOOTER */}
          <footer className="py-5 bg-gray-700 text-center text-white text-sm px-6">
            <strong>Disclaimer:</strong> This site provides financial
            calculators for understanding and planning. Results are indicative.
            Please verify details with official sources before acting.
          </footer>
        </div>
      </body>
    </html>
  );
}
