import { SectionHeading, StaggerParent, StaggerChild, Button } from "../ui/Components";
import { Check, X } from "lucide-react";
import siteData from "../../data/siteData";

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 lg:py-24 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          title="Transparent Pricing. No Surprises."
          subtitle="Choose the plan that fits your practice."
        />

        <StaggerParent className="grid md:grid-cols-3 gap-6 lg:gap-5 items-start max-w-5xl mx-auto">
          {siteData.pricing.map((plan, i) => (
            <StaggerChild key={i}>
              <div
                className={`relative rounded-3xl p-8 h-full flex flex-col transition-all duration-300 ${
                  plan.highlighted
                    ? "bg-navy text-white shadow-[0_12px_48px_rgba(0,180,160,0.2)] scale-[1.03] border-2 border-teal z-10"
                    : "bg-white border border-border hover:shadow-[0_8px_32px_rgba(10,22,40,0.08)] hover:-translate-y-1"
                }`}
              >
                {plan.badge && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gold text-navy text-xs font-bold px-4 py-1 rounded-full shadow-md">
                    {plan.badge}
                  </span>
                )}

                <div className="mb-6">
                  <h3
                    className={`text-lg font-bold mb-1 ${plan.highlighted ? "text-white" : "text-navy"}`}
                  >
                    {plan.tier}
                  </h3>
                  <p className={`text-sm mb-4 ${plan.highlighted ? "text-white/60" : "text-text-sub"}`}>
                    {plan.description}
                  </p>
                  <div className="flex items-baseline gap-1">
                    <span className={`text-4xl font-bold ${plan.highlighted ? "text-teal" : "text-navy"}`}>
                      ₹{plan.price}
                    </span>
                    <span className={`text-sm ${plan.highlighted ? "text-white/50" : "text-text-muted"}`}>
                      {plan.period}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm">
                      <Check size={16} className="flex-shrink-0 mt-0.5 text-teal" />
                      <span className={plan.highlighted ? "text-white/80" : "text-text-sub"}>
                        {f}
                      </span>
                    </li>
                  ))}
                  {plan.notIncluded?.map((f, j) => (
                    <li key={`no-${j}`} className="flex items-start gap-2.5 text-sm opacity-40">
                      <X size={16} className="flex-shrink-0 mt-0.5" />
                      <span className="line-through">{f}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  href="#contact"
                  variant="primary"
                  className="w-full justify-center"
                >
                  {plan.cta}
                </Button>
              </div>
            </StaggerChild>
          ))}
        </StaggerParent>

        <p className="text-center text-sm text-text-sub mt-10">
          Not sure which plan is right?{" "}
          <a href="#contact" className="text-teal font-semibold hover:underline">
            Book a free 15-minute call
          </a>{" "}
          and we'll recommend one.
        </p>
      </div>
    </section>
  );
}
