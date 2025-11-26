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
  title: "Sylvain Hontans - Portfolio BTS SIO SLAM",
  description: "Portfolio de Sylvain Hontans, étudiant en BTS SIO SLAM. Découvrez mon parcours, mes projets et mes compétences en développement logiciel.",
  keywords: ["Portfolio", "BTS SIO", "SLAM", "Développeur", "Sylvain Hontans"],
  authors: [{ name: "Sylvain Hontans" }],
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#5227FF",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
