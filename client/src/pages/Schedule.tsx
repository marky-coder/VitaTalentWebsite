// client/src/pages/Schedule.tsx  --- replace the previous Calendly code with this version
import React, { useEffect, useRef, useState } from "react";
import DecorativeSidebars from "@/components/DecorativeSidebars";
import Footer from "@/components/Footer";
import InquiryDialog from "@/components/InquiryDialog";

const CALENDLY_URL = "https://calendly.com/mo-svrea/30min";
const CALENDLY_WIDGET_CSS = "https://assets.calendly.com/assets/external/widget.css";
const CALENDLY_WIDGET_JS = "https://assets.calendly.com/assets/external/widget.js";
const CALENDLY_CONTAINER_ID = "calendly-inline-container";

export default function Schedule(): JSX.Element {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogType, setDialogType] = useState<"hire" | "candidate">("hire");
  const [selectedPack, setSelectedPack] = useState<string | undefined>(undefined);

  // widget lazy-loading
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [shouldLoadWidget, setShouldLoadWidget] = useState(false);

  const handleHireTalent = (packId?: string) => {
    setDialogType("hire");
    if (packId) setSelectedPack(packId);
    setDialogOpen(true);
  };
  const handleJoinAsCandidate = () => {
    setDialogType("candidate");
    setDialogOpen(true);
  };

  // load Calendly CSS + script and initialize safely (prevent double-init)
  useEffect(() => {
    if (!shouldLoadWidget) return;

    // ensure CSS (only once)
    if (!document.querySelector(`link[href="${CALENDLY_WIDGET_CSS}"]`)) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = CALENDLY_WIDGET_CSS;
      link.id = "calendly-widget-css";
      document.head.appendChild(link);
    }

    // safe init function
    const initCalendlyInline = () => {
      const parent = document.getElementById(CALENDLY_CONTAINER_ID);
      if (!parent) return;

      // If Calendly already created an iframe, avoid creating another one
      if (parent.querySelector("iframe")) return;

      // If the Calendly global exists and provides initInlineWidget, use it
      if ((window as any).Calendly && (window as any).Calendly.initInlineWidget) {
        try {
          (window as any).Calendly.initInlineWidget({
            url: CALENDLY_URL,
            parentElement: parent,
          });
          return;
        } catch (err) {
          // fallthrough to iframe fallback
          // console.warn("Calendly initInlineWidget failed, falling back to iframe", err);
        }
      }

      // Fallback: insert a simple iframe pointing to Calendly (works if widget API unavailable)
      const iframe = document.createElement("iframe");
      iframe.src = CALENDLY_URL;
      iframe.title = "Schedule A Free Discovery Call";
      iframe.loading = "lazy";
      iframe.scrolling = "yes";
      iframe.style.width = "100%";
      iframe.style.height = "100%";
      iframe.style.border = "none";
      iframe.setAttribute("allowfullscreen", "");
      parent.appendChild(iframe);
    };

    // inject script if not present
    const existingScript = document.querySelector(`script[src="${CALENDLY_WIDGET_JS}"]`);
    if (!existingScript) {
      const s = document.createElement("script");
      s.src = CALENDLY_WIDGET_JS;
      s.async = true;
      s.id = "calendly-widget-script";
      s.onload = () => {
        // After script loads try to initialize
        initCalendlyInline();
      };
      document.body.appendChild(s);
    } else {
      // script already present, try to initialize after a short delay
      setTimeout(initCalendlyInline, 50);
    }

    // cleanup on unmount: remove the Calendly iframe/widget children so remounts are fresh
    return () => {
      const parent = document.getElementById(CALENDLY_CONTAINER_ID);
      if (parent) parent.innerHTML = "";
    };
  }, [shouldLoadWidget]);

  // IntersectionObserver to set shouldLoadWidget when the scheduler wrapper nears the viewport
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
      <DecorativeSidebars onHireTalent={() => handleHireTalent()} onJoinAsCandidate={handleJoinAsCandidate} />

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
          <div className="border rounded-2xl bg-white shadow-sm">
            {/* IMPORTANT: we let the container participate in layout (not absolutely positioned). 
                The wrapper sets min-height so the Calendly container can fill it. */}
            <div ref={wrapperRef} className="relative w-full min-h-[600px] md:min-h-[850px] lg:min-h-[1000px]">
              {shouldLoadWidget ? (
                // container for Calendly widget; don't include the 'data-url' auto-init attribute
                // so we can call initInlineWidget ourselves exactly once.
                <div id={CALENDLY_CONTAINER_ID} className="w-full h-full" style={{ minWidth: 320, height: "100%" }} />
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
