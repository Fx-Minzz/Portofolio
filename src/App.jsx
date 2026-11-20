
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import Navbar from "./components/Navbar";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

function App() {
  const heroRef = useRef(null);
  const progressRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(progressRef.current, {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: document.documentElement,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.3,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-item", {
        y: 35,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <main className="min-h-screen overflow-hidden">

      <div
        ref={progressRef}
        className="fixed left-0 top-0 z-[100] h-1 w-full origin-left scale-x-0 bg-accent"
      />

      <Navbar />

      {/* Hero Section */}
      <section
        id="home"
        ref={heroRef}
        className="relative flex min-h-screen items-center"
      >
        {/* Background Glow */}
        <div className="pointer-events-none absolute -right-40 top-1/4 h-[450px] w-[450px] rounded-full bg-accent/10 blur-[130px]" />

        <div className="container-main relative z-10 py-32">
          <div className="max-w-4xl">

            {/* Availability */}
            <div className="hero-item mb-8 flex items-center gap-3">
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
              <span className="text-sm tracking-wide text-muted">
                Terbuka untuk kolaborasi dan peluang baru
              </span>
            </div>

            {/* Introduction */}
            <p className="hero-item mb-5 font-medium text-accent">
              Halo, saya Fx_Minzz.
            </p>

            {/* Main Heading */}
            <h1 className="hero-item font-display text-4xl font-bold leading-[1.15] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
              Membangun
              <br />
              Pengalaman
              <br />
              <span className="gradient-text">
                Digital Bermakna.
              </span>
            </h1>

            {/* Description */}
            <p className="hero-item mt-8 max-w-xl text-base leading-8 text-muted md:text-lg">
              Saya seorang pelajar Rekayasa Perangkat Lunak yang memiliki
              ketertarikan dalam pengembangan perangkat lunak, teknologi,
              dan kreativitas untuk menciptakan solusi digital yang
              modern serta bermanfaat.
            </p>

            {/* Action Buttons */}
            <div className="hero-item mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <a
                href="#projects"
                className="w-full rounded-full bg-accent px-7 py-3.5 text-center font-semibold text-white transition hover:bg-accent-light sm:w-auto"
              >
                Lihat Proyek Saya ↗
              </a>

              <a
                href="#contact"
                className="w-full rounded-full border border-white/15 px-7 py-3.5 text-center font-semibold transition hover:border-accent hover:bg-white/5 sm:w-auto"
              >
                Hubungi Saya
              </a>
            </div>

            {/* Statistics */}
            <div className="hero-item mt-16 grid grid-cols-3 gap-4 border-t border-white/10 pt-8 sm:mt-20 sm:gap-10">
              <div>
                <p className="font-display text-2xl font-bold">02</p>
                <p className="mt-1 text-sm text-muted">Proyek</p>
              </div>

              <div>
                <p className="font-display text-2xl font-bold">08+</p>
                <p className="mt-1 text-sm text-muted">Teknologi</p>
              </div>

              <div>
                <p className="font-display text-2xl font-bold">100%</p>
                <p className="mt-1 text-sm text-muted">Dedikasi</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Main Sections */}
      <About />
      <Skills />
      <Projects />
      <Contact />

      <Footer />
    </main>
  );
}

export default App;
