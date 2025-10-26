import { Button } from "@/components/ui/button";
import heroBackground from "@assets/generated_images/Global_network_hero_background_3fc03fc7.png";
import logoImage from "@assets/WhatsApp Image 2025-10-24 at 11.32.23 PM (1)_1761341009209.jpeg";

interface HeroSectionProps {
  onHireTalent: () => void;
  onJoinAsCandidate: () => void;
}

export default function HeroSection({ onHireTalent, onJoinAsCandidate }: HeroSectionProps) {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/12 via-primary/6 to-background">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
      </div>
      
      <div className="relative z-10 container max-w-5xl mx-auto px-4 py-24 text-center">
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-3">
            <img src={logoImage} alt="Vita Talent Logo" className="w-24 h-24 md:w-32 md:h-32 object-contain" />
          </div>
          
          <div className="space-y-2">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground tracking-tight">
              Vita Talent
            </h1>
            <p className="text-xl md:text-2xl text-primary font-medium">
              Where integrity meets opportunity.
            </p>
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mt-4 leading-relaxed">
            Empowering businesses worldwide with the right people, wherever they are.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button 
              size="lg" 
              onClick={onHireTalent}
              data-testid="button-hire-talent"
              className="text-base px-8"
            >
              Hire Talent
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={onJoinAsCandidate}
              data-testid="button-join-candidate"
              className="text-base px-8"
            >
              Join as Candidate
            </Button>
          </div>
          
          <div className="mt-16 w-full">
            <p className="text-base font-medium text-muted-foreground mb-8">Trusted by leading companies worldwide</p>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
              {[1, 2, 3, 4, 5].map((index) => (
                <div 
                  key={index} 
                  className="flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity" 
                  data-testid={`logo-company-${index}`}
                >
                  <img 
                    src={logoImage} 
                    alt="Partner Company Logo" 
                    className="h-16 w-16 md:h-20 md:w-20 object-contain grayscale hover:grayscale-0 transition-all" 
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
