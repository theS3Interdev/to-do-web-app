import { ReactNode } from "react";

import { MainFooter, MainNavigationBar } from "@/components/index";

interface Children {
  children: ReactNode;
}

const MarketingLayout = ({ children }: Children) => {
  return (
    <div className="flex min-h-screen flex-col">
      <MainNavigationBar />

      <main className="flex-1">{children}</main>

      <MainFooter />
    </div>
  );
};

export default MarketingLayout;
