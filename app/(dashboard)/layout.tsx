import { ReactNode } from "react";
import { Container } from "@/components/index";

type DashboardLayoutProps = {
  children: ReactNode;
};

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <Container>
      <header>Header Section</header>
      <main>{children}</main>
      <footer>Footer Section</footer>
    </Container>
  );
};

export default DashboardLayout;
