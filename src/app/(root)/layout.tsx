import React from "react";
import Header from "@/components/shared/MainComponent/Header/header";
import "../globals.css";
import { ThemeProvider } from "./ThemeProvider";
import toast, { Toaster } from 'react-hot-toast';


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
          <Toaster/>
        </main>
      </body>
      {/* </ThemeProvider> */}
    </html>
  );
}
