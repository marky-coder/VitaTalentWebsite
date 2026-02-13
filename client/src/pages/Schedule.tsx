// client/src/pages/Schedule.tsx
import React, { useEffect, useRef, useState } from "react";
import DecorativeSidebars from "@/components/DecorativeSidebars";
import Footer from "@/components/Footer";
import InquiryDialog from "@/components/InquiryDialog";

const CALENDLY_URL = "https://calendly.com/mo-svrea/30min";
const CALENDLY_WIDGET_CSS = "https://assets.calendly.com/assets/external/widget.css";
const CALENDLY_WIDGET_JS = "https://assets.calendly.com/assets/external/widget.js";

/**
 * Schedule page — replaced GHL iframe/widget with Calendly inline widget.
 */
export default function Schedule(): JSX.Element {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogType, setDialogType] = useState<"hire" | "candidate">("hire");
  const [selectedPack, setSelectedPack] = useState<string | undefined>(undefined);

  // iframe/widget lazy-loading
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [shouldLoadWidget, setShouldLoadWidget] = useState(false);

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

  // Inject Calendly CSS + script once we are about to load the widget, and init it if possible.
  useEffect(() => {
    if (!shouldLoadWidget) return;

    // inject CSS if not present
    if (!document.querySelector(`link[href="${CALENDLY_WIDGET_CSS}"]`)) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = CALENDLY_WIDGET_CSS;
      link.type = "text/css";
      link.id = "calendly-widget-css";
      document.head.appendChild(link);
    }

    // helper to init Calendly inline widget if Calendly is loaded
    const tryInit = () => {
      // `Calendly.initInlineWidget` is provided by the widget.js script
      if ((window as any).Calendly?.initInlineWidget) {
        const parent = document.querySelector(".calendly-inline-widget");
        if (parent) {
          try {
            (window as any).Calendly.initInlineWidget({
              url: CALENDLY_URL,
              parentElement: parent,
            });
          } catch (err) {
            // ignore; script might initialize automatically
            // console.debug("Calendly init failed:", err);
          }
        }
      }
    };

    // inject script if not present
    if (!document.querySelector(`script[src="${CALENDLY_WIDGET_JS}"]`)) {
      const s = document.createElement("script");
      s.src = CALENDLY_WIDGET_JS;
      s.async = true;
      s.type = "text/javascript";
      s.id = "calendly-widget-script";
      // On load, try to initialize the inline widget
      s.onload = () => {
        tryInit();
      };
      document.body.appendChild(s);
    } else {
      // If the script already exists, attempt init (use small delay in case the script just finished loading)
      setTimeout(tryInit, 250);
    }
  }, [shouldLoadWidget]);

  // IntersectionObserver to set shouldLoadWidget when the scheduler wrapper is near the viewport
  useEffect(() => {
    if (!wrapperRef.current) return;
    if (shouldLoadWidget) return;

    let obs: IntersectionObserver | null = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setShouldLoadWidget(true);
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
          {/* Removed overflow-hidden so the page can scroll if the widget/content is taller on mobile */}
          <div className="border rounded-2xl bg-white shadow-sm">
            {/* wrapper observed by IntersectionObserver.
                Use min-h so it can expand better on small screens */}
            <div ref={wrapperRef} className="relative w-full min-h-[600px] md:min-h-[850px] lg:min-h-[1000px]">
              {shouldLoadWidget ? (
                // Calendly inline widget — positioned to fill the wrapper (like the old iframe)
                <div
                  className="calendly-inline-widget absolute top-0 left-0 w-full h-full"
                  data-url={CALENDLY_URL}
                  style={{ minWidth: 320 }}
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
