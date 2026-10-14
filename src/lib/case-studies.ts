export type SectionBlock =
  | { type: "text"; content: string }
  | { type: "image"; src: string }
  | { type: "images"; srcs: string[] }
  | { type: "bullets"; items: string[] }
  | { type: "numbered"; items: string[] }
  | { type: "callout"; content: string };

export interface CaseStudy {
  id: string;
  title: string;
  tagline: string;
  tags: string[];
  year: string;
  role: string;
  company: string;
  heroImage: string;
  overview: string;
  sections: { heading: string; body?: string; blocks?: SectionBlock[]; image?: string; image2?: string; images?: string[]; chartId?: string; video?: string }[];
  stats?: { value: string; label: string }[];
  quote?: { text: string; attribution: string };
}

export const caseStudies: CaseStudy[] = [
  {
    id: "smart-alerts",
    title: "Smart Alerts Redesign",
    tagline:
      "Redesigned the Smart Alerts experience to improve clarity, usability, and trust by simplifying alert creation.",
    tags: ["Enterprise SaaS", "Design System", "0→1 Flow"],
    year: "2025",
    role: "Lead UX Designer",
    company: "Meltwater",
    heroImage: "/smart-alerts-preview.jpg",
    overview:
      "Meltwater is an enterprise media intelligence platform that helps companies monitor media coverage, brand reputation, competitors, and industry trends. Smart Alerts is a notification system within the platform that helps users stay informed about important events without constantly checking their dashboards or search results. For example, a PR professional might want to know when there's an unusual spike in brand mentions, a sudden shift in sentiment, or a conversation gaining significant attention.",
    stats: [
      { value: "9%", label: "CES score improvement" },
      { value: "18%", label: "Faster alert creation" },
      { value: "22%", label: "Faster alert discovery" },
    ],
    sections: [
      {
        heading: "The Problem — Why Redesign Smart Alerts?",
        body: "",
        blocks: [
          { type: "text", content: "Over time, Smart Alerts had evolved into a fairly complex product. New alert types had been added as new capabilities were introduced, but the overall experience hadn't evolved in the same way." },
          { type: "image", src: "/sa-alerts-structure.png" },
          { type: "text", content: "As a result, users faced several challenges:" },
          { type: "bullets", items: [
            "It wasn't always clear which alert type to choose. Some alerts had overlapping functionality, and their descriptions weren't particularly helpful.",
            "Alert configuration could be complicated, especially for users unfamiliar with the differences between alert types.",
            "Alert relevance was a concern — users weren't always receiving information they found useful or actionable.",
          ]},
          { type: "text", content: "So this wasn't simply a visual redesign. We wanted to improve how users discovered, created, and managed alerts, while helping them receive information that was genuinely valuable." },
          { type: "callout", content: "How might we make a sophisticated alerting system easier to understand and configure while preserving the flexibility different users need?" },
        ],
      },
      {
        heading: "Discovery — What We Learned",
        body: "",
        blocks: [
          { type: "text", content: "I started by reviewing existing user feedback, conducting research, and evaluating the current experience.\n\nOne of our research activities was a user survey, which helped us understand why people were using alerts:" },
          { type: "bullets", items: [
            "Brand monitoring — most common use case, mentioned by 68% of respondents",
            "Crisis preparation — second most common, mentioned by 57%",
          ]},
          { type: "text", content: "Every Mention and Spike Detection were among the primary alert types supporting those needs.\n\nWe also learned that users wanted more clarity around alert selection and better control over relevance. Alongside the survey, we conducted interviews, heuristic evaluations, and design reviews to identify usability issues, inconsistencies, and unnecessary complexity." },
          { type: "images", srcs: ["/sa-survey-slide1.png", "/sa-survey-slide2.png", "/sa-survey-slide3.png", "/sa-survey-slide4.png", "/sa-survey-slide5.png", "/sa-survey-slide6.png"] },
          { type: "text", content: "Based on those findings, we identified several opportunities:" },
          { type: "bullets", items: [
            "Clearly distinguish Smart Alerts from System Alerts.",
            "Organize alert types into meaningful groups.",
            "Provide examples so users could understand what each alert would deliver.",
            "Reduce overlapping functionality by consolidating similar alert types.",
            "Give users better control over thresholds and notification frequency.",
            "Make notifications easier to understand through clearer explanations and AI-generated summaries.",
          ]},
          { type: "text", content: "However, we couldn't implement everything at once. Some improvements were relatively straightforward, while others required significant backend changes or could affect existing user workflows. That led us to a phased approach." },
        ],
      },
      {
        heading: "Strategy — Prioritizing Improvements",
        body: "",
        blocks: [
          { type: "text", content: "We organized the redesign into three stages:" },
          { type: "numbered", items: [
            "Structural improvements deliverable quickly: separating Smart and System Alerts, improving navigation and grouping, introducing search, and adding examples to the alert picker.",
            "Consolidating overlapping alert types — more complex because it involved changes to existing functionality and could affect users who depended on specific alerts.",
            "Advanced filtering and configuration improvements.",
          ]},
          { type: "text", content: "We intentionally postponed some filtering work until after the alert taxonomy was finalized. Otherwise, we risked investing engineering effort into a structure that we already knew might change. This sequencing helped us deliver improvements incrementally while managing technical complexity and implementation risk." },
        ],
      },
      {
        heading: "Design Decisions: Alerts Structure & Navigation",
        body: "",
        blocks: [
          { type: "text", content: "One of the first issues we identified was that System Alerts and Smart Alerts appeared together, even though they served very different purposes." },
          { type: "image", src: "/sa-slide-system-alerts.png" },
          { type: "bullets", items: [
            "Smart Alerts analyze monitored information to identify meaningful events or changes, such as spikes in coverage or sentiment shifts.",
            "System Alerts communicate operational information, such as account or system-related updates.",
          ]},
          { type: "text", content: "From a user's perspective, these are different mental models, so grouping them together created unnecessary confusion.\n\nWe explored several approaches. One option was to move System Alerts into account settings. Another was to place them closer to the product areas that generated them. However, those approaches introduced complications around data structure, ownership, and ongoing maintenance.\n\nAfter discussions with product leadership and engineering, we decided to keep both under the broader Alerts area but separate them into distinct tabs. This aligned well with improvements happening in our design system, where we had recently introduced updated table and tab patterns.\n\nIt wasn't the most radical solution, but it provided a clear improvement with relatively low implementation cost. The important tradeoff was balancing an ideal information architecture with the technical and organizational constraints of the existing product." },
          { type: "image", src: "/sa-alerts-page-changes.jpg" },
          { type: "text", content: "Once we separated System Alerts, we focused on the Smart Alerts management experience. We reorganized navigation by grouping alerts according to their input types and placing the most commonly used alerts prominently within each group.\n\nWe also considered introducing an All Alerts view. However, different alert types relied on different inputs and underlying data structures. Combining them into one view would have required substantial backend work. Research also suggested users didn't have a strong need for a unified view — so we decided not to introduce additional complexity without a clear user benefit.\n\nAnother important improvement was search. Previously, users had no dedicated search functionality in the management table. Some relied on their browser's Find command, and locating a specific alert could take considerable time." },
          { type: "callout", content: "The key decision was to prioritize faster access to relevant alerts rather than building a more technically expensive universal view." },
        ],
      },
      {
        heading: "Design Decisions: Alert Picker & Selection",
        body: "",
        blocks: [
          { type: "text", content: "Over time, every new alert type had simply been added to the existing list. Eventually, that list became difficult to scan, and users struggled to understand the differences between alerts.\n\nOur research revealed two particularly important needs:" },
          { type: "bullets", items: [
            "Users wanted shorter, clearer descriptions.",
            "They wanted to see examples of what they would actually receive before choosing an alert.",
          ]},
          { type: "text", content: "Ideally, users would have liked to preview alerts using their own search data. However, generating those previews dynamically wasn't technically feasible at the time. So we explored a more practical alternative." },
          { type: "image", src: "/sa-view-example.jpg" },
          { type: "text", content: "We grouped alert types by input, simplified their descriptions, and introduced static examples showing what the resulting notifications would look like. We created a fictional company and monitoring scenario so examples remained consistent across alert types. Email was chosen as the primary preview format — the most widely used delivery channel, supporting all alert types, with greater control over presentation than third-party platforms.\n\nAnother challenge emerged during the redesign of the alert picker. Initially, we were trying to accommodate two different user behaviors within the same selection experience." },
          { type: "image", src: "/sa-alert-selection.png" },
          { type: "bullets", items: [
            "Individual users generally created relatively few alerts and tended to use a consistent set of alert types.",
            "Sales representatives managing enterprise accounts often needed to create multiple alerts for the same searches and distribute them to many recipients.",
            "Exceptional high-volume scenarios — such as monitoring the Olympic Games — created demand for bulk creation.",
          ]},
          { type: "text", content: "Our initial approach tried to accommodate both single and multiple selection within the same experience. But that introduced unnecessary complexity and negatively affected the Customer Effort Score.\n\nSo we revisited the problem and looked more closely at where different users were starting their workflows. Sales representatives typically created search-based alerts directly from the Explore page. Individual users were more likely to start from the Alerts page. That insight changed our approach — instead of forcing both behaviors into one interface, we separated them based on context." },
          { type: "image", src: "/sa-create-alert.png" },
          { type: "text", content: "From the Explore page, users could create multiple search-based alerts. From the Alerts page, the picker supported a simpler single-selection experience. This preserved functionality for high-volume users while making the primary experience much easier to understand." },
          { type: "callout", content: "After simplifying the selection logic, the Customer Effort Score improved by 9%. It was a good example of how understanding user behavior can lead to a simpler solution than adding more interface controls." },
        ],
      },
      {
        heading: "Results — Measuring Impact",
        body: "",
        blocks: [
          { type: "text", content: "The redesign delivered several measurable improvements:" },
          { type: "bullets", items: [
            "Customer Effort Score improved by 9% after simplifying alert selection.",
            "Alert creation time decreased by 18%.",
            "Alert discovery time decreased by 22% after introducing search.",
            "Internal support requests related to alert setup decreased by approximately 15%.",
          ]},
          { type: "text", content: "We also received feedback indicating that users felt more confident selecting alert types, particularly with the addition of preview examples." },
          { type: "callout", content: "One of the most important outcomes was demonstrating that structural improvements — better grouping, clearer navigation, and more context-aware workflows — could have a greater impact than simply polishing the interface." },
        ],
      },
      {
        heading: "Beyond the Redesign — Consolidating Alert Types",
        body: "",
        blocks: [
          { type: "text", content: "After the initial improvements, we continued exploring how to simplify the product at a deeper level. We organized a workshop using research findings, heuristic evaluation results, and alert usage data to identify consolidation opportunities:" },
          { type: "bullets", items: [
            "Industry Events and Company Events — a potential low-risk consolidation due to relatively low usage.",
            "Top Reach and X Influencers — explored for combining through source filtering, since they offered similar functionality across different sources.",
            "Breakout Post and Page Engagement — required more investigation due to possible API constraints and overlap with other alerts.",
          ]},
          { type: "text", content: "We didn't want to consolidate features simply because they looked similar. We needed to understand whether they served distinct user needs, how frequently they were used, and what technical implications consolidation would create. Our approach was to start with lower-risk opportunities, learn from those changes, and then evaluate more complicated cases." },
        ],
      },
      {
        heading: "Reflection — What Would I Do Differently?",
        body: "",
        blocks: [
          { type: "text", content: "Looking back, one area I'd explore further is moving from a feature-based alert creation experience toward a more goal-oriented one. We made significant improvements to the existing structure, but users still needed to understand the differences between alert types.\n\nToday, I'd explore a simpler framework organized around three questions: What do you want to monitor? When do you want to be notified? How do you want to receive the information?" },
          { type: "image", src: "/sa-long-term-example.jpg" },
          { type: "text", content: "That could make the experience more intuitive, particularly for users who aren't familiar with the underlying alert taxonomy. I'd also investigate whether AI could help recommend relevant alert configurations based on a user's goals, monitoring context, or previous behavior. Another opportunity would be giving users better control over notification frequency and helping them understand whether their alerts are producing useful signals." },
          { type: "callout", content: "My biggest takeaway: simplifying a complex product doesn't always mean removing functionality. Sometimes the most effective solution is understanding different user behaviors and designing the right experience for each context." },
        ],
      },
    ],
  },
  {
    id: "mira",
    title: "Mira Studio",
    tagline:
      "Meltwater's AI-powered assistant — transforming complex media intelligence workflows into a conversational experience.",
    tags: ["AI Product", "Conversational UI", "0→1"],
    year: "2025",
    role: "Lead UX Designer",
    company: "Meltwater",
    heroImage: "/mira-preview.jpg",
    overview:
      "Mira is Meltwater's AI-powered assistant designed to simplify how users access media intelligence. By combining generative AI with intelligent agents, Mira transforms complex workflows — news monitoring, brand analysis, competitive intelligence — into a conversational experience. Instead of relying on complex Boolean searches, dashboard configuration, and manual analysis, users can ask questions in natural language and receive executive-ready insights in seconds. As part of Meltwater's first AI MVP initiative, I led the design of key product experiences that introduced conversational insights into the platform while ensuring they integrated seamlessly with existing workflows.",
    stats: [
      { value: "0→1", label: "Full AI product build" },
      { value: "Hours→Seconds", label: "Time to insight" },
    ],
    sections: [
      {
        heading: "The Problem",
        body: "Before Mira, generating insights in Meltwater required deep platform expertise. Users had to construct precise Boolean queries, configure dashboards across multiple surfaces, and manually interpret results. Even for experienced users, this process was time-intensive and often repetitive. For new users, it created a steep learning curve that slowed onboarding and limited product adoption.\n\nAs a result, valuable features were underutilised, and teams struggled to quickly extract actionable insights. The platform was powerful, but not intuitive — users were spending more time setting up analysis than actually analysing.",
      },
      {
        heading: "Goal",
        body: "Our goal was to redesign the experience around speed, accessibility, and user intent. We aimed to reduce time-to-insight from hours to seconds, eliminate the need for Boolean expertise, and create a system that could support both first-time users and advanced analysts. Just as importantly, the solution needed to integrate seamlessly into the existing Meltwater ecosystem without disrupting established workflows.",
      },
      {
        heading: "Design Approach",
        body: "We began by reframing the experience from a tool-driven model to an intent-driven one. Instead of asking users to configure searches or dashboards, we centred the interaction around a simple question: What do you want to know? This shift became the foundation for a conversational interface that allowed users to generate insights through natural language.\n\nA key challenge was designing for two very different user groups. New users needed guidance and structure, while experienced users needed speed and flexibility. To address this, we introduced a layered experience — guided templates and pre-built reports helped new users get started quickly, while customisable prompts and reusable workflows gave advanced users the control they needed.\n\nAnother critical focus was trust. AI-generated insights can feel like a black box if not designed carefully. We ensured that outputs were structured, contextual, and easy to interpret, while still allowing users to refine, customise, and iterate on prompts.",
        image: "/mira-personas.png",
      },
      {
        heading: "Key Features",
        body: "Mira Studio became the primary workspace for generating insights. Users could ask questions about their brand, competitors, or industry trends and instantly receive structured reports — eliminating the need to manually build dashboards or queries and reducing multi-step workflows into a single interaction.\n\nThe Prompt Library allowed users to save, organise, and reuse prompts for common analyses. Over time, teams could build shared libraries of workflows, turning individual knowledge into scalable, repeatable processes.\n\nThe Mira Companion embedded contextual prompts and insights directly into the platform based on what users were viewing, enabling action without leaving the current workflow. For experienced users, this significantly accelerated everyday tasks.",
        image: "/mira-flow.png",
      },
      {
        heading: "Product Demo",
        body: "A walkthrough of the core Mira Studio experience — from natural language prompt to structured insight output.",
        video: "/mira-demo.mp4",
      },
      {
        heading: "Outcome & Impact",
        body: "The launch of Mira fundamentally changed how users interacted with Meltwater. Tasks that previously required hours of setup could now be completed in seconds through simple prompts. New users were able to bypass the steep learning curve and access meaningful insights immediately, while experienced users dramatically reduced the time spent on repetitive workflows.\n\nFrom a product perspective, Mira increased the accessibility and visibility of advanced features, driving greater engagement with the platform. It also shifted the perception of Meltwater — from a complex set of tools to an intelligent system that delivers insights on demand.\n\nStrategically, Mira established the foundation for AI-native experiences across the product and positioned Meltwater at the forefront of AI-driven media intelligence.",
      },
    ],
  },
  {
    id: "research",
    title: "Multi-Source Alerts Research",
    tagline:
      "A multi-method research programme uncovering root causes of alert complexity and shaping a new alerts architecture.",
    tags: ["UX Research", "Interviews", "Synthesis"],
    year: "2024",
    role: "UX Researcher & Designer",
    company: "Meltwater",
    heroImage: "/research-preview.jpg",
    overview:
      "Smart Alerts are a core capability that enables PR and marketing professionals to monitor brand activity, detect risks, and respond quickly to emerging trends. However, over time the experience had become more complicated and less structured — the result of ongoing feature expansion and accumulated backend constraints.\n\nRather than jump to solutions, we approached the problem holistically. I led a research initiative spanning five methods, culminating in a cross-functional workshop that translated findings into a prioritised product roadmap. The work ran in close collaboration with a Product Manager, UX researchers, and engineering partners.\n\nEach method provided a unique perspective on the ecosystem, enabling us to build a comprehensive understanding of user needs and system constraints.",
    stats: [
      { value: "28", label: "Survey respondents (3% response rate)" },
      { value: "5", label: "Research methods" },
      { value: "6", label: "Customer interviews" },
    ],
    sections: [
      {
        heading: "General Survey & Card Sort",
        body: "The team aimed to better understand how easy it is for users to create and manage Smart Alerts, with a focus on identifying pain points, simplifying the process, and exploring opportunities to consolidate or improve alert types.\n\nRespondents: 28 Meltwater Alert users (3% response rate)\nResearch format: General survey questions and a card-sorting exercise",
        chartId: "research-survey",
      },
      {
        heading: "Sales Representative Interviews",
        body: "Three Sales and Premium Support representatives were interviewed through semi-structured sessions, workflow walkthroughs, and artifact review of existing alerts and searches. These are the power users of the system — managing alerts for large enterprise clients at scale — and the friction they experienced was acute.\n\nKey findings: bulk operations are a critical unmet need, particularly during product launches, crises, and client onboarding where dozens of alerts must be created simultaneously. The 10-recipient limit forces representatives to duplicate alerts for the same search, creating compounding maintenance overhead. Searching for existing alerts is so broken that representatives resort to browser Ctrl+F as a workaround. External email management is particularly painful — no filtering, no bulk input, emails must be added individually. In extreme enterprise cases, setting up alerts for a single client took up to 1.5 days and required 7 people.\n\nRecommendations: introduce bulk alert creation for search-based alerts; increase or remove the recipient limit; add native search and filtering to the alerts table; simplify external email entry with multi-email input; explore automation rules to reduce manual setup.",
        chartId: "smart-alerts-problem",
      },
      {
        heading: "User Interviews",
        body: "Six Meltwater customers across PR, corporate communications, and agency roles participated in moderated usability sessions with task-based scenarios covering alert creation, modification, and receipt. This method moved beyond stated preferences into observed behaviour — surfacing friction that users had normalised and could not easily articulate in a survey.\n\nKey findings: Every Mention alerts are mission-critical for daily threat scanning. Alert usage is highly event-driven, with volume fluctuating dramatically around campaigns and crises. Users manually validate alerts daily to catch outliers the system misses. Regional comparison across US, EU, and APAC markets is essential for crisis strategy — a need the current system doesn't support well. Alert expiration is managed through naming conventions because the system offers no native lifecycle management. Executive reporting requires manual screenshots because there is no export path.\n\nThe Smart vs. System Alerts distinction was a persistent source of confusion — users had built incorrect mental models about which system was responsible for which notifications, leading to missed alerts and misplaced troubleshooting.",
        chartId: "research-user-interviews",
      },
      {
        heading: "Peer Review",
        body: "Two product designers from cross-functional teams evaluated the Smart Alerts experience through moderated usability sessions. The focus was on identifying friction points, validating interaction patterns, and uncovering inconsistencies across alert entry points.\n\nRespondents: 2 Product Designers (cross-team peers)\nResearch format: Moderated usability sessions with task-based scenarios covering alert creation, modification, and management across Explore and Alerts pages",
        chartId: "research-peer-review",
      },
      {
        heading: "Expert Heuristic Evaluation",
        body: "Two UX researchers conducted a structured heuristic evaluation based on Nielsen's 10 Usability Heuristics, covering the full alert lifecycle — from creation through management to receiving and interpreting alerts in email.\n\nReviewers: 2 UX Researchers\nResearch format: Heuristic evaluation with task-based walkthroughs across Explore, Monitor, Alerts page, and email notifications",
        chartId: "research-expert-review",
      },
      {
        heading: "Workshop & Strategic Synthesis",
        body: "The cross-functional workshop was the final synthesis phase — bringing together Product, Design, Research, and Engineering to translate five streams of research into a shared, actionable product direction. Rather than another ideation session, the goal was alignment: on root causes, on what was feasible, and on a simplified alert framework.\n\nThe session began with a structured walkthrough of all research findings to ground decisions in evidence. We then mapped current alert types against actual user use cases, evaluated configuration overlap, and pressure-tested consolidation hypotheses against technical constraints and existing mental models.\n\nKey findings: the current ecosystem contains too many alert types with overlapping purposes, creating cognitive overload. Users think in terms of goals — brand monitoring, crisis detection, campaign tracking — not alert names. Multiple alerts detect similar signals (volume change, sentiment change, reach), creating consolidation opportunities with manageable risk. Threshold control and AI summarisation were identified as the highest-leverage mechanisms for reducing alert fatigue.\n\nThe workshop produced a prioritised action framework across four dimensions: quick usability wins, consolidation candidates, structural architecture changes, and longer-term AI-powered capabilities. This became the research-backed roadmap that directly shaped the Smart Alerts Redesign.",
        chartId: "workshop-full",
      },
    ],
  },
  {
    id: "forecasting",
    title: "Alert Forecasting & AI Insights",
    tagline:
      "Shifting spike detection from reactive notification to proactive decision support — with forecasting and AI-powered insights.",
    tags: ["Data Viz", "AI Insights", "Feature Design"],
    year: "2024",
    role: "Lead UX Designer",
    company: "Meltwater",
    heroImage: "/forecasting-preview.jpg",
    overview:
      "Organisations rely on media monitoring tools to react quickly to changes in conversation volume. But traditional spike alerts are reactive — they notify users only after a spike occurs, limiting the ability to prepare. This project introduced forecasting into spike detection alerts, enabling users to anticipate upcoming surges in mentions and understand the drivers behind them through AI-generated insights. My role focused on designing the forecast visualisation model, alert experience, and insight interpretation layer to support faster decision-making.",
    stats: [
      { value: "28%", label: "Increase in alert engagement" },
      { value: "33%", label: "Faster time to action" },
      { value: "19%", label: "Higher click-through to platform" },
    ],
    sections: [
      {
        heading: "The Problem",
        body: "Users monitoring brand mentions faced three major challenges: reactive alerts that triggered after spikes occurred, leaving little time to respond; low confidence in trends, making it hard to judge whether a spike was meaningful or temporary; and a manual analysis burden requiring navigation across multiple dashboards to understand why a spike happened. This created significant friction for PR teams, marketers, and analysts who needed rapid situational awareness.",
      },
      {
        heading: "Forecast Visualisation",
        body: "A predictive area was added to the chart showing expected mention volume beyond the current data point — including expected direction of conversation, potential spike severity, and a confidence range visualised as a shaded area. The visual language used: solid line for actual mentions, dashed line for trend baseline, shaded extension for forecast projection. For every 3 historical data points, the system generates 1 forecast point, producing a forward-looking trajectory that extends beyond real data. This separation prevented confusion between observed and predicted data.",
        image: "/forecast-visualisation.png",
      },
      {
        heading: "AI Insights Layer",
        body: "To eliminate manual analysis, we introduced automated contextual insights directly inside the alert — surfacing sentiment shifts, top drivers of conversation, emerging topics and keywords, source type changes, and geographic concentration. The goal was to answer the user's first question immediately: 'Why is this happening?' We also surfaced the most impactful content related to each spike, ranked by reach and engagement, reducing the need to open the platform for initial investigation.",
        image: "/ai-insights-layer.png",
      },
      {
        heading: "Outcomes",
        body: "Alert engagement rate increased by 28%, indicating users found alerts more relevant and actionable with predictive context and AI summaries. Time to user action after an alert decreased by 33%, as users could immediately understand what was happening without investigating multiple dashboards first. Click-through to the platform from email improved by 19%. Customer interviews and feedback indicated significantly higher trust in alerts — users reported feeling more prepared to respond to emerging trends and communicate insights to leadership.",
        image: "/forecasting-outcomes.png",
      },
    ],
    quote: {
      text: "I wanted to share feedback on the new AI summary in Alerts — this feature is amazing. I don't have to dig through data anymore and can react so much faster. This week we had an important spike, and I was able to flag it to my manager right before a presentation so we could adjust in time. It honestly made a huge difference.",
      attribution: "One of company clients —",
    },
  },
  {
    id: "uwork",
    title: "uWork",
    tagline:
      "Mobile app helping self-employed tradespeople and small construction crews manage jobs end-to-end.",
    tags: ["Mobile", "0→1 Product", "Branding"],
    year: "2023",
    role: "Lead UX/UI Designer",
    company: "uWork",
    heroImage: "/uwork-preview.jpg",
    overview:
      "uWork is an iOS application built for self-employed tradespeople and small construction businesses — helping them track customers, projects, jobs, materials, expenses, and documents in one place. It monitors project timelines, contracted amounts, worker payments, and customer payments throughout project lifecycles. I owned research, user testing, wireframes, high-fidelity screens, and the prototype, collaborating closely with the CEO and a team of engineers to take the product from zero to launch.",
    stats: [
      { value: "0→1", label: "Full product build" },
      { value: "iOS", label: "Platform" },
      { value: "2", label: "User archetypes designed for" },
    ],
    sections: [
      {
        heading: "The Problem",
        body: "Workers struggle with managing multiple jobs and material purchases across clients. Documentation gets misplaced and information gets forgotten over time. Clients make incremental payments, making it hard to track outstanding balances. Tracking multiple clients and workers across projects simultaneously proves consistently difficult. There was no purpose-built tool for small crews — existing solutions were either too complex (enterprise software) or too simple (spreadsheets).",
      },
      {
        heading: "Research & Personas",
        body: "Workers frequently lose material purchase receipts due to high work volume. Clients make incremental payments and owners need to track outstanding balances. Two primary user archetypes emerged: Business Owners who need full access across all projects, clients, workers, and financials; and Workers who need access limited to their own assigned tasks and job details.",
        chartId: "uwork-personas",
      },
      {
        heading: "Design Process",
        body: "",
        chartId: "uwork-ideation",
      },
      {
        heading: "Photo Feature",
        body: "Pictures may be taken along the way and stored in the app, where they will be attached to individual phases of the Project. The app uses Artificial Intelligence to empower the user to find any picture on a particular subject in no time.",
        chartId: "uwork-photo",
      },
      {
        heading: "Key Features",
        body: "A role-based access model giving Business Owners full functionality while limiting Workers to their own tasks and responsibilities. An integrated photo feature allowing users to capture and store project photos by phase, with AI-powered photo retrieval by subject. A unified Project page connecting all associated workers, customers, jobs, and materials in one view — making the full state of any project immediately visible.",
      },
      {
        heading: "Prototype. Projects page",
        body: "The project page includes all the information about the project. It also has connected workers, customers, jobs, materials that you can access right through the project page.",
        video: "/uwork-prototype.mov",
      },
      {
        heading: "Outcome",
        body: "The app launched on iOS with strong feedback from early users in the trades community. The design system built for uWork established visual and interaction patterns that scaled cleanly as new features were added post-launch. User feedback gathered after launch shaped the iteration roadmap and confirmed the core IA decisions made during the design process.",
      },
    ],
  },
  {
    id: "unified-dashboards",
    title: "Unified Dashboards",
    tagline:
      "A multi-year research program that turned how PR and marketing teams build and share dashboards from a fragmented workaround into a unified, trustworthy reporting experience.",
    tags: ["UX Research", "Enterprise SaaS", "Usability Testing"],
    year: "2024–2025",
    role: "UX Researcher & Designer",
    company: "Meltwater",
    heroImage: "/unified-dashboards-hero.png",
    overview:
      "The goal was to create a unified experience where users could handle all their analytical needs in one place — dashboards tailored to their specific use case, powered by a new workflow that moved from template selection through input configuration to a generated, shareable report. The research sat inside a longer history: three earlier rounds going back to the 2021 Analyze launch consistently flagged the same themes — the need for custom dashboards, branding and customization controls, autosave, and transparent metric definitions. Every finding from both 2024 and 2025 aligned with what earlier rounds had already surfaced, giving the team a roadmap grounded in four years of converging evidence.",
    stats: [
      { value: "96%", label: "task success across 11 participants and 7 flow tasks" },
      { value: "4.4/5", label: "avg. ease-of-use across 6 core interactions, 30 testers" },
      { value: "4 rounds", label: "of research converging on the same user needs" },
    ],
    sections: [
      {
        heading: "The Problem",
        body: "PR and marketing professionals don't just collect data — they craft dashboards to build and share a comprehensive story for their stakeholders. That means every element of a dashboard needs to be clear, branded, and contextualized for a non-expert audience. But Meltwater's existing experience made that difficult: users had to navigate multiple disconnected surfaces, metric titles were often meaningless without explanation, and the creation flow was slow and prone to losing work.\n\nUsers had specific, niche reporting needs that generic templates didn't cover, so most defaulted to building from scratch — often without knowing that templates could be fully customized as a starting point. Participants in early research described spending more time making reports look right than actually analyzing the data.",
      },
      {
        heading: "What We Tested — December 2024",
        body: "11 participants — 5 Meltwater customers and 6 users of competitor tools, a mix of PR and social roles — were moderated through the full create-a-dashboard flow. Acting as a Tesla communications specialist, they were asked to build a dashboard covering a recent campaign's media impact across outreach, social, and influencer activity. 7 tasks: rename the dashboard, review inputs, add a widget, name it, add a custom input, add a cover slide, and download as PDF.\n\n96% of all task attempts succeeded. Outright failures clustered around two steps: reviewing Dashboard Inputs (participants struggled to differentiate inputs, metrics, and filters) and adding a widget (language confusion — \"Card is a weird word to me... I don't see these as cards. Maybe charts or tables\" — P2). These two friction points shaped the key design recommendations.",
        image: "/unified-dashboards-task-analytics.png",
      },
      {
        heading: "Key Insights",
        body: "Six insights came out of the December study — each backed by participant quotes and consistent with earlier research rounds.\n\nUsers craft stories, not spreadsheets. Descriptions and comments were what transformed raw metrics into a narrative stakeholders could follow: \"I end up adding some context to it when I send it to somebody, so that they understand what it actually means\" (P4). Customization and branding were non-negotiable: participants expected control over chart colors, widget renaming, and layout — and several suggested AI-driven color suggestions and batch adjustments. Participants defaulted to custom dashboards because they didn't realize templates were a fully editable starting point, not a locked format. Template selection required real transparency — users needed to see both the visual and the metrics included before committing. Metric definitions were load-bearing: info tips were essential, and metric titles alone were frequently described as \"meaningless\" without explanation of how a metric is calculated. And trust depended on data transparency — participants expressed anxiety about dynamic dashboard links, inconsistent metrics across platform features, and whether the platform was built for businesses their size.",
        image: "/unified-dashboards-takeaways.png",
      },
      {
        heading: "Interactions Testing — April 2025",
        body: "30 unmoderated participants (5 per task) tested 6 core edit interactions against individual recorded prototypes: adding a widget, editing a widget, moving a widget, adding a row, moving a row, and deleting a row. Average task success: ~97%. Average ease-of-use: 4.4 out of 5.\n\nThe one clear friction point was moving a widget — 80% success, the lowest of all six tasks. The cause was consistent: participants expected drag-and-drop and attempted it first. \"This is the only way I would think to do this — click it and drag it one position to the right. I don\'t know what else to do.\" One participant failed the task entirely because drag-and-drop was the only method she would accept. The same expectation appeared in the Move A Row task (ease-of-use: 3.8/5, the lowest rating): \"The fact that the whole block got highlighted made me think it was a drag-and-drop type of interaction.\"\n\nAffordances were the difference-maker everywhere else. Highlights, outlines, and tooltips consistently guided users to the correct control when their first instinct failed — without them, success rates would have been significantly lower.",
        image: "/unified-dashboards-interactions.jpg",
      },
      {
        heading: "Design Decisions",
        body: "The research directly shaped four priority areas. First, drag-and-drop became a firm recommendation — every task involving movement surfaced the same expectation, making it the baseline users were already designing against. Second, the Add Widgets button needed to be more prominent (colored, with a Plus icon) and adding a new row needed a clearer entry point — currently split ambiguously between a Plus button on hover and the Add Widget path. Third, language needed a full audit: renaming 'Cards' to 'Widgets', making Dashboard Inputs more visible, clarifying 'Previously' in metric comparisons, and surfacing what data sources are powering each metric. Fourth, the template selector needed structural work — categories felt role-based rather than use-case-based, clicking a category was expected to filter the grid, and too many options at once overwhelmed participants who needed headers and alphabetical order to navigate.\n\nAcross both studies, the recommendation on autosave was unanimous: it should be on by default, paired with undo and version history so users could experiment without fear of permanent changes.",
        image: "/unified-dashboards-add-widget.png",
        image2: "/unified-dashboards-autosave.png",
      },
      {
        heading: "Outcomes",
        body: "The new flow was broadly seen as intuitive — participants noted it was easier to navigate than Google Analytics, and valued centralized input selection and familiar patterns. Previous research rounds (Custom Dashboards Round 1 and Round 2, Analyze 2021) all aligned with current findings, confirming that the same core needs had been stable across four years: fast and flexible analysis, real customization controls, autosave, transparent metric definitions, and dashboards that help users tell a story rather than just display data.\n\nKey takeaways: Structural clarity — clear labeling, logical grouping, and consistent language — matters more than visual polish. Affordances are not optional: every interaction that lacked visible hover states or tooltips created friction, and every interaction that included them succeeded. And drag-and-drop is not a feature request — it is the default mental model for any content that can be rearranged, and needs to be treated as the baseline in the next design iteration.",
      },
    ],
    quote: {
      text: "Pretty straight forward... this was a little bit easier to use than Google Analytics.",
      attribution: "Usability study participant, December 2024 —",
    },
  },
];

export function getCaseStudy(id: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.id === id);
}
