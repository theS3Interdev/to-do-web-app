import React, { ReactNode } from "react";
import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";

import { TanstackProvider } from "@/lib/providers/tanstack-provider";
import { ThemeProvider } from "@/lib/providers/theme-provider";

import { Toaster } from "@/components/ui/toaster";
import { MainFooter, MainNavigationBar } from "@/components/index";

import "@/app/styles/globals.css";

type Children = {
  children: ReactNode;
};

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon/png",
  },
  title: "To Do",
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
              <MainNavigationBar />
              {children}
              <MainFooter />
              <Toaster />
            </ThemeProvider>
          </TanstackProvider>
        </body>
      </html>
    </ClerkProvider>
  );
};

export default RootLayout;
