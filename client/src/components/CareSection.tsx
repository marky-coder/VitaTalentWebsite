// client/src/components/CareSection.tsx
import React from "react";

export default function CareSection(): JSX.Element {
  /*
    Typography-focused CareSection. The exact heading text is preserved:
      "We care about people and partnerships."
    Adjusted sizing and spacing to match the screenshot (large, bold headline).
    The SVG below is the justice-scale illustration; it's the same robust SVG
    with inline transform styles so global CSS won't break the animation.
  */

  const scaleGroupStyle: React.CSSProperties = {
    transformOrigin: "700px 178px",
    transformBox: "fill-box",
    animation: "vt-swing 4.6s cubic-bezier(.22,.9,.3,.95) infinite",
    willChange: "transform",
  };

  const panStyle: React.CSSProperties = {
    transformBox: "fill-box",
    animation: "vt-panBob 4.6s cubic-bezier(.22,.9,.3,.95) infinite",
    willChange: "transform",
  };

  const personAntiStyle: React.CSSProperties = {
    transformBox: "fill-box",
    transformOrigin: "center center",
    animation: "vt-antiSwing 4.6s cubic-bezier(.22,.9,.3,.95) infinite",
    willChange: "transform",
  };

  return (
    <section className="py-24 bg-gradient-to-r from-primary/12 via-primary/15 to-primary/10" data-testid="section-care">
      <div className="container max-w-5xl mx-auto px-4">
        <div className="text-center space-y-6">
          {/* IMPORTANT: heading text left exactly as requested */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-foreground leading-tight tracking-tight">
            We care about people and partnerships.
          </h2>

          <div className="max-w-3xl mx-auto space-y-4">
            <p className="text-lg md:text-xl font-medium text-foreground leading-relaxed">
              At Vita Talent, we believe great hiring is about balance.
            </p>
            <p className="text-lg md:text-xl font-medium text-muted-foreground leading-relaxed">
              We care equally for our clients' business success and our candidates' wellbeing. Even if a match doesn't work out, we continue to support both sides.
            </p>
          </div>

          {/* Centered responsive wrapper for the SVG */}
          <div className="mt-12 flex justify-center">
            <div className="w-full max-w-xl md:max-w-3xl mx-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1400 700"
                role="img"
                aria-label="Vita Talent balance and partnership illustration"
                style={{ width: "100%", height: "auto", display: "block", margin: "0 auto", pointerEvents: "none" }}
              >
                <defs>
                  <linearGradient id="vt-pillarGrad" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0" stopColor="#0f5f3a" />
                    <stop offset="1" stopColor="#073f2a" />
                  </linearGradient>

                  <linearGradient id="vt-beamGrad" x1="0" x2="1" y1="0" y2="0">
                    <stop offset="0" stopColor="#0f5f3a" />
                    <stop offset="1" stopColor="#0b5e38" />
                  </linearGradient>

                  <linearGradient id="vt-panGrad" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0" stopColor="#1e7c47" />
                    <stop offset="1" stopColor="#0b5e38" />
                  </linearGradient>

                  <filter id="vt-softShadow" x="-60%" y="-60%" width="220%" height="220%">
                    <feDropShadow dx="0" dy="12" stdDeviation="22" floodColor="#063f2b" floodOpacity="0.08" />
                  </filter>

                  <style>{`
                    .vt-label { font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial; font-weight:700; fill:#ffffff; font-size:14px; letter-spacing:0.04em; pointer-events:none; }
                    .vt-person-fill { fill:#ffffff; }
                    .vt-person-body { fill:#0b5e38; }
                    .vt-person-stroke { stroke:#063f2b; stroke-width:1.6; }

                    @keyframes vt-swing {
                      0%   { transform: rotate(-6deg); }
                      30%  { transform: rotate(-2deg); }
                      50%  { transform: rotate(6deg); }
                      80%  { transform: rotate(2deg); }
                      100% { transform: rotate(-6deg); }
                    }
                    @keyframes vt-antiSwing {
                      0%   { transform: rotate(6deg); }
                      30%  { transform: rotate(2deg); }
                      50%  { transform: rotate(-6deg); }
                      80%  { transform: rotate(-2deg); }
                      100% { transform: rotate(6deg); }
                    }
                    @keyframes vt-panBob {
                      0%   { transform: translateY(0); }
                      25%  { transform: translateY(2px); }
                      50%  { transform: translateY(6px); }
                      75%  { transform: translateY(2px); }
                      100% { transform: translateY(0); }
                    }

                    @media (max-width: 640px) {
                      .vt-label { font-size: 12px; }
                    }

                    @media (prefers-reduced-motion: reduce) {
                      #vt-scaleGroup, #vt-left-pan, #vt-right-pan, .vt-anti-rotate {
                        animation: none !important;
                        transform: none !important;
                      }
                    }
                  `}</style>
                </defs>

                <ellipse cx="700" cy="618" rx="360" ry="30" fill="#e9f3ec" opacity="0.55" />

                <g filter="url(#vt-softShadow)">
                  <path d="M580 542 C590 510, 810 510, 820 542 L820 548 C760 568, 640 568, 580 548 Z"
                        fill="url(#vt-pillarGrad)" stroke="#023522" strokeWidth="1.2" />
                  <rect x="676" y="198" width="48" height="340" rx="14"
                        fill="url(#vt-pillarGrad)" stroke="#023522" strokeWidth="1.2" />
                  <circle cx="700" cy="178" r="26" fill="#0b5e38" stroke="#023522" strokeWidth="1.2" />
                  <circle cx="700" cy="152" r="12" fill="#072f1e" />
                  <path d="M700 140 L700 48" stroke="#0b5e38" strokeWidth="8" strokeLinecap="round" />
                </g>

                <g id="vt-scaleGroup" style={scaleGroupStyle as React.CSSProperties}>
                  <path id="vt-beam"
                        d="M300 178 C420 158, 580 158, 700 178 C820 158, 980 158, 1100 178"
                        fill="none"
                        stroke="url(#vt-beamGrad)"
                        strokeWidth="16"
                        strokeLinecap="round"
                        strokeLinejoin="round" />

                  <g stroke="#063f2b" strokeWidth="3" strokeLinecap="round">
                    <line x1="460" y1="178" x2="460" y2="312" />
                    <line x1="495" y1="178" x2="495" y2="312" opacity="0.95" />
                    <line x1="940" y1="178" x2="940" y2="312" />
                    <line x1="975" y1="178" x2="975" y2="312" opacity="0.95" />
                  </g>

                  <g id="vt-left-pan" style={panStyle as React.CSSProperties}>
                    <ellipse cx="480" cy="345" rx="36" ry="6" fill="#0b5e38" opacity="0.06" />
                    <path d="M420 320 q60 32 120 0 l0 10 q-60 24 -120 0 z"
                          fill="url(#vt-panGrad)" stroke="#023522" strokeWidth="2" />
                    <rect x="450" y="333" width="90" height="18" rx="9" fill="#0b5e38" opacity="0.95" />
                    <text x="495" y="346" textAnchor="middle" className="vt-label">CLIENT</text>

                    <g transform="translate(480,318)">
                      <g className="vt-anti-rotate" style={personAntiStyle}>
                        <circle cx="0" cy="-12" r="6" className="vt-person-fill vt-person-stroke" />
                        <rect x="-4" y="-4" width="8" height="22" rx="3" className="vt-person-body" />
                        <path d="M-4 4 L0 14 L4 4" fill="#ffffff" />
                        <path d="M-12 2 Q-6 0 -4 6" stroke="#063f2b" strokeWidth="1.2" fill="#ffffff" />
                        <path d="M12 2 Q6 0 4 6" stroke="#063f2b" strokeWidth="1.2" fill="#ffffff" />
                      </g>
                    </g>
                  </g>

                  <g id="vt-right-pan" style={panStyle as React.CSSProperties}>
                    <ellipse cx="940" cy="345" rx="36" ry="6" fill="#0b5e38" opacity="0.06" />
                    <path d="M880 320 q60 32 120 0 l0 10 q-60 24 -120 0 z"
                          fill="url(#vt-panGrad)" stroke="#023522" strokeWidth="2" />
                    <rect x="910" y="333" width="90" height="18" rx="9" fill="#0b5e38" opacity="0.95" />
                    <text x="955" y="346" textAnchor="middle" className="vt-label">CANDIDATE</text>

                    <g transform="translate(940,318)">
                      <g className="vt-anti-rotate" style={personAntiStyle}>
                        <circle cx="0" cy="-12" r="6" className="vt-person-fill vt-person-stroke" />
                        <rect x="-4" y="-4" width="8" height="22" rx="3" className="vt-person-body" />
                        <path d="M-4 4 L0 14 L4 4" fill="#ffffff" />
                        <path d="M-12 2 Q-6 0 -4 6" stroke="#063f2b" strokeWidth="1.2" fill="#ffffff" />
                        <path d="M12 2 Q6 0 4 6" stroke="#063f2b" strokeWidth="1.2" fill="#ffffff" />
                      </g>
                    </g>
                  </g>
                </g>

                <g opacity="0.12">
                  <path d="M420 312 q60 32 120 0" stroke="#ffffff" strokeWidth="16" strokeLinecap="round" />
                  <path d="M880 312 q60 32 120 0" stroke="#ffffff" strokeWidth="16" strokeLinecap="round" />
                </g>

                <g>
                  <rect x="660" y="520" width="80" height="18" rx="8" fill="#0b5e38" stroke="#023522" strokeWidth="1" />
                  <ellipse cx="700" cy="548" rx="110" ry="16" fill="#073f2a" opacity="0.10" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
