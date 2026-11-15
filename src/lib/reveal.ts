/**
 * Scroll reveal fallback for browsers without scroll-driven animations.
 * Content stays visible when JS is off (CSS only hides it under `.js-reveal`).
 */
export function initReveal() {
  const supportsScrollTimeline = CSS.supports('animation-timeline: view()');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const items = document.querySelectorAll<HTMLElement>('.reveal');

  if (supportsScrollTimeline || reduceMotion || !('IntersectionObserver' in window)) {
    items.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      }
    },
    { rootMargin: '0px 0px -10% 0px', threshold: 0.1 },
  );

  items.forEach((el) => observer.observe(el));
}
