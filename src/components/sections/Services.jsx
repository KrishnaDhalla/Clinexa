import { SectionHeading, StaggerParent, StaggerChild } from "../ui/Components";
import { ArrowRight } from "lucide-react";
import siteData from "../../data/siteData";

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-24 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          title="What Clinexa Does for Your Practice"
          subtitle="Four specialized services, one goal — your growth."
        />

        <StaggerParent className="grid sm:grid-cols-2 gap-6">
          {siteData.services.map((svc, i) => (
            <StaggerChild key={i}>
              <div className="group relative bg-white border border-border rounded-2xl p-8 h-full hover:shadow-[0_8px_32px_rgba(10,22,40,0.08)] hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                {/* Left accent */}
                <div className="absolute left-0 top-0 w-1 h-full bg-teal scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-300 rounded-r" />

                <div className="w-20 h-20 mb-5 rounded-xl bg-teal/8 flex items-center justify-center group-hover:bg-teal/15 transition-colors">
                  <img
                    src={svc.icon}
                    alt={svc.title}
                    className="w-14 h-14 object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">{svc.title}</h3>
                <p className="text-text-sub leading-relaxed text-[15px] mb-4">
                  {svc.description}
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 text-teal text-sm font-semibold group-hover:gap-2 transition-all"
                >
                  Book a demo <ArrowRight size={15} />
                </a>
              </div>
            </StaggerChild>
          ))}
        </StaggerParent>
      </div>
    </section>
  );
}
