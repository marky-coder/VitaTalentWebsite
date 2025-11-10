import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useEffect } from "react";

interface InquiryDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  type: "hire" | "candidate";
}

export default function InquiryDialog({
  open,
  onOpenChange,
  type,
}: InquiryDialogProps) {
  const hireFormId = "WQGFK4J2ChAmAACrEQPC";
  const candidateFormId = "pzE6wXP4PmwKwZqN6iRw";
  const formId = type === "hire" ? hireFormId : candidateFormId;

  useEffect(() => {
    if (open) {
      const existingScript = document.querySelector(
        'script[src="https://link.msgsndr.com/js/form_embed.js"]'
      );
      if (!existingScript) {
        const script = document.createElement("script");
        script.src = "https://link.msgsndr.com/js/form_embed.js";
        script.async = true;
        document.body.appendChild(script);
      }
    }
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="sm:max-w-[600px] max-h-[90vh] flex flex-col"
        data-testid={`dialog-${type}`}
      >
        <DialogHeader className="flex-shrink-0">
          <DialogTitle>
            {type === "hire" ? "Hire Talent" : "Job Application Form"}
          </DialogTitle>
          <DialogDescription>
            {type === "hire"
              ? "Tell us about your hiring needs and we'll connect you with exceptional talent."
              : "Share your information and we'll help you find your next opportunity."}
          </DialogDescription>
        </DialogHeader>

        <div className="mt-4 overflow-y-auto flex-1 min-h-0">
          <iframe
            src={`https://api.leadconnectorhq.com/widget/survey/${formId}`}
            style={{ border: "none", width: "100%" }}
            scrolling="yes"
            id={formId}
            title="survey"
            className="w-full"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
