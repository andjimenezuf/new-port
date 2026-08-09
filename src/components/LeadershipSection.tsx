import {
  SectionHeading,
  SectionShell,
  SurfaceCard,
} from "@/components/PortfolioPrimitives";
import { ShuffleText } from "@/components/ui/shuffle-text";

const leadership = {
  title: "Peer Mentor",
  organization: "Miami Dade College Cloud Computing Center",
  duration: "Dec 2023 - Dec 2023",
  location: "",
  description:
    "Mentored 20 high school students through an AWS certification boot camp and helped the cohort reach an 80% pass rate.",
};

const involvement = [
  {
    title: "Machine Learning Team Member",
    organization: "Dream Team Engineering",
    duration: "Jan 2026 - May 2026",
    location: "",
    description:
      "Developing a disease-forecasting system applying SEIRD modeling and machine learning for two-week outbreak predictions in Python.",
  },
  {
    title: "MentorSHPE Program Director",
    organization: "Society of Hispanic Professional Engineers",
    duration: "Aug 2025 - Dec 2025",
    location: "",
    description:
      "Restructured the mentorship program, increasing participation by 65% from 17 to 28 first-year members while leading biweekly check-ins with 14 mentors.",
  },
  {
    title: "Undergraduate Researcher (Robotics & Multimodal ML)",
    organization: "University of Florida",
    duration: "Jan 2026 - May 2026",
    location: "",
    description:
      "Building an interpretability pipeline using Pytorch and Integrated Gradients to explain decision-making in Vision-Language-Action models.",
  },
  leadership,
];

export default function LeadershipSection() {
  return (
    <SectionShell
      id="leadership"
      className="space-y-5"
      sectionNumber="04"
    >
      <SectionHeading
        title="Leadership & Research"
        subtitle="Leadership, research, mentorship, and student involvement across technical communities."
      />
      <div className="grid gap-4">
        {involvement.map((item) => (
          <SurfaceCard
            key={`${item.title}-${item.duration}`}
            className="space-y-4 p-6 sm:p-7"
          >
            <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
              <div className="space-y-2">
                <ShuffleText
                  as="h3"
                  text={item.title}
                  className="text-2xl font-semibold tracking-tight"
                />
                <p className="font-mono text-lg">{item.organization}</p>
              </div>
              <div className="space-y-1 lg:text-right">
                <p className="font-mono text-sm uppercase tracking-[0.18em] text-muted-foreground">
                  {item.duration}
                </p>
                {item.location && (
                  <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground/75">
                    {item.location}
                  </p>
                )}
              </div>
            </div>
            <p className="text-base leading-7 text-muted-foreground">
              {item.description}
            </p>
          </SurfaceCard>
        ))}
      </div>
    </SectionShell>
  );
}
