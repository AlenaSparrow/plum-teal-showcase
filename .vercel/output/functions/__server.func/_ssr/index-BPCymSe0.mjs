import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { R as Reveal, a as avLogoPng } from "./SectionReveal-CPXu9wTK.mjs";
import { a as articles } from "./router-ztFuWovQ.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { A as ArrowUpRight } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const PART_ICONS = [
  // Part 1: compass / journey start
  /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg", "aria-hidden": true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "24", cy: "24", r: "20", stroke: "var(--gold)", strokeWidth: "1.5", strokeDasharray: "3 3" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "24", cy: "24", r: "13", stroke: "var(--plum)", strokeWidth: "1", opacity: "0.4" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M24 10 L27 22 L24 24 L21 22 Z", fill: "var(--plum)", opacity: "0.7" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M24 38 L21 26 L24 24 L27 26 Z", fill: "var(--gold)", opacity: "0.6" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "24", cy: "24", r: "2", fill: "var(--plum)" })
  ] }),
  // Part 2: pipeline / flow
  /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg", "aria-hidden": true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "4", y: "18", width: "10", height: "12", rx: "3", stroke: "var(--plum)", strokeWidth: "1.5" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "19", y: "18", width: "10", height: "12", rx: "3", stroke: "var(--gold)", strokeWidth: "1.5" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "34", y: "18", width: "10", height: "12", rx: "3", stroke: "var(--plum)", strokeWidth: "1.5" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M14 24 H19", stroke: "var(--gold)", strokeWidth: "1.5", strokeLinecap: "round" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M29 24 H34", stroke: "var(--gold)", strokeWidth: "1.5", strokeLinecap: "round" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M17 22 L19 24 L17 26", stroke: "var(--gold)", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M32 22 L34 24 L32 26", stroke: "var(--gold)", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })
  ] }),
  // Part 3: error→success / timeline
  /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg", "aria-hidden": true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M8 36 Q16 36 16 28 Q16 20 24 20 Q32 20 32 28 Q32 36 40 36", stroke: "var(--plum)", strokeWidth: "1.5", strokeLinecap: "round", fill: "none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "8", cy: "36", r: "3", fill: "var(--gold)", opacity: "0.5" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "40", cy: "36", r: "3", fill: "var(--plum)" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M37 33 L40 36 L43 33", stroke: "white", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "12", y: "17", fontFamily: "monospace", fontSize: "7", fill: "var(--plum)", opacity: "0.5", children: "504" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "28", y: "17", fontFamily: "monospace", fontSize: "7", fill: "var(--plum)", children: "200" })
  ] }),
  // Part 4: notebook / insights
  /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "48", height: "48", viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg", "aria-hidden": true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "10", y: "8", width: "28", height: "34", rx: "3", stroke: "var(--plum)", strokeWidth: "1.5" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M10 16 H38", stroke: "var(--plum)", strokeWidth: "1", opacity: "0.3" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M16 24 H32", stroke: "var(--gold)", strokeWidth: "1.5", strokeLinecap: "round" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M16 29 H27", stroke: "var(--plum)", strokeWidth: "1", strokeLinecap: "round", opacity: "0.5" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M16 34 H29", stroke: "var(--plum)", strokeWidth: "1", strokeLinecap: "round", opacity: "0.5" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "32", cy: "34", r: "4", fill: "var(--gold)", opacity: "0.3" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M30 34 L32 36 L35 32", stroke: "var(--plum)", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })
  ] })
];
function ArticlesPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen overflow-x-hidden", style: {
    background: "var(--ivory)"
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "mx-auto max-w-5xl px-6 lg:px-10 pt-36 pb-28", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs tracking-[0.25em] uppercase text-muted-foreground mb-4", children: "Writing" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-5xl md:text-6xl text-primary max-w-2xl text-balance leading-tight", children: "Building a portfolio, out loud." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg text-foreground/70 max-w-2xl leading-relaxed", children: "A four-part series on rebuilding my portfolio from scratch using AI tools — what worked, what didn't, and what I learned about working with Claude Code." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-16 mb-16 flex items-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px flex-1", style: {
          background: "linear-gradient(to right, var(--gold), transparent)"
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1.5 h-1.5 rounded-full", style: {
          background: "var(--gold)"
        } })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-8", children: articles.map((article, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(ArticleCard, { article, icon: PART_ICONS[i], index: i }, article.slug)) })
    ] })
  ] });
}
function ArticleCard({
  article,
  icon,
  index
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { as: "li", y: 32, delay: index * 0.07, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/articles/$slug", params: {
    slug: article.slug
  }, className: "group block", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "relative rounded-2xl p-8 md:p-10 transition-all duration-500 border border-border/60 hover:border-[color:var(--gold)] overflow-hidden", style: {
    background: "var(--surface)"
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none", style: {
      background: "linear-gradient(135deg, color-mix(in oklab, var(--plum) 4%, transparent), transparent)"
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex items-start gap-8 md:gap-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:flex shrink-0 w-16 h-16 rounded-xl items-center justify-center border border-border/60", style: {
        background: "var(--ivory)"
      }, children: icon }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs tracking-[0.2em] uppercase font-medium", style: {
            color: "var(--gold)"
          }, children: [
            "Part ",
            article.part
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "·" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: article.readTime })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl md:text-3xl text-primary text-balance group-hover:text-[color:var(--teal)] transition-colors duration-300", children: article.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-foreground/65 leading-relaxed max-w-2xl", children: article.excerpt }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative", children: [
            "Read",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-0 -bottom-0.5 h-px w-full bg-primary origin-left scale-x-100 transition-transform duration-300 group-hover:scale-x-0" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" })
        ] })
      ] })
    ] })
  ] }) }) });
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
  ArticlesPage as component
};
