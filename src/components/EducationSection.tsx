import {
  Eyebrow,
  SectionHeading,
  SectionShell,
  SurfaceCard,
  Tag,
} from "@/components/PortfolioPrimitives";

const education = {
  school: "University of Florida",
  location: "Gainesville, FL",
  degree: "Bachelor of Science in Computer Science, Minor in Statistics",
  graduation: "Expected Dec 2026",
  coursework: [
    "Data Structures & Algorithms",
    "Object-Oriented Programming",
    "Intro to Machine Learning",
    "Intro to Software Engineering",
    "Operating Systems",
    "Computer Networking",
    "Natural Language Processing",
  ],
  affiliations: [
    "AISES - Advancing Indigenous People in STEM",
    "ColorStack UF - Diversity in Computing",
    "SHPE - Society of Hispanic Professional Engineers",
    "SEO Career - Career Prep Fellow",
  ],
};

export default function EducationSection() {
  return (
    <SectionShell id="education" className="space-y-6">
      <SectionHeading
        title="Education"
        subtitle="University of Florida academic background, coursework, and affiliations."
      />
      <SurfaceCard className="space-y-6">
        <div className="space-y-4">
          <Eyebrow>{education.school}</Eyebrow>
          <div>
            <h3 className="text-2xl font-semibold tracking-tight">
              {education.degree}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              {education.location} • {education.graduation}
            </p>
          </div>
        </div>
        <div className="space-y-4 border-t border-border/60 pt-5">
          <div className="space-y-2">
            <p className="font-mono text-sm font-medium uppercase tracking-[0.18em] text-[color:var(--panel-muted)]">
              Relevant Coursework
            </p>
            <div className="flex flex-wrap gap-2">
              {education.coursework.map((item) => (
                <Tag key={item}>{item}</Tag>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <p className="font-mono text-sm font-medium uppercase tracking-[0.18em] text-[color:var(--panel-muted)]">
              Clubs & Affiliations
            </p>
            <div className="flex flex-wrap gap-2">
              {education.affiliations.map((item) => (
                <Tag key={item}>{item}</Tag>
              ))}
            </div>
          </div>
        </div>
      </SurfaceCard>
    </SectionShell>
  );
}
