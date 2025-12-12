import React from "react";
import "./ClientLogoMarquee.css";

type Logo = { src: string; alt?: string };

interface Props {
  logos: Logo[];
  /** seconds for one full loop. Smaller => faster. Default 24s. */
  speed?: number;
  className?: string;
}

export default function ClientLogoMarquee({ logos, speed = 24, className = "" }: Props) {
  if (!logos || logos.length === 0) return null;

  // duplicate the array so the animation can loop seamlessly
  const items = [...logos, ...logos];

  return (
    <div
      className={`client-marquee ${className}`}
      // expose CSS var so consumers can control speed
      style={{ ["--marquee-duration" as any]: `${speed}s` } as React.CSSProperties}
      role="region"
      aria-label="Trusted by leading companies worldwide — logo carousel"
    >
      <div className="client-marquee__track" aria-hidden="false">
        {items.map((logo, idx) => (
          <div className="client-marquee__item" key={idx}>
            {/* img should be optimized (svg/png/webp) and same visual height for best result */}
            <img src={logo.src} alt={logo.alt ?? ""} />
          </div>
        ))}
      </div>
    </div>
  );
}
