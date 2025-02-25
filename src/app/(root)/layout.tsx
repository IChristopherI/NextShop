import React from "react";
import "../globals.css";
import  { Toaster } from 'react-hot-toast';
import Header from "@/src/components/shared/Header/header";

export default function HomeLayout({children,modal}
  : Readonly<{children: React.ReactNode; modal: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body>
        <main>
          <Header/>
          {children}
          {modal}
          <Toaster/>
        </main>
      </body>
    </html>
  );
}
