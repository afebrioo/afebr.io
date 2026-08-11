import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import Chat from "@/components/Chat";
import Contact from "@/components/Contact";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  return (
    <main>
      <CustomCursor />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Certifications />
      <Contact />
      <Chat />
    </main>
  );
}
