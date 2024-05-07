import type { Metadata } from "next";
import { Bebas_Neue, Oswald } from "next/font/google";
import "./globals.css"

const bebas_Neue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bebas-neue",
})

const oswald = Oswald({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-oswald",
})



export const metadata: Metadata = {
  title: "Portfolio",
  description: "Welcome to my portfolio, where I showcase my projects and skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bebas_Neue.variable} ${oswald.variable}`}>{children}</body>
    </html>
  );
}
