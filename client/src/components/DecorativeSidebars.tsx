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

  const whatsappNumberRaw = "13604018427";
  const whatsappDisplay = "360-401-8427";
  const whatsappLink = `https://wa.me/${whatsappNumberRaw}`;

  return (
    <>
      <motion.div
        className="hidden xl:flex fixed left-0 top-1/2 -translate-y-1/2 z-50 flex-col gap-4 pl-4"
        initial={{ x: -120, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div className="flex flex-col gap-3 rounded-r-[20px] border border-border/50 bg-card/90 p-3 shadow-[0_18px_45px_rgba(0,0,0,0.12)] backdrop-blur-sm">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                size="icon"
                variant="ghost"
                className="h-16 w-16 rounded-2xl hover-elevate"
                onClick={onHireTalent}
                data-testid="sidebar-hire-talent"
              >
                <Briefcase className="h-8 w-8 text-primary" />
              </Button>
            </TooltipTrigger>
            <TooltipContent
              side="right"
              className="border-primary/50 bg-primary/95 text-primary-foreground shadow-lg backdrop-blur-sm"
            >
              <p className="font-medium">Hire Talent</p>
              <p className="mt-0.5 text-xs opacity-90">
                Find the perfect candidate
              </p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                size="icon"
                variant="ghost"
                className="h-16 w-16 rounded-2xl hover-elevate"
                onClick={onJoinAsCandidate}
                data-testid="sidebar-join-candidate"
              >
                <UserPlus className="h-8 w-8 text-primary" />
              </Button>
            </TooltipTrigger>
            <TooltipContent
              side="right"
              className="border-primary/50 bg-primary/95 text-primary-foreground shadow-lg backdrop-blur-sm"
            >
              <p className="font-medium">Join as Candidate</p>
              <p className="mt-0.5 text-xs opacity-90">
                Start your career journey
              </p>
            </TooltipContent>
          </Tooltip>
        </div>
      </motion.div>

      <motion.div
        className="hidden xl:flex fixed right-0 top-1/2 -translate-y-1/2 z-50 flex-col gap-4 pr-4"
        initial={{ x: 120, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div className="flex flex-col gap-3 rounded-l-[20px] border border-border/50 bg-card/90 p-3 shadow-[0_18px_45px_rgba(0,0,0,0.12)] backdrop-blur-sm">
          <Tooltip>
            <TooltipTrigger asChild>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Chat on WhatsApp ${whatsappDisplay}`}
                data-testid="sidebar-phone"
              >
                <Button
                  size="icon"
                  variant="ghost"
                  className="h-16 w-16 rounded-2xl hover-elevate"
                >
                  <Phone className="h-8 w-8 text-primary" />
                </Button>
              </a>
            </TooltipTrigger>
            <TooltipContent
              side="left"
              className="border-primary/50 bg-primary/95 text-primary-foreground shadow-lg backdrop-blur-sm"
            >
              <p className="font-medium">WhatsApp</p>
              <p className="mt-0.5 text-xs opacity-90">
                Chat with our team: {whatsappDisplay}
              </p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                size="icon"
                variant="ghost"
                className="h-16 w-16 rounded-2xl hover-elevate"
                onClick={copyEmailToClipboard}
                data-testid="sidebar-email"
              >
                <Mail className="h-8 w-8 text-primary" />
              </Button>
            </TooltipTrigger>
            <TooltipContent
              side="left"
              className="border-primary/50 bg-primary/95 text-primary-foreground shadow-lg backdrop-blur-sm"
            >
              <p className="font-medium">Email Us</p>
              <p className="mt-0.5 text-xs opacity-90">Copy email address</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </motion.div>
    </>
  );
}
