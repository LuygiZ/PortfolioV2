import { Server, Database, Globe, Wrench } from "lucide-react";
import { skillCategories } from "../../data/portfolio";
import SectionHeading from "../ui/SectionHeading";
import AnimatedSection from "../ui/AnimatedSection";
import { useInView } from "react-intersection-observer";

const iconMap = {
  Server,
  Database,
  Globe,
  Wrench,
};

function SkillBar({ name, level }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div ref={ref} className="group">
      <div className="mb-1.5 flex items-center justify-between">
        <span className="text-sm font-medium text-surface-700 dark:text-surface-300">
          {name}
        </span>
        <span className="text-xs text-surface-400 dark:text-surface-500">
          {level}%
        </span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-surface-200 dark:bg-surface-700">
        <div
          className="skill-bar-fill h-full rounded-full bg-gradient-to-r from-primary-500 to-primary-600"
          style={{ width: inView ? `${level}%` : "0%" }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-surface-50 py-20 dark:bg-surface-950 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          title="Skills & Technologies"
          subtitle="Tools and technologies I work with"
        />

        <div className="grid gap-8 sm:grid-cols-2">
          {skillCategories.map((category, idx) => {
            const Icon = iconMap[category.icon];
            return (
              <AnimatedSection key={category.name} delay={idx * 100}>
                <div className="rounded-xl border border-surface-200 bg-white p-6 dark:border-surface-700 dark:bg-surface-900">
                  <div className="mb-6 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-100 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400">
                      {Icon && <Icon size={20} />}
                    </div>
                    <h3 className="text-lg font-semibold text-surface-900 dark:text-white">
                      {category.name}
                    </h3>
                  </div>
                  <div className="space-y-4">
                    {category.skills.map((skill) => (
                      <SkillBar
                        key={skill.name}
                        name={skill.name}
                        level={skill.level}
                      />
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
