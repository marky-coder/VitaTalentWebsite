export default function SiteFooterNav() {
  return (
    <footer className="border-t border-black/5 bg-[#DEE9E3]">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-[#13201e]/80">
          <a href="#home" className="transition-opacity hover:opacity-65">
            Home
          </a>
          <a href="#about" className="transition-opacity hover:opacity-65">
            About
          </a>
          <a href="#process" className="transition-opacity hover:opacity-65">
            Process
          </a>
          <a href="#testimonials" className="transition-opacity hover:opacity-65">
            Testimonials
          </a>
          <a
            href="https://vitatalent.co/terms"
            target="_blank"
            rel="noreferrer"
            className="transition-opacity hover:opacity-65"
          >
            Terms & Conditions
          </a>
        </nav>
      </div>
    </footer>
  );
}
