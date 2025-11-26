// client/src/components/TestimonialsSection.tsx
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Star, X } from "lucide-react";
import { SiTrustpilot, SiGoogle } from "react-icons/si";
import { useState, useEffect } from "react";

/**
 * Imported videos — exact filenames as uploaded to attached_assets/
 */
import videoXimena from "@assets/WhatsApp Video 2025-11-25 at 10.45.54.mp4";
import videoHesham from "@assets/WhatsApp Video 2025-11-25 at 10.46.13.mp4";
import videoSherif from "@assets/WhatsApp Video 2025-11-25 at 10.47.09.mp4";

/* Client testimonial videos (Kevin & Sam) */
import videoKevin from "@assets/Kevin's Testimonial.mp4";
import videoSam from "@assets/Sam's Testimonial .mov";

/**
 * VideoThumbnail: captures a frame from the provided video URL on the client,
 * and returns an <img> with that data URL. Falls back to a subtle placeholder.
 */
function VideoThumbnail({ src, alt }: { src: string; alt?: string }) {
  const [thumb, setThumb] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let cancelled = false;
    let videoEl: HTMLVideoElement | null = document.createElement("video");
    videoEl.crossOrigin = "anonymous";
    videoEl.muted = true;
    videoEl.playsInline = true;
    videoEl.preload = "metadata";

    const cleanup = () => {
      if (videoEl) {
        try {
          videoEl.pause();
          videoEl.src = "";
          videoEl.load();
        } catch {
          /* ignore */
        }
        videoEl = null;
      }
    };

    const capture = () => {
      if (!videoEl) return;
      try {
        const vw = videoEl.videoWidth || 640;
        const vh = videoEl.videoHeight || 360;
        const maxW = 1200;
        let w = vw;
        let h = vh;
        if (w > maxW) {
          h = Math.round((maxW / w) * h);
          w = maxW;
        }
        const canvas = document.createElement("canvas");
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext("2d");
        if (!ctx) throw new Error("No canvas context");
        ctx.drawImage(videoEl as HTMLVideoElement, 0, 0, w, h);
        const data = canvas.toDataURL("image/jpeg", 0.78);
        if (!cancelled) {
          setThumb(data);
          setLoading(false);
        }
      } catch {
        if (!cancelled) {
          setLoading(false);
          setThumb(null);
        }
      }
    };

    const handleLoaded = () => {
      if (!videoEl) return;
      try {
        const seekTime = Math.min(0.5, Math.max(0.0, (videoEl.duration || 0) / 10));
        const onSeeked = () => {
          capture();
          videoEl && videoEl.removeEventListener("seeked", onSeeked);
        };
        videoEl.addEventListener("seeked", onSeeked);
        videoEl.currentTime = seekTime;
      } catch {
        capture();
      }
    };

    const fallbackTimer = window.setTimeout(() => {
      if (!cancelled && loading) {
        try {
          capture();
        } catch {
          setLoading(false);
        }
      }
    }, 2500);

    if (videoEl) {
      videoEl.addEventListener("loadeddata", handleLoaded, { once: true });
      videoEl.src = src;
      videoEl.load();
    }

    return () => {
      cancelled = true;
      clearTimeout(fallbackTimer);
      cleanup();
    };
  }, [src]);

  if (thumb) {
    return <img src={thumb} alt={alt ?? "video thumbnail"} className="w-full h-full object-cover" />;
  }

  return (
    <div className="w-full h-full flex items-center justify-center bg-muted text-muted-foreground">
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
          <Play className="w-6 h-6 ml-0.5" />
        </div>
      </div>
    </div>
  );
}

/* Client video testimonials (Kevin & Sam) */
const clientVideoTestimonials = [
  {
    id: 1,
    name: "Kevin",
    role: "Client",
    src: videoKevin,
  },
  {
    id: 2,
    name: "Sam",
    role: "Client",
    src: videoSam,
  },
];

/* Candidate video testimonials (WhatsApp videos moved here) */
const candidateVideoTestimonials = [
  {
    id: 1,
    name: "Ximena Jimenez",
    role: "Lead Manager",
    src: videoXimena,
  },
  {
    id: 2,
    name: "Sherif Daoud",
    role: "Acquisition Manager",
    src: videoSherif,
  },
  {
    id: 3,
    name: "Hesham Salama",
    role: "Acquisition Manager",
    src: videoHesham,
  },
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
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  // ESC to close
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveVideo(null);
    };
    if (activeVideo) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeVideo]);

  // prevent body scroll while modal open
  useEffect(() => {
    const prev = document.body.style.overflow;
    if (activeVideo) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [activeVideo]);

  // Google Reviews link (GBP)
  const googleReviewUrl = "https://g.page/r/CXjNZjj4Vu59EBM/review";

  return (
    <section className="py-24 bg-gradient-to-br from-primary/18 via-primary/10 to-background" data-testid="section-testimonials">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">What Our Clients & Candidates Say</h2>
          <p className="text-lg font-medium text-muted-foreground">Real stories from businesses and professionals we've helped</p>
        </div>

        {/* Client Testimonials */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Client Testimonials</h3>

          {/* Client video grid (two videos) */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {clientVideoTestimonials.map((video) => (
              <Card key={video.id} className="relative overflow-hidden group cursor-pointer hover-elevate" onClick={() => setActiveVideo(video.src)} data-testid={`client-video-testimonial-${video.id}`}>
                <div className="aspect-video bg-muted relative">
                  <VideoThumbnail src={video.src} alt={video.name} />
                  <div className="absolute inset-0 bg-background/60 flex items-center justify-center pointer-events-none">
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

          {/* Existing written client testimonials */}
          <div className="grid md:grid-cols-3 gap-6">
            {writtenTestimonials.clients.map((testimonial, index) => (
              <Card key={index} className="p-6 bg-gradient-to-br from-card to-primary/12 border-primary/20" data-testid={`client-testimonial-${index}`}>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-primary text-primary" />)}
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

        {/* Candidate Testimonials: videos first, then written testimonials */}
        <div className="space-y-12 mt-12">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Candidate Testimonials</h3>

            {/* Candidate video grid (three videos moved here) */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {candidateVideoTestimonials.map((video) => (
                <Card key={video.id} className="relative overflow-hidden group cursor-pointer hover-elevate" onClick={() => setActiveVideo(video.src)} data-testid={`candidate-video-testimonial-${video.id}`}>
                  <div className="aspect-video bg-muted relative">
                    <VideoThumbnail src={video.src} alt={video.name} />
                    <div className="absolute inset-0 bg-background/60 flex items-center justify-center pointer-events-none">
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

            {/* Written candidate testimonials (preserved below the videos) */}
            <div className="grid md:grid-cols-3 gap-6">
              {writtenTestimonials.candidates.map((testimonial, index) => (
                <Card key={index} className="p-6 bg-gradient-to-br from-card to-primary/12 border-primary/20" data-testid={`candidate-testimonial-${index}`}>
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-primary text-primary" />)}
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

        <div className="mt-12 text-center">
          <p className="text-base font-medium text-muted-foreground mb-4">Read more reviews on</p>
          <div className="flex items-center justify-center gap-6">
            <Button variant="outline" asChild data-testid="link-trustpilot">
              <a href="https://www.trustpilot.com/review/vitatalent.co" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <SiTrustpilot className="w-5 h-5" />
                <span>Trustpilot</span>
              </a>
            </Button>

            {/* Google Business Profile (GBP) review link */}
            <Button variant="outline" asChild data-testid="link-google-reviews">
              <a href={googleReviewUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <SiGoogle className="w-5 h-5" />
                <span>Google Reviews</span>
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Video modal overlay */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4" role="dialog" aria-modal="true" onClick={() => setActiveVideo(null)}>
          <div className="bg-background rounded-md max-w-4xl w-full overflow-hidden shadow-xl" onClick={(e) => e.stopPropagation()}>
            <div className="relative">
              <button aria-label="Close video" onClick={() => setActiveVideo(null)} className="absolute top-3 right-3 z-20 inline-flex items-center justify-center rounded-full bg-muted/80 hover:bg-muted p-2">
                <X className="w-5 h-5" />
              </button>
              <video src={activeVideo} controls preload="metadata" className="w-full h-auto bg-black" playsInline>
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
