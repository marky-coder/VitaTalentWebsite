import { useState } from "react";
import HeroSection from "@/components/HeroSection";
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

  const handleHireTalent = () => {
    setDialogType("hire");
    setDialogOpen(true);
  };

  const handleJoinAsCandidate = () => {
    setDialogType("candidate");
    setDialogOpen(true);
  };

  return (
    <div className="min-h-screen">
      <div id="hero">
        <HeroSection 
          onHireTalent={handleHireTalent} 
          onJoinAsCandidate={handleJoinAsCandidate} 
        />
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
          onHireTalent={handleHireTalent} 
          onJoinAsCandidate={handleJoinAsCandidate} 
        />
      </div>
      
      <Footer />
      
      <InquiryDialog 
        open={dialogOpen} 
        onOpenChange={setDialogOpen} 
        type={dialogType} 
      />
    </div>
  );
}
