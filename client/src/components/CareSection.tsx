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
      <feDropShadow dx="0" dy="10" stdDeviation="18" flood-color="#063f2b" flood-opacity="0.08"/>
    </filter>

    <style><![CDATA[
      .label    { font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial; font-weight:700; fill:#ffffff; font-size:14px; letter-spacing:0.04em; pointer-events:none; }
      .person-fill { fill:#ffffff; }
      .person-body { fill:#0b5e38; }
      .person-stroke { stroke:#063f2b; stroke-width:1.4; }

      /* Pan swing: left pan goes down while right pan goes up, then reverses */
      #left-pan    { transform-box: fill-box; transform-origin: 480px 332px; animation: leftSwing 3.8s ease-in-out infinite; will-change: transform; }
      #right-pan   { transform-box: fill-box; transform-origin: 940px 332px; animation: rightSwing 3.8s ease-in-out infinite; will-change: transform; }

      /* persons get a counter-rotation so heads stay upright */
      .person-anti { transform-box: fill-box; transform-origin: center; animation: antiRotate 3.8s ease-in-out infinite; will-change: transform; }

      /* small phase offset so motion feels natural */
      #left-pan  { animation-delay: -0.1s; }
      #right-pan { animation-delay:  0.1s; }
      .person-anti { animation-delay: inherit; }

      /* keyframes: left goes down (translateY positive + small rotate), right inverse */
      @keyframes leftSwing {
        0%   { transform: translateY(0px) rotate(0deg); }
        25%  { transform: translateY(4px) rotate(3deg); }
        50%  { transform: translateY(10px) rotate(6deg); }
        75%  { transform: translateY(4px) rotate(3deg); }
        100% { transform: translateY(0px) rotate(0deg); }
      }

      @keyframes rightSwing {
        0%   { transform: translateY(0px) rotate(0deg); }
        25%  { transform: translateY(-4px) rotate(-3deg); }
        50%  { transform: translateY(-10px) rotate(-6deg); }
        75%  { transform: translateY(-4px) rotate(-3deg); }
        100% { transform: translateY(0px) rotate(0deg); }
      }

      /* counter-rotate so people appear level while pan rotates */
      @keyframes antiRotate {
        0%   { transform: rotate(0deg); }
        25%  { transform: rotate(-3deg); }
        50%  { transform: rotate(-6deg); }
        75%  { transform: rotate(-3deg); }
        100% { transform: rotate(0deg); }
      }

      /* gentle slowdown on small screens */
      @media (max-width: 640px) {
        #left-pan, #right-pan, .person-anti { animation-duration: 5.6s; }
        .label { font-size: 12px; }
      }
    ]]></style>
  </defs>

  <!-- ground -->
  <ellipse cx="700" cy="618" rx="360" ry="30" fill="#e9f3ec" opacity="0.55"/>

  <!-- pillar static -->
  <g filter="url(#softShadow)">
    <path d="M580 542 C590 510, 810 510, 820 542 L820 548 C760 568, 640 568, 580 548 Z" fill="url(#pillarGrad)" stroke="#023522" stroke-width="1.2"/>
    <rect x="676" y="198" width="48" height="340" rx="14" fill="url(#pillarGrad)" stroke="#023522" stroke-width="1.2"/>
    <circle cx="700" cy="178" r="26" fill="#0b5e38" stroke="#023522" stroke-width="1.2"/>
    <circle cx="700" cy="152" r="12" fill="#072f1e" />
    <path d="M700 140 L700 48" stroke="#0b5e38" stroke-width="8" stroke-linecap="round"/>
  </g>

  <!-- beam & suspensions (static) -->
  <g>
    <path d="M300 170 C420 150, 580 150, 700 160 C820 150, 980 150, 1100 170" fill="none" stroke="url(#beamGrad)" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>
    <!-- suspension positions anchored above pans -->
    <g stroke="#063f2b" stroke-width="3" stroke-linecap="round">
      <line x1="460" y1="170" x2="460" y2="312" />
      <line x1="495" y1="170" x2="495" y2="312" opacity="0.95"/>
      <line x1="940" y1="170" x2="940" y2="312" />
      <line x1="975" y1="170" x2="975" y2="312" opacity="0.95"/>
    </g>
  </g>

  <!-- LEFT PAN (animated group) -->
  <g id="left-pan" transform="translate(0,0)">
    <!-- shadow included inside group so it moves with pan -->
    <ellipse cx="480" cy="345" rx="36" ry="6" fill="#0b5e38" opacity="0.06"/>
    <path d="M420 320 q60 32 120 0 l0 10 q-60 24 -120 0 z" fill="url(#panGrad)" stroke="#023522" stroke-width="2" />
    <rect x="450" y="333" width="90" height="18" rx="9" fill="#0b5e38" opacity="0.95"/>
    <text x="495" y="346" text-anchor="middle" class="label">CLIENT</text>

    <!-- person inside pan; inner group counter-rotates so person stays upright -->
    <g transform="translate(452,250) scale(2)">
      <g class="person-anti">
        <rect x="18" y="14" width="8" height="22" rx="3" class="person-body"/>
        <circle cx="22" cy="8" r="6" class="person-fill person-stroke"/>
        <path d="M18 18 L22 26 L26 18" fill="#ffffff"/>
        <path d="M14 22 Q18 20 18 26" stroke="#063f2b" stroke-width="1.2" fill="#ffffff"/>
        <path d="M30 22 Q26 20 26 26" stroke="#063f2b" stroke-width="1.2" fill="#ffffff"/>
      </g>
    </g>
  </g>

  <!-- RIGHT PAN (animated) -->
  <g id="right-pan" transform="translate(0,0)">
    <ellipse cx="940" cy="345" rx="36" ry="6" fill="#0b5e38" opacity="0.06"/>
    <path d="M880 320 q60 32 120 0 l0 10 q-60 24 -120 0 z" fill="url(#panGrad)" stroke="#023522" stroke-width="2" />
    <rect x="910" y="333" width="90" height="18" rx="9" fill="#0b5e38" opacity="0.95"/>
    <text x="955" y="346" text-anchor="middle" class="label">CANDIDATE</text>

    <g transform="translate(952,250) scale(2)">
      <g class="person-anti">
        <rect x="18" y="14" width="8" height="22" rx="3" class="person-body"/>
        <circle cx="22" cy="8" r="6" class="person-fill person-stroke"/>
        <path d="M18 18 L22 26 L26 18" fill="#ffffff"/>
        <path d="M14 22 Q18 20 18 26" stroke="#063f2b" stroke-width="1.2" fill="#ffffff"/>
        <path d="M30 22 Q26 20 26 26" stroke="#063f2b" stroke-width="1.2" fill="#ffffff"/>
      </g>
    </g>
  </g>

  <!-- subtle highlights -->
  <g opacity="0.12">
    <path d="M420 312 q60 32 120 0" stroke="#ffffff" stroke-width="16" stroke-linecap="round" />
    <path d="M880 312 q60 32 120 0" stroke="#ffffff" stroke-width="16" stroke-linecap="round" />
  </g>

  <!-- base -->
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

          {/* Centered responsive wrapper */}
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
