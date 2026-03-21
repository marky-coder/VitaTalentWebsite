// client/src/pages/Home.tsx
import { useState, useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import CEOMessageSection from "@/components/CEOMessageSection";
import WhyGlobalSection from "@/components/WhyGlobalSection";
import WorkflowSection from "@/components/WorkflowSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CareSection from "@/components/CareSection";
import TeamSection from "@/components/TeamSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import InquiryDialog from "@/components/InquiryDialog";
import DecorativeSidebars from "@/components/DecorativeSidebars";

export default function Home() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogType, setDialogType] = useState<"hire" | "candidate">("hire");
  const [selectedPack, setSelectedPack] = useState<string | undefined>(undefined);

  const handleHireTalent = (packId?: string) => {
    setDialogType("hire");
    if (packId) setSelectedPack(packId);
    setDialogOpen(true);
  };

  const handleJoinAsCandidate = () => {
    setDialogType("candidate");
    setDialogOpen(true);
  };

  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const openHire = params.get("openHire");
      const pack = params.get("pack") ?? undefined;
      const scrollTo = params.get("scrollTo") ?? undefined;

      if (openHire === "1" || openHire === "true") {
        setDialogType("hire");
        if (pack) setSelectedPack(pack);
        setDialogOpen(true);
      }

      if (scrollTo) {
        let attempts = 0;
        const tryScroll = () => {
          const el = document.getElementById(scrollTo);
          if (el) {
            el.scrollIntoView({ behavior: "smooth" });
          } else if (attempts < 20) {
            attempts++;
            setTimeout(tryScroll, 100);
          }
        };
        tryScroll();
      }

      if (openHire || scrollTo || pack) {
        const cleanUrl = window.location.pathname + (window.location.hash || "");
        window.history.replaceState(null, "", cleanUrl);
      }
    } catch (e) {
      // ignore parsing errors
    }
  }, []);

  return (
    <div className="min-h-screen">
      <DecorativeSidebars onHireTalent={() => handleHireTalent()} onJoinAsCandidate={handleJoinAsCandidate} />
      <div id="hero">
        <HeroSection onHireTalent={() => handleHireTalent()} onJoinAsCandidate={handleJoinAsCandidate} />
      </div>

      {/* NEW: CEO message inserted between the hero (logos/socials) and Why Global */}
      <div id="ceo-message">
        <CEOMessageSection />
      </div>

      <div id="why-global">
        <WhyGlobalSection />
      </div>

      <div id="process">
        <WorkflowSection />
      </div>

      <div id="testimonials">
        <TestimonialsSection />
      </div>

      <CareSection />

      <TeamSection />

      <div id="contact">
        <CTASection onHireTalent={() => handleHireTalent()} onJoinAsCandidate={handleJoinAsCandidate} />
      </div>

      <Footer />

      <InquiryDialog open={dialogOpen} onOpenChange={setDialogOpen} type={dialogType} selectedPack={selectedPack} />
    </div>
  );
}
