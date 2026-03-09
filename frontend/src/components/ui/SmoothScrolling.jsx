import Lenis from "lenis";

export default function SmoothScrolling({ children }) {
  // These specific configuration values are tuned for a "heavy, cinematic" feel
  // rather than a slippery, overly-fast scroll.

  const lenis = new Lenis();
  lenis.on("scroll", (e) => {
    console.log(e);
  });
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  const lenisOptions = {
    lerp: 0.08, // The "tightness" of the scroll. Lower = smoother but heavier.
    duration: 1.5, // How long the momentum lasts
    smoothTouch: false, // Keep native touch scrolling on mobile for better UX
    wheelMultiplier: 1, // How fast the mouse wheel scrolls
  };

  return (
    <Lenis root options={lenisOptions}>
      {children}
    </Lenis>
  );
}
