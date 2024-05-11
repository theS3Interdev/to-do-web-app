import React, { ReactNode } from "react";
import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";

import { TanstackProvider } from "@/lib/providers/tanstack-provider";
import { ThemeProvider } from "@/lib/providers/theme-provider";

import { Toaster } from "@/components/ui/toaster";

import "@/app/styles/globals.css";

interface Children {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: "Todo Web App",
  description: "Simple cloud based task management application.",
};

const RootLayout = ({ children }: Children) => {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="scroll-smooth font-opensans antialiased">
          <TanstackProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              {children}
              <Toaster />
            </ThemeProvider>
          </TanstackProvider>
        </body>
      </html>
    </ClerkProvider>
  );
};

export default RootLayout;
