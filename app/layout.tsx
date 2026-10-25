import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TWG Portfolio | Photography",
  description: "Editorial, Commercial & Lifestyle Photography",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-mocha-900 text-platinum-200">
        {children}
      </body>
    </html>
  );
}
