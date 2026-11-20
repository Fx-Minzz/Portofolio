
import { useEffect, useRef } from "react";
import gsap from "gsap";

const skillGroups = [
  {
    number: "01",
    title: "Pengembangan Frontend",
    description:
      "Membangun antarmuka pengguna yang responsif, interaktif, dan mudah digunakan.",
    skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
    size: "md:col-span-2",
  },
  {
    number: "02",
    title: "Pengembangan Backend",
    description:
      "Mengembangkan logika aplikasi dan sistem yang berjalan di sisi server.",
    skills: ["PHP", "Laravel", "MySQL"],
    size: "",
  },
  {
    number: "03",
    title: "Alat & Teknologi",
    description:
      "Menggunakan berbagai alat untuk mendukung proses pengembangan aplikasi.",
    skills: ["Git", "GitHub", "Docker", "Vite", "VS Code", "Figma", "Postman", "EmailJS", "Canva"],
    size: "",
  },
  {
    number: "04",
    title: "Minat Teknologi Lainnya",
    description:
      "Mengeksplorasi berbagai platform dan teknologi untuk memperluas kemampuan.",
    skills: ["Flutter", "GSAP", "REST API"],
    size: "md:col-span-2",
  },
  {
    number: "05",
    title: "Keterampilan Nonteknis",
    description:
      "Kemampuan pribadi dan interpersonal untuk mendukung kolaborasi dan penyelesaian pekerjaan.",
    skills: [
      "Komunikasi",
      "Kerja Tim",
      "Pemecahan Masalah",
      "Berpikir Kritis",
      "Manajemen Waktu",
      "Adaptabilitas",
      "Kepemimpinan",
      "Ketelitian",
    ],
    size: "",
  },
];

function Skills() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const cards = section.querySelectorAll(".skill-card");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          gsap.fromTo(
            cards,
            {
              y: 30,
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              stagger: 0.15,
              ease: "power3.out",
              onComplete: () => {
                gsap.set(cards, {
                  clearProps: "opacity,transform",
                });
              },
            }
          );

          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
      gsap.killTweensOf(cards);
    };
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative overflow-hidden py-28 md:py-36"
    >
      <div className="container-main">

        {/* Judul Bagian */}
        <div className="mb-16 max-w-2xl">
          <p className="mb-4 text-sm font-semibold tracking-wider text-accent">
            02 / KEAHLIAN SAYA
          </p>

          <h2 className="font-display text-4xl font-bold md:text-5xl">
            Keahlian &{" "}
            <span className="gradient-text">
              Teknologi.
            </span>
          </h2>

          <p className="mt-5 leading-8 text-gray-400">
            Berbagai teknologi dan alat yang saya gunakan
            untuk mengubah ide menjadi pengalaman digital
            yang fungsional.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid auto-rows-fr gap-5 md:grid-cols-3 md:auto-rows-fr">

          {skillGroups.map((group) => (
            <article
              key={group.number}
              className={`
                skill-card group relative flex h-full min-h-[340px]
                flex-col overflow-hidden rounded-3xl
                border border-white/10
                bg-[#111319] p-7 md:p-9
                transition duration-500
                hover:-translate-y-2
                hover:border-accent/40
                hover:bg-[#151925]
                ${group.size}
              `}
            >
              {/* Efek Dekoratif */}
              <div
                className="
                  pointer-events-none absolute -right-20 -top-20
                  h-48 w-48 rounded-full
                  bg-accent/10 opacity-0
                  blur-[80px]
                  transition duration-500
                  group-hover:opacity-100
                "
              />

              <div className="relative z-10 flex flex-1 flex-col">

                {/* Header Kartu */}
                <div className="mb-10 flex items-center justify-between">
                  <span className="font-display text-sm font-semibold text-accent">
                    / {group.number}
                  </span>

                  <span className="text-xl text-gray-500 transition duration-300 group-hover:rotate-45 group-hover:text-accent">
                    ↗
                  </span>
                </div>

                {/* Konten Kartu */}
                <h3 className="font-display text-2xl font-bold text-white">
                  {group.title}
                </h3>

                <p className="mt-3 max-w-md text-sm leading-7 text-gray-400">
                  {group.description}
                </p>

                {/* Daftar Keahlian */}
                <div className="mt-auto flex flex-wrap gap-3 pt-8">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="
                        rounded-full border border-white/15
                        bg-white/[0.06]
                        px-4 py-2
                        text-sm font-medium text-gray-200
                        transition duration-300
                        hover:border-accent/50
                        hover:bg-accent/10
                        hover:text-white
                      "
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            </article>
          ))}

        </div>

        {/* Catatan Bagian Bawah */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-7">
          <p className="text-sm text-gray-400">
            Terus belajar. Terus berkembang.
          </p>

          <span className="text-sm font-medium text-accent">
            Pengembangan Berkelanjutan ↗
          </span>
        </div>

      </div>
    </section>
  );
}

export default Skills;
