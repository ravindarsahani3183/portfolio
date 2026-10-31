import { Link } from "react-router-dom";
import {
    FaGithub,
    FaLinkedin,
    FaArrowRight,
    FaMapMarkerAlt,
} from "react-icons/fa";

export default function Hero() {
    return (
        <section
            id="home"
            className="relative flex min-h-screen scroll-mt-20 items-center px-5 pb-20 pt-32"
        >
            <div className="pointer-events-none absolute left-1/3 top-1/4 h-72 w-72 rounded-full bg-violet-600/20 blur-[120px]" />

            <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
                <div>
                    <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/10 px-4 py-2 text-sm text-violet-200">
                        <span className="h-2 w-2 rounded-full bg-emerald-400" />
                        MERN Stack Developer with AI
                    </p>

                    <p className="mb-3 text-lg text-slate-300">Hi, I'm</p>

                    <h1 className="text-5xl font-black leading-tight sm:text-7xl">
                        Ravindar
                        <br />
                        <span className="gradient-text">Sahani.</span>
                    </h1>

                    <h2 className="mt-5 text-xl font-semibold text-slate-200 sm:text-2xl">
                        React.js & MERN Stack Developer
                    </h2>

                    <p className="mt-5 max-w-xl leading-8 text-slate-400">
                        I build responsive web applications, reusable UI components,
                        REST API integrations, and AI-powered projects using modern
                        JavaScript technologies.
                    </p>

                    <p className="mt-5 flex items-center gap-2 text-sm text-slate-400">
                        <FaMapMarkerAlt className="text-violet-400" />
                        Mumbai, India
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">
                        <Link
                            to="#projects"
                            onClick={() =>
                                document.querySelector("#projects")?.scrollIntoView({
                                    behavior: "smooth",
                                })
                            }
                            className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-6 py-3 font-semibold text-white transition hover:bg-violet-500"
                        >
                            View Projects <FaArrowRight />
                        </Link>

                        <Link
                            to="#contact"
                            onClick={() =>
                                document.querySelector("#contact")?.scrollIntoView({
                                    behavior: "smooth",
                                })
                            }
                            className="rounded-xl border border-white/15 px-6 py-3 font-semibold transition hover:border-violet-400"
                        >
                            Contact Me
                        </Link>
                    </div>

                    <div className="mt-8 flex gap-5 text-2xl text-slate-400">
                        <a
                            href="https://github.com/ravindarsahani3183"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="GitHub"
                            className="transition hover:text-white"
                        >
                            <FaGithub />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/ravindar-sahani-896206256/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="LinkedIn"
                            className="transition hover:text-white"
                        >
                            <FaLinkedin />
                        </a>
                    </div>
                </div>

                <div className="mx-auto w-full max-w-md">
                    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-2xl shadow-violet-950/20">
                        <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-violet-500 to-indigo-700 text-4xl font-black">
                            RS
                        </div>

                        <h3 className="mt-6 text-2xl font-bold">Developer Profile</h3>
                        <p className="mt-3 leading-7 text-slate-400">
                            Building user-friendly interfaces and full-stack applications
                            with a focus on maintainable code and practical solutions.
                        </p>

                        <div className="mt-7 grid grid-cols-2 gap-3">
                            {[
                                ["Frontend", "React.js"],
                                ["Backend", "Node.js"],
                                ["Database", "MongoDB / SQL"],
                                ["AI", "LLM / RAG"],
                            ].map(([label, value]) => (
                                <div
                                    key={label}
                                    className="rounded-xl border border-white/10 bg-black/20 p-4"
                                >
                                    <p className="text-xs text-slate-500">{label}</p>
                                    <p className="mt-2 text-sm font-semibold text-slate-200">
                                        {value}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}