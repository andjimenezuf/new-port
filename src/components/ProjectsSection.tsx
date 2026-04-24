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
      "Community micro-lending with AI credit scoring and merchant accountability.",
    timeline: "November 2025",
    technologies: "FastAPI, React, xAI API, Kotlin",
    github: "https://devpost.com/software/symbio-g2craj?_gl=1*ye370*_gcl_au*MTE2OTYxNjgyNi4xNzY5MzkyMDk1*_ga*NjE4MDgwOTg3LjE3NjkzOTIwOTU.*_ga_0YHJK3Y10M*czE3NzMzNjgzNjAkbzYkZzEkdDE3NzMzNjgzODckajMzJGwwJGgw",
  },
  {
    name: "Sherpa - HackHarvard",
    description:
      "Web accessibility navigation with AI page summaries for visually impaired users.",
    timeline: "October 2025",
    technologies: "JavaScript, FastAPI, HTML, CSS, Google APIs",
    github: "https://github.com/ahnopologetic/Sherpa-HackHarvard2025",
  },
  {
    name: "EduAdvisor - Personal Project",
    description:
      "Academic pathway planning with agentic recommendations and prerequisite mapping.",
    timeline: "September 2025",
    technologies: "React, TypeScript, FastAPI, MongoDB, Google ADK",
    github: "https://github.com/izy138/ShellHacks2025",
  },
  {
    name: "Currency Convertor",
    description:
      "Real-time currency conversion on iOS with live exchange rate data.",
    timeline: "Project",
    technologies: "Swift, iOS, ExchangeRateAPI, FlagsAPI",
  },
  {
    name: "Ace Expense",
    description:
      "Personal expense tracking with modern full-stack finance workflows.",
    timeline: "Project",
    technologies: "shadcn/ui, Drizzle ORM, PostgreSQL, Next.js",
  },
  {
    name: "Investi Track",
    description:
      "Stock discovery and market visualization with real-time financial data.",
    timeline: "Project",
    technologies: "Next.js, AlphaVantage, data visualization",
  },
  {
    name: "Fruit Image Mold Detector",
    description:
      "Fruit mold detection with computer vision and image classification.",
    timeline: "Project",
    technologies: "TensorFlow, ImageNet, computer vision",
  },
  {
    name: "Musicales Jimenez",
    description:
      "Music store simulation with cart logic and SQL inventory management.",
    timeline: "Project",
    technologies: "SQL, e-commerce, multi-page application",
  },
];

export default function ProjectsSection() {
  return (
    <SectionShell
      id="projects"
      className="space-y-5 px-1 pb-6 sm:px-0 sm:pb-0"
      sectionNumber="06"
    >
      <SectionHeading
        title="Projects"
        subtitle="A mix of hackathon work, personal products, and experiments across AI, mobile, and full-stack development."
      />
      <div className="grid gap-5 px-1 pb-14 sm:gap-4 sm:px-0 sm:pb-6 md:grid-cols-2">
        {projects.map((project) => (
          <SurfaceCard key={project.name} className="space-y-4 p-5 sm:space-y-5 sm:p-7">
            <div className="flex flex-col gap-3 text-center sm:text-left lg:flex-row lg:items-start lg:justify-between">
              <div className="space-y-2">
                <ShuffleText
                  as="h3"
                  text={project.name}
                  className="text-xl font-semibold tracking-tight sm:text-2xl"
                />
                <div className="flex justify-center sm:justify-start">
                  <Eyebrow>{project.timeline}</Eyebrow>
                </div>
              </div>
              {project.github ? (
                <div className="flex justify-center gap-3 font-mono text-sm text-muted-foreground sm:justify-start">
                  <a href={project.github} className="underline-offset-4 hover:underline">
                    GitHub
                  </a>
                </div>
              ) : null}
            </div>
            <div className="space-y-3 sm:space-y-4">
              <p className="text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
                {project.description}
              </p>
              <p className="hidden text-sm leading-6 text-muted-foreground md:block">
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
