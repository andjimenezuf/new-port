import {
  Eyebrow,
  SectionHeading,
  SectionShell,
  SurfaceCard,
  Tag,
} from "@/components/PortfolioPrimitives";

const bio = [
  "A first-generation University of Florida student aiming at technical work that blends rigorous engineering with fast iteration.",
  "Hello, my name is Andres. I'm currently pursuing a B.S. in Computer Science with a Minor in Statistics at the University of Florida.",
  "My strongest interests are software engineering, machine learning, data science, quantitative finance, and cloud systems. I prefer learning by shipping things that work, then iterating hard on them.",
  "Outside of work, I enjoy music and cycling. The broader theme is the same: staying curious, building taste, and keeping momentum.",
];

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
        subtitle="A first-generation University of Florida student aiming at technical work that blends rigorous engineering with fast iteration."
      />
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <SurfaceCard className="space-y-4">
          <Eyebrow>Get to know me</Eyebrow>
          {bio.map((paragraph) => (
            <p key={paragraph} className="leading-7 text-muted-foreground">
              {paragraph}
            </p>
          ))}
        </SurfaceCard>
        <div className="grid gap-6">
          {Object.entries(skills).map(([group, items]) => (
            <SurfaceCard key={group} className="space-y-4">
              <Eyebrow>{group === "Programming Languages" ? "Core Skills" : group}</Eyebrow>
              {group === "Programming Languages" ? (
                <p className="text-sm text-muted-foreground">{group}</p>
              ) : null}
              {group === "" ? (
                <p className="text-sm text-muted-foreground">{group}</p>
              ) : null}
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </div>
            </SurfaceCard>
          ))}
          <SurfaceCard className="space-y-4">
            <Eyebrow>Certifications</Eyebrow>
            <div className="flex flex-wrap gap-2">
              {certifications.map((item) => (
                <Tag key={item}>{item}</Tag>
              ))}
            </div>
          </SurfaceCard>
        </div>
      </div>
    </SectionShell>
  );
}
