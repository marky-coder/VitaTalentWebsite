// client/src/pages/Home.tsx
import { useState, useEffect } from "react";
import HeroSection from "@/components/HeroSection";
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

  // Open dialog if user navigated here with ?openHire=true and optional &pack=
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const openHire = params.get("openHire");
      const pack = params.get("pack") ?? undefined;
      if (openHire === "1" || openHire === "true") {
        setDialogType("hire");
        if (pack) setSelectedPack(pack);
        setDialogOpen(true);

        // remove query params so refresh doesn't reopen the dialog
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
