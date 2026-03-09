import React from "react";
// import { ReactLenis } from "lenis/react"; // <-- Crucial
// import EditorialGrid from "./components/ui/ProjectGrid";
import ProjectShowcase from "./components/ui/ProjectGrid";
import SmoothScrolling from "./components/ui/SmoothScrolling";

export default function App() {
  return (
    <main className="bg-[#050505] min-h-screen text-[#E5E5E5] antialiased">
      {/* <EditorialGrid /> */}
      <SmoothScrolling>
        <ProjectShowcase />
      </SmoothScrolling>
    </main>
  );
}
