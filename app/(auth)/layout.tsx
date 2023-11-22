import { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { Flame } from "lucide-react";

import { AspectRatio } from "@/components/ui/aspect-ratio";

type Children = {
  children: ReactNode;
};

const AuthLayout = ({ children }: Children) => {
  return (
    <div className="grid min-h-screen grid-cols-1 overflow-hidden md:grid-cols-2">
      <AspectRatio ratio={16 / 9}>
        <Image
          src="/auth-layout.jpg"
          alt="Auth layout image"
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="absolute inset-0 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-background/60 md:to-background/40" />
      </AspectRatio>

      <main>{children}</main>
    </div>
  );
};

export default AuthLayout;
