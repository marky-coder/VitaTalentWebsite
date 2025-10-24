import logoImage from "@assets/WhatsApp Image 2025-10-24 at 11.32.23 PM (1)_1761341009209.jpeg";

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary/20 border-t border-primary/30 py-12" data-testid="footer">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-3">
            <img src={logoImage} alt="Vita Talent Logo" className="w-12 h-12 object-contain" />
            <span className="text-xl font-semibold text-foreground">Vita Talent</span>
          </div>
          
          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <button onClick={() => scrollToSection('hero')} className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-home">
              Home
            </button>
            <button onClick={() => scrollToSection('why-global')} className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-about">
              About
            </button>
            <button onClick={() => scrollToSection('process')} className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-process">
              Process
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-testimonials">
              Testimonials
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-contact">
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
