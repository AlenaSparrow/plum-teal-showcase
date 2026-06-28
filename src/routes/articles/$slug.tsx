import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import avLogoPng from "@/assets/av-logo.png";
import { articles, type Article, type ArticleSection } from "@/lib/articles";
import { Reveal } from "@/components/SectionReveal";

export const Route = createFileRoute("/articles/$slug")({
  head: ({ params }) => {
    const article = articles.find((a) => a.slug === params.slug);
    return {
      meta: [
        { title: article ? `Part ${article.part}: ${article.title} — Alena Vorobiev` : "Article — Alena Vorobiev" },
        { name: "description", content: article?.excerpt ?? "" },
      ],
      links: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
        { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500&family=Inter:wght@300;400;500;600&display=swap" },
      ],
    };
  },
  loader: ({ params }) => {
    const article = articles.find((a) => a.slug === params.slug);
    if (!article) throw notFound();
    return article;
  },
  component: ArticlePage,
});

function ArticlePage() {
  const article = Route.useLoaderData();
  const idx = articles.findIndex((a) => a.slug === article.slug);
  const prev = idx > 0 ? articles[idx - 1] : null;
  const next = idx < articles.length - 1 ? articles[idx + 1] : null;

  return (
    <div className="min-h-screen" style={{ background: "var(--ivory)" }}>
      <Nav />

      {/* Hero */}
      <div
        className="relative pt-32 pb-20 overflow-hidden"
        style={{ background: "linear-gradient(160deg, var(--surface) 0%, var(--ivory) 60%)" }}
      >
        <HeroIllustration part={article.part} />
        <div className="relative mx-auto max-w-3xl px-6 lg:px-10">
          <Reveal>
            <Link
              to="/articles"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="size-3.5" />
              All writing
            </Link>
            <div className="flex items-center gap-3 mb-5">
              <span className="text-xs tracking-[0.2em] uppercase font-medium" style={{ color: "var(--gold)" }}>
                Part {article.part} of {articles.length}
              </span>
              <span className="text-xs text-muted-foreground">·</span>
              <span className="text-xs text-muted-foreground">{article.readTime}</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary text-balance leading-tight">
              {article.title}
            </h1>
            <p className="mt-5 text-xl text-foreground/65 leading-relaxed max-w-2xl" style={{ fontFamily: "var(--font-display)" }}>
              {article.subtitle}
            </p>
          </Reveal>
        </div>
      </div>

      {/* Progress bar */}
      <ProgressLine total={articles.length} current={article.part} />

      {/* Article body */}
      <main className="mx-auto max-w-3xl px-6 lg:px-10 py-16">
        <div className="prose-article">
          {article.sections.map((section, i) => (
            <SectionBlock key={i} section={section} articlePart={article.part} sectionIndex={i} />
          ))}
        </div>
      </main>

      {/* Nav between parts */}
      <footer className="mx-auto max-w-3xl px-6 lg:px-10 pb-24">
        <div className="h-px mb-12" style={{ background: "linear-gradient(to right, transparent, var(--gold), transparent)" }} />
        <div className="flex items-center justify-between gap-8">
          {prev ? (
            <Link
              to="/articles/$slug"
              params={{ slug: prev.slug }}
              className="group flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
              <span>
                <span className="block text-xs uppercase tracking-widest mb-0.5" style={{ color: "var(--gold)" }}>Part {prev.part}</span>
                {prev.title}
              </span>
            </Link>
          ) : <div />}
          {next ? (
            <Link
              to="/articles/$slug"
              params={{ slug: next.slug }}
              className="group flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors text-right"
            >
              <span>
                <span className="block text-xs uppercase tracking-widest mb-0.5" style={{ color: "var(--gold)" }}>Part {next.part}</span>
                {next.title}
              </span>
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          ) : (
            <Link
              to="/articles"
              className="group flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <span>Back to all writing</span>
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          )}
        </div>
      </footer>
    </div>
  );
}

function SectionBlock({ section, articlePart, sectionIndex }: { section: ArticleSection; articlePart: number; sectionIndex: number }) {
  const delay = Math.min(sectionIndex * 0.04, 0.3);

  switch (section.type) {
    case "heading":
      return (
        <Reveal delay={delay}>
          <h2 className="font-display text-2xl md:text-3xl text-primary mt-14 mb-5 text-balance">
            {section.content}
          </h2>
        </Reveal>
      );

    case "subheading":
      return (
        <Reveal delay={delay}>
          <h3 className="font-display text-xl text-primary mt-10 mb-4">
            {section.content}
          </h3>
        </Reveal>
      );

    case "paragraph":
      return (
        <Reveal delay={delay}>
          <p className="text-foreground/80 leading-[1.85] mb-6 text-[1.0625rem]">
            {section.content}
          </p>
        </Reveal>
      );

    case "quote":
      return (
        <Reveal delay={delay}>
          <blockquote className="relative my-10 pl-8 pr-6 py-6 rounded-xl" style={{ background: "var(--surface)" }}>
            <div className="absolute left-0 top-6 bottom-6 w-1 rounded-full" style={{ background: "var(--gold)" }} />
            <p className="font-display text-xl md:text-2xl text-primary leading-relaxed italic">
              "{section.content}"
            </p>
            {section.attribution && (
              <cite className="mt-3 block text-sm text-muted-foreground not-italic">— {section.attribution}</cite>
            )}
          </blockquote>
        </Reveal>
      );

    case "list":
      return (
        <Reveal delay={delay}>
          <ul className="my-6 space-y-4">
            {section.items?.map((item, i) => (
              <li key={i} className="flex gap-4 text-[1.0625rem] text-foreground/80 leading-[1.85]">
                <span className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: "var(--gold)" }} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      );

    case "teaser":
      return (
        <Reveal delay={delay}>
          <div className="my-12 rounded-2xl px-8 py-7 border border-dashed" style={{ borderColor: "color-mix(in oklab, var(--gold) 50%, transparent)", background: "color-mix(in oklab, var(--gold) 5%, transparent)" }}>
            <div className="text-xs tracking-[0.2em] uppercase mb-3" style={{ color: "var(--gold)" }}>
              Up next
            </div>
            <p className="text-foreground/70 leading-relaxed">
              {section.content}
            </p>
          </div>
        </Reveal>
      );

    case "visual":
      return (
        <Reveal delay={delay}>
          <InlineVisual id={section.visualId ?? ""} />
        </Reveal>
      );

    default:
      return null;
  }
}

function InlineVisual({ id }: { id: string }) {
  if (id === "pipeline-flow") {
    const steps = [
      { label: "Lovable", sub: "Generate prototype", color: "var(--gold)" },
      { label: "GitHub", sub: "Host the code", color: "var(--plum)" },
      { label: "Claude Code", sub: "Iterate & refine", color: "var(--teal)" },
      { label: "Vercel", sub: "Deploy & host", color: "var(--plum)" },
    ];
    return (
      <div className="my-10 rounded-2xl p-8 overflow-x-auto" style={{ background: "var(--surface)" }}>
        <div className="text-xs tracking-[0.2em] uppercase mb-6 text-muted-foreground">The four-tool pipeline</div>
        <div className="flex items-center gap-0 min-w-max mx-auto w-fit">
          {steps.map((step, i) => (
            <div key={i} className="flex items-center">
              <div className="flex flex-col items-center gap-2">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-white text-xs font-medium shadow-sm"
                  style={{ background: step.color }}
                >
                  {i + 1}
                </div>
                <span className="text-sm font-medium text-primary whitespace-nowrap">{step.label}</span>
                <span className="text-xs text-muted-foreground whitespace-nowrap">{step.sub}</span>
              </div>
              {i < steps.length - 1 && (
                <div className="flex items-center mx-3 mb-8">
                  <div className="w-8 h-px" style={{ background: "var(--gold)" }} />
                  <div
                    className="w-0 h-0"
                    style={{
                      borderTop: "4px solid transparent",
                      borderBottom: "4px solid transparent",
                      borderLeft: "6px solid var(--gold)",
                    }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (id === "setup-steps") {
    const steps = [
      { label: "Connect GitHub to Lovable", done: true },
      { label: "Install Homebrew + Git via Terminal", done: true },
      { label: "Open project in Claude Code", done: true },
      { label: "Install front-end design skill", done: true },
      { label: "Run /init to set up context", done: true },
      { label: "Make repo public", done: true },
      { label: "Launch local preview", done: true },
    ];
    return (
      <div className="my-10 rounded-2xl p-8" style={{ background: "var(--surface)" }}>
        <div className="text-xs tracking-[0.2em] uppercase mb-6 text-muted-foreground">Setup checklist</div>
        <ul className="space-y-3">
          {steps.map((step, i) => (
            <li key={i} className="flex items-center gap-4">
              <div
                className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center"
                style={{ background: "color-mix(in oklab, var(--gold) 20%, transparent)", border: "1.5px solid var(--gold)" }}
              >
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M2 5 L4 7 L8 3" stroke="var(--plum)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="text-sm text-foreground/80">{step.label}</span>
              <div className="flex-1 h-px opacity-20" style={{ background: "var(--plum)" }} />
              <span className="text-xs" style={{ color: "var(--gold)" }}>✓</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  if (id === "cold-start-problem") {
    return (
      <div className="my-10 rounded-2xl p-8 overflow-x-auto" style={{ background: "var(--surface)" }}>
        <div className="text-xs tracking-[0.2em] uppercase mb-6 text-muted-foreground">What was actually happening</div>
        <div className="flex flex-col gap-6">
          {/* Before */}
          <div>
            <div className="text-xs font-medium mb-3 text-muted-foreground uppercase tracking-wider">Before — SSR on every request</div>
            <div className="flex items-center gap-2 flex-wrap">
              {[
                { label: "Request arrives", bg: "var(--surface)", border: "var(--border)" },
                { label: "Cold start", bg: "color-mix(in oklab, var(--gold) 15%, transparent)", border: "var(--gold)" },
                { label: "Load 1MB Three.js", bg: "color-mix(in oklab, #e55 15%, transparent)", border: "#e55" },
                { label: "10s timeout →", bg: "color-mix(in oklab, #e55 20%, transparent)", border: "#e55" },
                { label: "504 error", bg: "#e55", border: "#e55", textColor: "white" },
              ].map((node, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div
                    className="px-3 py-2 rounded-lg text-xs font-medium whitespace-nowrap"
                    style={{ background: node.bg, border: `1px solid ${node.border}`, color: node.textColor ?? "var(--foreground)" }}
                  >
                    {node.label}
                  </div>
                  {i < 4 && <span className="text-muted-foreground text-xs">→</span>}
                </div>
              ))}
            </div>
          </div>
          {/* Divider */}
          <div className="h-px" style={{ background: "color-mix(in oklab, var(--gold) 30%, transparent)" }} />
          {/* After */}
          <div>
            <div className="text-xs font-medium mb-3 text-muted-foreground uppercase tracking-wider">After — pre-rendered static HTML</div>
            <div className="flex items-center gap-2 flex-wrap">
              {[
                { label: "Request arrives", bg: "var(--surface)", border: "var(--border)" },
                { label: "CDN serves HTML", bg: "color-mix(in oklab, var(--teal) 15%, transparent)", border: "var(--teal)" },
                { label: "200 OK", bg: "var(--teal)", border: "var(--teal)", textColor: "white" },
              ].map((node, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div
                    className="px-3 py-2 rounded-lg text-xs font-medium whitespace-nowrap"
                    style={{ background: node.bg, border: `1px solid ${node.border}`, color: node.textColor ?? "var(--foreground)" }}
                  >
                    {node.label}
                  </div>
                  {i < 2 && <span className="text-muted-foreground text-xs">→</span>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (id === "prompt-quality") {
    return (
      <div className="my-10 rounded-2xl p-8" style={{ background: "var(--surface)" }}>
        <div className="text-xs tracking-[0.2em] uppercase mb-6 text-muted-foreground">Prompt quality — what the difference looks like</div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-xl p-5 border" style={{ borderColor: "color-mix(in oklab, #e55 40%, transparent)", background: "color-mix(in oklab, #e55 5%, transparent)" }}>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-5 h-5 rounded-full flex items-center justify-center text-white text-xs" style={{ background: "#c44" }}>✕</div>
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Vague</span>
            </div>
            <div className="space-y-2">
              {[
                "Make the homepage look better.",
                "Can you fix the spacing?",
                "I want it to feel more modern.",
              ].map((p, i) => (
                <div key={i} className="text-sm px-3 py-2 rounded-lg bg-white/50 text-foreground/60 italic">
                  "{p}"
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-xl p-5 border" style={{ borderColor: "color-mix(in oklab, var(--gold) 50%, transparent)", background: "color-mix(in oklab, var(--gold) 5%, transparent)" }}>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-5 h-5 rounded-full flex items-center justify-center text-white text-xs" style={{ background: "var(--teal)" }}>✓</div>
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Specific</span>
            </div>
            <div className="space-y-2">
              {[
                "The hero is too heavy — add breathing room before the scroll indicator. Feeling: calm, not crowded.",
                "Remove the white background from the image. It should be transparent.",
                "The case study tags look generic. Make them feel editorial — smaller, letter-spaced, less border.",
              ].map((p, i) => (
                <div key={i} className="text-sm px-3 py-2 rounded-lg text-foreground/75" style={{ background: "color-mix(in oklab, var(--gold) 10%, white)" }}>
                  "{p}"
                </div>
              ))}
            </div>
          </div>
        </div>
        <p className="mt-5 text-xs text-muted-foreground">
          Specific prompts include <span className="font-medium text-foreground/70">what</span>, <span className="font-medium text-foreground/70">why</span>, and the <span className="font-medium text-foreground/70">feeling</span> it should create.
        </p>
      </div>
    );
  }

  return null;
}

function ProgressLine({ total, current }: { total: number; current: number }) {
  return (
    <div className="mx-auto max-w-3xl px-6 lg:px-10 py-6">
      <div className="flex items-center gap-2">
        {Array.from({ length: total }).map((_, i) => (
          <div key={i} className="flex items-center gap-2 flex-1">
            <div
              className="h-1 flex-1 rounded-full transition-all duration-500"
              style={{ background: i < current ? "var(--gold)" : "var(--border)" }}
            />
            {i === total - 1 && null}
          </div>
        ))}
      </div>
      <p className="text-xs text-muted-foreground mt-2 tracking-wide">
        Part {current} of {total}
      </p>
    </div>
  );
}

function HeroIllustration({ part }: { part: number }) {
  const illustrations = [
    // Part 1: compass / journey start
    <svg key={1} width="520" height="320" viewBox="0 0 520 320" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <circle cx="400" cy="160" r="140" stroke="var(--plum)" strokeWidth="1" opacity="0.08" />
      <circle cx="400" cy="160" r="100" stroke="var(--plum)" strokeWidth="1" opacity="0.1" />
      <circle cx="400" cy="160" r="60" stroke="var(--gold)" strokeWidth="1" opacity="0.15" strokeDasharray="4 4" />
      <path d="M400 80 L408 148 L400 160 L392 148 Z" fill="var(--plum)" opacity="0.2" />
      <path d="M400 240 L392 172 L400 160 L408 172 Z" fill="var(--gold)" opacity="0.2" />
      <path d="M320 160 L388 152 L400 160 L388 168 Z" fill="var(--plum)" opacity="0.15" />
      <path d="M480 160 L412 168 L400 160 L412 152 Z" fill="var(--plum)" opacity="0.1" />
      <circle cx="400" cy="160" r="8" fill="var(--plum)" opacity="0.3" />
      <circle cx="400" cy="160" r="3" fill="var(--gold)" opacity="0.6" />
      {/* Orbit dots */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => {
        const rad = (deg * Math.PI) / 180;
        return (
          <circle key={i} cx={400 + 140 * Math.cos(rad)} cy={160 + 140 * Math.sin(rad)} r="2" fill="var(--gold)" opacity="0.2" />
        );
      })}
    </svg>,
    // Part 2: pipeline flow
    <svg key={2} width="520" height="200" viewBox="0 0 520 200" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      {/* Nodes */}
      {[
        { x: 60, label: "Lovable" },
        { x: 185, label: "GitHub" },
        { x: 310, label: "Claude" },
        { x: 435, label: "Vercel" },
      ].map(({ x, label }, i) => (
        <g key={i}>
          <rect x={x - 40} y="70" width="80" height="60" rx="10" stroke="var(--plum)" strokeWidth="1.5" fill="var(--surface)" opacity="0.9" />
          <text x={x} y="106" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fill="var(--plum)" fontWeight="500">{label}</text>
          {i < 3 && (
            <>
              <path d={`M${x + 40} 100 H${x + 85}`} stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" />
              <path d={`M${x + 80} 96 L${x + 85} 100 L${x + 80} 104`} stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </>
          )}
        </g>
      ))}
      {/* Pulse dots on connectors */}
      <circle cx="147" cy="100" r="3" fill="var(--gold)" opacity="0.5" />
      <circle cx="272" cy="100" r="3" fill="var(--gold)" opacity="0.5" />
      <circle cx="397" cy="100" r="3" fill="var(--gold)" opacity="0.5" />
    </svg>,
    // Part 3: error→success timeline
    <svg key={3} width="520" height="220" viewBox="0 0 520 220" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M40 160 C80 160 80 80 160 80 C240 80 240 160 320 160 C400 160 400 60 480 60" stroke="var(--plum)" strokeWidth="2" fill="none" opacity="0.2" strokeLinecap="round" />
      <path d="M40 160 C80 160 80 100 160 100 C240 100 240 140 320 140 C400 140 400 80 480 60" stroke="var(--gold)" strokeWidth="1.5" fill="none" opacity="0.4" strokeLinecap="round" strokeDasharray="6 4" />
      {/* Points */}
      {[
        { x: 40, y: 160, label: "Start", sub: "Draft ready" },
        { x: 160, y: 80, label: "Deploy", sub: "404 error" },
        { x: 320, y: 160, label: "Fix", sub: "vercel.json" },
        { x: 480, y: 60, label: "Live", sub: "200 OK" },
      ].map(({ x, y, label, sub }, i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="6" fill={i === 3 ? "var(--gold)" : "var(--surface)"} stroke={i === 3 ? "var(--gold)" : "var(--plum)"} strokeWidth="1.5" opacity={i === 3 ? 1 : 0.6} />
          <text x={x} y={y - 14} textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="10" fill="var(--plum)" fontWeight="500" opacity="0.8">{label}</text>
          <text x={x} y={y + 22} textAnchor="middle" fontFamily="monospace" fontSize="9" fill="var(--plum)" opacity="0.4">{sub}</text>
        </g>
      ))}
    </svg>,
    // Part 4: notebook / creative direction
    <svg key={4} width="520" height="240" viewBox="0 0 520 240" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect x="160" y="30" width="200" height="180" rx="12" fill="var(--surface)" stroke="var(--plum)" strokeWidth="1.5" opacity="0.8" />
      <rect x="160" y="30" width="200" height="40" rx="12" fill="var(--plum)" opacity="0.1" />
      <text x="260" y="56" textAnchor="middle" fontFamily="var(--font-display, serif)" fontSize="13" fill="var(--plum)" opacity="0.7">Design Brief</text>
      {/* Lines */}
      {[85, 105, 125, 145, 165].map((y, i) => (
        <rect key={i} x="180" y={y} width={i % 2 === 0 ? 160 : 120} height="8" rx="4" fill="var(--plum)" opacity="0.1" />
      ))}
      {/* Gold highlight line */}
      <rect x="180" y="105" width="140" height="8" rx="4" fill="var(--gold)" opacity="0.3" />
      {/* Check mark */}
      <circle cx="360" cy="175" r="18" fill="var(--gold)" opacity="0.2" />
      <path d="M352 175 L358 181 L368 169" stroke="var(--plum)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      {/* Scatter dots */}
      {[[100, 60], [420, 90], [90, 180], [440, 170], [130, 120], [400, 130]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="3" fill="var(--gold)" opacity="0.15" />
      ))}
    </svg>,
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none flex items-center justify-end">
      <div className="opacity-60">
        {illustrations[part - 1]}
      </div>
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
            <span className="font-display text-sm tracking-[0.2em] uppercase text-primary">Alena Vorobiev</span>
            <span className="text-[0.65rem] tracking-[0.25em] uppercase text-accent mt-1">UX Designer</span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-10 text-sm">
          <Link to="/work" className="hover:text-primary transition-colors">Work</Link>
          <Link to="/articles" className="text-primary font-medium">Writing</Link>
          <Link to="/about" className="hover:text-primary transition-colors">About</Link>
          <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
        </nav>
      </div>
    </motion.header>
  );
}
