import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Mail, Phone, Copy, Check } from "lucide-react";
import { useState } from "react";
import avLogoPng from "@/assets/av-logo.png";
import { Reveal } from "@/components/SectionReveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Alena Vorobiev" },
      { name: "description", content: "Get in touch with Alena Vorobiev — UX Designer open to new opportunities." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500&family=Inter:wght@300;400;500;600&display=swap" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [copied, setCopied] = useState(false);

  function copyEmail() {
    navigator.clipboard.writeText("alena.n.vorobiev@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: "var(--plum)" }}>
      <Nav />

      <main className="mx-auto max-w-7xl px-6 lg:px-10 pt-36 pb-28 lg:pt-44 lg:pb-40">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center min-h-[70vh]">

          {/* Left — headline */}
          <div>
            <Reveal>
              <motion.h1
                className="font-display leading-[0.92] text-balance"
                style={{ color: "color-mix(in oklab, var(--ivory) 45%, transparent)", fontSize: "clamp(3.5rem, 8vw, 6rem)" }}
              >
                Got something
                <br />
                complex?
              </motion.h1>
            </Reveal>
            <Reveal delay={0.08}>
              <h1
                className="font-display leading-[0.92] text-balance mt-0"
                style={{ color: "color-mix(in oklab, var(--ivory) 70%, transparent)", fontSize: "clamp(3.5rem, 8vw, 6rem)" }}
              >
                Worth
                <br />
                designing well?
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <h1
                className="font-display leading-[0.92] text-balance mt-0"
                style={{ color: "var(--ivory)", fontSize: "clamp(3.5rem, 8vw, 6rem)" }}
              >
                Let's make it
                <br />
                intuitive.
              </h1>
            </Reveal>

            <Reveal delay={0.28}>
              <p className="mt-10 text-lg leading-relaxed max-w-md" style={{ color: "color-mix(in oklab, var(--ivory) 55%, transparent)" }}>
                The best outcomes start with the right people in the room.{" "}
                <em style={{ color: "color-mix(in oklab, var(--ivory) 75%, transparent)" }}>I'd love to be one of them.</em>
              </p>
            </Reveal>
          </div>

          {/* Right — contact details */}
          <Reveal delay={0.2} className="flex flex-col gap-8">

            {/* Email */}
            <div>
              <p
                className="text-[0.65rem] uppercase tracking-[0.25em] mb-3 font-medium"
                style={{ color: "color-mix(in oklab, var(--ivory) 40%, transparent)" }}
              >
                Email
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="mailto:alena.n.vorobiev@gmail.com"
                  className="font-display text-2xl md:text-3xl transition-opacity hover:opacity-80"
                  style={{ color: "var(--ivory)" }}
                >
                  alena.n.vorobiev@gmail.com
                </a>
                <button
                  onClick={copyEmail}
                  aria-label="Copy email"
                  className="shrink-0 p-1.5 rounded-md transition-colors"
                  style={{ color: "color-mix(in oklab, var(--ivory) 50%, transparent)" }}
                >
                  {copied
                    ? <Check className="size-4" style={{ color: "var(--gold)" }} />
                    : <Copy className="size-4" />
                  }
                </button>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px w-full" style={{ background: "color-mix(in oklab, var(--ivory) 12%, transparent)" }} />

            {/* Phone */}
            <div className="flex items-center gap-3">
              <Phone className="size-4 shrink-0" style={{ color: "color-mix(in oklab, var(--ivory) 45%, transparent)" }} />
              <a
                href="tel:+16506395232"
                className="text-lg tracking-wide transition-opacity hover:opacity-80"
                style={{ color: "color-mix(in oklab, var(--ivory) 60%, transparent)" }}
              >
                +1 650 639 5232
              </a>
            </div>

            {/* Email button */}
            <div className="mt-4">
              <a
                href="mailto:alena.n.vorobiev@gmail.com"
                className="inline-flex items-center gap-3 rounded-full px-7 py-4 text-sm font-medium transition-opacity hover:opacity-90"
                style={{ background: "var(--ivory)", color: "var(--plum)" }}
              >
                <Mail className="size-4" />
                Get in touch
              </a>
            </div>

          </Reveal>
        </div>
      </main>
    </div>
  );
}

function Nav() {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 inset-x-0 z-50 backdrop-blur-md border-b"
      style={{
        background: "color-mix(in oklab, var(--plum) 80%, transparent)",
        borderColor: "color-mix(in oklab, var(--ivory) 10%, transparent)",
      }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-4">
          <img src={avLogoPng} alt="AV monogram" className="h-10 w-auto" style={{ filter: "brightness(0) invert(1)" }} />
          <span className="w-px h-8" style={{ background: "color-mix(in oklab, var(--ivory) 25%, transparent)" }} aria-hidden />
          <span className="flex flex-col leading-none">
            <span className="font-display text-sm tracking-[0.2em] uppercase" style={{ color: "var(--ivory)" }}>
              Alena Vorobiev
            </span>
            <span className="text-[0.65rem] tracking-[0.25em] uppercase mt-1" style={{ color: "var(--gold)" }}>
              UX Designer
            </span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-10 text-sm">
          <Link to="/work" className="transition-opacity hover:opacity-100 opacity-60" style={{ color: "var(--ivory)" }}>Work</Link>
          <Link to="/about" className="transition-opacity hover:opacity-100 opacity-60" style={{ color: "var(--ivory)" }}>About</Link>
          <Link to="/contact" className="font-medium" style={{ color: "var(--ivory)" }}>Contact</Link>
        </nav>
      </div>
    </motion.header>
  );
}
