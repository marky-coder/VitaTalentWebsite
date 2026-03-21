// client/src/components/CEOMessageSection.tsx
import React from "react";
// Import the video from attached_assets. Your vite.config.ts already maps "@assets" -> attached_assets
import ceoVideo from "@assets/Vita Talent 3.mov";

export default function CEOMessageSection(): JSX.Element {
  return (
    <section
      className="py-16 bg-gradient-to-br from-primary/5 via-primary/4 to-background"
      aria-labelledby="ceo-heading"
      data-testid="section-ceo-message"
    >
      <div className="container max-w-5xl mx-auto px-4 text-center">
        <h2
          id="ceo-heading"
          className="text-3xl md:text-4xl font-bold text-foreground mb-6"
        >
          A word from our CEO
        </h2>

        {/* Limit width so the video doesn't fill the whole page */}
        <div
          className="mx-auto w-full max-w-md md:max-w-2xl bg-transparent shadow-none rounded-none border-0"
          style={{ backgroundColor: "transparent", boxShadow: "none" }}
        >
          {/* Responsive video:
              - w-full keeps video width within the container
              - max-h ensures it never becomes taller than the viewport/desired px
              - no rounded corners, no shadow, no border
          */}
          <video
            src={ceoVideo}
            controls
            playsInline
            preload="metadata"
            className="w-full h-auto bg-transparent shadow-none rounded-none border-0 max-h-[60vh] md:max-h-[480px]"
            aria-label="A message from the CEO"
            style={{ backgroundColor: "transparent", boxShadow: "none", border: "none", borderRadius: 0 }}
          />
        </div>
      </div>
    </section>
  );
}
