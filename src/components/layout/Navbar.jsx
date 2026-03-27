import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, Menu, X } from "lucide-react";
import { Button } from "../ui/Components";
import siteData from "../../data/siteData";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top micro bar */}
      <div className="bg-navy text-white/80 text-sm hidden lg:block">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-10">
          <div className="flex items-center gap-6">
            <a href={`tel:${siteData.brand.phone}`} className="flex items-center gap-1.5 hover:text-teal transition-colors">
              <Phone size={13} /> {siteData.brand.phone}
            </a>
            <a href={`mailto:${siteData.brand.email}`} className="flex items-center gap-1.5 hover:text-teal transition-colors">
              <Mail size={13} /> {siteData.brand.email}
            </a>
          </div>
          <span className="text-xs border border-teal/40 text-teal rounded-full px-3 py-0.5 tracking-wide">
            For Doctors & Healthcare Professionals
          </span>
        </div>
      </div>

      {/* Main nav */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-lg shadow-[0_2px_16px_rgba(10,22,40,0.04)] py-3"
            : "bg-white py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          <a href="#" className="flex-shrink-0">
            <img src="/assets/logo.png" alt="Clinexa" className="h-12 sm:h-14 w-auto" />
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {siteData.nav.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/ /g, "-")}`}
                className="text-[15px] font-medium text-text-sub hover:text-teal transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal rounded-full transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <Button href="#contact" size="sm">
              Book Free Demo
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-navy"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-0 top-[72px] z-40 bg-white/98 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col items-center gap-6 pt-12">
              {siteData.nav.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/ /g, "-")}`}
                  className="text-xl font-semibold text-navy"
                  onClick={() => setMobileOpen(false)}
                >
                  {item}
                </a>
              ))}
              <Button href="#contact" onClick={() => setMobileOpen(false)}>
                Book Free Demo
              </Button>
              <a href={`tel:${siteData.brand.phone}`} className="text-text-sub flex items-center gap-2 mt-4">
                <Phone size={16} /> {siteData.brand.phone}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
