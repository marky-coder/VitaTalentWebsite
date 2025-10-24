import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Star } from "lucide-react";
import { SiGoogle, SiTrustpilot } from "react-icons/si";
import { useState } from "react";

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

  return (
    <section className="py-24 bg-card" data-testid="section-testimonials">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            What Our Clients & Candidates Say
          </h2>
          <p className="text-lg text-muted-foreground">
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
                <p className="font-semibold text-foreground">{video.name}</p>
                <p className="text-sm text-muted-foreground">{video.role}</p>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="space-y-12">
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">Client Testimonials</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {writtenTestimonials.clients.map((testimonial, index) => (
                <Card key={index} className="p-6" data-testid={`client-testimonial-${index}`}>
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-foreground mb-4 leading-relaxed">"{testimonial.quote}"</p>
                  <div className="border-t border-border pt-4">
                    <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">Candidate Testimonials</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {writtenTestimonials.candidates.map((testimonial, index) => (
                <Card key={index} className="p-6" data-testid={`candidate-testimonial-${index}`}>
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-foreground mb-4 leading-relaxed">"{testimonial.quote}"</p>
                  <div className="border-t border-border pt-4">
                    <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">Read more reviews on</p>
          <div className="flex items-center justify-center gap-6">
            <Button variant="outline" asChild data-testid="link-google-reviews">
              <a href="https://www.google.com/search?q=reviews" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <SiGoogle className="w-5 h-5" />
                <span>Google Reviews</span>
              </a>
            </Button>
            <Button variant="outline" asChild data-testid="link-trustpilot">
              <a href="https://www.trustpilot.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
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
