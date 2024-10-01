import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Providers from "@/components/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sparta Next App",
  description: "This is awesome Website",
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
        </nav>
        {children}
      </body>
    </html>
  );
}
