import Link from "next/link";

import { Button } from "@/components/ui/button";

export const LandingHeroSection = () => {
  return (
    <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
      <Link
        href="https://twitter.com/TheSavannahDev"
        className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium"
        target="_blank"
      >
        Follow me on Twitter
      </Link>

      <h1 className="font-montserrat text-3xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
        An example app built using Next.js 14.
      </h1>

      <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
        I&apos;m building a web app with Next.js 14 and open sourcing
        everything. Follow along as we figure this out together.
      </p>

      <div className="space-x-4">
        <Button asChild>
          <Link href="/sign-in">Get Started</Link>
        </Button>

        <Button asChild>
          <Link
            href="https://github.com/TheSavannahDev/new-todo-app"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </Link>
        </Button>
      </div>
    </div>
  );
};
