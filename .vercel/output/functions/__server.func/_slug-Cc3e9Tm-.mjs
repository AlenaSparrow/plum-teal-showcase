import { j as jsxRuntimeExports } from "./_libs/react.mjs";
import { L as Link } from "./_libs/tanstack__react-router.mjs";
import { R as Reveal, a as avLogoPng } from "./_ssr/SectionReveal-CPXu9wTK.mjs";
import { b as Route, a as articles } from "./_ssr/router-DBrNQgtr.mjs";
import { b as ArrowLeft, e as ArrowRight } from "./_libs/lucide-react.mjs";
import { m as motion } from "./_libs/framer-motion.mjs";
import "./_libs/tanstack__router-core.mjs";
import "./_libs/tanstack__history.mjs";
import "./_libs/cookie-es.mjs";
import "./_libs/seroval.mjs";
import "./_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "./_libs/react-dom.mjs";
import "./_libs/isbot.mjs";
import "./_libs/tanstack__query-core.mjs";
import "./_libs/tanstack__react-query.mjs";
import "./_libs/motion-dom.mjs";
import "./_libs/motion-utils.mjs";
function ArticlePage() {
  const article = Route.useLoaderData();
  const idx = articles.findIndex((a) => a.slug === article.slug);
  const prev = idx > 0 ? articles[idx - 1] : null;
  const next = idx < articles.length - 1 ? articles[idx + 1] : null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen", style: {
    background: "var(--ivory)"
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative pt-32 pb-20 overflow-hidden", style: {
      background: "linear-gradient(160deg, var(--surface) 0%, var(--ivory) 60%)"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(HeroIllustration, { part: article.part }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mx-auto max-w-3xl px-6 lg:px-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/articles", className: "inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "size-3.5" }),
          "All writing"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs tracking-[0.2em] uppercase font-medium", style: {
            color: "var(--gold)"
          }, children: [
            "Part ",
            article.part,
            " of ",
            articles.length
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "·" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: article.readTime })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl md:text-5xl lg:text-6xl text-primary text-balance leading-tight", children: article.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-xl text-foreground/65 leading-relaxed max-w-2xl", style: {
          fontFamily: "var(--font-display)"
        }, children: article.subtitle })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ProgressLine, { total: articles.length, current: article.part }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "mx-auto max-w-3xl px-6 lg:px-10 py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "prose-article", children: article.sections.map((section, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(SectionBlock, { section, articlePart: article.part, sectionIndex: i }, i)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "mx-auto max-w-3xl px-6 lg:px-10 pb-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px mb-12", style: {
        background: "linear-gradient(to right, transparent, var(--gold), transparent)"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-8", children: [
        prev ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/articles/$slug", params: {
          slug: prev.slug
        }, className: "group flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "size-4 transition-transform group-hover:-translate-x-1" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "block text-xs uppercase tracking-widest mb-0.5", style: {
              color: "var(--gold)"
            }, children: [
              "Part ",
              prev.part
            ] }),
            prev.title
          ] })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", {}),
        next ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/articles/$slug", params: {
          slug: next.slug
        }, className: "group flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors text-right", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "block text-xs uppercase tracking-widest mb-0.5", style: {
              color: "var(--gold)"
            }, children: [
              "Part ",
              next.part
            ] }),
            next.title
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-4 transition-transform group-hover:translate-x-1" })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/articles", className: "group flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Back to all writing" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-4 transition-transform group-hover:translate-x-1" })
        ] })
      ] })
    ] })
  ] });
}
function SectionBlock({
  section,
  articlePart,
  sectionIndex
}) {
  const delay = Math.min(sectionIndex * 0.04, 0.3);
  switch (section.type) {
    case "heading":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay, children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl md:text-3xl text-primary mt-14 mb-5 text-balance", children: section.content }) });
    case "subheading":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay, children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl text-primary mt-10 mb-4", children: section.content }) });
    case "paragraph":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground/80 leading-[1.85] mb-6 text-[1.0625rem]", children: section.content }) });
    case "quote":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { className: "relative my-10 pl-8 pr-6 py-6 rounded-xl", style: {
        background: "var(--surface)"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-0 top-6 bottom-6 w-1 rounded-full", style: {
          background: "var(--gold)"
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display text-xl md:text-2xl text-primary leading-relaxed italic", children: [
          '"',
          section.content,
          '"'
        ] }),
        section.attribution && /* @__PURE__ */ jsxRuntimeExports.jsxs("cite", { className: "mt-3 block text-sm text-muted-foreground not-italic", children: [
          "— ",
          section.attribution
        ] })
      ] }) });
    case "list":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay, children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "my-6 space-y-4", children: section.items?.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-4 text-[1.0625rem] text-foreground/80 leading-[1.85]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-2 shrink-0 w-1.5 h-1.5 rounded-full", style: {
          background: "var(--gold)"
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: item })
      ] }, i)) }) });
    case "teaser":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "my-12 rounded-2xl px-8 py-7 border border-dashed", style: {
        borderColor: "color-mix(in oklab, var(--gold) 50%, transparent)",
        background: "color-mix(in oklab, var(--gold) 5%, transparent)"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs tracking-[0.2em] uppercase mb-3", style: {
          color: "var(--gold)"
        }, children: "Up next" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground/70 leading-relaxed", children: section.content })
      ] }) });
    case "visual":
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay, children: /* @__PURE__ */ jsxRuntimeExports.jsx(InlineVisual, { id: section.visualId ?? "" }) });
    default:
      return null;
  }
}
function InlineVisual({
  id
}) {
  if (id === "pipeline-flow") {
    const steps = [{
      label: "Lovable",
      sub: "Generate prototype",
      color: "var(--gold)"
    }, {
      label: "GitHub",
      sub: "Host the code",
      color: "var(--plum)"
    }, {
      label: "Claude Code",
      sub: "Iterate & refine",
      color: "var(--teal)"
    }, {
      label: "Vercel",
      sub: "Deploy & host",
      color: "var(--plum)"
    }];
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "my-10 rounded-2xl p-8 overflow-x-auto", style: {
      background: "var(--surface)"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs tracking-[0.2em] uppercase mb-6 text-muted-foreground", children: "The four-tool pipeline" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-0 min-w-max mx-auto w-fit", children: steps.map((step, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 rounded-2xl flex items-center justify-center text-white text-xs font-medium shadow-sm", style: {
            background: step.color
          }, children: i + 1 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-primary whitespace-nowrap", children: step.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground whitespace-nowrap", children: step.sub })
        ] }),
        i < steps.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center mx-3 mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-px", style: {
            background: "var(--gold)"
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-0 h-0", style: {
            borderTop: "4px solid transparent",
            borderBottom: "4px solid transparent",
            borderLeft: "6px solid var(--gold)"
          } })
        ] })
      ] }, i)) })
    ] });
  }
  if (id === "setup-steps") {
    const steps = [{
      label: "Connect GitHub to Lovable",
      done: true
    }, {
      label: "Install Homebrew + Git via Terminal",
      done: true
    }, {
      label: "Open project in Claude Code",
      done: true
    }, {
      label: "Install front-end design skill",
      done: true
    }, {
      label: "Run /init to set up context",
      done: true
    }, {
      label: "Make repo public",
      done: true
    }, {
      label: "Launch local preview",
      done: true
    }];
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "my-10 rounded-2xl p-8", style: {
      background: "var(--surface)"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs tracking-[0.2em] uppercase mb-6 text-muted-foreground", children: "Setup checklist" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3", children: steps.map((step, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "shrink-0 w-6 h-6 rounded-full flex items-center justify-center", style: {
          background: "color-mix(in oklab, var(--gold) 20%, transparent)",
          border: "1.5px solid var(--gold)"
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "10", height: "10", viewBox: "0 0 10 10", fill: "none", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M2 5 L4 7 L8 3", stroke: "var(--plum)", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-foreground/80", children: step.label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-px opacity-20", style: {
          background: "var(--plum)"
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs", style: {
          color: "var(--gold)"
        }, children: "✓" })
      ] }, i)) })
    ] });
  }
  if (id === "cold-start-problem") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "my-10 rounded-2xl p-8 overflow-x-auto", style: {
      background: "var(--surface)"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs tracking-[0.2em] uppercase mb-6 text-muted-foreground", children: "What was actually happening" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-medium mb-3 text-muted-foreground uppercase tracking-wider", children: "Before — SSR on every request" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 flex-wrap", children: [{
            label: "Request arrives",
            bg: "var(--surface)",
            border: "var(--border)"
          }, {
            label: "Cold start",
            bg: "color-mix(in oklab, var(--gold) 15%, transparent)",
            border: "var(--gold)"
          }, {
            label: "Load 1MB Three.js",
            bg: "color-mix(in oklab, #e55 15%, transparent)",
            border: "#e55"
          }, {
            label: "10s timeout →",
            bg: "color-mix(in oklab, #e55 20%, transparent)",
            border: "#e55"
          }, {
            label: "504 error",
            bg: "#e55",
            border: "#e55",
            textColor: "white"
          }].map((node, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-3 py-2 rounded-lg text-xs font-medium whitespace-nowrap", style: {
              background: node.bg,
              border: `1px solid ${node.border}`,
              color: node.textColor ?? "var(--foreground)"
            }, children: node.label }),
            i < 4 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground text-xs", children: "→" })
          ] }, i)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px", style: {
          background: "color-mix(in oklab, var(--gold) 30%, transparent)"
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-medium mb-3 text-muted-foreground uppercase tracking-wider", children: "After — pre-rendered static HTML" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 flex-wrap", children: [{
            label: "Request arrives",
            bg: "var(--surface)",
            border: "var(--border)"
          }, {
            label: "CDN serves HTML",
            bg: "color-mix(in oklab, var(--teal) 15%, transparent)",
            border: "var(--teal)"
          }, {
            label: "200 OK",
            bg: "var(--teal)",
            border: "var(--teal)",
            textColor: "white"
          }].map((node, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-3 py-2 rounded-lg text-xs font-medium whitespace-nowrap", style: {
              background: node.bg,
              border: `1px solid ${node.border}`,
              color: node.textColor ?? "var(--foreground)"
            }, children: node.label }),
            i < 2 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground text-xs", children: "→" })
          ] }, i)) })
        ] })
      ] })
    ] });
  }
  if (id === "prompt-quality") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "my-10 rounded-2xl p-8", style: {
      background: "var(--surface)"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs tracking-[0.2em] uppercase mb-6 text-muted-foreground", children: "Prompt quality — what the difference looks like" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl p-5 border", style: {
          borderColor: "color-mix(in oklab, #e55 40%, transparent)",
          background: "color-mix(in oklab, #e55 5%, transparent)"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-5 h-5 rounded-full flex items-center justify-center text-white text-xs", style: {
              background: "#c44"
            }, children: "✕" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium text-muted-foreground uppercase tracking-wider", children: "Vague" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: ["Make the homepage look better.", "Can you fix the spacing?", "I want it to feel more modern."].map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm px-3 py-2 rounded-lg bg-white/50 text-foreground/60 italic", children: [
            '"',
            p,
            '"'
          ] }, i)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl p-5 border", style: {
          borderColor: "color-mix(in oklab, var(--gold) 50%, transparent)",
          background: "color-mix(in oklab, var(--gold) 5%, transparent)"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-5 h-5 rounded-full flex items-center justify-center text-white text-xs", style: {
              background: "var(--teal)"
            }, children: "✓" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium text-muted-foreground uppercase tracking-wider", children: "Specific" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: ["The hero is too heavy — add breathing room before the scroll indicator. Feeling: calm, not crowded.", "Remove the white background from the image. It should be transparent.", "The case study tags look generic. Make them feel editorial — smaller, letter-spaced, less border."].map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm px-3 py-2 rounded-lg text-foreground/75", style: {
            background: "color-mix(in oklab, var(--gold) 10%, white)"
          }, children: [
            '"',
            p,
            '"'
          ] }, i)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-5 text-xs text-muted-foreground", children: [
        "Specific prompts include ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground/70", children: "what" }),
        ", ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground/70", children: "why" }),
        ", and the ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground/70", children: "feeling" }),
        " it should create."
      ] })
    ] });
  }
  return null;
}
function ProgressLine({
  total,
  current
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl px-6 lg:px-10 py-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: Array.from({
      length: total
    }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 flex-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1 flex-1 rounded-full transition-all duration-500", style: {
        background: i < current ? "var(--gold)" : "var(--border)"
      } }),
      i === total - 1 && null
    ] }, i)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-2 tracking-wide", children: [
      "Part ",
      current,
      " of ",
      total
    ] })
  ] });
}
function HeroIllustration({
  part
}) {
  const illustrations = [
    // Part 1: compass / journey start
    /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "520", height: "320", viewBox: "0 0 520 320", fill: "none", xmlns: "http://www.w3.org/2000/svg", "aria-hidden": true, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "400", cy: "160", r: "140", stroke: "var(--plum)", strokeWidth: "1", opacity: "0.08" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "400", cy: "160", r: "100", stroke: "var(--plum)", strokeWidth: "1", opacity: "0.1" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "400", cy: "160", r: "60", stroke: "var(--gold)", strokeWidth: "1", opacity: "0.15", strokeDasharray: "4 4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M400 80 L408 148 L400 160 L392 148 Z", fill: "var(--plum)", opacity: "0.2" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M400 240 L392 172 L400 160 L408 172 Z", fill: "var(--gold)", opacity: "0.2" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M320 160 L388 152 L400 160 L388 168 Z", fill: "var(--plum)", opacity: "0.15" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M480 160 L412 168 L400 160 L412 152 Z", fill: "var(--plum)", opacity: "0.1" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "400", cy: "160", r: "8", fill: "var(--plum)", opacity: "0.3" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "400", cy: "160", r: "3", fill: "var(--gold)", opacity: "0.6" }),
      [0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => {
        const rad = deg * Math.PI / 180;
        return /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: 400 + 140 * Math.cos(rad), cy: 160 + 140 * Math.sin(rad), r: "2", fill: "var(--gold)", opacity: "0.2" }, i);
      })
    ] }, 1),
    // Part 2: pipeline flow
    /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "520", height: "200", viewBox: "0 0 520 200", fill: "none", xmlns: "http://www.w3.org/2000/svg", "aria-hidden": true, children: [
      [{
        x: 60,
        label: "Lovable"
      }, {
        x: 185,
        label: "GitHub"
      }, {
        x: 310,
        label: "Claude"
      }, {
        x: 435,
        label: "Vercel"
      }].map(({
        x,
        label
      }, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: x - 40, y: "70", width: "80", height: "60", rx: "10", stroke: "var(--plum)", strokeWidth: "1.5", fill: "var(--surface)", opacity: "0.9" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x, y: "106", textAnchor: "middle", fontFamily: "Inter, sans-serif", fontSize: "11", fill: "var(--plum)", fontWeight: "500", children: label }),
        i < 3 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: `M${x + 40} 100 H${x + 85}`, stroke: "var(--gold)", strokeWidth: "1.5", strokeLinecap: "round" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: `M${x + 80} 96 L${x + 85} 100 L${x + 80} 104`, stroke: "var(--gold)", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })
        ] })
      ] }, i)),
      /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "147", cy: "100", r: "3", fill: "var(--gold)", opacity: "0.5" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "272", cy: "100", r: "3", fill: "var(--gold)", opacity: "0.5" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "397", cy: "100", r: "3", fill: "var(--gold)", opacity: "0.5" })
    ] }, 2),
    // Part 3: error→success timeline
    /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "520", height: "220", viewBox: "0 0 520 220", fill: "none", xmlns: "http://www.w3.org/2000/svg", "aria-hidden": true, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M40 160 C80 160 80 80 160 80 C240 80 240 160 320 160 C400 160 400 60 480 60", stroke: "var(--plum)", strokeWidth: "2", fill: "none", opacity: "0.2", strokeLinecap: "round" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M40 160 C80 160 80 100 160 100 C240 100 240 140 320 140 C400 140 400 80 480 60", stroke: "var(--gold)", strokeWidth: "1.5", fill: "none", opacity: "0.4", strokeLinecap: "round", strokeDasharray: "6 4" }),
      [{
        x: 40,
        y: 160,
        label: "Start",
        sub: "Draft ready"
      }, {
        x: 160,
        y: 80,
        label: "Deploy",
        sub: "404 error"
      }, {
        x: 320,
        y: 160,
        label: "Fix",
        sub: "vercel.json"
      }, {
        x: 480,
        y: 60,
        label: "Live",
        sub: "200 OK"
      }].map(({
        x,
        y,
        label,
        sub
      }, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: x, cy: y, r: "6", fill: i === 3 ? "var(--gold)" : "var(--surface)", stroke: i === 3 ? "var(--gold)" : "var(--plum)", strokeWidth: "1.5", opacity: i === 3 ? 1 : 0.6 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x, y: y - 14, textAnchor: "middle", fontFamily: "Inter, sans-serif", fontSize: "10", fill: "var(--plum)", fontWeight: "500", opacity: "0.8", children: label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x, y: y + 22, textAnchor: "middle", fontFamily: "monospace", fontSize: "9", fill: "var(--plum)", opacity: "0.4", children: sub })
      ] }, i))
    ] }, 3),
    // Part 4: notebook / creative direction
    /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "520", height: "240", viewBox: "0 0 520 240", fill: "none", xmlns: "http://www.w3.org/2000/svg", "aria-hidden": true, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "160", y: "30", width: "200", height: "180", rx: "12", fill: "var(--surface)", stroke: "var(--plum)", strokeWidth: "1.5", opacity: "0.8" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "160", y: "30", width: "200", height: "40", rx: "12", fill: "var(--plum)", opacity: "0.1" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "260", y: "56", textAnchor: "middle", fontFamily: "var(--font-display, serif)", fontSize: "13", fill: "var(--plum)", opacity: "0.7", children: "Design Brief" }),
      [85, 105, 125, 145, 165].map((y, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "180", y, width: i % 2 === 0 ? 160 : 120, height: "8", rx: "4", fill: "var(--plum)", opacity: "0.1" }, i)),
      /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "180", y: "105", width: "140", height: "8", rx: "4", fill: "var(--gold)", opacity: "0.3" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "360", cy: "175", r: "18", fill: "var(--gold)", opacity: "0.2" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M352 175 L358 181 L368 169", stroke: "var(--plum)", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }),
      [[100, 60], [420, 90], [90, 180], [440, 170], [130, 120], [400, 130]].map(([x, y], i) => /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: x, cy: y, r: "3", fill: "var(--gold)", opacity: "0.15" }, i))
    ] }, 4)
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 overflow-hidden pointer-events-none flex items-center justify-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "opacity-60", children: illustrations[part - 1] }) });
}
function Nav() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(motion.header, { initial: {
    y: -40,
    opacity: 0
  }, animate: {
    y: 0,
    opacity: 1
  }, transition: {
    duration: 0.7,
    ease: [0.22, 1, 0.36, 1]
  }, className: "fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-[color-mix(in_oklab,var(--ivory)_75%,transparent)] border-b border-border/50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center justify-between", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: avLogoPng, alt: "AV monogram", className: "h-10 w-auto" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-px h-8 bg-primary/30", "aria-hidden": true }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex flex-col leading-none", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-sm tracking-[0.2em] uppercase text-primary", children: "Alena Vorobiev" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[0.65rem] tracking-[0.25em] uppercase text-accent mt-1", children: "UX Designer" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "hidden md:flex items-center gap-10 text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/work", className: "hover:text-primary transition-colors", children: "Work" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/articles", className: "text-primary font-medium", children: "Writing" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/about", className: "hover:text-primary transition-colors", children: "About" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "hover:text-primary transition-colors", children: "Contact" })
    ] })
  ] }) });
}
export {
  ArticlePage as component
};
