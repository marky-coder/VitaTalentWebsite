// client/src/pages/Schedule.tsx
import React, { useEffect } from "react";
import Footer from "@/components/Footer";

const IFRAME_SRC = "https://api.leadconnectorhq.com/widget/booking/DFNuSebE1R1wRlQFkgpT";
const SCRIPT_SRC = "https://link.msgsndr.com/js/form_embed.js";
const IFRAME_ID = "DFNuSebE1R1wRlQFkgpT_1765473793312";

export default function Schedule(): JSX.Element {
  useEffect(() => {
    if (!document.getElementById("ghl-booking-script")) {
      const s = document.createElement("script");
      s.src = SCRIPT_SRC;
      s.id = "ghl-booking-script";
      s.async = true;
      s.type = "text/javascript";
      document.body.appendChild(s);
    }
    // keep the script for reuse; removing it may cause re-init issues
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-purple-100 to-blue-50">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            Schedule a free discovery call
          </h1>
          <p className="text-sm text-slate-600 mt-3">
            Pick a time that works for you — this will book a meeting with our sales closer.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="border rounded-xl overflow-hidden">
            <div style={{ position: "relative", paddingBottom: "75%", height: 0 }}>
              <iframe
                title="Vita Talent - Schedule a discovery call"
                id={IFRAME_ID}
                src={IFRAME_SRC}
                scrolling="no"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  border: "none",
                }}
              />
            </div>
          </div>

          <p className="text-center text-sm text-slate-500 mt-4">
            If the scheduler doesn't load,{" "}
            <a href={IFRAME_SRC} target="_blank" rel="noopener noreferrer" className="underline">
              open the scheduler in a new tab
            </a>
            .
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
