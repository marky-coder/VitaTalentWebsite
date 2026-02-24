// client/src/components/TestimonialsSection.tsx
import { Card } from "@/components/ui/card";
import { Play, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* =========================
   VIDEO ASSETS (the same assets you already have)
   ========================= */
import videoKevin from "@assets/Kevin's Testimonial.mp4";
import videoSam from "@assets/Sam's Testimonial .mov";
import videoNewClient from "@assets/4030993537cf451ca9872ad031c744b9-1764688585496.mp4";
import videoDaniel from "@assets/Daniel Slobodyan - Land Creative Solutions.mp4";
import videoZach from "@assets/Zach Nahas - CEO of Clear Path Land.mp4";
import videoJoshPierce from "@assets/Josh Pierce - CEO of Higher Ground Land.mp4";

import videoXimena from "@assets/WhatsApp Video 2025-11-25 at 10.45.54.mp4";
import videoHesham from "@assets/WhatsApp Video 2025-11-25 at 10.46.13.mp4";
import videoSherif from "@assets/WhatsApp Video 2025-11-25 at 10.47.09.mp4";
import videoRuben from "@assets/Ruben.mp4";
import videoAshleyMark from "@assets/Ashley Mark.mp4";
import videoMary from "@assets/Mary.mp4";
import videoHadeer from "@assets/Hadeer Ezz.mp4";
import videoMohamed from "@assets/Mohamed Sobhy.mp4";
import videoNina from "@assets/Nina Hadidi - Acquisition Manager.mp4";

/* =========================
   DATA
   ========================= */
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

const clientWrittenTestimonials = [
  { name: "Daniel Turner", role: "Founder, BlueHarbor Logistics", quote: "Fast, professional, and reliable. Their remote hiring process just works for us." },
  { name: "Olivia Brooks", role: "Head of HR, SummitWorks LLC", quote: "Vita Talent's screening process saved our team time and got us great candidates rapidly." },
  { name: "Christopher Bennett", role: "Director of Operations, ClearPeak Group", quote: "Exceptional sourcing and onboarding support. We now rely on Vita Talent as a strategic partner." },
  { name: "Janet Morales", role: "COO, Redwood Estates", quote: "They matched us with senior leadership quickly — the candidates were thoughtful and well-vetted." },
  { name: "Ethan Cole", role: "VP Sales, TerraPoint", quote: "Clear communication, excellent candidate quality and a hiring speed that impressed our execs." },
  { name: "Priya Shah", role: "Head of Talent, Greenline Partners", quote: "A consistent partner for hard-to-fill roles — thorough screening and transparent timelines." },
  { name: "Marcus Allen", role: "Founder, Eastern Land Co.", quote: "They took the time to understand our workflow and delivered candidates who fit right in." },
  { name: "Laura Finch", role: "Talent Acquisition Lead, Summit Ridge", quote: "Onboarding support was excellent — the new hires were productive from week one." },
  { name: "Omar Ruiz", role: "CTO, LandLogic", quote: "Their screening eliminated cycles of bad interviews and gave us quality choices fast." },
];

const candidateTestimonials = [
  { name: "Marcus Reyes", role: "Senior Land Manager — Placed at Greenridge", quote: "The team guided me through the whole interview process and found a role that matched my goals. Communication was clear and consistent." },
  { name: "Hannah Lee", role: "Operations Coordinator — Placed at HarborPoint", quote: "I was nervous about remote onboarding, but they made it painless. The hiring timeline matched what they promised." },
  { name: "Samuel Kim", role: "Project Lead — Placed at Terranov", quote: "Thoughtful feedback, great prep, and a smooth negotiation — I felt supported every step of the way." },
  { name: "Aisha Patel", role: "Site Supervisor — Placed at Stonebridge", quote: "They helped me prepare for the technical interview and coached me through the salary discussion." },
  { name: "Diego Morales", role: "Survey Engineer — Placed at ClearPath", quote: "Fast responses and real support. The recruiter checked in at every milestone." },
  { name: "Renee Carter", role: "Regional Planner — Placed at BlueHarbor", quote: "Great prep materials and clear expectations — I appreciated the transparent process." },
  { name: "Tom Watkins", role: "Land Analyst — Placed at White Stone", quote: "I found a role that matched my skills, and the onboarding was handled professionally." },
  { name: "Maya Singh", role: "Project Coordinator — Placed at Vale Partners", quote: "Helpful interview coaching, timely feedback, and a smooth contract negotiation." },
  { name: "Noah Fischer", role: "Acquisitions Associate — Placed at Greenridge", quote: "They lined up excellent opportunities and helped me choose the best fit for my career." },
];

/* =========================
   Marquee CSS (for written testimonials)
   ========================= */
const marqueeCss = `
:root {
  --testimonial-tile-width: 300px;
  --marquee-gap: 1rem;
  --marquee-duration: 96s;
}
.testimonials-marquee { overflow: hidden; width: 100%; position: relative; }
.testimonials-marquee__track { display:flex; gap:var(--marquee-gap); align-items:stretch; width:max-content; animation:marquee linear var(--marquee-duration) infinite; overflow:visible; }
.testimonials-marquee__item { flex: 0 0 var(--testimonial-tile-width); display:block; }
@keyframes marquee { from { transform: translateX(0);} to { transform: translateX(-50%);} }
.testimonials-marquee:hover .testimonials-marquee__track { animation-play-state: paused; }
@media (max-width:640px) { :root { --testimonial-tile-width:260px; } }
`;

/* =========================
   VideoThumbnail (attempt capture frame -> fallback)
   ========================= */
function VideoThumbnail({ src, alt }: { src: string; alt?: string }) {
  const hiddenVideoRef = useRef<HTMLVideoElement | null>(null);
  const [thumbUrl, setThumbUrl] = useState<string | null>(null);
  const [captureFailed, setCaptureFailed] = useState(false);

  useEffect(() => {
    let mounted = true;
    let fallbackTimer: number | undefined;

    async function captureFrame(v: HTMLVideoElement) {
      try {
        const t = Math.min(0.05, (v.duration && v.duration / 10) || 0.05);
        await new Promise<void>((resolve) => {
          const onSeeked = () => { v.removeEventListener("seeked", onSeeked); resolve(); };
          v.addEventListener("seeked", onSeeked);
          try { v.currentTime = t; } catch { v.removeEventListener("seeked", onSeeked); resolve(); }
        });
        try { v.pause(); } catch {}
        const width = v.videoWidth || 640;
        const height = v.videoHeight || Math.round((width * 9) / 16);
        const canvas = document.createElement("canvas");
        canvas.width = width; canvas.height = height;
        const ctx = canvas.getContext("2d");
        if (!ctx) throw new Error("No canvas context");
        ctx.drawImage(v, 0, 0, width, height);
        const dataUrl = canvas.toDataURL("image/png");
        if (mounted) setThumbUrl(dataUrl);
      } catch (err) {
        if (mounted) setCaptureFailed(true);
      }
    }

    const v = hiddenVideoRef.current;
    if (!v) return;
    const onLoadedData = () => {
      captureFrame(v);
      fallbackTimer = window.setTimeout(() => { if (mounted && !thumbUrl) setCaptureFailed(true); }, 1500);
    };
    v.addEventListener("loadeddata", onLoadedData, { once: true });
    try { v.load(); } catch {}
    return () => {
      mounted = false;
      v.removeEventListener("loadeddata", onLoadedData);
      if (fallbackTimer) window.clearTimeout(fallbackTimer);
    };
  }, [src]);

  return (
    <div className="w-full h-56 md:h-64 lg:h-72 bg-gray-100 relative overflow-hidden rounded-t-md">
      {thumbUrl ? (
        <img src={thumbUrl} alt={alt ?? "video thumbnail"} className="w-full h-full object-cover" />
      ) : (
        <>
          <video
            ref={hiddenVideoRef}
            src={src}
            muted
            playsInline
            preload="metadata"
            className={`w-full h-full object-cover ${captureFailed ? "block" : "hidden"}`}
            aria-hidden={!captureFailed}
          />
          {!captureFailed && (
            <div className="w-full h-full bg-gray-100 flex items-center justify-center">
              <div className="rounded-full bg-green-700/90 text-white p-3 shadow-lg">
                <Play className="w-5 h-5" />
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

/* =========================
   WrittenTestimonialCard
   ========================= */
function WrittenTestimonialCard({ testimonial }: { testimonial: { name: string; role: string; quote: string } }) {
  return (
    <Card className="p-4 h-full flex flex-col justify-between rounded-lg shadow-sm bg-gradient-to-r from-green-50/80 to-white border border-green-100">
      <div><p className="text-sm text-foreground/90 line-clamp-4">{testimonial.quote}</p></div>
      <div className="mt-4 border-t-2 border-green-200 pt-3">
        <p className="font-semibold text-sm text-foreground">{testimonial.name}</p>
        <p className="text-xs text-muted-foreground">{testimonial.role}</p>
      </div>
    </Card>
  );
}

/* =========================
   TestimonialsMarquee
   ========================= */
function TestimonialsMarquee({ items, ariaLabel }: { items: { name: string; role: string; quote: string }[]; ariaLabel?: string; }) {
  const duplicated = [...items, ...items];
  return (
    <div className="relative testimonials-marquee" role="region" aria-label={ariaLabel ?? "Testimonials"}>
      <style>{marqueeCss}</style>
      <div className="testimonials-marquee__track" aria-hidden="false">
        {duplicated.map((item, idx) => (
          <div key={idx} className="testimonials-marquee__item p-2 h-full">
            <div className="transform-gpu transition-transform duration-300 will-change-transform hover:scale-125 hover:z-30">
              <WrittenTestimonialCard testimonial={item} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* =========================
   VIDEO CAROUSEL (pixel-based sizing)
   ========================= */
function VideoCarousel({ videos, title, onPlay }: { videos: { id: number; name: string; role: string; src: string }[]; title?: string; onPlay: (src: string) => void; }) {
  const [startIndex, setStartIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const [viewportWidth, setViewportWidth] = useState(0);

  // update itemsPerView and measure viewport
  useEffect(() => {
    function update() {
      let newItemsPerView = 3;
      if (window.innerWidth < 640) newItemsPerView = 1;
      else if (window.innerWidth < 1024) newItemsPerView = 2;
      newItemsPerView = Math.min(newItemsPerView, Math.max(1, videos.length));
      setItemsPerView(prev => {
        if (prev !== newItemsPerView) {
          setStartIndex(s => Math.min(s, Math.max(0, videos.length - newItemsPerView)));
          return newItemsPerView;
        }
        return prev;
      });
      const w = viewportRef.current?.clientWidth ?? window.innerWidth;
      setViewportWidth(w);
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [videos.length]);

  // measure once more if viewportRef changes
  useEffect(() => {
    if (!viewportRef.current) return;
    const ro = new ResizeObserver(() => {
      setViewportWidth(viewportRef.current?.clientWidth ?? window.innerWidth);
    });
    ro.observe(viewportRef.current);
    return () => ro.disconnect();
  }, []);

  const maxStart = Math.max(0, videos.length - itemsPerView);
  const itemWidth = Math.max(0, Math.floor((viewportWidth || window.innerWidth) / Math.max(1, itemsPerView)));

  const goPrev = () => setStartIndex(s => (s <= 0 ? maxStart : s - 1));
  const goNext = () => setStartIndex(s => (s >= maxStart ? 0 : s + 1));

  // keyboard
  useEffect(() => {
    function onKey(e: KeyboardEvent) { if (e.key === "ArrowLeft") goPrev(); if (e.key === "ArrowRight") goNext(); }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  // center item index for emphasis
  const centerOffset = Math.floor(itemsPerView / 2);
  const centerIndex = Math.min(videos.length - 1, startIndex + centerOffset);

  return (
    <div>
      {title && <h3 className="text-base font-semibold mb-4">{title}</h3>}
      <div className="flex items-center gap-3">
        <button aria-label="Previous" onClick={goPrev} className="p-2 rounded-full bg-white border shadow-sm hover:bg-gray-50">
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div ref={viewportRef} className="overflow-hidden w-full">
          {/* track width = itemWidth * videos.length, translate = startIndex * itemWidth */}
          <div
            className="flex"
            style={{
              width: `${itemWidth * videos.length}px`,
              transform: `translateX(-${startIndex * itemWidth}px)`,
              transition: "transform 300ms ease",
            }}
          >
            {videos.map((v, idx) => {
              const isCenter = idx === centerIndex;
              return (
                <div key={v.id} style={{ flex: `0 0 ${itemWidth}px`, maxWidth: `${itemWidth}px` }} className="px-2">
                  <article className={`bg-white rounded-lg overflow-hidden border border-gray-100 flex flex-col ${"h-[540px] max-h-[540px]"}`}>
                    <div className="relative overflow-hidden rounded-t-lg h-72 md:h-80 lg:h-96 bg-gray-100">
                      <VideoThumbnail src={v.src} alt={v.name} />
                      <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-green-700/95 flex items-center justify-center shadow" style={{ border: "4px solid rgba(255,255,255,0.06)" }}>
                        <Play className="w-5 h-5 text-white" />
                      </div>
                    </div>

                    <div className="p-4 flex-1 overflow-auto">
                      <div className="font-semibold text-sm">{v.name}</div>
                      <div className="text-xs text-gray-500 mt-1">{v.role}</div>
                      <div className="mt-4">
                        <button onClick={() => onPlay(v.src)} className="inline-flex items-center gap-2 px-3 py-2 bg-green-700 text-white rounded-md text-sm shadow">
                          <Play className="w-4 h-4" /> Play
                        </button>
                      </div>
                    </div>
                  </article>
                </div>
              );
            })}
          </div>
        </div>

        <button aria-label="Next" onClick={goNext} className="p-2 rounded-full bg-white border shadow-sm hover:bg-gray-50">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

/* =========================
   Main TestimonialsSection (renders both carousels and marquees)
   ========================= */
export default function TestimonialsSection() {
  const [playingSrc, setPlayingSrc] = useState<string | null>(null);

  return (
    <section className="px-6 py-10">
      <div className="mb-14">
        <h2 className="text-xl font-semibold mb-6">Client Video Testimonials</h2>
        <VideoCarousel videos={clientVideoTestimonials} onPlay={(src) => setPlayingSrc(src)} />
      </div>

      <div className="mb-14">
        <h2 className="text-xl font-semibold mb-6">Candidate Video Testimonials</h2>
        {/* this uses the full candidateVideoTestimonials list (all 9) */}
        <VideoCarousel videos={candidateVideoTestimonials} onPlay={(src) => setPlayingSrc(src)} />
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-6">Client Testimonials</h2>
        <TestimonialsMarquee items={clientWrittenTestimonials} ariaLabel="Client testimonials" />
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-6">Candidate Testimonials</h2>
        <TestimonialsMarquee items={candidateTestimonials} ariaLabel="Candidate testimonials" />
      </div>

      <AnimatePresence>
        {playingSrc && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4" onClick={() => setPlayingSrc(null)}>
            <motion.div initial={{ scale: 0.95 }} animate={{ scale: 1 }} exit={{ scale: 0.95 }} className="w-full max-w-3xl bg-white rounded-lg overflow-hidden" onClick={(e) => e.stopPropagation()}>
              <div className="relative">
                <video src={playingSrc || undefined} controls autoPlay className="w-full h-[60vh] object-cover bg-black" />
                <button aria-label="Close" onClick={() => setPlayingSrc(null)} className="absolute top-3 right-3 bg-white rounded-full p-2 shadow">
                  <X className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
