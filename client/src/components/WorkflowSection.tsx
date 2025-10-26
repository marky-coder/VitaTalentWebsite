import { Users, Search, CheckCircle, HandshakeIcon, HeadphonesIcon, RefreshCw, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";

const steps = [
  {
    number: 1,
    icon: Users,
    title: "Understanding Client Needs",
    description: "We dive deep to understand your unique requirements and company culture.",
  },
  {
    number: 2,
    icon: Search,
    title: "Sourcing Top Candidates Globally",
    description: "We tap into our worldwide network to find the best talent across continents.",
  },
  {
    number: 3,
    icon: CheckCircle,
    title: "Screening and Vetting",
    description: "Rigorous evaluation with AI interviews for tailored questions related to the role ensures only the most qualified candidates move forward.",
  },
  {
    number: 4,
    icon: HandshakeIcon,
    title: "Matching and Onboarding",
    description: "Seamless integration of the right talent into your organization.",
  },
  {
    number: 5,
    icon: HeadphonesIcon,
    title: "Ongoing Support",
    description: "Continuous support for both clients and candidates ensures long-term success.",
  },
  {
    number: 6,
    icon: RefreshCw,
    title: "Replacement Process",
    description: "We cover you for 30 days with our replacement guarantee.",
  },
  {
    number: 7,
    icon: Shield,
    title: "Insurance Coverage",
    description: "Subscribe to our insurance and gain unlimited replacement policy.",
  },
];

export default function WorkflowSection() {
  return (
    <section className="py-24 bg-gradient-to-bl from-primary/12 via-background to-primary/8" data-testid="section-workflow">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Our Process
          </h2>
          <p className="text-lg font-medium text-muted-foreground max-w-2xl mx-auto">
            A proven approach to connecting exceptional talent with outstanding opportunities
          </p>
        </div>
        
        {/* Desktop: Alternating Timeline Layout */}
        <div className="hidden md:block relative">
          {/* Central vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/20 via-primary/40 to-primary/20 -translate-x-1/2" />
          
          <div className="space-y-16">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={step.number} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl shadow-lg border-4 border-background">
                      {step.number}
                    </div>
                  </div>
                  
                  {/* Connecting line to card */}
                  <div className={`absolute top-1/2 w-12 h-0.5 bg-primary/30 ${isEven ? 'left-1/2 ml-7' : 'right-1/2 mr-7'}`} />
                  
                  {/* Card */}
                  <div className={`flex ${isEven ? 'justify-start' : 'justify-end'}`}>
                    <Card 
                      className="w-[45%] p-6 hover-elevate bg-gradient-to-br from-card to-primary/10 border-primary/20"
                      data-testid={`card-step-${step.number}`}
                    >
                      <div className={`flex gap-4 ${isEven ? 'flex-row' : 'flex-row-reverse'}`}>
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                            <step.icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
                          </div>
                        </div>
                        <div className={`flex-1 ${isEven ? 'text-left' : 'text-right'}`}>
                          <h3 className="font-bold text-foreground text-lg mb-2">
                            {step.title}
                          </h3>
                          <p className="text-sm font-medium text-muted-foreground leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Mobile: Vertical Timeline */}
        <div className="md:hidden relative pl-8">
          {/* Left vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary/40 to-primary/20" />
          
          <div className="space-y-8">
            {steps.map((step) => (
              <div key={step.number} className="relative">
                {/* Timeline dot */}
                <div className="absolute -left-[1.65rem] top-4">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm shadow-lg border-2 border-background">
                    {step.number}
                  </div>
                </div>
                
                <Card 
                  className="p-5 bg-gradient-to-br from-card to-primary/10 border-primary/20"
                  data-testid={`card-step-mobile-${step.number}`}
                >
                  <div className="flex gap-3">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                        <step.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-foreground mb-1">
                        {step.title}
                      </h3>
                      <p className="text-sm font-medium text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
