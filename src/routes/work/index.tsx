import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import avLogoPng from "@/assets/av-logo.png";
import smartAlertsPreview from "@/assets/smart-alerts-preview.png";
import forecastingPreview from "@/assets/forecasting-preview.png";
import researchPreview from "@/assets/research-preview.png";
import uworkPreview from "@/assets/uwork-preview.png";
import { lazy, Suspense } from "react";
import { Reveal } from "@/components/SectionReveal";
const HeroOrb = lazy(() => import("@/components/HeroOrb").then((m) => ({ default: m.HeroOrb })));

export const Route = createFileRoute("/work/")({
  head: () => ({
    meta: [
      { title: "Work — Alena Vorobiev" },
      { name: "description", content: "Case studies by Alena Vorobiev — UX design for AI, enterprise, and data products." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500&family=Inter:wght@300;400;500;600&display=swap" },
    ],
  }),
  component: WorkPage,
});

const projects = [
  {
    id: "smart-alerts",
    title: "Smart Alerts Redesign",
    summary: "Rebuilt the alert creation flow to reduce setup time and increase trust in automated monitoring.",
    tags: ["Enterprise SaaS", "Design System", "0→1 Flow"],
    image: smartAlertsPreview,
  },
  {
    id: "research",
    title: "Multi-Source Alerts Research",
    summary: "Generative and evaluative research with PMs, researchers, and engineers to validate a new alerts model.",
    tags: ["UX Research", "Interviews", "Synthesis"],
    image: researchPreview,
  },
  {
    id: "forecasting",
    title: "Alert Forecasting & AI Insights",
    summary: "Forecasting and AI insights for Spike Detection — helping users anticipate trends before they break.",
    tags: ["Data Viz", "AI Insights", "Feature Design"],
    image: forecastingPreview,
  },
  {
    id: "uwork",
    title: "uWork",
    summary: "Mobile app helping self-employed tradespeople and small construction crews manage jobs end-to-end.",
    tags: ["Mobile", "0→1 Product", "Branding"],
    image: uworkPreview,
  },
];

function WorkPage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Nav />
      <main className="mx-auto max-w-7xl px-6 lg:px-10 pt-36 pb-28 lg:pb-40">
        <div className="mb-16 grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-4">
              Portfolio
            </div>
            <h1 className="font-display text-5xl md:text-6xl text-primary max-w-2xl text-balance">
              A selection of product design work.
            </h1>
          </Reveal>
          <div className="hidden lg:block relative h-64">
            <Suspense fallback={null}>
              <HeroOrb />
            </Suspense>
          </div>
        </div>

        <ul className="space-y-24 lg:space-y-32">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </ul>
      </main>
    </div>
  );
}

function Nav() {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-[color-mix(in_oklab,var(--ivory)_75%,transparent)] border-b border-border/50"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-4">
          <img src={avLogoPng} alt="AV monogram" className="h-10 w-auto" />
          <span className="w-px h-8 bg-primary/30" aria-hidden />
          <span className="flex flex-col leading-none">
            <span className="font-display text-sm tracking-[0.2em] uppercase text-primary">
              Alena Vorobiev
            </span>
            <span className="text-[0.65rem] tracking-[0.25em] uppercase text-accent mt-1">
              UX Designer
            </span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-10 text-sm">
          <Link to="/work" className="text-primary font-medium">Work</Link>
          <Link to="/about" className="hover:text-primary transition-colors">About</Link>
          <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
        </nav>
      </div>
    </motion.header>
  );
}

function ProjectCard({ project, index }: { project: typeof projects[number]; index: number }) {
  const flipped = index % 2 === 1;
  return (
    <Reveal as="li" y={48}>
      <Link to="/work/$id" params={{ id: project.id }} className="group block">
        <article
          className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${flipped ? "lg:[&>*:first-child]:order-2" : ""}`}
        >
          <div className="relative">
            {/* Offset background block */}
            <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl" style={{ background: "var(--surface)" }} />
            {/* Gold accent line */}
            <div className="absolute -left-4 top-8 bottom-8 w-px bg-accent opacity-60" />
            {/* Dot grid */}
            <svg className="absolute -top-5 -left-5 opacity-25 pointer-events-none" width="64" height="64" viewBox="0 0 64 64" aria-hidden>
              {Array.from({ length: 4 }).map((_, row) =>
                Array.from({ length: 4 }).map((_, col) => (
                  <circle key={`${row}-${col}`} cx={col * 16 + 8} cy={row * 16 + 8} r="1.5" fill="var(--plum)" />
                ))
              )}
            </svg>
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-2xl overflow-hidden bg-white aspect-[4/3]"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-contain transition-transform duration-700 group-hover:scale-[1.04]"
              />
            </motion.div>
          </div>

          <div>
            <h2 className="font-display text-4xl md:text-5xl text-primary text-balance group-hover:text-[color:var(--teal)] transition-colors">
              {project.title}
            </h2>
            <p className="mt-5 text-lg text-foreground/75 max-w-lg leading-relaxed">
              {project.summary}
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {project.tags.map((t) => (
                <span
                  key={t}
                  className="text-xs px-3 py-1.5 rounded-full border border-border bg-card text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-9 inline-flex items-center gap-2 text-primary font-medium">
              <span className="relative">
                Read the case study
                <span className="absolute left-0 -bottom-0.5 h-px w-full bg-primary origin-left scale-x-100 transition-transform duration-300 group-hover:scale-x-0" />
              </span>
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
          </div>
        </article>
      </Link>
    </Reveal>
  );
}

