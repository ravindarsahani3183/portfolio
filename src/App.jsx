import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProjectCard from "./components/ProjectCard";
import SectionHeading from "./components/SectionHeading";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import { projects } from "./data/projects";

function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-20 border-t border-white/5 px-5 py-24"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="My work"
          title={
            <>
              Featured <span className="gradient-text">Projects.</span>
            </>
          }
          description="Explore my web development, full-stack and AI integration projects."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </>
  );
}