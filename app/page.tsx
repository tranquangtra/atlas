"use client";

import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Education from "../components/Education";
import Works from "../components/Works";
import Contact from "../components/Contact";
export default function Home() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    document.title = "Trần Quang Trà";
  }, []);

  return (
    <main>
      <Navbar activeSection={activeSection} />

      <Hero />

      <About />
      <Education />
      <Works />
      <Contact />
</main>
);
}