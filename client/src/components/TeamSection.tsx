import { Card } from "@/components/ui/card";
import nathanielImage from "@assets/Nathan.jpeg";
import mohamedAymanImage from "@assets/Mohamed Ayman.jpeg";
import moAlaaImage from "@assets/Mo Alaa.jpeg";
import hanaAboubakrImage from "@assets/hana-aboubakr-photo.png";
import ivyBakerImage from "@assets/ivy-baker-photo.png";
import markAnthonyImage from "@assets/Mark Anthony.jpeg";
import linaHossamImage from "@assets/lina-hossam-photo.png";

const team = [
  {
    name: "Nathaniel Brimlow",
    role: "CEO",
    initials: "NB",
    image: nathanielImage,
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
  },
  {
    name: "Hannah Alaa",
    role: "Social Media Manager",
    initials: "HA",
    image: hanaAboubakrImage,
  },
  {
    name: "Mark Anthony",
    role: "Automation Expert",
    initials: "MA",
    image: markAnthonyImage,
  },
  {
    name: "Ivy Baker",
    role: "Recruiter",
    initials: "IB",
    image: ivyBakerImage,
  },
  {
    name: "Lina Hossam",
    role: "Recruiter",
    initials: "LH",
    image: linaHossamImage,
  },
];

export default function TeamSection() {
  return (
    <section
      className="py-24 bg-gradient-to-bl from-primary/15 via-primary/10 to-background"
      data-testid="section-team"
    >
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Meet the Team
          </h2>
          <p className="text-lg font-medium text-muted-foreground">
            Dedicated professionals committed to your success
          </p>
        </div>

        <div className="grid grid-cols-7 gap-7 max-w-9xl mx-auto">
          {team.map((member, index) => (
            <Card
              key={index}
              className="group overflow-hidden bg-gradient-to-br from-card via-card to-primary/8 border border-primary/20 shadow-md hover:shadow-2xl hover:border-primary/40 transition-all duration-500 hover:-translate-y-1"
              data-testid={`team-member-${index}`}
            >
              <div className="flex flex-col h-full">
                <div className="relative w-full aspect-square overflow-hidden bg-gradient-to-br from-muted to-muted/50">
                  {member.image ? (
                    <>
                      <img
                        src={member.image}
                        alt={member.name}
                        className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                          member.name === "Ivy Baker"
                            ? "object-center scale-100"
                            : member.name === "Mo Alaa"
                            ? "object-top scale-110"
                            : "object-center scale-125"
                        }`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute inset-0 ring-2 ring-primary/0 group-hover:ring-primary/30 transition-all duration-500 rounded-t-xl" />
                    </>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5">
                      <span className="text-4xl font-bold text-primary/60">
                        {member.initials}
                      </span>
                    </div>
                  )}
                </div>
                <div className="flex-1 p-5 text-center bg-gradient-to-b from-card to-primary/5 border-t border-primary/10 flex flex-col justify-center">
                  <h3 className="font-semibold text-base text-foreground tracking-tight group-hover:text-primary transition-colors duration-300 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium text-muted-foreground">
                    {member.role}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
