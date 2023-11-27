import { ReactNode } from "react";

interface Children {
  children: ReactNode;
}

const AuthLayout = ({ children }: Children) => {
  return <div className="min-h-screen">{children}</div>;
};

export default AuthLayout;
