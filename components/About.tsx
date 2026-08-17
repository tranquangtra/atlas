export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen bg-zinc-100 text-zinc-900 flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img
          src="/anhnen.jpg"
          alt=""
          className="
            w-full
            h-full
            object-cover
            opacity-[0.2]
            blur-[0px]
            select-none
          "
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 py-24">

        {/* Heading */}
        <p className="text-sm tracking-[0.3em] uppercase text-zinc-500">
          About
        </p>

        <h2 className="mt-3 text-5xl md:text-6xl font-light">
          Hello,
          <br />
          I'm Tra.
        </h2>

        <div className="grid md:grid-cols-2 gap-20 mt-16">

          {/* LEFT */}
          <div>

            <p className="text-lg leading-9 text-zinc-700">
              I am an environmental scientist with broad interests across environmental science and engineering,
including environmental systems, wastewater treatment, ecosystems, and environmental change. My
background combines scientific research, field observations, and geospatial technologies to better
understand environmental processes and support practical solutions to environmental challenges.

            </p>

            <blockquote className="mt-12 border-l-4 border-zinc-400 pl-6 italic text-zinc-600">
              "Every landscape tells a story through data."
            </blockquote>

          </div>

          {/* RIGHT */}
          <div className="space-y-10">

            <div>
              <p className="text-sm uppercase tracking-widest text-zinc-500">
                Current Position
              </p>

              <h3 className="mt-2 text-2xl font-medium">
                Scientist
              </h3>

              <p className="mt-2 text-zinc-600">
                
                <br />
                
              </p>
            </div>

            <div>
              <p className="text-sm uppercase tracking-widest text-zinc-500">
                Research Interests
              </p>

              <div className="mt-4 flex flex-wrap gap-3">

                <span className="px-4 py-2 rounded-full bg-white shadow-sm">
                  GIS
                </span>

                <span className="px-4 py-2 rounded-full bg-white shadow-sm">
                  Remote Sensing
                </span>

                <span className="px-4 py-2 rounded-full bg-white shadow-sm">
                  Earth Observation
                </span>

                <span className="px-4 py-2 rounded-full bg-white shadow-sm">
                  Environmental Monitoring
                </span>

                <span className="px-4 py-2 rounded-full bg-white shadow-sm">
                  Climate Change
                </span>

              </div>
            </div>

            <div>
              <p className="text-sm uppercase tracking-widest text-zinc-500">
                Location
              </p>

              <p className="mt-2 text-zinc-600">
                Ho Chi Minh City, Vietnam
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}