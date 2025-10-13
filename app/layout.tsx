import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/shared/sidebar/sidebar";

const defaultFont = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Todo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${defaultFont.className} antialiased h-dvh max-h-dvh overflow-hidden flex *:p-4`}
      >
        <Sidebar />
        <main className="grow">{children}</main>
      </body>
    </html>
  );
}
