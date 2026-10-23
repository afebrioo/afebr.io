import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Connection from "@/components/Connection";
import Certifications from "@/components/Certifications";
import Chat from "@/components/Chat";
import Contact from "@/components/Contact";
import CustomCursor from "@/components/CustomCursor";
import Intro from "@/components/Intro";
import ScrollFX from "@/components/motion/ScrollFX";
import TapeBand from "@/components/motion/TapeBand";
import QuoteSection from "@/components/QuoteSection";

export default function Home() {
  return (
    <main>
      <Intro />
      <ScrollFX />
      <Navbar />
      <Hero />

      <TapeBand
        top={["Data Science", "Machine Learning", "Computer Vision", "LLM Agents"]}
        bottom={["Analyse", "Model", "Deploy", "Iterate"]}
      />
      <About />
      <QuoteSection />
      <Projects />
      <Skills />
      <Experience />
      <TapeBand
        tone="dark"
        top={["Lead", "Organise", "Inspire", "Connect"]}
        bottom={["Community", "Leadership", "Impact", "Service"]}
      />
      <Connection />
      <Certifications />
      <TapeBand
        top={["Let's Build", "Something", "Meaningful", "Together"]}
        bottom={["Open to Work", "Aug 2026+", "Bandung", "Remote"]}
      />
      <Contact />
      <Chat />
    </main>
  );
}
