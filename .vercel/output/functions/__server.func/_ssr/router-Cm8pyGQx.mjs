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
const appCss = "/assets/styles-BkGPBnkb.css";
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
const Route$6 = createRootRouteWithContext()({
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
  const { queryClient } = Route$6.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) });
}
const $$splitComponentImporter$5 = () => import("./work-BFsOu0JM.mjs");
const Route$5 = createFileRoute("/work")({
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./contact-kgrWoWrD.mjs");
const Route$4 = createFileRoute("/contact")({
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
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./about-CXjejjFu.mjs");
const Route$3 = createFileRoute("/about")({
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
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./index-D7XzgamN.mjs");
const Route$2 = createFileRoute("/")({
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
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./index-AypDrc0h.mjs");
const Route$1 = createFileRoute("/work/")({
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
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
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
    heroImage: "https://alenavorobiev.com/wp-content/uploads/2026/03/Macbook-Pro-FREE-2-1.png",
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
    heroImage: "https://alenavorobiev.com/wp-content/uploads/2026/03/Macbook-Pro-FREE-5.png",
    overview: "Mira is Meltwater's AI-powered assistant designed to simplify how users access media intelligence. By combining generative AI with intelligent agents, Mira transforms complex workflows — news monitoring, brand analysis, competitive intelligence — into a conversational experience. Instead of relying on complex Boolean searches, dashboard configuration, and manual analysis, users can ask questions in natural language and receive executive-ready insights in seconds. As part of Meltwater's first AI MVP initiative, I led the design of key product experiences that introduced conversational insights into the platform while ensuring they integrated seamlessly with existing workflows.",
    stats: [
      { value: "0→1", label: "Full AI product build" },
      { value: "Hours→Seconds", label: "Time to insight" },
      { value: "2025", label: "Year shipped" }
    ],
    sections: [
      {
        heading: "The Problem",
        body: "Before Mira, generating insights in Meltwater required deep platform expertise. Users had to construct precise Boolean queries, configure dashboards across multiple surfaces, and manually interpret results. For new users, this created a steep learning curve that slowed onboarding and limited adoption. Even experienced analysts were spending more time setting up analysis than actually analysing. The platform was powerful, but not intuitive.",
        image: "https://alenavorobiev.com/wp-content/uploads/2026/03/personas_figma_ready-2-1024x512.png"
      },
      {
        heading: "Design Approach",
        body: "We began by reframing the experience from a tool-driven model to an intent-driven one. Instead of asking users to configure searches or dashboards, we centred the interaction around a simple question: What do you want to know? This shift became the foundation for a conversational interface generating insights through natural language. One of the critical focuses was trust — AI-generated insights can feel like a black box if not designed carefully. We ensured outputs were structured, contextual, and easy to interpret, while still allowing users to refine, customise, and iterate on prompts."
      },
      {
        heading: "Key Features",
        body: "Mira Studio became the primary workspace for generating insights — users could ask questions about their brand, competitors, or industry trends and instantly receive structured reports, eliminating the need to manually build dashboards. The Prompt Library allowed users to save, organise, and reuse prompts for common analyses, turning individual knowledge into scalable team workflows. The Mira Companion embedded contextual prompts and insights directly into the platform based on what users were viewing, enabling action without leaving the current workflow.",
        image: "https://alenavorobiev.com/wp-content/uploads/2026/03/Designs-2.png"
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
    heroImage: "https://alenavorobiev.com/wp-content/uploads/2026/03/Macbook-Pro-FREE-2.png",
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
    heroImage: "https://alenavorobiev.com/wp-content/uploads/2026/02/Macbook-Pro-FREE-1-1-1024x645.png",
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
        image: "https://alenavorobiev.com/wp-content/uploads/2026/02/Frame-1922-1-1-1024x638.png"
      },
      {
        heading: "AI Insights Layer",
        body: "To eliminate manual analysis, we introduced automated contextual insights directly inside the alert — surfacing sentiment shifts, top drivers of conversation, emerging topics and keywords, source type changes, and geographic concentration. The goal was to answer the user's first question immediately: 'Why is this happening?' We also surfaced the most impactful content related to each spike, ranked by reach and engagement, reducing the need to open the platform for initial investigation.",
        image: "https://alenavorobiev.com/wp-content/uploads/2026/02/Insight-1-1-1024x814.png"
      },
      {
        heading: "Outcomes",
        body: "Alert engagement rate increased by 28%, indicating users found alerts more relevant and actionable with predictive context and AI summaries. Time to user action after an alert decreased by 33%, as users could immediately understand what was happening without investigating multiple dashboards first. Click-through to the platform from email improved by 19%. Customer interviews and feedback indicated significantly higher trust in alerts — users reported feeling more prepared to respond to emerging trends and communicate insights to leadership.",
        image: "https://alenavorobiev.com/wp-content/uploads/2026/02/performance_improvements-3-1024x577.png"
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
    heroImage: "https://alenavorobiev.com/wp-content/uploads/2025/11/Preview-1024x937.png",
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
const $$splitComponentImporter = () => import("../_id-DO7dtWtf.mjs");
const Route = createFileRoute("/work/$id")({
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
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const WorkRoute = Route$5.update({
  id: "/work",
  path: "/work",
  getParentRoute: () => Route$6
});
const ContactRoute = Route$4.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$6
});
const AboutRoute = Route$3.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$6
});
const IndexRoute = Route$2.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$6
});
const WorkIndexRoute = Route$1.update({
  id: "/",
  path: "/",
  getParentRoute: () => WorkRoute
});
const WorkIdRoute = Route.update({
  id: "/$id",
  path: "/$id",
  getParentRoute: () => WorkRoute
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
  WorkRoute: WorkRouteWithChildren
};
const routeTree = Route$6._addFileChildren(rootRouteChildren)._addFileTypes();
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
  Route as R,
  caseStudies as c,
  router as r
};
