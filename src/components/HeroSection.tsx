import HeroButtons from "@/components/HeroButtons";
import {
  Eyebrow,
  HeroTitle,
  SectionShell,
  SurfaceCard,
} from "@/components/PortfolioPrimitives";

const profileFacts = [
  {
    label: "Current focus",
    value: "Software engineering, ML systems, cloud tooling",
  },
  {
    label: "Based in",
    value: "Florida, United States",
  },
  {
    label: "Building with",
    value: "Next.js, Python, AI APIs",
  },
];

export default function HeroSection() {
  return (
    <SectionShell id="hero">
      <SurfaceCard className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(161,255,198,0.16),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.18),transparent_25%)]" />
        <div className="relative grid gap-8 lg:grid-cols-[1.3fr_0.85fr] lg:items-center">
          <div className="space-y-6">
            <Eyebrow>Miami to Gainesville</Eyebrow>
            <HeroTitle>Hello, I&apos;m Andres.</HeroTitle>
            <p className="max-w-2xl text-base leading-7 text-muted-foreground">
              I build software across AI, data, and product engineering, with a
              portfolio focused on ambitious student work, internships, and
              fast-moving technical experiments.
            </p>
            <HeroButtons />
          </div>
          <div className="flex h-full flex-col justify-center">
            <div className="panel-surface-strong rounded-[1.75rem] p-4 sm:p-5">
              <div className="panel-surface-soft rounded-[1.5rem] border-dashed p-4">
                <div className="flex aspect-[4/5] items-center justify-center rounded-[1.25rem] bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent)] px-6 text-center text-sm text-muted-foreground">
                  Photo placeholder
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative mt-6 grid gap-3 md:grid-cols-3">
          {profileFacts.map((fact) => (
            <div
              key={fact.label}
              className="panel-surface-soft rounded-2xl px-4 py-4"
            >
              <p className="text-xs uppercase tracking-[0.26em] text-muted-foreground">
                {fact.label}
              </p>
              <p className="mt-2 text-sm leading-6">{fact.value}</p>
            </div>
          ))}
        </div>
      </SurfaceCard>
    </SectionShell>
  );
}
