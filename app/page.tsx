import { Engage, Faq, Hero, Process, Services, Studio, Work } from "@/components/Sections";

export default function Home() {
  return (
    <main>
      <Hero />
      <Studio />
      <Services />
      <Work />
      <Process />
      <Engage />
      <Faq />
    </main>
  );
}
