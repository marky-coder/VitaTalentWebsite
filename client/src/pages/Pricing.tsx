// client/src/pages/Pricing.tsx
import React from "react";
import { Button } from "@/components/ui/button";
import { Check, Crown } from "lucide-react";

type Plan = {
  id: string;
  category?: string;
  title: string;
  priceLabel: string;
  subtitle?: string;
  ctaPrimary: string;
  ctaSecondary?: string;
  features: string[];
  highlight?: boolean;
};

const PLANS: Plan[] = [
  {
    id: "free",
    category: "Individuals",
    title: "Free",
    priceLabel: "₱0",
    subtitle: "/month for one person",
    ctaPrimary: "Get started",
    features: [
      "Easy drag-and-drop editor and 1,000+ design types",
      "1.6M+ templates to get started fast",
      "4.7M+ photos, videos, graphics",
      "1 Brand Kit for colors, logos, and fonts",
      "5GB of cloud storage",
    ],
  },
  {
    id: "pro",
    category: "Individuals",
    title: "Pro",
    priceLabel: "₱300",
    subtitle: "/month for one person",
    ctaPrimary: "Start a free trial",
    features: [
      "Premium tools to create faster (resize, remove background)",
      "3.6M+ premium templates",
      "141M+ premium photos and media",
      "5 Brand Kits to manage your brand",
      "100GB of cloud storage",
    ],
  },
  {
    id: "business",
    category: "Individuals and teams",
    title: "Business",
    priceLabel: "₱400",
    subtitle: "/month per person",
    ctaPrimary: "Start a free trial",
    ctaSecondary: "Contact Sales",
    highlight: true,
    features: [
      "Collaboration, integrations and centralized assets",
      "3.6M+ templates (including premium)",
      "100 Brand Kits to scale your brand",
      "Higher AI access for more creation",
      "500GB of cloud storage",
    ],
  },
  {
    id: "enterprise",
    category: "Organizations",
    title: "Enterprise",
    priceLabel: "Let's talk",
    subtitle: "Get in touch to learn more",
    ctaPrimary: "Contact Sales",
    ctaSecondary: "Book a demo",
    features: [
      "Enterprise-level security and controls",
      "SSO and SCIM provisioning",
      "Custom integrations and advanced apps",
      "1000 Brand Kits with tiered approvals",
      "Priority support and dedicated success manager",
    ],
  },
];

function FeatureItem({ text }: { text: string }) {
  return (
    <li className="flex gap-3 items-start">
      <span className="mt-0.5 text-primary">
        <Check className="w-4 h-4" />
      </span>
      <span className="text-sm text-slate-600 leading-relaxed">{text}</span>
    </li>
  );
}

export default function Pricing() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-purple-100 to-blue-50">
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-extrabold tracking-tight text-slate-900">
            Plans and pricing
          </h1>

          {/* category pill */}
          <div className="inline-flex items-center rounded-full bg-white shadow-md mt-6 p-1.5">
            <div className="inline-flex items-center rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-5 py-2.5 mr-1 font-medium">
              <span className="inline-block mr-2">👥</span> Individuals and business
            </div>
            <div className="px-5 py-2.5 text-slate-700">🎓 Education</div>
          </div>
        </div>

        {/* toggle + save badge */}
        <div className="flex items-center justify-center mb-10 gap-4">
          <div className="flex items-center gap-3 text-sm text-slate-700">
            <span>Monthly</span>
            <div className="relative">
              <div className="w-12 h-6 rounded-full bg-slate-200" />
              <div className="absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white border shadow-sm" />
            </div>
            <span>Yearly</span>
          </div>

          <div className="rounded-full bg-slate-800/10 px-3 py-1 text-xs text-slate-700">
            Save from 16%
          </div>
        </div>

        {/* cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PLANS.map((p) => {
            const isHighlighted = !!p.highlight;
            return (
              <div
                key={p.id}
                className={`relative bg-white rounded-2xl shadow-sm overflow-hidden flex flex-col justify-between border ${
                  isHighlighted ? "ring-2 ring-indigo-300/60" : "border-transparent"
                }`}
              >
                {/* header */}
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-slate-500">{p.category}</div>
                    {/* crown or badge */}
                    <div className="text-yellow-500">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                        <path d="M12 6l2 3h3l-2 2 1 5-5-3-5 3 1-5-2-2h3l2-3z" fill="#F59E0B" />
                      </svg>
                    </div>
                  </div>

                  <div className="mt-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-semibold text-slate-900">{p.title}</h3>
                      {isHighlighted && (
                        <div className="ml-2 inline-block bg-indigo-600 text-white text-xs px-2 py-1 rounded-full">
                          Intro price
                        </div>
                      )}
                    </div>

                    <div className="mt-4 flex items-baseline gap-4">
                      <div className="text-3xl font-bold text-slate-900">{p.priceLabel}</div>
                      {p.subtitle && <div className="text-sm text-slate-500">{p.subtitle}</div>}
                    </div>

                    <div className="mt-6 flex gap-3">
                      <Button size="lg" className="flex-1">
                        {p.ctaPrimary}
                      </Button>

                      {p.ctaSecondary && (
                        <Button size="lg" variant="outline" className="flex-1">
                          {p.ctaSecondary}
                        </Button>
                      )}
                    </div>
                  </div>
                </div>

                {/* features */}
                <div className="p-6 border-t bg-slate-50">
                  <ul className="space-y-3">
                    {p.features.map((f, i) => (
                      <FeatureItem key={i} text={f} />
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* footer note */}
        <div className="text-center mt-10 text-sm text-slate-500">
          <p>
            All prices are indicative. For Enterprise pricing and custom quotes, please contact our sales team.
          </p>
        </div>
      </div>
    </div>
  );
}
