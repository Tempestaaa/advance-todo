import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/shared/sidebar/sidebar";

const defaultFont = Montserrat({
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
      <body className={`${defaultFont.className} antialiased flex`}>
        <Sidebar />
        <main className="grow">{children}</main>
      </body>
    </html>
  );
}
