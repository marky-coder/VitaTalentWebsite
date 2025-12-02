// client/src/pages/Pricing.tsx
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const PACKS = [
  { id: "1", title: "1 Hiring Pack", price: 750 },
  { id: "2", title: "2 Hiring Pack", price: 1250 },
  { id: "3", title: "3 Hiring Pack", price: 1750 },
  { id: "5", title: "5 Hiring Pack", price: 2500 },
  { id: "12", title: "One Year Hiring Pack (12 Hires)", price: 6000 },
];

function formatPrice(n: number) {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD" });
}

export default function Pricing() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-purple-100 to-blue-50">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">Plans and pricing</h1>
          <p className="text-sm text-slate-600 mt-3">
            Simple, transparent hiring packs — pick a pack and start hiring.
          </p>
        </div>

        {/* NOTE: Top category pill removed as requested */}

        <div className="mt-8 bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="divide-y">
            {PACKS.map((pack, idx) => (
              <label
                key={pack.id}
                className={`flex items-center justify-between gap-4 px-5 py-4 hover:bg-slate-50 cursor-pointer ${
                  idx % 2 === 1 ? "bg-slate-50" : "bg-white"
                }`}
              >
                <div className="flex items-center gap-4 min-w-0">
                  <input
                    type="checkbox"
                    aria-label={`Select ${pack.title}`}
                    className="h-4 w-4 text-indigo-600 rounded"
                  />

                  <div className="w-10 h-10 rounded-md bg-blue-50 flex items-center justify-center shrink-0">
                    {/* small image/icon placeholder */}
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <rect width="24" height="24" rx="5" fill="#EEF2FF" />
                      <path
                        d="M7 14c1.5-1 3-2 5-2s3.5 1 5 2v2H7v-2zM12 8a3 3 0 110 6 3 3 0 010-6z"
                        fill="#4F46E5"
                        opacity="0.95"
                      />
                    </svg>
                  </div>

                  <div className="min-w-0">
                    <div className="text-sm font-semibold text-slate-900 truncate">{pack.title}</div>
                    <div className="text-xs text-slate-500 mt-1">
                      {formatPrice(pack.price)}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Button size="md" className="bg-slate-900 text-white px-5 py-2" asChild>
                    {/* uses wouter Link to navigate to home with query param that opens the hire dialog */}
                    <Link href="/?openHire=true">Start Hiring</Link>
                  </Button>
                </div>
              </label>
            ))}
          </div>
        </div>

        <div className="text-center mt-8 text-sm text-slate-500">
          All prices are indicative. For custom quotes please contact our sales team.
        </div>
      </div>
    </div>
  );
}
