import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowUpRight, Mail, Linkedin } from "lucide-react";
import { a as avLogoPng, R as Reveal } from "./SectionReveal-CPXu9wTK.js";
import { H as HeroOrb } from "./HeroOrb-jEL9p31l.js";
import "three";
const projects = [{
  id: "smart-alerts",
  title: "Smart Alerts Redesign",
  summary: "Rebuilt the alert creation flow to reduce setup time and increase trust in automated monitoring.",
  tags: ["Enterprise SaaS", "Design System", "0→1 Flow"],
  image: "https://alenavorobiev.com/wp-content/uploads/2026/03/Macbook-Pro-FREE-2-1.png",
  year: "2025"
}, {
  id: "mira",
  title: "Mira Studio",
  summary: "Meltwater's AI-powered assistant for media intelligence — conversational discovery for analysts.",
  tags: ["AI Product", "Conversational UI", "Research"],
  image: "https://alenavorobiev.com/wp-content/uploads/2026/03/Macbook-Pro-FREE-5.png",
  year: "2025"
}, {
  id: "research",
  title: "Multi-Source Alerts Research",
  summary: "Generative and evaluative research with PMs, researchers, and engineers to validate a new alerts model.",
  tags: ["UX Research", "Interviews", "Synthesis"],
  image: "https://alenavorobiev.com/wp-content/uploads/2026/03/Macbook-Pro-FREE-2.png",
  year: "2024"
}, {
  id: "forecasting",
  title: "Alert Forecasting & AI Insights",
  summary: "Forecasting and AI insights for Spike Detection — helping users anticipate trends before they break.",
  tags: ["Data Viz", "AI Insights", "Feature Design"],
  image: "https://alenavorobiev.com/wp-content/uploads/2026/02/Macbook-Pro-FREE-1-1-1024x645.png",
  year: "2024"
}, {
  id: "uwork",
  title: "uWork",
  summary: "Mobile app helping self-employed tradespeople and small construction crews manage jobs end-to-end.",
  tags: ["Mobile", "0→1 Product", "Branding"],
  image: "https://alenavorobiev.com/wp-content/uploads/2025/11/Preview-1024x937.png",
  year: "2023"
}];
function Portfolio() {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen overflow-x-hidden", children: [
    /* @__PURE__ */ jsx(Nav, {}),
    /* @__PURE__ */ jsx(Hero, {}),
    /* @__PURE__ */ jsx(Work, {}),
    /* @__PURE__ */ jsx(About, {}),
    /* @__PURE__ */ jsx(Contact, {}),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
function Nav() {
  return /* @__PURE__ */ jsx(motion.header, { initial: {
    y: -40,
    opacity: 0
  }, animate: {
    y: 0,
    opacity: 1
  }, transition: {
    duration: 0.7,
    ease: [0.22, 1, 0.36, 1]
  }, className: "fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-[color-mix(in_oklab,var(--ivory)_75%,transparent)] border-b border-border/50", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center justify-between", children: [
    /* @__PURE__ */ jsxs("a", { href: "#top", className: "flex items-center gap-4", children: [
      /* @__PURE__ */ jsx("img", { src: avLogoPng, alt: "AV monogram", className: "h-10 w-auto" }),
      /* @__PURE__ */ jsx("span", { className: "w-px h-8 bg-primary/30", "aria-hidden": true }),
      /* @__PURE__ */ jsxs("span", { className: "flex flex-col leading-none", children: [
        /* @__PURE__ */ jsx("span", { className: "font-display text-sm tracking-[0.2em] uppercase text-primary", children: "Alena Vorobiev" }),
        /* @__PURE__ */ jsx("span", { className: "text-[0.65rem] tracking-[0.25em] uppercase text-accent mt-1", children: "UX Designer" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("nav", { className: "hidden md:flex items-center gap-10 text-sm", children: [
      /* @__PURE__ */ jsx(Link, { to: "/work", className: "hover:text-primary transition-colors", children: "Work" }),
      /* @__PURE__ */ jsx(Link, { to: "/about", className: "hover:text-primary transition-colors", children: "About" }),
      /* @__PURE__ */ jsx(Link, { to: "/contact", className: "hover:text-primary transition-colors", children: "Contact" })
    ] })
  ] }) });
}
function Hero() {
  const ref = useRef(null);
  const {
    scrollYProgress
  } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const ease = [0.22, 1, 0.36, 1];
  return /* @__PURE__ */ jsxs("section", { id: "top", ref, className: "relative pt-32 pb-24 lg:pt-44 lg:pb-32", style: {
    background: "var(--gradient-hero)"
  }, children: [
    /* @__PURE__ */ jsx(HeroOrb, { className: "absolute inset-y-0 right-0 w-[55%] opacity-70 pointer-events-none hidden lg:block" }),
    /* @__PURE__ */ jsx(motion.div, { "aria-hidden": true, className: "absolute top-32 right-[8%] size-64 rounded-full blur-3xl opacity-40", style: {
      background: "var(--surface)"
    }, animate: {
      y: [0, -20, 0],
      scale: [1, 1.05, 1]
    }, transition: {
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut"
    } }),
    /* @__PURE__ */ jsx(motion.div, { "aria-hidden": true, className: "absolute bottom-10 left-[5%] size-48 rounded-full blur-3xl opacity-50", style: {
      background: "color-mix(in oklab, var(--gold) 40%, transparent)"
    }, animate: {
      y: [0, 24, 0]
    }, transition: {
      duration: 10,
      repeat: Infinity,
      ease: "easeInOut"
    } }),
    /* @__PURE__ */ jsxs(motion.div, { style: {
      y,
      opacity
    }, className: "relative mx-auto max-w-7xl px-6 lg:px-10", children: [
      /* @__PURE__ */ jsxs("h1", { className: "font-display text-[clamp(2.75rem,8vw,7.5rem)] leading-[0.95] text-balance text-primary", children: [
        /* @__PURE__ */ jsx(AnimatedWords, { text: "Designing", delay: 0.1 }),
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("span", { className: "italic text-[color:var(--teal)]", children: /* @__PURE__ */ jsx(AnimatedWords, { text: "clarity for", delay: 0.35 }) }),
        " ",
        /* @__PURE__ */ jsx(AnimatedWords, { text: "complex", delay: 0.55 }),
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx(AnimatedWords, { text: "products.", delay: 0.75 })
      ] }),
      /* @__PURE__ */ jsxs(motion.div, { initial: {
        opacity: 0,
        y: 20
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        duration: 0.8,
        delay: 0.95,
        ease
      }, className: "mt-12 grid md:grid-cols-[1.2fr_1fr] gap-10 items-end", children: [
        /* @__PURE__ */ jsxs("p", { className: "text-lg md:text-xl max-w-xl text-foreground/80 leading-relaxed", children: [
          "I'm ",
          /* @__PURE__ */ jsx("span", { className: "text-primary font-medium", children: "Alena Vorobiev" }),
          ", a UX designer who makes AI, data, and enterprise products that feel intuitive."
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsxs("a", { href: "#work", className: "group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3.5 text-sm font-medium hover:bg-[color:var(--teal)] transition-colors", children: [
            "View selected work",
            /* @__PURE__ */ jsx(ArrowUpRight, { className: "size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })
          ] }),
          /* @__PURE__ */ jsx(Link, { to: "/contact", className: "inline-flex items-center gap-2 rounded-full border border-primary/25 px-6 py-3.5 text-sm font-medium hover:border-primary transition-colors", children: "Get in touch" })
        ] })
      ] }),
      /* @__PURE__ */ jsx(motion.div, { initial: {
        opacity: 0
      }, animate: {
        opacity: 1
      }, transition: {
        duration: 1,
        delay: 1.4
      }, className: "mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-border pt-8", children: [["5+", "Years designing"], ["20+", "Shipped features"], ["End-to-End", "Experience"], ["AI · Data · SaaS", "Specialism"]].map(([k, v]) => /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "font-display text-3xl text-primary", children: k }),
        /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-widest text-muted-foreground mt-1", children: v })
      ] }, k)) })
    ] })
  ] });
}
function AnimatedWords({
  text,
  delay = 0
}) {
  return /* @__PURE__ */ jsx("span", { className: "inline-block overflow-hidden align-bottom", children: /* @__PURE__ */ jsx(motion.span, { initial: {
    y: "110%"
  }, animate: {
    y: "0%"
  }, transition: {
    duration: 1,
    delay,
    ease: [0.22, 1, 0.36, 1]
  }, className: "inline-block", children: text }) });
}
function Work() {
  return /* @__PURE__ */ jsxs("section", { id: "work", className: "mx-auto max-w-7xl px-6 lg:px-10 py-28 lg:py-40", children: [
    /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-end justify-between flex-wrap gap-6 mb-16", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "text-xs tracking-[0.25em] uppercase text-muted-foreground mb-4", children: "Selected Work" }),
        /* @__PURE__ */ jsx("h2", { className: "font-display text-5xl md:text-6xl text-primary max-w-2xl text-balance", children: "Case studies in clarity, trust, and intelligence." })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground max-w-sm", children: "A short selection of recent product work — spanning enterprise AI, monitoring, and the small craft details that make complex software feel clear." })
    ] }) }),
    /* @__PURE__ */ jsx("ul", { className: "space-y-24 lg:space-y-32", children: projects.filter((p) => ["smart-alerts", "research", "forecasting"].includes(p.id)).map((p, i) => /* @__PURE__ */ jsx(ProjectCard, { project: p, index: i }, p.id)) }),
    /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsx("div", { className: "mt-20 text-center", children: /* @__PURE__ */ jsxs(Link, { to: "/work", className: "inline-flex items-center gap-2 rounded-full border border-primary/25 px-6 py-3.5 text-sm font-medium hover:border-primary hover:text-primary transition-colors", children: [
      "View all case studies ",
      /* @__PURE__ */ jsx(ArrowUpRight, { className: "size-4" })
    ] }) }) })
  ] });
}
function ProjectCard({
  project,
  index
}) {
  const flipped = index % 2 === 1;
  return /* @__PURE__ */ jsx(Reveal, { as: "li", y: 48, children: /* @__PURE__ */ jsx(Link, { to: "/work/$id", params: {
    id: project.id
  }, className: "group block", children: /* @__PURE__ */ jsxs("article", { className: `grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${flipped ? "lg:[&>*:first-child]:order-2" : ""}`, children: [
    /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute -bottom-4 -right-4 w-full h-full rounded-2xl", style: {
        background: "var(--surface)"
      } }),
      /* @__PURE__ */ jsx("div", { className: "absolute -left-4 top-8 bottom-8 w-px bg-accent opacity-60" }),
      /* @__PURE__ */ jsx("svg", { className: "absolute -top-5 -left-5 opacity-25 pointer-events-none", width: "64", height: "64", viewBox: "0 0 64 64", "aria-hidden": true, children: Array.from({
        length: 4
      }).map((_, row) => Array.from({
        length: 4
      }).map((_2, col) => /* @__PURE__ */ jsx("circle", { cx: col * 16 + 8, cy: row * 16 + 8, r: "1.5", fill: "var(--plum)" }, `${row}-${col}`))) }),
      /* @__PURE__ */ jsx(motion.div, { whileHover: {
        y: -6
      }, transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }, className: "relative rounded-2xl overflow-hidden bg-white aspect-[4/3]", style: {
        boxShadow: "var(--shadow-card)"
      }, children: /* @__PURE__ */ jsx("img", { src: project.image, alt: project.title, loading: "lazy", className: "absolute inset-0 w-full h-full object-contain transition-transform duration-700 group-hover:scale-[1.04]" }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h3", { className: "font-display text-4xl md:text-5xl text-primary text-balance group-hover:text-[color:var(--teal)] transition-colors", children: project.title }),
      /* @__PURE__ */ jsx("p", { className: "mt-5 text-lg text-foreground/75 max-w-lg leading-relaxed", children: project.summary }),
      /* @__PURE__ */ jsx("div", { className: "mt-7 flex flex-wrap gap-2", children: project.tags.map((t) => /* @__PURE__ */ jsx("span", { className: "text-xs px-3 py-1.5 rounded-full border border-border bg-card text-muted-foreground", children: t }, t)) }),
      /* @__PURE__ */ jsxs("div", { className: "mt-9 inline-flex items-center gap-2 text-primary font-medium", children: [
        /* @__PURE__ */ jsxs("span", { className: "relative", children: [
          "Read the case study",
          /* @__PURE__ */ jsx("span", { className: "absolute left-0 -bottom-0.5 h-px w-full bg-primary origin-left scale-x-100 transition-transform duration-300 group-hover:scale-x-0" })
        ] }),
        /* @__PURE__ */ jsx(ArrowUpRight, { className: "size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" })
      ] })
    ] })
  ] }) }) });
}
function About() {
  return /* @__PURE__ */ jsx("section", { id: "about", className: "bg-secondary/60 py-28 lg:py-40", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12", children: [
    /* @__PURE__ */ jsx(Reveal, { className: "lg:col-span-5", children: /* @__PURE__ */ jsx("h2", { className: "font-display text-5xl md:text-6xl text-primary text-balance", children: "A designer who listens before she draws." }) }),
    /* @__PURE__ */ jsxs("div", { className: "lg:col-span-7 space-y-6 text-lg leading-relaxed text-foreground/80", children: [
      /* @__PURE__ */ jsx(Reveal, { delay: 0.1, children: /* @__PURE__ */ jsx("p", { children: "I've spent the last several years inside data-heavy products — from media monitoring and AI assistants to alert systems used by global enterprise teams. My favourite problems are the ones hiding in plain sight: the small frictions that erode trust one click at a time." }) }),
      /* @__PURE__ */ jsx(Reveal, { delay: 0.2, children: /* @__PURE__ */ jsx("p", { children: "I lead end-to-end work — research, strategy, IA, interaction, and the design system glue in between. I'm happiest collaborating closely with PMs, researchers, and engineers to ship something measurable." }) })
    ] })
  ] }) });
}
function Contact() {
  return /* @__PURE__ */ jsx("section", { id: "contact", className: "py-28 lg:py-40", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-5xl px-6 lg:px-10 text-center", children: [
    /* @__PURE__ */ jsx(Reveal, { children: /* @__PURE__ */ jsx("div", { className: "text-xs tracking-[0.25em] uppercase text-muted-foreground mb-6", children: "Let's work together" }) }),
    /* @__PURE__ */ jsx(Reveal, { delay: 0.1, children: /* @__PURE__ */ jsx("p", { className: "mt-8 text-lg text-foreground/70 max-w-xl mx-auto", children: "I'm currently exploring UX and Senior UX Designer roles." }) }),
    /* @__PURE__ */ jsx(Reveal, { delay: 0.35, children: /* @__PURE__ */ jsxs("a", { href: "mailto:alena.n.vorobiev@gmail.com", className: "mt-10 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-8 py-4 text-base font-medium hover:bg-[color:var(--teal)] transition-colors", children: [
      "Get in touch ",
      /* @__PURE__ */ jsx(ArrowUpRight, { className: "size-4" })
    ] }) })
  ] }) });
}
function Footer() {
  return /* @__PURE__ */ jsx("footer", { className: "border-t border-border bg-secondary/40", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-10 py-12 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between", children: [
    /* @__PURE__ */ jsx("div", { className: "flex items-center gap-4", children: /* @__PURE__ */ jsx("img", { src: avLogoPng, alt: "Alena Vorobiev — UX Designer", className: "h-10 w-auto" }) }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-6 text-sm", children: [
      /* @__PURE__ */ jsxs("a", { href: "mailto:alena.n.vorobiev@gmail.com", className: "inline-flex items-center gap-2 hover:text-primary transition-colors", children: [
        /* @__PURE__ */ jsx(Mail, { className: "size-4" }),
        " Email"
      ] }),
      /* @__PURE__ */ jsxs("a", { href: "https://www.linkedin.com/in/alena-vorobiev/", target: "_blank", rel: "noreferrer", className: "inline-flex items-center gap-2 hover:text-primary transition-colors", children: [
        /* @__PURE__ */ jsx(Linkedin, { className: "size-4" }),
        " LinkedIn"
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "text-xs text-muted-foreground", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " Alena Vorobiev. Crafted with care."
    ] })
  ] }) });
}
export {
  Portfolio as component
};
