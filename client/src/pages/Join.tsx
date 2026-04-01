// client/src/pages/Join.tsx
import { useEffect } from "react";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

/**
 * Join page — embeds the same candidate GHL survey used by the modal (pzE6wXP4PmwKwZqN6iRw).
 * Layout identical to Hire page: centered modal-like panel with the embedded survey, plus CTA + footer.
 */
export default function Join() {
  const CANDIDATE_SURVEY_ID = "pzE6wXP4PmwKwZqN6iRw";
  const BRAND_GREEN = "#22c55e";

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

  const goToHire = () => {
    window.location.href = "/hire";
  };

  const goToJoin = () => {
    window.location.href = "/join";
  };

  return (
    <div
      style={{
        fontFamily: "Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
      }}
      className="min-h-screen bg-gray-50"
    >
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow mt-12 mb-8">
        <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <img src="/favicon.png" alt="Vita Talent Logo" width={40} height={40} style={{ display: "block" }} />
            <div style={{ fontWeight: 800, fontSize: 20 }}>
              VITA<span style={{ color: BRAND_GREEN }}>TALENT</span>
            </div>
          </div>

          <a href="/" style={{ color: BRAND_GREEN, textDecoration: "none", fontSize: 14 }}>
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

        {/* Center candidate survey in same modal-like panel for visual parity */}
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
              id={CANDIDATE_SURVEY_ID}
              title="Join form"
              src={iframeSrc}
              style={{ width: "100%", height: "760px", border: "none", display: "block" }}
              scrolling="yes"
            />
          </div>
        </div>
      </div>

      {/* CTA & Footer (same as Home) */}
      <CTASection onHireTalent={goToHire} onJoinAsCandidate={goToJoin} />
      <Footer />
    </div>
  );
}
