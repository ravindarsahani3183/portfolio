import {
  FaLaptopCode,
  FaServer,
  FaDatabase,
  FaBrain,
} from "react-icons/fa";
import { skills } from "../data/skills.js";
import SectionHeading from "./SectionHeading";

const icons = [FaLaptopCode, FaServer, FaDatabase, FaBrain];

export default function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-20 border-t border-white/5 px-5 py-24"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Technical skills"
          title={
            <>
              My <span className="gradient-text">toolkit.</span>
            </>
          }
          description="Technologies and tools I use to build web applications."
        />

        <div className="grid gap-5 sm:grid-cols-2">
          {skills.map((group, index) => {
            const Icon = icons[index];

            return (
              <article
                key={group.title}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-violet-400/40"
              >
                <div className="mb-5 flex items-center gap-3">
                  <span className="rounded-xl bg-violet-500/15 p-3 text-xl text-violet-300">
                    <Icon />
                  </span>
                  <h3 className="text-lg font-bold">{group.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-sm text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}