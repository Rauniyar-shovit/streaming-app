import { FAQs, Features, Footer, Hero, Navbar } from "@/components";
import { EmailContextProvider } from "@/context/EmailConext";

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
