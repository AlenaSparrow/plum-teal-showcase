import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import avLogoPng from "@/assets/av-logo.png";
import { articles } from "@/lib/articles";
import { Reveal } from "@/components/SectionReveal";

export const Route = createFileRoute("/articles/")({
  head: () => ({
    meta: [
      { title: "Writing — Alena Vorobiev" },
      { name: "description", content: "Notes on building a portfolio with AI tools — tools, process, mistakes, and what actually worked." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500&family=Inter:wght@300;400;500;600&display=swap" },
    ],
  }),
  component: ArticlesPage,
});

const PART_ICONS = [
  // Part 1: compass / journey start
  (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <circle cx="24" cy="24" r="20" stroke="var(--gold)" strokeWidth="1.5" strokeDasharray="3 3" />
      <circle cx="24" cy="24" r="13" stroke="var(--plum)" strokeWidth="1" opacity="0.4" />
      <path d="M24 10 L27 22 L24 24 L21 22 Z" fill="var(--plum)" opacity="0.7" />
      <path d="M24 38 L21 26 L24 24 L27 26 Z" fill="var(--gold)" opacity="0.6" />
      <circle cx="24" cy="24" r="2" fill="var(--plum)" />
    </svg>
  ),
  // Part 2: pipeline / flow
  (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect x="4" y="18" width="10" height="12" rx="3" stroke="var(--plum)" strokeWidth="1.5" />
      <rect x="19" y="18" width="10" height="12" rx="3" stroke="var(--gold)" strokeWidth="1.5" />
      <rect x="34" y="18" width="10" height="12" rx="3" stroke="var(--plum)" strokeWidth="1.5" />
      <path d="M14 24 H19" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M29 24 H34" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M17 22 L19 24 L17 26" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M32 22 L34 24 L32 26" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  // Part 3: error→success / timeline
  (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M8 36 Q16 36 16 28 Q16 20 24 20 Q32 20 32 28 Q32 36 40 36" stroke="var(--plum)" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <circle cx="8" cy="36" r="3" fill="var(--gold)" opacity="0.5" />
      <circle cx="40" cy="36" r="3" fill="var(--plum)" />
      <path d="M37 33 L40 36 L43 33" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <text x="12" y="17" fontFamily="monospace" fontSize="7" fill="var(--plum)" opacity="0.5">504</text>
      <text x="28" y="17" fontFamily="monospace" fontSize="7" fill="var(--plum)">200</text>
    </svg>
  ),
  // Part 4: notebook / insights
  (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect x="10" y="8" width="28" height="34" rx="3" stroke="var(--plum)" strokeWidth="1.5" />
      <path d="M10 16 H38" stroke="var(--plum)" strokeWidth="1" opacity="0.3" />
      <path d="M16 24 H32" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M16 29 H27" stroke="var(--plum)" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
      <path d="M16 34 H29" stroke="var(--plum)" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
      <circle cx="32" cy="34" r="4" fill="var(--gold)" opacity="0.3" />
      <path d="M30 34 L32 36 L35 32" stroke="var(--plum)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
];

function ArticlesPage() {
  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: "var(--ivory)" }}>
      <Nav />
      <main className="mx-auto max-w-5xl px-6 lg:px-10 pt-36 pb-28">
        <Reveal>
          <div className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-4">Writing</div>
          <h1 className="font-display text-5xl md:text-6xl text-primary max-w-2xl text-balance leading-tight">
            Building a portfolio, out loud.
          </h1>
          <p className="mt-6 text-lg text-foreground/70 max-w-2xl leading-relaxed">
            A four-part series on rebuilding my portfolio from scratch using AI tools — what worked, what didn't, and what I learned about working with Claude Code.
          </p>
        </Reveal>

        {/* Decorative rule */}
        <div className="mt-16 mb-16 flex items-center gap-4">
          <div className="h-px flex-1" style={{ background: "linear-gradient(to right, var(--gold), transparent)" }} />
          <div className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--gold)" }} />
        </div>

        <ul className="space-y-8">
          {articles.map((article, i) => (
            <ArticleCard key={article.slug} article={article} icon={PART_ICONS[i]} index={i} />
          ))}
        </ul>
      </main>
    </div>
  );
}

function ArticleCard({
  article,
  icon,
  index,
}: {
  article: (typeof articles)[number];
  icon: React.ReactNode;
  index: number;
}) {
  return (
    <Reveal as="li" y={32} delay={index * 0.07}>
      <Link
        to="/articles/$slug"
        params={{ slug: article.slug }}
        className="group block"
      >
        <article
          className="relative rounded-2xl p-8 md:p-10 transition-all duration-500 border border-border/60 hover:border-[color:var(--gold)] overflow-hidden"
          style={{ background: "var(--surface)" }}
        >
          {/* Hover fill */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: "linear-gradient(135deg, color-mix(in oklab, var(--plum) 4%, transparent), transparent)" }} />

          <div className="relative flex items-start gap-8 md:gap-12">
            {/* Icon */}
            <div className="hidden md:flex shrink-0 w-16 h-16 rounded-xl items-center justify-center border border-border/60" style={{ background: "var(--ivory)" }}>
              {icon}
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs tracking-[0.2em] uppercase font-medium" style={{ color: "var(--gold)" }}>
                  Part {article.part}
                </span>
                <span className="text-xs text-muted-foreground">·</span>
                <span className="text-xs text-muted-foreground">{article.readTime}</span>
              </div>

              <h2 className="font-display text-2xl md:text-3xl text-primary text-balance group-hover:text-[color:var(--teal)] transition-colors duration-300">
                {article.title}
              </h2>

              <p className="mt-3 text-foreground/65 leading-relaxed max-w-2xl">
                {article.excerpt}
              </p>

              <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary">
                <span className="relative">
                  Read
                  <span className="absolute left-0 -bottom-0.5 h-px w-full bg-primary origin-left scale-x-100 transition-transform duration-300 group-hover:scale-x-0" />
                </span>
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </div>
          </div>
        </article>
      </Link>
    </Reveal>
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
