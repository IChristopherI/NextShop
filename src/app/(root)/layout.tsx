import React from "react";
import Header from "@/components/shared/MainComponent/Header/header";
import "../globals.css";
import { ThemeProvider } from "./ThemeProvider";


export default function HomeLayout({children,modal}
  : Readonly<{children: React.ReactNode; modal: React.ReactNode;}>) {
  return (
    <html lang="en">
      {/* <ThemeProvider attribute="class"defaultTheme="system" enableSystem disableTransitionOnChange> */}
      <body>
        <main>
          <Header />
          {children}
          {modal}
        </main>
      </body>
      {/* </ThemeProvider> */}
    </html>
  );
}
