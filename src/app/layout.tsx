import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "tengdu.me",
  description: "Personal blog with thoughts, stories, and media",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col text-[#1c1917] dark:text-[#ede8e3]">
        <LanguageProvider>
          <header className="border-b" style={{ borderColor: "var(--border)" }}>
            <div className="max-w-4xl mx-auto px-4 py-5 flex items-center justify-between">
              <a href="/" className="text-lg font-semibold tracking-tight" style={{ color: "var(--accent)" }}>
                tengdu.me
              </a>
              <LanguageSwitcher />
            </div>
          </header>
          <main className="flex-1">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
