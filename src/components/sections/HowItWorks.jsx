import { SectionHeading, StaggerParent, StaggerChild } from "../ui/Components";
import { Phone, Monitor, PenLine, Rocket } from "lucide-react";
import siteData from "../../data/siteData";

const icons = [Phone, Monitor, PenLine, Rocket];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-20 lg:py-24 scroll-mt-24 relative"
      style={{
        backgroundImage: "url(/assets/section-divider.png)",
        backgroundSize: "300px",
        backgroundColor: "#EEF2F5",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          title="Live in 7 Days. Seriously."
          subtitle="From first call to live website, faster than your next conference."
        />

        <StaggerParent className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
          {siteData.process.map((step, i) => {
            const Icon = icons[i];
            return (
              <StaggerChild key={i}>
                <div className="relative text-center bg-white rounded-2xl p-8 h-full shadow-[0_2px_12px_rgba(10,22,40,0.04)] group hover:shadow-[0_8px_28px_rgba(0,180,160,0.12)] transition-all duration-300">
                  {/* Connector line */}
                  {i < 3 && (
                    <div className="hidden lg:block absolute top-12 -right-3 w-6 border-t-2 border-dashed border-teal/30" />
                  )}

                  <div className="w-16 h-16 rounded-2xl bg-teal/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-teal/20 transition-colors relative">
                    <Icon size={28} className="text-teal" />
                    <span className="absolute -top-2 -right-2 w-7 h-7 bg-navy text-white text-xs font-bold rounded-full flex items-center justify-center">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-navy mb-2">{step.title}</h3>
                  <p className="text-text-sub text-sm leading-relaxed">{step.description}</p>
                </div>
              </StaggerChild>
            );
          })}
        </StaggerParent>
      </div>
    </section>
  );
}
