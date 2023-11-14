import Link from "next/link";

import { Container } from "@/components/generic/container";
import { Button } from "@/components/ui/button";

const LandingPage = () => {
  return (
    <Container>
      <section className="py-5">
        <h1 className="font-montserrat text-4xl font-bold tracking-wide text-sky-800">
          Your settings are well configured
        </h1>
        <p className="mt-5">
          <Button asChild>
            <Link href="/dashboard">Dashboard</Link>
          </Button>
        </p>
      </section>
    </Container>
  );
};

export default LandingPage;
