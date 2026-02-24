// client/src/components/HeroSection.tsx
import { Button } from "@/components/ui/button";
import heroBackground from "@assets/generated_images/Global_network_hero_background_3fc03fc7.png";
import logoImage from "@assets/WhatsApp_Image_2025-10-24_at_11.32.23_PM-removebg-preview_1761482028519.png";

import partner1 from "@assets/IMG_6617.jpg";
import partner2 from "@assets/IMG_6614.png";
import partner3 from "@assets/IMG_6615.png";
import partner4 from "@assets/IMG_6616.png";
import partner5 from "@assets/IMG_6618.png";
import partner6 from "@assets/Land Growth Capital.png";

import { Link } from "wouter";
import ClientLogoMarquee from "@/components/ClientLogoMarquee";

interface HeroSectionProps {
  onHireTalent: () => void;
  onJoinAsCandidate: () => void;
}

export default function HeroSection({ onHireTalent, onJoinAsCandidate }: HeroSectionProps) {
  const partnerLogos: string[] = [
    partner1,
    partner2,
    partner6,
    partner5,
    partner3,
    partner4,
  ];

  // Utility classes used for the "jump" animation and motion-reduce support:
  const jumpClasses =
    "transform transition-transform duration-200 hover:-translate-y-2 active:translate-y-0 motion-reduce:transform-none motion-reduce:transition-none";

  const greenButtonBase =
    "bg-primary text-primary-foreground border border-primary-border " + jumpClasses + " focus-visible:ring-2 focus-visible:ring-primary/40";

  // Social anchors: neutral gray background (original look) + jump animation
  const socialNeutralBase =
    "w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-md bg-gray-100 hover:bg-primary/10 transition " +
    jumpClasses +
    " focus-visible:ring-2 focus-visible:ring-primary/30";

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
              // force green filled button + jump animation
              className={`text-base px-8 ${greenButtonBase}`}
            >
              Hire Talent
            </Button>

            <Button
              size="lg"
              onClick={onJoinAsCandidate}
              data-testid="button-join-candidate"
              // make this also a green filled button (previously outline)
              className={`text-base px-8 ${greenButtonBase}`}
            >
              Join as Candidate
            </Button>
          </div>

          {/* Schedule CTA */}
          <div className="mt-4 flex justify-center w-full">
            <Button size="lg" className={`text-base px-8 ${greenButtonBase}`} asChild>
              <Link href="/schedule">Schedule A Free Discovery Call</Link>
            </Button>
          </div>

          {/* Trusted by logos (kept in hero) */}
          <div className="mt-16 w-full">
            <p className="text-base font-medium text-muted-foreground mb-8">
              Trusted by leading companies worldwide
            </p>

            <ClientLogoMarquee
              logos={partnerLogos.map((src, idx) => ({ src, alt: `Partner ${idx + 1}` }))}
              speed={24}
              className="mx-auto"
            />

            {/* --- Static socials (no marquee), placed directly under the trusted logos --- */}
            <div className="mt-6 flex justify-center items-center gap-6" aria-label="VitaTalent social links">
              <a
                href="https://www.facebook.com/profile.php?id=61582724201072"
                target="_blank"
                rel="noopener noreferrer"
                title="Facebook"
                aria-label="VitaTalent Facebook"
                className={socialNeutralBase}
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-7 md:h-7 text-foreground" aria-hidden="true" focusable="false">
                  <path d="M22 12C22 6.477 17.523 2 12 2S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.99H7.898v-2.888h2.54V9.845c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.888h-2.33v6.99C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>

              <a
                href="https://www.instagram.com/vitatalent_"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
                aria-label="VitaTalent Instagram"
                className={socialNeutralBase}
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-7 md:h-7 text-foreground" aria-hidden="true" focusable="false">
                  <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 6.1A4.9 4.9 0 1 0 16.9 13 4.9 4.9 0 0 0 12 8.1zm5.2-2.3a1.1 1.1 0 1 0 1.1 1.1 1.1 1.1 0 0 0-1.1-1.1zM12 15.3A3.3 3.3 0 1 1 15.3 12 3.3 3.3 0 0 1 12 15.3z" />
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/company/vita-talent"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                aria-label="VitaTalent LinkedIn"
                className={socialNeutralBase}
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-7 md:h-7 text-foreground" aria-hidden="true" focusable="false">
                  <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.5 18H6v-8h2.5v8zM7.25 9.5a1.4 1.4 0 1 1 0-2.8 1.4 1.4 0 0 1 0 2.8zM18 18h-2.5v-4.2c0-1-0.4-1.7-1.4-1.7-0.8 0-1.2.5-1.4 1v4.9H10.5v-8H13v1.1c0.3-0.6 1-1.5 2.7-1.5 2 0 3.5 1.3 3.5 4.2V18z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
