// client/src/pages/Schedule.tsx
import { useState, useEffect } from "react";
import DecorativeSidebars from "@/components/DecorativeSidebars";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import InquiryDialog from "@/components/InquiryDialog";

const IFRAME_SRC = "https://api.leadconnectorhq.com/widget/booking/DFNuSebE1R1wRlQFkgpT";
const SCRIPT_SRC = "https://link.msgsndr.com/js/form_embed.js";
const IFRAME_ID = "DFNuSebE1R1wRlQFkgpT_1765473793312";

export default function Schedule(): JSX.Element {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogType, setDialogType] = useState<"hire" | "candidate">("hire");
  const [selectedPack, setSelectedPack] = useState<string | undefined>(undefined);

  // modal handlers (same behavior as Home)
  const handleHireTalent = (packId?: string) => {
    setDialogType("hire");
    if (packId) setSelectedPack(packId);
    setDialogOpen(true);
  };

  const handleJoinAsCandidate = () => {
    setDialogType("candidate");
    setDialogOpen(true);
  };

  // Inject GHL embed script once so iframe can initialize
  useEffect(() => {
    if (!document.querySelector(`script[src="${SCRIPT_SRC}"]`)) {
      const s = document.createElement("script");
      s.src = SCRIPT_SRC;
      s.async = true;
      s.type = "text/javascript";
      // Give it an id so it's easy to find later if needed
      s.id = "ghl-booking-script";
      document.body.appendChild(s);
    }
    // keep the script for reuse; removing it may cause re-init issues
  }, []);

  return (
    <div className="min-h-screen">
      {/* Decorative sidebars + hero to match Home layout */}
      <DecorativeSidebars onHireTalent={() => handleHireTalent()} onJoinAsCandidate={handleJoinAsCandidate} />
      <div id="hero">
        <HeroSection onHireTalent={() => handleHireTalent()} onJoinAsCandidate={handleJoinAsCandidate} />
      </div>

      {/* Schedule section styled consistent with the Home page content width & spacing */}
      <main className="bg-gradient-to-b from-purple-50 via-purple-100 to-blue-50">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
              Schedule a free discovery call
            </h1>
            <p className="text-sm text-slate-600 mt-3">
              Pick a time that works for you — this will book a meeting with our sales closer.
            </p>
          </div>

          <div className="max-w-full mx-auto">
            <div className="border rounded-xl overflow-hidden bg-white">
              {/* Larger responsive fixed height so the calendar is prominent like Home sections */}
              <div className="relative w-full h-[600px] md:h-[850px] lg:h-[1000px]">
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
      </main>

      <Footer />

      {/* Inquiry dialog (same as Home) */}
      <InquiryDialog open={dialogOpen} onOpenChange={setDialogOpen} type={dialogType} selectedPack={selectedPack} />
    </div>
  );
}
