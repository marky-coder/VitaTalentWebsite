// client/src/components/HeroSection.tsx
import { Button } from "@/components/ui/button";
import heroBackground from "@assets/generated_images/Global_network_hero_background_3fc03fc7.png";
import logoImage from "@assets/WhatsApp_Image_2025-10-24_at_11.32.23_PM-removebg-preview_1761482028519.png";

/**
 * Partner logos:
 * - The Land Growth Capital logo lives in your repo as:
 *   attached_assets/Land Growth Capital.png
 * - We import it here using the @assets alias and the exact filename (including spaces).
 *
 * If your build tool has issues with spaces in filenames, rename the file to:
 *   client/src/assets/land-growth-capital.png
 * and change the import below to: import partner6 from "@assets/land-growth-capital.png";
 */
import partner1 from "@assets/IMG_6617.jpg";
import partner2 from "@assets/IMG_6614.png";
import partner3 from "@assets/IMG_6615.png";
import partner4 from "@assets/IMG_6616.png";
import partner5 from "@assets/IMG_6618.png";
import partner6 from "@assets/Land Growth Capital.png"; // <- exact filename from attached_assets

import { Link } from "wouter";

interface HeroSectionProps {
  onHireTalent: () => void;
  onJoinAsCandidate: () => void;
}

export default function HeroSection({ onHireTalent, onJoinAsCandidate }: HeroSectionProps) {
  // Put the new logo in the middle for visibility
  const partnerLogos: string[] = [
    partner1,
    partner2,
    partner6, // Land Growth Capital (NEW)
    partner5,
    partner3,
  ];

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/12 via-primary/6 to-background">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
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

          {/* CTA buttons */}
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

          {/* Pricing button under CTAs */}
          <div className="mt-4 flex justify-center w-full">
            <Button size="lg" variant="outline" asChild>
              <Link href="/pricing">Pricing</Link>
            </Button>
          </div>

          {/* Trusted by logos — centered */}
          <div className="mt-16 w-full">
            <p className="text-base font-medium text-muted-foreground mb-8">
              Trusted by leading companies worldwide
            </p>

            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
              {partnerLogos.map((logo, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center transition-opacity"
                  data-testid={`logo-company-${index + 1}`}
                  style={{ minWidth: 80 }}
                >
                  <img
                    src={logo ?? logoImage}
                    alt={`Partner Company ${index + 1}`}
                    className="h-16 w-auto md:h-20 object-contain"
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
