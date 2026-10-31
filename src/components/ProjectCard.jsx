import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectCard({ project }) {
  const hasLinks = project.liveUrl || project.githubUrl;

  return (
    <article className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-400/40 hover:bg-white/[0.06]">
      <div className="flex items-start justify-between">
        <span className="text-5xl">{project.icon}</span>
        <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-400">
          {project.category}
        </span>
      </div>

      <h3 className="mt-6 text-xl font-bold text-white">
        {project.title}
      </h3>

      <p className="mt-3 flex-1 text-sm leading-7 text-slate-400">
        {project.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tech.map((technology) => (
          <span
            key={technology}
            className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1.5 text-xs text-slate-300"
          >
            {technology}
          </span>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-3 border-t border-white/10 pt-5">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-violet-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-violet-500"
          >
            Live Demo <FaExternalLinkAlt size={12} />
          </a>
        )}

        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-4 py-2.5 text-sm hover:border-violet-400"
          >
            <FaGithub size={15} /> Source Code
          </a>
        )}

        {!hasLinks && (
          <span className="text-sm text-amber-300/80">
            <FaExternalLinkAlt className="mr-2 inline" size={12} />
            Link coming soon
          </span>
        )}
      </div>
    </article>
  );
}