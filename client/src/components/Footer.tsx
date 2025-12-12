// client/src/components/Footer.tsx
import logoImage from "@assets/WhatsApp_Image_2025-10-24_at_11.32.23_PM-removebg-preview_1761482028519.png";
import { useLocation } from "wouter";

export default function Footer() {
  const [location, setLocation] = useLocation();

  const scrollToSection = (id: string) => {
    if (location === "/") {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        return;
      }
      let attempts = 0;
      const tryScroll = () => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        } else if (attempts < 10) {
          attempts++;
          setTimeout(tryScroll, 100);
        }
      };
      tryScroll();
      return;
    }

    setLocation(`/?scrollTo=${encodeURIComponent(id)}`);
  };

  return (
    <footer className="bg-primary/12 border-t border-primary/20 py-12" data-testid="footer">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-col items-center gap-3">
            <div className="flex items-center gap-3">
              <img src={logoImage} alt="Vita Talent Logo" className="w-12 h-12 object-contain" />
              <span className="text-xl font-semibold text-foreground">Vita Talent</span>
            </div>

            {/* --- NEW: footer socials (static, bigger) --- */}
            <div className="mt-4 flex justify-center items-center gap-6" aria-label="VitaTalent social links footer">
              <a
                href="https://www.facebook.com/profile.php?id=61582724201072"
                target="_blank"
                rel="noopener noreferrer"
                title="Facebook"
                aria-label="VitaTalent Facebook"
                className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-md bg-gray-100 hover:bg-primary/10 transition"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 md:w-6 md:h-6 text-foreground" aria-hidden="true" focusable="false">
                  <path d="M22 12C22 6.477 17.523 2 12 2S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.99H7.898v-2.888h2.54V9.845c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.888h-2.33v6.99C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>

              <a
                href="https://www.instagram.com/vitatalent_"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
                aria-label="VitaTalent Instagram"
                className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-md bg-gray-100 hover:bg-primary/10 transition"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 md:w-6 md:h-6 text-foreground" aria-hidden="true" focusable="false">
                  <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 6.1A4.9 4.9 0 1 0 16.9 13 4.9 4.9 0 0 0 12 8.1zm5.2-2.3a1.1 1.1 0 1 0 1.1 1.1 1.1 1.1 0 0 0-1.1-1.1zM12 15.3A3.3 3.3 0 1 1 15.3 12 3.3 3.3 0 0 1 12 15.3z" />
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/company/vita-talent"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                aria-label="VitaTalent LinkedIn"
                className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-md bg-gray-100 hover:bg-primary/10 transition"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 md:w-6 md:h-6 text-foreground" aria-hidden="true" focusable="false">
                  <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.5 18H6v-8h2.5v8zM7.25 9.5a1.4 1.4 0 1 1 0-2.8 1.4 1.4 0 0 1 0 2.8zM18 18h-2.5v-4.2c0-1-0.4-1.7-1.4-1.7-0.8 0-1.2.5-1.4 1v4.9H10.5v-8H13v1.1c0.3-0.6 1-1.5 2.7-1.5 2 0 3.5 1.3 3.5 4.2V18z" />
                </svg>
              </a>
            </div>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-home"
            >
              Home
            </button>

            {/* Schedule CTA conditional */}
            {location === "/" && (
              <button
                onClick={() => setLocation("/schedule")}
                className="text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-schedule"
              >
                Schedule a free discovery call
              </button>
            )}

            <button
              onClick={() => scrollToSection("why-global")}
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-about"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("process")}
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-process"
            >
              Process
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-testimonials"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-contact"
            >
              Contact
            </button>
          </nav>

          <div className="text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Vita Talent. All rights reserved.</p>
            <p className="mt-2">Where integrity meets opportunity.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
