
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import emailjs from "@emailjs/browser";

const contactLinks = [
  {
    label: "Email",
    value: "Hubungi saya melalui email",
    icon: "✉",
    action: "modal",
  },
  {
    label: "GitHub",
    value: "Lihat proyek dan repositori saya",
    href: "https://github.com/Fx-Minzz",
    icon: "⌘",
  },
  {
    label: "LinkedIn",
    value: "Terhubung secara profesional",
    href: "https://www.linkedin.com/in/mindo-fanbregas-7b9114450",
    icon: "in",
  },
];

export default function Contact() {
  const sectionRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [sendStatus, setSendStatus] = useState("");

  useEffect(() => {
    const content = sectionRef.current?.querySelectorAll(".contact-content");
    if (!content?.length) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        gsap.fromTo(
          content,
          { y: 25, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.15,
            ease: "power3.out",
            onComplete: () => {
              gsap.set(content, { clearProps: "opacity,transform" });
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
      gsap.killTweensOf(content);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsSending(true);
    setSendStatus("");

    try {
        await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
            name: form.name,
            email: form.email,
            message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        );

        setSendStatus("success");
        setForm({ name: "", email: "", message: "" });
    } catch (error) {
        console.error("EmailJS Error:", error);
        setSendStatus("error");
    } finally {
        setIsSending(false);
    }
    };

  return (
    <>
      <section
        id="contact"
        ref={sectionRef}
        className="relative overflow-hidden py-28"
      >
        <div className="container-main">
          <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-surface px-7 py-16 md:px-16 md:py-20">
            <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-accent/10 blur-[100px]" />
            <div className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-blue-500/10 blur-[100px]" />

            <div className="relative z-10 grid gap-14 md:grid-cols-2 md:items-center">
              <div className="contact-content">
                <span className="mb-4 block text-sm font-semibold uppercase tracking-[0.25em] text-accent">
                  Hubungi Saya
                </span>

                <h2 className="font-display text-4xl font-bold leading-tight text-white md:text-5xl">
                  Mari ciptakan sesuatu yang{" "}
                  <span className="gradient-text">luar biasa.</span>
                </h2>

                <p className="mt-6 max-w-md leading-7 text-gray-400">
                  Punya ide proyek, ingin berkolaborasi, atau sekadar ingin
                  terhubung? Jangan ragu untuk menghubungi saya. Saya terbuka
                  untuk berbagai kesempatan dan pengalaman baru.
                </p>

                <button
                    type="submit"
                    disabled={isSending}
                    className="flex w-full items-center justify-center gap-3 rounded-xl bg-accent px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-accent-light disabled:cursor-not-allowed disabled:opacity-60"
                    >
                    {isSending ? "Mengirim..." : "Kirim Sekarang"}
                    {!isSending && <span>↗</span>}
                    </button>

                    {sendStatus === "success" && (
                    <p className="text-center text-sm text-green-400">
                        Pesan berhasil dikirim!
                    </p>
                    )}

                    {sendStatus === "error" && (
                    <p className="text-center text-sm text-red-400">
                        Pesan gagal dikirim. Silakan coba lagi.
                    </p>
                    )}
              </div>

              <div className="contact-content flex flex-col gap-4">
                {contactLinks.map((item) => {
                  const content = (
                    <>
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 font-display text-lg font-bold text-accent-light">
                        {item.icon}
                      </div>

                      <div className="min-w-0 flex-1">
                        <h3 className="font-semibold text-white">
                          {item.label}
                        </h3>
                        <p className="mt-1 text-sm text-gray-400">
                          {item.value}
                        </p>
                      </div>

                      <span className="text-gray-500 transition group-hover:translate-x-1 group-hover:text-accent">
                        ↗
                      </span>
                    </>
                  );

                  const className =
                    "group flex items-center gap-5 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 text-left transition hover:border-accent/40 hover:bg-white/[0.04]";

                  return item.action === "modal" ? (
                    <button
                      key={item.label}
                      type="button"
                      onClick={() => setIsOpen(true)}
                      className={className}
                    >
                      {content}
                    </button>
                  ) : (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className={className}
                    >
                      {content}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/70 p-4 backdrop-blur-sm"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setIsOpen(false);
            }
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-modal-title"
            className="relative my-auto w-full max-w-lg rounded-3xl border border-white/10 bg-[#111319] p-7 shadow-2xl md:p-9"
          >
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Tutup popup"
              className="absolute right-6 top-6 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-gray-400 transition hover:bg-white/10 hover:text-white"
            >
              ✕
            </button>

            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Get In Touch
            </span>

            <h3
              id="contact-modal-title"
              className="mt-3 font-display text-3xl font-bold text-white"
            >
              Kirim Pesan
            </h3>

            <p className="mt-3 text-sm leading-6 text-gray-400">
              Isi formulir berikut untuk mengirimkan pesan kepada saya.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-300">
                  Nama
                </label>
                <input
                  type="text"
                  required
                  maxLength={80}
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                  placeholder="Masukkan nama kamu"
                  className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-accent"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  required
                  maxLength={120}
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                  placeholder="nama@email.com"
                  className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-accent"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-300">
                  Pesan
                </label>
                <textarea
                  required
                  rows={5}
                  maxLength={2000}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  placeholder="Tuliskan pesan kamu di sini..."
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-accent"
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-accent px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-accent-light"
              >
                Kirim Sekarang
                <span aria-hidden="true">↗</span>
              </button>

              <p className="text-center text-xs text-gray-500">
                Pesan akan diteruskan melalui aplikasi email kamu.
              </p>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
