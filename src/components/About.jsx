import { FaBriefcase, FaCheckCircle } from "react-icons/fa";
import { experience } from "../data/experience";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-20 border-t border-white/5 px-5 py-24"
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="About me"
            title={
              <>
                Building with <span className="gradient-text">purpose.</span>
              </>
            }
            description="I enjoy turning ideas into useful, responsive web applications."
          />

          <p className="leading-8 text-slate-400">
            My development experience includes React interfaces, reusable
            components, API integration, access control, database-driven
            applications, and collaboration with backend and QA teams.
            I am also expanding my skills in AI integrations and RAG-based
            applications.
          </p>

          <div className="mt-6 space-y-3">
            {[
              "Reusable and maintainable React components",
              "Responsive UI development",
              "REST API integration",
              "Frontend and backend collaboration",
            ].map((item) => (
              <p key={item} className="flex items-center gap-3 text-slate-300">
                <FaCheckCircle className="shrink-0 text-violet-400" />
                {item}
              </p>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-6 flex items-center gap-3 text-xl font-bold">
            <FaBriefcase className="text-violet-400" />
            Work Experience
          </h3>

          <div className="space-y-5">
            {experience.map((item) => (
              <article
                key={item.company}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
              >
                <p className="text-sm text-violet-300">{item.period}</p>
                <h4 className="mt-3 text-lg font-bold">{item.role}</h4>
                <p className="mt-1 text-sm text-slate-300">{item.company}</p>
                <p className="mt-4 text-sm leading-7 text-slate-400">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}