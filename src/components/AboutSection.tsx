import {
  Eyebrow,
  SectionHeading,
  SectionShell,
  SurfaceCard,
  Tag,
} from "@/components/PortfolioPrimitives";

const aboutGroups = [
  {
    title: "What I'm Studying",
    type: "list",
    items: [
      "B.S. in Computer Science at the University of Florida",
      "Minor in Statistics"
    ],
  },
  {
    title: "What I'm Into",
    type: "paragraph",
    content:
      "I'm interested in software engineering, cloud systems and scalable infrastructure, and AI/ML. I tend to learn best by building real things, testing them under pressure, and refining them through iteration.",
  },
  {
    title: "Outside the Classroom",
    type: "list",
    items: [
      "Cycling",
      "Music",
      "Sailing",
      "Bee Keeping",
      "Building taste through side projects",
      "Staying curious"
    ],
  },
] as const;

const skills = {
  "Programming Languages": [
    "Python",
    "JavaScript",
    "TypeScript",
    "C++",
    "Java",
    "Swift",
    "HTML",
    "CSS",
    "SQL",
    "R",
  ],
  "Frameworks & Tools": [
    "React",
    "Next.js",
    "FastAPI",
    "Node.js",
    "Postman",
    "LangGraph",
    "PyTorch",
    "TensorFlow",
    "TensorRT",
    "Ollama",
    "LLMs",
    "AWS",
    "Docker",
  ],
};

const certifications = ["AWS Cloud Practitioner"];

export default function AboutSection() {
  return (
    <SectionShell id="about" className="space-y-6">
      <SectionHeading
        title="About Me"
        subtitle=" "
      />
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <SurfaceCard className="space-y-6">
          <div className="grid gap-4">
            {aboutGroups.map((group) => (
              <div
                key={group.title}
                className="rounded-3xl border border-border/60 bg-background/30 p-5 backdrop-blur-sm"
              >
                <h3 className="text-xl font-semibold tracking-tight">
                  {group.title}
                </h3>
                {group.type === "paragraph" ? (
                  <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
                    {group.content}
                  </p>
                ) : (
                  <ul className="mt-4 space-y-3 text-sm leading-6 text-muted-foreground sm:text-base">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-foreground/70" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </SurfaceCard>
        <SurfaceCard className="space-y-5">
          <Eyebrow>Technical Skills</Eyebrow>
          <div className="grid gap-4">
            {Object.entries(skills).map(([group, items]) => (
              <div
                key={group}
                className="rounded-3xl border border-border/60 bg-background/30 p-5 backdrop-blur-sm"
              >
                <h3 className="text-lg font-semibold tracking-tight">{group}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {items.map((item) => (
                    <Tag key={item}>{item}</Tag>
                  ))}
                </div>
              </div>
            ))}
            <div className="rounded-3xl border border-border/60 bg-background/30 p-5 backdrop-blur-sm">
              <h3 className="text-lg font-semibold tracking-tight">Certifications</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {certifications.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </div>
            </div>
          </div>
        </SurfaceCard>
      </div>
    </SectionShell>
  );
}
