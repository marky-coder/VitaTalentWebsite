import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ceoImage from "@assets/generated_images/Female_CEO_headshot_deae8d74.png";
import directorImage from "@assets/generated_images/Male_operations_director_headshot_33f96a7a.png";
import specialistImage from "@assets/generated_images/Female_talent_specialist_headshot_49c6b1a9.png";

const team = [
  {
    name: "Sarah Mitchell",
    role: "Chief Executive Officer",
    image: ceoImage,
    initials: "SM",
  },
  {
    name: "Marcus Johnson",
    role: "Director of Operations",
    image: directorImage,
    initials: "MJ",
  },
  {
    name: "Elena Rodriguez",
    role: "Lead Talent Acquisition Specialist",
    image: specialistImage,
    initials: "ER",
  },
];

export default function TeamSection() {
  return (
    <section className="py-24 bg-card" data-testid="section-team">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Meet the Team
          </h2>
          <p className="text-lg text-muted-foreground">
            Dedicated professionals committed to your success
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <Card key={index} className="p-6 text-center hover-elevate" data-testid={`team-member-${index}`}>
              <div className="flex flex-col items-center gap-4">
                <Avatar className="w-32 h-32">
                  <AvatarImage src={member.image} alt={member.name} />
                  <AvatarFallback className="text-2xl">{member.initials}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
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
