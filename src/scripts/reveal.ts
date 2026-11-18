/**
 * Fades cards and headings in as they scroll into view.
 * Without JavaScript, or with reduced motion on, everything is simply visible.
 */
export function initReveal() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  if (!("IntersectionObserver" in window)) return;

  const targets = document.querySelectorAll<HTMLElement>("main .card, main section h2, main .post-link");
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.12 },
  );

  targets.forEach((el, index) => {
    el.classList.add("reveal");
    el.style.transitionDelay = `${(index % 3) * 70}ms`;
    observer.observe(el);
  });
}
