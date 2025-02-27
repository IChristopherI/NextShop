import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import Provider from "./providers";

export const metadata: Metadata = { title: "Next | Main", description: "Generated by create next app" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (

    <html lang="en" suppressHydrationWarning>
      <body >
        <Provider>{children}</Provider>
      </body>
    </html>

  );
}
