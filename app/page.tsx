import { FAQs, Features, Footer, Hero, HomeNavbar } from "@/components";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <HomeNavbar />
      <Hero />
      <Features />
      <FAQs />
      <Footer />
    </main>
  );
}
