import { Button } from "@/components/ui/button";
import { Phone, Mail, Briefcase, UserPlus, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

interface DecorativeSidebarsProps {
  onHireTalent: () => void;
  onJoinAsCandidate: () => void;
}

export default function DecorativeSidebars({ onHireTalent, onJoinAsCandidate }: DecorativeSidebarsProps) {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Left Sidebar - Quick Actions */}
      <motion.div 
        className="hidden xl:flex fixed left-0 top-1/2 -translate-y-1/2 z-50 flex-col gap-3 pl-4"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div className="flex flex-col gap-2 bg-card/80 backdrop-blur-sm rounded-r-lg border border-border/50 p-2 shadow-lg">
          <Button
            size="icon"
            variant="ghost"
            className="hover-elevate"
            onClick={onHireTalent}
            title="Hire Talent"
            data-testid="sidebar-hire-talent"
          >
            <Briefcase className="w-5 h-5 text-primary" />
          </Button>
          <Button
            size="icon"
            variant="ghost"
            className="hover-elevate"
            onClick={onJoinAsCandidate}
            title="Join as Candidate"
            data-testid="sidebar-join-candidate"
          >
            <UserPlus className="w-5 h-5 text-primary" />
          </Button>
          <div className="w-full h-px bg-border my-1" />
          <Button
            size="icon"
            variant="ghost"
            className="hover-elevate"
            onClick={scrollToContact}
            title="Contact Us"
            data-testid="sidebar-contact"
          >
            <MessageSquare className="w-5 h-5 text-primary" />
          </Button>
        </div>
      </motion.div>

      {/* Right Sidebar - Contact Info */}
      <motion.div 
        className="hidden xl:flex fixed right-0 top-1/2 -translate-y-1/2 z-50 flex-col gap-3 pr-4"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div className="flex flex-col gap-2 bg-card/80 backdrop-blur-sm rounded-l-lg border border-border/50 p-2 shadow-lg">
          <Button
            size="icon"
            variant="ghost"
            className="hover-elevate"
            asChild
            title="Call Us"
            data-testid="sidebar-phone"
          >
            <a href="tel:+1234567890">
              <Phone className="w-5 h-5 text-primary" />
            </a>
          </Button>
          <Button
            size="icon"
            variant="ghost"
            className="hover-elevate"
            asChild
            title="Email Us"
            data-testid="sidebar-email"
          >
            <a href="mailto:contact@vitatalent.com">
              <Mail className="w-5 h-5 text-primary" />
            </a>
          </Button>
        </div>
      </motion.div>
    </>
  );
}
