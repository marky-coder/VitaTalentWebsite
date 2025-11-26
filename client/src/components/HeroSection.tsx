import { Button } from "@/components/ui/button";
import heroBackground from "@assets/generated_images/Global_network_hero_background_3fc03fc7.png";
import logoImage from "@assets/WhatsApp_Image_2025-10-24_at_11.32.23_PM-removebg-preview_1761482028519.png";

/**
 * Partner logos:
 * - Add your partner logo files into `attached_assets/` (that's the @assets alias)
 * - Filenames used here match the screenshot you provided.
 */
import partner1 from "@assets/IMG_6617.jpg";
import partner2 from "@assets/IMG_6614.png";
import partner3 from "@assets/IMG_6615.png";
import partner4 from "@assets/IMG_6616.png";
import partner5 from "@assets/IMG_6618.png";

interface HeroSectionProps {
  onHireTalent: () => void;
  onJoinAsCandidate: () => void;
}

export default function HeroSection({ onHireTalent, onJoinAsCandidate }: HeroSectionProps) {
  // Swapped the 3rd and 5th entries so the middle logo is now IMG_6618.png
  const partnerLogos: string[] = [
    partner1, // IMG_6617.jpg
    partner2, // IMG_6614.png
    partner5, // IMG_6618.png  <-- now in the middle
    partner4, // IMG_6616.png
    partner3, // IMG_6615.png  <-- moved to last position
  ];

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
            <img src={logoImage} alt="Vita Talent Logo" className="w-40 h-40 md:w-48 md:h-48 object-contain" />
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
              {partnerLogos.map((logo, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity"
                  data-testid={`logo-company-${index + 1}`}
                >
                  <img
                    src={logo ?? logoImage}
                    alt={`Partner Company ${index + 1}`}
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
