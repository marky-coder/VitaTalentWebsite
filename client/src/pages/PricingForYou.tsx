import SiteHeader from "@/components/SiteHeader";
import SiteFooterNav from "@/components/SiteFooterNav";
import Footer from "@/components/Footer";
import {
  BadgeCheck,
  BriefcaseBusiness,
  CalendarDays,
  Check,
  CircleDollarSign,
  CreditCard,
  Handshake,
  Layers3,
  ShieldCheck,
  Users,
} from "lucide-react";

type OneTimePlan = {
  name: string;
  price: string;
  description: string;
  features: string[];
  featured?: boolean;
};

type SubscriptionPlan = {
  name: string;
  price: string;
  description: string;
  features: string[];
  featured?: boolean;
};

const oneTimePlans: OneTimePlan[] = [
  {
    name: "One Hire",
    price: "$1000",
    description: "One-time fee for one successful hire with no replacement guarantee.",
    features: [
      "1 successful hire",
      "One-time payment",
      "No replacement guarantee",
      "Ideal for low-risk or test hires",
    ],
  },
  {
    name: "One Hire + 15 Days",
    price: "$1500",
    description: "One-time fee for one successful hire with a 15-day replacement guarantee.",
    features: [
      "1 successful hire",
      "15-day replacement guarantee",
      "More protection during onboarding",
      "Great for fast-moving teams",
    ],
  },
  {
    name: "One Hire + 30 Days",
    price: "$2000",
    description: "One-time fee for one successful hire with a 30-day replacement guarantee.",
    features: [
      "1 successful hire",
      "30-day replacement guarantee",
      "Best protection on one-off hiring",
      "Stronger peace of mind for scaling teams",
    ],
    featured: true,
  },
  {
    name: "Custom Pricing",
    price: "Custom",
    description:
      "Need a custom setup, multiple hires, or a different engagement structure? Let’s scope it together.",
    features: [
      "Tailored pricing structure",
      "Built around your hiring volume",
      "Flexible guarantee options",
      "Discovery call required",
    ],
  },
];

const subscriptionPlans: OneTimePlan[] = [
  {
    name: "One Hire",
    price: "$1000",
    description:
      "Monthly subscription for one active hire. Sales, payroll, and data are included.",
    features: [
      "1 active hire",
      "Sales included",
      "Payroll included",
      "Data included",
    ],
  },
  {
    name: "Two Hires",
    price: "$1500",
    description:
      "Monthly subscription for two active hires. Sales, payroll, and data are included.",
    features: [
      "2 active hires",
      "Sales included",
      "Payroll included",
      "Data included",
    ],
  },
  {
    name: "Three Hires",
    price: "$2000",
    description:
      "Monthly subscription for three active hires. Sales, payroll, and data are included.",
    features: [
      "3 active hires",
      "Sales included",
      "Payroll included",
      "Data included",
    ],
    featured: true,
  },
  {
    name: "Custom Pricing",
    price: "Custom",
    description:
      "Need a larger team, a unique structure, or a different support model? Let’s build it around your goals.",
    features: [
      "Custom monthly structure",
      "Built for team expansion",
      "Flexible operating support",
      "Discovery call required",
    ],
  },
];

function PricingCard({
  name,
  price,
  description,
  features,
  featured = false,
  ctaHref,
  ctaLabel,
}: {
  name: string;
  price: string;
  description: string;
  features: string[];
  featured?: boolean;
  ctaHref: string;
  ctaLabel: string;
}) {
  const isCustom = price === "Custom";

  return (
    <div
      className={`flex h-full flex-col rounded-[30px] border p-7 shadow-[0_18px_50px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(0,0,0,0.08)] md:p-8 ${
        featured
          ? "border-[#197647]/20 bg-white ring-2 ring-[#197647]/15"
          : "border-black/5 bg-white"
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <div
            className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] ${
              featured
                ? "bg-[#197647] text-white"
                : "bg-[#DEE9E3] text-[#315545]"
            }`}
          >
            {featured ? "Most Popular" : "Pricing Option"}
          </div>

          <h3 className="mt-4 text-2xl font-bold leading-tight text-[#13201e]">
            {name}
          </h3>
        </div>

        <div className="shrink-0 rounded-2xl bg-[#F3F7F4] p-3">
          {isCustom ? (
            <Handshake className="h-6 w-6 text-[#197647]" strokeWidth={1.9} />
          ) : (
            <CircleDollarSign className="h-6 w-6 text-[#197647]" strokeWidth={1.9} />
          )}
        </div>
      </div>

      <div className="mt-8">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#315545]/70">
          {isCustom ? "Let's scope it" : "Price"}
        </p>
        <p className="mt-2 text-4xl font-bold leading-none text-[#197647]">
          {price}
        </p>
      </div>

      <p className="mt-6 text-base leading-8 text-[#13201e]/75">{description}</p>

      <div className="mt-8 space-y-4">
        {features.map((feature) => (
          <div key={feature} className="flex items-start gap-3">
            <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#DEE9E3]">
              <Check className="h-3.5 w-3.5 text-[#197647]" strokeWidth={3} />
            </div>
            <p className="text-sm leading-7 text-[#13201e]/78">{feature}</p>
          </div>
        ))}
      </div>

      <div className="mt-auto pt-8">
        <a
          href={ctaHref}
          target="_blank"
          rel="noreferrer"
          className={`inline-flex w-full items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition-opacity hover:opacity-90 ${
            featured
              ? "bg-[#197647] text-white"
              : "bg-[#DEE9E3] text-[#13201e]"
          }`}
        >
          {ctaLabel}
        </a>
      </div>
    </div>
  );
}

export default function PricingForYou() {
  return (
    <div className="min-h-screen bg-[#F3F7F4] text-[#13201e]">
      <SiteHeader />

      <main>
        <section className="bg-[#315545] text-white">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mb-5 inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white/90">
                Private pricing page
              </div>

              <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl">
                Flexible pricing built around how you want to hire
              </h1>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/80">
                Whether you want a straightforward one-time placement fee or a
                monthly structure with more built-in support, here are the
                pricing options prepared for you.
              </p>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <a
                  href="#one-time-fee"
                  className="inline-flex items-center justify-center rounded-xl bg-[#197647] px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                >
                  View One-Time Pricing
                </a>

                <a
                  href="#monthly-subscription"
                  className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/15"
                >
                  View Monthly Pricing
                </a>
              </div>

              <div className="mt-12 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/8 p-5">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                    <BriefcaseBusiness className="h-6 w-6" />
                  </div>
                  <p className="mt-3 text-sm text-white/80">
                    Two pricing models depending on how you prefer to engage
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/8 p-5">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <p className="mt-3 text-sm text-white/80">
                    Replacement guarantee options for one-time placements
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/8 p-5">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                    <Layers3 className="h-6 w-6" />
                  </div>
                  <p className="mt-3 text-sm text-white/80">
                    Scalable monthly support with bundled operating essentials
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="one-time-fee" className="bg-[#F3F7F4] py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex rounded-full bg-[#DEE9E3] px-4 py-2 text-sm font-semibold text-[#315545]">
                One-time fee
              </div>

              <h2 className="mt-5 text-3xl font-bold leading-tight md:text-5xl">
                Best for teams that want a straightforward placement fee
              </h2>

              <p className="mt-5 text-lg leading-8 text-[#13201e]/72">
                Pick the level of protection you want on a one-off hire. The
                more replacement coverage you want, the higher the one-time fee.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {oneTimePlans.map((plan) => (
                <PricingCard
                  key={plan.name}
                  name={plan.name}
                  price={plan.price}
                  description={plan.description}
                  features={plan.features}
                  featured={plan.featured}
                  ctaHref={
                    plan.price === "Custom"
                      ? "https://vitatalent.co/schedule"
                      : "https://vitatalent.co/hire"
                  }
                  ctaLabel={
                    plan.price === "Custom"
                      ? "Schedule a Discovery Call"
                      : "Start Hiring"
                  }
                />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#DEE9E3] py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-[28px] border border-black/5 bg-white p-6 shadow-[0_16px_40px_rgba(0,0,0,0.04)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F3F7F4]">
                  <BadgeCheck className="h-6 w-6 text-[#197647]" />
                </div>
                <h3 className="mt-5 text-xl font-bold">Simple and clear</h3>
                <p className="mt-3 text-base leading-7 text-[#13201e]/72">
                  Easy to understand pricing for one successful hire, without
                  needing a long-term commitment.
                </p>
              </div>

              <div className="rounded-[28px] border border-black/5 bg-white p-6 shadow-[0_16px_40px_rgba(0,0,0,0.04)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F3F7F4]">
                  <ShieldCheck className="h-6 w-6 text-[#197647]" />
                </div>
                <h3 className="mt-5 text-xl font-bold">Protection options</h3>
                <p className="mt-3 text-base leading-7 text-[#13201e]/72">
                  Choose the replacement coverage that fits your comfort level
                  and onboarding risk.
                </p>
              </div>

              <div className="rounded-[28px] border border-black/5 bg-white p-6 shadow-[0_16px_40px_rgba(0,0,0,0.04)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F3F7F4]">
                  <Users className="h-6 w-6 text-[#197647]" />
                </div>
                <h3 className="mt-5 text-xl font-bold">Flexible for growth</h3>
                <p className="mt-3 text-base leading-7 text-[#13201e]/72">
                  Start with one hire now and move into a broader support model
                  later if your needs evolve.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="monthly-subscription" className="bg-[#F3F7F4] py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex rounded-full bg-[#DEE9E3] px-4 py-2 text-sm font-semibold text-[#315545]">
                Monthly subscription
              </div>

              <h2 className="mt-5 text-3xl font-bold leading-tight md:text-5xl">
                Best for teams that want ongoing support and bundled essentials
              </h2>

              <p className="mt-5 text-lg leading-8 text-[#13201e]/72">
                This monthly structure includes sales, payroll, and data, making
                it a cleaner operating model for businesses that want more than
                just sourcing support.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {subscriptionPlans.map((plan) => (
                <PricingCard
                  key={plan.name}
                  name={plan.name}
                  price={plan.price}
                  description={plan.description}
                  features={plan.features}
                  featured={plan.featured}
                  ctaHref={
                    plan.price === "Custom"
                      ? "https://vitatalent.co/schedule"
                      : "https://vitatalent.co/hire"
                  }
                  ctaLabel={
                    plan.price === "Custom"
                      ? "Schedule a Discovery Call"
                      : "Start Hiring"
                  }
                />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#DEE9E3] py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-[28px] border border-black/5 bg-white p-6 shadow-[0_16px_40px_rgba(0,0,0,0.04)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F3F7F4]">
                  <CreditCard className="h-6 w-6 text-[#197647]" />
                </div>
                <h3 className="mt-5 text-xl font-bold">Predictable monthly cost</h3>
                <p className="mt-3 text-base leading-7 text-[#13201e]/72">
                  Easier budgeting for teams that want a recurring structure
                  instead of a one-time placement fee.
                </p>
              </div>

              <div className="rounded-[28px] border border-black/5 bg-white p-6 shadow-[0_16px_40px_rgba(0,0,0,0.04)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F3F7F4]">
                  <Users className="h-6 w-6 text-[#197647]" />
                </div>
                <h3 className="mt-5 text-xl font-bold">Built for scaling</h3>
                <p className="mt-3 text-base leading-7 text-[#13201e]/72">
                  Cleaner pricing for businesses planning to add more hires and
                  grow beyond a single role.
                </p>
              </div>

              <div className="rounded-[28px] border border-black/5 bg-white p-6 shadow-[0_16px_40px_rgba(0,0,0,0.04)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F3F7F4]">
                  <CalendarDays className="h-6 w-6 text-[#197647]" />
                </div>
                <h3 className="mt-5 text-xl font-bold">Bundled support</h3>
                <p className="mt-3 text-base leading-7 text-[#13201e]/72">
                  Sales, payroll, and data are already included, reducing the
                  number of separate pieces you need to manage.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#315545] py-16 text-white md:py-20">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <div className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white/88">
              Need something tailored?
            </div>

            <h2 className="mt-5 text-3xl font-bold leading-tight md:text-5xl">
              We can structure pricing around your exact hiring goals
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-white/80">
              If you are hiring multiple people, need a custom guarantee setup,
              or want a different engagement structure, we can walk through it
              together on a discovery call.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://vitatalent.co/schedule"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-[#197647] px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              >
                Schedule a Discovery Call
              </a>

              <a
                href="https://vitatalent.co/hire"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/15"
              >
                Start Hiring Now
              </a>
            </div>

            <p className="mt-4 text-xs text-white/60">
              This page is private and not linked in the main navigation.
            </p>
          </div>
        </section>
      </main>

      <SiteFooterNav />
      <Footer />
    </div>
  );
}
