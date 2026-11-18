/**
 * Turns the robot's head toward the pointer, and gives cards a gentle 3D tilt on hover.
 * Both do nothing when the visitor has reduced motion on.
 */
export function initRobot() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const robot = document.querySelector<HTMLElement>("[data-robot]");
  if (robot) {
    window.addEventListener("pointermove", (event) => {
      const rect = robot.getBoundingClientRect();
      const dx = (event.clientX - (rect.left + rect.width / 2)) / window.innerWidth;
      const dy = (event.clientY - (rect.top + rect.height / 2)) / window.innerHeight;
      const ry = Math.max(-45, Math.min(45, dx * 90));
      const rx = Math.max(-25, Math.min(25, -dy * 60));
      robot.style.setProperty("--ry", `${ry}deg`);
      robot.style.setProperty("--rx", `${rx}deg`);
    });
  }

  if (window.matchMedia("(hover: hover)").matches) {
    document.querySelectorAll<HTMLElement>("main a.card").forEach((card) => {
      card.addEventListener("pointermove", (event) => {
        const rect = card.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = `perspective(700px) rotateX(${-y * 8}deg) rotateY(${x * 8}deg) translateY(-3px)`;
      });
      card.addEventListener("pointerleave", () => {
        card.style.transform = "";
      });
    });
  }
}
