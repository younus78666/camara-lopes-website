import { Phone, Mail, MapPin, Award, Send, MessageCircle } from "lucide-react";
import { useState } from "react";

/* ── Pre-footer: Newsletter / Subscribe ── */
export function PreFooter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="bg-navy py-14 md:py-18 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-3">
              Stay Updated with Hair Restoration Insights
            </h3>
            <p className="text-sm text-white/40 leading-relaxed">
              Receive the latest articles, case studies, and clinic news directly in your inbox.
              No spam — unsubscribe anytime.
            </p>
          </div>

          <div>
            {submitted ? (
              <div className="bg-white/5 border border-gold/20 rounded-xl p-6 text-center">
                <div className="text-gold text-lg font-semibold mb-1">Thank you!</div>
                <p className="text-sm text-white/50">You'll receive our next update soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex gap-3">
                <div className="flex-1 relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/25" />
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-11 pr-4 py-3.5 bg-white/[0.06] border border-white/10 rounded-xl text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-gold/40 focus:ring-1 focus:ring-gold/20 transition-all"
                  />
                </div>
                <button
                  type="submit"
                  className="flex items-center gap-2 px-6 py-3.5 bg-gold text-navy-deep text-sm font-bold rounded-xl hover:bg-gold-light transition-colors flex-shrink-0"
                >
                  <Send className="w-4 h-4" />
                  <span className="hidden sm:inline">Subscribe</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Disclaimer ── */
export function Disclaimer() {
  return (
    <section className="bg-cream-dark py-6">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-[11px] text-foreground/40 leading-relaxed text-center">
          <span className="font-semibold">Medical Disclaimer:</span> All information on this website is for general informational purposes only and does not constitute medical advice, diagnosis, or treatment. Individual results vary and are not guaranteed. All patient photos are published with documented consent. A medical evaluation by our doctors is required before any treatment recommendation can be made. If you are considering a hair transplant, consult a qualified medical professional.
        </p>
      </div>
    </section>
  );
}

/* ── Main Footer ── */
export function Footer() {
  const treatmentLinks = [
    { label: "FUE Transplant", href: "/treatments/fue" },
    { label: "Non-Shave FUE", href: "/treatments/non-shave-fue" },
    { label: "Long Hair FUE", href: "/treatments/long-hair-fue" },
    { label: "Female Hair Transplant", href: "/treatments/female-hair-transplant" },
    { label: "Beard Transplant", href: "/treatments/beard-transplant" },
    { label: "Eyebrow Transplant", href: "/treatments/eyebrow-transplant" },
    { label: "Cost & Pricing", href: "/#cost" },
  ];

  const clinicLinks = [
    { label: "Our Doctors", href: "/#doctors" },
    { label: "Results Gallery", href: "/results" },
    { label: "Patient Journey", href: "/#journey" },
    { label: "Why Camara Lopes", href: "/#why-clinic" },
    { label: "Clinical Journal", href: "/#journal" },
    { label: "Testimonials", href: "/#testimonials" },
  ];

  const patientLinks = [
    { label: "International Patients", href: "/#journey" },
    { label: "Book Consultation", href: "/#consultation" },
    { label: "Contact Us", href: "/#consultation" },
    { label: "WhatsApp Us", href: "https://wa.me/551944440707" },
    { label: "FAQs", href: "/#faq" },
    { label: "Why Brazil", href: "/#why-brazil" },
  ];

  const brazilCities = [
    "São Paulo", "Campinas", "Rio de Janeiro", "Belo Horizonte", "Curitiba",
    "Brasília", "Porto Alegre", "Salvador", "Recife", "Florianópolis",
    "Goiânia", "Ribeirão Preto", "Santos", "Sorocaba", "Jundiaí",
    "Piracicaba", "Limeira", "Americana", "Bauru", "Marília",
  ];

  const countries = [
    "United States", "United Kingdom", "Canada", "Germany", "France",
    "Portugal", "Spain", "Italy", "Netherlands", "Australia",
    "Japan", "UAE", "Saudi Arabia", "Mexico", "Argentina",
    "Chile", "Colombia", "Ireland", "Switzerland", "South Africa",
    "Angola", "Mozambique", "Israel", "India", "South Korea",
  ];

  return (
    <footer className="bg-navy-deep pattern-overlay">
      {/* Contact cards row */}
      <div className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <a href="tel:+551944440707" className="group flex items-center gap-4 bg-white/[0.04] border border-white/[0.06] rounded-xl p-4 hover:border-gold/20 transition-all">
              <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                <Phone className="w-4 h-4 text-gold" />
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-wider text-white/30 mb-0.5">Call Us</div>
                <div className="text-sm font-semibold text-white">+55 19 4444-0707</div>
              </div>
            </a>

            <a href="https://wa.me/551944440707" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 bg-white/[0.04] border border-white/[0.06] rounded-xl p-4 hover:border-gold/20 transition-all">
              <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                <MessageCircle className="w-4 h-4 text-gold" />
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-wider text-white/30 mb-0.5">WhatsApp</div>
                <div className="text-sm font-semibold text-white">Message Us</div>
              </div>
            </a>

            <div className="flex items-center gap-4 bg-white/[0.04] border border-white/[0.06] rounded-xl p-4">
              <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-4 h-4 text-gold" />
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-wider text-white/30 mb-0.5">Location</div>
                <div className="text-sm font-semibold text-white">Campinas, SP, Brazil</div>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white/[0.04] border border-white/[0.06] rounded-xl p-4">
              <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                <Award className="w-4 h-4 text-gold" />
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-wider text-white/30 mb-0.5">Accreditation</div>
                <div className="text-sm font-semibold text-white">ISHRS · SBCP · CFM</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Link columns */}
      <div className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <div>
              <img
                src="/logo.png"
                alt="Clínica Camara Lopes"
                className="h-20 w-auto brightness-0 invert mb-4"
              />
              <p className="text-sm text-white/35 leading-relaxed mb-5">
                Advanced Hair Restoration & Research. Two board-certified specialists.
                One comprehensive approach to natural-looking results.
              </p>
              <div className="flex items-center gap-3">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-white/30 hover:text-gold hover:border-gold/30 transition-all">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-white/30 hover:text-gold hover:border-gold/30 transition-all">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-white/30 hover:text-gold hover:border-gold/30 transition-all">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/[0.05] border border-white/[0.08] flex items-center justify-center text-white/30 hover:text-gold hover:border-gold/30 transition-all">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
              </div>
            </div>

            {/* Treatments */}
            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-[0.15em] text-white/60 mb-5">
                Treatments
              </h4>
              <ul className="space-y-2.5">
                {treatmentLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-white/35 hover:text-gold transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Clinic */}
            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-[0.15em] text-white/60 mb-5">
                Clinic
              </h4>
              <ul className="space-y-2.5">
                {clinicLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-white/35 hover:text-gold transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* For Patients */}
            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-[0.15em] text-white/60 mb-5">
                For Patients
              </h4>
              <ul className="space-y-2.5">
                {patientLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-white/35 hover:text-gold transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Serving areas in Brazil */}
      <div className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 mb-4">
            Serving Patients From Across Brazil
          </h4>
          <div className="flex flex-wrap gap-2">
            {brazilCities.map((city) => (
              <span
                key={city}
                className="inline-flex items-center px-3 py-1.5 rounded-md bg-white/[0.03] border border-white/[0.06] text-[11px] text-white/30 font-medium hover:text-white/50 hover:border-white/10 transition-colors cursor-default"
              >
                {city}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* International countries */}
      <div className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 mb-4">
            International Patients — Countries We Serve
          </h4>
          <div className="flex flex-wrap gap-2">
            {countries.map((country) => (
              <span
                key={country}
                className="inline-flex items-center px-3 py-1.5 rounded-md bg-white/[0.03] border border-white/[0.06] text-[11px] text-white/30 font-medium hover:text-white/50 hover:border-white/10 transition-colors cursor-default"
              >
                {country}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-white/20">
            &copy; 2026 Camara Lopes Clinic. All rights reserved. CRM/SP XXXXX · RQE XXXXX
          </p>
          <div className="flex items-center gap-5">
            {["Privacy Policy", "Terms of Service", "Medical Disclaimer", "Cookie Policy"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-[11px] text-white/20 hover:text-gold transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
