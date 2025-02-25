'use client';

import React from 'react';
import { SessionProvider } from "next-auth/react"
import NextTopLoader from 'nextjs-toploader';
import { ThemeProvider } from 'next-themes';


const Provider: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange>
          
        <NextTopLoader height={5} color='purple' />
        <SessionProvider>
          {children}
        </SessionProvider>
      </ThemeProvider>
    </>
  );
};

export default Provider;