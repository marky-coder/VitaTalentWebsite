import InquiryDialog from '../InquiryDialog';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function InquiryDialogExample() {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState<"hire" | "candidate">("hire");

  return (
    <div className="p-8 space-y-4">
      <Button onClick={() => { setType("hire"); setOpen(true); }}>
        Open Hire Dialog
      </Button>
      <Button onClick={() => { setType("candidate"); setOpen(true); }}>
        Open Candidate Dialog
      </Button>
      <InquiryDialog open={open} onOpenChange={setOpen} type={type} />
    </div>
  );
}
