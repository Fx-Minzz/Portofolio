
import { useEffect, useRef } from "react";
import gsap from "gsap";

const projects = [
  {
    number: "01",
    category: "Aplikasi Website",
    title: "Peminjaman Equipment",
    description:
      "Sistem manajemen peminjaman peralatan berbasis web dengan fitur autentikasi, akses berbasis peran, katalog peralatan, pengajuan peminjaman, pengembalian, dan laporan.",
    tech: ["Laravel", "PHP", "MySQL", "Docker", "Tailwind CSS"],
    status: "Proyek Tim",
    github: "https://github.com/Fx-Minzz/Peminjaman",
    accent: "from-blue-500/20 to-cyan-500/5",
  },
  {
    number: "02",
    category: "Aplikasi Website",
    title: "Readzy",
    description:
      "Aplikasi manajemen perpustakaan dengan akses berbasis peran untuk administrator, petugas, dan peminjam, mencakup pengelolaan buku serta laporan peminjaman.",
    tech: [
      "Laravel",
      "PHP",
      "MySQL",
      "Tailwind CSS",
      "Alpine.js",
      "Laragon",
    ],
    status: "Proyek Pribadi",
    github: "https://github.com/Fx-Minzz/Readzy",
    accent: "from-violet-500/20 to-purple-500/5",
  },
];

export default function Projects() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll(".project-card");
    if (!cards?.length) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        gsap.fromTo(
          cards,
          { y: 35, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.15,
            ease: "power3.out",
            onComplete: () => {
              gsap.set(cards, { clearProps: "opacity,transform" });
            },
          }
        );

        observer.disconnect();
      },
      { threshold: 0.1 }
    );

    observer.observe(sectionRef.current);

    return () => {
      observer.disconnect();
      gsap.killTweensOf(cards);
    };
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative overflow-hidden py-28"
    >
      <div className="container-main">
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="mb-4 block text-sm font-semibold uppercase tracking-[0.25em] text-accent">
              Karya Saya
            </span>

            <h2 className="font-display text-4xl font-bold text-white md:text-5xl">
              Proyek <span className="gradient-text">Pilihan.</span>
            </h2>

            <p className="mt-5 max-w-xl leading-7 text-gray-400">
              Beberapa proyek yang saya kembangkan sebagai
              bagian dari proses belajar, eksplorasi, dan
              peningkatan kemampuan dalam bidang pengembangan
              perangkat lunak.
            </p>
          </div>

          <span className="text-sm text-gray-500">
            02 Proyek Pilihan
          </span>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.number}
              className="project-card group relative flex min-h-[390px] flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-surface p-7 transition duration-300 hover:-translate-y-1 hover:border-accent/40 md:p-9"
            >
              <div
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${project.accent} opacity-60`}
              />

              <div className="relative z-10 flex flex-1 flex-col">
                <div className="mb-10 flex items-center justify-between">
                  <span className="font-display text-4xl font-bold text-white/20">
                    /{project.number}
                  </span>

                  <span className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-gray-400">
                    {project.status}
                  </span>
                </div>

                <div className="mb-5">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                    {project.category}
                  </span>

                  <h3 className="mt-3 font-display text-2xl font-bold text-white transition-colors group-hover:text-accent-light md:text-3xl">
                    {project.title}
                  </h3>
                </div>

                <p className="max-w-2xl text-sm leading-7 text-gray-400">
                  {project.description}
                </p>

                <div className="mt-auto flex flex-wrap gap-2 pt-8">
                  {project.tech.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-xs text-gray-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Tombol Repositori GitHub */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex w-fit items-center gap-3 rounded-xl border border-accent/30 bg-accent/10 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:border-accent/60 hover:bg-accent/20 hover:text-accent-light"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="19"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.53v-2.07c-3.1.67-3.76-1.32-3.76-1.32-.5-1.29-1.24-1.63-1.24-1.63-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 1.71 2.63 1.22 3.27.93.1-.72.39-1.22.71-1.5-2.48-.28-5.09-1.24-5.09-5.51 0-1.22.44-2.22 1.16-3-.12-.29-.5-1.43.11-2.98 0 0 .95-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.11-1.45 3.05-1.15 3.05-1.15.61 1.55.23 2.69.11 2.98.72.78 1.16 1.78 1.16 3 0 4.28-2.61 5.23-5.1 5.5.4.35.76 1.03.76 2.08V22c0 .29.2.63.76.53A11.1 11.1 0 0 0 12 .9Z" />
                  </svg>

                  Lihat Repositori GitHub

                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
