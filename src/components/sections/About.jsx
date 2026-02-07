import { Code, GraduationCap, Briefcase, Target } from "lucide-react";
import { personalInfo } from "../../data/portfolio";
import SectionHeading from "../ui/SectionHeading";
import AnimatedSection from "../ui/AnimatedSection";

const highlights = [
  {
    icon: GraduationCap,
    title: "Academic Foundation",
    text: "Bachelor's in Computer Engineering from IPLeiria with a strong foundation in software development, databases, and system design.",
  },
  {
    icon: Target,
    title: "Continuous Growth",
    text: "Currently pursuing a Master's in Software Engineering at ISEP, deepening expertise in architecture and scalable systems.",
  },
  {
    icon: Briefcase,
    title: "Professional Experience",
    text: "Hands-on experience as a C# / .NET developer, building backend services, APIs, and data-driven applications.",
  },
  {
    icon: Code,
    title: "Full-Stack Mindset",
    text: "Expanding into modern frontend technologies while maintaining strong backend expertise for well-rounded development skills.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="bg-gradient-to-b from-white via-white to-surface-50 py-20 dark:from-surface-900 dark:via-surface-900 dark:to-surface-950 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          title="About Me"
          subtitle="Driven by curiosity, grounded in engineering"
        />

        <AnimatedSection>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-base leading-relaxed text-surface-600 dark:text-surface-300 sm:text-lg">
              I&apos;m a junior software developer based in {personalInfo.location} with
              a passion for building clean, maintainable software. My journey
              started with a Bachelor&apos;s degree in Computer Engineering, where I
              developed a strong foundation in programming and system design.
              Now, I&apos;m deepening my knowledge through a Master&apos;s in Software
              Engineering, while continuing to grow through professional
              certifications and personal projects.
            </p>
            <p className="mt-4 text-base leading-relaxed text-surface-600 dark:text-surface-300 sm:text-lg">
              I have already worked with backend development with C# and .NET, but I
              actively work on expanding my skills into web technologies and
              modern frontend frameworks. I believe in writing code that is not
              just functional, but readable, testable, and easy to maintain.
            </p>
          </div>
        </AnimatedSection>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, idx) => (
            <AnimatedSection key={item.title} delay={idx * 100}>
              <div className="rounded-xl border border-surface-200 bg-surface-50 p-6 transition-all hover:border-primary-300 hover:shadow-md dark:border-surface-700 dark:bg-surface-800 dark:hover:border-primary-600">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-100 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400">
                  <item.icon size={20} />
                </div>
                <h3 className="mb-2 text-sm font-semibold text-surface-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-surface-500 dark:text-surface-400">
                  {item.text}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
