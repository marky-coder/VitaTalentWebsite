// client/src/pages/Join.tsx
import { useEffect } from "react";

/**
 * Join page — embeds the same candidate GHL survey used by the modal (pzE6wXP4PmwKwZqN6iRw).
 * Matches the Home page visual language (logo, Poppins headings, Inter body, brand purple).
 */
export default function Join() {
  const CANDIDATE_SURVEY_ID = "pzE6wXP4PmwKwZqN6iRw";
  const BRAND_PURPLE = "#4f46e5";

  useEffect(() => {
    // Ensure the GHL embed helper script is loaded
    if (!document.querySelector('script[src="https://link.msgsndr.com/js/form_embed.js"]')) {
      const s = document.createElement("script");
      s.src = "https://link.msgsndr.com/js/form_embed.js";
      s.defer = true;
      s.setAttribute("data-ghl-loaded", "1");
      document.body.appendChild(s);
    }
  }, []);

  const iframeSrc = `https://api.leadconnectorhq.com/widget/survey/${CANDIDATE_SURVEY_ID}`;

  return (
    <div style={{ fontFamily: "Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif" }} className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow">
        <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
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
            Join VitaTalent as a candidate
          </h1>
          <p style={{ color: "#475569", marginTop: 8 }}>
            Share a few details and we’ll keep you in mind when there’s a strong match with roles we’re working on.
          </p>
        </div>

        {/* Candidate survey: full width in the card but visually consistent */}
        <div
          style={{
            width: "100%",
            height: 760,
            borderRadius: 6,
            overflow: "hidden",
            boxShadow: "0 2px 10px rgba(2,6,23,0.05)",
          }}
        >
          <iframe
            id={CANDIDATE_SURVEY_ID}
            title="Join form"
            src={iframeSrc}
            style={{ width: "100%", height: "100%", border: "none", display: "block" }}
            scrolling="yes"
          />
        </div>

        <div style={{ fontSize: 12, color: "#6b7280", marginTop: 10 }}>
        </div>
      </div>
    </div>
  );
}
