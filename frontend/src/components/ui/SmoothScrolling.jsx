import { useEffect } from "react";
import Lenis from "lenis"; // Ensure you are using the latest version

export default function SmoothScrolling({ children }) {
  useEffect(() => {
    // 1. Initialize Lenis with 'new'
    const lenis = new Lenis({
      lerp: 0.1,
      duration: 1.2,
      smoothWheel: true,
    });

    // 2. Define the animation frame loop
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    // 3. Start the loop
    const rAF = requestAnimationFrame(raf);

    // 4. Cleanup on component unmount
    return () => {
      cancelAnimationFrame(rAF);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
