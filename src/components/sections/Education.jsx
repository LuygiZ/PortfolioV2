import { useState } from "react";
import { GraduationCap, Award, X, Eye } from "lucide-react";
import { education, certifications } from "../../data/portfolio";
import SectionHeading from "../ui/SectionHeading";
import AnimatedSection from "../ui/AnimatedSection";
import Badge from "../ui/Badge";

function CertificateModal({ cert, onClose }) {
  if (!cert) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] max-w-3xl overflow-auto rounded-2xl bg-white p-2 shadow-2xl dark:bg-surface-800"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 rounded-full bg-white/90 p-1.5 text-surface-500 shadow-md transition-colors hover:text-surface-900 dark:bg-surface-700 dark:text-surface-300"
          aria-label="Close certificate preview"
        >
          <X size={18} />
        </button>
        <img
          src={cert.image}
          alt={`${cert.name} certificate`}
          className="w-full rounded-xl object-contain"
        />
        <div className="p-4">
          <h4 className="font-semibold text-surface-900 dark:text-white">
            {cert.name}
          </h4>
          <p className="mt-1 text-sm text-surface-500 dark:text-surface-400">
            {cert.issuer} &middot; {cert.date}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Education() {
  const [previewCert, setPreviewCert] = useState(null);

  return (
    <section
      id="education"
      className="bg-gradient-to-b from-surface-50 via-surface-50 to-white py-16 dark:from-surface-950 dark:via-surface-950 dark:to-surface-900 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          title="Education & Certifications"
          subtitle="Academic background and professional development"
        />

        {/* Education — compact cards side by side */}
        <AnimatedSection>
          <div className="mb-8 flex items-center gap-2">
            <GraduationCap
              size={18}
              className="text-primary-600 dark:text-primary-400"
            />
            <h3 className="text-base font-semibold text-surface-900 dark:text-white">
              Education
            </h3>
          </div>
        </AnimatedSection>

        <div className="mb-10 grid gap-4 sm:grid-cols-2">
          {education.map((edu, idx) => (
            <AnimatedSection key={edu.institution} delay={idx * 80}>
              <div className="rounded-xl border border-surface-200 bg-white p-5 dark:border-surface-700 dark:bg-surface-900">
                <div className="mb-2 flex items-start justify-between gap-2">
                  <h4 className="text-sm font-semibold text-surface-900 dark:text-white">
                    {edu.degree}
                  </h4>
                  <Badge
                    variant={edu.status === "Ongoing" ? "warning" : "success"}
                  >
                    {edu.status}
                  </Badge>
                </div>
                <p className="text-xs text-surface-500 dark:text-surface-400">
                  {edu.institution}
                </p>
                <p className="mt-0.5 text-xs text-surface-400 dark:text-surface-500">
                  {edu.period}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {edu.highlights.map((h) => (
                    <span
                      key={h}
                      className="rounded-md bg-surface-100 px-2 py-0.5 text-[11px] text-surface-600 dark:bg-surface-800 dark:text-surface-400"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Certifications — compact horizontal cards */}
        <AnimatedSection>
          <div className="mb-4 flex items-center gap-2">
            <Award
              size={18}
              className="text-primary-600 dark:text-primary-400"
            />
            <h3 className="text-base font-semibold text-surface-900 dark:text-white">
              Certifications
            </h3>
          </div>
        </AnimatedSection>

        <div className="grid gap-3 sm:grid-cols-3">
          {certifications.map((cert, idx) => (
            <AnimatedSection key={cert.name} delay={idx * 80}>
              <button
                onClick={() => setPreviewCert(cert)}
                className="group w-full cursor-pointer text-left"
              >
                <div className="flex items-center gap-3 rounded-xl border border-surface-200 bg-white p-4 transition-all hover:border-primary-300 hover:shadow-sm dark:border-surface-700 dark:bg-surface-900 dark:hover:border-primary-600">
                  {/* Small thumbnail */}
                  <div className="h-12 w-16 flex-shrink-0 overflow-hidden rounded-lg bg-surface-100 dark:bg-surface-800">
                    <img
                      src={cert.image}
                      alt={`${cert.name} certificate`}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  {/* Info */}
                  <div className="min-w-0 flex-1">
                    <h4 className="truncate text-sm font-medium text-surface-900 dark:text-white">
                      {cert.name}
                    </h4>
                    <p className="text-xs text-surface-500 dark:text-surface-400">
                      {cert.issuer} &middot; {cert.date}
                    </p>
                  </div>
                  {/* View icon */}
                  <Eye
                    size={14}
                    className="flex-shrink-0 text-surface-300 transition-colors group-hover:text-primary-500 dark:text-surface-600"
                  />
                </div>
              </button>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* Certificate modal */}
      {previewCert && (
        <CertificateModal
          cert={previewCert}
          onClose={() => setPreviewCert(null)}
        />
      )}
    </section>
  );
}
