import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Providers from "@/components/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LoLDex",
  description: "롤 정보 모음",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          <Link href="/">Home</Link>
          <Providers>
            <Link href="/champions">Champions</Link>
          </Providers>
          <Link href="/items">Items</Link>
          <Link href="/rotation">Rotation</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
