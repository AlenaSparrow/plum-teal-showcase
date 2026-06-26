import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef, lazy, Suspense } from "react";
import { ArrowUpRight, Mail, Linkedin } from "lucide-react";
import logoAsset from "@/assets/av-logo.jpg.asset.json";
import avLogoPng from "@/assets/av-logo.png";
import smartAlertsPreview from "@/assets/smart-alerts-preview.png";
import researchPreview from "@/assets/research-preview.png";
import forecastingPreview from "@/assets/forecasting-preview.png";
import uworkPreview from "@/assets/uwork-preview.png";
import { Reveal } from "@/components/SectionReveal";
import { ClientOnly } from "@/components/ClientOnly";
const HeroOrb = lazy(() => import("@/components/HeroOrb").then((m) => ({ default: m.HeroOrb })));

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alena Vorobiev — UX Designer" },
      { name: "description", content: "UX designer crafting clear, trustworthy product experiences. Case studies in AI, alerts, and enterprise tooling." },
      { property: "og:title", content: "Alena Vorobiev — UX Designer" },
      { property: "og:description", content: "UX designer crafting clear, trustworthy product experiences." },
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
    image: smartAlertsPreview,
    year: "2025",
  },
  {
    id: "mira",
    title: "Mira Studio",
    summary: "Meltwater's AI-powered assistant for media intelligence — conversational discovery for analysts.",
    tags: ["AI Product", "Conversational UI", "Research"],
    image: smartAlertsPreview,
    year: "2025",
  },
  {
    id: "research",
    title: "Multi-Source Alerts Research",
    summary: "Generative and evaluative research with PMs, researchers, and engineers to validate a new alerts model.",
    tags: ["UX Research", "Interviews", "Synthesis"],
    image: researchPreview,
    year: "2024",
  },
  {
    id: "forecasting",
    title: "Alert Forecasting & AI Insights",
    summary: "Forecasting and AI insights for Spike Detection — helping users anticipate trends before they break.",
    tags: ["Data Viz", "AI Insights", "Feature Design"],
    image: forecastingPreview,
    year: "2024",
  },
  {
    id: "uwork",
    title: "uWork",
    summary: "Mobile app helping self-employed tradespeople and small construction crews manage jobs end-to-end.",
    tags: ["Mobile", "0→1 Product", "Branding"],
    image: uworkPreview,
    year: "2023",
  },
];

function Portfolio() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Nav />
      <Hero />
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
        <a href="#top" className="flex items-center gap-4">
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
        </a>
        <nav className="hidden md:flex items-center gap-10 text-sm">
          <Link to="/work" className="hover:text-primary transition-colors">Work</Link>
          <Link to="/about" className="hover:text-primary transition-colors">About</Link>
          <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
        </nav>
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
      {/* 3D wireframe orb */}
      <ClientOnly>
        <Suspense fallback={null}>
          <HeroOrb className="absolute inset-y-0 right-0 w-[55%] opacity-70 pointer-events-none hidden lg:block" />
        </Suspense>
      </ClientOnly>

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
        <h1 className="font-display text-[clamp(2.75rem,8vw,7.5rem)] leading-[0.95] text-balance text-primary">
          <AnimatedWords text="Designing" delay={0.1} />
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
            I'm <span className="text-primary font-medium">Alena Vorobiev</span>, a UX designer
            who makes AI, data, and enterprise products that feel intuitive.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3.5 text-sm font-medium hover:bg-[color:var(--teal)] transition-colors"
            >
              View selected work
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-primary/25 px-6 py-3.5 text-sm font-medium hover:border-primary transition-colors"
            >
              Get in touch
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-border pt-8"
        >
          {[
            ["5+", "Years designing"],
            ["20+", "Shipped features"],
            ["End-to-End", "Experience"],
            ["AI · Data · SaaS", "Specialism"],
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
            and the small craft details that make complex software feel clear.
          </p>
        </div>
      </Reveal>

      <ul className="space-y-24 lg:space-y-32">
        {projects
          .filter((p) => ["smart-alerts", "research", "forecasting"].includes(p.id))
          .map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
      </ul>

      <Reveal>
        <div className="mt-20 text-center">
          <Link
            to="/work"
            className="inline-flex items-center gap-2 rounded-full border border-primary/25 px-6 py-3.5 text-sm font-medium hover:border-primary hover:text-primary transition-colors"
          >
            View all case studies <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </Reveal>
    </section>
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
            <h3 className="font-display text-4xl md:text-5xl text-primary text-balance group-hover:text-[color:var(--teal)] transition-colors">
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

function About() {
  return (
    <section id="about" className="bg-secondary/60 py-28 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12">
        <Reveal className="lg:col-span-5">
          <h2 className="font-display text-5xl md:text-6xl text-primary text-balance">
            A designer who listens before she draws.
          </h2>
        </Reveal>
        <div className="lg:col-span-7 space-y-6 text-lg leading-relaxed text-foreground/80">
          <Reveal delay={0.1}>
            <p>
              I've spent the last several years inside data-heavy products — from media monitoring
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
          <p className="mt-8 text-lg text-foreground/70 max-w-xl mx-auto">
            I'm currently exploring UX and Senior UX Designer roles.
          </p>
        </Reveal>
        <Reveal delay={0.35}>
          <a
            href="mailto:alena.n.vorobiev@gmail.com"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-8 py-4 text-base font-medium hover:bg-[color:var(--teal)] transition-colors"
          >
            Get in touch <ArrowUpRight className="size-4" />
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
            src={avLogoPng}
            alt="Alena Vorobiev — UX Designer"
            className="h-10 w-auto"
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
