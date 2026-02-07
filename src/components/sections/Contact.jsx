import { Mail, Github, Linkedin, MapPin, Send } from "lucide-react";
import { personalInfo } from "../../data/portfolio";
import SectionHeading from "../ui/SectionHeading";
import AnimatedSection from "../ui/AnimatedSection";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/" + personalInfo.github.split("/").pop(),
    href: personalInfo.github,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/" + personalInfo.linkedin.split("/").pop(),
    href: personalInfo.linkedin,
  },
  {
    icon: MapPin,
    label: "Location",
    value: personalInfo.location,
    href: null,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-white via-white to-surface-50 py-20 dark:from-surface-900 dark:via-surface-900 dark:to-surface-950 sm:py-28"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <SectionHeading
          title="Get In Touch"
          subtitle="I'm always open to discussing new opportunities"
        />

        <AnimatedSection>
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-8 text-base leading-relaxed text-surface-600 dark:text-surface-300 sm:text-lg">
              Whether you have a question, want to discuss a project, or just
              want to say hi — feel free to reach out. I&apos;m currently open to
              junior software developer positions and internship opportunities.
            </p>

            {/* Primary CTA */}
            <a
              href={`mailto:${personalInfo.email}`}
              className="mb-12 inline-flex items-center gap-2 rounded-lg bg-primary-600 px-8 py-3.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-primary-700 hover:shadow-lg"
            >
              <Send size={16} />
              Send me an email
            </a>
          </div>
        </AnimatedSection>

        {/* Contact methods grid */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {contactMethods.map((method, idx) => (
            <AnimatedSection key={method.label} delay={idx * 100}>
              {method.href ? (
                <a
                  href={method.href}
                  target={method.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={
                    method.href.startsWith("mailto")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  className="flex items-center gap-4 rounded-xl border border-surface-200 bg-surface-50 p-5 transition-all hover:border-primary-300 hover:shadow-sm dark:border-surface-700 dark:bg-surface-800 dark:hover:border-primary-600"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-100 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400">
                    <method.icon size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-surface-500 uppercase dark:text-surface-400">
                      {method.label}
                    </p>
                    <p className="text-sm font-medium text-surface-900 dark:text-white">
                      {method.value}
                    </p>
                  </div>
                </a>
              ) : (
                <div className="flex items-center gap-4 rounded-xl border border-surface-200 bg-surface-50 p-5 dark:border-surface-700 dark:bg-surface-800">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-100 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400">
                    <method.icon size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-surface-500 uppercase dark:text-surface-400">
                      {method.label}
                    </p>
                    <p className="text-sm font-medium text-surface-900 dark:text-white">
                      {method.value}
                    </p>
                  </div>
                </div>
              )}
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
