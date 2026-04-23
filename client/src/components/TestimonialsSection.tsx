// client/src/components/TestimonialsSection.tsx
import React, { useEffect, useRef, useState } from "react";
import { Play, X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SiTrustpilot, SiGoogle } from "react-icons/si";

/* =========================
  Video assets (your existing imports)
  ========================= */
import videoKevin from "@assets/Kevin's Testimonial.mp4";
import videoSam from "@assets/Sam's Testimonial .mov";
import videoNewClient from "@assets/4030993537cf451ca9872ad031c744b9-1764688585496.mp4";
import videoDaniel from "@assets/Daniel Slobodyan - Land Creative Solutions.mp4";
import videoZach from "@assets/Zach Nahas - CEO of Clear Path Land.mp4";
import videoJoshPierce from "@assets/Josh Pierce - CEO of Higher Ground Land.mp4";
import videoFrancisco from "@assets/Francisco Testimonial.mp4";

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
  Data arrays (videos + written testimonials)
  ========================= */
const clientVideoTestimonials = [
  { id: 1, name: "Kevin", role: "White Stone", src: videoKevin },
  { id: 2, name: "Sam", role: "Private Realtor", src: videoSam },
  { id: 3, name: "Nick Staley", role: "Land Growth Capital", src: videoNewClient },
  { id: 4, name: "Daniel Slobodyan", role: "Land Creative Solutions", src: videoDaniel },
  { id: 5, name: "Zach Nahas", role: "CEO of Clear Path Land", src: videoZach },
  { id: 6, name: "Josh Pierce", role: "CEO of Higher Ground Land", src: videoJoshPierce },
  { id: 7, name: "Francisco", role: "CEO, City on a Hill", src: videoFrancisco },
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
  Marquee CSS (inline)
  - includes pause-on-hover (JS + CSS) and tile hover scale 1.25x
  ========================= */
const marqueeCss = `
.testimonials-marquee { overflow: hidden; width: 100%; position: relative; padding: 8px 0; }
.testimonials-marquee__track { display:flex; gap:1rem; align-items:center; width:max-content; animation:marquee linear 96s infinite; will-change: transform; }
.testimonials-marquee__item { flex: 0 0 340px; box-sizing: border-box; }
.testimonial-tile { transition: transform 220ms ease, box-shadow 220ms ease; transform-origin: center; }
.testimonial-tile:hover { transform: scale(1.25); z-index: 30; box-shadow: 0 20px 40px rgba(0,0,0,0.18); }
@keyframes marquee { from { transform: translateX(0);} to { transform: translateX(-50%);} }
`;

/* =========================
  VideoThumbnail - capture a frame, fallback gracefully
  - media box has fixed pixel height and object-fit:cover
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
      } catch {
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

  const mediaBoxStyle: React.CSSProperties = {
    width: "100%",
    height: 320, // reduced so body area is smaller and no big white gap
    minHeight: 320,
    maxHeight: 320,
    overflow: "hidden",
    background: "#f6f6f6",
    position: "relative",
  };
  const mediaInnerStyle: React.CSSProperties = {
    width: "100%",
    height: "100%",
    display: "block",
    objectFit: "cover" as const,
  };

  return (
    <div style={mediaBoxStyle}>
      {thumbUrl ? (
        <img src={thumbUrl} alt={alt ?? "video thumbnail"} style={mediaInnerStyle} />
      ) : (
        <>
          <video
            ref={hiddenVideoRef}
            src={src}
            muted
            playsInline
            preload="metadata"
            style={{ ...mediaInnerStyle, display: captureFailed ? "block" : "none" }}
            aria-hidden={!captureFailed}
          />
          {!captureFailed && (
            <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ borderRadius: 999, background: "rgba(6,95,70,0.95)", padding: 10, boxShadow: "0 6px 16px rgba(0,0,0,0.12)" }}>
                <Play style={{ width: 20, height: 20, color: "white" }} />
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

/* =========================
  WrittenTestimonialCard (bigger + restored pale-green styling)
   - divider is now green
   - has class 'testimonial-tile' for hover animation
   - divider is green and tile has hover class
  ========================= */
function WrittenTestimonialCard({ testimonial }: { testimonial: { name: string; role: string; quote: string } }) {
  const cardStyle: React.CSSProperties = {
    padding: 18,
    borderRadius: 8,
    boxSizing: "border-box",
    background: "linear-gradient(90deg, rgba(236,252,245,0.95), rgba(255,255,255,0.98))", // pale-green
    border: "1px solid rgba(6,95,70,0.10)",
    color: "rgba(0,0,0,0.85)",
    minHeight: 170,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };

  const quoteStyle: React.CSSProperties = { fontSize: 14, lineHeight: 1.4, margin: 0, color: "rgba(0,0,0,0.85)" };
  const metaStyle: React.CSSProperties = { marginTop: 12, paddingTop: 10, borderTop: "2px solid rgba(6,95,70,0.22)", fontSize: 13, color: "#374151" };

  return (
    <div className="testimonial-tile" style={cardStyle}>
      <p style={quoteStyle}>{testimonial.quote}</p>
      <div style={metaStyle}>
        <div style={{ fontWeight: 700 }}>{testimonial.name}</div>
        <div style={{ fontSize: 12, color: "#6b7280", marginTop: 6 }}>{testimonial.role}</div>
      </div>
    </div>
  );
}

/* =========================
   TestimonialsMarquee
   - wrapped in centered container (maxWidth:1200) and clips overflow
   - pause is controlled via state for robust pause-on-hover
   TestimonialsMarquee - centered/clipped + JS pause + CSS hover transform
  ========================= */
function TestimonialsMarquee({ items }: { items: { name: string; role: string; quote: string }[] }) {
  const duplicated = [...items, ...items];
  const [paused, setPaused] = useState(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  // Track style will be adjusted with paused state
  const marqueeWrapperStyle: React.CSSProperties = {
    maxWidth: 1200,
    margin: "0 auto",
    width: "100%",
    overflow: "hidden",
    boxSizing: "border-box",
    padding: "8px 0",
  };

  const trackStyle: React.CSSProperties = {
    display: "flex",
    gap: "1rem",
    alignItems: "center",
    width: "max-content",
    animation: "marquee linear 96s infinite",
    animationPlayState: paused ? "paused" : "running",
  };

  return (
    <div
      ref={wrapperRef}
      style={marqueeWrapperStyle}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <style>{marqueeCss}</style>
      <div className="testimonials-marquee__track" aria-hidden="false" style={trackStyle}>
        {duplicated.map((item, idx) => (
          <div
            key={idx}
            className="testimonials-marquee__item"
            style={{ flex: "0 0 340px" }}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div className="testimonials-marquee__item" style={{ flex: "0 0 340px" }}>
              <WrittenTestimonialCard testimonial={item} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* =========================
  VideoCarousel
  - track alignItems: 'flex-start'
   - removed bottom Play button
   - removed bottom Play button and removed fixed card height
  - center play icon is a real button that calls onPlay()
   - reduced card & media height (to remove large empty white area)
  ========================= */
function VideoCarousel({ videos, onPlay }: { videos: { id: number; name: string; role: string; src: string }[]; onPlay: (src: string) => void; }) {
  const [startIndex, setStartIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const [viewportWidth, setViewportWidth] = useState(0);

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

  const cardStyle: React.CSSProperties = {
    height: 480, // reduced from 540 to remove large empty bottom area (media 320 + body ~160)
    maxHeight: 480,
    display: "flex",
    flexDirection: "column",
    border: "1px solid rgba(6,95,70,0.10)",
    borderRadius: 8,
    overflow: "hidden",
    background: "#ffffff",
    boxSizing: "border-box",
  };

  const carouselContainerStyle: React.CSSProperties = {
    maxWidth: 1200,
    margin: "0 auto",
    width: "100%",
    boxSizing: "border-box",
  };

  return (
    <div style={carouselContainerStyle}>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <button aria-label="Previous" onClick={goPrev} style={{ padding: 8, borderRadius: 999, background: "white", border: "1px solid rgba(0,0,0,0.06)" }}>
          <ChevronLeft style={{ width: 18, height: 18 }} />
        </button>

        <div ref={viewportRef} style={{ overflow: "hidden", width: "100%" }}>
          {/* IMPORTANT: prevent children from stretching to the tallest item */}
          <div style={{ display: "flex", alignItems: "flex-start", width: `${itemWidth * videos.length}px`, transform: `translateX(-${startIndex * itemWidth}px)`, transition: "transform 300ms ease" }}>
            {videos.map(v => (
              <div key={v.id} style={{ flex: `0 0 ${itemWidth}px`, maxWidth: `${itemWidth}px`, boxSizing: "border-box", padding: 12 }}>
                <article style={cardStyle}>
                  <div style={{ width: "100%", height: 320, minHeight: 320, maxHeight: 320, overflow: "hidden", position: "relative", background: "#f6f6f6" }}>
                    <VideoThumbnail src={v.src} alt={v.name} />

                    {/* Center play button: real button that opens modal */}
                    <button
                      aria-label={`Play ${v.name}`}
                      onClick={() => onPlay(v.src)}
                      style={{
                        position: "absolute",
                        left: "50%",
                        top: "50%",
                        transform: "translate(-50%, -50%)",
                        width: 48,
                        height: 48,
                        borderRadius: 999,
                        background: "rgba(6,95,70,0.95)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 6px 16px rgba(0,0,0,0.12)",
                        border: "4px solid rgba(255,255,255,0.06)",
                        cursor: "pointer",
                      }}
                    >
                      <Play style={{ width: 20, height: 20, color: "white" }} />
                    </button>
                  </div>

                  {/* compact body: no flex:1 so it won't create large whitespace */}
                  <div style={{ padding: 12 }}>
                    <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 6 }}>{v.name}</div>
                    <div style={{ color: "#6b7280", fontSize: 12 }}>{v.role}</div>
                    {/* "Play" button removed from here by design */}
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>

        <button aria-label="Next" onClick={goNext} style={{ padding: 8, borderRadius: 999, background: "white", border: "1px solid rgba(0,0,0,0.06)" }}>
          <ChevronRight style={{ width: 18, height: 18 }} />
        </button>
      </div>
    </div>
  );
}

/* =========================
  Main component
  ========================= */
export default function TestimonialsSection() {
  const [playingSrc, setPlayingSrc] = useState<string | null>(null);

  const pageContainerStyle: React.CSSProperties = {
    maxWidth: 1200,
    margin: "0 auto",
    padding: "40px 24px",
    boxSizing: "border-box",
  };

  const headingStyle: React.CSSProperties = {
    textAlign: "center",
    fontSize: 24,
    fontWeight: 800,
    marginBottom: 18,
  };

  // Google Reviews link (kept as the g.page you used previously)
  const googleReviewUrl = "https://g.page/r/CXjNZjj4Vu59EBM/review";
  const trustpilotUrl = "https://www.trustpilot.com/review/vitatalent.co";

  return (
    <section style={{ padding: "40px 0" }}>
      <div style={pageContainerStyle}>
        <div style={{ marginBottom: 56 }}>
          <h2 style={headingStyle}>Client Video Testimonials</h2>
          <VideoCarousel videos={clientVideoTestimonials} onPlay={src => setPlayingSrc(src)} />
        </div>

        <div style={{ marginBottom: 56 }}>
          <h2 style={headingStyle}>Candidate Video Testimonials</h2>
          <VideoCarousel videos={candidateVideoTestimonials} onPlay={src => setPlayingSrc(src)} />
        </div>

        {/* WRITTEN TESTIMONIALS */}
        <div style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 12, textAlign: "center" }}>Client Testimonials</h2>
          <TestimonialsMarquee items={clientWrittenTestimonials} />
        </div>

        <div style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 12, textAlign: "center" }}>Candidate Testimonials</h2>
          <TestimonialsMarquee items={candidateTestimonials} />

          {/* === NEW: Primary green review buttons BELOW the marquee cards of candidate testimonials === */}
          <div style={{ marginTop: 16, textAlign: "center" }}>
            <p style={{ marginBottom: 8, color: "#6b7280" }}>Read more reviews on</p>

            <div style={{ display: "inline-flex", gap: 12 }}>
              <Button size="lg" asChild>
                <a
                  href={trustpilotUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Trustpilot"
                  style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "0 12px" }}
                >
                  <SiTrustpilot style={{ width: 18, height: 18 }} />
                  <span>Trustpilot</span>
                </a>
              </Button>

              <Button size="lg" asChild>
                <a
                  href={googleReviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Google Reviews"
                  style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "0 12px" }}
                >
                  <SiGoogle style={{ width: 18, height: 18 }} />
                  <span>Google</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {playingSrc && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ position: "fixed", inset: 0, zIndex: 9999, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(0,0,0,0.6)", padding: 16 }}
            onClick={() => setPlayingSrc(null)}
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              style={{ width: "100%", maxWidth: 1200, background: "white", borderRadius: 8, overflow: "hidden" }}
              onClick={e => e.stopPropagation()}
            >
              <div style={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "center", padding: 20 }}>
                {/* Keep original aspect and resolution — contain inside max dims */}
                <video
                  src={playingSrc || undefined}
                  controls
                  autoPlay
                  style={{
                    maxWidth: "90vw",
                    maxHeight: "90vh",
                    width: "auto",
                    height: "auto",
                    display: "block",
                    background: "black",
                  }}
                />
                <button aria-label="Close" onClick={() => setPlayingSrc(null)} style={{ position: "absolute", top: 12, right: 12, background: "white", borderRadius: 999, padding: 8, boxShadow: "0 4px 12px rgba(0,0,0,0.12)" }}>
                  <X style={{ width: 16, height: 16 }} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
