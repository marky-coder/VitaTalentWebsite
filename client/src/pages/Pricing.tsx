// client/src/pages/Pricing.tsx
import React from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "wouter";
import Footer from "@/components/Footer";

type Plan = {
  id: string;
  category?: string;
  title: string;
  priceLabel: string;
  subtitle?: string;
  paymentNote?: string;
  features: string[];
  highlight?: boolean;
};

const PLANS: Plan[] = [
  {
    id: "1",
    category: "Individuals",
    title: "1 Hiring Pack",
    priceLabel: "$1,500.00",
    paymentNote:
      "Payment separated in 2: First half is paid before hiring begins. Once you hired someone, you pay the last half.",
    features: [
      "Single hire included",
      "Basic screening and shortlist",
      "1 month of candidate follow-up",
      "Email support",
    ],
  },
  {
    id: "2",
    category: "Individuals",
    title: "2 Hiring Pack",
    priceLabel: "$2,500.00",
    paymentNote:
      "Payment separated in 2: First half is paid before hiring begins. Once you hired someone, you pay the last half.",
    features: [
      "Two hires included",
      "Priority shortlisting",
      "2 months of candidate follow-up",
      "Email & chat support",
    ],
  },
  {
    id: "3",
    category: "Individuals",
    title: "3 Hiring Pack",
    priceLabel: "$3,500.00",
    paymentNote:
      "Payment separated in 2: First half is paid before hiring begins. Once you hired someone, you pay the last half.",
    features: [
      "Three hires included",
      "Dedicated sourcer",
      "3 months candidate follow-up",
      "Phone & email support",
    ],
    highlight: true,
  },
  {
    id: "5",
    category: "Teams",
    title: "5 Hiring Pack",
    priceLabel: "$5,000.00",
    paymentNote:
      "Payment separated in 2: First half is paid before hiring begins. Once you hired someone, you pay the last half.",
    features: [
      "Five hires included",
      "Team onboarding session",
      "4 months candidate follow-up",
      "Priority support & account review",
    ],
  },
  {
    id: "12",
    category: "Organizations",
    title: "One Year Hiring Pack (12 Hires)",
    priceLabel: "$12,000.00",
    paymentNote:
      "Payment separated in 2: First half is paid before hiring begins. Once you hired someone, you pay the last half.",
    features: [
      "12 hires over 12 months",
      "Dedicated account manager",
      "Quarterly strategy reviews",
      "Premium support & reporting",
    ],
  },
];

function Feature({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-0.5 text-green-600">
        <Check className="w-4 h-4" />
      </span>
      <span className="text-sm text-slate-600 leading-relaxed">{text}</span>
    </li>
  );
}

export default function Pricing(): JSX.Element {
  const firstRow = PLANS.slice(0, 3);
  const secondRow = PLANS.slice(3);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-purple-100 to-blue-50">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-extrabold tracking-tight text-slate-900">
            Plans and pricing
          </h1>
          <p className="text-sm text-slate-600 mt-3">
            Simple, transparent hiring packs — pick a plan and start hiring.
          </p>
        </div>

        {/* top row: 3-up on large screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {firstRow.map((p) => {
            const highlighted = !!p.highlight;
            return (
              <div
                key={p.id}
                className={
                  "flex flex-col rounded-2xl overflow-hidden bg-white border " +
                  (highlighted
                    ? "ring-2 ring-indigo-300/60 shadow-xl border-transparent"
                    : "border-slate-200 shadow-sm")
                }
              >
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-slate-500">{p.category}</div>
                    <div className="text-yellow-500" aria-hidden>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <path d="M12 6l2 3h3l-2 2 1 5-5-3-5 3 1-5-2-2h3l2-3z" fill="#F59E0B" />
                      </svg>
                    </div>
                  </div>

                  <div className="mt-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-semibold text-slate-900">{p.title}</h3>
                      {highlighted && (
                        <div className="ml-2 inline-block bg-indigo-600 text-white text-xs px-2 py-1 rounded-full">
                          Intro price
                        </div>
                      )}
                    </div>

                    <div className="mt-4">
                      <div className="flex items-baseline gap-3">
                        <div className="text-3xl md:text-4xl font-bold text-slate-900">
                          {p.priceLabel}
                        </div>
                        {p.subtitle && <div className="text-sm text-slate-500">{p.subtitle}</div>}
                      </div>

                      {p.paymentNote && (
                        <div className="mt-3 text-sm text-slate-500">
                          {p.paymentNote}
                        </div>
                      )}
                    </div>

                    <div className="mt-6">
                      <Button size="lg" className="w-full bg-slate-900 text-white" asChild>
                        <Link href={`/?openHire=true&pack=${encodeURIComponent(p.id)}`}>
                          Start Hiring
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="mt-auto p-6 border-t bg-slate-50">
                  <ul className="space-y-3">
                    {p.features.map((f, i) => (
                      <Feature key={i} text={f} />
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* bottom row: center two cards */}
        <div className="mt-6 flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl">
            {secondRow.map((p) => {
              const highlighted = !!p.highlight;
              return (
                <div
                  key={p.id}
                  className={
                    "flex flex-col rounded-2xl overflow-hidden bg-white border " +
                    (highlighted
                      ? "ring-2 ring-indigo-300/60 shadow-xl border-transparent"
                      : "border-slate-200 shadow-sm")
                  }
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="text-xs text-slate-500">{p.category}</div>
                      <div className="text-yellow-500" aria-hidden>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                          <path d="M12 6l2 3h3l-2 2 1 5-5-3-5 3 1-5-2-2h3l2-3z" fill="#F59E0B" />
                        </svg>
                      </div>
                    </div>

                    <div className="mt-6">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-semibold text-slate-900">{p.title}</h3>
                        {highlighted && (
                          <div className="ml-2 inline-block bg-indigo-600 text-white text-xs px-2 py-1 rounded-full">
                            Intro price
                          </div>
                        )}
                      </div>

                      <div className="mt-4">
                        <div className="flex items-baseline gap-3">
                          <div className="text-3xl md:text-4xl font-bold text-slate-900">
                            {p.priceLabel}
                          </div>
                          {p.subtitle && <div className="text-sm text-slate-500">{p.subtitle}</div>}
                        </div>

                        {p.paymentNote && (
                          <div className="mt-3 text-sm text-slate-500">
                            {p.paymentNote}
                          </div>
                        )}
                      </div>

                      <div className="mt-6">
                        <Button size="lg" className="w-full bg-slate-900 text-white" asChild>
                          <Link href={`/?openHire=true&pack=${encodeURIComponent(p.id)}`}>
                            Start Hiring
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="mt-auto p-6 border-t bg-slate-50">
                    <ul className="space-y-3">
                      {p.features.map((f, i) => (
                        <Feature key={i} text={f} />
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center mt-10 text-sm text-slate-500">
          All prices are indicative. For Enterprise pricing and custom quotes, please contact our sales team.
        </div>
      </div>

      {/* shared Footer from the Home page */}
      <Footer />
    </div>
  );
}
