import { ArrowDown, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { personalInfo, credentials } from "../../data/portfolio";
import AnimatedSection from "../ui/AnimatedSection";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-surface-50 via-primary-50/30 to-white dark:from-surface-950 dark:via-surface-900 dark:to-surface-900"
    >
      {/* Dot grid background layer */}
      <div className="hero-dot-grid pointer-events-none absolute inset-0 opacity-40 dark:opacity-20" />

      {/* Animated gradient orbs — desktop only for performance */}
      <div className="pointer-events-none absolute inset-0 hidden overflow-hidden md:block">
        <div className="hero-orb-1 absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary-300/20 blur-3xl dark:bg-primary-700/15 md:h-[28rem] md:w-[28rem]" />
        <div className="hero-orb-2 absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-primary-200/25 blur-3xl dark:bg-primary-800/15 md:h-96 md:w-96" />
        <div className="hero-orb-3 absolute top-1/3 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-primary-100/30 blur-3xl dark:bg-primary-600/10" />
      </div>

      {/* Top fade overlay for depth */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-surface-50/80 to-transparent dark:from-surface-950/80" />

      {/* Two-column content grid */}
      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-24 sm:px-6 sm:py-28 lg:grid-cols-2 lg:gap-16 xl:gap-20">
        {/* ── LEFT COLUMN: Text content ── */}
        <div className="order-2 text-center lg:order-1 lg:text-left">
          {/* Availability status */}
          <AnimatedSection>
            <div className="mb-6 flex justify-center lg:justify-start">
              <div className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50/80 px-4 py-1.5 text-xs font-medium text-green-700 dark:border-green-800/50 dark:bg-green-950/50 dark:text-green-400">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                </span>
                Open to opportunities
              </div>
            </div>
          </AnimatedSection>

          {/* Headline */}
          <AnimatedSection delay={100}>
            <h1 className="text-4xl font-extrabold tracking-tight text-surface-900 dark:text-white sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              Hi, I&apos;m{" "}
              <span className="text-gradient">{personalInfo.name}</span>
            </h1>
          </AnimatedSection>

          {/* Title */}
          <AnimatedSection delay={200}>
            <p className="mt-4 text-xl font-medium text-surface-600 dark:text-surface-300 sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl">
              {personalInfo.title}
            </p>
          </AnimatedSection>

          {/* Description */}
          <AnimatedSection delay={300}>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-surface-500 dark:text-surface-400 sm:text-lg lg:mx-0 lg:max-w-xl">
              {personalInfo.description}
            </p>
          </AnimatedSection>

          {/* CTA Buttons */}
          <AnimatedSection delay={400}>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4 lg:justify-start">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-xl bg-primary-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary-500/25 transition-all hover:bg-primary-700 hover:shadow-xl hover:shadow-primary-500/30 dark:shadow-primary-700/20"
              >
                <Sparkles size={16} className="transition-transform group-hover:rotate-12" />
                View My Work
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl border border-surface-300 bg-white/80 px-7 py-3.5 text-sm font-semibold text-surface-700 transition-all hover:border-surface-400 hover:bg-white hover:shadow-lg dark:border-surface-600 dark:bg-surface-800/80 dark:text-surface-200 dark:hover:border-surface-500 dark:hover:bg-surface-800"
              >
                Get In Touch
              </a>
            </div>
          </AnimatedSection>

          {/* Social links */}
          <AnimatedSection delay={500}>
            <div className="mt-8 flex items-center justify-center gap-3 lg:justify-start">
              {[
                { href: personalInfo.github, icon: Github, label: "GitHub" },
                { href: personalInfo.linkedin, icon: Linkedin, label: "LinkedIn" },
                { href: `mailto:${personalInfo.email}`, icon: Mail, label: "Email" },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={label === "Email" ? undefined : "_blank"}
                  rel={label === "Email" ? undefined : "noopener noreferrer"}
                  className="rounded-full border border-transparent p-2.5 text-surface-400 transition-all hover:border-surface-200 hover:bg-white/60 hover:text-surface-700 dark:hover:border-surface-700 dark:hover:bg-surface-800/60 dark:hover:text-surface-200"
                  aria-label={label}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </AnimatedSection>
        </div>

        {/* ── RIGHT COLUMN: Visual block ── */}
        <div className="order-1 flex flex-col items-center lg:order-2">
          {/* Credibility Badges — clearly above profile photo */}
          <AnimatedSection delay={50}>
            <div className="mb-6 flex flex-wrap items-center justify-center gap-3 lg:mb-8 lg:gap-4">
              {credentials.map((cred) => (
                <a
                  key={cred.id}
                  href={cred.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`${cred.fullName} – ${cred.type}`}
                  className="group flex items-center gap-2 rounded-full border border-surface-200/80 bg-white/70 px-3.5 py-2 text-xs font-medium text-surface-500 transition-all hover:border-primary-300 hover:bg-white/90 hover:shadow-md dark:border-surface-700/60 dark:bg-surface-800/50 dark:text-surface-400 dark:hover:border-primary-600 dark:hover:bg-surface-800/80 lg:px-5 lg:py-2.5"
                >
                  <img
                    src={cred.logo}
                    alt={`${cred.fullName} logo`}
                    className="h-6 w-auto object-contain grayscale transition-all group-hover:grayscale-0 md:h-8 lg:h-10 xl:h-12"
                    width={48}
                    height={48}
                    decoding="async"
                  />
                  {cred.status === "Ongoing" && (
                    <span className="rounded-full bg-amber-100/80 px-1.5 py-0.5 text-[10px] text-amber-700 dark:bg-amber-900/30 dark:text-amber-300 md:text-xs">
                      Ongoing
                    </span>
                  )}
                </a>
              ))}
            </div>
          </AnimatedSection>

          {/* Profile Photo with animated glow ring */}
          <AnimatedSection delay={150}>
            <div className="relative flex justify-center">
              {/* Glow ring behind photo */}
              <div className="hero-photo-ring absolute h-40 w-40 rounded-full bg-gradient-to-br from-primary-400/40 to-primary-600/40 blur-md dark:from-primary-500/25 dark:to-primary-700/25 sm:h-44 sm:w-44 md:h-52 md:w-52 lg:h-76 lg:w-76 xl:h-[22rem] xl:w-[22rem]" />
              {/* Photo */}
              <div className="relative h-36 w-36 overflow-hidden rounded-full border-4 border-white/90 shadow-2xl ring-2 ring-primary-300/50 dark:border-surface-800/90 dark:ring-primary-600/40 sm:h-40 sm:w-40 md:h-48 md:w-48 lg:h-72 lg:w-72 xl:h-80 xl:w-80">
                <img
                  src={personalInfo.profilePhoto}
                  alt={`${personalInfo.name} profile photo`}
                  className="h-full w-full object-cover"
                  width={320}
                  height={320}
                  fetchPriority="high"
                  decoding="async"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-1">
          <span className="text-[10px] font-medium tracking-widest text-surface-400 uppercase dark:text-surface-500">
            Scroll
          </span>
          <ArrowDown size={16} className="animate-bounce text-surface-400" />
        </div>
      </div>
    </section>
  );
}
