import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { H as notFound } from "../_libs/tanstack__router-core.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import "../_libs/react-dom.mjs";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
const appCss = "/assets/styles-BHBpcnXv.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$8 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Lovable App" },
      { name: "description", content: "Plum & Teal Studio is a modern UX portfolio website showcasing design work with animated elements." },
      { name: "author", content: "Lovable" },
      { property: "og:title", content: "Lovable App" },
      { property: "og:description", content: "Plum & Teal Studio is a modern UX portfolio website showcasing design work with animated elements." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "Lovable App" },
      { name: "twitter:description", content: "Plum & Teal Studio is a modern UX portfolio website showcasing design work with animated elements." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/f79c7357-7f73-40aa-8b34-423d18a703cc/id-preview-7f192c98--c668f09f-a858-4adb-b853-4763b3510bd1.lovable.app-1781044781196.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/f79c7357-7f73-40aa-8b34-423d18a703cc/id-preview-7f192c98--c668f09f-a858-4adb-b853-4763b3510bd1.lovable.app-1781044781196.png" }
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$8.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) });
}
const $$splitComponentImporter$7 = () => import("./work-BFsOu0JM.mjs");
const Route$7 = createFileRoute("/work")({
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./contact-kgrWoWrD.mjs");
const Route$6 = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact — Alena Vorobiev"
    }, {
      name: "description",
      content: "Get in touch with Alena Vorobiev — UX Designer open to new opportunities."
    }],
    links: [{
      rel: "preconnect",
      href: "https://fonts.googleapis.com"
    }, {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "anonymous"
    }, {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500&family=Inter:wght@300;400;500;600&display=swap"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./about-D8zrqhwH.mjs");
const Route$5 = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "About — Alena Vorobiev"
    }, {
      name: "description",
      content: "Senior UX Designer combining analytical thinking with creative problem-solving to transform complex challenges into intuitive experiences."
    }],
    links: [{
      rel: "preconnect",
      href: "https://fonts.googleapis.com"
    }, {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "anonymous"
    }, {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500&family=Inter:wght@300;400;500;600&display=swap"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./index-CmYRU4JM.mjs");
const Route$4 = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Alena Vorobiev — UX Designer"
    }, {
      name: "description",
      content: "UX designer crafting clear, trustworthy product experiences. Case studies in AI, alerts, and enterprise tooling."
    }, {
      property: "og:title",
      content: "Alena Vorobiev — UX Designer"
    }, {
      property: "og:description",
      content: "UX designer crafting clear, trustworthy product experiences."
    }, {
      property: "og:type",
      content: "website"
    }],
    links: [{
      rel: "preconnect",
      href: "https://fonts.googleapis.com"
    }, {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "anonymous"
    }, {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500&family=Inter:wght@300;400;500;600&display=swap"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./index-BpYPFVrB.mjs");
const Route$3 = createFileRoute("/work/")({
  head: () => ({
    meta: [{
      title: "Work — Alena Vorobiev"
    }, {
      name: "description",
      content: "Case studies by Alena Vorobiev — UX design for AI, enterprise, and data products."
    }],
    links: [{
      rel: "preconnect",
      href: "https://fonts.googleapis.com"
    }, {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "anonymous"
    }, {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500&family=Inter:wght@300;400;500;600&display=swap"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./index-BLH06GHy.mjs");
const Route$2 = createFileRoute("/articles/")({
  head: () => ({
    meta: [{
      title: "Writing — Alena Vorobiev"
    }, {
      name: "description",
      content: "Notes on building a portfolio with AI tools — tools, process, mistakes, and what actually worked."
    }],
    links: [{
      rel: "preconnect",
      href: "https://fonts.googleapis.com"
    }, {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "anonymous"
    }, {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500&family=Inter:wght@300;400;500;600&display=swap"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const caseStudies = [
  {
    id: "smart-alerts",
    title: "Smart Alerts Redesign",
    tagline: "Redesigned the Smart Alerts experience to improve clarity, usability, and trust by simplifying alert creation.",
    tags: ["Enterprise SaaS", "Design System", "0→1 Flow"],
    year: "2025",
    role: "Lead UX Designer",
    company: "Meltwater",
    heroImage: "/smart-alerts-preview.jpg",
    overview: "Smart Alerts are a core Meltwater feature that automatically notify users about brand mentions, sentiment changes, industry events, and social engagement. Over time the alert ecosystem became increasingly complex — users struggled to understand the differences between alerts, the creation process was hard to navigate, and the management interface made it difficult to find or edit alerts. I led the redesign of two key parts: the Alert Picker (where users create alerts) and the Alerts Homepage (where users manage them). The goal was to simplify the system while supporting two very different user groups: self-serve users and Sales representatives managing enterprise clients.",
    stats: [
      { value: "9%", label: "CES score improvement" },
      { value: "18%", label: "Faster alert creation" },
      { value: "22%", label: "Faster alert discovery" }
    ],
    sections: [
      {
        heading: "The Problem",
        body: "User feedback consistently highlighted confusion in the Alert Picker. The page contained long descriptions for each alert type, forcing users to read through dense explanations before making a decision. Users had no way to preview what an alert would actually look like once created. In parallel, Sales representatives frequently create multiple alerts for the same search for VIP clients, while most regular users only create a few for their own monitoring — creating a tension between speed for Sales and simplicity for users."
      },
      {
        heading: "Solution: Alert Picker",
        body: "Balancing the needs of Sales and end users required a contextual solution. Rather than supporting multi-alert creation everywhere, we aligned functionality with actual workflows: the Alert page supports single alert creation (simpler for users), while the Explore page supports multi-alert creation (faster for Sales). This preserved efficiency for Sales teams while significantly reducing confusion for self-serve users.",
        chartId: "smart-alerts-solution"
      },
      {
        heading: "Solution: Alerts Homepage",
        body: "",
        chartId: "smart-alerts-homepage"
      },
      {
        heading: "Outcomes",
        body: "CES score improved by 9% after simplifying alert selection logic. Time to create an alert decreased by 18% due to clearer alert grouping and preview examples. Alert discovery time reduced by 22% after introducing search in the management table. Users reported higher confidence when selecting alert types. Reduced internal support requests related to alert setup by ~15%. The patterns introduced were later adopted into the broader design system.\n\nKey design lessons: Structural clarity (grouping + separation) is more powerful than visual polish. Trade-offs must align with primary user goals. Preview examples significantly increase perceived value in configuration-heavy tools."
      }
    ]
  },
  {
    id: "mira",
    title: "Mira Studio",
    tagline: "Meltwater's AI-powered assistant — transforming complex media intelligence workflows into a conversational experience.",
    tags: ["AI Product", "Conversational UI", "Research"],
    year: "2025",
    role: "Lead UX Designer",
    company: "Meltwater",
    heroImage: "/smart-alerts-preview.jpg",
    overview: "Mira is Meltwater's AI-powered assistant designed to simplify how users access media intelligence. By combining generative AI with intelligent agents, Mira transforms complex workflows — news monitoring, brand analysis, competitive intelligence — into a conversational experience. Instead of relying on complex Boolean searches, dashboard configuration, and manual analysis, users can ask questions in natural language and receive executive-ready insights in seconds. As part of Meltwater's first AI MVP initiative, I led the design of key product experiences that introduced conversational insights into the platform while ensuring they integrated seamlessly with existing workflows.",
    stats: [
      { value: "0→1", label: "Full AI product build" },
      { value: "Hours→Seconds", label: "Time to insight" },
      { value: "2025", label: "Year shipped" }
    ],
    sections: [
      {
        heading: "The Problem",
        body: "Before Mira, generating insights in Meltwater required deep platform expertise. Users had to construct precise Boolean queries, configure dashboards across multiple surfaces, and manually interpret results. For new users, this created a steep learning curve that slowed onboarding and limited adoption. Even experienced analysts were spending more time setting up analysis than actually analysing. The platform was powerful, but not intuitive."
      },
      {
        heading: "Design Approach",
        body: "We began by reframing the experience from a tool-driven model to an intent-driven one. Instead of asking users to configure searches or dashboards, we centred the interaction around a simple question: What do you want to know? This shift became the foundation for a conversational interface generating insights through natural language. One of the critical focuses was trust — AI-generated insights can feel like a black box if not designed carefully. We ensured outputs were structured, contextual, and easy to interpret, while still allowing users to refine, customise, and iterate on prompts."
      },
      {
        heading: "Key Features",
        body: "Mira Studio became the primary workspace for generating insights — users could ask questions about their brand, competitors, or industry trends and instantly receive structured reports, eliminating the need to manually build dashboards. The Prompt Library allowed users to save, organise, and reuse prompts for common analyses, turning individual knowledge into scalable team workflows. The Mira Companion embedded contextual prompts and insights directly into the platform based on what users were viewing, enabling action without leaving the current workflow."
      },
      {
        heading: "Outcome & Impact",
        body: "The launch of Mira fundamentally changed how users interacted with Meltwater. Tasks that previously required hours of setup could be completed in seconds. New users bypassed the steep learning curve and accessed meaningful insights immediately, while experienced users dramatically reduced time spent on repetitive workflows. Strategically, Mira established the foundation for AI-native experiences across the product and positioned Meltwater at the forefront of AI-driven media intelligence."
      }
    ]
  },
  {
    id: "research",
    title: "Multi-Source Alerts Research",
    tagline: "A multi-method research programme uncovering root causes of alert complexity and shaping a new alerts architecture.",
    tags: ["UX Research", "Interviews", "Synthesis"],
    year: "2024",
    role: "UX Researcher & Designer",
    company: "Meltwater",
    heroImage: "/research-preview.jpg",
    overview: "Smart Alerts are a core capability that enables PR and marketing professionals to monitor brand activity, detect risks, and respond quickly to emerging trends. However, over time the experience had become more complicated and less structured — the result of ongoing feature expansion and accumulated backend constraints.\n\nRather than jump to solutions, we approached the problem holistically. I led a research initiative spanning five methods, culminating in a cross-functional workshop that translated findings into a prioritised product roadmap. The work ran in close collaboration with a Product Manager, UX researchers, and engineering partners.\n\nEach method provided a unique perspective on the ecosystem, enabling us to build a comprehensive understanding of user needs and system constraints.",
    stats: [
      { value: "28", label: "Survey respondents (3% response rate)" },
      { value: "5", label: "Research methods" },
      { value: "6", label: "Customer interviews" }
    ],
    sections: [
      {
        heading: "General Survey & Card Sort",
        body: "The team aimed to better understand how easy it is for users to create and manage Smart Alerts, with a focus on identifying pain points, simplifying the process, and exploring opportunities to consolidate or improve alert types.\n\nRespondents: 28 Meltwater Alert users (3% response rate)\nResearch format: General survey questions and a card-sorting exercise",
        chartId: "research-survey"
      },
      {
        heading: "Sales Representative Interviews",
        body: "Three Sales and Premium Support representatives were interviewed through semi-structured sessions, workflow walkthroughs, and artifact review of existing alerts and searches. These are the power users of the system — managing alerts for large enterprise clients at scale — and the friction they experienced was acute.\n\nKey findings: bulk operations are a critical unmet need, particularly during product launches, crises, and client onboarding where dozens of alerts must be created simultaneously. The 10-recipient limit forces representatives to duplicate alerts for the same search, creating compounding maintenance overhead. Searching for existing alerts is so broken that representatives resort to browser Ctrl+F as a workaround. External email management is particularly painful — no filtering, no bulk input, emails must be added individually. In extreme enterprise cases, setting up alerts for a single client took up to 1.5 days and required 7 people.\n\nRecommendations: introduce bulk alert creation for search-based alerts; increase or remove the recipient limit; add native search and filtering to the alerts table; simplify external email entry with multi-email input; explore automation rules to reduce manual setup.",
        chartId: "smart-alerts-problem"
      },
      {
        heading: "User Interviews",
        body: "Six Meltwater customers across PR, corporate communications, and agency roles participated in moderated usability sessions with task-based scenarios covering alert creation, modification, and receipt. This method moved beyond stated preferences into observed behaviour — surfacing friction that users had normalised and could not easily articulate in a survey.\n\nKey findings: Every Mention alerts are mission-critical for daily threat scanning. Alert usage is highly event-driven, with volume fluctuating dramatically around campaigns and crises. Users manually validate alerts daily to catch outliers the system misses. Regional comparison across US, EU, and APAC markets is essential for crisis strategy — a need the current system doesn't support well. Alert expiration is managed through naming conventions because the system offers no native lifecycle management. Executive reporting requires manual screenshots because there is no export path.\n\nThe Smart vs. System Alerts distinction was a persistent source of confusion — users had built incorrect mental models about which system was responsible for which notifications, leading to missed alerts and misplaced troubleshooting.",
        chartId: "research-user-interviews"
      },
      {
        heading: "Peer Review",
        body: "Two product designers from cross-functional teams evaluated the Smart Alerts experience through moderated usability sessions. The focus was on identifying friction points, validating interaction patterns, and uncovering inconsistencies across alert entry points.\n\nRespondents: 2 Product Designers (cross-team peers)\nResearch format: Moderated usability sessions with task-based scenarios covering alert creation, modification, and management across Explore and Alerts pages",
        chartId: "research-peer-review"
      },
      {
        heading: "Expert Heuristic Evaluation",
        body: "Two UX researchers conducted a structured heuristic evaluation based on Nielsen's 10 Usability Heuristics, covering the full alert lifecycle — from creation through management to receiving and interpreting alerts in email.\n\nReviewers: 2 UX Researchers\nResearch format: Heuristic evaluation with task-based walkthroughs across Explore, Monitor, Alerts page, and email notifications",
        chartId: "research-expert-review"
      },
      {
        heading: "Workshop & Strategic Synthesis",
        body: "The cross-functional workshop was the final synthesis phase — bringing together Product, Design, Research, and Engineering to translate five streams of research into a shared, actionable product direction. Rather than another ideation session, the goal was alignment: on root causes, on what was feasible, and on a simplified alert framework.\n\nThe session began with a structured walkthrough of all research findings to ground decisions in evidence. We then mapped current alert types against actual user use cases, evaluated configuration overlap, and pressure-tested consolidation hypotheses against technical constraints and existing mental models.\n\nKey findings: the current ecosystem contains too many alert types with overlapping purposes, creating cognitive overload. Users think in terms of goals — brand monitoring, crisis detection, campaign tracking — not alert names. Multiple alerts detect similar signals (volume change, sentiment change, reach), creating consolidation opportunities with manageable risk. Threshold control and AI summarisation were identified as the highest-leverage mechanisms for reducing alert fatigue.\n\nThe workshop produced a prioritised action framework across four dimensions: quick usability wins, consolidation candidates, structural architecture changes, and longer-term AI-powered capabilities. This became the research-backed roadmap that directly shaped the Smart Alerts Redesign.",
        chartId: "workshop-full"
      }
    ]
  },
  {
    id: "forecasting",
    title: "Alert Forecasting & AI Insights",
    tagline: "Shifting spike detection from reactive notification to proactive decision support — with forecasting and AI-powered insights.",
    tags: ["Data Viz", "AI Insights", "Feature Design"],
    year: "2024",
    role: "Lead UX Designer",
    company: "Meltwater",
    heroImage: "/forecasting-preview.jpg",
    overview: "Organisations rely on media monitoring tools to react quickly to changes in conversation volume. But traditional spike alerts are reactive — they notify users only after a spike occurs, limiting the ability to prepare. This project introduced forecasting into spike detection alerts, enabling users to anticipate upcoming surges in mentions and understand the drivers behind them through AI-generated insights. My role focused on designing the forecast visualisation model, alert experience, and insight interpretation layer to support faster decision-making.",
    stats: [
      { value: "28%", label: "Increase in alert engagement" },
      { value: "33%", label: "Faster time to action" },
      { value: "19%", label: "Higher click-through to platform" }
    ],
    sections: [
      {
        heading: "The Problem",
        body: "Users monitoring brand mentions faced three major challenges: reactive alerts that triggered after spikes occurred, leaving little time to respond; low confidence in trends, making it hard to judge whether a spike was meaningful or temporary; and a manual analysis burden requiring navigation across multiple dashboards to understand why a spike happened. This created significant friction for PR teams, marketers, and analysts who needed rapid situational awareness."
      },
      {
        heading: "Forecast Visualisation",
        body: "A predictive area was added to the chart showing expected mention volume beyond the current data point — including expected direction of conversation, potential spike severity, and a confidence range visualised as a shaded area. The visual language used: solid line for actual mentions, dashed line for trend baseline, shaded extension for forecast projection. For every 3 historical data points, the system generates 1 forecast point, producing a forward-looking trajectory that extends beyond real data. This separation prevented confusion between observed and predicted data.",
        image: "/forecast-visualisation.png"
      },
      {
        heading: "AI Insights Layer",
        body: "To eliminate manual analysis, we introduced automated contextual insights directly inside the alert — surfacing sentiment shifts, top drivers of conversation, emerging topics and keywords, source type changes, and geographic concentration. The goal was to answer the user's first question immediately: 'Why is this happening?' We also surfaced the most impactful content related to each spike, ranked by reach and engagement, reducing the need to open the platform for initial investigation.",
        image: "/ai-insights-layer.png"
      },
      {
        heading: "Outcomes",
        body: "Alert engagement rate increased by 28%, indicating users found alerts more relevant and actionable with predictive context and AI summaries. Time to user action after an alert decreased by 33%, as users could immediately understand what was happening without investigating multiple dashboards first. Click-through to the platform from email improved by 19%. Customer interviews and feedback indicated significantly higher trust in alerts — users reported feeling more prepared to respond to emerging trends and communicate insights to leadership.",
        image: "/forecasting-outcomes.png"
      }
    ],
    quote: {
      text: "I wanted to share feedback on the new AI summary in Alerts — this feature is amazing. I don't have to dig through data anymore and can react so much faster. This week we had an important spike, and I was able to flag it to my manager right before a presentation so we could adjust in time. It honestly made a huge difference.",
      attribution: "One of company clients —"
    }
  },
  {
    id: "uwork",
    title: "uWork",
    tagline: "Mobile app helping self-employed tradespeople and small construction crews manage jobs end-to-end.",
    tags: ["Mobile", "0→1 Product", "Branding"],
    year: "2023",
    role: "Lead UX/UI Designer",
    company: "uWork",
    heroImage: "/uwork-preview.jpg",
    overview: "uWork is an iOS application built for self-employed tradespeople and small construction businesses — helping them track customers, projects, jobs, materials, expenses, and documents in one place. It monitors project timelines, contracted amounts, worker payments, and customer payments throughout project lifecycles. I owned research, user testing, wireframes, high-fidelity screens, and the prototype, collaborating closely with the CEO and a team of engineers to take the product from zero to launch.",
    stats: [
      { value: "0→1", label: "Full product build" },
      { value: "iOS", label: "Platform" },
      { value: "2", label: "User archetypes designed for" }
    ],
    sections: [
      {
        heading: "The Problem",
        body: "Workers struggle with managing multiple jobs and material purchases across clients. Documentation gets misplaced and information gets forgotten over time. Clients make incremental payments, making it hard to track outstanding balances. Tracking multiple clients and workers across projects simultaneously proves consistently difficult. There was no purpose-built tool for small crews — existing solutions were either too complex (enterprise software) or too simple (spreadsheets)."
      },
      {
        heading: "Research & Personas",
        body: "Workers frequently lose material purchase receipts due to high work volume. Clients make incremental payments and owners need to track outstanding balances. Two primary user archetypes emerged: Business Owners who need full access across all projects, clients, workers, and financials; and Workers who need access limited to their own assigned tasks and job details.",
        chartId: "uwork-personas"
      },
      {
        heading: "Design Process",
        body: "",
        chartId: "uwork-ideation"
      },
      {
        heading: "Photo Feature",
        body: "Pictures may be taken along the way and stored in the app, where they will be attached to individual phases of the Project. The app uses Artificial Intelligence to empower the user to find any picture on a particular subject in no time.",
        chartId: "uwork-photo"
      },
      {
        heading: "Key Features",
        body: "A role-based access model giving Business Owners full functionality while limiting Workers to their own tasks and responsibilities. An integrated photo feature allowing users to capture and store project photos by phase, with AI-powered photo retrieval by subject. A unified Project page connecting all associated workers, customers, jobs, and materials in one view — making the full state of any project immediately visible."
      },
      {
        heading: "Prototype. Projects page",
        body: "The project page includes all the information about the project. It also has connected workers, customers, jobs, materials that you can access right through the project page.",
        video: "/uwork-prototype.mov"
      },
      {
        heading: "Outcome",
        body: "The app launched on iOS with strong feedback from early users in the trades community. The design system built for uWork established visual and interaction patterns that scaled cleanly as new features were added post-launch. User feedback gathered after launch shaped the iteration roadmap and confirmed the core IA decisions made during the design process."
      }
    ]
  }
];
function getCaseStudy(id) {
  return caseStudies.find((cs) => cs.id === id);
}
const $$splitComponentImporter$1 = () => import("../_id-aNxJonKu.mjs");
const Route$1 = createFileRoute("/work/$id")({
  head: ({
    params
  }) => {
    const cs = getCaseStudy(params.id);
    return {
      meta: [{
        title: cs ? `${cs.title} — Alena Vorobiev` : "Case Study — Alena Vorobiev"
      }, {
        name: "description",
        content: cs?.tagline ?? ""
      }],
      links: [{
        rel: "preconnect",
        href: "https://fonts.googleapis.com"
      }, {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous"
      }, {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500&family=Inter:wght@300;400;500;600&display=swap"
      }]
    };
  },
  loader: ({
    params
  }) => {
    const cs = getCaseStudy(params.id);
    if (!cs) throw notFound();
    return cs;
  },
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const articles = [
  {
    slug: "part-1-why-im-documenting",
    part: 1,
    title: "Why I'm Documenting How I Rebuilt My Portfolio",
    subtitle: "On years of templates, false starts, and finally finding a workflow that felt like mine.",
    readTime: "6 min read",
    excerpt: "I've redesigned my portfolio more times than I'd like to admit — and for years, none of them felt right. That's why I want to document exactly how I built it, what worked, what didn't, and the tools I used.",
    sections: [
      {
        type: "paragraph",
        content: "I've redesigned my portfolio more times than I'd like to admit — and for years, none of them felt right."
      },
      {
        type: "paragraph",
        content: "Part of the problem is that I'm not an engineer. Building a portfolio website always felt like a frustrating compromise for me: choosing a template, trying to force my work into someone else's structure, and constantly hitting limitations. Every platform had restrictions, and instead of focusing on showcasing my work, I found myself obsessing over small imperfections and technical hurdles I didn't know how to fix."
      },
      {
        type: "paragraph",
        content: "Whenever I tried to improve things, I'd get stuck in the details — hosting options, platform limitations, plugins, and layouts. There was always something getting in the way, and eventually I'd give up and go back to whatever I had before."
      },
      {
        type: "paragraph",
        content: "Recently, I've noticed more designers experimenting with AI-powered tools such as Claude alongside platforms like Vercel, to build their portfolios. Instead of fighting templates, designers can now create experiences that feel much closer to their original vision."
      },
      {
        type: "paragraph",
        content: "That's what led me to try a different approach. I already owned a domain and wanted to launch a portfolio that felt truly mine. I turned to Claude to figure out where to start. Was it easy? Absolutely not. The process wasn't always straightforward, but it taught me a lot about what's possible today for designers who want more control over their online presence without becoming full-time developers."
      },
      {
        type: "paragraph",
        content: "That's why I want to document exactly how I built my portfolio, what worked, what didn't, the mistakes I made, and the tools I used along the way."
      },
      {
        type: "heading",
        content: "Treating Myself Like a Client"
      },
      {
        type: "paragraph",
        content: "I started with research — browsing other designers' portfolios to understand what works, what looks good, and what I'd actually want to replicate."
      },
      {
        type: "paragraph",
        content: "Then I turned inward. I created my color palette and an inspiration moodboard so my portfolio would feel pleasing to me — not just professionally appropriate, but genuinely mine."
      },
      {
        type: "paragraph",
        content: "From there, I started exploring tools. I started with Claude Design and Claude Code — and quickly went down a rabbit hole of information that was hard to apply in practice."
      },
      {
        type: "paragraph",
        content: "That's when I came across a workshop about building websites with Claude — it appeared to be about creating websites for businesses, not really my use case. The guy running it said he'd take 5 people for a free consultation, and I signed up anyway."
      },
      {
        type: "paragraph",
        content: "Before the session, I was already trying to make things work with my existing setup. I was paying for WordPress, so I asked Claude chat whether I could deploy a Claude Code file straight to WordPress. It said yes — and walked me through the steps. Technically possible, but complicated enough that I kept stalling."
      },
      {
        type: "paragraph",
        content: "That free consultation turned out to be one of the most useful things I did. Chris Shon, founder of Compound, walked me through a completely different approach and pointed out that I could drop WordPress entirely. He spent over an hour with me — longer than the call was supposed to be. I walked away with a good tool setup and a clear path forward for the first time. I think I would have been stuck for much longer figuring it out on my own — so I just want to shout out Chris, because I don't think I'd be writing this article without that conversation."
      },
      {
        type: "heading",
        content: "The Workflow That Changed Everything"
      },
      {
        type: "paragraph",
        content: "That consultation reframed a lot for me. The advice was simple: stop trying to build the final website right away. Build a starting point first — something you can then bring into Claude Code and refine from there."
      },
      {
        type: "paragraph",
        content: "So we outlined a four-tool pipeline that mirrors his own process:"
      },
      {
        type: "list",
        content: "",
        items: [
          "Lovable — generate an initial website prototype from a descriptive prompt. The free tier gives you credits that replenish daily, which is enough to get a solid first draft.",
          "GitHub — host the Lovable-generated code as a repository. Think of it as a home for your website's files that other tools can read and write to.",
          "Claude Code — pull the GitHub repo locally to iterate, refine the design, and make ongoing edits. Chris also recommended installing a front-end design 'skill' to make Claude a better design collaborator.",
          "Vercel — deploy and host the final site, connectable to an existing domain through a simple DNS change."
        ]
      },
      {
        type: "visual",
        content: "",
        visualId: "pipeline-flow"
      },
      {
        type: "paragraph",
        content: "The beauty of this setup is that once it's in place, editing your website becomes a conversation. You describe what you want changed, and it happens."
      },
      {
        type: "heading",
        content: "Writing the Brief for Myself"
      },
      {
        type: "paragraph",
        content: "The first step was writing a Lovable prompt — and this part was harder than I expected. As designers, we're used to translating other people's visions into interfaces. Translating my own felt strangely exposing."
      },
      {
        type: "paragraph",
        content: "My prompt covered:"
      },
      {
        type: "list",
        content: "",
        items: [
          "The type of site: UX portfolio, minimal, modern, elegant feel",
          "Motion: scroll animations, an animated hero section that grabs attention on landing",
          "My color palette (I already had this ready from my earlier moodboard work)",
          "A critical instruction: pull content and copy from my existing site, but do not reference it for design"
        ]
      },
      {
        type: "paragraph",
        content: "That last part mattered a lot. I didn't want the AI anchoring itself to what I was already trying to escape."
      },
      {
        type: "quote",
        content: "A few minutes later, I had a first version of a homepage. Not perfect — but mine. Built from my words, not someone else's template."
      },
      {
        type: "teaser",
        content: "In Part 2, I'll walk through what that first version actually looked like, what I changed, and how the whole pipeline came together — including the part where I finally got it live."
      }
    ]
  },
  {
    slug: "part-2-from-first-draft",
    part: 2,
    title: "From First Draft to a Site I Could Actually Edit",
    subtitle: "Setting up the pipeline, handing off to Claude Code, and discovering that deployment is its own discipline.",
    readTime: "5 min read",
    excerpt: "When the Lovable draft came through, I resisted the urge to fix everything at once. The bones were good. What came next was learning how to iterate — and discovering that getting it live was a project in itself.",
    sections: [
      {
        type: "heading",
        content: "The First Look"
      },
      {
        type: "paragraph",
        content: "When the Lovable draft came through, I resisted the urge to fix everything at once. Instead I evaluated the bones: the layout worked, the case study section structure made sense, the overall flow told my story in the right order. Good enough to move forward."
      },
      {
        type: "paragraph",
        content: "The things I didn't like — a white background behind a hero image, some oversized photos, a few odd sizing choices — were all things Claude Code could handle later. I noted them and kept moving."
      },
      {
        type: "paragraph",
        content: "I also thought about the contact section at this stage. My goal with this portfolio isn't freelance clients — it's finding the right full-time role. So rather than a generic contact form, I wanted something oriented toward companies and hiring teams: a simple, direct email."
      },
      {
        type: "heading",
        content: "Publishing and Setting Up the Pipeline"
      },
      {
        type: "paragraph",
        content: "Once I was happy enough with the draft, I published it on Lovable and started connecting the pieces. Here's what that actually involved — because nobody warns you about this part:"
      },
      {
        type: "list",
        content: "",
        items: [
          "Created a GitHub account and connected it to Lovable, so the project code would live in a repository I owned",
          "Installed Homebrew and Git via Terminal (yes, Terminal — I felt like a hacker in a movie, but it wasn't as scary as it looks)",
          "Opened the project in Claude Code using the GitHub repo URL, so Claude could read and edit my site files directly",
          "Installed the front-end design skill — a prompt file that gives Claude better instincts for visual design decisions",
          "Ran /init to initialize the project, which creates a setup file so Claude understands the context",
          "Made the GitHub repo public to resolve a token issue Claude flagged (for a portfolio site, this is fine)",
          "Launched a local preview in the browser so I could see changes in real time as Claude made them"
        ]
      },
      {
        type: "visual",
        content: "",
        visualId: "setup-steps"
      },
      {
        type: "heading",
        content: "Handing It Off to Claude Code"
      },
      {
        type: "paragraph",
        content: 'This is where things shifted from "AI generates something" to "AI helps me iterate." With the repo loaded into Claude Code, I could describe changes in plain language and watch them happen live in my browser preview.'
      },
      {
        type: "quote",
        content: `"This background should be transparent, not white." "These images are too large and slowing things down." "I want more breathing room in this section." Each one of these, historically, would've meant opening Photoshop, exporting, re-uploading, digging through CSS. Now it was a sentence.`
      },
      {
        type: "paragraph",
        content: "Which made what came next even more surprising — because the hardest part wasn't editing the site. It was getting it live."
      },
      {
        type: "teaser",
        content: "In Part 3, I'll walk through the two hours of troubleshooting, the dead images, the 504 errors, and the small configuration file that finally made everything work."
      }
    ]
  },
  {
    slug: "part-3-getting-it-live",
    part: 3,
    title: "Getting It Live — and Why That Was Harder Than I Expected",
    subtitle: "404s, dead images, a 1MB animation, and the invisible problem that was causing all of it.",
    readTime: "7 min read",
    excerpt: "I pushed to Vercel. The domain connected. Everything looked right. But I still got a 404. What followed was two hours of troubleshooting — and a lesson in the difference between what looks like the problem and what actually is the problem.",
    sections: [
      {
        type: "heading",
        content: "The Site Existed. The Site Returned a 404."
      },
      {
        type: "paragraph",
        content: "I pushed to Vercel. The domain connected. Everything looked right. But I still got a 404."
      },
      {
        type: "paragraph",
        content: "This is the part of the process nobody prepares you for."
      },
      {
        type: "paragraph",
        content: "What followed was about two hours of troubleshooting. Every fix uncovered something new — the wrong settings in Vercel, a missing tool on my machine, a build folder that GitHub was silently ignoring the whole time. We'd fix one thing, redeploy, and get the same 404. Then fix the next thing. Same result."
      },
      {
        type: "paragraph",
        content: "Every fix revealed another layer. Eventually, Claude chat suggested going to Claude Code and asking it directly. Claude Code could actually see my project files and from that, it created a vercel.json configuration file — one small file that told Vercel exactly how to serve the site. That's what the whole two hours had been building toward."
      },
      {
        type: "paragraph",
        content: "I pushed it. Redeployed. And it worked. Mostly. Some of the images were dead."
      },
      {
        type: "heading",
        content: "The Image Problem"
      },
      {
        type: "paragraph",
        content: "When I built the site, Lovable and Claude Code pulled content and some of the images from my existing portfolio to populate the case studies. That made sense at the time — it was the fastest way to get real content in. But once I switched my domain from the old WordPress site to the new one, those image references broke. Those images had been pointing back to my old site, and now that site was gone. I had to go in and replace every one of them with local files."
      },
      {
        type: "paragraph",
        content: "And those local files were a problem in their own right. Some of my images were bigger than they needed to be to display properly. The browser was trying to download a significant amount of image data just to render the homepage. Claude helped me compress everything systematically, convert photo PNGs to JPEGs (photos saved as PNG are big because the format is lossless — something I hadn't thought about), and get the total image payload down to a fraction of what it was."
      },
      {
        type: "paragraph",
        content: "An improvement. But the site still wasn't loading properly."
      },
      {
        type: "heading",
        content: "The 1MB Problem Nobody Mentions"
      },
      {
        type: "paragraph",
        content: "The real issue turned out to be something I never would have found on my own: a 3D animation in the hero section — a rotating orb built with a library called Three.js — was being bundled into the server function. Every time someone visited the site, the server had to load 1MB of 3D graphics code before it could send back a single line of HTML."
      },
      {
        type: "paragraph",
        content: "Vercel's free plan has a 10-second timeout on server functions. The Three.js cold start was pushing past it, causing a 504 error — a gateway timeout. The site wasn't broken. It was just taking longer to wake up than Vercel would allow."
      },
      {
        type: "paragraph",
        content: "Claude tried several approaches, and some of them partially worked. One of them actually made things worse — the site went from slow to completely unresponsive. Each fix revealed a new constraint. It took a while to find something that actually held."
      },
      {
        type: "visual",
        content: "",
        visualId: "cold-start-problem"
      },
      {
        type: "heading",
        content: "The Fix That Actually Worked"
      },
      {
        type: "paragraph",
        content: "In the end, the cleanest solution was to pre-render every page as static HTML during the build — so the server function doesn't need to run at all when someone visits. Vercel serves the pre-rendered HTML directly from its CDN. No cold start. No timeout."
      },
      {
        type: "quote",
        content: "It's a good lesson in the difference between what looks like the problem and what actually is the problem. I thought it was the images. Images were part of it. But the deeper issue was invisible — a library choice made automatically by the AI when it first generated the site, that only became a problem when the site hit a real hosting environment with real constraints."
      },
      {
        type: "heading",
        content: "It's Live"
      },
      {
        type: "paragraph",
        content: "After all of that — the WordPress crashes, the template loops, the consultation, the GitHub setup, the Terminal commands, the 504 errors, the image compression, the Three.js rabbit hole — the site is live."
      },
      {
        type: "paragraph",
        content: "It's not perfect. There are still things I want to refine — case study pages, mobile details, copy tweaks. But it's mine. Built from a brief I wrote for myself, edited through conversation, and pushed live through tools I'd never used six months ago."
      },
      {
        type: "teaser",
        content: "In Part 4, I'll share what I learned about working with Claude Code — how to prompt it like a design brief, what I'd do differently, and the small decisions that ended up defining the feel of the site."
      }
    ]
  },
  {
    slug: "part-4-what-i-learned",
    part: 4,
    title: "What I Learned About Working With Claude Code",
    subtitle: "On prompting like a creative director, the decisions that defined the site, and what it means to have a workflow.",
    readTime: "6 min read",
    excerpt: "The biggest mindset shift when working with Claude Code is that it isn't a tool you operate — it's a collaborator you direct. And like any collaborator, the quality of what you get back depends almost entirely on the quality of what you give it.",
    sections: [
      {
        type: "heading",
        content: "Talking to It Like a Creative Director"
      },
      {
        type: "paragraph",
        content: "The biggest mindset shift when working with Claude Code is that it isn't a tool you operate — it's a collaborator you direct. And like any collaborator, the quality of what you get back depends almost entirely on the quality of what you give it."
      },
      {
        type: "paragraph",
        content: `You can't be vague. "Make the homepage look better." "Can you fix the spacing?" These kinds of prompts get vague results — technically correct changes that don't actually move the design forward. I've learned to be specific in the way I'd be specific in a design brief: not just what you want changed, but why, and what feeling it should create.`
      },
      {
        type: "paragraph",
        content: "The prompts that worked best sounded like this:"
      },
      {
        type: "quote",
        content: '"The hero section feels too heavy — I want more breathing room between the headline and the scroll indicator. The overall feeling should be calm and considered, not crowded."'
      },
      {
        type: "paragraph",
        content: "Specific. Visual. With a reason attached. Like having a conversation with someone who actually understood what I was going for."
      },
      {
        type: "visual",
        content: "",
        visualId: "prompt-quality"
      },
      {
        type: "heading",
        content: "What I'd Do Differently"
      },
      {
        type: "paragraph",
        content: "Looking back at everything — the broken images, the 404 errors, the two hours of Terminal troubleshooting — there are a few things I'd do differently."
      },
      {
        type: "list",
        content: "",
        items: [
          "Prepare assets before touching any AI tool. The biggest headaches came from images — uncompressed screenshots, photos saved as PNG, files that were 20,000 pixels wide. Next time: compress everything, rename files clearly, organize into folders, then start.",
          "Spend more time on the Lovable prompt. The first draft shapes everything that comes after. A better brief upfront would have saved some iteration time.",
          `Ask Claude to explain, not just fix. A lot of the time I'd describe a problem and Claude would just solve it. When I asked "can you explain what you just did and why," the answers were genuinely useful and stuck with me.`
        ]
      },
      {
        type: "heading",
        content: "The Design Decisions That Made the Biggest Difference"
      },
      {
        type: "paragraph",
        content: "A few specific choices ended up defining the feel of the site more than anything else:"
      },
      {
        type: "list",
        content: "",
        items: [
          "Color over complexity. I spent a lot of time on my palette before I started building, and that investment paid off. Because I had clear primary and accent colors going in, Claude could apply them consistently without me having to correct things repeatedly.",
          "Restraint in the hero. My instinct was to make the hero section as impressive as possible — lots of motion, lots of elements. What actually worked better was simplicity: a clean animated shape, my name, a short line about what I do. Less to distract from the work itself.",
          "Password-protecting case studies. This filters for the kind of engagement I actually want: someone motivated enough to reach out and ask for access, not someone clicking through passively."
        ]
      },
      {
        type: "heading",
        content: "What's Next"
      },
      {
        type: "paragraph",
        content: "The site is live, but I don't think of it as finished — I think of it as deployed. There's a difference."
      },
      {
        type: "paragraph",
        content: "The process I've built — write a prompt, see the change in local preview, push when happy — makes all of that feel manageable in a way that editing a WordPress theme never did. I can work on my portfolio the same way I work on any design project: iteratively, with clear feedback loops, and without waiting on someone else to implement what I'm imagining."
      },
      {
        type: "quote",
        content: `I assumed "building your own website with AI" meant one big effort followed by a finished thing. What it actually means is having a workflow — a way of making changes that's fast enough that you'll actually use it. That's what I have now — and that feels like more of an achievement than the site itself.`
      },
      {
        type: "paragraph",
        content: "This is where the series ends, but the project doesn't. The portfolio is live, the workflow is in place, and for the first time in years I'm not dreading the idea of updating it. That feels like enough for now."
      }
    ]
  }
];
const $$splitComponentImporter = () => import("../_slug-Cc3e9Tm-.mjs");
const Route = createFileRoute("/articles/$slug")({
  head: ({
    params
  }) => {
    const article = articles.find((a) => a.slug === params.slug);
    return {
      meta: [{
        title: article ? `Part ${article.part}: ${article.title} — Alena Vorobiev` : "Article — Alena Vorobiev"
      }, {
        name: "description",
        content: article?.excerpt ?? ""
      }],
      links: [{
        rel: "preconnect",
        href: "https://fonts.googleapis.com"
      }, {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous"
      }, {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500&family=Inter:wght@300;400;500;600&display=swap"
      }]
    };
  },
  loader: ({
    params
  }) => {
    const article = articles.find((a) => a.slug === params.slug);
    if (!article) throw notFound();
    return article;
  },
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const WorkRoute = Route$7.update({
  id: "/work",
  path: "/work",
  getParentRoute: () => Route$8
});
const ContactRoute = Route$6.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$8
});
const AboutRoute = Route$5.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$8
});
const IndexRoute = Route$4.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$8
});
const WorkIndexRoute = Route$3.update({
  id: "/",
  path: "/",
  getParentRoute: () => WorkRoute
});
const ArticlesIndexRoute = Route$2.update({
  id: "/articles/",
  path: "/articles/",
  getParentRoute: () => Route$8
});
const WorkIdRoute = Route$1.update({
  id: "/$id",
  path: "/$id",
  getParentRoute: () => WorkRoute
});
const ArticlesSlugRoute = Route.update({
  id: "/articles/$slug",
  path: "/articles/$slug",
  getParentRoute: () => Route$8
});
const WorkRouteChildren = {
  WorkIdRoute,
  WorkIndexRoute
};
const WorkRouteWithChildren = WorkRoute._addFileChildren(WorkRouteChildren);
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  ContactRoute,
  WorkRoute: WorkRouteWithChildren,
  ArticlesSlugRoute,
  ArticlesIndexRoute
};
const routeTree = Route$8._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Route$1 as R,
  articles as a,
  Route as b,
  caseStudies as c,
  router as r
};
