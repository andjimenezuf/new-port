import {
  Eyebrow,
  SectionHeading,
  SectionShell,
  SurfaceCard,
} from "@/components/PortfolioPrimitives";
import { ShuffleText } from "@/components/ui/shuffle-text";

const projects = [
  {
    name: "FairFlow - HackPrinceton",
    description:
      "Built a community micro-lending platform that explains credit risk with AI-generated clarity scores and public accountability for merchants.",
    timeline: "November 2025",
    technologies: "FastAPI, React, xAI API, Kotlin",
    github: "https://devpost.com/software/symbio-g2craj?_gl=1*ye370*_gcl_au*MTE2OTYxNjgyNi4xNzY5MzkyMDk1*_ga*NjE4MDgwOTg3LjE3NjkzOTIwOTU.*_ga_0YHJK3Y10M*czE3NzMzNjgzNjAkbzYkZzEkdDE3NzMzNjgzODckajMzJGwwJGgw",
  },
  {
    name: "Sherpa - HackHarvard",
    description:
      "Improved web accessibility for visually-impaired users by generating Gemini-based summaries of complex webpages and reducing DOM analysis latency.",
    timeline: "October 2025",
    technologies: "JavaScript, FastAPI, HTML, CSS, Google APIs",
    github: "https://github.com/ahnopologetic/Sherpa-HackHarvard2025",
  },
  {
    name: "EduAdvisor - Personal Project",
    description:
      "Built an AI advisor that analyzes majors and prerequisite paths, then creates personalized recommendations using agent-driven tools.",
    timeline: "September 2025",
    technologies: "React, TypeScript, FastAPI, MongoDB, Google ADK",
    github: "https://github.com/izy138/ShellHacks2025",
  },
  {
    name: "Currency Convertor",
    description:
      "Developed an iOS app in Swift for real-time currency conversions using ExchangeRateAPI and FlagsAPI.",
    timeline: "Project",
    technologies: "Swift, iOS, ExchangeRateAPI, FlagsAPI",
    github: "#",
  },
  {
    name: "Ace Expense",
    description:
      "Streamlined personal finance management using shadcn/ui, Drizzle ORM, PostgreSQL, and Next.js.",
    timeline: "Project",
    technologies: "shadcn/ui, Drizzle ORM, PostgreSQL, Next.js",
    github: "#",
  },
  {
    name: "Investi Track",
    description:
      "Implemented a stock search and visualization interface using Next.js and AlphaVantage with room for predictive ML additions.",
    timeline: "Project",
    technologies: "Next.js, AlphaVantage, data visualization",
    github: "#",
  },
  {
    name: "Fruit Image Mold Detector",
    description:
      "Leveraged TensorFlow and a pre-trained ImageNet model to identify mold on fruits with 97% validation accuracy.",
    timeline: "Project",
    technologies: "TensorFlow, ImageNet, computer vision",
    github: "#",
  },
  {
    name: "Musicales Jimenez",
    description:
      "An interactive multi-page music store simulation with live cart calculations and SQL-backed inventory management.",
    timeline: "Project",
    technologies: "SQL, e-commerce, multi-page application",
    github: "#",
  },
];

export default function ProjectsSection() {
  return (
    <SectionShell id="projects" className="space-y-5">
      <SectionHeading
        title="Projects"
        subtitle="A mix of hackathon work, personal products, and experiments across AI, mobile, and full-stack development."
      />
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <SurfaceCard key={project.name} className="space-y-5 p-6 sm:p-7">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
              <div className="space-y-2">
                <ShuffleText
                  as="h3"
                  text={project.name}
                  className="text-2xl font-semibold tracking-tight"
                />
                <Eyebrow>{project.timeline}</Eyebrow>
              </div>
              <div className="flex gap-3 font-mono text-sm text-muted-foreground">
                <a href={project.github} className="underline-offset-4 hover:underline">
                  GitHub
                </a>
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-base leading-7 text-muted-foreground">
                {project.description}
              </p>
              <p className="text-sm leading-6 text-muted-foreground">
                <span className="font-mono font-medium text-[color:var(--panel-text)]">
                  Technologies:
                </span>{" "}
                {project.technologies}
              </p>
            </div>
          </SurfaceCard>
        ))}
      </div>
    </SectionShell>
  );
}
