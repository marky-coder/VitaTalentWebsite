// client/src/pages/Hire.tsx
import { useEffect, useState } from "react";

/**
 * Hire page — embeds the same GHL survey your modal used (WQGFK4J2ChAmAACrEQPC).
 * Matches Home page spacing, fonts and brand color (#4f46e5).
 */
export default function Hire() {
  const [pack, setPack] = useState<string | undefined>(undefined);
  const HIRE_SURVEY_ID = "WQGFK4J2ChAmAACrEQPC";
  const BRAND_PURPLE = "#4f46e5";

  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const p = params.get("pack") ?? undefined;
      if (p) setPack(p);
    } catch (e) {
      // ignore parsing errors
    }

    // Ensure the GHL embed helper is loaded (same script InquiryDialog uses)
    if (!document.querySelector('script[src="https://link.msgsndr.com/js/form_embed.js"]')) {
      const s = document.createElement("script");
      s.src = "https://link.msgsndr.com/js/form_embed.js";
      s.defer = true;
      s.setAttribute("data-ghl-loaded", "1");
      document.body.appendChild(s);
    }
  }, []);

  // Append pack to iframe src if present (useful if you want the pack passed to the widget)
  const iframeSrc = pack
    ? `https://api.leadconnectorhq.com/widget/survey/${HIRE_SURVEY_ID}?pack=${encodeURIComponent(pack)}`
    : `https://api.leadconnectorhq.com/widget/survey/${HIRE_SURVEY_ID}`;

  return (
    <div style={{ fontFamily: "Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif" }} className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow">
        <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            {/* Small logo image so pages have a real logo like the rest of the site */}
            <img src="/favicon.png" alt="Vita Talent Logo" width={40} height={40} style={{ display: "block" }} />
            <div style={{ fontWeight: 800, fontSize: 20 }}>
              VITA<span style={{ color: BRAND_PURPLE }}>TALENT</span>
            </div>
          </div>

          <a href="/" style={{ color: BRAND_PURPLE, textDecoration: "none", fontSize: 14 }}>
            ← Back home
          </a>
        </header>

        <div style={{ marginBottom: 20 }}>
          <h1 style={{ fontFamily: "Poppins, sans-serif", fontSize: 28, margin: 0, fontWeight: 700 }}>
            Hire global talent with VitaTalent
          </h1>
          <p style={{ color: "#475569", marginTop: 8 }}>
            Tell us about the role and team. We’ll follow up with a short Loom or email outlining how we’d approach it.
          </p>
        </div>

        {pack && (
          <div style={{ marginBottom: 16, fontSize: 14, color: "#374151" }}>
            <strong>Selected pack:</strong> {pack}
          </div>
        )}

        {/* Center the embedded survey in a modal-like box to match the popup */}
        <div style={{ display: "flex", justifyContent: "center", padding: "28px 0" }}>
          <div
            style={{
              width: 560,
              borderRadius: 12,
              background: "#fff",
              boxShadow: "0 30px 80px rgba(2,6,23,0.6)",
              overflow: "hidden",
            }}
          >
            <iframe
              id={HIRE_SURVEY_ID}
              title="Hire form"
              src={iframeSrc}
              style={{ width: "100%", height: "760px", border: "none", display: "block" }}
              scrolling="yes"
            />
          </div>
        </div>

        <div style={{ fontSize: 12, color: "#6b7280", marginTop: 6 }}>
          This page embeds the same GHL form used by the popup. If you want a smaller width or a different
          header treatment, tell me and I’ll tweak it.
        </div>
      </div>
    </div>
  );
}
