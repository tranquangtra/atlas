export default function Contact() {
return ( <section id="contact" className="relative py-24 md:py-32"> 
{/* Background Image */}
<div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
  <img
    src="/anhnencontact.png"
    alt=""
    className="w-full h-full object-cover opacity-20 select-none"
  />
</div>
<div className="mx-auto max-w-6xl px-6">
    <p className="text-sm tracking-[0.3em] uppercase text-zinc-700">
      Contact
    </p>

    <h2 className="mt-3 text-5xl md:text-6xl font-light text-zinc-900">
      Let's Connect
    </h2>

    <div className="mt-16 max-w-3xl">

      <div className="py-5 border-b border-zinc-300 flex flex-col md:flex-row md:items-center justify-between gap-2">
        <span className="text-sm uppercase tracking-[0.2em] text-zinc-700">
          Phone
        </span>

        <a
          href="tel:+84328556442"
          className="text-zinc-900 hover:text-zinc-600 transition"
        >
          (+84). 328 556 442
        </a>
      </div>

      <div className="py-5 border-b border-zinc-300 flex flex-col md:flex-row md:items-center justify-between gap-2">
        <span className="text-sm uppercase tracking-[0.2em] text-zinc-700">
          Email
        </span>

        <a
          href="mailto:tranquangtra1705@email.com"
          className="text-zinc-900 hover:text-zinc-600 transition"
        >
          tranquangtra1705@gmail.com
        </a>
      </div>

      <div className="py-5 border-b border-zinc-300 flex flex-col md:flex-row md:items-center justify-between gap-2">
        <span className="text-sm uppercase tracking-[0.2em] text-zinc-700">
          Location
        </span>

        <a
          href="https://earth.google.com/web/search/T%c3%a2n+Uy%c3%aan,+Ho+Chi+Minh/@11.09141522,106.81802835,47.90909954a,36507.36764099d,35y,0h,0t,0r/data=CoYBGlgSUgolMHgzMTc0YzQ3Yzk1YTY1OTJkOjB4OTY4YzNjNzdiOTFkZWRhNRmfjPFh9jImQCGnU8MjlrNaQCoXVMOibiBVecOqbiwgSG8gQ2hpIE1pbmgYAiABIiYKJAnmv1Y4bDQqQBHuTZbQuBIqQBk8sZVopFtbQCG02eXvGFJbQEICCAE6AwoBMEICCABKDQj___________8BEAA?authuser=0"
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-900 hover:text-zinc-600 transition"
        >
          Tan Uyen Ward, Ho Chi Minh City →
        </a>
      </div>

      <div className="py-5 border-b border-zinc-300 flex flex-col md:flex-row md:items-center justify-between gap-2">
        <span className="text-sm uppercase tracking-[0.2em] text-zinc-700">
          Facebook
        </span>

        <a
          href="https://www.facebook.com/tranquangtra1705/?locale=vi_VN"
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-900 hover:text-zinc-600 transition"
        >
          View profile →
        </a>
      </div>

    </div>

    <div className="mt-24 pt-8 border-t border-zinc-300 flex flex-col md:flex-row justify-between gap-2 text-sm text-zinc-700">
      <p>© 2026 Tran Quang Tra</p>
      <p>Ho Chi Minh City, Vietnam</p>
    </div>

  </div>
</section>

);
}
