// client/src/pages/Schedule.tsx
import React, { useEffect, useRef, useState } from "react";
import DecorativeSidebars from "@/components/DecorativeSidebars";
import Footer from "@/components/Footer";
import InquiryDialog from "@/components/InquiryDialog";

const IFRAME_SRC = "https://api.leadconnectorhq.com/widget/booking/DFNuSebE1R1wRlQFkgpT";
const SCRIPT_SRC = "https://link.msgsndr.com/js/form_embed.js";
const IFRAME_ID = "DFNuSebE1R1wRlQFkgpT_1765473793312";

export default function Schedule(): JSX.Element {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogType, setDialogType] = useState<"hire" | "candidate">("hire");
  const [selectedPack, setSelectedPack] = useState<string | undefined>(undefined);

  // iframe lazy-loading
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [shouldLoadIframe, setShouldLoadIframe] = useState(false);

  // Handlers for the decorative sidebars (match Home)
  const handleHireTalent = (packId?: string) => {
    setDialogType("hire");
    if (packId) setSelectedPack(packId);
    setDialogOpen(true);
  };
  const handleJoinAsCandidate = () => {
    setDialogType("candidate");
    setDialogOpen(true);
  };

  // Inject GHL script once we are about to load the iframe
  useEffect(() => {
    if (!shouldLoadIframe) return;
    if (!document.querySelector(`script[src="${SCRIPT_SRC}"]`)) {
      const s = document.createElement("script");
      s.src = SCRIPT_SRC;
      s.async = true;
      s.type = "text/javascript";
      s.id = "ghl-booking-script";
      document.body.appendChild(s);
    }
  }, [shouldLoadIframe]);

  // IntersectionObserver to set shouldLoadIframe when the scheduler wrapper is near the viewport
  useEffect(() => {
    if (!wrapperRef.current) return;
    if (shouldLoadIframe) return;

    let obs: IntersectionObserver | null = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setShouldLoadIframe(true);
            obs?.disconnect();
            obs = null;
            break;
          }
        }
      },
      { root: null, rootMargin: "500px", threshold: 0.01 }
    );

    obs.observe(wrapperRef.current);
    return () => {
      obs?.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wrapperRef.current]);

  return (
    <div className="min-h-screen">
      {/* keep the decorative sidebars so layout matches Home */}
      <DecorativeSidebars onHireTalent={() => handleHireTalent()} onJoinAsCandidate={handleJoinAsCandidate} />

      {/* Main content container uses same widths/padding/typography as Home sections */}
      <main className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-8">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-foreground">
            Schedule A Free Discovery Call
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-3">
            Pick a time that works for you — this will book a meeting with our Sales Team.
          </p>
        </div>

        <div className="max-w-full mx-auto">
          <div className="border rounded-2xl overflow-hidden bg-white shadow-sm">
            {/* wrapper observed by IntersectionObserver */}
            <div ref={wrapperRef} className="relative w-full h-[600px] md:h-[850px] lg:h-[1000px]">
              {shouldLoadIframe ? (
                <iframe
                  title="Vita Talent - Schedule a discovery call"
                  id={IFRAME_ID}
                  src={IFRAME_SRC}
                  loading="lazy"
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
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-sm text-slate-500">Loading scheduler…</div>
                </div>
              )}
            </div>
          </div>

          <p className="text-center text-sm text-slate-500 mt-4">
            If the Calendar doesn't load,{" "}
            <a href={IFRAME_SRC} target="_blank" rel="noopener noreferrer" className="underline">
              open the Calendar in a new tab
            </a>
            .
          </p>
        </div>
      </main>

      <Footer />

      <InquiryDialog open={dialogOpen} onOpenChange={setDialogOpen} type={dialogType} selectedPack={selectedPack} />
    </div>
  );
}
