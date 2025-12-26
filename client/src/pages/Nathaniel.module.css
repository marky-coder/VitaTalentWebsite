// client/src/components/TeamSection.tsx
import { Card } from "@/components/ui/card";
import nathanielImage from "@assets/Nathan.jpeg";
import mohamedAymanImage from "@assets/Mohamed Ayman.jpeg";
import moAlaaImage from "@assets/Mo Alaa.jpeg";
import hanaAboubakrImage from "@assets/hana-aboubakr-photo.png";
import ivyBakerImage from "@assets/ivy-baker-photo.png";
import markAnthonyImage from "@assets/Mark Anthony.png";
import linaHossamImage from "@assets/lina-hossam-photo.png";

/* Import the new CSS module for Nathaniel neon */
import neonStyles from "./NathanielNeon.module.css";

type TeamMember = {
  name: string;
  role: string;
  initials: string;
  image?: string;
  imageScale?: string; // extra per-person image tuning
};

const team: TeamMember[] = [
  {
    name: "Nathaniel Brimlow",
    role: "Founder/CEO",
    initials: "NB",
    image: nathanielImage,
    // Zoom in a bit more and pull the image up slightly
    imageScale: "scale-[1.6] -translate-y-1 object-top",
  },
  {
    name: "Mohamed Ayman",
    role: "President",
    initials: "MA",
    image: mohamedAymanImage,
  },
  {
    name: "Mo Alaa",
    role: "COO",
    initials: "MA",
    image: moAlaaImage,
    imageScale: "scale-125 object-top",
  },
  {
    name: "Hannah Alaa",
    role: "Social Media Manager",
    initials: "HA",
    image: hanaAboubakrImage,
    imageScale: "scale-125 object-center",
  },
  {
    name: "Mark Anthony",
    role: "Automation Expert",
    initials: "MA",
    image: markAnthonyImage,
    imageScale: "scale-[1.2] object-center",
  },
  {
    name: "Ivy Baker",
    role: "Recruiter",
    initials: "IB",
    image: ivyBakerImage,
    imageScale: "scale-100 object-center",
  },
  {
    name: "Lina Hossam",
    role: "Recruiter",
    initials: "LH",
    image: linaHossamImage,
    imageScale: "scale-125 object-center",
  },
];

export default function TeamSection() {
  return (
    <section
      className="py-24 bg-gradient-to-bl from-primary/15 via-primary/10 to-background"
      data-testid="section-team"
    >
      <div className="container max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Meet the Team
          </h2>
          <p className="text-lg font-medium text-muted-foreground">
            Dedicated professionals committed to your success
          </p>
        </div>

        {/* Cards (flex so last row is centered) */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 max-w-5xl mx-auto">
          {team.map((member, index) => {
            const isNathaniel = member.name === "Nathaniel Brimlow";
            /* If this is Nathaniel, add neon class from module on top of existing classes */
            const extraClass = isNathaniel ? neonStyles.neonCard : "";

            /* FOOTER: for Nathaniel make the footer transparent and keep text above the neon */
            const footerClass = isNathaniel
              ? "flex-1 p-5 text-center bg-transparent border-t-0 relative z-20 flex flex-col justify-center"
              : "flex-1 p-5 text-center bg-gradient-to-b from-card to-primary/5 border-t border-primary/10 flex flex-col justify-center";

            return (
              <Card
                key={index}
                className={`${extraClass} group w-full sm:w-1/2 md:w-1/3 lg:w-1/4 max-w-xs overflow-hidden bg-gradient-to-br from-card via-card to-primary/8 border border-primary/20 shadow-md hover:shadow-2xl hover:border-primary/40 transition-all duration-500 hover:-translate-y-1`}
                data-testid={`team-member-${index}`}
              >
                <div className="flex flex-col h-full">
                  {/* If Nathaniel, add two small neon corner spans */}
                  {isNathaniel && <span className={neonStyles.arcBlue} aria-hidden="true" />}
                  {isNathaniel && <span className={neonStyles.arcPink} aria-hidden="true" />}

                  {/* Image */}
                  <div className="relative w-full aspect-[3/4] overflow-hidden bg-gradient-to-br from-muted to-muted/50">
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                          member.imageScale ?? "scale-125 object-center"
                        }`}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5">
                        <span className="text-4xl font-bold text-primary/60">
                          {member.initials}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Text */}
                  <div className={footerClass}>
                    <h3 className="font-semibold text-base text-foreground tracking-tight group-hover:text-primary transition-colors duration-300 mb-1">
                      <span className={isNathaniel ? "relative z-30" : ""}>
                        {member.name}
                      </span>
                    </h3>
                    <p className="text-sm font-medium text-muted-foreground">
                      <span className={isNathaniel ? neonStyles.neonCardFooterText : ""}>
                        {member.role}
                      </span>
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
