// client/src/components/HeroSection.tsx
import { Button } from "@/components/ui/button";
import heroBackground from "@assets/generated_images/Global_network_hero_background_3fc03fc7.png";
import logoImage from "@assets/WhatsApp_Image_2025-10-24_at_11.32.23_PM-removebg-preview_1761482028519.png";

import { Link } from "wouter";
import SocialMarquee from "@/components/SocialMarquee";

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
      />
      <div className="relative z-10 container max-w-5xl mx-auto px-4 py-24 text-center">
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-col items-center gap-3">
            <img src={logoImage} alt="Vita Talent Logo" className="w-40 h-40 md:w-48 md:h-48 object-contain" />

            {/* Socials under the logo: bigger marquee */}
            <div className="mt-4 w-full flex justify-center">
              <SocialMarquee speed={14} size={44} />
            </div>
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

          {/* Replaced Pricing button with Schedule CTA */}
          <div className="mt-4 flex justify-center w-full">
            <Button size="lg" className="text-base px-8" asChild>
              <Link href="/schedule">Schedule A Free Discovery Call</Link>
            </Button>
          </div>

          {/* NOTE: Trusted-by logos have been moved to the footer per your request */}
        </div>
      </div>
    </section>
  );
}
