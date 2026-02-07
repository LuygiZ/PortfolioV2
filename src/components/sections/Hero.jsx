import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { personalInfo, credentials } from "../../data/portfolio";
import AnimatedSection from "../ui/AnimatedSection";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-surface-50 via-white to-primary-50 dark:from-surface-950 dark:via-surface-900 dark:to-surface-900"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary-200/30 blur-3xl dark:bg-primary-800/20" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-primary-300/20 blur-3xl dark:bg-primary-700/10" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 py-20 text-center sm:px-6">
        {/* Credibility Badges */}
        <AnimatedSection>
          <div className="mb-8 flex flex-wrap items-center justify-center gap-3">
            {credentials.map((cred) => (
              <a
                key={cred.id}
                href={cred.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 rounded-full border border-surface-200 bg-white/80 px-4 py-2 text-xs font-medium text-surface-600 backdrop-blur-sm transition-all hover:border-primary-300 hover:shadow-md dark:border-surface-700 dark:bg-surface-800/80 dark:text-surface-300 dark:hover:border-primary-600"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-100 text-[10px] font-bold text-primary-700 dark:bg-primary-900/50 dark:text-primary-300">
                  {cred.name.charAt(0)}
                </span>
                <span className="hidden sm:inline">{cred.name}</span>
                <span className="sm:hidden">{cred.name}</span>
                {cred.status === "Ongoing" && (
                  <span className="rounded-full bg-amber-100 px-1.5 py-0.5 text-[10px] text-amber-700 dark:bg-amber-900/30 dark:text-amber-300">
                    Ongoing
                  </span>
                )}
              </a>
            ))}
          </div>
        </AnimatedSection>

        {/* Headline */}
        <AnimatedSection delay={100}>
          <h1 className="text-4xl font-extrabold tracking-tight text-surface-900 dark:text-white sm:text-5xl md:text-6xl">
            Hi, I&apos;m{" "}
            <span className="text-gradient">{personalInfo.name}</span>
          </h1>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <p className="mt-4 text-xl font-medium text-surface-600 dark:text-surface-300 sm:text-2xl">
            {personalInfo.title}
          </p>
        </AnimatedSection>

        <AnimatedSection delay={300}>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-surface-500 dark:text-surface-400 sm:text-lg">
            {personalInfo.description}
          </p>
        </AnimatedSection>

        {/* CTA Buttons */}
        <AnimatedSection delay={400}>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-primary-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-primary-700 hover:shadow-lg"
            >
              View My Work
              <ArrowDown size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-surface-300 bg-white px-6 py-3 text-sm font-semibold text-surface-700 transition-all hover:border-surface-400 hover:shadow-md dark:border-surface-600 dark:bg-surface-800 dark:text-surface-200 dark:hover:border-surface-500"
            >
              Get In Touch
            </a>
          </div>
        </AnimatedSection>

        {/* Social links */}
        <AnimatedSection delay={500}>
          <div className="mt-8 flex items-center justify-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-2 text-surface-400 transition-colors hover:bg-surface-100 hover:text-surface-700 dark:hover:bg-surface-800 dark:hover:text-surface-200"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-2 text-surface-400 transition-colors hover:bg-surface-100 hover:text-surface-700 dark:hover:bg-surface-800 dark:hover:text-surface-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="rounded-full p-2 text-surface-400 transition-colors hover:bg-surface-100 hover:text-surface-700 dark:hover:bg-surface-800 dark:hover:text-surface-200"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </AnimatedSection>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown size={20} className="text-surface-400" />
      </div>
    </section>
  );
}
