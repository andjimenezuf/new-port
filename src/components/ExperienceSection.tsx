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
      "Building an interpretability pipeline using Pytorch and Integrated Gradients to explain decision-making in Vision-Language-Action models.",
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
      "Shipped GenAI Studio, an LLM fine-tuning product in Advantech's Edge AI SDK, and showcased it at Japan IT Week.",
  },
];

export default function ExperienceSection() {
  return (
    <SectionShell
      id="experience"
      className="space-y-6"
      sectionNumber="03"
    >
      <SectionHeading
        title="Experience"
        subtitle="Research and internships focused on AI systems, product engineering."
      />
      <div className="grid gap-4">
        {experiences.map((experience) => (
          <SurfaceCard
            key={`${experience.company}-${experience.title}`}
            className="space-y-3 p-4 sm:space-y-4 sm:p-7"
          >
            <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
              <div className="space-y-2">
                <ShuffleText
                  as="h3"
                  text={experience.title}
                  className="text-xl font-semibold tracking-tight sm:text-2xl"
                />
                <p className="font-mono text-base sm:text-lg">{experience.company}</p>
              </div>
              <p className="font-mono text-sm uppercase tracking-[0.18em] text-muted-foreground lg:text-right">
                {experience.duration}
              </p>
            </div>
            <p className="text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
              {experience.description}
            </p>
          </SurfaceCard>
        ))}
      </div>
    </SectionShell>
  );
}
