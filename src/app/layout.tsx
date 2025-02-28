import React from "react";
import "./globals.css";
import Provider from "./providers";


export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (

    <html lang="en" suppressHydrationWarning>
      <body >
        <Provider>{children}</Provider>
      </body>
    </html>

  );
}
