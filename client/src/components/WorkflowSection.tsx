// client/src/components/WorkflowSection.tsx
import { useEffect, useRef, useState } from "react";
import {
  Users,
  Search,
  CheckCircle,
  HandshakeIcon,
  HeadphonesIcon,
  RefreshCw,
  Shield,
} from "lucide-react";
import { Card } from "@/components/ui/card";

const steps = [
  {
    number: 1,
    icon: Users,
    title: "Understanding Client Needs",
    description: "We dive deep to understand your unique requirements and company culture.",
  },
  {
    number: 2,
    icon: Search,
    title: "Sourcing Top Candidates Globally",
    description: "We tap into our worldwide network to find the best talent across continents.",
  },
  {
    number: 3,
    icon: CheckCircle,
    title: "Screening and Vetting",
    description:
      "Rigorous evaluation with AI interviews for tailored questions related to the role ensures only the most qualified candidates move forward.",
  },
  {
    number: 4,
    icon: HandshakeIcon,
    title: "Matching and Onboarding",
    description: "Seamless integration of the right talent into your organization.",
  },
  {
    number: 5,
    icon: HeadphonesIcon,
    title: "Ongoing Support",
    description: "Continuous support for both clients and candidates ensures long-term success.",
  },
  {
    number: 6,
    icon: RefreshCw,
    title: "Replacement Process",
    description: "We cover you for 30 days with our replacement guarantee.",
  },
  {
    number: 7,
    icon: Shield,
    title: "Insurance Coverage",
    description: "Subscribe to our insurance and gain unlimited replacement policy.",
  },
];

export default function WorkflowSection() {
  // rootRef wraps the entire content so we can query for .workflow-step nodes (desktop + mobile)
  const rootRef = useRef<HTMLDivElement | null>(null);

  // visibleStates: booleans for each step (true once the step has been revealed)
  const [visibleStates, setVisibleStates] = useState<boolean[]>(
    () => Array(steps.length).fill(false)
  );

  useEffect(() => {
    // run only in browser
    if (!rootRef.current) return;

    // Respect reduced motion: reveal everything immediately
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisibleStates(Array(steps.length).fill(true));
      return;
    }

    const nodes = Array.from(rootRef.current.querySelectorAll<HTMLElement>(".workflow-step"));

    // small helper to mark index visible once
    const markVisible = (idx: number) => {
      setVisibleStates((prev) => {
        if (prev[idx]) return prev;
        const next = prev.slice();
        next[idx] = true;
        return next;
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idxAttr = entry.target.getAttribute("data-step-index");
            const idx = idxAttr ? Number(idxAttr) : -1;
            if (idx >= 0) {
              markVisible(idx);
              // we can unobserve this node since we want a one-time reveal
              observer.unobserve(entry.target);
            }
          }
        });
      },
      {
        root: null,
        // trigger a little before the element is fully in view:
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.12,
      }
    );

    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 bg-gradient-to-bl from-primary/12 via-background to-primary/8" data-testid="section-workflow">
      <div className="container max-w-7xl mx-auto px-4" ref={rootRef}>
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-foreground mb-4">Our Process</h2>
          <p className="text-lg font-medium text-muted-foreground max-w-2xl mx-auto">
            A proven approach to connecting exceptional talent with outstanding opportunities
          </p>
        </div>

        {/* Desktop: Alternating Timeline Layout */}
        <div className="hidden md:block relative">
          {/* Central vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/20 via-primary/40 to-primary/20 -translate-x-1/2" />

          <div className="space-y-16">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              const visible = visibleStates[index];
              // We use transitionDelay to create a subtle stagger per-step
              const baseDelay = index * 110; // ms, tweak for stronger/weaker stagger

              return (
                <div
                  key={step.number}
                  // animate the whole step (dot + connecting line + card)
                  data-step-index={index}
                  className={`relative workflow-step transform transition-all duration-700 ease-out ${
                    visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  // subtle per-step delay on the parent's transition so the whole step moves together
                  style={{ transitionDelay: visible ? `${baseDelay}ms` : "0ms" }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                    {/* Make the dot focusable so keyboard users can 'hover' with focus */}
                    <div
                      role="img"
                      aria-label={`Step ${step.number}`}
                      tabIndex={0}
                      className={`w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl shadow-lg border-4 border-background transform transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 motion-reduce:transition-none cursor-pointer ${
                        visible ? "scale-100 opacity-100" : "scale-75 opacity-0"
                      }`}
                      // Slightly pop the dot on hover/focus; larger scale requested
                      // Tailwind hover/focus classes work because they're part of the classname string.
                      // Keep these after the conditional classes so the hover rules override the base scale.
                      onKeyDown={(e) => {
                        // Allow Enter/Space to briefly toggle a small active effect for keyboard users
                        if (e.key === "Enter" || e.key === " ") {
                          // Prevent scroll on Space
                          e.preventDefault();
                          // Add small active class change via inline style for instant feedback
                          const el = e.currentTarget as HTMLDivElement;
                          el.style.transform = "translateY(-4px) scale(1.18)";
                          setTimeout(() => {
                            // only reset if still present
                            if (el) el.style.transform = "";
                          }, 150);
                        }
                      }}
                      // use inline style for transitionDelay so it matches the dot popping timing
                      style={{
                        transitionDelay: visible ? `${Math.max(0, baseDelay - 80)}ms` : "0ms",
                      }}
                    >
                      <span
                        // the inner span contains the number - we add hover/focus scale here as well to ensure it grows more
                        className="pointer-events-none"
                        // Also add CSS classes for hover/focus to scale bigger
                        // Tailwind doesn't let us place hover: classes via JS concatenation reliably here, so we rely on the parent transform
                      >
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Connecting line to card */}
                  <div
                    className={`absolute top-1/2 w-12 h-0.5 bg-primary/30 ${
                      isEven ? "left-1/2 ml-7" : "right-1/2 mr-7"
                    }`}
                  />

                  {/* Card */}
                  <div className={`flex ${isEven ? "justify-start" : "justify-end"}`}>
                    <Card
                      className={`w-[45%] p-6 hover-elevate bg-gradient-to-br from-card to-primary/10 border-primary/20 transform transition-all duration-700 ${
                        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                      }`}
                      data-testid={`card-step-${step.number}`}
                      // delay the card a little after the dot
                      style={{ transitionDelay: visible ? `${baseDelay + 80}ms` : "0ms" }}
                    >
                      <div className={`flex gap-4 ${isEven ? "flex-row" : "flex-row-reverse"}`}>
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                            {/* icons animate with the card because they're children */}
                            <step.icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
                          </div>
                        </div>
                        <div className={`flex-1 ${isEven ? "text-left" : "text-right"}`}>
                          <h3 className="font-bold text-foreground text-lg mb-2">{step.title}</h3>
                          <p className="text-sm font-medium text-muted-foreground leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </div>

                  {/* Small style override for stronger hover scale on the dot (applies when visible) */}
                  <style jsx>{`
                    /* Only apply the hover/focus enlargement when the dot is visible (has opacity 1) */
                    .workflow-step :global(.w-14.h-14[tabindex]) {
                      /* no-op to ensure specificity for later rules */
                    }
                    /* Larger hover scale + lift */
                    .workflow-step :global(.w-14.h-14):hover,
                    .workflow-step :global(.w-14.h-14):focus {
                      transform: translateY(-6px) scale(1.25) !important;
                      z-index: 40;
                      box-shadow: 0 12px 36px rgba(0, 0, 0, 0.14);
                    }
                    /* Respect reduced motion: remove transform changes */
                    @media (prefers-reduced-motion: reduce) {
                      .workflow-step :global(.w-14.h-14):hover,
                      .workflow-step :global(.w-14.h-14):focus {
                        transform: none !important;
                        box-shadow: none !important;
                      }
                    }
                  `}</style>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile: Vertical Timeline */}
        <div className="md:hidden relative pl-8">
          {/* Left vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary/40 to-primary/20" />

          <div className="space-y-8">
            {steps.map((step, index) => {
              const visible = visibleStates[index];
              const baseDelay = index * 110;

              return (
                <div
                  key={step.number}
                  data-step-index={index}
                  className={`relative workflow-step transform transition-all duration-700 ease-out ${
                    visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                  }`}
                  style={{ transitionDelay: visible ? `${baseDelay}ms` : "0ms" }}
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-[1.65rem] top-4">
                    <div
                      role="img"
                      aria-label={`Step ${step.number}`}
                      tabIndex={0}
                      className={`w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm shadow-lg border-2 border-background transform transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 motion-reduce:transition-none cursor-pointer ${
                        visible ? "scale-100 opacity-100" : "scale-75 opacity-0"
                      }`}
                      style={{ transitionDelay: visible ? `${Math.max(0, baseDelay - 80)}ms` : "0ms" }}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          const el = e.currentTarget as HTMLDivElement;
                          el.style.transform = "translateY(-3px) scale(1.12)";
                          setTimeout(() => {
                            if (el) el.style.transform = "";
                          }, 150);
                        }
                      }}
                    >
                      {step.number}
                    </div>
                  </div>

                  <Card
                    className={`p-5 bg-gradient-to-br from-card to-primary/10 border-primary/20 transform transition-all duration-700 ${
                      visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                    data-testid={`card-step-mobile-${step.number}`}
                    style={{ transitionDelay: visible ? `${baseDelay + 80}ms` : "0ms" }}
                  >
                    <div className="flex gap-3">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                          <step.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-foreground mb-1">{step.title}</h3>
                        <p className="text-sm font-medium text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </Card>

                  <style jsx>{`
                    .workflow-step :global(.w-10.h-10):hover,
                    .workflow-step :global(.w-10.h-10):focus {
                      transform: translateY(-5px) scale(1.18) !important;
                      z-index: 30;
                      box-shadow: 0 10px 28px rgba(0, 0, 0, 0.12);
                    }

                    @media (prefers-reduced-motion: reduce) {
                      .workflow-step :global(.w-10.h-10):hover,
                      .workflow-step :global(.w-10.h-10):focus {
                        transform: none !important;
                        box-shadow: none !important;
                      }
                    }
                  `}</style>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
