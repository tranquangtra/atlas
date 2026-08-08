type NavbarProps = {
  activeSection: string;
};

export default function Navbar({ activeSection }: NavbarProps) {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        <a href="#" className="text-lg font-medium tracking-wide text-white">
          TQT
        </a>

        <nav className="flex gap-8 text-sm">

          <a
            href="#about"
            className={
              activeSection === "about"
                ? "text-white font-medium"
                : "text-zinc-400 hover:text-white transition"
            }
          >
            About
          </a>

          <a
            href="#education"
            className="text-zinc-400 hover:text-white transition"
          >
            Education
          </a>

          <a
            href="#works"
            className="text-zinc-400 hover:text-white transition"
          >
            Works
          </a>

          <a
            href="#contact"
            className="text-zinc-400 hover:text-white transition"
          >
            Contact
          </a>

        </nav>

      </div>
    </header>
  );
}