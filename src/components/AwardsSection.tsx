import {
  SectionHeading,
  SectionShell,
  SurfaceCard,
} from "@/components/PortfolioPrimitives";
import { ShuffleText } from "@/components/ui/shuffle-text";

const awards = [
  {
    year: "2024",
    title: "Hispanic Scholarship Fund Scholar",
    organization: "Hispanic Scholarship Fund",
  },
  {
    year: "2023",
    title: "Palantir Future Scholar",
    organization: "Palantir Technologies",
  },
  {
    year: "2022",
    title: "The Machen Florida Opportunity Scholar",
    organization: "University of Florida",
  },
  {
    year: "2027 Cohort",
    title: "MLT Career Prep Scholar",
    organization: "Management Leadership for Tomorrow",
  },
];

export default function AwardsSection() {
  const gridClass = awards.length > 3 ? "md:grid-cols-2" : "";

  return (
    <SectionShell
      id="awards"
      className="space-y-5 sm:space-y-6"
      sectionNumber="05"
    >
      <SectionHeading
        title="Awards & Scholarships"
        subtitle=" "
      />
      <div className={`grid gap-4 ${gridClass}`}>
        {awards.map((award) => (
          <SurfaceCard key={`${award.title}-${award.year}`} className="space-y-2 p-4 sm:space-y-3 sm:p-7">
            <div className="space-y-1.5">
              <ShuffleText
                as="h3"
                text={award.title}
                className="text-lg font-semibold tracking-tight sm:text-2xl"
              />
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[0.65rem] uppercase tracking-[0.1em] text-muted-foreground sm:text-xs sm:tracking-[0.14em]">
                <span>{award.organization}</span>
                <span aria-hidden="true">·</span>
                <span>{award.year}</span>
              </div>
            </div>
          </SurfaceCard>
        ))}
      </div>
    </SectionShell>
  );
}
