import { SectionHeading, StaggerParent, StaggerChild } from "../ui/Components";
import siteData from "../../data/siteData";

export default function WhyUs() {
  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          title="Built by People Who Understand Healthcare"
          subtitle="Six reasons doctors trust Clinexa over generic agencies."
        />

        <StaggerParent className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteData.whyUs.map((item, i) => (
            <StaggerChild key={i}>
              <div className="flex gap-5 p-6 rounded-2xl hover:bg-surface/60 transition-colors duration-200 group">
                <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-teal/8 flex items-center justify-center group-hover:bg-teal/15 transition-colors">
                  <img src={item.icon} alt={item.title} className="w-10 h-10 object-contain" />
                </div>
                <div>
                  <h3 className="font-bold text-navy mb-1">{item.title}</h3>
                  <p className="text-sm text-text-sub leading-relaxed">{item.description}</p>
                </div>
              </div>
            </StaggerChild>
          ))}
        </StaggerParent>
      </div>
    </section>
  );
}
