"use client";
import { useState } from "react";

export default function Hero() {
  const [arrow, setArrow] = useState("↓");

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-zinc-950 text-white overflow-hidden flex items-center"
    >
      {/* Background Earth */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="absolute right-10 top-1/2 -translate-y-1/2">
          <img
            src="/earth.gif"
            alt="Earth"
            className="w-[520px] md:w-[650px] select-none"
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto w-full px-6">
        <div className="grid md:grid-cols-2 items-center">

          {/* LEFT */}
          <div className="text-center md:text-left">

            {/* Avatar */}
            <img
              src="/Tran Quang Tra (HCMUS).jpg"
              alt="Trần Quang Trà"
              className="w-28 h-28 rounded-full object-cover shadow-xl mx-auto md:mx-0"
            />

            {/* Name */}
            <h1 className="mt-4 text-4xl md:text-5xl font-light tracking-tight">
              Trần Quang Trà, MSc
            </h1>

            {/* Profession */}
            <p className="mt-4 text-xl text-zinc-300">
              Environmental Scientist
            </p>

            {/* Research */}
            <p className="mt-2 text-zinc-500 tracking-wide">
              GIS · Remote Sensing · Environmental Research
            </p>

            {/* Description */}
            <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-400 mx-auto md:mx-0">
              Exploring the Earth
            </p>

            {/* My CV */}
            <div className="mt-10 flex justify-center md:justify-start">
              <a
                href="/Tran_Quang_Tra_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  px-8 py-4
                  rounded-full
                  border
                  border-zinc-700
                  hover:border-white
                  hover:bg-zinc-900
                  transition
                  inline-block
                "
              >
                My CV
              </a>
            </div>

            {/* Location */}
            <p className="mt-10 text-sm text-zinc-600">
              Faculty of Environment · VNUHCM - University of Science
            </p>

            {/* Arrow */}
            <div
              className="
                mt-14
                text-2xl
                cursor-pointer
                animate-bounce
                inline-block
                text-zinc-500
                hover:text-white
                hover:scale-125
                transition-all
                duration-300
              "
              onMouseEnter={() => setArrow("⬇")}
              onMouseLeave={() => setArrow("↓")}
              onClick={() => {
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {arrow}
            </div>

          </div>

          {/* RIGHT */}
          <div></div>

        </div>
      </div>
    </section>
  );
}