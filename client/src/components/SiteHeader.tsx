import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";

type NavItem = {
  label: string;
  href?: string;
  children?: {
    label: string;
    href: string;
    external?: boolean;
  }[];
  external?: boolean;
};

const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Testimonials", href: "#testimonials" },
  {
    label: "Reviews",
    children: [
      {
        label: "Trustpilot",
        href: "https://www.trustpilot.com/review/vitatalent.co",
        external: true,
      },
      {
        label: "Google Reviews",
        href: "https://share.google/4KVeKJ2yypiNmAR5z",
        external: true,
      },
    ],
  },
  {
    label: "Socials",
    children: [
      {
        label: "Facebook",
        href: "https://www.facebook.com/profile.php?id=61582724201072",
        external: true,
      },
      {
        label: "Instagram",
        href: "https://www.instagram.com/vitatalent_",
        external: true,
      },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/company/vita-talent/posts/?feedView=all",
        external: true,
      },
    ],
  },
];

function LinkAnchor({
  href,
  children,
  external = false,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  className?: string;
}) {
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={className}
      >
        {children}
      </a>
    );
  }

  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
}

export default function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-primary/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#home"
          className="shrink-0 text-2xl font-bold tracking-tight text-primary-foreground sm:text-3xl"
        >
          Vita Talent
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => {
            const hasChildren = Boolean(item.children?.length);

            if (!hasChildren && item.href) {
              return (
                <LinkAnchor
                  key={item.label}
                  href={item.href}
                  external={item.external}
                  className="text-base font-medium text-primary-foreground/90 transition-opacity hover:opacity-75"
                >
                  {item.label}
                </LinkAnchor>
              );
            }

            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  type="button"
                  className="inline-flex items-center gap-2 text-base font-medium text-primary-foreground/90 transition-opacity hover:opacity-75"
                >
                  {item.label}
                  <ChevronDown className="h-4 w-4" />
                </button>

                <div
                  className={`absolute left-0 top-full mt-3 min-w-[220px] rounded-2xl border border-black/5 bg-white p-2 shadow-[0_16px_40px_rgba(0,0,0,0.12)] transition-all duration-200 ${
                    openDropdown === item.label
                      ? "visible translate-y-0 opacity-100"
                      : "invisible -translate-y-1 opacity-0"
                  }`}
                >
                  {item.children?.map((child) => (
                    <LinkAnchor
                      key={child.label}
                      href={child.href}
                      external={child.external}
                      className="block rounded-xl px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                    >
                      {child.label}
                    </LinkAnchor>
                  ))}
                </div>
              </div>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="https://vitatalent.co/join"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-xl border border-primary-foreground/20 px-5 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-85"
          >
            Join as a Candidate
          </a>

          <a
            href="https://vitatalent.co/hire"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-primary transition-opacity hover:opacity-90"
          >
            Hire a Talent
          </a>
        </div>

        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-primary-foreground lg:hidden"
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/10 bg-primary lg:hidden">
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
            <div className="space-y-2">
              {navItems.map((item) => (
                <div key={item.label} className="rounded-2xl bg-white/5">
                  {item.href ? (
                    <LinkAnchor
                      href={item.href}
                      external={item.external}
                      className="block px-4 py-4 text-base font-medium text-primary-foreground"
                    >
                      {item.label}
                    </LinkAnchor>
                  ) : (
                    <div className="px-4 py-4 text-base font-medium text-primary-foreground">
                      {item.label}
                    </div>
                  )}

                  {item.children?.length ? (
                    <div className="border-t border-white/10 px-2 pb-2">
                      {item.children.map((child) => (
                        <LinkAnchor
                          key={child.label}
                          href={child.href}
                          external={child.external}
                          className="block rounded-xl px-3 py-3 text-sm text-primary-foreground/80 hover:bg-white/5"
                        >
                          {child.label}
                        </LinkAnchor>
                      ))}
                    </div>
                  ) : null}
                </div>
              ))}
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <a
                href="https://vitatalent.co/join"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 px-4 py-3 text-sm font-semibold text-primary-foreground"
              >
                Join
              </a>
              <a
                href="https://vitatalent.co/hire"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-white px-4 py-3 text-sm font-semibold text-primary"
              >
                Hire
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
