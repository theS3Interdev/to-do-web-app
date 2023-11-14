import Link from "next/link";
import { Flame } from "lucide-react";

import { Container, MainNavigationBarActions } from "@/components/index";

export const MainNavigationBar = () => {
  return (
    <header>
      <nav>
        <Container>
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center">
              <Flame className="mr-2 h-6 w-6" />
              <p className="font-montserrat text-lg font-bold tracking-wide">
                New ToDo
              </p>
            </Link>

            <MainNavigationBarActions />
          </div>
        </Container>
      </nav>
    </header>
  );
};
