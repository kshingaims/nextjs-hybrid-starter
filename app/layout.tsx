'use client';

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { AppInsightsContext } from '@microsoft/applicationinsights-react-js';
import { reactPlugin } from '../src/appInsights';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppInsightsContext.Provider value={reactPlugin}>
          {children}
        </AppInsightsContext.Provider>
      </body>
    </html>
  );
}
