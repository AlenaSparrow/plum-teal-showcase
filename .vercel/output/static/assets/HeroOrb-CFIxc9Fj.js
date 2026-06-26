import{j as o}from"./index-Cxnd0_YI.js";function i({className:s}){return o.jsx("div",{className:s,"aria-hidden":!0,children:o.jsxs("svg",{viewBox:"0 0 400 400",xmlns:"http://www.w3.org/2000/svg",className:"w-full h-full",style:{overflow:"visible"},children:[o.jsx("style",{children:`
          @keyframes orb-spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes orb-spin-fast {
            from { transform: rotate(0deg); }
            to { transform: rotate(-360deg); }
          }
          @keyframes orb-pulse {
            0%, 100% { opacity: 0.45; }
            50% { opacity: 0.25; }
          }
          .orb-outer {
            transform-origin: 200px 200px;
            animation: orb-spin-slow 18s linear infinite;
          }
          .orb-inner {
            transform-origin: 200px 200px;
            animation: orb-spin-fast 11s linear infinite;
          }
          .orb-glow {
            animation: orb-pulse 4s ease-in-out infinite;
          }
          @media (prefers-reduced-motion: reduce) {
            .orb-outer, .orb-inner { animation: none; }
          }
        `}),o.jsx("circle",{className:"orb-glow",cx:"200",cy:"200",r:"130",fill:"var(--surface)",opacity:"0.5"}),o.jsxs("g",{className:"orb-outer",stroke:"var(--plum)",strokeWidth:"0.8",fill:"none",opacity:"0.45",children:[o.jsx("polygon",{points:"200,72 260,140 140,140"}),o.jsx("polygon",{points:"200,72 140,140 108,100"}),o.jsx("polygon",{points:"200,72 108,100 162,58"}),o.jsx("polygon",{points:"200,72 260,140 292,100"}),o.jsx("polygon",{points:"200,72 292,100 238,58"}),o.jsx("polygon",{points:"260,140 308,180 260,220"}),o.jsx("polygon",{points:"260,140 260,220 200,180"}),o.jsx("polygon",{points:"260,140 200,180 140,140"}),o.jsx("polygon",{points:"140,140 200,180 140,220"}),o.jsx("polygon",{points:"140,140 140,220 92,180"}),o.jsx("polygon",{points:"308,180 292,260 260,220"}),o.jsx("polygon",{points:"260,220 292,260 200,280"}),o.jsx("polygon",{points:"260,220 200,280 140,220"}),o.jsx("polygon",{points:"140,220 200,280 108,260"}),o.jsx("polygon",{points:"140,220 108,260 92,180"}),o.jsx("polygon",{points:"200,328 260,260 140,260"}),o.jsx("polygon",{points:"200,328 140,260 108,300"}),o.jsx("polygon",{points:"200,328 108,300 154,338"}),o.jsx("polygon",{points:"200,328 260,260 292,300"}),o.jsx("polygon",{points:"200,328 292,300 246,338"})]}),o.jsxs("g",{className:"orb-inner",stroke:"var(--gold)",strokeWidth:"0.8",fill:"none",opacity:"0.35",children:[o.jsx("polygon",{points:"200,118 240,158 160,158"}),o.jsx("polygon",{points:"200,118 160,158 140,136"}),o.jsx("polygon",{points:"200,118 240,158 260,136"}),o.jsx("polygon",{points:"240,158 260,200 240,242"}),o.jsx("polygon",{points:"240,158 240,242 200,202"}),o.jsx("polygon",{points:"240,158 200,202 160,158"}),o.jsx("polygon",{points:"160,158 200,202 160,242"}),o.jsx("polygon",{points:"160,158 160,242 140,200"}),o.jsx("polygon",{points:"260,200 252,244 240,242"}),o.jsx("polygon",{points:"240,242 252,264 200,282"}),o.jsx("polygon",{points:"240,242 200,282 160,242"}),o.jsx("polygon",{points:"160,242 200,282 148,264"}),o.jsx("polygon",{points:"200,282 240,242 160,242"})]}),o.jsx("circle",{cx:"200",cy:"200",r:"3",fill:"var(--gold)",opacity:"0.5"})]})})}export{i as HeroOrb};
