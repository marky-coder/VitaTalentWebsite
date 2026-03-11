// client/src/components/CareSection.tsx
import React from "react";

const balanceSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1400 700" width="1400" height="700" role="img" aria-label="Vita Talent balance and partnership illustration">
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
      <feDropShadow dx="0" dy="12" stdDeviation="22" flood-color="#063f2b" flood-opacity="0.10"/>
    </filter>
    <style><![CDATA[
      .stroke { stroke: #063f2b; stroke-width: 2; stroke-linecap:round; stroke-linejoin:round; }
      .label { font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial; font-weight:700; fill:#ffffff; font-size:16px; letter-spacing:0.04em; }
      .small-muted { font-family: Inter, system-ui; font-size:13px; fill:#0a3c29; opacity:0.9;}
    ]]></style>
  </defs>

  <!-- Transparent background on purpose -->

  <!-- ground -->
  <ellipse cx="700" cy="620" rx="370" ry="28" fill="#e7f2ea" opacity="0.6" />

  <!-- Pillar & pivot with shadow -->
  <g filter="url(#softShadow)">
    <path d="M620 540 C630 510, 770 510, 780 540 L780 548 C740 560, 660 560, 620 548 Z" fill="url(#pillarGrad)" stroke="#023522" stroke-width="1.2"/>
    <rect x="662" y="200" width="76" height="340" rx="18" fill="url(#pillarGrad)" stroke="#023522" stroke-width="1.2"/>
    <circle cx="700" cy="200" r="14" fill="#072f1e" stroke="#0f5f3a" stroke-width="1.5" />
    <circle cx="700" cy="178" r="26" fill="#0b5e38" stroke="#023522" stroke-width="1.2" />
    <path d="M700 150 L700 40" stroke="#0b5e38" stroke-width="10" stroke-linecap="round"/>
  </g>

  <!-- Beam (slight elegant curvature) -->
  <g transform="translate(0,-26)">
    <path d="M330 170 C440 150, 560 150, 700 160 C840 150, 960 150, 1070 170" fill="none" stroke="url(#beamGrad)" stroke-width="14" stroke-linecap="round" stroke-linejoin="round"/>
  </g>

  <!-- Suspensions -->
  <g stroke="#06402d" stroke-width="3" stroke-linecap="round">
    <line x1="460" y1="178" x2="460" y2="318" />
    <line x1="495" y1="178" x2="495" y2="318" />
    <line x1="940" y1="178" x2="940" y2="318" />
    <line x1="1010" y1="178" x2="1010" y2="318" />
  </g>

  <!-- Pans (clean, shallower) -->
  <g>
    <path d="M420 320 q80 42 160 0 l0 12 q-80 32 -160 0 z" fill="url(#panGrad)" stroke="#023522" stroke-width="2" />
    <path d="M880 320 q80 42 160 0 l0 12 q-80 32 -160 0 z" fill="url(#panGrad)" stroke="#023522" stroke-width="2" />
    <!-- integrated labels on lip of pan -->
    <g>
      <rect x="440" y="336" width="120" height="18" rx="9" fill="#0b5e38" opacity="0.95"/>
      <text x="500" y="349" text-anchor="middle" class="label">CLIENT</text>
    </g>
    <g>
      <rect x="900" y="336" width="120" height="18" rx="9" fill="#0b5e38" opacity="0.95"/>
      <text x="960" y="349" text-anchor="middle" class="label">CANDIDATE</text>
    </g>
  </g>

  <!-- People: LARGER, simplified, centered in pans -->
  <!-- Left person group scaled up -->
  <g transform="translate(472,246) scale(1.45)">
    <g class="stroke" fill="#fff">
      <circle cx="30" cy="16" r="12" fill="#fff" stroke="#063f2b" stroke-width="2.2"/>
      <path d="M30 32 L30 56" stroke="#063f2b" stroke-width="2.2" stroke-linecap="round"/>
      <path d="M18 36 L30 50 L42 36" fill="#ffffff" stroke="#063f2b" stroke-width="2.2"/>
      <path d="M20 56 L40 56" stroke="#063f2b" stroke-width="2.2" stroke-linecap="round"/>
      <path d="M24 36 L28 46 L24 46 Z" fill="#0b5e38" stroke="#063f2b" stroke-width="1"/>
      <path d="M36 36 L32 46 L36 46 Z" fill="#0b5e38" stroke="#063f2b" stroke-width="1"/>
    </g>
  </g>

  <!-- Right person group scaled up -->
  <g transform="translate(952,246) scale(1.45)">
    <g class="stroke" fill="#fff">
      <circle cx="30" cy="16" r="12" fill="#fff" stroke="#063f2b" stroke-width="2.2"/>
      <path d="M30 32 L30 56" stroke="#063f2b" stroke-width="2.2" stroke-linecap="round"/>
      <path d="M18 36 L30 50 L42 36" fill="#ffffff" stroke="#063f2b" stroke-width="2.2"/>
      <path d="M20 56 L40 56" stroke="#063f2b" stroke-width="2.2" stroke-linecap="round"/>
      <path d="M24 36 L28 46 L24 46 Z" fill="#0b5e38" stroke="#063f2b" stroke-width="1"/>
      <path d="M36 36 L32 46 L36 46 Z" fill="#0b5e38" stroke="#063f2b" stroke-width="1"/>
    </g>
  </g>

  <!-- subtle highlights -->
  <g opacity="0.12">
    <path d="M420 312 q80 42 160 0" stroke="#ffffff" stroke-width="18" stroke-linecap="round" />
    <path d="M880 312 q80 42 160 0" stroke="#ffffff" stroke-width="18" stroke-linecap="round" />
  </g>

  <!-- finishing base accent -->
  <g>
    <rect x="650" y="520" width="100" height="18" rx="8" fill="#0b5e38" stroke="#023522" stroke-width="1"/>
    <ellipse cx="700" cy="548" rx="120" ry="18" fill="#073f2a" opacity="0.10"/>
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

          <div className="mt-12">
            <div
              className="w-full max-w-2xl mx-auto rounded-md"
              // dangerouslySetInnerHTML is used so we don't need an external SVG file.
              dangerouslySetInnerHTML={{ __html: balanceSvg }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
