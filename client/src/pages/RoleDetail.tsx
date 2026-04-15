import { useMemo, useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooterNav from "@/components/SiteFooterNav";
import Footer from "@/components/Footer";
import NotFound from "@/pages/not-found";
import {
  ArrowRight,
  Check,
  ChevronDown,
  ChevronRight,
  Globe2,
} from "lucide-react";
import {
  formatMoney,
  getRoleBySlug,
  getSavingsPercent,
  getUsAverage,
  roles,
  type RoleData,
} from "@/data/roles";

type RoleDetailProps = {
  params: {
    slug: string;
  };
};

function SalaryComparison({ role }: { role: RoleData }) {
  const usAverage = getUsAverage(role.usSalaryRange);

  return (
    <section className="bg-[#F3F7F4] py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex rounded-full bg-[#DEE9E3] px-4 py-2 text-sm font-semibold text-[#315545]">
            Compensation snapshot
          </div>

          <h2 className="mt-5 text-3xl font-bold leading-tight md:text-5xl">
            See the cost difference for hiring {role.title.toLowerCase()}
          </h2>

          <p className="mt-5 text-lg leading-8 text-[#13201e]/72">
            Actual compensation depends on experience, seniority, and scope, but
            these ranges show why global hiring can create real room to scale.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-[1fr_1.3fr]">
          <div className="rounded-[32px] border border-[#315545]/20 bg-white p-8 shadow-[0_16px_50px_rgba(0,0,0,0.05)]">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#315545]/70">
              U.S. average range
            </p>
            <div className="mt-8">
              <p className="text-4xl font-bold leading-tight text-[#197647] md:text-5xl">
                {formatMoney(role.usSalaryRange[0])} to
                <br />
                {formatMoney(role.usSalaryRange[1])}/month
              </p>
              <p className="mt-4 text-base text-[#13201e]/65">
                Approximate U.S. compensation benchmark
              </p>
            </div>
          </div>

          <div className="space-y-5">
            {role.regions.map((region) => {
              const savings = getSavingsPercent(usAverage, region.salary);

              return (
                <div
                  key={region.name}
                  className="rounded-[28px] border border-[#315545]/20 bg-white p-6 shadow-[0_16px_50px_rgba(0,0,0,0.05)]"
                >
                  <div className="mb-4 inline-flex rounded-full bg-[#DEE9E3] px-3 py-1 text-sm font-semibold text-[#315545]">
                    {region.name}
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <p className="text-4xl font-bold text-[#197647]">
                        {formatMoney(region.salary)}/month
                      </p>
                      <p className="mt-2 text-sm text-[#13201e]/65">
                        Typical regional salary for this role
                      </p>
                    </div>

                    <div className="border-l-0 md:border-l md:border-black/6 md:pl-6">
                      <p className="text-4xl font-bold text-[#197647]">
                        {savings}%
                      </p>
                      <p className="mt-2 text-sm text-[#13201e]/65">
                        Potential savings versus the U.S. average
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-8 rounded-[28px] border border-black/5 bg-white p-8 shadow-[0_16px_50px_rgba(0,0,0,0.04)]">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <h3 className="text-3xl font-bold leading-tight">
                Why the math matters
              </h3>
              <p className="mt-4 text-lg leading-8 text-[#13201e]/72">
                The biggest gain is not just lower payroll. It is what that lower
                payroll lets you do: hire earlier, add support sooner, and remove
                the bottlenecks that stop your business from scaling cleanly.
              </p>

              <a
                href="https://vitatalent.co/hire"
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#197647] px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              >
                Start Hiring
                <ArrowRight className="h-4 w-4" strokeWidth={2.25} />
              </a>

              <p className="mt-3 text-xs text-[#13201e]/55">
                Actual salary may vary depending on experience and scope.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  label: "U.S. average",
                  value: usAverage,
                  color: "bg-[#315545]",
                },
                {
                  label: role.regions[1].name,
                  value: role.regions[1].salary,
                  color: "bg-[#7DBD94]",
                },
                {
                  label: role.regions[0].name,
                  value: role.regions[0].salary,
                  color: "bg-[#197647]",
                },
                {
                  label: role.regions[2].name,
                  value: role.regions[2].salary,
                  color: "bg-[#529A75]",
                },
              ].map((item) => {
                const width = Math.max(18, Math.round((item.value / usAverage) * 100));
                return (
                  <div key={item.label}>
                    <div className="mb-2 flex items-center justify-between text-sm">
                      <span className="font-semibold text-[#13201e]">
                        {item.label}
                      </span>
                      <span className="text-[#13201e]/65">
                        {formatMoney(item.value)}
                      </span>
                    </div>
                    <div className="h-4 overflow-hidden rounded-full bg-[#DEE9E3]">
                      <div
                        className={`h-full rounded-full ${item.color}`}
                        style={{ width: `${Math.min(width, 100)}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TextSplitSection({
  eyebrow,
  title,
  items,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  items: string[];
  dark?: boolean;
}) {
  return (
    <section className={dark ? "bg-[#315545] text-white py-16 md:py-20" : "bg-[#F3F7F4] text-[#13201e] py-16 md:py-20"}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <div
              className={`inline-flex rounded-full px-4 py-2 text-sm font-semibold ${
                dark
                  ? "bg-white/12 text-white/85"
                  : "bg-[#DEE9E3] text-[#315545]"
              }`}
            >
              {eyebrow}
            </div>

            <h2 className="mt-5 text-3xl font-bold leading-tight md:text-5xl">
              {title}
            </h2>
          </div>

          <div className="space-y-6">
            {items.map((item) => (
              <div key={item} className="flex gap-3">
                <div
                  className={`mt-2 h-2.5 w-2.5 shrink-0 rounded-full ${
                    dark ? "bg-white" : "bg-[#197647]"
                  }`}
                />
                <p
                  className={`text-base leading-8 ${
                    dark ? "text-white/82" : "text-[#13201e]/78"
                  }`}
                >
                  {item}
                </p>
              </div>
            ))}

            <a
              href="https://vitatalent.co/hire"
              target="_blank"
              rel="noreferrer"
              className={`mt-4 inline-flex items-center rounded-xl px-6 py-3 text-sm font-semibold transition-opacity hover:opacity-90 ${
                dark
                  ? "bg-[#197647] text-white"
                  : "bg-[#197647] text-white"
              }`}
            >
              Start Hiring
            </a>

            <p className={dark ? "text-xs text-white/60" : "text-xs text-[#13201e]/55"}>
              Zero risk: you pay nothing if you do not hire.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function RegionSection({ role }: { role: RoleData }) {
  return (
    <section className="bg-[#F3F7F4] py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <div className="inline-flex rounded-full bg-[#DEE9E3] px-4 py-2 text-sm font-semibold text-[#315545]">
              Best-fit hiring regions
            </div>

            <h2 className="mt-5 text-3xl font-bold leading-tight md:text-5xl">
              Top regions for hiring remote {role.title.toLowerCase()} and why
            </h2>
          </div>

          <div className="space-y-8">
            {role.regions.map((region) => (
              <div key={region.name}>
                <div className="mb-3 flex items-center gap-2">
                  <Globe2 className="h-4 w-4 text-[#197647]" />
                  <h3 className="text-2xl font-bold">{region.name}</h3>
                </div>

                <div className="space-y-4">
                  {region.why.map((bullet) => (
                    <div key={bullet} className="flex gap-3">
                      <div className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#197647]" />
                      <p className="text-base leading-8 text-[#13201e]/78">
                        {bullet}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <a
              href="https://vitatalent.co/hire"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-xl bg-[#197647] px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              Start Hiring
            </a>

            <p className="text-xs text-[#13201e]/55">
              Zero risk: you pay nothing if you do not hire.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function FaqSection({ role }: { role: RoleData }) {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="bg-[#F3F7F4] py-16 md:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex rounded-full bg-[#DEE9E3] px-4 py-2 text-sm font-semibold text-[#315545]">
            FAQ
          </div>
          <h2 className="mt-5 text-3xl font-bold leading-tight md:text-5xl">
            Questions about hiring remote {role.title.toLowerCase()}
          </h2>
        </div>

        <div className="mt-10 space-y-4">
          {role.faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-[24px] border border-black/6 bg-white"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                >
                  <span className="text-lg font-semibold text-[#13201e]">
                    {faq.question}
                  </span>
                  <span className="text-[#197647]">
                    {isOpen ? (
                      <ChevronDown className="h-5 w-5" />
                    ) : (
                      <ChevronRight className="h-5 w-5" />
                    )}
                  </span>
                </button>

                {isOpen ? (
                  <div className="border-t border-black/6 px-5 py-5">
                    <p className="text-base leading-8 text-[#13201e]/78">
                      {faq.answer}
                    </p>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function RelatedRoles({ role }: { role: RoleData }) {
  const related = useMemo(() => {
    const sameCategory = roles.filter(
      (item) => item.category === role.category && item.slug !== role.slug
    );

    const fallback = roles.filter((item) => item.slug !== role.slug);

    return [...sameCategory, ...fallback].slice(0, 4);
  }, [role]);

  return (
    <section className="bg-[#DEE9E3] py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <div className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#315545]">
          More roles we source
        </div>

        <h2 className="mt-5 text-3xl font-bold leading-tight md:text-5xl">
          Explore other roles you can hire through Vita Talent
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-[#13201e]/72">
          If you are building across multiple functions, we can help you source
          other complementary roles too.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {related.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.slug}
                href={`/roles/${item.slug}`}
                className="group rounded-[28px] border border-black/5 bg-white p-6 text-left shadow-[0_16px_40px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="inline-flex rounded-full bg-[#DEE9E3] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#315545]">
                    {item.category}
                  </div>
                  <div className="rounded-2xl bg-[#F3F7F4] p-3">
                    <Icon className="h-5 w-5 text-[#197647]" strokeWidth={1.9} />
                  </div>
                </div>

                <h3 className="mt-5 text-2xl font-bold leading-tight">
                  {item.title}
                </h3>

                <p className="mt-3 text-base leading-7 text-[#13201e]/72">
                  {item.cardSummary}
                </p>

                <div className="mt-5 inline-flex rounded-full bg-[#F3F7F4] px-3 py-1 text-sm font-semibold text-[#315545]">
                  {item.salaryRange}
                </div>

                <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#197647]">
                  View details
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </a>
            );
          })}
        </div>

        <div className="mt-10">
          <a
            href="https://vitatalent.co/hire"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-xl bg-[#197647] px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            Start Hiring
          </a>
        </div>

        <p className="mt-3 text-xs text-[#13201e]/55">
          Zero risk: you pay nothing if you do not hire.
        </p>
      </div>
    </section>
  );
}

export default function RoleDetail({ params }: RoleDetailProps) {
  const role = getRoleBySlug(params.slug);

  if (!role) {
    return <NotFound />;
  }

  const Icon = role.icon;

  return (
    <div className="min-h-screen bg-[#F3F7F4] text-[#13201e]">
      <SiteHeader />

      <main>
        <section className="bg-[#315545] text-white">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
            <div className="text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white/88">
                <a href="/roles" className="hover:opacity-80">
                  Roles
                </a>
                <span>/</span>
                <span>{role.title}</span>
              </div>

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-white/10">
                <Icon className="h-8 w-8" strokeWidth={1.9} />
              </div>

              <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">
                Hire remote {role.title.toLowerCase()} with confidence
              </h1>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/80">
                {role.heroDescription}
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <div className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#315545]">
                  {role.salaryRange}
                </div>
                <div className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white/88">
                  {role.category}
                </div>
              </div>

              <div className="mt-10">
                <a
                  href="https://vitatalent.co/hire"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-xl bg-[#197647] px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                >
                  Start Hiring
                </a>
              </div>

              <p className="mt-3 text-xs text-white/60">
                Zero risk: you pay nothing if you do not hire.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#F3F7F4] py-16 md:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
            <div>
              <div className="inline-flex rounded-full bg-[#DEE9E3] px-4 py-2 text-sm font-semibold text-[#315545]">
                What this role unlocks
              </div>

              <h2 className="mt-5 text-3xl font-bold leading-tight md:text-5xl">
                Why businesses hire {role.title.toLowerCase()}
              </h2>
            </div>

            <div className="space-y-6">
              {role.overview.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-base leading-8 text-[#13201e]/78"
                >
                  {paragraph}
                </p>
              ))}

              <div className="rounded-[28px] border border-black/6 bg-white p-6 shadow-[0_16px_40px_rgba(0,0,0,0.04)]">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#315545]/70">
                  This role is especially useful for
                </p>

                <div className="mt-4 grid gap-3 md:grid-cols-2">
                  {role.idealFor.map((item) => (
                    <div key={item} className="flex gap-3">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-[#197647]" />
                      <p className="text-sm leading-7 text-[#13201e]/76">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <SalaryComparison role={role} />

        <RegionSection role={role} />

        <TextSplitSection
          eyebrow={role.title}
          title={`The daily challenges teams face without strong ${role.title.toLowerCase()} support`}
          items={role.commonChallenges}
          dark
        />

        <TextSplitSection
          eyebrow={role.title}
          title={`How hiring ${role.title.toLowerCase()} helps solve those bottlenecks`}
          items={role.supportBenefits}
        />

        <TextSplitSection
          eyebrow="Why Vita Talent"
          title={`Why businesses choose Vita Talent to hire ${role.title.toLowerCase()}`}
          items={role.whyHireWithVita}
        />

        <TextSplitSection
          eyebrow="How it works"
          title={`How to hire your next ${role.title.toLowerCase()} with Vita Talent`}
          items={role.hiringSteps}
        />

        <FaqSection role={role} />

        <RelatedRoles role={role} />
      </main>

      <SiteFooterNav />
      <Footer />
    </div>
  );
}
