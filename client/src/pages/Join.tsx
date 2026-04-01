// client/src/pages/Join.tsx
import { useEffect } from "react";

export default function Join() {
  // candidate survey id from the modal
  const CANDIDATE_SURVEY_ID = "pzE6wXP4PmwKwZqN6iRw";

  useEffect(() => {
    // ensure the embed script is present so the widget behaves like the modal
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
          <h1 className="text-2xl font-semibold mb-2">Join VitaTalent as a candidate</h1>
          <p className="text-gray-600">
            Share a few details and we’ll keep you in mind when there’s a strong match with roles we’re
            working on.
          </p>
        </div>

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
            title="Join form"
            style={{ width: "100%", height: "100%", border: "none" }}
            id={CANDIDATE_SURVEY_ID}
            scrolling="yes"
          />
        </div>

        <div className="text-xs text-gray-500 mt-2">
          This page embeds the same GHL form used by the popup. Wire to your ATS/CRM as needed.
        </div>
      </div>
    </div>
  );
}
