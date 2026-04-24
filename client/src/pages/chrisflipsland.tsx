import { useEffect } from "react";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function ChrisFlipsLand() {
  const BRAND_GREEN = "#22c55e";

  useEffect(() => {
    if (
      !document.querySelector(
        'script[src="https://link.msgsndr.com/js/form_embed.js"]'
      )
    ) {
      const script = document.createElement("script");
      script.src = "https://link.msgsndr.com/js/form_embed.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const goToHire = () => {
    window.location.href = "/chrisflipsland";
  };

  const goToJoin = () => {
    window.location.href = "/join";
  };

  return (
    <div
      style={{
        fontFamily:
          "Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
      }}
      className="min-h-screen bg-gray-50"
    >
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow mt-12 mb-8">
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 24,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <img
              src="/favicon.png"
              alt="Vita Talent Logo"
              width={40}
              height={40}
              style={{ display: "block" }}
            />
            <div style={{ fontWeight: 800, fontSize: 20 }}>
              VITA<span style={{ color: BRAND_GREEN }}>TALENT</span>
            </div>
          </div>

          <a
            href="/"
            style={{ color: BRAND_GREEN, textDecoration: "none", fontSize: 14 }}
          >
            ← Back home
          </a>
        </header>

        <div style={{ marginBottom: 20 }}>
          <h1
            style={{
              fontFamily: "Poppins, sans-serif",
              fontSize: 28,
              margin: 0,
              fontWeight: 700,
            }}
          >
            Hire global talent with VitaTalent
          </h1>
          <p style={{ color: "#475569", marginTop: 8 }}>
            Tell us about the role and team. We’ll follow up with a short Loom
            or email outlining how we’d approach it.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "28px 0",
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: 760,
              borderRadius: 12,
              background: "#fff",
              boxShadow: "0 30px 80px rgba(2,6,23,0.12)",
              overflow: "hidden",
              padding: 12,
            }}
          >
            <iframe
              src="/widget/survey/wnrtoju0i0bzUmDhg6QT"
              style={{ border: "none", width: "100%", minHeight: "900px" }}
              scrolling="no"
              id="wnrtoju0i0bzUmDhg6QT"
              title="survey"
            />
          </div>
        </div>
      </div>

      <CTASection onHireTalent={goToHire} onJoinAsCandidate={goToJoin} />
      <Footer />
    </div>
  );
}
