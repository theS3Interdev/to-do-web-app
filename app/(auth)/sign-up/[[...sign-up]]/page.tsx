import Link from "next/link";
import { SignUp } from "@clerk/nextjs";
import { ChevronLeft } from "lucide-react";

import { Button } from "@/components/ui/button";

const SignUpForm = () => {
  return (
    <div className="container grid h-screen w-screen flex-col items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="absolute left-4 top-4 md:left-8 md:top-8">
        <Button asChild>
          <Link href="/">
            <ChevronLeft className="mr-2 h-4 w-4" /> Back
          </Link>
        </Button>
      </div>

      <div className="hidden h-full bg-muted lg:block" />

      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <SignUp />
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
