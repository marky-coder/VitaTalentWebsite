// client/src/components/TestimonialsSection.tsx

import { Card } from "@/components/ui/card";
import { Play, X } from "lucide-react";
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
   NOTE: I included 9 items for clients and 9 for candidates.
   Replace the strings below with your real copy if needed.
   ========================= */

const clientVideoTestimonials = [
  { id: 1, name: "Kevin", role: "White Stone", src: videoKevin },
  { id: 2, name: "Sam", role: "Private Realtor", src: videoSam },
  { id: 3, name: "Nick Staley", role: "Land Growth Capital", src: videoNewClient },
  { id: 4, name: "Daniel Slobodyan", role: "Land Creative Solutions", src: videoDaniel },
  { id: 5, name: "Zach Nahas", role: "CEO of Clear Path Land", src: videoZach },
  { id: 6, name: "Josh Pierce", role: "CEO of Higher Ground Land", src: videoJoshPierce },
];

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

  // 6 more client quotes to make it 9 total
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

  // 6 more candidate quotes to make it 9 total
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
   MARQUEE STYLE
   - reduced tile width and added line-clamp
   - marquee duration doubled (48 -> 96) to slow to half
   ========================= */

const marqueeCss = `
:root {
  --testimonial-tile-width: 300px;
  --marquee-gap: 1rem;
  --marquee-duration: 96s; /* slowed (48 -> 96) */
}

/* marquee wrapper */
.testimonials-marquee {
  overflow: hidden;
  width: 100%;
  position: relative;
}

/* track that scrolls */
.testimonials-marquee__track {
  display: flex;
  gap: var(--marquee-gap);
  align-items: stretch;
  width: max-content;
  animation: marquee linear var(--marquee-duration) infinite;
}

/* item sizing */
.testimonials-marquee__item {
  flex: 0 0 var(--testimonial-tile-width);
}

/* continuous animation with duplicated content */
@keyframes marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

/* pause on hover */
.testimonials-marquee:hover .testimonials-marquee__track {
  animation-play-state: paused;
}

/* responsive tweak */
@media (max-width: 640px) {
  :root { --testimonial-tile-width: 260px; }
}
`;

/* =========================
   VIDEO THUMBNAIL
   Use <video/> to ensure first frame visible as a thumbnail.
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
        // ignore timing/cross-origin issues; the browser will show poster/first frame
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
      className="w-full h-56 md:h-72 object-cover bg-gray-200"
      aria-label={alt ?? "video testimonial thumbnail"}
    />
  );
}

/* =========================
   Written Testimonial Card
   - uses line-clamp to avoid overflow (requires tailwind line-clamp plugin)
   ========================= */

function WrittenTestimonialCard({
  testimonial,
}: {
  testimonial: { name: string; role: string; quote: string };
}) {
  return (
    <Card className="p-4 h-full flex flex-col justify-between rounded-lg shadow-sm">
      <div>
        <p className="text-sm text-foreground/90 line-clamp-4">{testimonial.quote}</p>
      </div>

      <div className="mt-4 border-t pt-3">
        <p className="font-semibold text-sm">{testimonial.name}</p>
        <p className="text-xs text-muted-foreground">{testimonial.role}</p>
      </div>
    </Card>
  );
}

/* =========================
   Marquee component
   - duplicates the list to create seamless scroll
   ========================= */

function TestimonialsMarquee({
  items,
  ariaLabel,
}: {
  items: { name: string; role: string; quote: string }[];
  ariaLabel?: string;
}) {
  // Duplicate the items for continuous scrolling
  const duplicated = [...items, ...items];

  return (
    <div className="relative testimonials-marquee" role="region" aria-label={ariaLabel ?? "Testimonials"}>
      <style>{marqueeCss}</style>

      <div className="testimonials-marquee__track" aria-hidden="false">
        {duplicated.map((item, idx) => (
          <div key={idx} className="testimonials-marquee__item">
            <div className="p-2 h-full">
              <WrittenTestimonialCard testimonial={item} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* =========================
   Main component
   ========================= */

export default function TestimonialsSection() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section className="py-16 container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">What Our Clients & Candidates Say</h2>
      <p className="text-center text-sm text-muted-foreground mb-10">
        Real stories from businesses and professionals we've helped
      </p>

      {/* Video grid (clients) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {clientVideoTestimonials.map((video) => (
          <div
            key={video.id}
            className="relative rounded-xl overflow-hidden cursor-pointer group shadow-sm"
            onClick={() => setActiveVideo(video.src)}
            aria-label={`Play testimonial from ${video.name}`}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") setActiveVideo(video.src);
            }}
          >
            <VideoThumbnail src={video.src} alt={`${video.name} testimonial`} />

            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="rounded-full bg-green-700/90 text-white p-3 shadow-lg transform scale-100 group-hover:scale-105 transition-transform">
                <Play className="w-6 h-6" />
              </div>
            </div>

            <div className="bg-white/90 p-3 border-t">
              <p className="font-semibold text-sm">{video.name}</p>
              <p className="text-xs text-muted-foreground">{video.role}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Client written testimonials marquee */}
      <div className="mb-10">
        <h3 className="text-lg font-semibold mb-4">Client Testimonials</h3>
        <TestimonialsMarquee items={clientWrittenTestimonials} ariaLabel="Client testimonials" />
      </div>

      {/* Candidate written testimonials marquee */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-4">Candidate Testimonials</h3>
        <TestimonialsMarquee items={candidateTestimonials} ariaLabel="Candidate testimonials" />
      </div>

      {/* Video modal */}
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
