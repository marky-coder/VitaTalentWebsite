import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Star } from "lucide-react";
import { SiGoogle, SiTrustpilot } from "react-icons/si";
import { useState, useEffect } from "react";

const videoTestimonials = [
  { id: 1, name: "Sarah Johnson", role: "CEO, TechCorp", type: "client", thumbnail: "https://placehold.co/400x300/1a5336/ffffff?text=Video+1" },
  { id: 2, name: "Michael Chen", role: "VP Engineering, DataFlow", type: "client", thumbnail: "https://placehold.co/400x300/1a5336/ffffff?text=Video+2" },
  { id: 3, name: "Emily Rodriguez", role: "HR Director, GlobalTech", type: "client", thumbnail: "https://placehold.co/400x300/1a5336/ffffff?text=Video+3" },
  { id: 4, name: "David Okonkwo", role: "Software Engineer", type: "candidate", thumbnail: "https://placehold.co/400x300/1a5336/ffffff?text=Video+4" },
  { id: 5, name: "Ana Silva", role: "Product Designer", type: "candidate", thumbnail: "https://placehold.co/400x300/1a5336/ffffff?text=Video+5" },
  { id: 6, name: "Raj Patel", role: "Data Scientist", type: "candidate", thumbnail: "https://placehold.co/400x300/1a5336/ffffff?text=Video+6" },
];

const writtenTestimonials = {
  clients: [
    { name: "James Wilson", role: "CTO, InnovateLabs", quote: "Vita Talent found us the perfect engineering team in just 3 weeks. Their process is thorough and professional." },
    { name: "Lisa Martinez", role: "Founder, StartupHub", quote: "The quality of candidates exceeded our expectations. They truly understand what we need." },
    { name: "Robert Kim", role: "Operations Manager, ScaleUp Inc", quote: "Working with Vita Talent has transformed how we approach global hiring. Exceptional service." },
  ],
  candidates: [
    { name: "Maria Santos", role: "UX Designer", quote: "Vita Talent helped me land my dream job. They supported me throughout the entire process." },
    { name: "Ahmed Hassan", role: "Backend Developer", quote: "Professional, caring, and genuinely invested in my success. Highly recommend!" },
    { name: "Sophie Dubois", role: "Marketing Manager", quote: "They matched me with a company that perfectly aligns with my values and career goals." },
  ],
};

export default function TestimonialsSection() {
  const [activeVideo, setActiveVideo] = useState<number | null>(null);

  useEffect(() => {
    // Load Trustpilot widget after component mounts
    if (window.Trustpilot) {
      window.Trustpilot.loadFromElement(document.getElementById('trustpilot-widget'), true);
    }
  }, []);

  return (
    <section className="py-24 bg-gradient-to-br from-primary/18 via-primary/10 to-background" data-testid="section-testimonials">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            What Our Clients & Candidates Say
          </h2>
          <p className="text-lg font-medium text-muted-foreground">
            Real stories from businesses and professionals we've helped
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {videoTestimonials.map((video) => (
            <Card 
              key={video.id} 
              className="relative overflow-hidden group cursor-pointer hover-elevate"
              onClick={() => setActiveVideo(video.id)}
              data-testid={`video-testimonial-${video.id}`}
            >
              <div className="aspect-video bg-muted relative">
                <img src={video.thumbnail} alt={video.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-background/60 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                    <Play className="w-8 h-8 ml-1" fill="currentColor" />
                  </div>
                </div>
              </div>
              <div className="p-4">
                <p className="font-bold text-foreground">{video.name}</p>
                <p className="text-sm font-medium text-muted-foreground">{video.role}</p>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="space-y-12">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Client Testimonials</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {writtenTestimonials.clients.map((testimonial, index) => (
                <Card key={index} className="p-6 bg-gradient-to-br from-card to-primary/12 border-primary/20" data-testid={`client-testimonial-${index}`}>
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-base font-medium text-foreground mb-4 leading-relaxed">"{testimonial.quote}"</p>
                  <div className="border-t border-border pt-4">
                    <p className="font-bold text-foreground text-sm">{testimonial.name}</p>
                    <p className="text-sm font-medium text-muted-foreground">{testimonial.role}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Candidate Testimonials</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {writtenTestimonials.candidates.map((testimonial, index) => (
                <Card key={index} className="p-6 bg-gradient-to-br from-card to-primary/12 border-primary/20" data-testid={`candidate-testimonial-${index}`}>
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-base font-medium text-foreground mb-4 leading-relaxed">"{testimonial.quote}"</p>
                  <div className="border-t border-border pt-4">
                    <p className="font-bold text-foreground text-sm">{testimonial.name}</p>
                    <p className="text-sm font-medium text-muted-foreground">{testimonial.role}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
        
        {/* Trustpilot Review Collector Widget */}
        <div className="mt-12 flex justify-center">
          <div 
            id="trustpilot-widget"
            className="trustpilot-widget" 
            data-locale="en-US" 
            data-template-id="56278e9abfbbba0bdcd568bc" 
            data-businessunit-id="691ca8b32408924b2b23f79f" 
            data-style-height="52px" 
            data-style-width="100%" 
            data-token="ba538c5f-fb1d-4e8d-82db-b65274099e34"
          >
            <a href="https://www.trustpilot.com/review/vitatalent.co" target="_blank" rel="noopener noreferrer">
              Trustpilot
            </a>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-base font-medium text-muted-foreground mb-4">Read more reviews on</p>
          <div className="flex items-center justify-center gap-6">
            <Button variant="outline" asChild data-testid="link-google-reviews">
              <a href="https://www.google.com/search?q=Vita+Talent+reviews" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <SiGoogle className="w-5 h-5" />
                <span>Google Reviews</span>
              </a>
            </Button>
            <Button variant="outline" asChild data-testid="link-trustpilot">
              <a href="https://www.trustpilot.com/review/vitatalent.co" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <SiTrustpilot className="w-5 h-5" />
                <span>Trustpilot</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
