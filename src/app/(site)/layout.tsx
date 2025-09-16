import type { Metadata } from "next";
import { Geist, Geist_Mono } from 'next/font/google';
import '../../styles/globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = ({
  title: 'Rope',
  description: 'create by Next.js cohort',
});

export default function Rootlayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}



