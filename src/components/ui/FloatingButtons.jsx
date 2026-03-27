import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, ArrowUp, MessageCircle } from "lucide-react";
import siteData from "../../data/siteData";

export default function FloatingButtons() {
  const [show, setShow] = useState(false);
  const d = siteData.brand;

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-end"
        >
          {/* Back to top */}
          <button
            onClick={scrollTop}
            aria-label="Back to top"
            className="w-11 h-11 bg-navy text-white rounded-full flex items-center justify-center shadow-lg hover:bg-navy-light transition-colors cursor-pointer"
          >
            <ArrowUp size={18} />
          </button>

          {/* Phone — mobile only */}
          <a
            href={`tel:${d.phone}`}
            aria-label={`Call us at ${d.phone}`}
            className="w-12 h-12 bg-teal text-white rounded-full flex items-center justify-center shadow-lg hover:bg-teal-dark transition-colors sm:hidden"
          >
            <Phone size={20} />
          </a>

          {/* WhatsApp */}
          <a
            href={`https://wa.me/${d.phoneClean}?text=${encodeURIComponent(d.whatsappMsg)}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with us on WhatsApp"
            className="relative w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:scale-105 transition-transform"
          >
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-pulse-ring" />
            <MessageCircle size={24} className="relative z-10" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
