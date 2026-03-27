import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading, Reveal } from "../ui/Components";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import siteData from "../../data/siteData";

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const items = siteData.testimonials;

  useEffect(() => {
    const t = setInterval(() => setActive((p) => (p + 1) % items.length), 6000);
    return () => clearInterval(t);
  }, [items.length]);

  const prev = () => setActive((p) => (p - 1 + items.length) % items.length);
  const next = () => setActive((p) => (p + 1) % items.length);

  return (
    <section
      className="py-20 lg:py-24 relative"
      style={{
        backgroundImage: "url(/assets/section-divider.png)",
        backgroundSize: "300px",
        backgroundColor: "#EEF2F5",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          title="What Doctors Are Saying"
          subtitle="Real doctors. Real results. Zero fluff."
        />

        <Reveal>
          <div className="max-w-3xl mx-auto relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.3 } }}
                exit={{ opacity: 0, y: -10, transition: { duration: 0.15 } }}
                className="bg-white rounded-3xl p-8 sm:p-10 shadow-[0_4px_24px_rgba(10,22,40,0.06)] text-center"
              >
                <Quote size={36} className="text-teal/20 mx-auto mb-4" />
                <p className="text-lg sm:text-xl text-navy leading-relaxed mb-8 font-medium">
                  "{items[active].quote}"
                </p>
                <img
                  src={items[active].avatar}
                  alt={items[active].name}
                  className="w-14 h-14 rounded-full mx-auto mb-3 object-cover object-top border-2 border-teal/20"
                  loading="lazy"
                />
                <div className="font-bold text-navy">{items[active].name}</div>
                <div className="text-sm text-text-sub">{items[active].role}</div>
                <div className="flex justify-center gap-0.5 mt-2" aria-label={`${items[active].rating} out of 5 stars`}>
                  {Array.from({ length: items[active].rating }).map((_, i) => (
                    <Star key={i} size={16} className="text-gold fill-gold" />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Nav */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prev}
                aria-label="Previous testimonial"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-teal hover:text-teal transition-colors"
              >
                <ChevronLeft size={18} />
              </button>
              <div className="flex gap-2" role="tablist" aria-label="Testimonial navigation">
                {items.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    role="tab"
                    aria-selected={i === active}
                    aria-label={`Testimonial ${i + 1} of ${items.length}`}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      i === active ? "bg-teal w-7" : "bg-border w-2.5"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                aria-label="Next testimonial"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-teal hover:text-teal transition-colors"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
