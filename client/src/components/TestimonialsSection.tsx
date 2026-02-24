// client/src/components/TestimonialsSection.tsx
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, X, ChevronLeft, ChevronRight } from "lucide-react";
import { SiTrustpilot, SiGoogle } from "react-icons/si";
import { useState, useEffect, useRef, useCallback, useLayoutEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

/* Video assets (unchanged) */
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

/* ---------- VideoThumbnail (unchanged) ---------- */
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

/* ---------- Data ---------- */
const clientVideoTestimonials = [
  { id: 1, name: "Kevin", role: "White Stone", src: videoKevin },
  { id: 2, name: "Sam", role: "Private Realtor", src: videoSam },
  { id: 3, name: "Nick Staley", role: "Land Growth Capital", src: videoNewClient },
  { id: 4, name: "Daniel Slobodyan", role: "Land Creative Solutions", src: videoDaniel },
  { id: 5, name: "Zach Nahas", role: "CEO of Clear Path Land", src: videoZach },
  { id: 6, name: "Josh Pierce", role: "CEO of Higher Ground Land", src: videoJoshPierce },
];

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
    {
      name: "Michael Harper",
      role: "CTO, Redwood Systems",
      quote:
        "Vita Talent provided a high-quality engineering team that scaled with us quickly — exceptional delivery.",
    },
    {
      name: "Stephanie Ross",
      role: "VP of Product, HarborPoint Inc",
      quote:
        "They found great product talent aligned with our roadmap — excellent communication throughout.",
    },
    {
      name: "Daniel Turner",
      role: "Founder, BlueHarbor Logistics",
      quote: "Fast, professional, and reliable. Their remote hiring process just works for us.",
    },
    {
      name: "Olivia Brooks",
      role: "Head of HR, SummitWorks LLC",
      quote:
        "Vita Talent's screening process saved our team time and got us great candidates rapidly.",
    },
    {
      name: "Christopher Bennett",
      role: "Director of Operations, ClearPeak Group",
      quote:
        "Exceptional sourcing and onboarding support. We now rely on Vita Talent as a strategic partner.",
    },
    {
      name: "Amanda Lewis",
      role: "CEO, Brightfield Partners",
      quote:
        "Their global hiring expertise helped us expand our team the right way — highly recommended.",
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
      quote: "Professional, caring, and genuinely invested in my success. Highly recommend!",
    },
    {
      name: "Sophie Dubois",
      role: "Marketing Manager",
      quote:
        "They matched me with a company that perfectly aligns with my values and career goals.",
    },
    {
      name: "Arjun Patel",
      role: "Virtual Assistant (India)",
      quote:
        "Vita Talent connected me with a remote role where I could grow my skills and support a growing company.",
    },
    {
      name: "Priya Sharma",
      role: "Customer Support Specialist (India)",
      quote:
        "The team helped me prepare and land a long-term remote position. Their support was fantastic.",
    },
    {
      name: "Miguel Reyes",
      role: "E-commerce VA (Philippines)",
      quote:
        "I received clear guidance and a great match. Communication was fast and fair.",
    },
    {
      name: "Angela Cruz",
      role: "Administrative VA (Philippines)",
      quote:
        "They matched me with a client who appreciates my experience — grateful for the opportunity.",
    },
    {
      name: "Aisha Khan",
      role: "Lead Generation Specialist (Pakistan)",
      quote:
        "Vita Talent helped me find a role that suited my skills and provided ongoing coaching.",
    },
    {
      name: "Mohammad Rahman",
      role: "Data Entry Specialist (Bangladesh)",
      quote:
        "Professional team, clear process, and I secured a steady remote contract through them.",
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

/* ---------- Marquee CSS (injected) ---------- */
const testimonialsMarqueeCss = `
.testimonials-marquee {
  --gap: 1.5rem;
  --marquee-duration: 48s;
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;
  display: block;
  padding: 1.25rem 0 2rem;
  white-space: nowrap;
}

/* center items vertically to keep cards readable */
.testimonials-marquee__track {
  display: flex;
  align-items: center;
  gap: var(--gap);
  width: max-content;
  animation: testimonials-marquee linear var(--marquee-duration) infinite;
  will-change: transform;
}

.testimonials-marquee[data-direction="right"] .testimonials-marquee__track {
  animation-direction: reverse;
}

.testimonials-marquee__item {
  flex: 0 0 auto;
  display: inline-flex;
  align-items: stretch;
  justify-content: flex-start;
}

/* explicit class we apply to the Card so we can target it reliably */
.testimonials-marquee__item > .testimonials-card {
  min-height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

/* Keep marquee readable and pause on hover */
.testimonials-marquee__track:hover,
.testimonials-marquee__track:focus-within {
  animation-play-state: paused;
}

@keyframes testimonials-marquee {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}

@media (prefers-reduced-motion: reduce) {
  .testimonials-marquee__track {
    animation: none;
  }
}

/* testimonial-video: cap height so tiles are shorter and less likely to overlap */
.testimonial-video {
  height: clamp(200px, 36vh, 280px);
  width: 100%;
  overflow: hidden;
  position: relative;
}

/* visual niceties for the marquee cards on small screens */
@media (max-width: 640px) {
  .testimonials-marquee__item > .testimonials-card {
    min-height: 150px;
  }
}
`;

/* ---------- Small filled-star SVG ---------- */
const FilledStar = ({ className = "w-4 h-4 text-emerald-500" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M12 .587l3.668 7.431L23.5 9.75l-5.75 5.6L19.335 24 12 19.897 4.665 24l1.585-8.65L.5 9.75l7.832-1.732L12 .587z" />
  </svg>
);

/* ---------- WrittenTestimonialCard (Card uses .testimonials-card) ---------- */
function WrittenTestimonialCard({ testimonial }: { testimonial: { name: string; role: string; quote: string } }) {
  return (
    <Card className="testimonials-card p-6 bg-gradient-to-br from-card to-primary/12 border-primary/20">
      <div className="flex items-start gap-4">
        <div className="flex items-center gap-1 text-emerald-500">
          {Array.from({ length: 5 }).map((_, i) => (
            <FilledStar key={i} />
          ))}
        </div>
      </div>

      <p className="mt-4 text-sm text-foreground/90">{testimonial.quote}</p>

      <div className="mt-6 border-t pt-4">
        <p className="font-bold text-foreground">{testimonial.name}</p>
        <p className="text-xs text-muted-foreground">{testimonial.role}</p>
      </div>
    </Card>
  );
}

/* ---------- TestimonialsMarquee (duplicates content for seamless loop) ---------- */
function TestimonialsMarquee({
  items,
  speed = 48,
  direction = "left",
  itemWidth = "min(420px, 32vw)",
}: {
  items: { name: string; role: string; quote: string }[];
  speed?: number;
  direction?: "left" | "right";
  itemWidth?: string;
}) {
  if (!items || items.length === 0) return null;
  const duplicated = [...items, ...items];
  return (
    <div
      className="testimonials-marquee"
      data-direction={direction}
      style={
        {
          ["--marquee-duration" as any]: `${speed}s`,
        } as React.CSSProperties
      }
      role="region"
      aria-label="Testimonials rolling marquee"
    >
      <div className="testimonials-marquee__track" aria-hidden="false">
        {duplicated.map((item, idx) => (
          <div key={`${item.name}-${idx}`} className="testimonials-marquee__item" style={{ width: itemWidth, minWidth: itemWidth }}>
            <WrittenTestimonialCard testimonial={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- VideoCarousel (robust spacer, reduced widths) ---------- */
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

  // measure center height and use spacer to prevent overlap
  const centerWrapperRef = useRef<HTMLDivElement | null>(null);
  const centerContentRef = useRef<HTMLDivElement | null>(null);
  const spacerRef = useRef<HTMLDivElement | null>(null);

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

  /* Recompute arrow positions (relative to peek cards) */
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

  /* Robust spacer: measure visual bottom with getBoundingClientRect (includes transforms),
     use a viewport-aware buffer, cap the total, rAF bursts + ResizeObserver. */
  useLayoutEffect(() => {
    const carouselEl = carouselRef.current;
    if (!carouselEl) return;

    let rafHandles: number[] = [];

    function recomputeCenterHeight() {
      const el = centerContentRef.current ?? centerWrapperRef.current;
      if (!el) {
        if (spacerRef.current) spacerRef.current.style.height = `420px`;
        else carouselEl.style.minHeight = `420px`;
        return;
      }

      const centerRect = (el as HTMLElement).getBoundingClientRect();
      const carouselRect = carouselEl.getBoundingClientRect();

      // viewport-aware buffer (~3% of width, clamped between 24 and 80)
      const vw = Math.max(document.documentElement.clientWidth || 1200, window.innerWidth || 1200);
      const buffer = Math.round(Math.min(80, Math.max(24, vw * 0.03)));

      // desired total = distance from carousel top to visual bottom of center + buffer
      const desiredTotal = Math.ceil((centerRect.bottom - carouselRect.top) + buffer);

      const currentCarouselHeight = Math.ceil(carouselRect.height);

      // cap the total (never more than 60% of viewport height, at least 420px)
      const maxTotal = Math.round(Math.max(420, window.innerHeight * 0.6));
      const safeTotal = Math.min(desiredTotal, maxTotal);

      const extraNeeded = Math.max(0, safeTotal - currentCarouselHeight);

      if (spacerRef.current) {
        spacerRef.current.style.height = `${extraNeeded}px`;
      } else {
        carouselEl.style.minHeight = `${Math.max(currentCarouselHeight, safeTotal)}px`;
      }
    }

    // run immediately & do a small rAF burst to capture transforms/animation frames
    recomputeCenterHeight();
    let frames = 0;
    function tick() {
      recomputeCenterHeight();
      frames += 1;
      if (frames < 6) rafHandles.push(window.requestAnimationFrame(tick));
    }
    rafHandles.push(window.requestAnimationFrame(tick));

    // observe size changes
    const observedEl = centerContentRef.current ?? centerWrapperRef.current;
    const ResizeObs: any = (window as any).ResizeObserver;
    let ro: any = null;

    if (ResizeObs && observedEl) {
      ro = new ResizeObs(() => {
        // rAF burst on observation
        let rFrames = 0;
        function rTick() {
          recomputeCenterHeight();
          rFrames += 1;
          if (rFrames < 6) rafHandles.push(window.requestAnimationFrame(rTick));
        }
        rafHandles.push(window.requestAnimationFrame(rTick));
      });
      try {
        ro.observe(observedEl);
      } catch {
        /* ignore */
      }
    }

    window.addEventListener("resize", recomputeCenterHeight);

    return () => {
      for (const h of rafHandles) cancelAnimationFrame(h);
      if (ro && observedEl) {
        try {
          ro.unobserve(observedEl);
        } catch {
          /* ignore */
        }
      }
      window.removeEventListener("resize", recomputeCenterHeight);
    };
  }, [index, centerContentRef.current]);

  const dragThreshold = 80;

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

  // Reduced widths (center & side) for a more compact layout
  const sideStyle = { width: "min(360px, 32vw)" };
  const centerStyle = { width: "min(560px, 68vw)" };

  const prevIndex = clamp(index - 1);
  const nextIndex = clamp(index + 1);

  return (
    <>
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
              <div className="testimonial-video bg-muted relative">
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

          {/* Center — in flow */}
          <div ref={centerWrapperRef} className="relative z-50 flex-shrink-0" style={{ width: centerStyle.width }}>
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
                  <div className="testimonial-video bg-muted relative">
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
              <div className="testimonial-video bg-muted relative">
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

          {/* Arrows */}
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

      {/* Spacer forces layout below the carousel so nothing can overlap */}
      <div ref={spacerRef} style={{ height: 0, transition: "height 220ms ease" }} aria-hidden />
    </>
  );
}

/* ---------- TestimonialsSection (page section) ---------- */
export default function TestimonialsSection() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveVideo(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const prev = document.body.style.overflow;
    if (activeVideo) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [activeVideo]);

  return (
    <section className="py-24 bg-gradient-to-br from-primary/18 via-primary/10 to-background" data-testid="section-testimonials">
      {/* inject marquee + video CSS */}
      <style>{testimonialsMarqueeCss}</style>

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

          <div className="mb-8">
            <TestimonialsMarquee items={writtenTestimonials.clients} speed={48} direction="left" itemWidth="min(420px, 32vw)" />
          </div>
        </div>

        <div className="space-y-12 mt-12">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Candidate Testimonials</h3>

            <div className="mb-8">
              <VideoCarousel videos={candidateVideoTestimonials} onOpen={(src) => setActiveVideo(src)} />
            </div>

            <div className="mb-8">
              <TestimonialsMarquee items={writtenTestimonials.candidates} speed={48} direction="left" itemWidth="min(420px, 32vw)" />
            </div>
          </div>
        </div>
      </div>

      {/* Simple modal for playing the selected video */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="fixed inset-0 bg-black/60" onClick={() => setActiveVideo(null)} />
            <motion.div initial={{ scale: 0.98, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.98, opacity: 0 }} className="relative z-60 w-full max-w-4xl mx-4">
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
