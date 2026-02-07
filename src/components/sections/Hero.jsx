import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { personalInfo, credentials } from "../../data/portfolio";
import AnimatedSection from "../ui/AnimatedSection";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-surface-50 via-primary-50/30 to-white dark:from-surface-950 dark:via-surface-900 dark:to-surface-900"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary-200/30 blur-3xl dark:bg-primary-800/20" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-primary-300/20 blur-3xl dark:bg-primary-700/10" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 py-20 text-center sm:px-6">
        {/* Credibility Badges with real logos — scale up on larger screens */}
        <AnimatedSection>
          <div className="mb-8 flex flex-wrap items-center justify-center gap-4 md:gap-5 lg:gap-6">
            {credentials.map((cred) => (
              <a
                key={cred.id}
                href={cred.url}
                target="_blank"
                rel="noopener noreferrer"
                title={`${cred.fullName} – ${cred.type}`}
                className="group flex items-center gap-2.5 rounded-full border border-surface-200 bg-white/80 px-4 py-2 text-xs font-medium text-surface-600 backdrop-blur-sm transition-all hover:border-primary-300 hover:shadow-md dark:border-surface-700 dark:bg-surface-800/80 dark:text-surface-300 dark:hover:border-primary-600 md:px-5 md:py-2.5 md:text-sm lg:px-6 lg:py-3"
              >
                <img
                  src={cred.logo}
                  alt={`${cred.fullName} logo`}
                  className="h-6 w-auto object-contain md:h-8 lg:h-10"
                  loading="lazy"
                />
                {cred.status === "Ongoing" && (
                  <span className="rounded-full bg-amber-100 px-1.5 py-0.5 text-[10px] text-amber-700 dark:bg-amber-900/30 dark:text-amber-300 md:text-xs">
                    Ongoing
                  </span>
                )}
              </a>
            ))}
          </div>
        </AnimatedSection>

        {/* Profile Photo — larger on md/lg/xl screens */}
        <AnimatedSection delay={50}>
          <div className="mb-6 flex justify-center">
            <div className="h-32 w-32 overflow-hidden rounded-full border-4 border-white shadow-lg ring-2 ring-primary-200 dark:border-surface-800 dark:ring-primary-700 sm:h-36 sm:w-36 md:h-44 md:w-44 lg:h-52 lg:w-52 xl:h-56 xl:w-56">
              <img
                src={personalInfo.profilePhoto}
                alt={`${personalInfo.name} profile photo`}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </AnimatedSection>

        {/* Headline */}
        <AnimatedSection delay={100}>
          <h1 className="text-4xl font-extrabold tracking-tight text-surface-900 dark:text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Hi, I&apos;m{" "}
            <span className="text-gradient">{personalInfo.name}</span>
          </h1>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <p className="mt-4 text-xl font-medium text-surface-600 dark:text-surface-300 sm:text-2xl md:text-3xl">
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
