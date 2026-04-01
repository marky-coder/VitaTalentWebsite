// client/src/pages/Hire.tsx
import { useEffect, useState } from "react";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

/**
 * Hire page — embeds the same GHL survey your modal used (WQGFK4J2ChAmAACrEQPC).
 * Uses the brand green for the "TALENT" wordmark and adds the site CTA + footer.
 */
export default function Hire() {
  const [pack, setPack] = useState<string | undefined>(undefined);
  const HIRE_SURVEY_ID = "WQGFK4J2ChAmAACrEQPC";
  const BRAND_GREEN = "#22c55e"; // brand green

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

  const iframeSrc = pack
    ? `https://api.leadconnectorhq.com/widget/survey/${HIRE_SURVEY_ID}?pack=${encodeURIComponent(pack)}`
    : `https://api.leadconnectorhq.com/widget/survey/${HIRE_SURVEY_ID}`;

  const goToHire = (packId?: string) => {
    // navigate to /hire (include pack if provided)
    if (packId) window.location.href = `/hire?pack=${encodeURIComponent(packId)}`;
    else window.location.href = "/hire";
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
      </div>

      {/* CTA & Footer (same as Home) */}
      <CTASection onHireTalent={() => goToHire()} onJoinAsCandidate={goToJoin} />
      <Footer />
    </div>
  );
}
