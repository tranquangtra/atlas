export default function Education() {
return ( <section id="education" className="relative py-16 md:py-20">
  {/* Background Image */}
  <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
    <img
      src="/anhneneducation.jpg"
      alt=""
      className="w-full h-full object-cover opacity-20 select-none"
    />
  </div>

  {/* Content */}
  <div className="relative z-10 mx-auto max-w-6xl px-6">

    <h2 className="text-4xl font-medium mb-10 text-zinc-900">
      Education
    </h2>

    <div className="relative border-l border-zinc-400 pl-8 space-y-8">

      {/* Master */}
      <div>
        <p className="text-zinc-700 text-sm">
          2022
        </p>

        <h3 className="text-xl md:text-2xl mt-1 text-zinc-900">
          Master of Environmental Science
        </h3>

        <p className="text-sm text-zinc-700 mt-1">
          University of Science, VNUHCM
        </p>
      </div>

      {/* Bachelor */}
      <div>
        <p className="text-zinc-700 text-sm">
          2017
        </p>

        <h3 className="text-xl md:text-2xl mt-1 text-zinc-900">
          Bachelor of Environmental Science
          <br />
          Valedictorian of the major
        </h3>

        <p className="text-sm text-zinc-700 mt-1">
          University of Science, VNUHCM
        </p>
      </div>

      {/* High School */}
      <div>
        <p className="text-zinc-700 text-sm">
          2013
        </p>

        <h3 className="text-xl md:text-2xl mt-1 text-zinc-900">
          Graduated from high school
        </h3>

        <p className="text-sm text-zinc-700 mt-1">
          Huynh Van Nghe High School
        </p>
      </div>

      {/* Biology Competition */}
      <div>
        <p className="text-zinc-700 text-sm">
          2010
        </p>

        <h3 className="text-xl md:text-2xl mt-1 text-zinc-900 leading-snug">
          Third Prize in the Provincial Biology Competition for Gifted Students
          <br />
          Outstanding student across all grades of secondary school
        </h3>

        <p className="text-sm text-zinc-700 mt-1">
          Huynh Van Luy Secondary School
        </p>
      </div>

    </div>

    <p className="mt-12 text-zinc-700 text-base max-w-2xl leading-relaxed">
      An open statement about my education, curiosity, and the path ahead.
    </p>

  </div>

</section>

);
}