"use client";

import Link from "next/link";
import { useAuth, UserButton } from "@clerk/nextjs";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const MainNavigationBarActions = () => {
  const { isSignedIn } = useAuth();

  const { setTheme } = useTheme();

  return (
    <div className="flex items-center space-x-1 lg:space-x-2">
      {/* theme button start */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
            <Sun className="h-[1.1rem] w-[1.1rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.1rem] w-[1.1rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setTheme("dark")}>
            Dark
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("light")}>
            Light
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme("system")}>
            System
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      {/* theme button end */}

      {/* sign-in button start */}
      <div className="flex items-center space-x-1 lg:space-x-2">
        {!isSignedIn && (
          <Button asChild>
            <Link href="/sign-in">Sign In</Link>
          </Button>
        )}
      </div>
      {/* sign-in button end */}

      {/* user profile button start */}
      {isSignedIn && (
        <div className="ml-auto">
          <UserButton afterSignOutUrl="/" />
        </div>
      )}
      {/* user profile button end */}
    </div>
  );
};
