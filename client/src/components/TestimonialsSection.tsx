// client/src/components/TestimonialsSection.tsx
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Star, X, ChevronLeft, ChevronRight } from "lucide-react";
import { SiTrustpilot, SiGoogle } from "react-icons/si";
import { useState, useEffect, useRef, useCallback, useLayoutEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

/* keep your existing video imports (paths unchanged) */
import videoXimena from "@assets/WhatsApp Video 2025-11-25 at 10.45.54.mp4";
import videoHesham from "@assets/WhatsApp Video 2025-11-25 at 10.46.13.mp4";
import videoSherif from "@assets/WhatsApp Video 2025-11-25 at 10.47.09.mp4";
import videoKevin from "@assets/Kevin's Testimonial.mp4";
import videoSam from "@assets/Sam's Testimonial .mov";
import videoNewClient from "@assets/4030993537cf451ca9872ad031c744b9-1764688585496.mp4";
import videoRuben from "@assets/Ruben.mp4";
import videoAshleyMark from "@assets/Ashley Mark.mp4";
import videoMary from "@assets/Mary.mp4";
import videoDaniel from "@assets/Daniel Slobodyan - Land Creative Solutions.mp4";
import videoZach from "@assets/Zach Nahas - CEO of Clear Path Land.mp4";
import videoHadeer from "@assets/Hadeer Ezz.mp4";
import videoMohamed from "@assets/Mohamed Sobhy.mp4";
import videoNina from "@assets/Nina Hadidi - Acquisition Manager.mp4";
import videoJoshPierce from "@assets/Josh Pierce - CEO of Higher Ground Land.mp4";

/** VideoThumbnail (unchanged implementation) */
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

/* Data arrays (6 client videos) */
const clientVideoTestimonials = [
  { id: 1, name: "Kevin", role: "White Stone", src: videoKevin },
  { id: 2, name: "Sam", role: "Private Realtor", src: videoSam },
  { id: 3, name: "Nick Staley", role: "Land Growth Capital", src: videoNewClient },
  { id: 4, name: "Daniel Slobodyan", role: "Land Creative Solutions", src: videoDaniel },
  { id: 5, name: "Zach Nahas", role: "CEO of Clear Path Land", src: videoZach },
  { id: 6, name: "Josh Pierce", role: "CEO of Higher Ground Land", src: videoJoshPierce },
];

/* Candidate videos and written testimonials are unchanged */
const candidateVideoTestimonials = [
  { id: 1, name: "Ximena Jimenez", role: "Lead Manager", src: videoXimena },
  { id: 2, name: "Sherif Daoud", role: "Acquisition Manager", src: videoSherif },
  { id: 3, name: "Hesham Salama", role: "Acquisition Manager", src: videoHesham },
  { id: 4, name: "Ruben", role: "Sales Closer", src: videoRuben },
  { id: 5, name: "Ashley Mark", role: "Appointment Setter", src: videoAshleyMark },
  { id: 6, name: "Mary Jane", role: "Lead Manager", src: videoMary },
  { id: 7, name: "Hadeer Ezz", role: "Acquisition Manager", src: videoHadeer },
  { id: 8, name: "Mohamed Sobhy", role: "Land Acquisition Manager", src: videoMohamed },
  { id: 9, name: "Nina Hadidi", role: "Acquisition Manager", src: videoNina },
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
      quote: "The quality of candidates exceeded our expectations. They truly understand what we need.",
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
      quote: "Vita Talent helped me land my dream job. They supported me throughout the entire process.",
    },
    {
      name: "Ahmed Hassan",
      role: "Backend Developer",
      quote: "Professional, caring, and genuinely invested in my success. Highly recommend!",
    },
    {
      name: "Sophie Dubois",
      role: "Marketing Manager",
      quote: "They matched me with a company that perfectly aligns with my values and career goals.",
    },
  ],
};

function chunkRows<T>(arr: T[], size: number) {
  const rows: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    rows.push(arr.slice(i, i + size));
  }
  return rows;
}

/* ---------- VideoCarousel (horizontal-only) ---------- */
function VideoCarousel({
  videos,
  onOpen,
}: {
  videos: { id: number; name: string; role: string; src: string }[];
  onOpen: (src: string) => void;
}) {
  const shouldReduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const length = videos.length;

  const carouselRef = useRef<HTMLDivElement | null>(null);
  const prevRef = useRef<HTMLDivElement | null>(null);
  const nextRef = useRef<HTMLDivElement | null>(null);

  // These refs are the important fix: we measure the center item's height
  // and set the wrapper minHeight to that value so the center cannot overlap
  // content beneath the carousel.
  const centerWrapperRef = useRef<HTMLDivElement | null>(null);
  const centerContentRef = useRef<HTMLDivElement | null>(null);

  const [arrowPos, setArrowPos] = useState<{ left?: number; right?: number } | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  const clamp = (i: number) => ((i % length) + length) % length;

  const handleNext = useCallback(() => {
    setDirection(1);
    setIndex((i) => clamp(i + 1));
  }, [length]);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setIndex((i) => clamp(i - 1));
  }, [length]);

  // reposition arrows so they sit just outside the peek cards
  useLayoutEffect(() => {
    function recompute() {
      const carouselEl = carouselRef.current;
      const prevEl = prevRef.current;
      const nextEl = nextRef.current;
      if (!carouselEl) {
        setArrowPos(null);
        return;
      }
      const cRect = carouselEl.getBoundingClientRect();
      let left = 24;
      let right = 24;
      if (prevEl) {
        const pRect = prevEl.getBoundingClientRect();
        left = Math.max(8, pRect.left - cRect.left - 44);
      }
      if (nextEl) {
        const nRect = nextEl.getBoundingClientRect();
        right = Math.max(8, cRect.right - nRect.right - 44);
      }
      setArrowPos({ left, right });
    }
    recompute();
    window.addEventListener("resize", recompute);
    window.addEventListener("orientationchange", recompute);
    return () => {
      window.removeEventListener("resize", recompute);
      window.removeEventListener("orientationchange", recompute);
    };
  }, [index]);

  // ensure the carousel wrapper reserves vertical space for the center tile
  useLayoutEffect(() => {
    function recomputeCenterHeight() {
      const carouselEl = carouselRef.current;
      if (!carouselEl) return;

      // Prefer measuring the actual motion content; fall back to wrapper
      const el = centerContentRef.current ?? centerWrapperRef.current;
      const height = el ? (el as HTMLElement).offsetHeight : 0;

      // Add a small buffer (shadows / spacing) so we never overlap the section below
      const buffer = 28;
      if (height && height > 0) {
        carouselEl.style.minHeight = `${Math.ceil(height + buffer)}px`;
      } else {
        // fallback: reasonable height
        carouselEl.style.minHeight = `420px`;
      }
    }

    // recompute initially and whenever the index changes (center slide height may differ)
    recomputeCenterHeight();
    window.addEventListener("resize", recomputeCenterHeight);
    return () => window.removeEventListener("resize", recomputeCenterHeight);
  }, [index, centerContentRef.current]);

  const dragThreshold = 80;

  // Explicit horizontal-only motion: set y:0 to avoid vertical motion
  const centerVariants = {
    enter: (d: number) =>
      shouldReduceMotion ? { opacity: 1, x: 0, y: 0, scale: 1 } : { opacity: 0, x: d > 0 ? 260 : -260, y: 0, scale: 0.98 },
    center: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: shouldReduceMotion ? { duration: 0 } : { type: "spring", stiffness: 220, damping: 28, mass: 0.8 },
    },
    exit: (d: number) =>
      shouldReduceMotion
        ? { opacity: 0, y: 0 }
        : { opacity: 0, x: d > 0 ? -260 : 260, y: 0, scale: 0.98, transition: { type: "spring", stiffness: 200, damping: 26 } },
  };

  const sideStyle = { width: "min(420px, 40vw)" };
  const centerStyle = { width: "min(680px, 80vw)" };

  const prevIndex = clamp(index - 1);
  const nextIndex = clamp(index + 1);

  return (
    <div className="w-full flex flex-col items-center">
      <div ref={carouselRef} className="relative w-full flex items-center justify-center" style={{ minHeight: 260 }}>
        {/* Left peek (behind center) */}
        <motion.div
          ref={prevRef}
          className="absolute left-4 top-1/2 -translate-y-1/2 hidden md:block z-10"
          initial={{ opacity: 0.95 }}
          animate={{ opacity: 1 }}
          style={sideStyle}
        >
          <Card
            onClick={handlePrev}
            className="cursor-pointer overflow-hidden transform transition-transform duration-300 hover:scale-95"
            aria-label={`Previous: ${videos[prevIndex].name}`}
          >
            <div className="aspect-video bg-muted relative">
              <VideoThumbnail src={videos[prevIndex].src} alt={videos[prevIndex].name} />
              <div className="absolute inset-0 bg-background/60 flex items-center justify-center pointer-events-none">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                  <Play className="w-6 h-6" />
                </div>
              </div>
            </div>
            <div className="p-3">
              <p className="font-bold text-foreground text-sm">{videos[prevIndex].name}</p>
              <p className="text-xs text-muted-foreground">{videos[prevIndex].role}</p>
            </div>
          </Card>
        </motion.div>

        {/* Center - absolutely positioned and measured so wrapper can reserve space */}
        <div
          ref={centerWrapperRef}
          className="absolute left-1/2 top-1/2 z-50"
          style={{
            transform: "translate(-50%, -50%)",
            width: centerStyle.width,
            willChange: "transform",
            transformStyle: "preserve-3d",
          }}
        >
          <AnimatePresence custom={direction} initial={false}>
            <motion.div
              ref={centerContentRef}
              key={videos[index].id}
              custom={direction}
              variants={centerVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: shouldReduceMotion ? 0 : 0.55, ease: "easeOut" }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.16}
              onDragEnd={(e, info) => {
                if (info.offset.x > dragThreshold) {
                  handlePrev();
                } else if (info.offset.x < -dragThreshold) {
                  handleNext();
                }
              }}
              className="cursor-grab"
              style={{ width: centerStyle.width }}
            >
              <Card onClick={() => onOpen(videos[index].src)} className="relative overflow-hidden cursor-pointer" aria-label={`Play testimonial from ${videos[index].name}`}>
                <div className="aspect-video bg-muted relative">
                  <VideoThumbnail src={videos[index].src} alt={videos[index].name} />
                  <div className="absolute inset-0 bg-background/60 flex items-center justify-center pointer-events-none">
                    <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                      <Play className="w-7 h-7" />
                    </div>
                  </div>
                </div>
                <div className="p-4 border-t border-muted-foreground/10 bg-card">
                  <p className="font-bold text-lg text-foreground">{videos[index].name}</p>
                  <p className="text-sm text-muted-foreground">{videos[index].role}</p>
                </div>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right peek */}
        <motion.div
          ref={nextRef}
          className="absolute right-4 top-1/2 -translate-y-1/2 hidden md:block z-10"
          initial={{ opacity: 0.95 }}
          animate={{ opacity: 1 }}
          style={sideStyle}
        >
          <Card
            onClick={handleNext}
            className="cursor-pointer overflow-hidden transform transition-transform duration-300 hover:scale-95"
            aria-label={`Next: ${videos[nextIndex].name}`}
          >
            <div className="aspect-video bg-muted relative">
              <VideoThumbnail src={videos[nextIndex].src} alt={videos[nextIndex].name} />
              <div className="absolute inset-0 bg-background/60 flex items-center justify-center pointer-events-none">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                  <Play className="w-6 h-6" />
                </div>
              </div>
            </div>
            <div className="p-3">
              <p className="font-bold text-foreground text-sm">{videos[nextIndex].name}</p>
              <p className="text-xs text-muted-foreground">{videos[nextIndex].role}</p>
            </div>
          </Card>
        </motion.div>

        {/* Arrows positioned outside the peeks using computed positions */}
        <button
          aria-label="Previous"
          onClick={(e) => {
            e.stopPropagation();
            handlePrev();
          }}
          className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md absolute z-40 left-0 -translate-x-1/2"
          style={{ left: arrowPos?.left ?? 12 }}
        >
          <ChevronLeft className="w-5 h-5 text-foreground" />
        </button>

        <button
          aria-label="Next"
          onClick={(e) => {
            e.stopPropagation();
            handleNext();
          }}
          className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md absolute z-40 right-0 translate-x-1/2"
          style={{ right: arrowPos?.right ?? 12 }}
        >
          <ChevronRight className="w-5 h-5 text-foreground" />
        </button>
      </div>
    </div>
  );
}

/* ---------- TestimonialsSection (page section) ---------- */
export default function TestimonialsSection() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  // ESC to close modal
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveVideo(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // prevent body scroll while modal open
  useEffect(() => {
    const prev = document.body.style.overflow;
    if (activeVideo) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [activeVideo]);

  const candidateRows = chunkRows(candidateVideoTestimonials, 3);

  return (
    <section className="py-24 bg-gradient-to-br from-primary/18 via-primary/10 to-background" data-testid="section-testimonials">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">What Our Clients & Candidates Say</h2>
          <p className="text-lg font-medium text-muted-foreground">Real stories from businesses and professionals we've helped</p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Client Testimonials</h3>

          <div className="mb-8">
            <VideoCarousel videos={clientVideoTestimonials} onOpen={(src) => setActiveVideo(src)} />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {writtenTestimonials.clients.map((testimonial, index) => (
              <Card key={index} className="p-6 bg-gradient-to-br from-card to-primary/12 border-primary/20">
                <div className="flex items-start gap-4">
                  <div className="flex items-center gap-1 text-emerald-500">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-4 h-4" />
                    ))}
                  </div>
                </div>

                <p className="mt-4 text-sm text-foreground/90">{testimonial.quote}</p>

                <div className="mt-6 border-t pt-4">
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="space-y-12 mt-12">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Candidate Testimonials</h3>

            <div className="mb-8">
              {/* For candidates we can reuse the same carousel or render differently — keep simple */}
              <VideoCarousel videos={candidateVideoTestimonials.slice(0, 3)} onOpen={(src) => setActiveVideo(src)} />
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {writtenTestimonials.candidates.map((testimonial, idx) => (
                <Card key={idx} className="p-6 bg-gradient-to-br from-card to-primary/12 border-primary/20">
                  <div className="flex items-start gap-4">
                    <div className="flex items-center gap-1 text-emerald-500">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="w-4 h-4" />
                      ))}
                    </div>
                  </div>

                  <p className="mt-4 text-sm text-foreground/90">{testimonial.quote}</p>

                  <div className="mt-6 border-t pt-4">
                    <p className="font-bold text-foreground">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Simple modal for playing the selected video */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="fixed inset-0 bg-black/60" onClick={() => setActiveVideo(null)} />
            <motion.div
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.98, opacity: 0 }}
              className="relative z-60 w-full max-w-4xl mx-4"
            >
              <Card className="overflow-hidden">
                <div className="relative aspect-video bg-black">
                  <video controls autoPlay className="w-full h-full object-contain bg-black" src={activeVideo ?? undefined} />
                </div>
                <div className="p-3 flex justify-end">
                  <Button variant="ghost" onClick={() => setActiveVideo(null)} aria-label="Close video">
                    <X />
                  </Button>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
