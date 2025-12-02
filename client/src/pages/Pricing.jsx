// src/pages/Pricing.jsx
import React from "react";
import "./pricing.css";

const PACKS = [
  { id: "1", title: "1 Hiring Pack", price: 750 },
  { id: "2", title: "2 Hiring Pack", price: 1250 },
  { id: "3", title: "3 Hiring Pack", price: 1750 },
  { id: "5", title: "5 Hiring Pack", price: 2500 },
  { id: "12", title: "One Year Hiring Pack (12 Hires)", price: 6000 },
];

function formatPrice(n) {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD" });
}

export default function Pricing() {
  return (
    <div className="vt-pricing-page">
      <div className="vt-pricing-hero">
        <h1>Pricing</h1>
        <p className="muted">
          Simple, transparent hiring packs — choose a plan that suits your
          hiring cadence.
        </p>
      </div>

      <div className="vt-pricing-list">
        {PACKS.map((pack) => (
          <label className="vt-pricing-row" key={pack.id}>
            <div className="vt-row-left">
              <input
                type="checkbox"
                className="vt-row-checkbox"
                aria-label={`Select ${pack.title}`}
              />
              <div className="vt-avatar">
                {/* small image/placeholer like your screenshot */}
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <rect width="24" height="24" rx="6" fill="#E6EEF9" />
                  <path
                    d="M8 11a4 4 0 118 0 4 4 0 01-8 0zM3 20c1.5-4 9-4 12 0"
                    stroke="#6B8FD6"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            <div className="vt-row-main">
              <div className="vt-row-title">{pack.title}</div>
              <div className="vt-row-price">{formatPrice(pack.price)}</div>
            </div>

            <div className="vt-row-actions">
              <button className="vt-btn vt-btn-outline">Details</button>
              <button className="vt-btn vt-btn-primary">Buy</button>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
}
