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
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [visibleStates, setVisibleStates] = useState<boolean[]>(
    () => Array(steps.length).fill(false)
  );

  useEffect(() => {
    if (!rootRef.current) return;

    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisibleStates(Array(steps.length).fill(true));
      return;
    }

    const nodes = Array.from(rootRef.current.querySelectorAll<HTMLElement>(".workflow-step"));

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
              observer.unobserve(entry.target);
            }
          }
        });
      },
      {
        root: null,
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
              const baseDelay = index * 110; // ms

              return (
                // Add `group` here so hovering any child (dot or card) triggers group-hover styles
                <div
                  key={step.number}
                  data-step-index={index}
                  className={`relative workflow-step group transform transition-all duration-700 ease-out ${
                    visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: visible ? `${baseDelay}ms` : "0ms" }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                    <div
                      role="img"
                      aria-label={`Step ${step.number}`}
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          const el = e.currentTarget as HTMLDivElement;
                          // quick local feedback for keyboard users
                          el.style.transform = "translateY(-4px) scale(1.18)";
                          setTimeout(() => {
                            if (el) el.style.transform = "";
                          }, 150);
                        }
                      }}
                      className={`w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl shadow-lg border-4 border-background transform transition-transform duration-300 ease-out motion-reduce:transition-none focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 cursor-pointer
                        ${visible ? "scale-100 opacity-100" : "scale-75 opacity-0"}
                        hover:-translate-y-[6px] hover:scale-125 hover:z-40 hover:shadow-2xl
                        focus:-translate-y-[6px] focus:scale-125 focus:z-40 focus:shadow-2xl`}
                      style={{ transitionDelay: visible ? `${Math.max(0, baseDelay - 80)}ms` : "0ms" }}
                    >
                      <span className="pointer-events-none">{step.number}</span>
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
                      // Add `group-hover` to card so it lifts/zooms slightly with the heading
                      className={`w-[45%] p-6 bg-gradient-to-br from-card to-primary/10 border-primary/20 transform transition-all duration-700 hover-elevate
                        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
                        group-hover:-translate-y-2 group-hover:scale-[1.02] motion-reduce:group-hover:scale-100`}
                      data-testid={`card-step-${step.number}`}
                      style={{ transitionDelay: visible ? `${baseDelay + 80}ms` : "0ms" }}
                    >
                      <div className={`flex gap-4 ${isEven ? "flex-row" : "flex-row-reverse"}`}>
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                            <step.icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
                          </div>
                        </div>
                        <div className={`flex-1 ${isEven ? "text-left" : "text-right"}`}>
                          {/* Title: scales and lifts with group hover */}
                          <h3
                            className={`font-bold text-foreground text-lg mb-2 transform transition-transform duration-200 ease-out
                              group-hover:scale-105 group-hover:-translate-y-1 motion-reduce:group-hover:scale-100`}
                          >
                            {step.title}
                          </h3>
                          <p className="text-sm font-medium text-muted-foreground leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </div>
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
                  // add group for mobile too
                  className={`relative workflow-step group transform transition-all duration-700 ease-out ${
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
                      className={`w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm shadow-lg border-2 border-background transform transition-transform duration-300 ease-out motion-reduce:transition-none focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 cursor-pointer
                        ${visible ? "scale-100 opacity-100" : "scale-75 opacity-0"}
                        hover:-translate-y-[5px] hover:scale-[1.18] hover:z-30 hover:shadow-xl
                        focus:-translate-y-[5px] focus:scale-[1.18] focus:z-30 focus:shadow-xl`}
                      style={{ transitionDelay: visible ? `${Math.max(0, baseDelay - 80)}ms` : "0ms" }}
                    >
                      {step.number}
                    </div>
                  </div>

                  <Card
                    className={`p-5 bg-gradient-to-br from-card to-primary/10 border-primary/20 transform transition-all duration-700
                      ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
                      group-hover:-translate-y-2 group-hover:scale-[1.01] motion-reduce:group-hover:scale-100`}
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
                        <h3
                          className={`font-bold text-foreground mb-1 transform transition-transform duration-200 ease-out
                            group-hover:scale-105 group-hover:-translate-y-1 motion-reduce:group-hover:scale-100`}
                        >
                          {step.title}
                        </h3>
                        <p className="text-sm font-medium text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
