// client/src/components/TestimonialsSection.tsx
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Star, X } from "lucide-react";
import { SiTrustpilot, SiGoogle } from "react-icons/si";
import { useState, useEffect } from "react";

/**
 * Imported videos — exact filenames as uploaded to attached_assets / @assets
 * (If your build fails due to spaces, rename the files and update the imports.)
 */
import videoXimena from "@assets/WhatsApp Video 2025-11-25 at 10.45.54.mp4";
import videoHesham from "@assets/WhatsApp Video 2025-11-25 at 10.46.13.mp4";
import videoSherif from "@assets/WhatsApp Video 2025-11-25 at 10.47.09.mp4";

/* Client testimonial videos (Kevin & Sam) */
import videoKevin from "@assets/Kevin's Testimonial.mp4";
import videoSam from "@assets/Sam's Testimonial .mov";

/* New client testimonial video supplied earlier */
import videoNewClient from "@assets/4030993537cf451ca9872ad031c744b9-1764688585496.mp4";

/* Candidate videos you previously added */
import videoRuben from "@assets/Ruben.mp4";
import videoAshleyMark from "@assets/Ashley Mark.mp4";
import videoMary from "@assets/Mary.mp4";

/* NEW: the two files you just supplied (add these exact files to @assets / attached_assets) */
import videoDaniel from "@assets/Daniel Slobodyan - Land Creative Solutions.mp4";
import videoZach from "@assets/Zach Nahas - CEO of Clear Path Land.mp4";

/* NEW: the two candidates requested earlier */
import videoHadeer from "@assets/Hadeer Ezz.mp4";
import videoMohamed from "@assets/Mohamed Sobhy.mp4";

/* NEW: Nina Hadidi (uploaded) */
import videoNina from "@assets/Nina Hadidi - Acquisition Manager.mp4";

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

/* Client video testimonials (Kevin, Sam, Nick + Daniel + Zach) */
const clientVideoTestimonials = [
  {
    id: 1,
    name: "Kevin",
    role: "White Stone",
    src: videoKevin,
  },
  {
    id: 2,
    name: "Sam",
    role: "Private Realtor",
    src: videoSam,
  },
  {
    id: 3,
    name: "Nick Staley",
    role: "Land Growth Capital",
    src: videoNewClient,
  },
  {
    id: 4,
    name: "Daniel Slobodyan",
    role: "Land Creative Solutions",
    src: videoDaniel,
  },
  {
    id: 5,
    name: "Zach Nahas",
    role: "CEO of Clear Path Land",
    src: videoZach,
  },
];

/* Candidate video testimonials — existing + previous additions + NEW entries */
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
  {
    id: 4,
    name: "Ruben",
    role: "Sales Closer",
    src: videoRuben,
  },
  {
    id: 5,
    name: "Ashley Mark",
    role: "Appointment Setter",
    src: videoAshleyMark,
  },
  {
    id: 6,
    name: "Mary Jane",
    role: "Lead Manager",
    src: videoMary,
  },

  // NEW two candidates requested:
  {
    id: 7,
    name: "Hadeer Ezz",
    role: "Acquisition Manager",
    src: videoHadeer,
  },
  {
    id: 8,
    name: "Mohamed Sobhy",
    role: "Land Acquisition Manager",
    src: videoMohamed,
  },

  // NEW: Nina Hadidi - Acquisition Manager
  {
    id: 9,
    name: "Nina Hadidi",
    role: "Acquisition Manager",
    src: videoNina,
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

/** Utility: chunk an array into rows of size n */
function chunkRows<T>(arr: T[], size: number) {
  const rows: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    rows.push(arr.slice(i, i + size));
  }
  return rows;
}

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

  // Prepare rows of 3; we'll render full rows normally,
  // and center any final row with 2 items so it visually aligns with the 3-up rows.
  const rows = chunkRows(candidateVideoTestimonials, 3);

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

          {/* Client video grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
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

            {/* Candidate video rows — render row-by-row so we can center a 2-up final row */}
            <div className="mb-8 space-y-6">
              {rows.map((row, rowIndex) => {
                if (row.length === 3) {
                  // full row with 3 items
                  return (
                    <div key={rowIndex} className="grid md:grid-cols-3 gap-6">
                      {row.map((video) => (
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
                  );
                }

                // row length 1 or 2 — center them and size to match a row of 3
                return (
                  <div key={rowIndex} className="flex justify-center">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl">
                      {row.map((video) => (
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
                  </div>
                );
              })}
            </div>

            {/* Written candidate testimonials */}
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

            <Button variant="outline" asChild data-testid="link-google">
              <a href={googleReviewUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <SiGoogle className="w-5 h-5" />
                <span>Google</span>
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Video modal / overlay */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
          <div className="relative w-full max-w-3xl bg-transparent">
            <button
              onClick={() => setActiveVideo(null)}
              aria-label="Close video"
              className="absolute -top-8 right-0 text-white bg-transparent p-2 rounded-md hover:opacity-80"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="aspect-video bg-black rounded-md overflow-hidden">
              <video src={activeVideo} controls autoPlay style={{ width: "100%", height: "100%" }} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
