import { motion } from "framer-motion";
import { Button } from "../ui/Components";
import { useTypingEffect } from "../../hooks/useAnimations";
import siteData from "../../data/siteData";
import { ChevronDown } from "lucide-react";

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
      <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-navy/40" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">

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
              className="text-4xl sm:text-5xl lg:text-[52px] font-bold text-white leading-[1.1] mb-6"
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

          {/* Right column — doctor image with floating stats */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative">
              {/* Main doctor image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="w-80 h-80 xl:w-[380px] xl:h-[420px] rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_80px_rgba(0,180,160,0.15)]"
              >
                <img
                  src="/assets/doctor-1.png"
                  alt="Healthcare professional"
                  className="w-full h-full object-cover object-top"
                />
              </motion.div>

              {/* Floating stat — bottom left */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 }}
                className="absolute -bottom-5 -left-10 bg-white rounded-2xl px-5 py-3 shadow-xl"
              >
                <div className="text-2xl font-bold text-navy">50+</div>
                <div className="text-xs text-text-sub">Doctors Onboarded</div>
              </motion.div>

              {/* Floating stat — top right */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.1 }}
                className="absolute -top-5 -right-8 bg-teal rounded-2xl px-5 py-3 shadow-xl"
              >
                <div className="text-2xl font-bold text-white">#1</div>
                <div className="text-xs text-white/80">Google Rankings</div>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
