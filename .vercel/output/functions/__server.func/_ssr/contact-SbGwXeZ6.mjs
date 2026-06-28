import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { R as Reveal, a as avLogoPng } from "./SectionReveal-CPXu9wTK.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { C as Check, a as Copy, P as Phone, M as Mail } from "../_libs/lucide-react.mjs";
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
function ContactPage() {
  const [copied, setCopied] = reactExports.useState(false);
  function copyEmail() {
    navigator.clipboard.writeText("alena.n.vorobiev@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2e3);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen overflow-x-hidden", style: {
    background: "var(--plum)"
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "mx-auto max-w-7xl px-6 lg:px-10 pt-36 pb-28 lg:pt-44 lg:pb-40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-16 lg:gap-24 items-center min-h-[70vh]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.h1, { className: "font-display leading-[0.92] text-balance", style: {
          color: "color-mix(in oklab, var(--ivory) 45%, transparent)",
          fontSize: "clamp(3.5rem, 8vw, 6rem)"
        }, children: [
          "Got something",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "complex?"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.08, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display leading-[0.92] text-balance mt-0", style: {
          color: "color-mix(in oklab, var(--ivory) 70%, transparent)",
          fontSize: "clamp(3.5rem, 8vw, 6rem)"
        }, children: [
          "Worth",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "designing well?"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.16, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display leading-[0.92] text-balance mt-0", style: {
          color: "var(--ivory)",
          fontSize: "clamp(3.5rem, 8vw, 6rem)"
        }, children: [
          "Let's make it",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "intuitive."
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.28, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-10 text-lg leading-relaxed max-w-md", style: {
          color: "color-mix(in oklab, var(--ivory) 55%, transparent)"
        }, children: [
          "The best outcomes start with the right people in the room.",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("em", { style: {
            color: "color-mix(in oklab, var(--ivory) 75%, transparent)"
          }, children: "I'd love to be one of them." })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { delay: 0.2, className: "flex flex-col gap-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[0.65rem] uppercase tracking-[0.25em] mb-3 font-medium", style: {
            color: "color-mix(in oklab, var(--ivory) 40%, transparent)"
          }, children: "Email" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:alena.n.vorobiev@gmail.com", className: "font-display text-2xl md:text-3xl transition-opacity hover:opacity-80", style: {
              color: "var(--ivory)"
            }, children: "alena.n.vorobiev@gmail.com" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: copyEmail, "aria-label": "Copy email", className: "shrink-0 p-1.5 rounded-md transition-colors", style: {
              color: "color-mix(in oklab, var(--ivory) 50%, transparent)"
            }, children: copied ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-4", style: {
              color: "var(--gold)"
            } }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "size-4" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px w-full", style: {
          background: "color-mix(in oklab, var(--ivory) 12%, transparent)"
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "size-4 shrink-0", style: {
            color: "color-mix(in oklab, var(--ivory) 45%, transparent)"
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+16506395232", className: "text-lg tracking-wide transition-opacity hover:opacity-80", style: {
            color: "color-mix(in oklab, var(--ivory) 60%, transparent)"
          }, children: "+1 650 639 5232" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "mailto:alena.n.vorobiev@gmail.com", className: "inline-flex items-center gap-3 rounded-full px-7 py-4 text-sm font-medium transition-opacity hover:opacity-90", style: {
          background: "var(--ivory)",
          color: "var(--plum)"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "size-4" }),
          "Get in touch"
        ] }) })
      ] })
    ] }) })
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
  }, className: "fixed top-0 inset-x-0 z-50 backdrop-blur-md border-b", style: {
    background: "color-mix(in oklab, var(--plum) 80%, transparent)",
    borderColor: "color-mix(in oklab, var(--ivory) 10%, transparent)"
  }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center justify-between", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: avLogoPng, alt: "AV monogram", className: "h-10 w-auto", style: {
        filter: "brightness(0) invert(1)"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-px h-8", style: {
        background: "color-mix(in oklab, var(--ivory) 25%, transparent)"
      }, "aria-hidden": true }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex flex-col leading-none", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-sm tracking-[0.2em] uppercase", style: {
          color: "var(--ivory)"
        }, children: "Alena Vorobiev" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[0.65rem] tracking-[0.25em] uppercase mt-1", style: {
          color: "var(--gold)"
        }, children: "UX Designer" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "hidden md:flex items-center gap-10 text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/work", className: "transition-opacity hover:opacity-100 opacity-60", style: {
        color: "var(--ivory)"
      }, children: "Work" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/articles", className: "transition-opacity hover:opacity-100 opacity-60", style: {
        color: "var(--ivory)"
      }, children: "Writing" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/about", className: "transition-opacity hover:opacity-100 opacity-60", style: {
        color: "var(--ivory)"
      }, children: "About" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "font-medium", style: {
        color: "var(--ivory)"
      }, children: "Contact" })
    ] })
  ] }) });
}
export {
  ContactPage as component
};
