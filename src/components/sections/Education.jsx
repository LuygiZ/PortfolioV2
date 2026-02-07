import { GraduationCap, Award, ExternalLink } from "lucide-react";
import { education, certifications } from "../../data/portfolio";
import SectionHeading from "../ui/SectionHeading";
import AnimatedSection from "../ui/AnimatedSection";
import Badge from "../ui/Badge";

export default function Education() {
  return (
    <section
      id="education"
      className="bg-surface-50 py-20 dark:bg-surface-950 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          title="Education & Certifications"
          subtitle="Academic background and professional development"
        />

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Education timeline */}
          <div>
            <div className="mb-6 flex items-center gap-2">
              <GraduationCap
                size={20}
                className="text-primary-600 dark:text-primary-400"
              />
              <h3 className="text-lg font-semibold text-surface-900 dark:text-white">
                Education
              </h3>
            </div>

            <div className="space-y-6">
              {education.map((edu, idx) => (
                <AnimatedSection key={edu.institution} delay={idx * 100}>
                  <div className="relative rounded-xl border border-surface-200 bg-white p-6 dark:border-surface-700 dark:bg-surface-900">
                    <div className="mb-2 flex items-start justify-between">
                      <div>
                        <h4 className="font-semibold text-surface-900 dark:text-white">
                          {edu.degree}
                        </h4>
                        <p className="text-sm text-surface-500 dark:text-surface-400">
                          {edu.institution}
                        </p>
                      </div>
                      <Badge
                        variant={
                          edu.status === "Ongoing" ? "warning" : "success"
                        }
                      >
                        {edu.status}
                      </Badge>
                    </div>

                    <p className="mb-1 text-xs text-surface-400 dark:text-surface-500">
                      {edu.period}
                    </p>

                    <p className="mt-3 text-sm leading-relaxed text-surface-600 dark:text-surface-300">
                      {edu.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {edu.highlights.map((h) => (
                        <span
                          key={h}
                          className="rounded-md bg-surface-100 px-2 py-1 text-xs text-surface-600 dark:bg-surface-800 dark:text-surface-400"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="mb-6 flex items-center gap-2">
              <Award
                size={20}
                className="text-primary-600 dark:text-primary-400"
              />
              <h3 className="text-lg font-semibold text-surface-900 dark:text-white">
                Certifications
              </h3>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, idx) => (
                <AnimatedSection key={cert.name} delay={idx * 100}>
                  <div className="flex items-center justify-between rounded-xl border border-surface-200 bg-white p-5 transition-all hover:border-primary-300 hover:shadow-sm dark:border-surface-700 dark:bg-surface-900 dark:hover:border-primary-600">
                    <div>
                      <h4 className="font-medium text-surface-900 dark:text-white">
                        {cert.name}
                      </h4>
                      <div className="mt-1 flex items-center gap-2 text-sm text-surface-500 dark:text-surface-400">
                        <span>{cert.issuer}</span>
                        <span className="text-surface-300 dark:text-surface-600">
                          &middot;
                        </span>
                        <span>{cert.date}</span>
                      </div>
                    </div>
                    {cert.credentialUrl && cert.credentialUrl !== "#" && (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-shrink-0 rounded-lg p-2 text-surface-400 transition-colors hover:bg-surface-100 hover:text-primary-600 dark:hover:bg-surface-800 dark:hover:text-primary-400"
                        aria-label={`View ${cert.name} credential`}
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
