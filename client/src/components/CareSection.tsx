// client/src/components/CareSection.tsx
import React from "react";

const balanceSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1400 700" width="1400" height="700" role="img" aria-label="Vita Talent balance and partnership illustration">
  <defs>
    <linearGradient id="pillarGrad2" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0" stop-color="#0f5f3a"/>
      <stop offset="1" stop-color="#073f2a"/>
    </linearGradient>
    <linearGradient id="beamGrad2" x1="0" x2="1" y1="0" y2="0">
      <stop offset="0" stop-color="#0f5f3a"/>
      <stop offset="1" stop-color="#0b5e38"/>
    </linearGradient>
    <linearGradient id="panGrad2" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0" stop-color="#1e7c47"/>
      <stop offset="1" stop-color="#0b5e38"/>
    </linearGradient>

    <filter id="shadowSoft" x="-60%" y="-60%" width="220%" height="220%">
      <feDropShadow dx="0" dy="14" stdDeviation="24" flood-color="#063f2b" flood-opacity="0.08"/>
    </filter>

    <style><![CDATA[
      .stroke { stroke: #063f2b; stroke-width: 2; stroke-linecap:round; stroke-linejoin:round; }
      .label { font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial; font-weight:700; fill:#ffffff; font-size:14px; letter-spacing:0.04em; }
      .person-fill { fill: #ffffff; }
      .person-accent { fill: #0b5e38; }
    ]]></style>
  </defs>

  <!-- Transparent background -->

  <!-- Ground ellipse -->
  <ellipse cx="700" cy="618" rx="360" ry="30" fill="#e9f3ec" opacity="0.55"/>

  <!-- Pillar with subtle shadow -->
  <g filter="url(#shadowSoft)">
    <path d="M580 542 C590 510, 810 510, 820 542 L820 548 C760 568, 640 568, 580 548 Z" fill="url(#pillarGrad2)" stroke="#023522" stroke-width="1.2"/>
    <rect x="676" y="198" width="48" height="340" rx="14" fill="url(#pillarGrad2)" stroke="#023522" stroke-width="1.2"/>
    <circle cx="700" cy="178" r="26" fill="#0b5e38" stroke="#023522" stroke-width="1.2"/>
    <circle cx="700" cy="152" r="12" fill="#072f1e" />
    <path d="M700 140 L700 48" stroke="#0b5e38" stroke-width="8" stroke-linecap="round"/>
  </g>

  <!-- Beam - centered pivot at x=700 -->
  <!-- Beam is drawn as a smooth symmetrical curve so the pan anchors line up -->
  <g>
    <path d="M300 170 C420 150, 580 150, 700 160 C820 150, 980 150, 1100 170" fill="none" stroke="url(#beamGrad2)" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
  </g>

  <!-- Suspension rods - exactly centered over pans -->
  <!-- Left suspension anchor at x=460, right at x=940 -->
  <g stroke="#063f2b" stroke-width="3" stroke-linecap="round">
    <line x1="460" y1="170" x2="460" y2="312" />
    <line x1="460" y1="170" x2="495" y2="312" opacity="0.95"/>
    <line x1="940" y1="170" x2="940" y2="312" />
    <line x1="940" y1="170" x2="975" y2="312" opacity="0.95"/>
  </g>

  <!-- Pans -->
  <g>
    <!-- left pan -->
    <path d="M420 320 q60 32 120 0 l0 10 q-60 24 -120 0 z" fill="url(#panGrad2)" stroke="#023522" stroke-width="2" />
    <rect x="450" y="333" width="90" height="18" rx="9" fill="#0b5e38" opacity="0.95"/>
    <text x="495" y="346" text-anchor="middle" class="label">CLIENT</text>

    <!-- right pan -->
    <path d="M880 320 q60 32 120 0 l0 10 q-60 24 -120 0 z" fill="url(#panGrad2)" stroke="#023522" stroke-width="2" />
    <rect x="910" y="333" width="90" height="18" rx="9" fill="#0b5e38" opacity="0.95"/>
    <text x="955" y="346" text-anchor="middle" class="label">CANDIDATE</text>
  </g>

  <!-- Large person icons centered in each pan -->
  <!-- left person (bigger and centered) -->
  <g transform="translate(452,260) scale(2)">
    <!-- body -->
    <rect x="18" y="14" width="8" height="22" rx="3" fill="#0b5e38" />
    <!-- head -->
    <circle cx="22" cy="8" r="6" class="person-fill" stroke="#063f2b" stroke-width="1.6"/>
    <!-- suit detail -->
    <path d="M18 18 L22 26 L26 18" fill="#ffffff" />
    <!-- arms -->
    <path d="M14 22 Q18 20 18 26" stroke="#063f2b" stroke-width="1.2" fill="#ffffff"/>
    <path d="M30 22 Q26 20 26 26" stroke="#063f2b" stroke-width="1.2" fill="#ffffff"/>
  </g>

  <!-- right person (bigger and centered) -->
  <g transform="translate(952,260) scale(2)">
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

          <div className="mt-12">
            <div
              className="w-full max-w-3xl mx-auto"
              dangerouslySetInnerHTML={{ __html: balanceSvg }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
