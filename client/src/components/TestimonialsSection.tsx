// client/src/components/TestimonialsSection.tsx
import React, { useEffect, useRef, useState } from "react";
import { Play, X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/* =========================
   Video assets (your existing imports)
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
   Data arrays
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

/* =========================
   Minimal marquee CSS (inline)
   ========================= */
const marqueeCss = `
:root { --testimonial-tile-width: 300px; --marquee-gap: 1rem; --marquee-duration: 96s; }
.testimonials-marquee { overflow: hidden; width: 100%; position: relative; }
.testimonials-marquee__track { display:flex; gap:var(--marquee-gap); align-items:stretch; width:max-content; animation:marquee linear var(--marquee-duration) infinite; overflow:visible; }
.testimonials-marquee__item { flex: 0 0 var(--testimonial-tile-width); display:block; }
@keyframes marquee { from { transform: translateX(0);} to { transform: translateX(-50%);} }
`;

/* =========================
   VideoThumbnail - capture a frame, fallback gracefully.
   Media box has a hard pixel height and object-fit:cover.
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
          const onSeeked = () => {
            v.removeEventListener("seeked", onSeeked);
            resolve();
          };
          v.addEventListener("seeked", onSeeked);
          try {
            v.currentTime = t;
          } catch {
            v.removeEventListener("seeked", onSeeked);
            resolve();
          }
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
    height: 360, // fixed px height so portrait videos are cropped, not stretched
    minHeight: 360,
    maxHeight: 360,
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
   Written testimonial and marquee (kept minimal)
   ========================= */
function WrittenTestimonialCard({ testimonial }: { testimonial: { name: string; role: string; quote: string } }) {
  return (
    <div style={{ padding: 16, borderRadius: 8, background: "linear-gradient(90deg, rgba(244,250,248,0.98), white)", border: "1px solid rgba(6,95,70,0.06)" }}>
      <p style={{ fontSize: 14, color: "rgba(0,0,0,0.8)" }}>{testimonial.quote}</p>
      <div style={{ marginTop: 12, borderTop: "1px solid rgba(6,95,70,0.06)", paddingTop: 12 }}>
        <div style={{ fontWeight: 700 }}>{testimonial.name}</div>
        <div style={{ fontSize: 12, color: "#6b7280" }}>{testimonial.role}</div>
      </div>
    </div>
  );
}
function TestimonialsMarquee({ items }: { items: { name: string; role: string; quote: string }[] }) {
  const duplicated = [...items, ...items];
  return (
    <div style={{ position: "relative", width: "100%" }} role="region" aria-label="Testimonials">
      <style>{marqueeCss}</style>
      <div className="testimonials-marquee__track" style={{ display: "flex", gap: "1rem" }}>
        {duplicated.map((item, idx) => (
          <div key={idx} style={{ flex: "0 0 300px", padding: 8 }}>
            <WrittenTestimonialCard testimonial={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

/* =========================
   VideoCarousel
   - KEY FIX: track uses alignItems: 'flex-start' to prevent stretch
   - card has explicit border and fixed height
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
    height: 540,
    maxHeight: 540,
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
                  <div style={{ width: "100%", height: 360, minHeight: 360, maxHeight: 360, overflow: "hidden", position: "relative", background: "#f6f6f6" }}>
                    <VideoThumbnail src={v.src} alt={v.name} />
                    <div aria-hidden style={{ pointerEvents: "none", position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)", width: 44, height: 44, borderRadius: 999, background: "rgba(6,95,70,0.95)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 6px 16px rgba(0,0,0,0.12)", border: "4px solid rgba(255,255,255,0.06)" }}>
                      <Play style={{ width: 18, height: 18, color: "white" }} />
                    </div>
                  </div>

                  <div style={{ padding: 16, flex: 1, overflow: "auto" }}>
                    <div style={{ fontWeight: 700, fontSize: 14 }}>{v.name}</div>
                    <div style={{ color: "#6b7280", fontSize: 12, marginTop: 6 }}>{v.role}</div>
                    <div style={{ marginTop: 12 }}>
                      <button onClick={() => onPlay(v.src)} style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 12px", background: "#0b8d57", color: "white", borderRadius: 6, fontSize: 13 }}>
                        <Play style={{ width: 14, height: 14 }} /> Play
                      </button>
                    </div>
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

  return (
    <section style={{ padding: "40px 0" }}>
      <div style={pageContainerStyle}>
        <div style={{ marginBottom: 56 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 18 }}>Client Video Testimonials</h2>
          <VideoCarousel videos={clientVideoTestimonials} onPlay={src => setPlayingSrc(src)} />
        </div>

        <div style={{ marginBottom: 56 }}>
          <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 18 }}>Candidate Video Testimonials</h2>
          <VideoCarousel videos={candidateVideoTestimonials} onPlay={src => setPlayingSrc(src)} />
        </div>
      </div>

      <AnimatePresence>
        {playingSrc && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ position: "fixed", inset: 0, zIndex: 9999, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(0,0,0,0.6)", padding: 16 }} onClick={() => setPlayingSrc(null)}>
            <motion.div initial={{ scale: 0.95 }} animate={{ scale: 1 }} exit={{ scale: 0.95 }} style={{ width: "100%", maxWidth: 900, background: "white", borderRadius: 8, overflow: "hidden" }} onClick={e => e.stopPropagation()}>
              <div style={{ position: "relative" }}>
                <video src={playingSrc || undefined} controls autoPlay style={{ width: "100%", height: "60vh", objectFit: "cover", background: "black" }} />
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
