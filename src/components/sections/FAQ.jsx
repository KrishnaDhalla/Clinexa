import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading, Reveal } from "../ui/Components";
import { ChevronDown } from "lucide-react";
import siteData from "../../data/siteData";

function AccordionItem({ item, isOpen, onToggle, index }) {
  const panelId = `faq-panel-${index}`;
  const buttonId = `faq-btn-${index}`;

  return (
    <div className="border border-border rounded-2xl overflow-hidden transition-colors hover:border-teal/30">
      <button
        id={buttonId}
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="w-full flex items-center justify-between p-6 text-left gap-4 cursor-pointer"
      >
        <span className="font-semibold text-navy text-[15px] sm:text-base leading-snug">
          {item.q}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="flex-shrink-0"
        >
          <ChevronDown size={20} className="text-teal" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 text-text-sub text-[15px] leading-relaxed border-t border-border/50 pt-4">
              {item.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      id="faq"
      className="py-20 lg:py-24 scroll-mt-24"
      style={{
        backgroundImage: "url(/assets/section-divider.png)",
        backgroundSize: "300px",
        backgroundColor: "#EEF2F5",
      }}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <SectionHeading
          title="Questions Doctors Ask Us"
          subtitle="Everything you need to know before saying yes."
        />

        <Reveal>
          <div className="space-y-3">
            {siteData.faq.map((item, i) => (
              <AccordionItem
                key={i}
                item={item}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
                index={i}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
