// client/src/components/TestimonialsSection.tsx
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Star, X } from "lucide-react";
import { SiTrustpilot } from "react-icons/si";
import { useState } from "react";

/**
 * Imported videos — match the exact filenames you uploaded to attached_assets/
 * Note: imports reference the uploaded WhatsApp filenames (spaces included).
 */
import videoXimena from "@assets/WhatsApp Video 2025-11-25 at 10.45.54.mp4";
import videoHesham from "@assets/WhatsApp Video 2025-11-25 at 10.46.13.mp4";
import videoSherif from "@assets/WhatsApp Video 2025-11-25 at 10.47.09.mp4";

const videoTestimonials = [
  {
    id: 1,
    name: "Ximena Jimenez",
    role: "Lead Manager",
    type: "client",
    thumbnail: "https://placehold.co/400x300/1a5336/ffffff?text=Ximena+Jimenez",
    src: videoXimena,
  },
  {
    id: 2,
    name: "Sherif Daoud",
    role: "Acquisition Manager",
    type: "client",
    thumbnail: "https://placehold.co/400x300/1a5336/ffffff?text=Sherif+Daoud",
    src: videoSherif,
  },
  {
    id: 3,
    name: "Hesham Salama",
    role: "Acquisition Manager",
    type: "client",
    thumbnail: "https://placehold.co/400x300/1a5336/ffffff?text=Hesham+Salama",
    src: videoHesham,
  },
];

const writtenTestimonials = {
  clients: [
    {
      name: "James Wilson",
      role: "CTO, InnovateLabs",
      quote:
        "Vita Talent found us the perfect engineering team in just 3 weeks. Their process is thorough and professional.",
    },
    {
      name: "Lisa Martinez",
      role: "Founder, StartupHub",
      quote:
        "The quality of candidates exceeded our expectations. They truly understand what we need.",
    },
    {
      name: "Robert Kim",
      role: "Operations Manager, ScaleUp Inc",
      quote:
        "Working with Vita Talent has transformed how we approach global hiring. Exceptional service.",
    },
  ],
  candidates: [
    {
      name: "Maria Santos",
      role: "UX Designer",
      quote:
        "Vita Talent helped me land my dream job. They supported me throughout the entire process.",
    },
    {
      name: "Ahmed Hassan",
      role: "Backend Developer",
      quote:
        "Professional, caring, and genuinely invested in my success. Highly recommend!",
    },
    {
      name: "Sophie Dubois",
      role: "Marketing Manager",
      quote:
        "They matched me with a company that perfectly aligns with my values and career goals.",
    },
  ],
};

export default function TestimonialsSection() {
  // activeVideo stores the src string of the currently playing video
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section
      className="py-24 bg-gradient-to-br from-primary/18 via-primary/10 to-background"
      data-testid="section-testimonials"
    >
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            What Our Clients & Candidates Say
          </h2>
          <p className="text-lg font-medium text-muted-foreground">
            Real stories from businesses and professionals we've helped
          </p>
        </div>

        {/* Video testimonial cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {videoTestimonials.map((video) => (
            <Card
              key={video.id}
              className="relative overflow-hidden group cursor-pointer hover-elevate"
              onClick={() => setActiveVideo(video.src)}
              data-testid={`video-testimonial-${video.id}`}
            >
              <div className="aspect-video bg-muted relative">
                <img
                  src={video.thumbnail}
                  alt={video.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-background/60 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                    <Play className="w-8 h-8 ml-1" fill="currentColor" />
                  </div>
                </div>
              </div>

              <div className="p-4">
                <p className="font-bold text-foreground">{video.name}</p>
                <p className="text-sm font-medium text-muted-foreground">
                  {video.role}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Written testimonials (unchanged) */}
        <div className="space-y-12">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              Client Testimonials
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {writtenTestimonials.clients.map((testimonial, index) => (
                <Card
                  key={index}
                  className="p-6 bg-gradient-to-br from-card to-primary/12 border-primary/20"
                  data-testid={`client-testimonial-${index}`}
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-base font-medium text-foreground mb-4 leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="border-t border-border pt-4">
                    <p className="font-bold text-foreground text-sm">
                      {testimonial.name}
                    </p>
                    <p className="text-sm font-medium text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              Candidate Testimonials
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {writtenTestimonials.candidates.map((testimonial, index) => (
                <Card
                  key={index}
                  className="p-6 bg-gradient-to-br from-card to-primary/12 border-primary/20"
                  data-testid={`candidate-testimonial-${index}`}
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-base font-medium text-foreground mb-4 leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="border-t border-border pt-4">
                    <p className="font-bold text-foreground text-sm">
                      {testimonial.name}
                    </p>
                    <p className="text-sm font-medium text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-base font-medium text-muted-foreground mb-4">
            Read more reviews on
          </p>
          <div className="flex items-center justify-center gap-6">
            <Button variant="outline" asChild data-testid="link-trustpilot">
              <a
                href="https://www.trustpilot.com/review/vitatalent.co"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <SiTrustpilot className="w-5 h-5" />
                <span>Trustpilot</span>
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Video modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-background rounded-md max-w-4xl w-full overflow-hidden shadow-xl">
            <div className="relative">
              <button
                aria-label="Close video"
                onClick={() => setActiveVideo(null)}
                className="absolute top-3 right-3 z-10 inline-flex items-center justify-center rounded-full bg-muted/80 hover:bg-muted p-2"
              >
                <X className="w-5 h-5" />
              </button>

              <video
                src={activeVideo}
                controls
                preload="metadata"
                className="w-full h-auto bg-black"
                playsInline
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
