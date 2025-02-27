import React from "react";
import "../globals.css";
import  { Toaster } from 'react-hot-toast';
import Header from "@/src/components/shared/Header/header";

export default function HomeLayout({children}
  : Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body>
        <main>
          <Header/>
          {children}
          <Toaster/>
        </main>
      </body>
    </html>
  );
}
