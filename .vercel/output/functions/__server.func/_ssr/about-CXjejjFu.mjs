import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { R as Reveal, a as avLogoPng } from "./SectionReveal-CPXu9wTK.mjs";
import { L as Linkedin, F as FileText } from "../_libs/lucide-react.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
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
const headshotUrl = "/assets/alena-headshot-BFztV5r_.jpg";
const expertise = [{
  category: "Product Design",
  items: ["End-to-End Product Design", "Interaction Design", "Information Architecture", "Design Systems", "UX Strategy", "Visual Design"]
}, {
  category: "Research & Validation",
  items: ["User Interviews", "Usability Testing", "A/B Testing", "Journey Mapping", "Data-Informed Design", "Hypothesis Development"]
}, {
  category: "Tools",
  items: ["Figma & FigJam", "Adobe Creative Suite", "FullStory", "Lyssna", "ChatGPT · v0 · Lovable · Claude", "Insomnia"]
}, {
  category: "Collaboration & Handoff",
  items: ["Notion", "Zeplin", "Confluence", "Jira"]
}];
function AboutPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen overflow-x-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-7xl px-6 lg:px-10 pt-36 pb-20 lg:pt-44 lg:pb-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-16 lg:gap-24 items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-md", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-5 -right-5 w-full h-full rounded-2xl", style: {
            background: "var(--surface)"
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -left-5 top-12 bottom-12 w-px bg-accent opacity-60" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "absolute -top-6 -left-6 opacity-30", width: "80", height: "80", viewBox: "0 0 80 80", "aria-hidden": true, children: Array.from({
            length: 5
          }).map((_, row) => Array.from({
            length: 5
          }).map((_2, col) => /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: col * 16 + 8, cy: row * 16 + 8, r: "1.5", fill: "var(--plum)" }, `${row}-${col}`))) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-2xl aspect-[3/4]", style: {
            boxShadow: "var(--shadow-card)"
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: headshotUrl, alt: "Alena Vorobiev", className: "absolute inset-0 w-full h-full object-cover" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 bottom-0 h-1/3 pointer-events-none", style: {
              background: "linear-gradient(to top, color-mix(in oklab, var(--plum) 30%, transparent), transparent)"
            } })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-3 -right-3 size-12 rounded-full border border-accent/40" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-1 -right-1 size-5 rounded-full bg-accent/20" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-5xl md:text-6xl text-primary text-balance leading-[1.05]", children: "Hi, I'm Alena Vorobiev." }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.2, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-foreground/80 leading-relaxed", children: "A UX Designer who bridges analytical rigour and creative vision — turning complex, data-heavy systems into experiences that are intuitive, scalable, and genuinely useful." }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.3, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://www.linkedin.com/in/alena-vorobiev", target: "_blank", rel: "noreferrer", className: "inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium hover:bg-[color:var(--teal)] transition-colors", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Linkedin, { className: "size-4" }),
              " LinkedIn"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "/Alena-Vorobiev-Resume.pdf", target: "_blank", rel: "noreferrer", className: "inline-flex items-center gap-2 rounded-full border border-primary/25 px-5 py-2.5 text-sm font-medium hover:border-primary hover:text-primary transition-colors", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "size-4" }),
              " Download Résumé"
            ] })
          ] }) })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-secondary/60 py-20 lg:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { className: "lg:col-span-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-5xl text-primary text-balance", children: "Impact-driven design for complex systems." }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-8 space-y-6 text-lg leading-relaxed text-foreground/80", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Over the past several years I've led design on data-driven products at Meltwater — owning the Smart Alerts ecosystem end-to-end and redefining how enterprise users discover, interpret, and act on insights from spikes, sentiment shifts, and AI-powered analytics." }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.2, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "I'm energised by high-complexity problems: multi-step enterprise workflows, real-time data dashboards, and AI features that need to earn user trust through transparency and control. My focus is always on measurable outcomes — reducing friction, increasing confidence, and shipping experiences that make sophisticated tools feel accessible." }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.3, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "I work end-to-end: generative and evaluative research, strategy, information architecture, interaction design, and design systems. I collaborate closely with PMs and engineers from problem framing through to delivery, treating ambiguity as a starting point rather than a blocker." }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.4, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Outside of product work, I'm a practising artist and photographer. That background keeps me attentive to the things numbers don't always capture — visual hierarchy, emotional resonance, the difference between a layout that functions and one that actually connects. I bring that sensibility into every project: rigour and craft, together." }) })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-6 lg:px-10 py-20 lg:py-28", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl text-primary mb-14", children: "Technical & design expertise" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-10", children: expertise.map((group, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.2em] text-accent mb-4 font-medium", children: group.category }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: group.items.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "text-sm text-foreground/75 leading-snug", children: item }, item)) })
        ] }) }, group.category)) })
      ] })
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
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/work", className: "hover:text-primary transition-colors", children: "Work" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/about", className: "text-primary font-medium", children: "About" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "hover:text-primary transition-colors", children: "Contact" })
    ] })
  ] }) });
}
export {
  AboutPage as component
};
