import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { IntroExperience } from "@/components/site/IntroExperience";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Gallery } from "@/components/site/Gallery";
import { Differentials } from "@/components/site/Differentials";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { Testimonials } from "@/components/site/Testimonials";
import { Instagram } from "@/components/site/Instagram";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";

const title = "Kleber's Garage | Car Detail, PPF e Customização em Paulínia";
const description =
  "Estética automotiva de alto padrão em Paulínia (SP): Car Detail, PPF e Customização com 20 anos de tradição. The Art of Preservation.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <IntroExperience />
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Differentials />
        <BeforeAfter />
        <Testimonials />
        <Instagram />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
