import { Phone, Menu, X, MessageCircle, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export function TopBar() {
  return (
    <div className="bg-navy-deep border-b border-white/5 text-xs py-2 font-body">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <div className="hidden md:flex items-center gap-4">
          <span className="font-medium text-white/60">Board Certified Surgeons</span>
          <span className="text-gold/30">|</span>
          <span className="font-medium text-white/60">Patients from 30+ Countries</span>
          <span className="text-gold/30">|</span>
          <span className="font-medium text-white/60">Campinas, SP — Brazil</span>
        </div>
        <div className="md:hidden text-center w-full font-medium text-white/60">
          Board Certified Surgeons · 30+ Countries · Campinas, Brazil
        </div>
        <div className="hidden md:flex items-center gap-2 text-gold/70">
          <Phone className="w-3 h-3" />
          <span className="font-semibold">+55 19 4444-0707</span>
        </div>
      </div>
    </div>
  );
}

/* ── Dropdown helper ── */
function NavDropdown({ label, items }: { label: string; items: { name: string; href: string }[] }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 text-sm text-white/80 hover:text-gold transition-colors font-medium"
      >
        {label}
        <ChevronDown className={`w-3 h-3 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-2 w-56 bg-navy-deep border border-white/10 rounded-xl shadow-2xl overflow-hidden z-50">
          {items.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block px-4 py-2.5 text-sm text-white/70 hover:text-gold hover:bg-white/5 transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

const treatmentItems = [
  { name: "FUE Transplant", href: "#treatments" },
  { name: "Non-Shave FUE", href: "#treatments" },
  { name: "Long Hair FUE", href: "#treatments" },
  { name: "Female Hair Transplant", href: "#treatments" },
];

const aboutItems = [
  { name: "Dr. Sergio Camara Lopes", href: "#doctors" },
  { name: "Dra. Alessandra Bernardi", href: "#doctors" },
  { name: "The Clinic", href: "#journey" },
  { name: "Why Brazil", href: "#why-brazil" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-navy-deep/95 backdrop-blur-md shadow-lg" : "bg-navy-deep"}`}>
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img
            src="/logo.png"
            alt="Clínica Camara Lopes"
            className="h-12 md:h-14 w-auto brightness-0 invert"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          <NavDropdown label="Doctors" items={aboutItems} />
          <NavDropdown label="Treatments" items={treatmentItems} />
          <a href="/results" className="text-sm text-white/80 hover:text-gold transition-colors font-medium">Results</a>
          <a href="#cost" className="text-sm text-white/80 hover:text-gold transition-colors font-medium">Cost</a>
          <a href="#journey" className="text-sm text-white/80 hover:text-gold transition-colors font-medium">International Patients</a>
          <a href="#journal" className="text-sm text-white/80 hover:text-gold transition-colors font-medium">Journal</a>
          <a href="#consultation" className="text-sm text-white/80 hover:text-gold transition-colors font-medium">Contact</a>
        </nav>

        {/* CTA + WhatsApp + Mobile Menu */}
        <div className="flex items-center gap-2">
          <a
            href="https://wa.me/551944440707"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-1.5 px-3 py-2 text-sm text-white/70 hover:text-gold transition-colors font-medium"
            aria-label="WhatsApp"
          >
            <MessageCircle className="w-4 h-4" />
            <span className="hidden lg:inline">WhatsApp</span>
          </a>
          <a
            href="#consultation"
            className="hidden sm:inline-flex items-center px-5 py-2.5 border border-gold/60 text-gold font-semibold text-sm rounded hover:bg-gold hover:text-navy-deep transition-all duration-300"
          >
            Book Consultation
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-white"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-navy-deep border-t border-white/10 px-4 py-4 space-y-1">
          <p className="text-[10px] uppercase tracking-wider text-gold/60 font-semibold px-2 pt-2 pb-1">Doctors</p>
          {aboutItems.map((item) => (
            <a key={item.name} href={item.href} onClick={() => setMobileOpen(false)} className="block py-2 px-2 text-sm text-white/70 hover:text-gold font-medium">{item.name}</a>
          ))}
          <p className="text-[10px] uppercase tracking-wider text-gold/60 font-semibold px-2 pt-3 pb-1">Treatments</p>
          {treatmentItems.map((item) => (
            <a key={item.name} href={item.href} onClick={() => setMobileOpen(false)} className="block py-2 px-2 text-sm text-white/70 hover:text-gold font-medium">{item.name}</a>
          ))}
          <div className="border-t border-white/10 mt-2 pt-2">
            <a href="/results" onClick={() => setMobileOpen(false)} className="block py-2.5 px-2 text-sm text-white/70 hover:text-gold font-medium">Results</a>
            <a href="#cost" onClick={() => setMobileOpen(false)} className="block py-2.5 px-2 text-sm text-white/70 hover:text-gold font-medium">Cost</a>
            <a href="#journey" onClick={() => setMobileOpen(false)} className="block py-2.5 px-2 text-sm text-white/70 hover:text-gold font-medium">International Patients</a>
            <a href="#journal" onClick={() => setMobileOpen(false)} className="block py-2.5 px-2 text-sm text-white/70 hover:text-gold font-medium">Journal</a>
            <a href="#consultation" onClick={() => setMobileOpen(false)} className="block py-2.5 px-2 text-sm text-white/70 hover:text-gold font-medium">Contact</a>
          </div>
          <a
            href="#consultation"
            onClick={() => setMobileOpen(false)}
            className="block mt-3 text-center px-5 py-2.5 border border-gold/60 text-gold font-semibold text-sm rounded hover:bg-gold hover:text-navy-deep transition-all"
          >
            Book Consultation
          </a>
        </div>
      )}
    </header>
  );
}
