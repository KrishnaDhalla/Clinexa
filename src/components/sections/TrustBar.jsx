import { Reveal, StaggerParent, StaggerChild } from "../ui/Components";
import { useCountUp } from "../../hooks/useAnimations";
import siteData from "../../data/siteData";

function StatItem({ value, suffix, label }) {
  const num = parseInt(value, 10);
  const isNumeric = !isNaN(num);
  const { count, ref } = useCountUp(isNumeric ? value : 0);

  return (
    <div ref={ref} className="text-center px-4">
      <div className="text-4xl sm:text-5xl font-bold text-navy mb-1">
        {isNumeric ? count : value}
        <span className="text-teal">{suffix}</span>
      </div>
      <div className="text-sm text-text-sub font-medium">{label}</div>
    </div>
  );
}

export default function TrustBar() {
  return (
    <section className="relative bg-white py-14 border-t-2 border-transparent" style={{ borderImage: "linear-gradient(to right, transparent, #00B4A0, transparent) 1" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <StaggerParent className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {siteData.stats.map((stat, i) => (
            <StaggerChild key={i}>
              <StatItem {...stat} />
            </StaggerChild>
          ))}
        </StaggerParent>

        <Reveal>
          <div className="flex flex-wrap items-center justify-center gap-8 pt-8 border-t border-border">
            <span className="text-sm text-text-muted font-medium">We integrate with:</span>
            {["Google My Business", "Practo", "Lybrate", "JustDial", "Google Ads"].map((name) => (
              <span
                key={name}
                className="text-sm font-semibold text-text-muted/60 hover:text-text-sub transition-colors cursor-default tracking-tight"
              >
                {name}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
