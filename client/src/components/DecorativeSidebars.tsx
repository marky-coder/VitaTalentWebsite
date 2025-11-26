import { Button } from "@/components/ui/button";
import { Phone, Mail, Briefcase, UserPlus } from "lucide-react";
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

  // updated email copy behavior
  const copyEmailToClipboard = async () => {
    const email = "info@vitatalent.co";
    try {
      await navigator.clipboard.writeText(email);
      toast({
        title: "Email copied!",
        description: `${email} has been copied to your clipboard.`,
      });
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: `Please copy the email manually: ${email}`,
        variant: "destructive",
      });
    }
  };

  // WhatsApp number (international format, no '+' or dashes)
  const whatsappNumberRaw = "13604018427"; // +1 360-401-8427
  const whatsappDisplay = "360-401-8427";
  const whatsappLink = `https://wa.me/${whatsappNumberRaw}`;

  return (
    <>
      {/* Left Sidebar - Quick Actions (Contact button removed) */}
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
        </div>
      </motion.div>

      {/* Right Sidebar - Contact Info (phone -> WhatsApp; email unchanged) */}
      <motion.div
        className="hidden xl:flex fixed right-0 top-1/2 -translate-y-1/2 z-50 flex-col gap-3 pr-4"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div className="flex flex-col gap-2 bg-card/80 backdrop-blur-sm rounded-l-lg border border-border/50 p-2 shadow-lg">
          <Tooltip>
            <TooltipTrigger asChild>
              {/* WhatsApp link opens in a new tab/window; wa.me works for mobile and desktop */}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Chat on WhatsApp ${whatsappDisplay}`}
                data-testid="sidebar-phone"
              >
                <Button size="icon" variant="ghost" className="hover-elevate">
                  <Phone className="w-5 h-5 text-primary" />
                </Button>
              </a>
            </TooltipTrigger>
            <TooltipContent
              side="left"
              className="bg-primary/95 backdrop-blur-sm text-primary-foreground border-primary/50 shadow-lg"
            >
              <p className="font-medium">WhatsApp</p>
              <p className="text-xs opacity-90 mt-0.5">
                Chat with our team: {whatsappDisplay}
              </p>
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
