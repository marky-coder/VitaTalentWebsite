// client/src/pages/Schedule.tsx
import React, { useEffect, useRef, useState } from "react";
import DecorativeSidebars from "@/components/DecorativeSidebars";
import Footer from "@/components/Footer";
import InquiryDialog from "@/components/InquiryDialog";

const CALENDLY_URL = "https://calendly.com/mo-svrea/30min";

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
          {/* Removed overflow-hidden so the page can scroll if the iframe/content is taller on mobile */}
          <div className="border rounded-2xl bg-white shadow-sm">
            {/* wrapper observed by IntersectionObserver.
                Use min-h so it can expand better on small screens */}
            <div ref={wrapperRef} className="relative w-full min-h-[600px] md:min-h-[850px] lg:min-h-[1000px]">
              {shouldLoadIframe ? (
                <iframe
                  title="Vita Talent - Schedule a discovery call (Calendly)"
                  src={`${CALENDLY_URL}?embed_type=Inline`}
                  loading="lazy"
                  scrolling="yes"
                  /* Allow iframe scrolling and enable smooth touch scrolling on iOS */
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    border: "none",
                    overflow: "auto",
                    WebkitOverflowScrolling: "touch",
                  }}
                  className="w-full h-full"
                  /* allowFullScreen can help some embed UIs */
                  allowFullScreen
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
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="underline">
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
