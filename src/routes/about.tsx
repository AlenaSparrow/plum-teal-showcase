import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowUpRight, Linkedin, FileText } from "lucide-react";
import avLogoPng from "@/assets/av-logo.png";
import headshotUrl from "@/assets/alena-headshot.jpg";
import { Reveal } from "@/components/SectionReveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Alena Vorobiev" },
      { name: "description", content: "Senior UX Designer combining analytical thinking with creative problem-solving to transform complex challenges into intuitive experiences." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500&family=Inter:wght@300;400;500;600&display=swap" },
    ],
  }),
  component: AboutPage,
});

const expertise = [
  {
    category: "Product Design",
    items: ["End-to-End Product Design", "Interaction Design", "Information Architecture", "Design Systems", "UX Strategy", "Visual Design"],
  },
  {
    category: "Research & Validation",
    items: ["User Interviews", "Usability Testing", "A/B Testing", "Journey Mapping", "Data-Informed Design", "Hypothesis Development"],
  },
  {
    category: "Tools",
    items: ["Figma & FigJam", "Adobe Creative Suite", "FullStory", "Lyssna", "ChatGPT · v0 · Lovable · Claude", "Insomnia"],
  },
  {
    category: "Collaboration & Handoff",
    items: ["Notion", "Zeplin", "Confluence", "Jira"],
  },
];

function AboutPage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Nav />
      <main>
        {/* Hero — photo + intro */}
        <section className="mx-auto max-w-7xl px-6 lg:px-10 pt-36 pb-20 lg:pt-44 lg:pb-28">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <Reveal>
              <div className="relative max-w-md">

                {/* Offset background block */}
                <div
                  className="absolute -bottom-5 -right-5 w-full h-full rounded-2xl"
                  style={{ background: "var(--surface)" }}
                />

                {/* Gold accent line */}
                <div className="absolute -left-5 top-12 bottom-12 w-px bg-accent opacity-60" />

                {/* Dot grid decoration */}
                <svg
                  className="absolute -top-6 -left-6 opacity-30"
                  width="80" height="80"
                  viewBox="0 0 80 80"
                  aria-hidden
                >
                  {Array.from({ length: 5 }).map((_, row) =>
                    Array.from({ length: 5 }).map((_, col) => (
                      <circle
                        key={`${row}-${col}`}
                        cx={col * 16 + 8}
                        cy={row * 16 + 8}
                        r="1.5"
                        fill="var(--plum)"
                      />
                    ))
                  )}
                </svg>

                {/* Photo */}
                <div className="relative overflow-hidden rounded-2xl aspect-[3/4]" style={{ boxShadow: "var(--shadow-card)" }}>
                  <img
                    src={headshotUrl}
                    alt="Alena Vorobiev"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  {/* Subtle gradient overlay at bottom */}
                  <div
                    className="absolute inset-x-0 bottom-0 h-1/3 pointer-events-none"
                    style={{ background: "linear-gradient(to top, color-mix(in oklab, var(--plum) 30%, transparent), transparent)" }}
                  />
                </div>

                {/* Gold corner accent */}
                <div className="absolute -bottom-3 -right-3 size-12 rounded-full border border-accent/40" />
                <div className="absolute -bottom-1 -right-1 size-5 rounded-full bg-accent/20" />

              </div>
            </Reveal>

            <div className="space-y-8">
              <Reveal delay={0.1}>
                <h1 className="font-display text-5xl md:text-6xl text-primary text-balance leading-[1.05]">
                  Hi, I'm Alena Vorobiev.
                </h1>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  A UX Designer who bridges analytical rigour and creative vision —
                  turning complex, data-heavy systems into experiences that are intuitive,
                  scalable, and genuinely useful.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://www.linkedin.com/in/alena-vorobiev"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium hover:bg-[color:var(--teal)] transition-colors"
                  >
                    <Linkedin className="size-4" /> LinkedIn
                  </a>
                  <a
                    href="/Alena-Vorobiev-Resume.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-primary/25 px-5 py-2.5 text-sm font-medium hover:border-primary hover:text-primary transition-colors"
                  >
                    <FileText className="size-4" /> Download Résumé
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="bg-secondary/60 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12">
            <Reveal className="lg:col-span-4">
              <h2 className="font-display text-4xl md:text-5xl text-primary text-balance">
                Impact-driven design for complex systems.
              </h2>
            </Reveal>
            <div className="lg:col-span-8 space-y-6 text-lg leading-relaxed text-foreground/80">
              <Reveal delay={0.1}>
                <p>
                  Over the past several years I've led design on data-driven products at
                  Meltwater — owning the Smart Alerts ecosystem end-to-end and redefining how
                  enterprise users discover, interpret, and act on insights from spikes, sentiment
                  shifts, and AI-powered analytics.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <p>
                  I'm energised by high-complexity problems: multi-step enterprise workflows,
                  real-time data dashboards, and AI features that need to earn user trust through
                  transparency and control. My focus is always on measurable outcomes — reducing
                  friction, increasing confidence, and shipping experiences that make sophisticated
                  tools feel accessible.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <p>
                  I work end-to-end: generative and evaluative research, strategy, information
                  architecture, interaction design, and design systems. I collaborate closely with
                  PMs and engineers from problem framing through to delivery, treating ambiguity
                  as a starting point rather than a blocker.
                </p>
              </Reveal>
              <Reveal delay={0.4}>
                <p>
                  Outside of product work, I'm a practising artist and photographer. That
                  background keeps me attentive to the things numbers don't always capture —
                  visual hierarchy, emotional resonance, the difference between a layout that
                  functions and one that actually connects. I bring that sensibility into every
                  project: rigour and craft, together.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Expertise grid */}
        <section className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-28">
          <Reveal>
            <h2 className="font-display text-4xl text-primary mb-14">
              Technical & design expertise
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {expertise.map((group, i) => (
              <Reveal key={group.category} delay={i * 0.1}>
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-accent mb-4 font-medium">
                    {group.category}
                  </div>
                  <ul className="space-y-2">
                    {group.items.map((item) => (
                      <li key={item} className="text-sm text-foreground/75 leading-snug">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

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
          <Link to="/work" className="hover:text-primary transition-colors">Work</Link>
          <Link to="/about" className="text-primary font-medium">About</Link>
          <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
        </nav>
      </div>
    </motion.header>
  );
}
