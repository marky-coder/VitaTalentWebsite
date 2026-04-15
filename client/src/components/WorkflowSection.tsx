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
  ArrowRight,
} from "lucide-react";

type Step = {
  number: number;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    number: 1,
    icon: Users,
    title: "Understanding Client Needs",
    description:
      "We dive deep to understand your unique requirements, company culture, hiring goals, and the kind of person who will thrive in your team. This gives us the clarity to build a search around fit, not just a job title.",
  },
  {
    number: 2,
    icon: Search,
    title: "Sourcing Top Candidates Globally",
    description:
      "We tap into our worldwide network to find the best talent across continents. Instead of limiting the search to one market, we identify strong candidates globally so you can access deeper talent pools and better hiring options.",
  },
  {
    number: 3,
    icon: CheckCircle,
    title: "Screening and Vetting",
    description:
      "Rigorous evaluation with AI interviews and tailored role-specific questions ensures only the most qualified candidates move forward. We filter for capability, communication, reliability, and alignment before anyone reaches your inbox.",
  },
  {
    number: 4,
    icon: HandshakeIcon,
    title: "Matching and Onboarding",
    description:
      "Seamless integration of the right talent into your organization starts with strong matching. We help connect you with candidates who fit the role and support a smooth onboarding process so new hires can contribute quickly.",
  },
  {
    number: 5,
    icon: HeadphonesIcon,
    title: "Ongoing Support",
    description:
      "Continuous support for both clients and candidates ensures long-term success. As your team grows, we stay involved to help maintain momentum, solve issues early, and support a productive working relationship on both sides.",
  },
  {
    number: 6,
    icon: RefreshCw,
    title: "Replacement Process",
    description:
      "We cover you for 30 days with our replacement guarantee. If a hire does not work out within that window, we move quickly to help you replace the role so your hiring process stays protected and your team keeps moving forward.",
  },
  {
    number: 7,
    icon: Shield,
    title: "Insurance Coverage",
    description:
      "For added peace of mind, you can subscribe to our insurance coverage and gain an unlimited replacement policy. It is an extra layer of protection designed for companies that want more hiring security as they scale.",
  },
];

export default function WorkflowSection() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [visibleStates, setVisibleStates] = useState<boolean[]>(
    () => Array(steps.length + 1).fill(false)
  );

  useEffect(() => {
    if (!rootRef.current) return;

    if (
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setVisibleStates(Array(steps.length + 1).fill(true));
      return;
    }

    const nodes = Array.from(
      rootRef.current.querySelectorAll<HTMLElement>(".workflow-tile")
    );

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
          if (!entry.isIntersecting) return;

          const idxAttr = entry.target.getAttribute("data-step-index");
          const idx = idxAttr ? Number(idxAttr) : -1;

          if (idx >= 0) {
            markVisible(idx);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -10% 0px",
        threshold: 0.12,
      }
    );

    nodes.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="bg-[#005f5b] py-20 md:py-24"
      data-testid="section-workflow"
    >
      <div className="container mx-auto max-w-7xl px-4" ref={rootRef}>
        <div className="mx-auto mb-14 max-w-3xl text-center md:mb-16">
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
            Our Process
          </h2>
          <p className="text-base font-medium leading-7 text-white/80 md:text-lg">
            A proven approach to connecting exceptional talent with outstanding
            opportunities.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const visible = visibleStates[index];
            const baseDelay = index * 90;

            return (
              <article
                key={step.number}
                data-step-index={index}
                className={`workflow-tile group flex min-h-[320px] flex-col rounded-[28px] border border-white/8 bg-[#006d68] p-7 shadow-[0_20px_60px_rgba(0,0,0,0.12)] transition-all duration-700 ease-out md:min-h-[340px] md:p-8 ${
                  visible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                } hover:-translate-y-2 hover:shadow-[0_24px_70px_rgba(0,0,0,0.18)]`}
                style={{ transitionDelay: visible ? `${baseDelay}ms` : "0ms" }}
              >
                <div className="mb-8 flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#006d68] shadow-lg">
                    <span className="text-xl font-bold">{step.number}</span>
                  </div>

                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10">
                    <Icon className="h-7 w-7 text-white/85" strokeWidth={1.8} />
                  </div>
                </div>

                <div className="flex flex-1 flex-col">
                  <h3 className="mb-4 max-w-[16rem] text-2xl font-bold leading-tight text-white">
                    {step.title}
                  </h3>

                  <p className="text-base leading-8 text-white/88">
                    {step.description}
                  </p>
                </div>
              </article>
            );
          })}

          <aside
            data-step-index={steps.length}
            className={`workflow-tile flex min-h-[320px] flex-col justify-between rounded-[28px] bg-[#dfe8e2] p-7 text-[#13201e] shadow-[0_20px_60px_rgba(0,0,0,0.12)] transition-all duration-700 ease-out md:min-h-[340px] md:p-8 ${
              visibleStates[steps.length]
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
            style={{
              transitionDelay: visibleStates[steps.length]
                ? `${steps.length * 90}ms`
                : "0ms",
            }}
          >
            <div>
              <h3 className="mb-4 text-3xl font-bold leading-tight md:text-4xl">
                Start Hiring With Confidence
              </h3>

              <p className="mb-5 text-lg leading-8 text-[#13201e]/80">
                From understanding your needs to sourcing, screening,
                onboarding, and long-term support, we guide every step of the
                process.
              </p>

              <p className="text-base leading-8 text-[#13201e]/75">
                With replacement protection and optional insurance coverage, you
                get a hiring partner focused on fit, speed, and long-term
                success.
              </p>
            </div>

            <div className="mt-10 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#006d68]">
              Explore the process
              <ArrowRight className="h-4 w-4" strokeWidth={2.25} />
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
