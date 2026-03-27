import { useEffect, useState, useRef } from "react";

export function useCountUp(target, duration = 2000, startOnView = true) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!startOnView) return;
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const num = parseInt(target, 10);
          if (isNaN(num)) {
            setCount(target);
            return;
          }
          const start = performance.now();
          const animate = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * num));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration, startOnView]);

  return { count, ref };
}

export function useTypingEffect(texts, typeSpeed = 50, deleteSpeed = 30, pause = 2500) {
  // Start with first text already visible to avoid blank flash on load
  const [display, setDisplay] = useState(texts[0] || "");
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const current = texts[textIndex];
    let timeout;

    if (!isDeleting && display === current) {
      timeout = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && display === "") {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
    } else {
      const speed = isDeleting ? deleteSpeed : typeSpeed;
      timeout = setTimeout(() => {
        setDisplay(
          isDeleting ? current.slice(0, display.length - 1) : current.slice(0, display.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [display, isDeleting, textIndex, texts, typeSpeed, deleteSpeed, pause]);

  return display;
}
