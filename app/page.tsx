import { FAQs, Features, Footer, Hero, Navbar } from "@/components";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <Hero />
      <Features />
      <FAQs />
      <Footer />
    </main>
  );
}
