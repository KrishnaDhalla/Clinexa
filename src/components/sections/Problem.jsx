import { SectionHeading, StaggerParent, StaggerChild } from "../ui/Components";
import { SearchX, Smartphone, Pill } from "lucide-react";
import siteData from "../../data/siteData";

const iconMap = { SearchX, Smartphone, Pill };

export default function Problem() {
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
          title="Is This Your Practice Right Now?"
          subtitle="You're a great doctor. But your digital presence doesn't show it."
        />

        <StaggerParent className="grid md:grid-cols-3 gap-6">
          {siteData.problems.map((item, i) => {
            const Icon = iconMap[item.icon];
            return (
              <StaggerChild key={i}>
                <div className="bg-coral-light/60 backdrop-blur-sm border-l-4 border-coral rounded-2xl p-8 h-full hover:border-teal hover:bg-teal-light/60 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-xl bg-coral/10 flex items-center justify-center mb-5 group-hover:bg-teal/10 transition-colors">
                    <Icon size={24} className="text-coral group-hover:text-teal transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-navy mb-3">{item.title}</h3>
                  <p className="text-text-sub leading-relaxed text-[15px]">{item.description}</p>
                </div>
              </StaggerChild>
            );
          })}
        </StaggerParent>
      </div>
    </section>
  );
}
