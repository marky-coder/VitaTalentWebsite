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
      .label    { font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial; font-weight:700; fill:#ffffff; font-size:14px; letter-spacing:0.04em; pointer-events:none; }
      .person-fill { fill:#ffffff; }
      .person-body { fill:#0b5e38; }
      .person-stroke { stroke:#063f2b; stroke-width:1.6; }

      /*
        Approach:
        - rotate the whole "scaleGroup" to get the justice-scale sway
        - animate the pan groups (left/right) for a small bob that is composed
          with the beam rotation. Because the shadow, pan and person are
          inside the same pan group they move together (no trailing shadows).
        - persons have an inner counter-rotation (.anti-rotate) so they stay visually upright.
      */

      /* SWING: rotate the whole scaleGroup around the pivot (x=700,y=178).
         Using the pivot to match the pillar's decorative circle. */
      #scaleGroup {
        transform-origin: 700px 178px;
        transform-box: fill-box;
        animation: swing 4.6s cubic-bezier(.22,.9,.3,.95) infinite;
        will-change: transform;
      }

      /* Pans bob slightly for a natural feel (includes shadow & person since they're children) */
      #left-pan, #right-pan {
        transform-box: fill-box;
        animation: panBob 4.6s cubic-bezier(.22,.9,.3,.95) infinite;
        will-change: transform;
      }

      /* Persons counter-rotate so they stay upright; they share pan bob delay */
      .anti-rotate {
        transform-box: fill-box;
        animation: antiSwing 4.6s cubic-bezier(.22,.9,.3,.95) infinite;
        will-change: transform;
      }

      /* Slight offsets for natural motion */
      #left-pan { animation-delay: -0.06s; }
      #right-pan { animation-delay: 0.06s; }
      .anti-rotate { animation-delay: inherit; }

      @keyframes swing {
        0%   { transform: rotate(-6deg); }
        30%  { transform: rotate(-2deg); }
        50%  { transform: rotate(6deg); }
        80%  { transform: rotate(2deg); }
        100% { transform: rotate(-6deg); }
      }

      /* exact inverse so person remains visually level */
      @keyframes antiSwing {
        0%   { transform: rotate(6deg); }
        30%  { transform: rotate(2deg); }
        50%  { transform: rotate(-6deg); }
        80%  { transform: rotate(-2deg); }
        100% { transform: rotate(6deg); }
      }

      @keyframes panBob {
        0%   { transform: translateY(0px); }
        30%  { transform: translateY(2px); }
        50%  { transform: translateY(6px); }
        80%  { transform: translateY(2px); }
        100% { transform: translateY(0px); }
      }

      /* Gentle slowdown on small screens to save CPU and avoid motion sickness */
      @media (max-width: 640px) {
        #scaleGroup, #left-pan, #right-pan, .anti-rotate { animation-duration: 6.4s; }
        .label { font-size: 12px; }
      }
    ]]></style>
  </defs>

  <!-- Transparent background on purpose -->

  <!-- Ground ellipse -->
  <ellipse cx="700" cy="618" rx="360" ry="30" fill="#e9f3ec" opacity="0.55"/>

  <!-- Pillar & pivot (static relative to page) -->
  <g filter="url(#softShadow)">
    <path d="M580 542 C590 510, 810 510, 820 542 L820 548 C760 568, 640 568, 580 548 Z"
          fill="url(#pillarGrad)" stroke="#023522" stroke-width="1.2"/>
    <rect x="676" y="198" width="48" height="340" rx="14"
          fill="url(#pillarGrad)" stroke="#023522" stroke-width="1.2"/>
    <circle cx="700" cy="178" r="26" fill="#0b5e38" stroke="#023522" stroke-width="1.2"/>
    <circle cx="700" cy="152" r="12" fill="#072f1e" />
    <path d="M700 140 L700 48" stroke="#0b5e38" stroke-width="8" stroke-linecap="round"/>
  </g>

  <!-- MOVING GROUP: rotate this to get the justice-scale effect -->
  <g id="scaleGroup">
    <!-- Beam -->
    <path id="beam" d="M300 170 C420 150, 580 150, 700 160 C820 150, 980 150, 1100 170"
          fill="none" stroke="url(#beamGrad)" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>

    <!-- Suspensions (two lines per side) -->
    <g stroke="#063f2b" stroke-width="3" stroke-linecap="round">
      <line x1="460" y1="170" x2="460" y2="312" />
      <line x1="495" y1="170" x2="495" y2="312" opacity="0.95"/>
      <line x1="940" y1="170" x2="940" y2="312" />
      <line x1="975" y1="170" x2="975" y2="312" opacity="0.95"/>
    </g>

    <!-- LEFT PAN GROUP: pan + shadow + person (person inside so it moves with pan) -->
    <g id="left-pan" transform="translate(0,0)">
      <!-- pan shadow (moves with pan so it doesn't trail) -->
      <ellipse class="pan-shadow" cx="480" cy="345" rx="36" ry="6" fill="#0b5e38" opacity="0.06"/>
      <!-- pan shape -->
      <path d="M420 320 q60 32 120 0 l0 10 q-60 24 -120 0 z"
            fill="url(#panGrad)" stroke="#023522" stroke-width="2" />
      <rect x="450" y="333" width="90" height="18" rx="9" fill="#0b5e38" opacity="0.95"/>
      <text x="495" y="346" text-anchor="middle" class="label">CLIENT</text>

      <!-- person group sits inside pan so it inherits pan translation/rotation.
           inner .anti-rotate keeps the person visually upright while the pan rotates.

           IMPORTANT: the translate is computed so that after scale(2) the person is centered
           over the pan center (~480). The person's head is at cx=22, so we want:
             tx *after scaling* + head_x*scale = desiredCenterX
           => translateX = desiredCenterX - (22*2) = 480 - 44 = 436
           Vertical translate chosen so the person sits on the pan edge.
      -->
      <g transform="translate(436,293) scale(2)">
        <g class="anti-rotate">
          <rect x="18" y="14" width="8" height="22" rx="3" class="person-body" />
          <circle cx="22" cy="8" r="6" class="person-fill person-stroke" />
          <path d="M18 18 L22 26 L26 18" fill="#ffffff" />
          <path d="M14 22 Q18 20 18 26" stroke="#063f2b" stroke-width="1.2" fill="#ffffff"/>
          <path d="M30 22 Q26 20 26 26" stroke="#063f2b" stroke-width="1.2" fill="#ffffff"/>
        </g>
      </g>
    </g>

    <!-- RIGHT PAN GROUP -->
    <g id="right-pan" transform="translate(0,0)">
      <ellipse class="pan-shadow" cx="940" cy="345" rx="36" ry="6" fill="#0b5e38" opacity="0.06"/>
      <path d="M880 320 q60 32 120 0 l0 10 q-60 24 -120 0 z"
            fill="url(#panGrad)" stroke="#023522" stroke-width="2" />
      <rect x="910" y="333" width="90" height="18" rx="9" fill="#0b5e38" opacity="0.95"/>
      <text x="955" y="346" text-anchor="middle" class="label">CANDIDATE</text>

      <!-- compute translate so person is centered at ~940:
           translateX = 940 - (22*2) = 940 - 44 = 896
      -->
      <g transform="translate(896,293) scale(2)">
        <g class="anti-rotate">
          <rect x="18" y="14" width="8" height="22" rx="3" class="person-body" />
          <circle cx="22" cy="8" r="6" class="person-fill person-stroke" />
          <path d="M18 18 L22 26 L26 18" fill="#ffffff" />
          <path d="M14 22 Q18 20 18 26" stroke="#063f2b" stroke-width="1.2" fill="#ffffff"/>
          <path d="M30 22 Q26 20 26 26" stroke="#063f2b" stroke-width="1.2" fill="#ffffff"/>
        </g>
      </g>
    </g>
  </g>

  <!-- subtle highlights -->
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
