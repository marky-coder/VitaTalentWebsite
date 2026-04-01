// client/src/pages/Hire.tsx
import { useEffect, useState } from "react";

export default function Hire() {
  const [pack, setPack] = useState<string | undefined>(undefined);

  // survey id used in the modal version
  const HIRE_SURVEY_ID = "WQGFK4J2ChAmAACrEQPC";

  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const p = params.get("pack") ?? undefined;
      if (p) setPack(p);
    } catch (e) {
      // ignore
    }

    // ensure the GHL helper script is present (same script InquiryDialog uses)
    if (!document.querySelector('script[src="https://link.msgsndr.com/js/form_embed.js"]')) {
      const s = document.createElement("script");
      s.src = "https://link.msgsndr.com/js/form_embed.js";
      s.defer = true;
      s.setAttribute("data-ghl-loaded", "1");
      document.body.appendChild(s);
    }
  }, []);

  // iframe src for the embedded survey. We append pack as a query param when present,
  // which you can use for routing/prefill on the GHL side if desired.
  const iframeSrc = pack
    ? `https://api.leadconnectorhq.com/widget/survey/${HIRE_SURVEY_ID}?pack=${encodeURIComponent(pack)}`
    : `https://api.leadconnectorhq.com/widget/survey/${HIRE_SURVEY_ID}`;

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow">
        <header className="flex items-center justify-between mb-6">
          <div className="text-2xl font-extrabold tracking-tight">
            VITA<span className="text-indigo-600">TALENT</span>
          </div>
          <a className="text-sm text-indigo-600" href="/">
            ← Back home
          </a>
        </header>

        <div className="mb-6">
          <h1 className="text-2xl font-semibold mb-2">Hire global talent with VitaTalent</h1>
          <p className="text-gray-600">
            Tell us about the role and team. We’ll follow up with a short Loom or email outlining
            how we’d approach it.
          </p>
        </div>

        {pack && (
          <div className="mb-4 text-sm text-gray-700">
            <strong>Selected pack:</strong> {pack}
          </div>
        )}

        {/* GHL iframe: styled and responsive, matching the height used by your modal */}
        <div
          style={{
            width: "100%",
            height: "760px",
            padding: 0,
            margin: 0,
            boxSizing: "border-box",
            borderRadius: 6,
            overflow: "hidden",
            boxShadow: "0 2px 10px rgba(2,6,23,0.05)",
          }}
          className="mb-4"
        >
          <iframe
            src={iframeSrc}
            title="Hire form"
            style={{ width: "100%", height: "100%", border: "none" }}
            id={HIRE_SURVEY_ID}
            scrolling="yes"
          />
        </div>

        <div className="text-xs text-gray-500 mt-2">
          This page embeds the same GHL form used by the popup. If you want the old placeholder form
          instead, tell me and I’ll restore it — but the GHL iframe is now the canonical form.
        </div>
      </div>
    </div>
  );
}
