import SiteHeader from "@/components/SiteHeader";
import SiteFooterNav from "@/components/SiteFooterNav";
import Footer from "@/components/Footer";
import {
  PhoneCall,
  CalendarCheck,
  Handshake,
  TrendingUp,
  ClipboardList,
  Headset,
  Briefcase,
  Megaphone,
  Palette,
  Video,
  Bot,
  ArrowRight,
  BadgeDollarSign,
} from "lucide-react";

type Role = {
  title: string;
  salary: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  blurb: string;
};

const roles: Role[] = [
  {
    title: "Cold Callers",
    salary: "$800 - $1200",
    icon: PhoneCall,
    blurb:
      "Skilled outbound callers who keep pipelines moving, qualify leads, and start more sales conversations every week.",
  },
  {
    title: "Appointment Setters",
    salary: "$1000 - $1300",
    icon: CalendarCheck,
    blurb:
      "Organized communicators who book qualified meetings, manage follow-ups, and help your closers stay focused on revenue.",
  },
  {
    title: "Acquisition Managers",
    salary: "$1300 - $2000",
    icon: Handshake,
    blurb:
      "Experienced deal-focused talent who can negotiate, nurture seller conversations, and move opportunities toward contract.",
  },
  {
    title: "Disposition Managers",
    salary: "$1400 - $2000",
    icon: TrendingUp,
    blurb:
      "Operators who manage buyers, present deals clearly, and help maximize assignment outcomes with strong relationship handling.",
  },
  {
    title: "Transaction Coordinators",
    salary: "$1200 - $1500",
    icon: ClipboardList,
    blurb:
      "Detail-oriented support professionals who keep files organized, timelines on track, and all moving parts aligned.",
  },
  {
    title: "Lead Managers",
    salary: "$1200 - $1500",
    icon: Headset,
    blurb:
      "Reliable team members who handle inbound and outbound lead communication, qualification, and pipeline organization.",
  },
  {
    title: "Executive Assistant",
    salary: "$1000 - $1500",
    icon: Briefcase,
    blurb:
      "High-trust assistants who can protect your time, manage priorities, and support day-to-day operations across the business.",
  },
  {
    title: "Media Buyers",
    salary: "$1500 - $3000",
    icon: Megaphone,
    blurb:
      "Performance-minded marketers who help run campaigns, optimize spend, and support scalable lead generation systems.",
  },
  {
    title: "Graphic Designers",
    salary: "$1200 - $2000",
    icon: Palette,
    blurb:
      "Creative professionals who produce polished visuals for ads, social content, presentations, and brand assets.",
  },
  {
    title: "Video Editors",
    salary: "$1000 - $1700",
    icon: Video,
    blurb:
      "Editors who turn raw footage into clean, compelling videos for social, paid ads, internal training, and branded content.",
  },
  {
    title: "Automation Experts",
    salary: "$1200 - $1700",
    icon: Bot,
    blurb:
      "Systems-focused talent who build workflows, reduce manual work, and improve operational efficiency through automation.",
  },
];

export default function Roles() {
  return (
    <div className="min-h-screen bg-[#DEE9E3] text-[#13201e]">
      <SiteHeader />

      <main>
        <section className="border-b border-black/5 bg-[#DEE9E3]">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:py-20 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-24">
            <div>
              <div className="mb-4 inline-flex items-center rounded-full bg-[#C6D8CE] px-4 py-2 text-sm font-semibold text-[#315545]">
                Roles We Source
              </div>

              <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
                Pre-vetted talent for the roles that actually move your business
                forward
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#13201e]/75">
                From sales and operations to creative and automation, we help
                companies hire global talent across the functions that matter
                most. Here are some of the roles we regularly source for our
                clients.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://vitatalent.co/hire"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-xl bg-[#197647] px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                >
                  Hire for These Roles
                </a>

                <a
                  href="/?scrollTo=process"
                  className="inline-flex items-center justify-center rounded-xl border border-[#315545]/15 bg-[#F3F7F4] px-6 py-3 text-sm font-semibold text-[#315545] transition-colors hover:bg-[#C6D8CE]"
                >
                  See Our Process
                </a>
              </div>
            </div>

            <div className="rounded-[32px] border border-black/5 bg-[#F3F7F4] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.06)] md:p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#C6D8CE]">
                  <BadgeDollarSign
                    className="h-6 w-6 text-[#315545]"
                    strokeWidth={2}
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#315545]/70">
                    Compensation Snapshot
                  </p>
                  <h2 className="text-xl font-bold">
                    Competitive global hiring ranges
                  </h2>
                </div>
              </div>

              <div className="mt-8 space-y-4">
                <div className="rounded-2xl bg-[#DEE9E3] p-4">
                  <p className="text-sm font-semibold text-[#315545]">
                    Entry support roles
                  </p>
                  <p className="mt-1 text-base text-[#13201e]/80">
                    Typically start around{" "}
                    <span className="font-semibold">$800</span> to{" "}
                    <span className="font-semibold">$1500</span>
                  </p>
                </div>

                <div className="rounded-2xl bg-[#DEE9E3] p-4">
                  <p className="text-sm font-semibold text-[#315545]">
                    Sales and operations specialists
                  </p>
                  <p className="mt-1 text-base text-[#13201e]/80">
                    Often fall between{" "}
                    <span className="font-semibold">$1200</span> and{" "}
                    <span className="font-semibold">$2000</span>
                  </p>
                </div>

                <div className="rounded-2xl bg-[#DEE9E3] p-4">
                  <p className="text-sm font-semibold text-[#315545]">
                    Advanced performance and technical roles
                  </p>
                  <p className="mt-1 text-base text-[#13201e]/80">
                    Can range up to <span className="font-semibold">$3000</span>{" "}
                    depending on skill depth and scope
                  </p>
                </div>
              </div>

              <p className="mt-6 text-sm leading-7 text-[#13201e]/65">
                Final compensation depends on experience, specialization,
                responsibilities, and the level of support you need.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#DEE9E3] py-4 md:py-6">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {roles.map((role, index) => {
                const Icon = role.icon;

                return (
                  <article
                    key={role.title}
                    className={`group flex min-h-[280px] flex-col rounded-[28px] border border-black/5 bg-[#C6D8CE] p-7 shadow-[0_18px_50px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(0,0,0,0.08)] ${
                      index === roles.length - 1 ? "xl:col-start-2" : ""
                    }`}
                  >
                    <div className="mb-8 flex items-start justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#315545] shadow-sm">
                        <span className="text-lg font-bold">{index + 1}</span>
                      </div>

                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/35">
                        <Icon
                          className="h-7 w-7 text-[#13201e]/85"
                          strokeWidth={1.8}
                        />
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col">
                      <h3 className="text-2xl font-bold leading-tight text-[#13201e]">
                        {role.title}
                      </h3>

                      <p className="mt-3 inline-flex w-fit rounded-full bg-[#F3F7F4] px-3 py-1 text-sm font-semibold text-[#315545]">
                        {role.salary}
                      </p>

                      <p className="mt-5 text-base leading-8 text-[#13201e]/80">
                        {role.blurb}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-[#DEE9E3] py-16 md:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-[32px] border border-black/5 bg-[#F3F7F4] p-8 text-[#13201e] shadow-[0_20px_60px_rgba(0,0,0,0.06)] md:p-10">
              <h2 className="text-3xl font-bold leading-tight md:text-4xl">
                Need a role not listed here?
              </h2>

              <p className="mt-4 max-w-3xl text-lg leading-8 text-[#13201e]/75">
                These are some of the most common roles we source, but they are
                not the only ones. If you need support in sales, operations,
                marketing, admin, or creative work, we can help scope the role
                and source the right talent for it.
              </p>

              <div className="mt-8">
                <a
                  href="https://vitatalent.co/hire"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#197647] px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                >
                  Start Hiring
                  <ArrowRight className="h-4 w-4" strokeWidth={2.25} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooterNav />
      <Footer />
    </div>
  );
}
