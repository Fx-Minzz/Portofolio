
import { useEffect, useRef } from "react";
import gsap from "gsap";

function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          gsap.fromTo(
            section.querySelectorAll(".about-reveal"),
            {
              opacity: 0,
              y: 35,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.15,
              ease: "power3.out",
            }
          );

          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative overflow-hidden py-28 md:py-36"
    >
      <div className="container-main">

        {/* Judul Bagian */}
        <div className="about-reveal mb-16">
          <p className="mb-4 text-sm font-semibold tracking-wider text-accent">
            01 / TENTANG SAYA
          </p>

          <h2 className="font-display text-4xl font-bold md:text-5xl">
            Mengenal <span className="gradient-text">Saya.</span>
          </h2>

          <p className="mt-5 max-w-xl leading-8 text-muted">
            Sekilas tentang siapa saya, apa yang saya kerjakan,
            dan hal-hal yang mendorong ketertarikan saya
            terhadap dunia teknologi.
          </p>
        </div>

        {/* Konten Tentang Saya */}
        <div className="grid items-center gap-14 md:grid-cols-2 md:gap-20">

          {/* Foto Profil */}
          <div className="about-reveal relative mx-auto w-full max-w-md">
            <div className="absolute -inset-4 rounded-3xl bg-accent/10 blur-3xl" />

            <div className="glass relative overflow-hidden rounded-3xl p-3">
              <div className="overflow-hidden rounded-2xl bg-surface-light">
                <img
                  src="/images/profile.png"
                  alt="Fx_Minzz - Foto Profil"
                  className="aspect-[4/5] w-full object-cover object-top transition duration-700 hover:scale-105"
                  decoding="async"
                  loading="lazy"
                />
              </div>

              <div className="flex items-center justify-between px-3 py-5">
                <div>
                  <p className="font-display font-bold">
                    Mindo Fanbregas Sitorus
                  </p>
                  <p className="mt-1 text-sm text-muted">
                    Pengembang Perangkat Lunak
                  </p>
                </div>

                <span className="rounded-full border border-green-400/20 bg-green-400/10 px-3 py-1.5 text-xs text-green-400">
                  Pelajar
                </span>
              </div>
            </div>
          </div>

          {/* Deskripsi Profil */}
          <div className="about-reveal">
            <p className="mb-5 text-sm font-semibold tracking-wider text-accent">
              Siapa Saya?
            </p>

            <h3 className="font-display text-3xl font-bold leading-tight md:text-4xl">
              Antusias dalam <span className="gradient-text">menciptakan</span>
              <br />
              <span className="gradient-text">solusi digital.</span>
            </h3>

            <div className="mt-7 space-y-5 leading-8 text-muted">
              <p>
                Halo! Saya Mindo Fanbregas Sitorus, seorang siswa
                kelas XII Rekayasa Perangkat Lunak (RPL) di
                SMKN 7 Baleendah yang memiliki ketertarikan
                terhadap dunia teknologi dan pengembangan
                perangkat lunak.
              </p>

              <p>
                Saya memiliki minat dalam pengembangan aplikasi
                web, pemrograman, serta perancangan sistem.
                Saya senang mempelajari teknologi baru dan
                mengembangkan ide menjadi solusi digital
                yang fungsional.
              </p>

              <p>
                Bagi saya, setiap proyek merupakan kesempatan
                untuk mengembangkan kemampuan, meningkatkan
                pengalaman, dan menghasilkan karya yang
                bermanfaat.
              </p>
            </div>

            {/* Informasi Profil */}
            <div className="mt-10 grid grid-cols-2 gap-5 border-t border-white/10 pt-8">
              <div>
                <p className="text-xs tracking-wider text-muted">
                  PENDIDIKAN
                </p>
                <p className="mt-2 font-semibold">
                  SMKN 7 Baleendah
                </p>
              </div>

              <div>
                <p className="text-xs tracking-wider text-muted">
                  JURUSAN
                </p>
                <p className="mt-2 font-semibold">
                  Rekayasa Perangkat Lunak
                </p>
              </div>

              <div>
                <p className="text-xs tracking-wider text-muted">
                  MINAT
                </p>
                <p className="mt-2 font-semibold">
                  Pemrograman & Game
                </p>
              </div>

              <div>
                <p className="text-xs tracking-wider text-muted">
                  PERAN
                </p>
                <p className="mt-2 font-semibold">
                  Pengembang
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;
