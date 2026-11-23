import CanvasBackground from "@/components/CanvasBackground";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import ArchitectureDiagram from "@/components/ArchitectureDiagram";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Dynamic Cursor-Interactive Constellation Canvas */}
      <CanvasBackground />

      {/* Main Content Layout Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-28">
        <Navbar />
        <Hero />
        <Highlights />
        <ArchitectureDiagram />
        <Skills />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
