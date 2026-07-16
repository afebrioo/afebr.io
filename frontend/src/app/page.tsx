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
      <Navbar />
      <Hero />
      <div className="neon-divider" />
      <About />
      <div className="neon-divider" />
      <Skills />
      <div className="neon-divider" />
      <Projects />
      <div className="neon-divider" />
      <Experience />
      <div className="neon-divider" />
      <Certifications />
      <div className="neon-divider" />
      <Chat />
      <Contact />
    </main>
  );
}
