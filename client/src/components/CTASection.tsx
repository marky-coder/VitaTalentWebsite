import { Button } from "@/components/ui/button";
import { Briefcase, UserPlus } from "lucide-react";

interface CTASectionProps {
  onHireTalent: () => void;
  onJoinAsCandidate: () => void;
}

export default function CTASection({ onHireTalent, onJoinAsCandidate }: CTASectionProps) {
  return (
    <section className="py-24" data-testid="section-cta">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-muted-foreground">
            Whether you're looking to hire or seeking your next opportunity, we're here to help.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-card rounded-md p-8 border border-card-border text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
              <Briefcase className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold text-foreground">For Businesses</h3>
            <p className="text-muted-foreground">
              Find exceptional talent from around the world to grow your team.
            </p>
            <Button 
              size="lg" 
              onClick={onHireTalent}
              data-testid="button-hire-talent-cta"
              className="w-full"
            >
              Hire Talent
            </Button>
          </div>
          
          <div className="bg-card rounded-md p-8 border border-card-border text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
              <UserPlus className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold text-foreground">For Candidates</h3>
            <p className="text-muted-foreground">
              Connect with opportunities that align with your skills and values.
            </p>
            <Button 
              size="lg" 
              variant="outline"
              onClick={onJoinAsCandidate}
              data-testid="button-join-candidate-cta"
              className="w-full"
            >
              Join as Candidate
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
