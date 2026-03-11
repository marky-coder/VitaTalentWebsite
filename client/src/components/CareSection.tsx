// client/src/components/CareSection.tsx
import React from "react";

const balanceSvg = `
<svg xmlns="http://www.w3.org/2000/svg"
     viewBox="0 0 1400 700"
     preserveAspectRatio="xMidYMid meet"
     role="img"
     aria-label="Vita Talent balance and partnership illustration"
     style="width:100%;height:auto;display:block;margin:0 auto;">
  <defs>
    <linearGradient id="pillarGrad" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0" stop-color="#0f5f3a"/>
      <stop offset="1" stop-color="#073f2a"/>
    </linearGradient>

    <linearGradient id="beamGrad" x1="0" x2="1" y1="0" y2="0">
      <stop offset="0" stop-color="#0f5f3a"/>
      <stop offset="1" stop-color="#0b5e38"/>
    </linearGradient>

    <linearGradient id="panGrad" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0" stop-color="#1e7c47"/>
      <stop offset="1" stop-color="#0b5e38"/>
    </linearGradient>

    <filter id="softShadow" x="-60%" y="-60%" width="220%" height="220%">
      <feDropShadow dx="0" dy="12" stdDeviation="22" flood-color="#063f2b" flood-opacity="0.08"/>
    </filter>

    <style><![CDATA[
      /* Basic shapes & labels */
      .stroke   { stroke: #063f2b; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }
      .label    { font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial; font-weight:700; fill:#ffffff; font-size:14px; letter-spacing:0.04em; }
      .person-fill { fill:#ffffff; }
      .person-accent{ fill:#0b5e38; }

      /* Animation for the beam (sway) and slight pan bob */
      #beam {
        transform-origin: 700px 160px;
        transform-box: fill-box;
        animation: beamSway 6s ease-in-out infinite;
      }

      #left-pan, #right-pan {
        transform-box: fill-box;
        animation: panBob 6s ease-in-out infinite;
      }

      /* slight phase offset for pans so motion feels natural */
      #left-pan { animation-delay: -0.1s; }
      #right-pan { animation-delay: 0.1s; }

      @keyframes beamSway {
        0%   { transform: rotate(-1deg); }
        50%  { transform: rotate(1deg);  }
        100% { transform: rotate(-1deg); }
      }

      @keyframes panBob {
        0%   { transform: translateY(0px) rotate(0deg); }
        25%  { transform: translateY(2px) rotate(-0.15deg); }
        50%  { transform: translateY(4px) rotate(0.25deg); }
        75%  { transform: translateY(2px) rotate(-0.15deg); }
        100% { transform: translateY(0px) rotate(0deg); }
      }

      /* Make the animation gentler on very small screens */
      @media (max-width: 420px) {
        #beam { animation-duration: 8s; }
        #left-pan, #right-pan { animation-duration: 8s; }
        .label { font-size: 12px; }
      }

    ]]></style>
  </defs>

  <!-- Transparent background intentionally so it blends with section gradient -->

  <!-- Ground ellipse -->
  <ellipse cx="700" cy="618" rx="360" ry="30" fill="#e9f3ec" opacity="0.55"/>

  <!-- Pillar & pivot with shadow -->
  <g filter="url(#softShadow)">
    <path d="M580 542 C590 510, 810 510, 820 542 L820 548 C760 568, 640 568, 580 548 Z"
          fill="url(#pillarGrad)" stroke="#023522" stroke-width="1.2"/>
    <rect x="676" y="198" width="48" height="340" rx="14"
          fill="url(#pillarGrad)" stroke="#023522" stroke-width="1.2"/>
    <circle cx="700" cy="178" r="26" fill="#0b5e38" stroke="#023522" stroke-width="1.2"/>
    <circle cx="700" cy="152" r="12" fill="#072f1e" />
    <path d="M700 140 L700 48" stroke="#0b5e38" stroke-width="8" stroke-linecap="round"/>
  </g>

  <!-- Beam - centered pivot at x=700 - animated via #beam -->
  <g id="beamWrap">
    <path id="beam" d="M300 170 C420 150, 580 150, 700 160 C820 150, 980 150, 1100 170"
          fill="none" stroke="url(#beamGrad)" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
  </g>

  <!-- Suspension rods - positioned exactly above pans (and follow beam rotation) -->
  <g stroke="#063f2b" stroke-width="3" stroke-linecap="round">
    <!-- Left anchor: two thinner lines for a realistic chain -->
    <g id="left-suspension" transform="translate(0,0)">
      <line x1="460" y1="170" x2="460" y2="312" />
      <line x1="495" y1="170" x2="495" y2="312" opacity="0.95"/>
    </g>

    <!-- Right anchor -->
    <g id="right-suspension" transform="translate(0,0)">
      <line x1="940" y1="170" x2="940" y2="312" />
      <line x1="975" y1="170" x2="975" y2="312" opacity="0.95"/>
    </g>
  </g>

  <!-- Pans (each pan in a group so we can animate/bob them together) -->
  <g id="left-pan">
    <path d="M420 320 q60 32 120 0 l0 10 q-60 24 -120 0 z"
          fill="url(#panGrad)" stroke="#023522" stroke-width="2" />
    <rect x="450" y="333" width="90" height="18" rx="9" fill="#0b5e38" opacity="0.95"/>
    <text x="495" y="346" text-anchor="middle" class="label">CLIENT</text>
  </g>

  <g id="right-pan">
    <path d="M880 320 q60 32 120 0 l0 10 q-60 24 -120 0 z"
          fill="url(#panGrad)" stroke="#023522" stroke-width="2" />
    <rect x="910" y="333" width="90" height="18" rx="9" fill="#0b5e38" opacity="0.95"/>
    <text x="955" y="346" text-anchor="middle" class="label">CANDIDATE</text>
  </g>

  <!-- Person icons - larger and centered; placed in groups so they remain correctly positioned -->
  <g id="person-left" transform="translate(452,260) scale(2)">
    <rect x="18" y="14" width="8" height="22" rx="3" fill="#0b5e38" />
    <circle cx="22" cy="8" r="6" class="person-fill" stroke="#063f2b" stroke-width="1.6"/>
    <path d="M18 18 L22 26 L26 18" fill="#ffffff" />
    <path d="M14 22 Q18 20 18 26" stroke="#063f2b" stroke-width="1.2" fill="#ffffff"/>
    <path d="M30 22 Q26 20 26 26" stroke="#063f2b" stroke-width="1.2" fill="#ffffff"/>
  </g>

  <g id="person-right" transform="translate(952,260) scale(2)">
    <rect x="18" y="14" width="8" height="22" rx="3" fill="#0b5e38" />
    <circle cx="22" cy="8" r="6" class="person-fill" stroke="#063f2b" stroke-width="1.6"/>
    <path d="M18 18 L22 26 L26 18" fill="#ffffff" />
    <path d="M14 22 Q18 20 18 26" stroke="#063f2b" stroke-width="1.2" fill="#ffffff"/>
    <path d="M30 22 Q26 20 26 26" stroke="#063f2b" stroke-width="1.2" fill="#ffffff"/>
  </g>

  <!-- subtle pan highlights -->
  <g opacity="0.12">
    <path d="M420 312 q60 32 120 0" stroke="#ffffff" stroke-width="16" stroke-linecap="round" />
    <path d="M880 312 q60 32 120 0" stroke="#ffffff" stroke-width="16" stroke-linecap="round" />
  </g>

  <!-- finishing base -->
  <g>
    <rect x="660" y="520" width="80" height="18" rx="8" fill="#0b5e38" stroke="#023522" stroke-width="1"/>
    <ellipse cx="700" cy="548" rx="110" ry="16" fill="#073f2a" opacity="0.10"/>
  </g>
</svg>
`;

export default function CareSection() {
  return (
    <section className="py-24 bg-gradient-to-r from-primary/12 via-primary/15 to-primary/10" data-testid="section-care">
      <div className="container max-w-5xl mx-auto px-4">
        <div className="text-center space-y-6">
          <h2 className="text-4xl font-bold text-foreground">
            We care about people and partnerships.
          </h2>

          <div className="max-w-3xl mx-auto space-y-4">
            <p className="text-lg font-medium text-foreground leading-relaxed">
              At Vita Talent, we believe great hiring is about balance.
            </p>
            <p className="text-lg font-medium text-muted-foreground leading-relaxed">
              We care equally for our clients' business success and our candidates' wellbeing. Even if a match doesn't work out, we continue to support both sides.
            </p>
          </div>

          {/* Responsive wrapper: smaller on phones, larger on desktop; uses flex centering */}
          <div className="mt-12 flex justify-center">
            <div
              className="w-full max-w-xl md:max-w-3xl mx-auto"
              dangerouslySetInnerHTML={{ __html: balanceSvg }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
