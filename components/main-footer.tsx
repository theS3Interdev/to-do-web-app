import Link from "next/link";
import { Flame } from "lucide-react";

import { Container } from "@/components/index";

export const MainFooter = () => {
  return (
    <footer className="border-t">
      <Container>
        <div className="flex flex-col items-center gap-4 py-10 md:h-24 md:flex-row md:justify-between md:py-0">
          <Link href="/" className="flex items-center">
            <Flame className="mr-2 h-6 w-6" />
            <p className="font-montserrat text-lg font-bold tracking-wide">
              To Do
            </p>
          </Link>

          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <p className="text-center text-sm leading-loose md:text-right">
              Built by{" "}
              <a
                href="https://twitter.com/theS3InterDev"
                target="_blank"
                rel="noreferrer"
                className="font-medium underline underline-offset-4"
              >
                theS3InterDev{" "}
              </a>
              and hosted on{" "}
              <a
                href="https://vercel.com"
                target="_blank"
                rel="noreferrer"
                className="font-medium underline underline-offset-4"
              >
                Vercel
              </a>
              . The source code is on{" "}
              <a
                href="https://github.com/theS3Interdev/to-do-web-app"
                target="_blank"
                rel="noreferrer"
                className="font-medium underline underline-offset-4"
              >
                GitHub
              </a>
              .
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};
