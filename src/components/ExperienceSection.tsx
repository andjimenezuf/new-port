import {
  SectionHeading,
  SectionShell,
  SurfaceCard,
} from "@/components/PortfolioPrimitives";
import { ShuffleText } from "@/components/ui/shuffle-text";

const experiences = [
  {
    title: "Software Engineer Intern",
    company: "JPMorganChase",
    duration: "Jun 2026 - Present",
    location: "NYC",
    description:
      "Modernizing market data infrastructure powering trading desks, rebuilding the streaming data feed to reliably process 2B+ events per day.",
  },
  {
    title: "Software Engineer Intern",
    company: "FIFA",
    duration: "Jun 2026 - Jul 2026",
    location: "Miami",
    description:
      "Built data infrastructure to process live player- and football-tracking data for World Cup post-match analytics at Miami Stadium.",
  },
  {
    title: "Software Engineer Intern",
    company: "JPMorganChase",
    duration: "Jun 2025 - Aug 2025",
    location: "NYC",
    description:
      "Integrated AI agents into JPMC's investment platform to streamline risk analysis, cutting review time by roughly 40%.",
  },
  {
    title: "AI Software Engineer Intern",
    company: "Advantech",
    duration: "Feb 2025 - May 2025",
    location: "Tokyo",
    description:
      "Shipped GenAI Studio, an LLM fine-tuning product in Advantech's Edge AI SDK, and showcased it at Japan IT Week.",
  },
];

export default function ExperienceSection() {
  return (
    <SectionShell
      id="experience"
      className="space-y-5 sm:space-y-6"
      sectionNumber="03"
    >
      <SectionHeading
        title="Experience"
        subtitle="Internships focused on AI systems and product engineering."
      />
      <div className="grid gap-4">
        {experiences.map((experience) => (
          <SurfaceCard
            key={`${experience.company}-${experience.title}-${experience.duration}`}
            className="space-y-3 p-4 sm:space-y-4 sm:p-7"
          >
            <div className="space-y-1.5">
              <ShuffleText
                as="h3"
                text={experience.title}
                className="text-lg font-semibold tracking-tight sm:text-2xl"
              />
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[0.65rem] uppercase tracking-[0.1em] text-muted-foreground sm:text-xs sm:tracking-[0.14em]">
                <span>{experience.company}</span>
                <span aria-hidden="true">·</span>
                <span>{experience.duration}</span>
                <span aria-hidden="true">·</span>
                <span>{experience.location}</span>
              </div>
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
