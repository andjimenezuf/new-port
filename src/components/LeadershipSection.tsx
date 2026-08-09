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
    title: "Undergraduate Researcher (Robotics & Multimodal ML)",
    organization: "University of Florida",
    duration: "Jan 2026 - May 2026",
    location: "",
    description:
      "Building an interpretability pipeline using Pytorch and Integrated Gradients to explain decision-making in Vision-Language-Action models.",
  },
  {
    title: "Machine Learning Team Member",
    organization: "Dream Team Engineering UF",
    duration: "Jan 2026 - May 2026",
    location: "",
    description:
      "Developing a disease-forecasting system applying SEIRD modeling and machine learning for two-week outbreak predictions in Python.",
  },
  {
    title: "MentorSHPE Program Director",
    organization: "Society of Hispanic Professional Engineers UF",
    duration: "Aug 2025 - Dec 2025",
    location: "",
    description:
      "Restructured the mentorship program, increasing participation by 65% from 17 to 28 first-year members while leading biweekly check-ins with 14 mentors.",
  },

  leadership,
];

export default function LeadershipSection() {
  return (
    <SectionShell
      id="leadership"
      className="space-y-5 sm:space-y-6"
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
            className="space-y-3 p-4 sm:space-y-4 sm:p-7"
          >
            <div className="space-y-1.5">
              <ShuffleText
                as="h3"
                text={item.title}
                className="text-lg font-semibold tracking-tight sm:text-2xl"
              />
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[0.65rem] uppercase tracking-[0.1em] text-muted-foreground sm:text-xs sm:tracking-[0.14em]">
                <span>{item.organization}</span>
                <span aria-hidden="true">·</span>
                <span>{item.duration}</span>
                {item.location && (
                  <>
                    <span aria-hidden="true">·</span>
                    <span>{item.location}</span>
                  </>
                )}
              </div>
            </div>
            <p className="text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
              {item.description}
            </p>
          </SurfaceCard>
        ))}
      </div>
    </SectionShell>
  );
}
