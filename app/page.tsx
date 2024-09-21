import Companies from "@/components/companies";
import FAQ from "@/components/Faq";
import Hero from "@/components/Hero";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Companies />
      <FAQ />
    </main>
  );
}
