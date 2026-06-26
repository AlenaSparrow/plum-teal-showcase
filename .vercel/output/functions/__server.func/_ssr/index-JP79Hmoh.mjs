import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { R as Reveal, a as avLogoPng } from "./SectionReveal-CPXu9wTK.mjs";
import { s as smartAlertsPreview, r as researchPreview, f as forecastingPreview, u as uworkPreview } from "./uwork-preview-vlgTVRFR.mjs";
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
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const HeroOrb = reactExports.lazy(() => import("./HeroOrb-9tJU4RQY.mjs").then((m) => ({
  default: m.HeroOrb
})));
const projects = [{
  id: "smart-alerts",
  title: "Smart Alerts Redesign",
  summary: "Rebuilt the alert creation flow to reduce setup time and increase trust in automated monitoring.",
  tags: ["Enterprise SaaS", "Design System", "0→1 Flow"],
  image: smartAlertsPreview
}, {
  id: "research",
  title: "Multi-Source Alerts Research",
  summary: "Generative and evaluative research with PMs, researchers, and engineers to validate a new alerts model.",
  tags: ["UX Research", "Interviews", "Synthesis"],
  image: researchPreview
}, {
  id: "forecasting",
  title: "Alert Forecasting & AI Insights",
  summary: "Forecasting and AI insights for Spike Detection — helping users anticipate trends before they break.",
  tags: ["Data Viz", "AI Insights", "Feature Design"],
  image: forecastingPreview
}, {
  id: "uwork",
  title: "uWork",
  summary: "Mobile app helping self-employed tradespeople and small construction crews manage jobs end-to-end.",
  tags: ["Mobile", "0→1 Product", "Branding"],
  image: uworkPreview
}];
function WorkPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen overflow-x-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "mx-auto max-w-7xl px-6 lg:px-10 pt-36 pb-28 lg:pb-40", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-16 grid lg:grid-cols-2 gap-12 items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs tracking-[0.25em] uppercase text-muted-foreground mb-4", children: "Portfolio" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-5xl md:text-6xl text-primary max-w-2xl text-balance", children: "A selection of product design work." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden lg:block relative h-64", children: /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Suspense, { fallback: null, children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeroOrb, {}) }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-24 lg:space-y-32", children: projects.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProjectCard, { project: p, index: i }, p.id)) })
    ] })
  ] });
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
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/work", className: "text-primary font-medium", children: "Work" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/about", className: "hover:text-primary transition-colors", children: "About" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "hover:text-primary transition-colors", children: "Contact" })
    ] })
  ] }) });
}
function ProjectCard({
  project,
  index
}) {
  const flipped = index % 2 === 1;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { as: "li", y: 48, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/work/$id", params: {
    id: project.id
  }, className: "group block", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: `grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${flipped ? "lg:[&>*:first-child]:order-2" : ""}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-4 -right-4 w-full h-full rounded-2xl", style: {
        background: "var(--surface)"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -left-4 top-8 bottom-8 w-px bg-accent opacity-60" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "absolute -top-5 -left-5 opacity-25 pointer-events-none", width: "64", height: "64", viewBox: "0 0 64 64", "aria-hidden": true, children: Array.from({
        length: 4
      }).map((_, row) => Array.from({
        length: 4
      }).map((_2, col) => /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: col * 16 + 8, cy: row * 16 + 8, r: "1.5", fill: "var(--plum)" }, `${row}-${col}`))) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { whileHover: {
        y: -6
      }, transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }, className: "relative rounded-2xl overflow-hidden bg-white aspect-[4/3]", style: {
        boxShadow: "var(--shadow-card)"
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: project.image, alt: project.title, loading: "lazy", className: "absolute inset-0 w-full h-full object-contain transition-transform duration-700 group-hover:scale-[1.04]" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-5xl text-primary text-balance group-hover:text-[color:var(--teal)] transition-colors", children: project.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-lg text-foreground/75 max-w-lg leading-relaxed", children: project.summary }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-7 flex flex-wrap gap-2", children: project.tags.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs px-3 py-1.5 rounded-full border border-border bg-card text-muted-foreground", children: t }, t)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-9 inline-flex items-center gap-2 text-primary font-medium", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative", children: [
          "Read the case study",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-0 -bottom-0.5 h-px w-full bg-primary origin-left scale-x-100 transition-transform duration-300 group-hover:scale-x-0" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" })
      ] })
    ] })
  ] }) }) });
}
export {
  WorkPage as component
};
