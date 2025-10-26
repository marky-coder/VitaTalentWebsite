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
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Our Process
          </h2>
          <p className="text-lg font-medium text-muted-foreground max-w-2xl mx-auto">
            A proven approach to connecting exceptional talent with outstanding opportunities
          </p>
        </div>
        
        <div className="hidden md:grid grid-cols-7 gap-4">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              <Card className="p-6 text-center h-full hover-elevate bg-gradient-to-br from-card to-primary/10 border-primary/20" data-testid={`card-step-${step.number}`}>
                <div className="flex flex-col items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                    {step.number}
                  </div>
                  <h3 className="font-bold text-foreground text-sm leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed font-medium">
                    {step.description}
                  </p>
                </div>
              </Card>
              {index < steps.length - 1 && (
                <div className="absolute top-1/3 -right-3 w-6 h-0.5 bg-border hidden lg:block"></div>
              )}
            </div>
          ))}
        </div>
        
        <div className="md:hidden space-y-4">
          {steps.map((step) => (
            <Card key={step.number} className="p-6 bg-gradient-to-br from-card to-primary/10 border-primary/20" data-testid={`card-step-mobile-${step.number}`}>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xs">
                      {step.number}
                    </div>
                    <h3 className="font-bold text-foreground">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-sm font-medium text-muted-foreground">
                    {step.description}
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
