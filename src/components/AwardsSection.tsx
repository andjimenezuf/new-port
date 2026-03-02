import {
  Eyebrow,
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
    <SectionShell id="awards" className="space-y-6">
      <SectionHeading
        title="Awards & Scholarships"
        subtitle="Scholarships and scholar programs recognizing academic performance, leadership, and career potential."
      />
      <div className={`grid gap-4 ${gridClass}`}>
        {awards.map((award) => (
          <SurfaceCard key={`${award.title}-${award.year}`} className="space-y-3 p-6 sm:p-7">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
              <div className="space-y-2">
                <ShuffleText
                  as="h3"
                  text={award.title}
                  className="text-2xl font-semibold tracking-tight"
                />
                <p className="font-mono text-lg text-muted-foreground">{award.organization}</p>
              </div>
              <Eyebrow>{award.year}</Eyebrow>
            </div>
          </SurfaceCard>
        ))}
      </div>
    </SectionShell>
  );
}
