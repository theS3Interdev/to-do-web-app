import Link from "next/link";

export const LandingOpenSourceSection = () => {
  return (
    <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
      <h2 className="font-montserrat text-3xl font-bold leading-[1.1] sm:text-3xl md:text-6xl">
        Proudly Open Source
      </h2>

      <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
        To Do is open source and powered by open source software. <br /> The
        code is available on{" "}
        <Link
          href="https://github.com/thesavannahdev/new-todo-app"
          target="_blank"
          rel="noreferrer"
          className="underline underline-offset-4"
        >
          GitHub
        </Link>
      </p>
    </div>
  );
};
