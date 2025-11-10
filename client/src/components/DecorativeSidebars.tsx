import { Button } from "@/components/ui/button";
import { Phone, Mail, Briefcase, UserPlus, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useToast } from "@/hooks/use-toast";

interface DecorativeSidebarsProps {
  onHireTalent: () => void;
  onJoinAsCandidate: () => void;
}

export default function DecorativeSidebars({
  onHireTalent,
  onJoinAsCandidate,
}: DecorativeSidebarsProps) {
  const { toast } = useToast();
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const copyEmailToClipboard = async () => {
    const email = "contact@vitatalent.com";
    try {
      await navigator.clipboard.writeText(email);
      toast({
        title: "Email copied!",
        description: `${email} has been copied to your clipboard.`,
      });
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please copy the email manually: contact@vitatalent.com",
        variant: "destructive",
      });
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
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                size="icon"
                variant="ghost"
                className="hover-elevate"
                onClick={onHireTalent}
                data-testid="sidebar-hire-talent"
              >
                <Briefcase className="w-5 h-5 text-primary" />
              </Button>
            </TooltipTrigger>
            <TooltipContent
              side="right"
              className="bg-primary/95 backdrop-blur-sm text-primary-foreground border-primary/50 shadow-lg"
            >
              <p className="font-medium">Hire Talent</p>
              <p className="text-xs opacity-90 mt-0.5">
                Find the perfect candidate
              </p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                size="icon"
                variant="ghost"
                className="hover-elevate"
                onClick={onJoinAsCandidate}
                data-testid="sidebar-join-candidate"
              >
                <UserPlus className="w-5 h-5 text-primary" />
              </Button>
            </TooltipTrigger>
            <TooltipContent
              side="right"
              className="bg-primary/95 backdrop-blur-sm text-primary-foreground border-primary/50 shadow-lg"
            >
              <p className="font-medium">Join as Candidate</p>
              <p className="text-xs opacity-90 mt-0.5">
                Start your career journey
              </p>
            </TooltipContent>
          </Tooltip>
          <div className="w-full h-px bg-border my-1" />
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                size="icon"
                variant="ghost"
                className="hover-elevate"
                onClick={scrollToContact}
                data-testid="sidebar-contact"
              >
                <MessageSquare className="w-5 h-5 text-primary" />
              </Button>
            </TooltipTrigger>
            <TooltipContent
              side="right"
              className="bg-primary/95 backdrop-blur-sm text-primary-foreground border-primary/50 shadow-lg"
            >
              <p className="font-medium">Contact Us</p>
              <p className="text-xs opacity-90 mt-0.5">
                Get in touch with our team
              </p>
            </TooltipContent>
          </Tooltip>
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
          <Tooltip>
            <TooltipTrigger asChild>
              <a href="tel:+1234567890" data-testid="sidebar-phone">
                <Button size="icon" variant="ghost" className="hover-elevate">
                  <Phone className="w-5 h-5 text-primary" />
                </Button>
              </a>
            </TooltipTrigger>
            <TooltipContent
              side="left"
              className="bg-primary/95 backdrop-blur-sm text-primary-foreground border-primary/50 shadow-lg"
            >
              <p className="font-medium">Call Us</p>
              <p className="text-xs opacity-90 mt-0.5">Speak with our team</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                size="icon"
                variant="ghost"
                className="hover-elevate"
                onClick={copyEmailToClipboard}
                data-testid="sidebar-email"
              >
                <Mail className="w-5 h-5 text-primary" />
              </Button>
            </TooltipTrigger>
            <TooltipContent
              side="left"
              className="bg-primary/95 backdrop-blur-sm text-primary-foreground border-primary/50 shadow-lg"
            >
              <p className="font-medium">Email Us</p>
              <p className="text-xs opacity-90 mt-0.5">Copy email address</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </motion.div>
    </>
  );
}
