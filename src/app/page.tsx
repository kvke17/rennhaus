import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#09090B] text-[#EDEDF2] flex flex-col">
      <Navbar />
      <Hero />
      <Services />
    </main>
  );
}
