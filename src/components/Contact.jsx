import { FaEnvelope, FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import SectionHeading from "./SectionHeading";

const email = "ravindarsahani3183@gmail.com"; 

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 border-t border-white/5 px-5 py-24"
    >
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Get in touch"
          title={
            <>
              Let's work <span className="gradient-text">together.</span>
            </>
          }
          description="Have a job opportunity or project idea? Feel free to connect with me."
        />

        <div className="rounded-3xl border border-violet-400/20 bg-gradient-to-br from-violet-600/15 to-cyan-500/5 p-7 sm:p-10">
          <a
            href={`mailto:${email}`}
            className="flex items-center gap-4 rounded-xl border border-white/10 bg-black/20 p-4 transition hover:border-violet-400/40"
          >
            <FaEnvelope className="text-2xl text-violet-300" />
            <div>
              <p className="font-semibold">Email</p>
              <p className="text-sm text-slate-400">{email}</p>
            </div>
          </a>

          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            <a
              href="https://github.com/ravindarsahani3183"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl border border-white/10 p-4 transition hover:border-violet-400/40"
            >
              <FaGithub /> GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/ravindar-sahani-896206256/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl border border-white/10 p-4 transition hover:border-violet-400/40"
            >
              <FaLinkedin /> LinkedIn
            </a>

            <a
              href="https://wa.me/?text=Hi%20Ravindar%2C%20I%20would%20like%20to%20connect."
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl border border-white/10 p-4 transition hover:border-violet-400/40"
            >
              <FaWhatsapp /> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}