import React from "react";
import "./TestimonialSection.css";

export type Testimonial = {
  id: string;
  name: string;
  title?: string;
  // either a thumbnail + video or a single image
  thumbnail?: string;
  videoUrl?: string;
  imageUrl?: string;
};

type Props = {
  testimonials: Testimonial[];
  columns?: number; // how many columns on wide screens
};

export default function TestimonialSection({ testimonials, columns = 3 }: Props) {
  return (
    <section className="testimonial-section">
      <h2 className="testimonial-heading">Video Testimonials</h2>

      <div
        className="testimonial-grid"
        style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
      >
        {testimonials.map((t) => (
          <article key={t.id} className="testimonial-card" aria-label={`Testimonial from ${t.name}`}>
            <div className="testimonial-media">
              {/* Prefer a real <video> if you have an mp4 or source. The video tag is constrained
                  to the same height for every card to keep uniform sizing. */}
              {t.videoUrl ? (
                <video
                  className="testimonial-video"
                  src={t.videoUrl}
                  controls
                  playsInline
                  preload="metadata"
                />
              ) : t.imageUrl ? (
                <img className="testimonial-image" src={t.imageUrl} alt={t.name} />
              ) : (
                <div className="testimonial-thumb-fallback">
                  {t.thumbnail ? (
                    <img className="testimonial-image" src={t.thumbnail} alt={t.name} />
                  ) : (
                    <div className="testimonial-no-media" />
                  )}
                </div>
              )}

              {/* Optional visible play circle to match the green play in your screenshot */}
              <button className="testimonial-play" aria-hidden>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M8 5v14l11-7L8 5z" fill="white" />
                </svg>
              </button>
            </div>

            <div className="testimonial-body">
              <div className="testimonial-name">{t.name}</div>
              {t.title && <div className="testimonial-title">{t.title}</div>}
              {/* If you have copy / text, it can go here. Body area is scrollable if overflow. */}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
