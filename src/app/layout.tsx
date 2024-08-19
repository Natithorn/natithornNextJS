import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from 'next/link';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <h1>CIS</h1>
        <Link href="/">Home</Link> - <Link href="/student">Student</Link> - <Link href="/pokemon">Pokemon</Link>
        {children}
        </body>
    </html>
  );
}
