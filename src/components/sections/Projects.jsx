import { useState } from "react";
import {
  ExternalLink,
  Github,
  ChevronDown,
  ChevronUp,
  Star,
} from "lucide-react";
import { projects } from "../../data/portfolio";
import SectionHeading from "../ui/SectionHeading";
import AnimatedSection from "../ui/AnimatedSection";
import Badge from "../ui/Badge";

function ProjectCard({ project, index }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <AnimatedSection delay={index * 150}>
      <article className="group overflow-hidden rounded-xl border border-surface-200 bg-white transition-all hover:shadow-lg dark:border-surface-700 dark:bg-surface-900">
        {/* Header */}
        <div className="p-6">
          <div className="mb-3 flex items-start justify-between">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold text-surface-900 dark:text-white">
                  {project.title}
                </h3>
                {project.featured && (
                  <Star
                    size={14}
                    className="fill-amber-400 text-amber-400"
                  />
                )}
              </div>
              <p className="mt-1 text-sm text-surface-500 dark:text-surface-400">
                {project.subtitle}
              </p>
            </div>
            <div className="flex gap-2">
              {project.github && project.github !== "#" && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg p-2 text-surface-400 transition-colors hover:bg-surface-100 hover:text-surface-700 dark:hover:bg-surface-800 dark:hover:text-surface-200"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <Github size={18} />
                </a>
              )}
              {project.live && project.live !== "#" && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg p-2 text-surface-400 transition-colors hover:bg-surface-100 hover:text-surface-700 dark:hover:bg-surface-800 dark:hover:text-surface-200"
                  aria-label={`View ${project.title} live`}
                >
                  <ExternalLink size={18} />
                </a>
              )}
            </div>
          </div>

          <p className="text-sm leading-relaxed text-surface-600 dark:text-surface-300">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="mt-4 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>

          {/* Expand / Collapse */}
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary-600 transition-colors hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
          >
            {expanded ? "Show less" : "Read case study"}
            {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </button>
        </div>

        {/* Expanded details */}
        {expanded && (
          <div className="border-t border-surface-200 bg-surface-50 p-6 dark:border-surface-700 dark:bg-surface-800/50">
            <div className="grid gap-6 sm:grid-cols-2">
              {/* Context */}
              <div>
                <h4 className="mb-2 text-xs font-semibold tracking-wider text-surface-500 uppercase dark:text-surface-400">
                  Context
                </h4>
                <p className="text-sm leading-relaxed text-surface-600 dark:text-surface-300">
                  {project.context}
                </p>
              </div>

              {/* Architecture */}
              <div>
                <h4 className="mb-2 text-xs font-semibold tracking-wider text-surface-500 uppercase dark:text-surface-400">
                  Architecture
                </h4>
                <p className="text-sm leading-relaxed text-surface-600 dark:text-surface-300">
                  {project.architecture}
                </p>
              </div>

              {/* Challenges */}
              <div>
                <h4 className="mb-2 text-xs font-semibold tracking-wider text-surface-500 uppercase dark:text-surface-400">
                  Challenges
                </h4>
                <ul className="space-y-1">
                  {project.challenges.map((c, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-surface-600 dark:text-surface-300"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-500" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Results */}
              <div>
                <h4 className="mb-2 text-xs font-semibold tracking-wider text-surface-500 uppercase dark:text-surface-400">
                  Results
                </h4>
                <ul className="space-y-1">
                  {project.results.map((r, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-surface-600 dark:text-surface-300"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-green-500" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </article>
    </AnimatedSection>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-white py-20 dark:bg-surface-900 sm:py-28"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <SectionHeading
          title="Projects"
          subtitle="Selected work and case studies"
        />

        <div className="space-y-6">
          {projects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
