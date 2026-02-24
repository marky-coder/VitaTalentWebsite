// client/src/components/TestimonialsSection.tsx

import { Card } from "@/components/ui/card";
import { Play, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* =========================
   VIDEO ASSETS
   Update these imports to match the asset paths in your repo
   ========================= */
import videoKevin from "@assets/Kevin's Testimonial.mp4";
import videoSam from "@assets/Sam's Testimonial .mov";
import videoNewClient from "@assets/4030993537cf451ca9872ad031c744b9-1764688585496.mp4";
import videoDaniel from "@assets/Daniel Slobodyan - Land Creative Solutions.mp4";
import videoZach from "@assets/Zach Nahas - CEO of Clear Path Land.mp4";
import videoJoshPierce from "@assets/Josh Pierce - CEO of Higher Ground Land.mp4";

/* =========================
   DATA: videos + written testimonials
   - candidateVideoTestimonials now has 6 items (replace src with real files)
   - client video list left as-is
   ========================= */

const clientVideoTestimonials = [
  { id: 1, name: "Kevin", role: "White Stone", src: videoKevin },
  { id: 2, name: "Sam", role: "Private Realtor", src: videoSam },
  { id: 3, name: "Nick Staley", role: "Land Growth Capital", src: videoNewClient },
  { id: 4, name: "Daniel Slobodyan", role: "Land Creative Solutions", src: videoDaniel },
  { id: 5, name: "Zach Nahas", role: "CEO of Clear Path Land", src: videoZach },
  { id: 6, name: "Josh Pierce", role: "CEO of Higher Ground Land", src: videoJoshPierce },
];

/* Candidate video placeholders: expanded to 6 items.
   Replace src values with your real candidate video files. */
const candidateVideoTestimonials = [
  { id: 101, name: "Marcus Reyes", role: "Senior Land Manager", src: videoKevin },
  { id: 102, name: "Hannah Lee", role: "Operations Coordinator", src: videoSam },
  { id: 103, name: "Samuel Kim", role: "Project Lead", src: videoNewClient },
  { id: 104, name: "Aisha Patel", role: "Site Supervisor", src: videoDaniel },
  { id: 105, name: "Diego Morales", role: "Survey Engineer", src: videoZach },
  { id: 106, name: "Renee Carter", role: "Regional Planner", src: videoJoshPierce },
];

/* =========================
   WRITTEN TESTIMONIAL DATA (9 each)
   (unchanged content — kept 9 client & 9 candidate testimonials)
   ========================= */

const clientWrittenTestimonials = [
  {
    name: "Daniel Turner",
    role: "Founder, BlueHarbor Logistics",
    quote:
      "Fast, professional, and reliable. Their remote hiring process just works for us.",
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
    name: "Janet Morales",
    role: "COO, Redwood Estates",
    quote:
      "They matched us with senior leadership quickly — the candidates were thoughtful and well-vetted.",
  },
  {
    name: "Ethan Cole",
    role: "VP Sales, TerraPoint",
    quote:
      "Clear communication, excellent candidate quality and a hiring speed that impressed our execs.",
  },
  {
    name: "Priya Shah",
    role: "Head of Talent, Greenline Partners",
    quote:
      "A consistent partner for hard-to-fill roles — thorough screening and transparent timelines.",
  },
  {
    name: "Marcus Allen",
    role: "Founder, Eastern Land Co.",
    quote:
      "They took the time to understand our workflow and delivered candidates who fit right in.",
  },
  {
    name: "Laura Finch",
    role: "Talent Acquisition Lead, Summit Ridge",
    quote:
      "Onboarding support was excellent — the new hires were productive from week one.",
  },
  {
    name: "Omar Ruiz",
    role: "CTO, LandLogic",
    quote:
      "Their screening eliminated cycles of bad interviews and gave us quality choices fast.",
  },
];

const candidateTestimonials = [
  {
    name: "Marcus Reyes",
    role: "Senior Land Manager — Placed at Greenridge",
    quote:
      "The team guided me through the whole interview process and found a role that matched my goals. Communication was clear and consistent.",
  },
  {
    name: "Hannah Lee",
    role: "Operations Coordinator — Placed at HarborPoint",
    quote:
      "I was nervous about remote onboarding, but they made it painless. The hiring timeline matched what they promised.",
  },
  {
    name: "Samuel Kim",
    role: "Project Lead — Placed at Terranov",
    quote:
      "Thoughtful feedback, great prep, and a smooth negotiation — I felt supported every step of the way.",
  },
  {
    name: "Aisha Patel",
    role: "Site Supervisor — Placed at Stonebridge",
    quote:
      "They helped me prepare for the technical interview and coached me through the salary discussion.",
  },
  {
    name: "Diego Morales",
    role: "Survey Engineer — Placed at ClearPath",
    quote:
      "Fast responses and real support. The recruiter checked in at every milestone.",
  },
  {
    name: "Renee Carter",
    role: "Regional Planner — Placed at BlueHarbor",
    quote:
      "Great prep materials and clear expectations — I appreciated the transparent process.",
  },
  {
    name: "Tom Watkins",
    role: "Land Analyst — Placed at White Stone",
    quote:
      "I found a role that matched my skills, and the onboarding was handled professionally.",
  },
  {
    name: "Maya Singh",
    role: "Project Coordinator — Placed at Vale Partners",
    quote:
      "Helpful interview coaching, timely feedback, and a smooth contract negotiation.",
  },
  {
    name: "Noah Fischer",
    role: "Acquisitions Associate — Placed at Greenridge",
    quote:
      "They lined up excellent opportunities and helped me choose the best fit for my career.",
  },
];

/* =========================
   MARQUEE CSS (written testimonials)
   - slowed to 96s (half speed)
   - greenish aesthetic left for cards below
   ========================= */

const marqueeCss = `
:root {
  --testimonial-tile-width: 300px;
  --marquee-gap: 1rem;
  --marquee-duration: 96s;
}

.testimonials-marquee {
  overflow: hidden;
  width: 100%;
  position: relative;
}

.testimonials-marquee__track {
  display: flex;
  gap: var(--marquee-gap);
  align-items: stretch;
  width: max-content;
  animation: marquee linear var(--marquee-duration) infinite;
}

.testimonials-marquee__item {
  flex: 0 0 var(--testimonial-tile-width);
}

@keyframes marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

.testimonials-marquee:hover .testimonials-marquee__track {
  animation-play-state: paused;
}

@media (max-width: 640px) {
  :root { --testimonial-tile-width: 260px; }
}
`;

/* =========================
   VIDEO THUMBNAIL
   Use <video> so the first frame appears as the thumbnail.
   ========================= */

function VideoThumbnail({ src, alt }: { src: string; alt?: string }) {
  const ref = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;

    const onLoaded = () => {
      try {
        v.pause();
        v.currentTime = 0;
      } catch (e) {
        /* ignore timing/cross-origin issues */
      }
    };

    v.addEventListener("loadeddata", onLoaded, { once: true });
    return () => v.removeEventListener("loadeddata", onLoaded);
  }, [src]);

  return (
    <video
      ref={ref}
      src={src}
      muted
      playsInline
      preload="metadata"
      className="w-full h-56 md:h-64 lg:h-72 object-cover bg-gray-100"
      aria-label={alt ?? "video testimonial thumbnail"}
    />
  );
}

/* =========================
   WRITTEN TESTIMONIAL CARD
   - pale green background, green border
   - green separator line between quote and name
   ========================= */

function WrittenTestimonialCard({
  testimonial,
}: {
  testimonial: { name: string; role: string; quote: string };
}) {
  return (
    <Card className="p-4 h-full flex flex-col justify-between rounded-lg shadow-sm overflow-hidden
                    bg-gradient-to-r from-green-50/80 to-white border border-green-100">
      <div>
        <p className="text-sm text-foreground/90 line-clamp-4">{testimonial.quote}</p>
      </div>

      <div className="mt-4 border-t-2 border-green-200 pt-3">
        <p className="font-semibold text-sm text-foreground">{testimonial.name}</p>
        <p className="text-xs text-muted-foreground">{testimonial.role}</p>
      </div>
    </Card>
  );
}

/* =========================
   MARQUEE COMPONENT (written testimonials)
   ========================= */

function TestimonialsMarquee({
  items,
  ariaLabel,
}: {
  items: { name: string; role: string; quote: string }[];
  ariaLabel?: string;
}) {
  const duplicated = [...items, ...items];

  return (
    <div className="relative testimonials-marquee" role="region" aria-label={ariaLabel ?? "Testimonials"}>
      <style>{marqueeCss}</style>

      <div className="testimonials-marquee__track" aria-hidden="false">
        {duplicated.map((item, idx) => (
          <div key={idx} className="testimonials-marquee__item p-2 h-full">
            <WrittenTestimonialCard testimonial={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

/* =========================
   VIDEO CAROUSEL (infinite wrap)
   - responsive itemsPerView (1 / 2 / 3)
   - arrows wrap (infinite): Next on last -> first, Prev on first -> last
   - center item slightly emphasized
   ========================= */

function VideoCarousel({
  items,
  title,
  onPlay,
}: {
  items: { id: number; name: string; role: string; src: string }[];
  title?: string;
  onPlay: (src: string) => void;
}) {
  const [startIndex, setStartIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const update = () => {
      let newItemsPerView = 3;
      if (window.innerWidth < 640) newItemsPerView = 1;
      else if (window.innerWidth < 1024) newItemsPerView = 2;
      newItemsPerView = Math.min(newItemsPerView, items.length || 1);
      setItemsPerView((prev) => {
        if (prev !== newItemsPerView) {
          // ensure startIndex is valid after itemsPerView changes
          setStartIndex((s) => Math.min(s, Math.max(0, items.length - newItemsPerView)));
          return newItemsPerView;
        }
        return prev;
      });
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [items.length]);

  const maxStart = Math.max(0, items.length - itemsPerView);

  // Wrap-around behavior: infinite carousel via wrapping startIndex
  const goPrev = () => setStartIndex((s) => (s <= 0 ? maxStart : s - 1));
  const goNext = () => setStartIndex((s) => (s >= maxStart ? 0 : s + 1));

  // center index for emphasis
  const centerIndex = startIndex + Math.floor(itemsPerView / 2);

  // Each visible item is (100 / itemsPerView)% of the visible container.
  // translatePercent shifts the track left by startIndex * itemWidth%
  const itemWidthPercent = 100 / Math.max(1, itemsPerView);
  const translatePercent = startIndex * itemWidthPercent;

  // keyboard support
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startIndex, itemsPerView, items.length]);

  return (
    <div className="mb-8">
      {title && <h3 className="text-lg font-semibold mb-4">{title}</h3>}

      <div className="relative">
        {/* arrows */}
        <button
          onClick={goPrev}
          className={`absolute left-0 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3 rounded-full bg-white shadow hover:bg-gray-100 transition`}
          aria-label="Previous testimonials"
        >
          <ChevronLeft size={18} />
        </button>

        <button
          onClick={goNext}
          className={`absolute right-0 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3 rounded-full bg-white shadow hover:bg-gray-100 transition`}
          aria-label="Next testimonials"
        >
          <ChevronRight size={18} />
        </button>

        {/* visible window */}
        <div className="overflow-hidden">
          <div
            className="flex gap-4 transition-transform duration-300"
            style={{ transform: `translateX(-${translatePercent}%)` }}
          >
            {items.map((item, idx) => {
              const isCenter = idx === centerIndex;
              return (
                <div
                  key={item.id}
                  style={{ flex: `0 0 ${itemWidthPercent}%` }}
                  className="px-2 py-1"
                >
                  <div
                    className={`rounded-lg overflow-hidden bg-white border shadow-sm h-full transform transition-transform duration-300 ${
                      isCenter ? "scale-105 shadow-lg" : ""
                    }`}
                    role="button"
                    tabIndex={0}
                    onClick={() => onPlay(item.src)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") onPlay(item.src);
                    }}
                  >
                    <div className="relative">
                      <VideoThumbnail src={item.src} alt={`${item.name} testimonial`} />
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="rounded-full bg-green-700/90 text-white p-3 shadow-lg">
                          <Play className="w-5 h-5" />
                        </div>
                      </div>
                    </div>

                    <div className="p-3 bg-white">
                      <p className="font-semibold text-sm">{item.name}</p>
                      <p className="text-xs text-muted-foreground">{item.role}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================
   MAIN COMPONENT
   ========================= */

export default function TestimonialsSection() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section className="py-16 container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">What Our Clients & Candidates Say</h2>
      <p className="text-center text-sm text-muted-foreground mb-10">
        Real stories from businesses and professionals we've helped
      </p>

      {/* Client Video Carousel */}
      <VideoCarousel
        items={clientVideoTestimonials}
        title="Client Video Testimonials"
        onPlay={(src) => setActiveVideo(src)}
      />

      {/* Candidate Video Carousel */}
      <VideoCarousel
        items={candidateVideoTestimonials}
        title="Candidate Video Testimonials"
        onPlay={(src) => setActiveVideo(src)}
      />

      {/* Written Client Testimonials (marquee) */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Client Testimonials</h3>
        <TestimonialsMarquee items={clientWrittenTestimonials} ariaLabel="Client testimonials" />
      </div>

      {/* Written Candidate Testimonials (marquee) */}
      <div className="mt-10">
        <h3 className="text-lg font-semibold mb-4">Candidate Testimonials</h3>
        <TestimonialsMarquee items={candidateTestimonials} ariaLabel="Candidate testimonials" />
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveVideo(null)}
          >
            <motion.video
              src={activeVideo}
              controls
              autoPlay
              className="max-w-5xl w-full rounded-md shadow-lg"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
            />

            <button
              className="absolute top-6 right-6 text-white p-2 rounded-full bg-black/50 hover:bg-black/70"
              onClick={() => setActiveVideo(null)}
              aria-label="Close video"
            >
              <X size={28} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
