import { ReactNode } from "react";

import { MainFooter, MainNavigationBar } from "@/components/index";

type DashboardLayoutProps = {
  children: ReactNode;
};

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col space-y-6">
      <MainNavigationBar />

      <main>{children}</main>

      <MainFooter />
    </div>
  );
};

export default DashboardLayout;
