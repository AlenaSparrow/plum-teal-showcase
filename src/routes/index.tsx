import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowUpRight, Mail, Linkedin } from "lucide-react";
import logoAsset from "@/assets/av-logo.jpg.asset.json";
import { Reveal } from "@/components/SectionReveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alena Vorobiev — UX Designer" },
      { name: "description", content: "Senior UX designer crafting clear, trustworthy product experiences. Case studies in AI, alerts, and enterprise tooling." },
      { property: "og:title", content: "Alena Vorobiev — UX Designer" },
      { property: "og:description", content: "Senior UX designer crafting clear, trustworthy product experiences." },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500&family=Inter:wght@300;400;500;600&display=swap" },
    ],
  }),
  component: Portfolio,
});

const projects = [
  {
    id: "smart-alerts",
    title: "Smart Alerts Redesign",
    summary: "Rebuilt the alert creation flow to reduce setup time and increase trust in automated monitoring.",
    tags: ["Enterprise SaaS", "Design System", "0→1 Flow"],
    image: "https://alenavorobiev.com/wp-content/uploads/2026/03/Macbook-Pro-FREE-2-1.png",
    year: "2025",
  },
  {
    id: "mira",
    title: "Mira Studio",
    summary: "Meltwater's AI-powered assistant for media intelligence — conversational discovery for analysts.",
    tags: ["AI Product", "Conversational UI", "Research"],
    image: "https://alenavorobiev.com/wp-content/uploads/2026/03/Macbook-Pro-FREE-5.png",
    year: "2025",
  },
  {
    id: "research",
    title: "Multi-Source Alerts Research",
    summary: "Generative and evaluative research with PMs, researchers, and engineers to validate a new alerts model.",
    tags: ["UX Research", "Interviews", "Synthesis"],
    image: "https://alenavorobiev.com/wp-content/uploads/2026/03/Macbook-Pro-FREE-2.png",
    year: "2024",
  },
  {
    id: "forecasting",
    title: "Alert Forecasting & AI Insights",
    summary: "Forecasting and AI insights for Spike Detection — helping users anticipate trends before they break.",
    tags: ["Data Viz", "AI Insights", "Feature Design"],
    image: "https://alenavorobiev.com/wp-content/uploads/2026/02/Macbook-Pro-FREE-1-1-1024x645.png",
    year: "2024",
  },
  {
    id: "uwork",
    title: "uWork",
    summary: "Mobile app helping self-employed tradespeople and small construction crews manage jobs end-to-end.",
    tags: ["Mobile", "0→1 Product", "Branding"],
    image: "https://alenavorobiev.com/wp-content/uploads/2025/11/Preview-1024x937.png",
    year: "2023",
  },
];

function Portfolio() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Nav />
      <Hero />
      <Marquee />
      <Work />
      <About />
      <Contact />
      <Footer />
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
        <a href="#top" className="font-display text-lg tracking-tight text-primary">
          AV<span className="text-accent">.</span>
        </a>
        <nav className="hidden md:flex items-center gap-10 text-sm">
          <a href="#work" className="hover:text-primary transition-colors">Work</a>
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </nav>
        <a
          href="mailto:alena.n.vorobiev@gmail.com"
          className="hidden md:inline-flex items-center gap-1.5 text-sm border border-primary/30 rounded-full px-4 py-2 hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          Let's talk <ArrowUpRight className="size-3.5" />
        </a>
      </div>
    </motion.header>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <section
      id="top"
      ref={ref}
      className="relative pt-32 pb-24 lg:pt-44 lg:pb-32"
      style={{ background: "var(--gradient-hero)" }}
    >
      {/* Floating ornamental shapes */}
      <motion.div
        aria-hidden
        className="absolute top-32 right-[8%] size-64 rounded-full blur-3xl opacity-40"
        style={{ background: "var(--surface)" }}
        animate={{ y: [0, -20, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute bottom-10 left-[5%] size-48 rounded-full blur-3xl opacity-50"
        style={{ background: "color-mix(in oklab, var(--gold) 40%, transparent)" }}
        animate={{ y: [0, 24, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div style={{ y, opacity }} className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-muted-foreground mb-8"
        >
          <span className="size-1.5 rounded-full bg-accent" />
          Portfolio · 2026
        </motion.div>

        <h1 className="font-display text-[clamp(2.75rem,8vw,7.5rem)] leading-[0.95] text-balance text-primary">
          <AnimatedWords text="Designing calm" delay={0.1} />
          <br />
          <span className="italic text-[color:var(--teal)]">
            <AnimatedWords text="clarity for" delay={0.35} />
          </span>{" "}
          <AnimatedWords text="complex" delay={0.55} />
          <br />
          <AnimatedWords text="products." delay={0.75} />
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.95, ease }}
          className="mt-12 grid md:grid-cols-[1.2fr_1fr] gap-10 items-end"
        >
          <p className="text-lg md:text-xl max-w-xl text-foreground/80 leading-relaxed">
            I'm <span className="text-primary font-medium">Alena Vorobiev</span>, a senior UX designer
            shaping AI, data, and enterprise products that feel quiet, deliberate, and human.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3.5 text-sm font-medium hover:bg-[color:var(--teal)] transition-colors"
            >
              View selected work
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-primary/25 px-6 py-3.5 text-sm font-medium hover:border-primary transition-colors"
            >
              Get in touch
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-border pt-8"
        >
          {[
            ["7+", "Years designing"],
            ["20+", "Shipped features"],
            ["B2B SaaS", "Primary focus"],
            ["AI · Data", "Specialism"],
          ].map(([k, v]) => (
            <div key={k}>
              <div className="font-display text-3xl text-primary">{k}</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{v}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

function AnimatedWords({ text, delay = 0 }: { text: string; delay?: number }) {
  return (
    <span className="inline-block overflow-hidden align-bottom">
      <motion.span
        initial={{ y: "110%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
        className="inline-block"
      >
        {text}
      </motion.span>
    </span>
  );
}

function Marquee() {
  const items = ["Meltwater", "Enterprise SaaS", "AI Products", "Design Systems", "UX Research", "0→1 Strategy"];
  return (
    <div className="border-y border-border bg-secondary/50 py-5 overflow-hidden">
      <motion.div
        className="flex gap-16 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {[...items, ...items, ...items].map((t, i) => (
          <span key={i} className="font-display text-2xl text-primary/70 flex items-center gap-16">
            {t}
            <span className="size-1.5 rounded-full bg-accent" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}

function Work() {
  return (
    <section id="work" className="mx-auto max-w-7xl px-6 lg:px-10 py-28 lg:py-40">
      <Reveal>
        <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
          <div>
            <div className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-4">
              Selected Work
            </div>
            <h2 className="font-display text-5xl md:text-6xl text-primary max-w-2xl text-balance">
              Case studies in clarity, trust, and intelligence.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm">
            A short selection of recent product work — spanning enterprise AI, monitoring,
            and the small craft details that make complex software feel calm.
          </p>
        </div>
      </Reveal>

      <ul className="space-y-24 lg:space-y-32">
        {projects.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}
      </ul>
    </section>
  );
}

function ProjectCard({ project, index }: { project: typeof projects[number]; index: number }) {
  const flipped = index % 2 === 1;
  return (
    <Reveal as="li" y={48}>
      <article
        className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${flipped ? "lg:[&>*:first-child]:order-2" : ""}`}
      >
        <motion.div
          whileHover={{ y: -6 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-2xl overflow-hidden bg-secondary aspect-[4/3] group"
          style={{ boxShadow: "var(--shadow-card)" }}
        >
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          />
          <div className="absolute top-5 left-5 text-xs tracking-widest uppercase bg-background/80 backdrop-blur px-3 py-1.5 rounded-full">
            {project.year}
          </div>
        </motion.div>

        <div>
          <div className="text-xs tracking-[0.25em] uppercase text-accent mb-4">
            Case Study · 0{index + 1}
          </div>
          <h3 className="font-display text-4xl md:text-5xl text-primary text-balance">
            {project.title}
          </h3>
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
          <button
            type="button"
            className="mt-9 group inline-flex items-center gap-2 text-primary font-medium"
          >
            <span className="relative">
              Read the case study
              <span className="absolute left-0 -bottom-0.5 h-px w-full bg-primary origin-left scale-x-100 transition-transform duration-300 group-hover:scale-x-0" />
            </span>
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>
        </div>
      </article>
    </Reveal>
  );
}

function About() {
  return (
    <section id="about" className="bg-secondary/60 py-28 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12">
        <Reveal className="lg:col-span-5">
          <div className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-4">
            About
          </div>
          <h2 className="font-display text-5xl md:text-6xl text-primary text-balance">
            A designer who listens before she draws.
          </h2>
        </Reveal>
        <div className="lg:col-span-7 space-y-6 text-lg leading-relaxed text-foreground/80">
          <Reveal delay={0.1}>
            <p>
              I've spent the last seven years inside data-heavy products — from media monitoring
              and AI assistants to alert systems used by global enterprise teams. My favourite
              problems are the ones hiding in plain sight: the small frictions that erode trust
              one click at a time.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p>
              I lead end-to-end work — research, strategy, IA, interaction, and the design
              system glue in between. I'm happiest collaborating closely with PMs, researchers,
              and engineers to ship something measurable.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="pt-6 grid sm:grid-cols-2 gap-8">
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
                  Practice
                </div>
                <ul className="space-y-1.5 text-base">
                  <li>Product strategy</li>
                  <li>Generative & evaluative research</li>
                  <li>Interaction & visual design</li>
                  <li>Design systems</li>
                </ul>
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
                  Tools
                </div>
                <ul className="space-y-1.5 text-base">
                  <li>Figma · FigJam</li>
                  <li>Dovetail · Maze</li>
                  <li>Protopie · Principle</li>
                  <li>A bit of code</li>
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-28 lg:py-40">
      <div className="mx-auto max-w-5xl px-6 lg:px-10 text-center">
        <Reveal>
          <div className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-6">
            Let's work together
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-5xl md:text-7xl text-primary text-balance leading-[1]">
            Have a product worth{" "}
            <span className="italic text-[color:var(--teal)]">making calm?</span>
          </h2>
        </Reveal>
        <Reveal delay={0.25}>
          <p className="mt-8 text-lg text-foreground/70 max-w-xl mx-auto">
            I'm currently exploring senior and staff UX roles, plus selective consulting
            for early-stage AI products.
          </p>
        </Reveal>
        <Reveal delay={0.35}>
          <a
            href="mailto:alena.n.vorobiev@gmail.com"
            className="mt-12 inline-flex items-center gap-3 font-display text-3xl md:text-5xl text-primary group"
          >
            <span className="border-b border-primary/30 group-hover:border-primary transition-colors pb-1">
              alena.n.vorobiev@gmail.com
            </span>
            <ArrowUpRight className="size-8 md:size-10 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-12 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
        <div className="flex items-center gap-4">
          <img
            src={logoAsset.url}
            alt="Alena Vorobiev — UX Designer"
            className="h-10 w-auto mix-blend-multiply"
          />
        </div>
        <div className="flex items-center gap-6 text-sm">
          <a
            href="mailto:alena.n.vorobiev@gmail.com"
            className="inline-flex items-center gap-2 hover:text-primary transition-colors"
          >
            <Mail className="size-4" /> Email
          </a>
          <a
            href="https://www.linkedin.com/in/alena-vorobiev/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 hover:text-primary transition-colors"
          >
            <Linkedin className="size-4" /> LinkedIn
          </a>
        </div>
        <div className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Alena Vorobiev. Crafted with care.
        </div>
      </div>
    </footer>
  );
}
