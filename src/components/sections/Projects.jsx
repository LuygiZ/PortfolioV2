import { useState } from "react";
import {
  ExternalLink,
  Github,
  ChevronDown,
  ChevronUp,
  Star,
  Clock,
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
        {/* Project image */}
        <div className="relative aspect-video overflow-hidden bg-surface-100 dark:bg-surface-800">
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
            decoding="async"
          />
          {/* Overlay badges */}
          <div className="absolute top-3 left-3 flex gap-2">
            {project.featured && (
              <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/90 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                <Star size={12} className="fill-white" />
                Featured
              </span>
            )}
            {project.wip && (
              <span className="inline-flex items-center gap-1 rounded-full bg-blue-500/90 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                <Clock size={12} />
                In Progress
              </span>
            )}
          </div>
          {project.grade && (
            <div className="absolute top-3 right-3 rounded-full bg-green-600/90 px-3 py-1 text-xs font-bold text-white backdrop-blur-sm">
              {project.grade}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="mb-3 flex items-start justify-between">
            <div>
              <h3 className="text-lg font-bold text-surface-900 dark:text-white">
                {project.title}
              </h3>
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

        {/* Expanded case study */}
        {expanded && (
          <div className="border-t border-surface-200 bg-surface-50 p-6 dark:border-surface-700 dark:bg-surface-800/50">
            <div className="grid gap-6 sm:grid-cols-2">
              {/* Context / Problem */}
              <div>
                <h4 className="mb-2 text-xs font-semibold tracking-wider text-surface-500 uppercase dark:text-surface-400">
                  Context & Problem
                </h4>
                <p className="text-sm leading-relaxed text-surface-600 dark:text-surface-300">
                  {project.context}
                </p>
              </div>

              {/* Architecture / Solution */}
              <div>
                <h4 className="mb-2 text-xs font-semibold tracking-wider text-surface-500 uppercase dark:text-surface-400">
                  Architecture & Solution
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

              {/* Results & Learnings */}
              <div>
                <h4 className="mb-2 text-xs font-semibold tracking-wider text-surface-500 uppercase dark:text-surface-400">
                  Results & Learnings
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
      className="bg-gradient-to-b from-white via-white to-surface-50 py-20 dark:from-surface-900 dark:via-surface-900 dark:to-surface-950 sm:py-28"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <SectionHeading
          title="Projects"
          subtitle="Selected work and case studies"
        />

        <div className="space-y-8">
          {projects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
