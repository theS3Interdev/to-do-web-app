import {
  Container,
  LandingFeaturesSection,
  LandingHeroSection,
  LandingOpenSourceSection,
} from "@/components/index";

const LandingPage = () => {
  return (
    <Container>
      {/* hero section start */}
      <section
        id="hero"
        className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32"
      >
        <LandingHeroSection />
      </section>
      {/* hero section end */}

      {/* features section start */}
      <section
        id="features"
        className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24"
      >
        <LandingFeaturesSection />
      </section>
      {/* features section end */}

      {/* open source section start */}
      <section id="open-source" className="container py-8 md:py-12 lg:py-24">
        <LandingOpenSourceSection />
      </section>
      {/* open source section end */}
    </Container>
  );
};

export default LandingPage;
