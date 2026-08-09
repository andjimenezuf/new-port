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
    <SectionShell
      id="about"
      className="space-y-4 sm:space-y-6"
      sectionNumber="01"
    >
      <SectionHeading
        title="About Me"
      />
      <div className="grid gap-3 sm:gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <SurfaceCard className="space-y-3 p-3 sm:space-y-6 sm:p-8">
          <div className="grid gap-3 sm:gap-4">
            {aboutGroups.map((group) => (
              <div
                key={group.title}
                className="rounded-[1.2rem] border border-border/60 bg-background/30 p-3 backdrop-blur-sm sm:rounded-3xl sm:p-5"
              >
                <h3 className="text-base font-semibold tracking-tight sm:text-xl">
                  {group.title}
                </h3>
                {group.type === "paragraph" ? (
                  <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground sm:mt-4 sm:text-base sm:leading-7">
                    {group.content}
                  </p>
                ) : (
                  <ul className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-sm leading-5 text-muted-foreground sm:mt-4 sm:block sm:space-y-3 sm:text-base sm:leading-6">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 sm:items-start sm:gap-3">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/70 sm:mt-2" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </SurfaceCard>
        <SurfaceCard className="space-y-3 p-3 sm:space-y-5 sm:p-8">
          <Eyebrow>Technical Skills</Eyebrow>
          <div className="grid gap-3 sm:gap-4">
            {Object.entries(skills).map(([group, items]) => (
              <div
                key={group}
                className="rounded-[1.2rem] border border-border/60 bg-background/30 p-3 backdrop-blur-sm sm:rounded-3xl sm:p-5"
              >
                <h3 className="text-base font-semibold tracking-tight sm:text-lg">{group}</h3>
                <div className="mt-3 flex flex-wrap gap-1.5 sm:mt-4 sm:gap-2">
                  {items.map((item) => (
                    <Tag key={item}>{item}</Tag>
                  ))}
                </div>
              </div>
            ))}
            <div className="rounded-[1.2rem] border border-border/60 bg-background/30 p-3 backdrop-blur-sm sm:rounded-3xl sm:p-5">
              <h3 className="text-base font-semibold tracking-tight sm:text-lg">Certifications</h3>
              <div className="mt-3 flex flex-wrap gap-1.5 sm:mt-4 sm:gap-2">
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
