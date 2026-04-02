import { Reveal } from "../ui/Components";
import siteData from "../../data/siteData";

export default function ClientMarquee() {
  const { companies, eyebrow, title } = siteData.clientMarquee;
  const doubled = [...companies, ...companies];

  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-8">
        <Reveal>
          <p className="text-center text-sm font-semibold text-teal uppercase tracking-widest mb-2">
            {eyebrow}
          </p>
          <p className="text-center text-lg font-medium text-text-sub">
            {title}
          </p>
        </Reveal>
      </div>

      {/* Marquee strip */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex items-center animate-marquee w-max">
          {doubled.map((company, i) => (
            <div
              key={i}
              className="flex items-center justify-center px-8 sm:px-12"
            >
              <img
                src={company.logo}
                alt={company.name}
                className="h-8 sm:h-10 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
