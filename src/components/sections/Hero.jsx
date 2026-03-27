import { motion } from "framer-motion";
import { Button } from "../ui/Components";
import { useTypingEffect } from "../../hooks/useAnimations";
import siteData from "../../data/siteData";
import { ChevronDown, Search, Star, TrendingUp, Globe } from "lucide-react";

function FloatingCard({ delay, children, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function HeroDashboard() {
  return (
    <div className="relative flex flex-col gap-4 items-center lg:items-end">

      {/* Google search result card */}
      <FloatingCard delay={0.5} className="w-full max-w-sm animate-float">
        <div className="bg-white rounded-2xl p-5 shadow-xl">
          <div className="flex items-center gap-2 mb-3">
            <Search size={14} className="text-text-muted" />
            <span className="text-sm text-text-muted">dentist near me jaipur</span>
          </div>
          <div className="border-t border-border pt-3">
            <div className="text-teal text-sm font-semibold">www.drsharma-dental.in</div>
            <div className="text-navy font-bold mt-0.5">Dr. Sharma's Dental Clinic — Jaipur</div>
            <div className="text-text-sub text-xs mt-1 flex items-center gap-1">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => <Star key={i} size={10} className="text-gold fill-gold" />)}
              </div>
              <span>4.9 · 127 reviews</span>
            </div>
          </div>
        </div>
      </FloatingCard>

      {/* Middle row — two small cards side by side */}
      <div className="flex gap-4 w-full max-w-sm">
        {/* #1 badge */}
        <FloatingCard delay={0.8} className="flex-1">
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="bg-teal rounded-2xl p-4 shadow-lg text-center"
          >
            <div className="text-3xl font-bold text-white">#1</div>
            <div className="text-xs text-white/80">on Google</div>
          </motion.div>
        </FloatingCard>

        {/* Patient growth */}
        <FloatingCard delay={1.0} className="flex-1">
          <div className="bg-white rounded-2xl p-4 shadow-xl">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-semibold text-text-sub">Inquiries</span>
              <TrendingUp size={14} className="text-teal" />
            </div>
            <div className="text-2xl font-bold text-navy">3x</div>
            <div className="text-[10px] text-teal font-medium">↑ in 60 days</div>
            <div className="flex items-end gap-0.5 mt-2 h-8">
              {[20, 30, 25, 40, 50, 65, 80, 95].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ delay: 1.4 + i * 0.06, duration: 0.3 }}
                  className={`flex-1 rounded-sm ${i >= 6 ? "bg-teal" : "bg-teal/25"}`}
                />
              ))}
            </div>
          </div>
        </FloatingCard>
      </div>

      {/* Review snippet */}
      <FloatingCard delay={1.2} className="w-full max-w-sm animate-float" style={{ animationDelay: "1.5s" }}>
        <div className="bg-white rounded-2xl p-4 shadow-xl flex items-start gap-3">
          <div className="flex-shrink-0 w-9 h-9 rounded-full bg-teal/10 flex items-center justify-center">
            <Globe size={16} className="text-teal" />
          </div>
          <div className="min-w-0">
            <div className="flex gap-0.5 mb-1">
              {[...Array(5)].map((_, i) => <Star key={i} size={10} className="text-gold fill-gold" />)}
            </div>
            <p className="text-xs text-text-sub italic leading-relaxed truncate">
              "Patients started finding me on Google within a month..."
            </p>
            <div className="text-[11px] font-semibold text-navy mt-1">— Dr. Rohan Mehta</div>
          </div>
        </div>
      </FloatingCard>
    </div>
  );
}

export default function Hero() {
  const typed = useTypingEffect(siteData.hero.rotatingTexts, 50, 30, 2500);
  const d = siteData.hero;

  return (
    <section className="relative overflow-hidden bg-navy min-h-[90vh] flex items-center">
      {/* BG image */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage: "url(/assets/hero-bg.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/85 to-navy/50" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full py-16 sm:py-20 lg:py-24">
        <div className="grid lg:grid-cols-[1fr_380px] gap-12 xl:gap-20 items-center">

          {/* Left column — text */}
          <div>
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 text-sm font-medium bg-teal/15 text-teal rounded-full px-4 py-1.5 mb-6 border border-teal/20">
                <span className="text-base">🩺</span> {d.eyebrow}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-[52px] font-bold text-white leading-[1.1] mb-6"
            >
              {d.headline}
              <span className="bg-gradient-to-r from-teal via-emerald-300 to-teal bg-clip-text text-transparent animate-shimmer">
                {d.headlineHighlight}
              </span>
              {d.headlineSuffix}
            </motion.h1>

            {/* Typing subheadline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg sm:text-xl text-white/60 mb-10 h-8"
            >
              We help doctors build →{" "}
              <span className="text-teal font-semibold">{typed}</span>
              <span className="typing-cursor" />
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <Button href="#contact" size="lg">
                {d.cta}
              </Button>
              <Button href="#how-it-works" variant="outline" size="lg">
                {d.ctaSecondary} <ChevronDown size={18} className="ml-1" />
              </Button>
            </motion.div>

            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex items-center gap-3"
            >
              <div className="flex -space-x-2">
                {["/assets/doctor-1.png", "/assets/doctor-2.png", "/assets/doctor-3.png"].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt="Doctor"
                    className="w-9 h-9 rounded-full border-2 border-navy object-cover object-top"
                  />
                ))}
                <div className="w-9 h-9 rounded-full border-2 border-navy bg-teal/20 flex items-center justify-center text-xs text-teal font-bold">
                  +48
                </div>
              </div>
              <span className="text-sm text-white/50">{d.socialProof}</span>
            </motion.div>
          </div>

          {/* Right column — floating dashboard (visible on mobile too, simplified) */}
          <div className="hidden sm:block">
            <HeroDashboard />
          </div>

        </div>
      </div>
    </section>
  );
}
