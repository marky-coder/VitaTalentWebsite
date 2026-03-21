// client/src/components/CareSection.tsx
import React from "react";
// Put your image file at: attached_assets/scales-of-justice.png
// (vite.config.ts maps @assets -> attached_assets)
import scalesImg from "@assets/scales-of-justice.png";

export default function CareSection(): JSX.Element {
  return (
    <section
      className="py-24 bg-gradient-to-r from-primary/12 via-primary/15 to-primary/10"
      data-testid="section-care"
    >
      <div className="container max-w-5xl mx-auto px-4">
        <div className="text-center space-y-6">
          {/* EXACT heading text preserved */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-foreground leading-tight tracking-tight">
            We care about people and partnerships.
          </h2>

          <div className="max-w-3xl mx-auto space-y-4">
            <p className="text-lg md:text-xl font-medium text-foreground leading-relaxed">
              At Vita Talent, we believe great hiring is about balance.
            </p>
            <p className="text-lg md:text-xl font-medium text-muted-foreground leading-relaxed">
              We care equally for our clients' business success and our candidates' wellbeing. Even if a match
              doesn't work out, we continue to support both sides.
            </p>
          </div>

          {/* Image wrapper: centered and responsive */}
          <div className="mt-12 flex justify-center">
            <div className="w-full max-w-xl md:max-w-3xl mx-auto">
              <img
                src={scalesImg}
                alt="Justice scale showing client and candidate on balanced pans"
                role="img"
                loading="lazy"
                className="w-full h-auto object-contain"
                style={{ display: "block", margin: "0 auto" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
