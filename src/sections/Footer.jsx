
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 py-8">
      <div className="container-main flex flex-col items-center justify-between gap-5 sm:flex-row">
        <div className="text-center sm:text-left">
          <a
            href="#home"
            className="font-display text-xl font-bold tracking-tight"
          >
            Fx<span className="text-accent">_Minzz.</span>
          </a>

          <p className="mt-2 text-sm text-muted">
            © {currentYear} Fx_Minzz. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-6 text-sm text-muted">
          <a
            href="https://github.com/Fx-Minzz"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-white"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/mindo-fanbregas-7b9114450"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-white"
          >
            LinkedIn
          </a>

          <a
            href="#home"
            className="transition-colors hover:text-white"
          >
            Back to Top ↑
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
