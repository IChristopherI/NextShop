import React from "react";
import Header from "@/components/shared/MainComponent/Header/header";
import "../globals.css";
import  { Toaster } from 'react-hot-toast';

export default function HomeLayout({children,modal}
  : Readonly<{children: React.ReactNode; modal: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body>
        <main>
          <Header />
          {children}
          {modal}
          <Toaster/>
        </main>
      </body>
    </html>
  );
}
