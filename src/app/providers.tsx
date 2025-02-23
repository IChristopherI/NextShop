'use client'

import React from 'react';
import { SessionProvider } from "next-auth/react"
import NextTopLoader from 'nextjs-toploader';


const Provider: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <NextTopLoader  height={5} color='purple'/>
      <SessionProvider>
        {children}
     </SessionProvider>
    </>
  );
};

export default Provider;