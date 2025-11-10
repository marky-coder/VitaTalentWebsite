import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import nathanielImage from "@assets/Nathan.jpeg";
import mohamedAymanImage from "@assets/Mohamed Ayman.jpeg";
import moAlaaImage from "@assets/Mo Alaa.jpeg";
import hanaAboubakrImage from "@assets/hana-aboubakr-photo.png";
import ivyBakerImage from "@assets/ivy-baker-photo.png";
import markAnthonyImage from "@assets/Mark Anthony.jpeg";

const team = [
  {
    name: "Nathaniel Brimlow",
    role: "CEO",
    initials: "NB",
    image: nathanielImage,
  },
  {
    name: "Mohamed Ayman",
    role: "Sales Manager",
    initials: "MA",
    image: mohamedAymanImage,
  },
  {
    name: "Mo Alaa",
    role: "Head of Recruitment",
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
    role: "Operation Manager",
    initials: "IB",
    image: ivyBakerImage,
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

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <Card
              key={index}
              className="p-8 text-center hover-elevate bg-gradient-to-br from-card to-primary/12 border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300"
              data-testid={`team-member-${index}`}
            >
              <div className="flex flex-col items-center gap-6">
                <Avatar className="w-48 h-48 ring-4 ring-primary/20">
                  {member.image && (
                    <AvatarImage
                      src={member.image}
                      alt={member.name}
                      className={`object-cover ${
                        member.name === "Ivy Baker"
                          ? "scale-60 object-center "
                          : member.name === "Mo Alaa"
                          ? "scale-125 object-top pt-3"
                          : "scale-125 object-center"
                      }`}
                    />
                  )}
                  <AvatarFallback className="text-4xl">
                    {member.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-bold text-xl text-foreground mb-2">
                    {member.name}
                  </h3>
                  <p className="text-base font-medium text-muted-foreground">
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
