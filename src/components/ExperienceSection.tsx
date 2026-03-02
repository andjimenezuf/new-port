import {
  SectionHeading,
  SectionShell,
  SurfaceCard,
} from "@/components/PortfolioPrimitives";
import { ShuffleText } from "@/components/ui/shuffle-text";

const experiences = [
  {
    title: "Undergraduate Researcher (Robotics & Multimodal ML)",
    company: "University of Florida",
    duration: "Jan 2026 - Present",
    description:
      "Building an interpretability pipeline for RDT diffusion VLA using per-step Integrated Gradients to explain robot decisions.",
  },
  {
    title: "Software Engineer Intern",
    company: "JPMorgan Chase & Co.",
    duration: "June 2025 - August 2025",
    description:
      "Integrated AI agents into JPMC's investment platform to streamline risk analysis, cutting review time by roughly 40%.",
  },
  {
    title: "AI Software Engineer Intern",
    company: "Advantech",
    duration: "February 2025 - May 2025",
    description:
      "Built a real-time computer vision system using NVIDIA tooling and architected a multilingual AI assistant pipeline later showcased at Japan IT Week.",
  },
];

export default function ExperienceSection() {
  return (
    <SectionShell id="experience" className="space-y-6">
      <SectionHeading
        title="Experience"
        subtitle="Research and internships focused on AI systems, product engineering, and measurable delivery."
      />
      <div className="grid gap-4">
        {experiences.map((experience) => (
          <SurfaceCard
            key={`${experience.company}-${experience.title}`}
            className="space-y-4 p-6 sm:p-7"
          >
            <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
              <div className="space-y-2">
                <ShuffleText
                  as="h3"
                  text={experience.title}
                  className="text-2xl font-semibold tracking-tight"
                />
                <p className="font-mono text-lg">{experience.company}</p>
              </div>
              <p className="font-mono text-sm uppercase tracking-[0.18em] text-muted-foreground lg:text-right">
                {experience.duration}
              </p>
            </div>
            <p className="text-base leading-7 text-muted-foreground">
              {experience.description}
            </p>
          </SurfaceCard>
        ))}
      </div>
    </SectionShell>
  );
}
