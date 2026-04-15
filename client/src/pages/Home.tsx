import { useState, useEffect } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooterNav from "@/components/SiteFooterNav";
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

export default function Home() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogType, setDialogType] = useState<"hire" | "candidate">("hire");
  const [selectedPack, setSelectedPack] = useState<string | undefined>(undefined);

  const handleHireTalent = (packId?: string) => {
    if (packId) {
      const params = new URLSearchParams({ pack: packId });
      window.location.href = `/hire?${params.toString()}`;
    } else {
      window.location.href = "/hire";
    }
  };

  const handleJoinAsCandidate = () => {
    window.location.href = "/join";
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
      <SiteHeader />

      <div id="home">
        <HeroSection
          onHireTalent={() => handleHireTalent()}
          onJoinAsCandidate={handleJoinAsCandidate}
        />
      </div>

      <div id="about">
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
        <CTASection
          onHireTalent={() => handleHireTalent()}
          onJoinAsCandidate={handleJoinAsCandidate}
        />
      </div>

      <SiteFooterNav />
      <Footer />

      <InquiryDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        type={dialogType}
        selectedPack={selectedPack}
      />
    </div>
  );
}
