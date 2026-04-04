import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
      <body className="min-h-full flex flex-col bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100">
        <header className="border-b border-neutral-200 dark:border-neutral-800">
          <div className="max-w-2xl mx-auto px-4 py-5 flex items-center justify-between">
            <a href="/" className="text-lg font-semibold tracking-tight">
              tengdu.me
            </a>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t border-neutral-200 dark:border-neutral-800 mt-16">
          <div className="max-w-2xl mx-auto px-4 py-6 text-sm text-neutral-500">
            © {new Date().getFullYear()} tengdu.me
          </div>
        </footer>
      </body>
    </html>
  );
}
