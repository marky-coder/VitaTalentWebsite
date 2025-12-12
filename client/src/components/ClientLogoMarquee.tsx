// client/src/components/ClientLogoMarquee.tsx
import React from "react";
import "./ClientLogoMarquee.css";

type Logo = { src: string; alt?: string };

interface Props {
  logos: Logo[];
  /** seconds for one full loop. Smaller => faster. Default 24s. */
  speed?: number;
  className?: string;
  /** direction: "left" | "right" */
  direction?: "left" | "right";
}

export default function ClientLogoMarquee({
  logos,
  speed = 24,
  className = "",
  direction = "left",
}: Props) {
  if (!logos || logos.length === 0) return null;

  // duplicate the array so the animation can loop seamlessly
  const items = [...logos, ...logos];

  // expose direction via data attribute (used in CSS to reverse animation if needed)
  const dataAttrs = { "data-direction": direction };

  return (
    <div
      className={`client-marquee ${className}`}
      style={
        {
          // expose CSS var so consumers can control speed
          ["--marquee-duration" as any]: `${speed}s`,
        } as React.CSSProperties
      }
      role="region"
      aria-label="Trusted by leading companies worldwide — logo carousel"
      {...(dataAttrs as any)}
    >
      <div className="client-marquee__track" aria-hidden="false">
        {items.map((logo, idx) => (
          <div className="client-marquee__item" key={idx}>
            <img src={logo.src} alt={logo.alt ?? ""} />
          </div>
        ))}
      </div>
    </div>
  );
}
