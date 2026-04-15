import { useMemo, useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooterNav from "@/components/SiteFooterNav";
import Footer from "@/components/Footer";
import {
  ArrowRight,
  Search,
  SlidersHorizontal,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import { roles, roleCategories, formatMoney } from "@/data/roles";

export default function Roles() {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [sortBy, setSortBy] = useState<"featured" | "salary-low" | "salary-high" | "name">(
    "featured"
  );

  const filteredRoles = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    const base = roles.filter((role) => {
      const matchesCategory =
        selectedCategory === "All" || role.category === selectedCategory;

      const haystack = [
        role.title,
        role.category,
        role.shortDescription,
        role.cardSummary,
      ]
        .join(" ")
        .toLowerCase();

      const matchesQuery =
        !normalizedQuery || haystack.includes(normalizedQuery);

      return matchesCategory && matchesQuery;
    });

    const sorted = [...base];

    if (sortBy === "name") {
      sorted.sort((a, b) => a.title.localeCompare(b.title));
    }

    if (sortBy === "salary-low") {
      sorted.sort((a, b) => {
        const aMin = Number(a.salaryRange.replace(/[^0-9-]/g, "").split("-")[0]);
        const bMin = Number(b.salaryRange.replace(/[^0-9-]/g, "").split("-")[0]);
        return aMin - bMin;
      });
    }

    if (sortBy === "salary-high") {
      sorted.sort((a, b) => {
        const aMax = Number(a.salaryRange.replace(/[^0-9-]/g, "").split("-")[1]);
        const bMax = Number(b.salaryRange.replace(/[^0-9-]/g, "").split("-")[1]);
        return bMax - aMax;
      });
    }

    return sorted;
  }, [query, selectedCategory, sortBy]);

  return (
    <div className="min-h-screen bg-[#F3F7F4] text-[#13201e]">
      <SiteHeader />

      <main>
        <section className="bg-[#315545] text-white">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mb-5 inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white/90">
                Roles We Source
              </div>

              <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl">
                Hire global talent across the roles that drive growth, delivery,
                and daily execution
              </h1>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/80">
                We help companies hire high-quality remote talent across sales,
                operations, admin, marketing, creative, and technical support.
                Every role below is one we actively source for businesses that
                want reliable capacity without bloated overhead.
              </p>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <a
                  href="https://vitatalent.co/hire"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-xl bg-[#197647] px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                >
                  Start Hiring
                </a>

                <a
                  href="#roles-grid"
                  className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/15"
                >
                  Explore Roles
                </a>
              </div>

              <div className="mt-12 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/8 p-5">
                  <p className="text-3xl font-bold">11</p>
                  <p className="mt-1 text-sm text-white/75">Core roles ready to source</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/8 p-5">
                  <p className="text-3xl font-bold">6</p>
                  <p className="mt-1 text-sm text-white/75">Role categories covered</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/8 p-5">
                  <p className="text-3xl font-bold">Up to 80%</p>
                  <p className="mt-1 text-sm text-white/75">Potential payroll savings</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="roles-grid"
          className="bg-[#F3F7F4] py-16 md:py-20"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[300px_minmax(0,1fr)]">
              <aside className="h-fit rounded-[28px] border border-black/5 bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.05)]">
                <div className="flex items-center gap-2 text-sm font-semibold text-[#315545]">
                  <SlidersHorizontal className="h-4 w-4" />
                  Filter Roles
                </div>

                <div className="mt-6">
                  <label
                    htmlFor="role-search"
                    className="mb-2 block text-sm font-semibold text-[#13201e]"
                  >
                    Search
                  </label>
                  <div className="flex items-center gap-2 rounded-xl border border-black/8 bg-[#F3F7F4] px-3">
                    <Search className="h-4 w-4 text-[#315545]/65" />
                    <input
                      id="role-search"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder="Search by role or keyword"
                      className="h-12 w-full bg-transparent text-sm outline-none placeholder:text-[#13201e]/40"
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <p className="mb-3 text-sm font-semibold text-[#13201e]">
                    Category
                  </p>

                  <div className="flex flex-wrap gap-2">
                    <button
                      type="button"
                      onClick={() => setSelectedCategory("All")}
                      className={`rounded-full px-3 py-2 text-sm font-medium transition-colors ${
                        selectedCategory === "All"
                          ? "bg-[#315545] text-white"
                          : "bg-[#DEE9E3] text-[#315545] hover:bg-[#C6D8CE]"
                      }`}
                    >
                      All
                    </button>

                    {roleCategories.map((category) => (
                      <button
                        key={category}
                        type="button"
                        onClick={() => setSelectedCategory(category)}
                        className={`rounded-full px-3 py-2 text-sm font-medium transition-colors ${
                          selectedCategory === category
                            ? "bg-[#315545] text-white"
                            : "bg-[#DEE9E3] text-[#315545] hover:bg-[#C6D8CE]"
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-6 rounded-2xl bg-[#DEE9E3] p-4">
                  <div className="flex items-start gap-3">
                    <div className="rounded-xl bg-white p-2">
                      <Sparkles className="h-4 w-4 text-[#197647]" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#13201e]">
                        Need a role not listed?
                      </p>
                      <p className="mt-1 text-sm leading-6 text-[#13201e]/70">
                        We can still scope the position and source talent based
                        on your exact requirements.
                      </p>
                      <a
                        href="https://vitatalent.co/hire"
                        target="_blank"
                        rel="noreferrer"
                        className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[#197647]"
                      >
                        Talk to us
                        <ChevronRight className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </aside>

              <div>
                <div className="mb-5 flex flex-col gap-4 rounded-[24px] border border-black/5 bg-white p-4 shadow-[0_16px_40px_rgba(0,0,0,0.04)] sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm font-semibold text-[#315545]">
                      Showing {filteredRoles.length} of {roles.length} roles
                    </p>
                    <p className="mt-1 text-sm text-[#13201e]/65">
                      Click any role to open its full hiring page.
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <label
                      htmlFor="sort-by"
                      className="text-sm font-semibold text-[#13201e]"
                    >
                      Sort by
                    </label>
                    <select
                      id="sort-by"
                      value={sortBy}
                      onChange={(e) =>
                        setSortBy(
                          e.target.value as
                            | "featured"
                            | "salary-low"
                            | "salary-high"
                            | "name"
                        )
                      }
                      className="h-11 rounded-xl border border-black/8 bg-[#F3F7F4] px-3 text-sm outline-none"
                    >
                      <option value="featured">Featured</option>
                      <option value="name">Name</option>
                      <option value="salary-low">Salary: Low to High</option>
                      <option value="salary-high">Salary: High to Low</option>
                    </select>
                  </div>
                </div>

                <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                  {filteredRoles.map((role) => {
                    const Icon = role.icon;

                    return (
                      <a
                        key={role.slug}
                        href={`/roles/${role.slug}`}
                        className="group flex min-h-[370px] flex-col overflow-hidden rounded-[28px] border border-black/5 bg-white shadow-[0_18px_50px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(0,0,0,0.09)]"
                      >
                        <div className="relative overflow-hidden border-b border-black/5 bg-gradient-to-br from-[#315545] via-[#197647] to-[#315545] p-6 text-white">
                          <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-white/10 blur-2xl" />
                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <div className="mb-3 inline-flex rounded-full bg-white/12 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-white/85">
                                {role.category}
                              </div>
                              <h2 className="text-2xl font-bold leading-tight">
                                {role.title}
                              </h2>
                            </div>

                            <div className="rounded-2xl bg-white/12 p-3">
                              <Icon className="h-6 w-6" strokeWidth={1.9} />
                            </div>
                          </div>

                          <div className="mt-8 flex items-center justify-between">
                            <div className="rounded-full bg-white px-3 py-1 text-sm font-semibold text-[#315545]">
                              {role.salaryRange}
                            </div>
                            <div className="text-sm font-semibold text-white/85">
                              Click to view
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-1 flex-col p-6">
                          <p className="text-base leading-7 text-[#13201e]/78">
                            {role.cardSummary}
                          </p>

                          <div className="mt-6 rounded-2xl bg-[#F3F7F4] p-4">
                            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#315545]/70">
                              Typical global range
                            </p>
                            <p className="mt-2 text-lg font-bold text-[#13201e]">
                              {role.salaryRange}
                            </p>
                            <p className="mt-1 text-sm text-[#13201e]/65">
                              Compared with U.S. ranges that often start around{" "}
                              {formatMoney(role.usSalaryRange[0])}
                            </p>
                          </div>

                          <div className="mt-auto pt-6">
                            <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#197647]">
                              Open role page
                              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </span>
                          </div>
                        </div>
                      </a>
                    );
                  })}
                </div>

                {filteredRoles.length === 0 ? (
                  <div className="mt-5 rounded-[24px] border border-dashed border-black/10 bg-white p-10 text-center">
                    <p className="text-lg font-semibold text-[#13201e]">
                      No roles matched your search.
                    </p>
                    <p className="mt-2 text-sm text-[#13201e]/65">
                      Try a different keyword or clear the category filter.
                    </p>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#DEE9E3] py-16 md:py-20">
          <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
            <div className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#315545]">
              Built for scale
            </div>

            <h2 className="mt-5 text-3xl font-bold leading-tight md:text-5xl">
              Lower your hiring costs without lowering your standards
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-[#13201e]/72">
              The roles above are designed to remove bottlenecks, increase output,
              and help your team focus on the work that actually drives growth.
              Whether you need one hire or a whole support layer, we can help you
              build it intelligently.
            </p>

            <div className="mt-10">
              <a
                href="https://vitatalent.co/hire"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-[#197647] px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              >
                Start Hiring
              </a>
            </div>

            <p className="mt-3 text-xs text-[#13201e]/55">
              Zero risk: you pay nothing if you do not hire.
            </p>
          </div>
        </section>
      </main>

      <SiteFooterNav />
      <Footer />
    </div>
  );
}
