// client/src/pages/Pricing.tsx
import React from "react";

const PACKS = [
  { id: "1", title: "1 Hiring Pack", price: 750 },
  { id: "2", title: "2 Hiring Pack", price: 1250 },
  { id: "3", title: "3 Hiring Pack", price: 1750 },
  { id: "5", title: "5 Hiring Pack", price: 2500 },
  { id: "12", title: "One Year Hiring Pack (12 Hires)", price: 6000 },
];

function fmt(n: number) {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD" });
}

export default function Pricing() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <div className="mb-6">
        <h1 className="text-3xl font-semibold text-slate-900">Pricing</h1>
        <p className="text-sm text-slate-500 mt-1">
          Simple, transparent hiring packs — choose a plan that suits your hiring cadence.
        </p>
      </div>

      <div className="space-y-3">
        {PACKS.map((p) => (
          <label
            key={p.id}
            className="flex items-center justify-between bg-white rounded-lg p-4 shadow-sm hover:border-blue-100 border border-transparent cursor-pointer"
          >
            <div className="flex items-center gap-4 min-w-0">
              <input type="checkbox" aria-label={`Select ${p.title}`} className="h-4 w-4 accent-indigo-600" />

              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-md bg-blue-50 flex items-center justify-center shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <rect width="24" height="24" rx="5" fill="#EEF2FF" />
                    <path
                      d="M8 11a4 4 0 118 0 4 4 0 01-8 0zM3 20c1.5-4 9-4 12 0"
                      stroke="#4F46E5"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <div className="min-w-0">
                  <div className="text-sm font-semibold text-slate-900 truncate">{p.title}</div>
                  <div className="text-xs text-slate-500 mt-1">{fmt(p.price)}</div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button type="button" className="px-3 py-1 rounded-md text-sm border border-slate-200 text-slate-700 bg-transparent">
                Details
              </button>
              <button type="button" className="px-3 py-1 rounded-md text-sm bg-slate-900 text-white hover:bg-slate-800">
                Buy
              </button>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
}
