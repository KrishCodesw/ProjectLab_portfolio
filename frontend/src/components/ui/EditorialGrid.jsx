"use client";

import React from "react";
import { Plus, ArrowRight } from "lucide-react";

export default function EditorialGrid() {
  // We use a 12-column grid to achieve the asymmetrical widths seen in the image.
  // The layout is roughly: 5 columns (Kaixa), 3 cols (Candles), 3 cols (Gretta), 1 col (All Works)

  return (
    <section className="w-full bg-[#050505] text-[#E5E5E5] px-4 md:px-8 py-12">
      {/* THE GRID CONTAINER
        Notice the `border-t` and `border-l`. We apply top and left borders to the parent,
        and bottom and right borders to the children to prevent 2px thick overlapping lines.
      */}
      <div className="w-full max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-12 border-t border-l border-white/10">
        {/* --- ITEM 1: KAIXA (The large left card) --- */}
        <div className="col-span-1 md:col-span-5 border-r border-b border-white/10 p-6 flex flex-col h-[500px]">
          {/* Image Container */}
          <div className="flex-grow bg-[#111111] rounded-xl overflow-hidden relative flex items-center justify-center border border-white/5">
            <img
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop"
              alt="Kaixa Project"
              className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity duration-500"
            />
          </div>

          {/* Footer Area */}
          <div className="mt-6 flex justify-between items-center px-1">
            <div className="flex items-center gap-2">
              <Plus className="w-4 h-4 text-white/40" />
              <span className="text-lg font-medium tracking-tight">Kaixa</span>
            </div>
            {/* Empty space for right side, or you could add tags here */}
          </div>
        </div>

        {/* --- ITEM 2: CANDLES (Middle card) --- */}
        <div className="col-span-1 md:col-span-3 border-r border-b border-white/10 p-6 flex flex-col h-[500px]">
          <div className="flex-grow bg-[#1A1A1A] rounded-xl overflow-hidden relative flex items-center justify-center border border-white/5">
            <img
              src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=800&auto=format&fit=crop"
              alt="Candles Project"
              className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
            />
          </div>

          <div className="mt-6 flex justify-between items-center px-1">
            <div className="flex items-center gap-2">
              <Plus className="w-4 h-4 text-white/40" />
              <span className="text-lg font-medium tracking-tight">
                Candles
              </span>
            </div>
            <div className="px-3 py-1 rounded-full border border-white/10 text-[10px] tracking-widest uppercase text-white/50">
              Coming Soon
            </div>
          </div>
        </div>

        {/* --- ITEM 3: GRETTA (Right card) --- */}
        <div className="col-span-1 md:col-span-3 border-r border-b border-white/10 p-6 flex flex-col h-[500px]">
          <div className="flex-grow bg-[#E5E5E5] rounded-xl overflow-hidden relative flex items-center justify-center">
            {/* Note: This container is light to match the contrast in the reference image */}
            <img
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop"
              alt="Gretta Project"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

          <div className="mt-6 flex justify-between items-center px-1">
            <div className="flex items-center gap-2">
              <Plus className="w-4 h-4 text-white/40" />
              <span className="text-lg font-medium tracking-tight">Gretta</span>
            </div>
            <div className="px-3 py-1 rounded-full border border-white/10 text-[10px] tracking-widest uppercase text-white/50">
              Coming Soon
            </div>
          </div>
        </div>

        {/* --- ITEM 4: ALL WORKS BUTTON (Far Right Column) --- */}
        {/* We use flex-col justify-end to push the button to the bottom of the grid cell */}
        <div className="col-span-1 md:col-span-1 border-r border-b border-white/10 p-6 flex flex-col justify-end h-[500px]">
          <button className="w-full bg-[#1A1A1A] hover:bg-[#222222] text-white flex justify-between items-center p-4 rounded-md transition-all group border border-white/5">
            <span className="text-sm font-medium">All Works</span>
            <ArrowRight className="w-4 h-4 text-[#FF4500] group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
