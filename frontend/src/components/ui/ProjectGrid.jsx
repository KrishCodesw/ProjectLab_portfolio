import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Magnetic from "./Magnetic";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "wfqfmk",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
  },
  {
    title: " wk fensa",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
  },
  {
    title: "dkemce",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2670&auto=format&fit=crop",
  },
  {
    title: "kmefmfde",
    image:
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2670&auto=format&fit=crop",
  },
];

export default function Projects() {
  const container = useRef(null);
  const slider = useRef(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const panels = gsap.utils.toArray(".panel");

      const totalWidth = slider.current.scrollWidth;
      const viewportWidth = window.innerWidth;
      const scrollDistance = totalWidth - viewportWidth;

      gsap.to(slider.current, {
        x: -scrollDistance,
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "+=" + scrollDistance,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      gsap.utils.toArray(".reveal").forEach((el) => {
        gsap.from(el, {
          y: 80,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
        });
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <div className="bg-black text-white">
      {/* HERO */}
      <section className="px-8 md:px-20 py-32 max-w-400 mx-auto">
        <h1 className="font-monument text-[64px] md:text-[140px] leading-[0.9] tracking-tight">
          PROJECTS <br /> THAT MATTER.
        </h1>

        <p className="font-montreal text-gray-500 mt-8 max-w-xl text-lg">
          A collection of digital products and systems designed with a focus on
          performance, structure and clarity.
        </p>
      </section>

      {/* PROJECT SECTION */}
      <section ref={container} className="relative md:h-screen overflow-hidden">
        <div
          ref={slider}
          className="flex flex-col md:flex-row h-auto md:h-full"
        >
          {projects.map((p, i) => (
            <div
              key={i}
              className="panel w-full md:w-screen flex items-center justify-center border-r border-white/20 px-8 md:px-20 py-20 md:py-0"
            >
              <div className="w-full max-w-[1200px]">
                {/* IMAGE */}
                <div className="overflow-hidden border border-white/20">
                  <img
                    src={p.image}
                    className="reveal w-full h-[45vh] md:h-[55vh] object-cover grayscale hover:grayscale-0 transition duration-500"
                  />
                </div>

                {/* TITLE + BUTTON */}
                <div className="mt-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <h2 className="reveal font-monument text-3xl md:text-5xl">
                    {p.title}
                  </h2>

                  <Magnetic>
                    <button className="border border-white px-8 py-4 font-montreal text-sm hover:bg-white hover:text-black transition whitespace-nowrap">
                      VIEW WORK
                    </button>
                  </Magnetic>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
