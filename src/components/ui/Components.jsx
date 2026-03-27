import { motion } from "framer-motion";

export function Reveal({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10px" }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerParent({ children, className = "" }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10px" }}
      variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerChild({ children, className = "" }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({ eyebrow, title, subtitle, light = false, className = "" }) {
  return (
    <div className={`text-center max-w-3xl mx-auto mb-14 ${className}`}>
      {eyebrow && (
        <Reveal>
          <span
            className={`inline-block text-sm font-semibold tracking-wider uppercase mb-3 ${light ? "text-teal" : "text-teal"}`}
          >
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2
          className={`text-3xl sm:text-4xl lg:text-[42px] font-bold leading-tight mb-4 ${light ? "text-white" : "text-navy"}`}
        >
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.1}>
          <p
            className={`text-lg font-['Playfair_Display'] italic ${light ? "text-white/70" : "text-text-sub"}`}
          >
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}

export function Button({ children, variant = "primary", href, onClick, className = "", size = "md" }) {
  const base =
    "inline-flex items-center justify-center font-semibold tracking-wide rounded-xl transition-all duration-200 cursor-pointer";
  const sizes = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-7 py-3.5 text-[15px]",
    lg: "px-9 py-4 text-base",
  };
  const variants = {
    primary:
      "bg-teal text-white hover:bg-teal-dark hover:shadow-[0_4px_20px_rgba(0,180,160,0.35)] hover:-translate-y-0.5",
    outline:
      "border-2 border-white/30 text-white hover:border-teal hover:bg-teal/10",
    outlineDark:
      "border-2 border-teal text-teal hover:bg-teal hover:text-white",
    ghost: "text-teal hover:bg-teal/5",
  };

  const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    );
  }
  return (
    <button onClick={onClick} className={cls}>
      {children}
    </button>
  );
}
