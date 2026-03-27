import { useState, useRef } from "react";
import { SectionHeading, Reveal } from "../ui/Components";

export default function BeforeAfter() {
  const [pos, setPos] = useState(50);
  const containerRef = useRef(null);
  const dragging = useRef(false);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPos((x / rect.width) * 100);
  };

  const onPointerDown = () => { dragging.current = true; };
  const onPointerUp = () => { dragging.current = false; };
  const onPointerMove = (e) => { if (dragging.current) handleMove(e.clientX); };

  const onKeyDown = (e) => {
    if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 2));
    if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 2));
  };

  return (
    <section className="py-20 lg:py-24 bg-navy relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          title="See the Transformation"
          subtitle="Drag the slider to compare before and after Clinexa."
          light
        />

        <Reveal>
          <div
            ref={containerRef}
            role="slider"
            tabIndex={0}
            aria-label="Before and after website comparison. Use arrow keys to adjust."
            aria-valuenow={Math.round(pos)}
            aria-valuemin={0}
            aria-valuemax={100}
            className="relative max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl cursor-col-resize aspect-[16/9] select-none focus:outline-none focus:ring-2 focus:ring-teal"
            onPointerDown={onPointerDown}
            onPointerUp={onPointerUp}
            onPointerLeave={onPointerUp}
            onPointerMove={onPointerMove}
            onKeyDown={onKeyDown}
          >
            {/* After (full) */}
            <img
              src="/assets/after-clinexa.png"
              alt="After Clinexa — professional doctor website"
              className="absolute inset-0 w-full h-full object-cover object-left-top"
              draggable={false}
              loading="lazy"
            />

            {/* Before (clipped) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${pos}%` }}
            >
              <img
                src="/assets/before-mock.png"
                alt="Before — basic directory listing"
                className="w-full h-full object-cover object-left-top"
                style={{ width: `${containerRef.current?.offsetWidth || 1000}px`, maxWidth: "none" }}
                draggable={false}
                loading="lazy"
              />
            </div>

            {/* Slider line */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-teal z-10"
              style={{ left: `${pos}%`, transform: "translateX(-50%)" }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-teal rounded-full flex items-center justify-center shadow-lg">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M7 4L3 10L7 16M13 4L17 10L13 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            {/* Labels */}
            <div className="absolute top-4 left-4 bg-black/60 backdrop-blur text-white text-xs font-bold px-3 py-1.5 rounded-full z-20">
              BEFORE
            </div>
            <div className="absolute top-4 right-4 bg-teal/90 backdrop-blur text-white text-xs font-bold px-3 py-1.5 rounded-full z-20">
              AFTER CLINEXA
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="text-center mt-8 max-w-xl mx-auto">
            <p className="text-white/60 text-sm italic font-['Playfair_Display']">
              "Dr. Sharma went from 3 patient inquiries per month to 18 after going live with Clinexa."
            </p>
            <p className="text-white/30 text-xs mt-1.5">— Verified client result, 60 days post-launch</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
