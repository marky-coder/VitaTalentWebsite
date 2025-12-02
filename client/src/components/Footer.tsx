// client/src/components/Footer.tsx
import logoImage from "@assets/WhatsApp_Image_2025-10-24_at_11.32.23_PM-removebg-preview_1761482028519.png";
import { useLocation } from "wouter";

export default function Footer() {
  const [location, setLocation] = useLocation();

  const scrollToSection = (id: string) => {
    // If we're already on the home page, scroll directly.
    if (location === "/") {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        return;
      }
      // If not found immediately, retry a few times (in case layout is still painting).
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

    // Otherwise navigate to home with a query param instructing Home to scroll.
    setLocation(`/?scrollTo=${encodeURIComponent(id)}`);
  };

  return (
    <footer className="bg-primary/12 border-t border-primary/20 py-12" data-testid="footer">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-3">
            <img src={logoImage} alt="Vita Talent Logo" className="w-12 h-12 object-contain" />
            <span className="text-xl font-semibold text-foreground">Vita Talent</span>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-home"
            >
              Home
            </button>

            {/* Pricing button shown only when footer is on the Home page */}
            {location === "/" && (
              <button
                onClick={() => setLocation("/pricing")}
                className="text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-pricing"
              >
                Pricing
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
