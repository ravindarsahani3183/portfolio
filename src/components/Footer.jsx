import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-7">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center sm:flex-row">
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} Ravindar Sahani. Built with React &
          Tailwind CSS.
        </p>

        <div className="flex items-center gap-5 text-slate-400">
          <a
            href="https://github.com/ravindarsahani3183"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="hover:text-white"
          >
            <FaGithub size={19} />
          </a>

          <a
            href="https://www.linkedin.com/in/ravindar-sahani-896206256/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="hover:text-white"
          >
            <FaLinkedin size={19} />
          </a>

          <Link
            to="#home"
            onClick={() =>
              document.querySelector("#home")?.scrollIntoView({
                behavior: "smooth",
              })
            }
            aria-label="Back to top"
            className="hover:text-white"
          >
            <FaArrowUp size={18} />
          </Link>
        </div>
      </div>
    </footer>
  );
}