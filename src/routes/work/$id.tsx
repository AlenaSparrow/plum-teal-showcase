import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, ArrowLeft, X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import avLogoPng from "@/assets/av-logo.png";
import researchAlertsStructure from "@/assets/research-alerts-structure.png";
import saAlertSelection from "@/assets/sa-alert-selection.png";
import saCreateAlert from "@/assets/sa-create-alert.png";
import saAlertsPageChanges from "@/assets/sa-alerts-page-changes.png";
import saViewExample from "@/assets/sa-view-example.png";
import uworkOwner from "@/assets/uwork-owner.svg";
import uworkWorker from "@/assets/uwork-worker.svg";
import uworkStoryboard from "@/assets/uwork-storyboard.png";
import uworkIdeation from "@/assets/uwork-ideation.png";
import uworkCustomers from "@/assets/uwork-customers.jpg";
import uworkWorkers from "@/assets/uwork-workers.jpg";
import uworkProjects from "@/assets/uwork-projects.jpg";
import uworkPhoto1 from "@/assets/uwork-photo-1.jpg";
import uworkPhoto2 from "@/assets/uwork-photo-2.jpg";
import uworkPhoto3 from "@/assets/uwork-photo-3.jpg";
import surveySlide1 from "@/assets/survey-slide1.png";
import surveySlide2 from "@/assets/survey-slide2.png";
import surveySlide3 from "@/assets/survey-slide3.png";
import surveySlide4 from "@/assets/survey-slide4.png";
import { Reveal } from "@/components/SectionReveal";
import { getCaseStudy, caseStudies } from "@/lib/case-studies";

export const Route = createFileRoute("/work/$id")({
  head: ({ params }) => {
    const cs = getCaseStudy(params.id);
    return {
      meta: [
        { title: cs ? `${cs.title} — Alena Vorobiev` : "Case Study — Alena Vorobiev" },
        { name: "description", content: cs?.tagline ?? "" },
      ],
      links: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
        { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500&family=Inter:wght@300;400;500;600&display=swap" },
      ],
    };
  },
  loader: ({ params }) => {
    const cs = getCaseStudy(params.id);
    if (!cs) throw notFound();
    return cs;
  },
  component: CaseStudyPage,
});

function CaseStudyPage() {
  const cs = Route.useLoaderData();
  const [lightbox, setLightbox] = useState<{ images: string[]; index: number } | null>(null);
  const openLightbox = useCallback((images: string[], index = 0) => setLightbox({ images, index }), []);
  const [videoOverlay, setVideoOverlay] = useState<string | null>(null);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Nav />

      {/* ── Hero ── */}
      <section
        className="relative pt-36 pb-20 lg:pt-44 lg:pb-28 overflow-hidden"
        style={{ background: "var(--gradient-hero)" }}
      >
        {/* Decorative background ring */}
        <div
          className="absolute -top-32 -right-32 size-[600px] rounded-full opacity-20 pointer-events-none"
          style={{ background: "radial-gradient(circle, var(--surface) 0%, transparent 70%)" }}
        />

        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              to="/work"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-12 group"
            >
              <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
              All case studies
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left — text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-7">
                {cs.tags.map((t) => (
                  <span key={t} className="text-xs px-3 py-1.5 rounded-full bg-primary/8 border border-primary/15 text-primary/70 font-medium tracking-wide">
                    {t}
                  </span>
                ))}
              </div>

              <h1 className="font-display text-4xl md:text-6xl text-primary text-balance leading-[0.95]">
                {cs.title}
              </h1>

              <p className="mt-6 text-lg md:text-xl text-foreground/65 leading-relaxed font-light">
                {cs.tagline}
              </p>
            </motion.div>

            {/* Right — image */}
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl overflow-hidden bg-white"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <img
                src={cs.heroImage}
                alt={cs.title}
                className="w-full h-full object-contain"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Impact metrics ── */}
      {cs.stats && (
        <section className="mt-0 py-16 border-b border-border/40" style={{ background: "var(--surface)" }}>
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <Reveal>
              <p className="text-[0.65rem] uppercase tracking-[0.25em] text-accent mb-10 font-medium">Impact & Outcomes</p>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-border/40">
              {cs.stats.map((s, i) => (
                <Reveal key={s.label} delay={i * 0.1}>
                  <div className="py-6 sm:py-0 sm:px-12 first:pl-0 last:pr-0">
                    <div className="font-display text-[3.5rem] leading-none text-primary">{s.value}</div>
                    <div className="mt-2 text-sm text-foreground/60 leading-snug max-w-[180px]">{s.label}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Overview ── */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-28">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <Reveal className="lg:col-span-4 lg:sticky lg:top-28">
            <p className="text-[0.65rem] uppercase tracking-[0.25em] text-accent mb-4 font-medium">Overview</p>
            <h2 className="font-display text-4xl text-primary leading-tight">
              Project<br />at a glance
            </h2>
            <div className="mt-8 h-px w-12 bg-accent" />
          </Reveal>
          <Reveal delay={0.15} className="lg:col-span-8 space-y-10">
            <div className="space-y-5">
              {cs.overview.split("\n\n").map((para, i) => (
                <p key={i} className="text-xl leading-[1.75] text-foreground/80">{para}</p>
              ))}
            </div>
            {cs.id === "research" && <ResearchMethods />}
          </Reveal>
        </div>
      </section>

      {/* ── Case study sections ── */}
      <div className="border-t border-border/40">
        {cs.sections.map((section, i) => (
          <Reveal key={section.heading} y={32}>
            <section className={`mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-24 ${i !== cs.sections.length - 1 ? "border-b border-border/30" : ""}`}>
              <div className="grid lg:grid-cols-12 gap-10 lg:gap-20 items-start">

                {/* Left: label + heading */}
                <div className="lg:col-span-4 lg:sticky lg:top-28">
                  <h3 className="font-display text-3xl md:text-[2.25rem] text-primary leading-tight">
                    {section.heading}
                  </h3>
                </div>

                {/* Right: body + image */}
                <div className="lg:col-span-8 space-y-10">
                  <div className={section.video ? "flex gap-10 items-center" : ""}>
                    {section.video && (
                      <button
                        onClick={() => setVideoOverlay(section.video!)}
                        className="group shrink-0 rounded-2xl overflow-hidden bg-black w-72 relative"
                        style={{ boxShadow: "var(--shadow-card)" }}
                        aria-label="Play video fullscreen"
                      >
                        <video
                          src={section.video}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-auto"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                          <ZoomIn className="size-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg" />
                        </div>
                      </button>
                    )}
                    <div className="text-lg leading-[1.8] text-foreground/80 space-y-5 flex-1">
                      {section.body.split("\n\n").map((para, j) => (
                        <p key={j}>{para}</p>
                      ))}
                    </div>
                  </div>
                  {section.chartId && <ChartBlock chartId={section.chartId} onOpenImage={(imgs, i) => openLightbox(imgs, i)} />}
                  {section.image && (
                    <button
                      onClick={() => openLightbox([section.image!])}
                      className="group w-full text-left rounded-2xl overflow-hidden bg-white relative block"
                      style={{ boxShadow: "var(--shadow-card)" }}
                      aria-label="View full image"
                    >
                      <img
                        src={section.image}
                        alt={section.heading}
                        loading="lazy"
                        className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 rounded-2xl flex items-center justify-center">
                        <ZoomIn className="size-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg" />
                      </div>
                    </button>
                  )}
                </div>

              </div>
            </section>
          </Reveal>
        ))}
      </div>

      {/* ── Client quote ── */}
      {cs.quote && (
        <section className="py-24 lg:py-32" style={{ background: "var(--plum)" }}>
          <div className="mx-auto max-w-4xl px-6 lg:px-10">
            <Reveal>
              <div className="text-center">
                <svg className="mx-auto mb-8 opacity-30" width="48" height="36" viewBox="0 0 48 36" fill="none" aria-hidden>
                  <path d="M0 36V22.5C0 10.5 7.5 3 22.5 0L24 3C17.5 4.5 13.5 8 12 13.5H21V36H0ZM27 36V22.5C27 10.5 34.5 3 49.5 0L51 3C44.5 4.5 40.5 8 39 13.5H48V36H27Z" fill="var(--ivory)"/>
                </svg>
                <blockquote>
                  <p className="font-display text-2xl md:text-3xl leading-relaxed text-balance italic"
                    style={{ color: "var(--ivory)" }}>
                    {cs.quote.text}
                  </p>
                  <footer className="mt-8 text-sm tracking-[0.2em] uppercase opacity-50" style={{ color: "var(--ivory)" }}>
                    — {cs.quote.attribution}
                  </footer>
                </blockquote>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* ── Next case study ── */}
      <NextProject currentId={cs.id} />

      <Lightbox state={lightbox} onClose={() => setLightbox(null)} />
      <VideoOverlay src={videoOverlay} onClose={() => setVideoOverlay(null)} />
    </div>
  );
}

const VISIBLE_ORDER = ["smart-alerts", "research", "forecasting", "uwork"];

function NextProject({ currentId }: { currentId: string }) {
  const visible = caseStudies.filter((c) => VISIBLE_ORDER.includes(c.id)).sort((a, b) => VISIBLE_ORDER.indexOf(a.id) - VISIBLE_ORDER.indexOf(b.id));
  const idx = visible.findIndex((c) => c.id === currentId);
  const next = visible[(idx + 1) % visible.length];

  return (
    <section className="border-t border-border overflow-hidden">
      <Link
        to="/work/$id"
        params={{ id: next.id }}
        className="group block"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 lg:py-20">
          <Reveal>
            <p className="text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground mb-5 font-medium">Next case study</p>
            <div className="flex items-center justify-between gap-6">
              <h2 className="font-display text-4xl md:text-6xl text-primary group-hover:text-[color:var(--teal)] transition-colors duration-300 leading-tight max-w-3xl">
                {next.title}
              </h2>
              <div className="shrink-0 size-14 rounded-full border border-primary/25 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-colors duration-300">
                <ArrowUpRight className="size-5 text-primary group-hover:text-primary-foreground transition-colors duration-300 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>
            <p className="mt-4 text-muted-foreground max-w-xl">{next.tagline}</p>
          </Reveal>
        </div>
      </Link>
    </section>
  );
}

function Nav() {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-[color-mix(in_oklab,var(--ivory)_80%,transparent)] border-b border-border/50"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-4">
          <img src={avLogoPng} alt="AV monogram" className="h-10 w-auto" />
          <span className="w-px h-8 bg-primary/30" aria-hidden />
          <span className="flex flex-col leading-none">
            <span className="font-display text-sm tracking-[0.2em] uppercase text-primary">Alena Vorobiev</span>
            <span className="text-[0.65rem] tracking-[0.25em] uppercase text-accent mt-1">UX Designer</span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-10 text-sm">
          <Link to="/work" className="hover:text-primary transition-colors">Work</Link>
          <Link to="/about" className="hover:text-primary transition-colors">About</Link>
          <a href="mailto:alena.n.vorobiev@gmail.com" className="hover:text-primary transition-colors">Contact</a>
        </nav>
      </div>
    </motion.header>
  );
}

type OpenImage = (images: string[], index?: number) => void;

function ChartBlock({ chartId, onOpenImage }: { chartId: string; onOpenImage: OpenImage }) {
  if (chartId === "workshop-full") return (
    <div className="space-y-8">
      <ClickableImage src={researchAlertsStructure} alt="Alerts structure" onOpenImage={onOpenImage} />
      <div>
        <div className="text-sm font-semibold uppercase tracking-widest text-foreground/50 mb-4">Outcome and Strategic Direction</div>
        <p className="text-base text-foreground/70 leading-relaxed mb-6">The workshop translated research insights into a clear action framework across four dimensions:</p>
        <WorkshopOutcome />
      </div>
    </div>
  );
  if (chartId === "workshop-outcome") return <WorkshopOutcome />;
  if (chartId === "research-alerts-structure") return <ClickableImage src={researchAlertsStructure} alt="Alerts structure" onOpenImage={onOpenImage} />;
  if (chartId === "research-methods") return <ResearchMethods />;
  if (chartId === "research-survey") return <ResearchSurvey onOpenImage={onOpenImage} />;
  if (chartId === "research-user-interviews") return <ResearchUserInterviews />;
  if (chartId === "research-peer-review") return <ResearchPeerReview />;
  if (chartId === "research-expert-review") return <ResearchExpertReview />;
  if (chartId === "research-priority-matrix") return <ResearchPriorityMatrix />;
  if (chartId === "smart-alerts-problem") return <SmartAlertsProblemChart />;
  if (chartId === "smart-alerts-solution") return <SmartAlertsSolution onOpenImage={onOpenImage} />;
  if (chartId === "smart-alerts-homepage") return <SmartAlertsHomepage onOpenImage={onOpenImage} />;
  if (chartId === "uwork-personas") return <UWorkPersonas />;
  if (chartId === "uwork-ideation") return <UWorkIdeation onOpenImage={onOpenImage} />;
  if (chartId === "uwork-photo") return <UWorkPhotoFeature onOpenImage={onOpenImage} />;
  return null;
}

const problemColumns = [
  {
    title: "Search & Navigation Friction",
    theme: "Alerts are hard to find and manage",
    color: "#5B6CF6",
    insights: [
      "SR using Ctrl+F that takes ~20 minutes to find a search",
      "If the search isn't visible in preview, Ctrl+F won't catch it",
      "No way to find it aside from manually checking each one",
      '"All Alerts" category would be too crowded',
    ],
    patterns: [
      "CRUD table lacks scalable search & filtering",
      "Visibility hierarchy issues",
      "Navigation doesn't match workflow mental model",
    ],
  },
  {
    title: "Recipient Limit Constraints",
    theme: "System limits create operational complexity",
    color: "#8B5CF6",
    insights: [
      "10-recipient limit forces duplicate alerts",
      "Multiple alerts created for same search due to recipient cap",
      "Backend architecture built around hard limits",
      "Increasing limits has heavy backend implications",
      "Decision historically constrained scalability",
    ],
    patterns: [
      "Artificial limits create alert duplication",
      "Scalability problem, not UX surface problem",
      "Structural tech debt impacts experience",
    ],
  },
  {
    title: "External Email Management Issues",
    theme: "External users are hard to manage",
    color: "#10B981",
    insights: [
      "No filtering for external emails",
      "External emails must be added a few at a time",
      "No stored list of all external users",
      "Validation confusion (limit vs format first?)",
      "Email truncation makes visibility difficult",
    ],
    patterns: [
      "External users treated differently",
      "No scalable filtering model",
    ],
  },
  {
    title: "Bulk Alert Creation",
    theme: "Multi-alert creation is common for search-based alerts",
    color: "#F97316",
    insights: [
      "Bulk creation needed for launches & crisis monitoring",
      "New search often requires multiple alerts",
      "Most common alerts: Spike Detection & Top Reach",
      "Bulk creation means search-based alerts only",
      "Extreme case: hundreds of alerts took ~1.5 days, ~7 people",
    ],
    patterns: [
      "Search based alerts lacks bulk creation option",
      "Reduce Sales operational overhead",
    ],
  },
];

function WorkshopOutcome() {
  const columns = [
    {
      title: "Simplifying the Alert Ecosystem",
      theme: "Structural complexity drives user friction",
      color: "#4A6CF7",
      dotColor: "#4A6CF7",
      sections: [
        {
          label: "Workshop Alignment",
          items: [
            "Structural complexity identified as primary friction driver",
            "Too many alert types create decision fatigue",
            "Feature-heavy model increases cognitive load",
            "Alert system does not align with user intent",
            "Configurability valued over proliferation",
          ],
        },
        {
          label: "Strategic Direction",
          items: [
            "Reduce number of alert types",
            "Shift to use-case-driven architecture",
            "Increase flexibility within fewer core alert models",
            "Simplify mental model across creation & management",
          ],
        },
      ],
    },
    {
      title: "Consolidation & Retirement Opportunities",
      theme: "Overlap and redundancy reduce clarity",
      color: "#7C3AED",
      dotColor: "#7C3AED",
      sections: [
        {
          label: "Workshop Alignment",
          items: [
            "Alert types overlap in functionality",
            "Usage data used to assess consolidation risk",
            "Backend implications evaluated for each merge",
            "Low-adoption alerts lack clear value",
            "High-usage alerts require careful transition",
          ],
        },
        {
          label: "Strategic Direction",
          items: [
            "Pilot low-risk merges (Industry + Company Events)",
            "Phase evolution of high-usage alerts (Every Mention + Spike Detection)",
            "Retire or absorb low-adoption alerts",
            "Reduce system redundancy through structured consolidation",
          ],
        },
      ],
    },
    {
      title: "Principles for the Future Alert Framework",
      theme: "Align system evolution with user intent",
      color: "#0F766E",
      dotColor: "#0F766E",
      sections: [
        {
          label: "Workshop Alignment",
          items: [
            "System currently structured around feature categories",
            "Users think in goals, not alert types",
            "Alert fatigue linked to volume & unclear thresholds",
            "Low-usage alerts require careful transition",
            "Need for a guiding framework",
          ],
        },
        {
          label: "Strategic Direction",
          items: [
            "Start with user intent, not alert type",
            "Favor configurability over proliferation",
            "Reduce cognitive load at every decision point",
            "Introduce thresholds & AI summaries to manage fatigue",
            "Maintain user trust during phased evolution",
          ],
        },
      ],
    },
    {
      title: "Prioritized Roadmap",
      theme: "Balance immediate impact with long-term transformation",
      color: "#EA580C",
      dotColor: "#EA580C",
      sections: [
        {
          label: "Quick Wins",
          items: [
            "Reduce alert creation steps",
            "Improve terminology and clarity",
            "Surface most-used alerts contextually",
            "Improve feedback after alert creation",
          ],
        },
        {
          label: "Strategic Initiatives",
          items: [
            "Redesign alert architecture around use cases",
            "Introduce threshold customization",
            "Implement AI-assisted recommendations",
            "Consolidate overlapping alert types via phased rollout",
          ],
        },
        {
          label: "Longer-Term Initiatives",
          items: [
            "Redesign alert architecture around use cases",
          ],
        },
      ],
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-2">
      {columns.map((col) => (
        <div
          key={col.title}
          className="rounded-2xl overflow-hidden flex flex-col"
          style={{ border: `1px solid ${col.color}30`, background: `${col.color}08` }}
        >
          {/* Header */}
          <div
            className="px-4 py-4"
            style={{ background: col.color }}
          >
            <div className="font-semibold text-white text-sm leading-snug mb-1">{col.title}</div>
            <div className="text-white/80 text-xs italic leading-snug">{col.theme}</div>
          </div>
          {/* Sections */}
          <div className="flex flex-col gap-0 flex-1 p-4 space-y-4">
            {col.sections.map((sec) => (
              <div key={sec.label}>
                <div className="text-xs font-semibold text-foreground/80 mb-2">{sec.label}</div>
                <ul className="space-y-1.5">
                  {sec.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-foreground/70 leading-snug">
                      <span
                        className="mt-1 shrink-0 size-1.5 rounded-full"
                        style={{ background: col.color }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function ResearchUserInterviews() {
  const cards = [
    {
      title: "Reduce configuration friction",
      items: [
        "Pre-select common defaults (email delivery)",
        "Clarify saved search dependency during entry points",
        "Simplify category navigation and visibility",
      ],
    },
    {
      title: "Improve mental model alignment",
      items: [
        "Harmonize Smart Alerts and System Alerts structure",
        "Use clearer terminology and grouping",
        "Provide contextual guidance for alert types",
      ],
    },
    {
      title: "Increase system transparency and feedback",
      items: [
        "Clearer processing states during bulk creation",
        "Immediate confirmation of successful alert creation",
        "Better error handling visibility",
      ],
    },
    {
      title: "Support real workflows, not just alert mechanics",
      items: [
        "Allow easier editing and lifecycle management",
        "Provide bulk operations where meaningful",
        "Support event-based monitoring patterns",
      ],
    },
    {
      title: "Introduce reporting and sharing capabilities",
      items: [
        "Export charts and metrics directly from the platform",
        "Generate presentation-ready visuals",
        "Enable quick executive brief preparation",
      ],
    },
  ];

  return (
    <Reveal>
      <div className="mt-2 space-y-4">
        <p className="text-xs uppercase tracking-[0.2em] font-medium text-accent">Recommendations</p>
        <div className="grid grid-cols-3 gap-4">
          {cards.slice(0, 3).map((card) => (
            <div key={card.title} className="rounded-xl overflow-hidden flex flex-col h-full">
              <div className="px-5 py-4" style={{ background: "var(--teal)" }}>
                <p className="text-sm font-semibold text-white leading-snug">{card.title}</p>
              </div>
              <div className="px-5 py-4 space-y-2.5 flex-1" style={{ background: "color-mix(in oklab, var(--teal) 10%, white)" }}>
                {card.items.map((item) => (
                  <div key={item} className="flex gap-2.5 text-sm leading-snug" style={{ color: "var(--teal)" }}>
                    <span className="mt-1.5 shrink-0 size-1.5 rounded-full" style={{ background: "var(--teal)" }} />
                    <span className="text-foreground/75">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-4">
          {cards.slice(3).map((card) => (
            <div key={card.title} className="rounded-xl overflow-hidden flex flex-col h-full">
              <div className="px-5 py-4" style={{ background: "var(--teal)" }}>
                <p className="text-sm font-semibold text-white leading-snug">{card.title}</p>
              </div>
              <div className="px-5 py-4 space-y-2.5" style={{ background: "color-mix(in oklab, var(--teal) 10%, white)" }}>
                {card.items.map((item) => (
                  <div key={item} className="flex gap-2.5 text-sm leading-snug">
                    <span className="mt-1.5 shrink-0 size-1.5 rounded-full" style={{ background: "var(--teal)" }} />
                    <span className="text-foreground/75">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

function ResearchPeerReview() {
  const goals = [
    "Identify usability issues in alert creation flows across multiple entry points",
    "Validate clarity of configurations and terminology",
    "Evaluate bulk creation behaviour and system feedback states",
    "Discover inconsistencies between Explore-based and Alerts-page experiences",
    "Identify opportunities to simplify navigation and reduce confusion",
  ];
  const findings = [
    "Overall usability was perceived as clean and intuitive, but interaction inconsistencies created friction.",
    "Pre-selected alert types caused mixed reactions — helpful in context, confusing when unexpected.",
    "Navigation between Explore and Alerts contexts introduced cognitive load due to inconsistent system behaviour.",
    "Delivery configuration lacked clear defaults, increasing decision friction.",
    "System feedback states (processing, loading, counts) created uncertainty about whether actions succeeded.",
    "Structural differences between Smart Alerts and System Alerts contributed to mental model confusion.",
  ];
  const strengths = [
    "Alert configuration structure was generally clear and logical.",
    "Examples and previews were highly valued for understanding outcomes.",
    "Bulk creation concept was well understood and perceived as valuable.",
    "Visual hierarchy and layout were considered clean and modern.",
  ];
  const recommendations = [
    "Standardise preselection logic across entry points.",
    "Keep users in context — prioritise modal overlays over navigation jumps.",
    "Clarify Smart vs System Alerts mental model through clearer grouping or labelling.",
    "Replace informational alert banners with more appropriate descriptive components.",
    "Improve discoverability of alert categories (e.g., tab visibility).",
  ];

  return (
    <div className="space-y-6 mt-2">
      <Reveal>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="rounded-2xl p-6 space-y-3" style={{ background: "var(--surface)" }}>
            <p className="text-xs uppercase tracking-[0.2em] font-medium text-accent">Goals</p>
            <ul className="space-y-2.5">{goals.map(g => <li key={g} className="flex gap-2.5 text-sm text-foreground/75 leading-snug"><span className="mt-1.5 shrink-0 size-1.5 rounded-full bg-primary/40" />{g}</li>)}</ul>
          </div>
          <div className="rounded-2xl p-6 space-y-3" style={{ background: "color-mix(in oklab, var(--teal) 8%, white)" }}>
            <p className="text-xs uppercase tracking-[0.2em] font-medium" style={{ color: "var(--teal)" }}>Key Findings</p>
            <ul className="space-y-2.5">{findings.map(f => <li key={f} className="flex gap-2.5 text-sm text-foreground/75 leading-snug"><span className="mt-1.5 shrink-0 size-1.5 rounded-full" style={{ background: "var(--teal)", opacity: 0.6 }} />{f}</li>)}</ul>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="rounded-2xl p-6 space-y-3" style={{ background: "color-mix(in oklab, var(--gold) 28%, white)" }}>
            <p className="text-xs uppercase tracking-[0.2em] font-medium text-primary">Strengths Observed</p>
            <ul className="space-y-2.5">{strengths.map(s => <li key={s} className="flex gap-2.5 text-sm text-foreground/75 leading-snug"><span className="mt-1.5 shrink-0 size-1.5 rounded-full bg-accent/60" />{s}</li>)}</ul>
          </div>
          <div className="rounded-2xl p-6 space-y-3" style={{ background: "color-mix(in oklab, var(--plum) 6%, white)" }}>
            <p className="text-xs uppercase tracking-[0.2em] font-medium text-primary">Recommendations</p>
            <ul className="space-y-2.5">{recommendations.map(r => <li key={r} className="flex gap-2.5 text-sm text-foreground/75 leading-snug"><span className="mt-1.5 shrink-0 size-1.5 rounded-full bg-primary/30" />{r}</li>)}</ul>
          </div>
        </div>
      </Reveal>
    </div>
  );
}

function ResearchPriorityMatrix() {
  type NoteColor = "blue" | "green" | "gold";
  const notes: { text: string; x: number; y: number; color: NoteColor }[] = [
    { text: "Have AI-powered alert creation recommendations based off company, industry, and firmographic information", x: 72, y: 8, color: "gold" },
    { text: "Add frequency customization for every mention alerts", x: 50, y: 16, color: "blue" },
    { text: "Start with Use Case not Alert Type", x: 50, y: 34, color: "gold" },
    { text: "Dedicated area to review alerts", x: 16, y: 43, color: "green" },
    { text: "Use a modal or dropdown in context", x: 27, y: 43, color: "green" },
    { text: "Simplify / redesign alert emails to show main reason for alert", x: 46, y: 41, color: "blue" },
    { text: "Update and add AI summaries", x: 62, y: 41, color: "green" },
    { text: "Add AI summarization to more alert types", x: 73, y: 41, color: "green" },
    { text: "Add additional data such as when alert was last sent", x: 14, y: 61, color: "green" },
    { text: "Rename alerts to make more sense to users", x: 26, y: 61, color: "gold" },
    { text: "More consistent UI", x: 46, y: 58, color: "blue" },
    { text: "Let users know when an error occurs", x: 61, y: 63, color: "green" },
    { text: "Improve error notification", x: 72, y: 63, color: "blue" },
    { text: "Reduce number of steps", x: 82, y: 63, color: "blue" },
    { text: "Update sender names from generic Meltwater Alerts to specific alert type", x: 61, y: 78, color: "green" },
    { text: "Update email subject lines", x: 76, y: 78, color: "green" },
  ];

  const colors: Record<NoteColor, { bg: string; border: string; text: string }> = {
    blue:  { bg: "#dbeafe", border: "#93c5fd", text: "#1e3a5f" },
    green: { bg: "#dcfce7", border: "#86efac", text: "#14532d" },
    gold:  { bg: "#fef9c3", border: "#fde047", text: "#713f12" },
  };

  return (
    <Reveal>
      <div className="mt-6 rounded-2xl overflow-hidden" style={{ boxShadow: "var(--shadow-card)", background: "white" }}>
        {/* Legend */}
        <div className="flex gap-6 px-6 pt-5 pb-2">
          {(["blue", "green", "gold"] as NoteColor[]).map(c => (
            <div key={c} className="flex items-center gap-2">
              <div className="size-3 rounded-sm border" style={{ background: colors[c].bg, borderColor: colors[c].border }} />
              <span className="text-xs text-foreground/50">{c === "blue" ? "Feature / Implementation" : c === "green" ? "Usability / Clarity" : "Strategic / Research"}</span>
            </div>
          ))}
        </div>
        {/* Matrix */}
        <div className="relative mx-6 mb-6" style={{ paddingBottom: "80%" }}>
          <div className="absolute inset-0">
            {/* Background quadrant tints */}
            <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 pointer-events-none">
              <div style={{ background: "rgba(239,235,248,0.35)" }} />
              <div style={{ background: "rgba(236,253,245,0.35)" }} />
              <div style={{ background: "rgba(255,255,255,0.1)" }} />
              <div style={{ background: "rgba(214,179,106,0.08)" }} />
            </div>
            {/* Axes */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 bottom-0 left-1/2 w-px" style={{ background: "rgba(0,0,0,0.12)" }} />
              <div className="absolute left-0 right-0 top-1/2 h-px" style={{ background: "rgba(0,0,0,0.12)" }} />
            </div>
            {/* Axis labels */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-xs font-semibold text-white" style={{ background: "#4A90D9" }}>High Effort</div>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-xs font-semibold text-white" style={{ background: "#4A90D9" }}>Low Effort</div>
            <div className="absolute top-1/2 left-3 -translate-y-1/2 px-3 py-1.5 rounded-full text-xs font-semibold text-white" style={{ background: "#E8750A" }}>Low User Impact</div>
            <div className="absolute top-1/2 right-3 -translate-y-1/2 px-3 py-1.5 rounded-full text-xs font-semibold text-white" style={{ background: "#E8750A" }}>High User Impact</div>
            {/* Quadrant corner labels */}
            <div className="absolute top-8 left-4 text-xs text-foreground/30 font-medium border border-border/40 rounded px-2 py-1">Not Now</div>
            <div className="absolute top-8 right-4 text-xs text-foreground/30 font-medium border border-border/40 rounded px-2 py-1">Major Projects</div>
            <div className="absolute bottom-8 left-4 text-xs text-foreground/30 font-medium border border-border/40 rounded px-2 py-1">Nice to Have</div>
            <div className="absolute bottom-8 right-4 text-xs text-foreground/30 font-medium border border-border/40 rounded px-2 py-1">Quick Wins</div>
            {/* Notes */}
            {notes.map((n) => (
              <div
                key={n.text}
                className="absolute rounded-lg px-2 py-1.5 text-[10px] leading-tight border shadow-sm"
                style={{
                  left: `${n.x}%`,
                  top: `${n.y}%`,
                  transform: "translate(-50%, 0)",
                  width: "14%",
                  minWidth: "88px",
                  background: colors[n.color].bg,
                  borderColor: colors[n.color].border,
                  color: colors[n.color].text,
                }}
              >
                {n.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

function ResearchExpertRecommendations() {
  const cards = [
    {
      title: "Simplify Alert Creation",
      items: [
        "Reduce the number of steps required (target: 3–5 steps)",
        "Emphasize common configuration patterns across alert types",
        "Provide a quick-create flow with optional advanced configuration",
        "Reorder fields to prioritise required information and improve proximity (delivery method + recipients)",
      ],
    },
    {
      title: "Improve System Feedback & Confidence",
      items: [
        "Clearly communicate when alerts are created, processing, or fail",
        "Provide stronger confirmation states and persistent indicators",
        "Add preview examples before saving alerts",
        "Clarify thresholds and trigger logic for alert types",
      ],
    },
    {
      title: "Make Alert Selection Easier",
      items: [
        "Reduce the number of alert types or consolidate overlapping ones",
        "Start with user goals or use cases instead of alert taxonomy",
        "Highlight most commonly used alerts in context",
        "Provide AI-assisted recommendations based on user behaviour or company data",
      ],
    },
    {
      title: "Improve Alert Consumption & Interpretation",
      items: [
        "Differentiate alert emails with clearer subject lines and visual hierarchy",
        "Highlight key insights visually (spikes, sentiment shifts)",
        "Improve graph readability and contrast",
        "Surface the primary reason the alert triggered",
      ],
    },
    {
      title: "Reduce Workflow Disruptions",
      items: [
        "Ensure consistent navigation patterns across entry points",
        "Maintain user context when exiting or completing flows",
        "Standardise bell icon behaviour and interactions",
      ],
    },
    {
      title: "Improve Findability & Management",
      items: [
        "Introduce robust search within the alerts CRUD table",
        "Enable filtering by recipients (including external users)",
        "Improve visibility of truncated search names and alert associations",
      ],
    },
    {
      title: "Quick Wins Identified",
      items: [
        "Pre-populate selections only when intentional and clearly indicate defaults",
        "Improve email subject clarity and sender names",
        "Provide clearer error messaging",
        "Standardise UI terminology and labels",
        "Prioritise critical configuration information above the fold",
      ],
    },
    {
      title: "Strategic Opportunities",
      items: [
        "AI-powered alert creation recommendations",
        "AI summaries across the alert lifecycle",
        "Frequency customisation for high-volume alerts",
        "Use-case-driven alert framework (\"What / When / How\" model)",
        "Redesigned alert email architecture focused on actionable insights",
      ],
    },
  ];

  const headerBg = "var(--teal)";
  const bodyBg = "color-mix(in oklab, var(--teal) 10%, white)";

  return (
    <Reveal>
      <div className="space-y-4 mt-2">
        <p className="text-xs uppercase tracking-[0.2em] font-medium" style={{ color: "var(--teal)" }}>Recommendations</p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map((card) => (
            <div key={card.title} className="rounded-xl overflow-hidden flex flex-col h-full">
              <div className="px-4 py-3" style={{ background: headerBg }}>
                <p className="text-xs font-semibold text-white leading-snug">{card.title}</p>
              </div>
              <div className="px-4 py-3 space-y-2 flex-1" style={{ background: bodyBg }}>
                {card.items.map((item) => (
                  <div key={item} className="flex gap-2 text-xs text-foreground/75 leading-snug">
                    <span className="mt-1.5 shrink-0 size-1.5 rounded-full" style={{ background: "var(--teal)", opacity: 0.7 }} />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

function ResearchExpertReview() {
  const goals = [
    "Identify usability and workflow friction across the full alert lifecycle (create → manage → receive → interpret)",
    "Evaluate consistency and clarity across entry points and configurations",
    "Assess confidence signals and system feedback when alerts are created or triggered",
    "Identify opportunities to simplify alert selection and reduce cognitive overload",
    "Determine areas where alerts could be consolidated or clarified",
  ];
  const findings = [
    "The most significant issues occur not during creation, but when users receive and interpret alerts.",
    "Users lack confidence alerts are functioning correctly due to weak feedback and unclear processing states.",
    "Navigation and workflows are inconsistent across entry points, creating mental overhead.",
    "Alert terminology relies heavily on internal jargon rather than user language.",
    "Email notifications are cognitively overloaded and hard to distinguish at a glance.",
    "Inconsistent UI patterns (bell icon behaviour, dropdown usage, field placement) violate expectations.",
    "Critical configuration details often appear below the fold while secondary settings are elevated.",
    "Absence of previews and guidance increases uncertainty throughout setup.",
    "Finding and managing existing alerts is inefficient due to weak search and cluttered lists.",
  ];

  return (
    <div className="space-y-6 mt-2">
      <Reveal>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="rounded-2xl p-6 space-y-3" style={{ background: "var(--surface)" }}>
            <p className="text-xs uppercase tracking-[0.2em] font-medium text-accent">Goals</p>
            <ul className="space-y-2.5">{goals.map(g => <li key={g} className="flex gap-2.5 text-sm text-foreground/75 leading-snug"><span className="mt-1.5 shrink-0 size-1.5 rounded-full bg-primary/40" />{g}</li>)}</ul>
          </div>
          <div className="rounded-2xl p-6 space-y-3" style={{ background: "color-mix(in oklab, var(--teal) 8%, white)" }}>
            <p className="text-xs uppercase tracking-[0.2em] font-medium" style={{ color: "var(--teal)" }}>Key Findings</p>
            <ul className="space-y-2.5">{findings.map(f => <li key={f} className="flex gap-2.5 text-sm text-foreground/75 leading-snug"><span className="mt-1.5 shrink-0 size-1.5 rounded-full" style={{ background: "var(--teal)", opacity: 0.6 }} />{f}</li>)}</ul>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className="rounded-2xl p-6 space-y-3" style={{ background: "color-mix(in oklab, var(--plum) 6%, white)" }}>
          <p className="text-xs uppercase tracking-[0.2em] font-medium text-primary">Cross-Functional Synthesis Exercise</p>
          <p className="text-sm text-foreground/75 leading-relaxed">After completing the expert review, we facilitated a working session with Research and Product to translate findings into actionable direction. Participants generated solution ideas — some pre-seeded with research recommendations — then collaboratively mapped them to the core pain points identified in the evaluation. The exercise helped us cluster themes, distinguish quick wins from structural opportunities, and align on a simplified, use-case-driven alert framework.</p>
        </div>
      </Reveal>
      <ResearchPriorityMatrix />
      <ResearchExpertRecommendations />
    </div>
  );
}

function ResearchSurvey({ onOpenImage }: { onOpenImage: OpenImage }) {
  const goals = [
    "Identify user pain points",
    "Discover which Smart Alerts are most frequently used and the primary use cases they support",
    "Understand the perceived usefulness of alerts",
    "Determine whether any alerts could be consolidated",
  ];
  const findings = [
    "Users experience significant friction due to alert overload and limited control.",
    "Users want greater flexibility, control, and transparency in how alerts are triggered and configured.",
    "Brand monitoring (68%) and crisis preparation (57%) are the top use cases, with Every Mention and Spike Detection serving as the primary supporting alerts.",
    "The highest priority for improvements is ensuring content accuracy (25%), followed by optimising alert thresholds (18%).",
    "Many alert types are underutilised due to lack of relevance or user understanding.",
    "64% of users reported not using certain alerts because they do not apply to their workflow — not because the alerts themselves are ineffective.",
  ];

  const slides = [surveySlide1, surveySlide2, surveySlide3, surveySlide4];

  return (
    <div className="space-y-6 mt-2">
      <div className="grid sm:grid-cols-2 gap-6">
        <Reveal>
          <div className="rounded-2xl p-7 h-full space-y-4" style={{ background: "var(--surface)" }}>
            <p className="text-xs uppercase tracking-[0.2em] font-medium text-accent">Goals</p>
            <ul className="space-y-3">
              {goals.map((g) => (
                <li key={g} className="flex gap-3 text-sm text-foreground/80 leading-snug">
                  <span className="mt-1.5 shrink-0 size-1.5 rounded-full bg-primary/40" />
                  {g}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal>
          <div className="rounded-2xl p-7 h-full space-y-4" style={{ background: "color-mix(in oklab, var(--teal) 8%, var(--ivory))" }}>
            <p className="text-xs uppercase tracking-[0.2em] font-medium" style={{ color: "var(--teal)" }}>Key Findings</p>
            <ul className="space-y-3">
              {findings.map((f) => (
                <li key={f} className="flex gap-3 text-sm text-foreground/80 leading-snug">
                  <span className="mt-1.5 shrink-0 size-1.5 rounded-full" style={{ background: "var(--teal)", opacity: 0.6 }} />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {slides.map((src, i) => (
          <ClickableImage key={i} src={src} alt={`Survey slide ${i + 1}`} group={slides} index={i} onOpenImage={onOpenImage} />
        ))}
      </div>
      <Reveal>
        <div className="rounded-2xl p-7 space-y-4" style={{ background: "color-mix(in oklab, var(--plum) 6%, var(--ivory))" }}>
          <p className="text-xs uppercase tracking-[0.2em] font-medium text-accent">Recommendations</p>
          <ul className="space-y-3">
            {[
              "Provide fewer alert types with greater customization and control.",
              "Reduce overlap by consolidating similar alert types.",
              "Allow users to manage alert triggers through threshold settings or batching options.",
              "Make alerts more digestible by introducing AI summaries and improving existing explanations to clarify value.",
            ].map((r) => (
              <li key={r} className="flex gap-3 text-sm text-foreground/80 leading-snug">
                <span className="mt-1.5 shrink-0 size-1.5 rounded-full bg-primary/40" />
                {r}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </div>
  );
}

function ResearchMethods() {
  const methods = [
    {
      title: "Surveys & Usability Studies",
      subtitle: "Conducted with",
      highlight: "Research Team",
      color: "#264653",
      icon: (
        <svg viewBox="0 0 56 56" fill="none" className="w-12 h-12">
          <rect x="8" y="6" width="24" height="30" rx="2" fill="white" fillOpacity="0.25" stroke="white" strokeWidth="1.5"/>
          <rect x="18" y="10" width="20" height="30" rx="2" fill="white" fillOpacity="0.15" stroke="white" strokeWidth="1.5"/>
          <line x1="12" y1="14" x2="20" y2="14" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
          <polyline points="12,19 14,21 18,17" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="12" y1="25" x2="20" y2="25" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
          <polyline points="12,30 14,32 18,28" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <rect x="30" y="28" width="16" height="20" rx="2" fill="white" fillOpacity="0.2" stroke="white" strokeWidth="1.5"/>
          <line x1="33" y1="33" x2="43" y2="33" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
          <line x1="33" y1="37" x2="43" y2="37" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
          <line x1="33" y1="41" x2="39" y2="41" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
        </svg>
      ),
    },
    {
      title: "User & Sales Rep Interviews",
      subtitle: "Led by",
      highlight: "Product Manager & Me",
      color: "#D6B36A",
      icon: (
        <svg viewBox="0 0 56 56" fill="none" className="w-12 h-12">
          <circle cx="20" cy="20" r="8" fill="white" fillOpacity="0.2" stroke="white" strokeWidth="1.5"/>
          <circle cx="36" cy="20" r="8" fill="white" fillOpacity="0.15" stroke="white" strokeWidth="1.5"/>
          <path d="M14 20 Q14 14 20 14 Q26 14 26 20 Q26 26 20 26 Q17 26 15 24 L12 26 Z" fill="white" fillOpacity="0.3" stroke="white" strokeWidth="1.2"/>
          <path d="M30 20 Q30 14 36 14 Q42 14 42 20 Q42 26 36 26 Q33 26 31 24 L28 26 Z" fill="white" fillOpacity="0.2" stroke="white" strokeWidth="1.2"/>
          <line x1="16" y1="19" x2="24" y2="19" stroke="white" strokeWidth="1" strokeLinecap="round"/>
          <line x1="16" y1="22" x2="22" y2="22" stroke="white" strokeWidth="1" strokeLinecap="round"/>
          <line x1="32" y1="19" x2="40" y2="19" stroke="white" strokeWidth="1" strokeLinecap="round"/>
          <line x1="32" y1="22" x2="38" y2="22" stroke="white" strokeWidth="1" strokeLinecap="round"/>
          <path d="M14 38 Q14 32 20 32 Q26 32 28 36 Q30 32 36 32 Q42 32 42 38" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
        </svg>
      ),
    },
    {
      title: "Peer Design Reviews",
      subtitle: "(Self-Initiated)",
      highlight: "",
      color: "#264653",
      icon: (
        <svg viewBox="0 0 56 56" fill="none" className="w-12 h-12">
          <rect x="8" y="12" width="34" height="24" rx="3" fill="white" fillOpacity="0.2" stroke="white" strokeWidth="1.5"/>
          <rect x="12" y="16" width="26" height="16" rx="1" fill="white" fillOpacity="0.15"/>
          <line x1="16" y1="20" x2="34" y2="20" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
          <line x1="16" y1="24" x2="34" y2="24" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
          <line x1="16" y1="28" x2="26" y2="28" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
          <circle cx="38" cy="34" r="9" fill="white" fillOpacity="0.2" stroke="white" strokeWidth="1.5"/>
          <polyline points="34,34 37,37 43,31" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="25" y1="36" x2="25" y2="44" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="20" y1="44" x2="30" y2="44" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
    },
    {
      title: "Expert Heuristic Evaluations",
      subtitle: "by",
      highlight: "Research Specialists",
      color: "#4A365F",
      icon: (
        <svg viewBox="0 0 56 56" fill="none" className="w-12 h-12">
          <rect x="8" y="10" width="28" height="36" rx="3" fill="white" fillOpacity="0.2" stroke="white" strokeWidth="1.5"/>
          <polyline points="14,20 16,22 20,18" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="23" y1="20" x2="32" y2="20" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
          <polyline points="14,28 16,30 20,26" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="23" y1="28" x2="32" y2="28" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
          <polyline points="14,36 16,38 20,34" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="23" y1="36" x2="32" y2="36" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
          <circle cx="38" cy="36" r="7" fill="white" fillOpacity="0.15" stroke="white" strokeWidth="1.5"/>
          <circle cx="38" cy="36" r="3.5" fill="white" fillOpacity="0.25"/>
          <line x1="43" y1="41" x2="47" y2="45" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
    },
    {
      title: "Cross-Functional Workshop",
      subtitle: "With PM, Eng. Manager & Research Team",
      highlight: "",
      color: "#1a3540",
      dark: true,
      icon: (
        <svg viewBox="0 0 56 56" fill="none" className="w-12 h-12">
          <circle cx="18" cy="20" r="6" fill="white" fillOpacity="0.2" stroke="white" strokeWidth="1.5"/>
          <circle cx="32" cy="20" r="6" fill="white" fillOpacity="0.15" stroke="white" strokeWidth="1.5"/>
          <circle cx="25" cy="32" r="6" fill="white" fillOpacity="0.2" stroke="white" strokeWidth="1.5"/>
          <path d="M10 44 Q10 36 18 36 Q22 36 24 38 Q26 36 32 36 Q40 36 40 44" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
          <circle cx="44" cy="16" r="5" fill="#D6B36A" fillOpacity="0.9"/>
          <line x1="44" y1="12" x2="44" y2="20" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="40" y1="16" x2="48" y2="16" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
    },
  ];

  return (
    <Reveal>
      <div className="space-y-3 mt-2">
        {methods.map((m) => (
          <div
            key={m.title}
            className="flex items-center rounded-2xl overflow-hidden"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            {/* Coloured icon block */}
            <div
              className="shrink-0 w-24 h-20 flex items-center justify-center"
              style={{ background: m.color }}
            >
              {m.icon}
            </div>
            {/* Diagonal clip accent */}
            <div
              className="shrink-0 w-5 h-20"
              style={{
                background: `linear-gradient(to bottom right, ${m.color} 50%, transparent 50%)`,
              }}
            />
            {/* Text */}
            <div className="flex-1 px-6 py-4 bg-white">
              <p className="font-display text-lg text-primary leading-snug">{m.title}</p>
              <p className="text-sm text-foreground/60 mt-0.5">
                {m.subtitle}{" "}
                {m.highlight && (
                  <span className="font-medium" style={{ color: m.color === "#D6B36A" ? "#D6B36A" : m.color }}>
                    {m.highlight}
                  </span>
                )}
              </p>
            </div>
            {/* Trailing leaf */}
            <div
              className="shrink-0 w-6 h-20 mr-3"
              style={{
                background: `linear-gradient(to bottom left, ${m.color}30 50%, transparent 50%)`,
                borderRadius: "0 8px 8px 0",
              }}
            />
          </div>
        ))}
      </div>
    </Reveal>
  );
}

function SmartAlertsHomepage({ onOpenImage }: { onOpenImage: OpenImage }) {
  return (
    <div className="space-y-8">
      <Reveal>
        <div className="space-y-5 text-lg leading-[1.8] text-foreground/80">
          <p>The Alerts homepage required structural improvements. Previously, Smart Alerts and System Alerts were mixed together in a single list — causing confusion because System Alerts behave differently and are generated automatically, not by the user.</p>
          <p>The redesigned interface separated them into distinct tabs, reorganised alerts by type, and introduced a search feature to make large lists manageable at scale.</p>
        </div>
      </Reveal>
      <Reveal>
        <ClickableImage src={saAlertsPageChanges} alt="Smart Alerts Homepage redesign" onOpenImage={onOpenImage} />
      </Reveal>
      <Reveal>
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="rounded-2xl p-7 space-y-4" style={{ background: "var(--surface)" }}>
            <p className="text-xs uppercase tracking-[0.2em] font-medium text-accent">Trade-off</p>
            <ul className="space-y-3 text-foreground/80">
              <li className="flex gap-3"><span className="text-accent shrink-0 mt-1">•</span>Removed the infinite "All alerts" view</li>
              <li className="flex gap-3"><span className="text-accent shrink-0 mt-1">•</span>Replaced with a searchable, structured list</li>
            </ul>
          </div>
          <div className="rounded-2xl p-7 space-y-4" style={{ background: "var(--surface)" }}>
            <p className="text-xs uppercase tracking-[0.2em] font-medium text-accent">Outcome</p>
            <ul className="space-y-3 text-foreground/80">
              <li className="flex gap-3"><span className="text-accent shrink-0 mt-1">•</span>Faster alert retrieval</li>
              <li className="flex gap-3"><span className="text-accent shrink-0 mt-1">•</span>Better user control over large alert sets</li>
              <li className="flex gap-3"><span className="text-accent shrink-0 mt-1">•</span>Improved management efficiency</li>
            </ul>
          </div>
        </div>
      </Reveal>
    </div>
  );
}

function SmartAlertsSolution({ onOpenImage }: { onOpenImage: OpenImage }) {
  const images = [saAlertSelection, saViewExample];
  return (
    <div className="space-y-10">
      <Reveal>
        <div className="space-y-5 text-lg leading-[1.8] text-foreground/80">
          <p>Research consistently surfaced confusion around the Alert Picker. The page presented dense, lengthy descriptions for each alert type — forcing users to read through walls of text before making a decision. Critically, there was no way to preview what an alert would actually look like once created.</p>
          <p>Conversations with Sales representatives uncovered a different but related tension. Sales teams routinely create many alerts for the same search when setting up VIP client packages, while self-serve users typically create just a handful for their own monitoring. The same interface was expected to serve both extremes.</p>
        </div>
      </Reveal>
      <Reveal>
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="rounded-2xl p-7 space-y-4" style={{ background: "var(--surface)" }}>
            <p className="text-xs uppercase tracking-[0.2em] font-medium text-accent">User pain points</p>
            <ul className="space-y-3 text-foreground/80">
              <li className="flex gap-3"><span className="text-accent shrink-0 mt-1">•</span>Hard to distinguish between alert types</li>
              <li className="flex gap-3"><span className="text-accent shrink-0 mt-1">•</span>No preview of what an alert would look like</li>
            </ul>
          </div>
          <div className="rounded-2xl p-7 space-y-4" style={{ background: "var(--surface)" }}>
            <p className="text-xs uppercase tracking-[0.2em] font-medium text-accent">Sales tension</p>
            <ul className="space-y-3 text-foreground/80">
              <li className="flex gap-3"><span className="text-accent shrink-0 mt-1">•</span>Frequently create many alerts per search for VIP packages</li>
              <li className="flex gap-3"><span className="text-accent shrink-0 mt-1">•</span>Self-serve users create far fewer — speed vs. simplicity</li>
            </ul>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className="grid grid-cols-2 gap-4">
          {images.map((src, i) => (
            <ClickableImage key={i} src={src} alt={`Smart Alerts solution screen ${i + 1}`} group={images} index={i} onOpenImage={onOpenImage} />
          ))}
        </div>
      </Reveal>
      <Reveal>
        <div className="space-y-5">
          <h4 className="font-display text-xl text-primary">Resolving the Multi-Select Problem</h4>
          <p className="text-lg leading-[1.8] text-foreground/80">Rather than forcing a single creation flow to serve two very different workflows, we aligned functionality with context:</p>
          <ul className="space-y-2 text-lg text-foreground/80">
            <li className="flex gap-3"><span className="text-accent font-medium shrink-0">•</span><span><span className="font-medium text-foreground">Alert page</span> → Single alert creation (simpler for users)</span></li>
            <li className="flex gap-3"><span className="text-accent font-medium shrink-0">•</span><span><span className="font-medium text-foreground">Explore page</span> → Multi-alert creation (faster for Sales)</span></li>
          </ul>
          <p className="text-lg leading-[1.8] text-foreground/80">This preserved Sales efficiency without adding complexity for self-serve users.</p>
        </div>
      </Reveal>
      <Reveal>
        <ClickableImage src={saCreateAlert} alt="Create alert screen" onOpenImage={onOpenImage} />
      </Reveal>
    </div>
  );
}

function SmartAlertsProblemChart() {
  return (
    <Reveal>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mt-2">
        {problemColumns.map((col) => (
          <div key={col.title} className="flex flex-col gap-3">
            {/* Header */}
            <div className="rounded-xl p-4 text-white" style={{ background: col.color }}>
              <p className="font-semibold text-sm leading-snug">{col.title}</p>
              <p className="mt-1 text-xs opacity-80 italic leading-snug">Theme: {col.theme}</p>
            </div>

            {/* Raw Insights */}
            <div className="rounded-xl p-4 flex-1" style={{ background: "var(--surface)" }}>
              <p className="text-[0.65rem] uppercase tracking-[0.2em] font-semibold text-primary mb-3">Raw Insights</p>
              <ul className="space-y-2">
                {col.insights.map((item) => (
                  <li key={item} className="flex gap-2 text-xs text-foreground/75 leading-snug">
                    <span className="mt-1.5 shrink-0 size-1.5 rounded-full" style={{ background: col.color }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Pattern Identified */}
            <div className="rounded-xl p-4" style={{ background: `color-mix(in oklab, ${col.color} 10%, white)` }}>
              <p className="text-[0.65rem] uppercase tracking-[0.2em] font-semibold mb-3" style={{ color: col.color }}>Pattern Identified</p>
              <ul className="space-y-2">
                {col.patterns.map((item) => (
                  <li key={item} className="flex gap-2 text-xs leading-snug" style={{ color: `color-mix(in oklab, ${col.color} 60%, #333)` }}>
                    <span className="mt-1.5 shrink-0 size-1.5 rounded-full" style={{ background: col.color }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Reveal>
  );
}

function UWorkPersonas() {
  const personas = [
    {
      name: "Business Owner",
      avatar: uworkOwner,
      goals: [
        "Keep track of project progress",
        "Handle workers on multiple projects",
        "Keep track on payments",
      ],
    },
    {
      name: "Worker",
      avatar: uworkWorker,
      goals: [
        "Submit receipts for purchased materials",
        "Keep track on jobs",
        "Submit pictures of finished projects",
      ],
    },
  ];

  return (
    <Reveal>
      <div className="grid sm:grid-cols-2 gap-6 mt-2">
        {personas.map((p) => (
          <div
            key={p.name}
            className="rounded-2xl p-8 flex flex-col items-center text-center"
            style={{ background: "#b8cee0" }}
          >
            <img
              src={p.avatar}
              alt={p.name}
              className="w-36 h-36 object-contain mb-5 drop-shadow-sm"
            />
            <h4 className="font-display text-xl font-bold text-[#0f1839] mb-5">{p.name}</h4>
            <ul className="space-y-2.5 text-left w-full max-w-xs">
              {p.goals.map((g) => (
                <li key={g} className="flex gap-2.5 text-sm text-[#1a2a4a] leading-snug">
                  <span className="mt-1.5 shrink-0 size-1.5 rounded-full bg-[#0f1839]" />
                  {g}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Reveal>
  );
}


function ClickableImage({ src, alt, group, index = 0, onOpenImage }: { src: string; alt: string; group?: string[]; index?: number; onOpenImage: OpenImage }) {
  return (
    <button
      onClick={() => onOpenImage(group ?? [src], index)}
      className="group w-full text-left rounded-2xl overflow-hidden bg-white relative block"
      style={{ boxShadow: "var(--shadow-card)" }}
      aria-label="View full image"
    >
      <img src={src} alt={alt} className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.02]" />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 rounded-2xl flex items-center justify-center">
        <ZoomIn className="size-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg" />
      </div>
    </button>
  );
}

function UWorkPhotoFeature({ onOpenImage }: { onOpenImage: OpenImage }) {
  const photos = [uworkPhoto1, uworkPhoto2, uworkPhoto3];
  return (
    <Reveal>
      <div className="grid grid-cols-3 gap-4">
        {photos.map((src, i) => (
          <ClickableImage key={i} src={src} alt={`Photo feature screen ${i + 1}`} group={photos} index={i} onOpenImage={onOpenImage} />
        ))}
      </div>
    </Reveal>
  );
}

function UWorkIdeation({ onOpenImage }: { onOpenImage: OpenImage }) {
  return (
    <div className="space-y-8">
      <p className="text-lg leading-[1.8] text-foreground/80">
        I began with storyboarding to map both user journeys — the Business Owner who needs visibility across all projects, clients, workers, and financials, and the Worker who needs access limited to their own assigned tasks.
      </p>
      <Reveal>
        <ClickableImage src={uworkStoryboard} alt="uWork storyboard — Business Owner and Worker user journeys" onOpenImage={onOpenImage} />
      </Reveal>
      <p className="text-lg leading-[1.8] text-foreground/80">
        From there we moved into ideation. To start with we had three quite similar pages: Customers, Workers, and Projects. The main idea was to show three things: a picture, a title (either the name of the person or the project), and a summary.
      </p>
      <p className="text-lg leading-[1.8] text-foreground/80">
        When we put everything together, adjustments were needed. The Worker page became slightly different from the Customer page. The Project page changed the most — the project image needed to be larger so users could recognise it at a glance, the combination and length of information was different, and projects have statuses (planned, in progress, complete) that users need to sort by immediately.
      </p>
      <Reveal>
        <ClickableImage src={uworkIdeation} alt="uWork ideation — Customers, Workers, and Projects screens" onOpenImage={onOpenImage} />
      </Reveal>
      <Reveal>
        <div className="grid grid-cols-3 gap-4">
          {[
            { src: uworkCustomers, alt: "uWork Customers screen" },
            { src: uworkWorkers, alt: "uWork Workers screen" },
            { src: uworkProjects, alt: "uWork Projects screen" },
          ].map(({ src, alt }, i, arr) => (
            <ClickableImage key={alt} src={src} alt={alt} group={arr.map(a => a.src)} index={i} onOpenImage={onOpenImage} />
          ))}
        </div>
      </Reveal>
    </div>
  );
}

function VideoOverlay({ src, onClose }: { src: string | null; onClose: () => void }) {
  useEffect(() => {
    if (!src) return;
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [src, onClose]);

  return (
    <AnimatePresence>
      {src && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-16"
          style={{ background: "rgba(0,0,0,0.9)" }}
          onClick={onClose}
        >
          <button
            onClick={onClose}
            className="absolute top-5 right-5 size-10 rounded-full flex items-center justify-center transition-colors"
            style={{ background: "rgba(255,255,255,0.1)", color: "#fff" }}
            aria-label="Close"
          >
            <X className="size-5" />
          </button>
          <motion.video
            src={src}
            autoPlay
            loop
            muted
            playsInline
            controls
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.92, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-sm w-full rounded-2xl"
            style={{ boxShadow: "0 32px 80px rgba(0,0,0,0.6)" }}
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Lightbox({ state, onClose }: { state: { images: string[]; index: number } | null; onClose: () => void }) {
  const [idx, setIdx] = useState(0);
  const images = state?.images ?? [];
  const multi = images.length > 1;

  useEffect(() => { if (state) setIdx(state.index); }, [state]);

  const prev = useCallback(() => setIdx(i => (i - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() => setIdx(i => (i + 1) % images.length), [images.length]);

  useEffect(() => {
    if (!state) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [state, onClose, prev, next]);

  return (
    <AnimatePresence>
      {state && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10"
          style={{ background: "rgba(0,0,0,0.85)" }}
          onClick={onClose}
        >
          <button
            onClick={onClose}
            className="absolute top-5 right-5 size-10 rounded-full flex items-center justify-center transition-colors"
            style={{ background: "rgba(255,255,255,0.1)", color: "#fff" }}
            aria-label="Close"
          >
            <X className="size-5" />
          </button>

          {multi && (
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-4 md:left-8 size-11 rounded-full flex items-center justify-center transition-colors hover:bg-white/20"
              style={{ background: "rgba(255,255,255,0.1)", color: "#fff" }}
              aria-label="Previous"
            >
              <ChevronLeft className="size-6" />
            </button>
          )}

          <AnimatePresence mode="wait">
            <motion.img
              key={idx}
              src={images[idx]}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-full max-h-full rounded-xl object-contain"
              style={{ boxShadow: "0 32px 80px rgba(0,0,0,0.5)" }}
              onClick={(e) => e.stopPropagation()}
            />
          </AnimatePresence>

          {multi && (
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-4 md:right-8 size-11 rounded-full flex items-center justify-center transition-colors hover:bg-white/20"
              style={{ background: "rgba(255,255,255,0.1)", color: "#fff" }}
              aria-label="Next"
            >
              <ChevronRight className="size-6" />
            </button>
          )}

          {multi && (
            <div className="absolute bottom-6 flex gap-2" onClick={(e) => e.stopPropagation()}>
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  className="size-2 rounded-full transition-colors"
                  style={{ background: i === idx ? "#fff" : "rgba(255,255,255,0.35)" }}
                  aria-label={`Go to image ${i + 1}`}
                />
              ))}
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
