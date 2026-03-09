import React from "react";
import { ReactLenis } from "lenis/react"; // <-- Crucial
import EditorialGrid from "./components/ui/EditorialGrid";

export default function App() {
  const lenisOptions = {
    lerp: 0.08,
    smoothWheel: true,
  };

  return (
    <ReactLenis root options={lenisOptions}>
      <main className="bg-[#050505] min-h-screen text-[#E5E5E5] antialiased">
        <EditorialGrid />
      </main>
    </ReactLenis>
  );
}
