export interface ArticleSection {
  type: "paragraph" | "heading" | "subheading" | "quote" | "list" | "teaser" | "visual";
  content: string;
  items?: string[];
  attribution?: string;
  visualId?: string;
}

export interface Article {
  slug: string;
  part: number;
  title: string;
  subtitle: string;
  readTime: string;
  excerpt: string;
  sections: ArticleSection[];
}

export const articles: Article[] = [
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
        content: "I've redesigned my portfolio more times than I'd like to admit — and for years, none of them felt right.",
      },
      {
        type: "paragraph",
        content: "Part of the problem is that I'm not an engineer. Building a portfolio website always felt like a frustrating compromise for me: choosing a template, trying to force my work into someone else's structure, and constantly hitting limitations. Every platform had restrictions, and instead of focusing on showcasing my work, I found myself obsessing over small imperfections and technical hurdles I didn't know how to fix.",
      },
      {
        type: "paragraph",
        content: "Whenever I tried to improve things, I'd get stuck in the details — hosting options, platform limitations, plugins, and layouts. There was always something getting in the way, and eventually I'd give up and go back to whatever I had before.",
      },
      {
        type: "paragraph",
        content: "Recently, I've noticed more designers experimenting with AI-powered tools such as Claude alongside platforms like Vercel, to build their portfolios. Instead of fighting templates, designers can now create experiences that feel much closer to their original vision.",
      },
      {
        type: "paragraph",
        content: "That's what led me to try a different approach. I already owned a domain and wanted to launch a portfolio that felt truly mine. I turned to Claude to figure out where to start. Was it easy? Absolutely not. The process wasn't always straightforward, but it taught me a lot about what's possible today for designers who want more control over their online presence without becoming full-time developers.",
      },
      {
        type: "paragraph",
        content: "That's why I want to document exactly how I built my portfolio, what worked, what didn't, the mistakes I made, and the tools I used along the way.",
      },
      {
        type: "heading",
        content: "Treating Myself Like a Client",
      },
      {
        type: "paragraph",
        content: "I started with research — browsing other designers' portfolios to understand what works, what looks good, and what I'd actually want to replicate.",
      },
      {
        type: "paragraph",
        content: "Then I turned inward. I created my color palette and an inspiration moodboard so my portfolio would feel pleasing to me — not just professionally appropriate, but genuinely mine.",
      },
      {
        type: "paragraph",
        content: "From there, I started exploring tools. I started with Claude Design and Claude Code — and quickly went down a rabbit hole of information that was hard to apply in practice.",
      },
      {
        type: "paragraph",
        content: "That's when I came across a workshop about building websites with Claude — it appeared to be about creating websites for businesses, not really my use case. The guy running it said he'd take 5 people for a free consultation, and I signed up anyway.",
      },
      {
        type: "paragraph",
        content: "Before the session, I was already trying to make things work with my existing setup. I was paying for WordPress, so I asked Claude chat whether I could deploy a Claude Code file straight to WordPress. It said yes — and walked me through the steps. Technically possible, but complicated enough that I kept stalling.",
      },
      {
        type: "paragraph",
        content: "That free consultation turned out to be one of the most useful things I did. Chris Shon, founder of Compound, walked me through a completely different approach and pointed out that I could drop WordPress entirely. He spent over an hour with me — longer than the call was supposed to be. I walked away with a good tool setup and a clear path forward for the first time. I think I would have been stuck for much longer figuring it out on my own — so I just want to shout out Chris, because I don't think I'd be writing this article without that conversation.",
      },
      {
        type: "heading",
        content: "The Workflow That Changed Everything",
      },
      {
        type: "paragraph",
        content: "That consultation reframed a lot for me. The advice was simple: stop trying to build the final website right away. Build a starting point first — something you can then bring into Claude Code and refine from there.",
      },
      {
        type: "paragraph",
        content: "So we outlined a four-tool pipeline that mirrors his own process:",
      },
      {
        type: "list",
        content: "",
        items: [
          "Lovable — generate an initial website prototype from a descriptive prompt. The free tier gives you credits that replenish daily, which is enough to get a solid first draft.",
          "GitHub — host the Lovable-generated code as a repository. Think of it as a home for your website's files that other tools can read and write to.",
          "Claude Code — pull the GitHub repo locally to iterate, refine the design, and make ongoing edits. Chris also recommended installing a front-end design 'skill' to make Claude a better design collaborator.",
          "Vercel — deploy and host the final site, connectable to an existing domain through a simple DNS change.",
        ],
      },
      {
        type: "visual",
        content: "",
        visualId: "pipeline-flow",
      },
      {
        type: "paragraph",
        content: "The beauty of this setup is that once it's in place, editing your website becomes a conversation. You describe what you want changed, and it happens.",
      },
      {
        type: "heading",
        content: "Writing the Brief for Myself",
      },
      {
        type: "paragraph",
        content: "The first step was writing a Lovable prompt — and this part was harder than I expected. As designers, we're used to translating other people's visions into interfaces. Translating my own felt strangely exposing.",
      },
      {
        type: "paragraph",
        content: "My prompt covered:",
      },
      {
        type: "list",
        content: "",
        items: [
          "The type of site: UX portfolio, minimal, modern, elegant feel",
          "Motion: scroll animations, an animated hero section that grabs attention on landing",
          "My color palette (I already had this ready from my earlier moodboard work)",
          "A critical instruction: pull content and copy from my existing site, but do not reference it for design",
        ],
      },
      {
        type: "paragraph",
        content: "That last part mattered a lot. I didn't want the AI anchoring itself to what I was already trying to escape.",
      },
      {
        type: "quote",
        content: "A few minutes later, I had a first version of a homepage. Not perfect — but mine. Built from my words, not someone else's template.",
      },
      {
        type: "teaser",
        content: "In Part 2, I'll walk through what that first version actually looked like, what I changed, and how the whole pipeline came together — including the part where I finally got it live.",
      },
    ],
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
        content: "The First Look",
      },
      {
        type: "paragraph",
        content: "When the Lovable draft came through, I resisted the urge to fix everything at once. Instead I evaluated the bones: the layout worked, the case study section structure made sense, the overall flow told my story in the right order. Good enough to move forward.",
      },
      {
        type: "paragraph",
        content: "The things I didn't like — a white background behind a hero image, some oversized photos, a few odd sizing choices — were all things Claude Code could handle later. I noted them and kept moving.",
      },
      {
        type: "paragraph",
        content: "I also thought about the contact section at this stage. My goal with this portfolio isn't freelance clients — it's finding the right full-time role. So rather than a generic contact form, I wanted something oriented toward companies and hiring teams: a simple, direct email.",
      },
      {
        type: "heading",
        content: "Publishing and Setting Up the Pipeline",
      },
      {
        type: "paragraph",
        content: "Once I was happy enough with the draft, I published it on Lovable and started connecting the pieces. Here's what that actually involved — because nobody warns you about this part:",
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
          "Launched a local preview in the browser so I could see changes in real time as Claude made them",
        ],
      },
      {
        type: "visual",
        content: "",
        visualId: "setup-steps",
      },
      {
        type: "heading",
        content: "Handing It Off to Claude Code",
      },
      {
        type: "paragraph",
        content: "This is where things shifted from \"AI generates something\" to \"AI helps me iterate.\" With the repo loaded into Claude Code, I could describe changes in plain language and watch them happen live in my browser preview.",
      },
      {
        type: "quote",
        content: "\"This background should be transparent, not white.\" \"These images are too large and slowing things down.\" \"I want more breathing room in this section.\" Each one of these, historically, would've meant opening Photoshop, exporting, re-uploading, digging through CSS. Now it was a sentence.",
      },
      {
        type: "paragraph",
        content: "Which made what came next even more surprising — because the hardest part wasn't editing the site. It was getting it live.",
      },
      {
        type: "teaser",
        content: "In Part 3, I'll walk through the two hours of troubleshooting, the dead images, the 504 errors, and the small configuration file that finally made everything work.",
      },
    ],
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
        content: "The Site Existed. The Site Returned a 404.",
      },
      {
        type: "paragraph",
        content: "I pushed to Vercel. The domain connected. Everything looked right. But I still got a 404.",
      },
      {
        type: "paragraph",
        content: "This is the part of the process nobody prepares you for.",
      },
      {
        type: "paragraph",
        content: "What followed was about two hours of troubleshooting. Every fix uncovered something new — the wrong settings in Vercel, a missing tool on my machine, a build folder that GitHub was silently ignoring the whole time. We'd fix one thing, redeploy, and get the same 404. Then fix the next thing. Same result.",
      },
      {
        type: "paragraph",
        content: "Every fix revealed another layer. Eventually, Claude chat suggested going to Claude Code and asking it directly. Claude Code could actually see my project files and from that, it created a vercel.json configuration file — one small file that told Vercel exactly how to serve the site. That's what the whole two hours had been building toward.",
      },
      {
        type: "paragraph",
        content: "I pushed it. Redeployed. And it worked. Mostly. Some of the images were dead.",
      },
      {
        type: "heading",
        content: "The Image Problem",
      },
      {
        type: "paragraph",
        content: "When I built the site, Lovable and Claude Code pulled content and some of the images from my existing portfolio to populate the case studies. That made sense at the time — it was the fastest way to get real content in. But once I switched my domain from the old WordPress site to the new one, those image references broke. Those images had been pointing back to my old site, and now that site was gone. I had to go in and replace every one of them with local files.",
      },
      {
        type: "paragraph",
        content: "And those local files were a problem in their own right. Some of my images were bigger than they needed to be to display properly. The browser was trying to download a significant amount of image data just to render the homepage. Claude helped me compress everything systematically, convert photo PNGs to JPEGs (photos saved as PNG are big because the format is lossless — something I hadn't thought about), and get the total image payload down to a fraction of what it was.",
      },
      {
        type: "paragraph",
        content: "An improvement. But the site still wasn't loading properly.",
      },
      {
        type: "heading",
        content: "The 1MB Problem Nobody Mentions",
      },
      {
        type: "paragraph",
        content: "The real issue turned out to be something I never would have found on my own: a 3D animation in the hero section — a rotating orb built with a library called Three.js — was being bundled into the server function. Every time someone visited the site, the server had to load 1MB of 3D graphics code before it could send back a single line of HTML.",
      },
      {
        type: "paragraph",
        content: "Vercel's free plan has a 10-second timeout on server functions. The Three.js cold start was pushing past it, causing a 504 error — a gateway timeout. The site wasn't broken. It was just taking longer to wake up than Vercel would allow.",
      },
      {
        type: "paragraph",
        content: "Claude tried several approaches, and some of them partially worked. One of them actually made things worse — the site went from slow to completely unresponsive. Each fix revealed a new constraint. It took a while to find something that actually held.",
      },
      {
        type: "visual",
        content: "",
        visualId: "cold-start-problem",
      },
      {
        type: "heading",
        content: "The Fix That Actually Worked",
      },
      {
        type: "paragraph",
        content: "In the end, the cleanest solution was to pre-render every page as static HTML during the build — so the server function doesn't need to run at all when someone visits. Vercel serves the pre-rendered HTML directly from its CDN. No cold start. No timeout.",
      },
      {
        type: "quote",
        content: "It's a good lesson in the difference between what looks like the problem and what actually is the problem. I thought it was the images. Images were part of it. But the deeper issue was invisible — a library choice made automatically by the AI when it first generated the site, that only became a problem when the site hit a real hosting environment with real constraints.",
      },
      {
        type: "heading",
        content: "It's Live",
      },
      {
        type: "paragraph",
        content: "After all of that — the WordPress crashes, the template loops, the consultation, the GitHub setup, the Terminal commands, the 504 errors, the image compression, the Three.js rabbit hole — the site is live.",
      },
      {
        type: "paragraph",
        content: "It's not perfect. There are still things I want to refine — case study pages, mobile details, copy tweaks. But it's mine. Built from a brief I wrote for myself, edited through conversation, and pushed live through tools I'd never used six months ago.",
      },
      {
        type: "teaser",
        content: "In Part 4, I'll share what I learned about working with Claude Code — how to prompt it like a design brief, what I'd do differently, and the small decisions that ended up defining the feel of the site.",
      },
    ],
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
        content: "Talking to It Like a Creative Director",
      },
      {
        type: "paragraph",
        content: "The biggest mindset shift when working with Claude Code is that it isn't a tool you operate — it's a collaborator you direct. And like any collaborator, the quality of what you get back depends almost entirely on the quality of what you give it.",
      },
      {
        type: "paragraph",
        content: "You can't be vague. \"Make the homepage look better.\" \"Can you fix the spacing?\" These kinds of prompts get vague results — technically correct changes that don't actually move the design forward. I've learned to be specific in the way I'd be specific in a design brief: not just what you want changed, but why, and what feeling it should create.",
      },
      {
        type: "paragraph",
        content: "The prompts that worked best sounded like this:",
      },
      {
        type: "quote",
        content: "\"The hero section feels too heavy — I want more breathing room between the headline and the scroll indicator. The overall feeling should be calm and considered, not crowded.\"",
      },
      {
        type: "paragraph",
        content: "Specific. Visual. With a reason attached. Like having a conversation with someone who actually understood what I was going for.",
      },
      {
        type: "visual",
        content: "",
        visualId: "prompt-quality",
      },
      {
        type: "heading",
        content: "What I'd Do Differently",
      },
      {
        type: "paragraph",
        content: "Looking back at everything — the broken images, the 404 errors, the two hours of Terminal troubleshooting — there are a few things I'd do differently.",
      },
      {
        type: "list",
        content: "",
        items: [
          "Prepare assets before touching any AI tool. The biggest headaches came from images — uncompressed screenshots, photos saved as PNG, files that were 20,000 pixels wide. Next time: compress everything, rename files clearly, organize into folders, then start.",
          "Spend more time on the Lovable prompt. The first draft shapes everything that comes after. A better brief upfront would have saved some iteration time.",
          "Ask Claude to explain, not just fix. A lot of the time I'd describe a problem and Claude would just solve it. When I asked \"can you explain what you just did and why,\" the answers were genuinely useful and stuck with me.",
        ],
      },
      {
        type: "heading",
        content: "The Design Decisions That Made the Biggest Difference",
      },
      {
        type: "paragraph",
        content: "A few specific choices ended up defining the feel of the site more than anything else:",
      },
      {
        type: "list",
        content: "",
        items: [
          "Color over complexity. I spent a lot of time on my palette before I started building, and that investment paid off. Because I had clear primary and accent colors going in, Claude could apply them consistently without me having to correct things repeatedly.",
          "Restraint in the hero. My instinct was to make the hero section as impressive as possible — lots of motion, lots of elements. What actually worked better was simplicity: a clean animated shape, my name, a short line about what I do. Less to distract from the work itself.",
          "Password-protecting case studies. This filters for the kind of engagement I actually want: someone motivated enough to reach out and ask for access, not someone clicking through passively.",
        ],
      },
      {
        type: "heading",
        content: "What's Next",
      },
      {
        type: "paragraph",
        content: "The site is live, but I don't think of it as finished — I think of it as deployed. There's a difference.",
      },
      {
        type: "paragraph",
        content: "The process I've built — write a prompt, see the change in local preview, push when happy — makes all of that feel manageable in a way that editing a WordPress theme never did. I can work on my portfolio the same way I work on any design project: iteratively, with clear feedback loops, and without waiting on someone else to implement what I'm imagining.",
      },
      {
        type: "quote",
        content: "I assumed \"building your own website with AI\" meant one big effort followed by a finished thing. What it actually means is having a workflow — a way of making changes that's fast enough that you'll actually use it. That's what I have now — and that feels like more of an achievement than the site itself.",
      },
      {
        type: "paragraph",
        content: "This is where the series ends, but the project doesn't. The portfolio is live, the workflow is in place, and for the first time in years I'm not dreading the idea of updating it. That feels like enough for now.",
      },
    ],
  },
];
