import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import Chat from "@/components/Chat";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <div className="bg-glow-top" aria-hidden="true" />
      <div className="bg-glow-mid" aria-hidden="true" />

      <Navbar />
      <Hero />
      <div className="divider" />
      <About />
      <div className="divider" />
      <Skills />
      <div className="divider" />
      <Projects />
      <div className="divider" />
      <Experience />
      <div className="divider" />
      <Certifications />
      <div className="divider" />
      <Contact />

      {/* Floating Interactive AI Assistant */}
      <Chat />
    </main>
  );
}
