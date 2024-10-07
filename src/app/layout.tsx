import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Providers from "@/components/providers";
import Logo from "../public/images/logo.png";
import Image from "next/image";
// import localFont from "next/font/local";
// import font from "../assets/fonts";

const inter = Inter({ subsets: ["latin"] });
// const RixGo = localFont({
//   src: "../assets/fonts/RIXGOB.TTF",
//   variable: "--font-RixGo",
//   display: "swap",
//   weight: "400",
// });

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
        <header className="text-gray-600 body-font">
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <Image
                src={Logo}
                alt="Logo"
                className="w-20 h-20 text-white p-2 rounded-full fill-none stroke-currentColor"
              />
              <span className="ml-3 text-xl">LoLDex</span>
            </a>
            <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
              <Providers>
                <Link href="/champions" className="mr-5 hover:text-gray-900">
                  Champions
                </Link>
              </Providers>
              <Link href="/items" className="mr-5 hover:text-gray-900">
                Items
              </Link>
              <Link href="/rotation" className="mr-5 hover:text-gray-900">
                Rotation
              </Link>
            </nav>

            <Link
              href="/"
              className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
            >
              Home
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
