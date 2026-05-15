import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";

const treatments = [
  "FUE Hair Transplant",
  "Non-Shave FUE",
  "Long Hair FUE",
  "Female Hair Transplant",
  "Not sure — need guidance",
];

export function CTA() {
  return (
    <section id="consultation" className="bg-cream py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-navy-deep rounded-3xl overflow-hidden pattern-overlay">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left Content */}
            <div className="fade-up p-8 md:p-12 lg:p-16">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3 block">
                Start Your Journey
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                Your Consultation{" "}
                <span className="text-gold-gradient italic">Begins Online</span>
              </h2>
              <p className="text-white/60 leading-relaxed mb-8">
                Upload your photos, share your goals, and receive a personalized treatment plan from Dr. Sergio and Dra. Alessandra before you travel. Your first step is a video consultation from wherever you are.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-gold/10 flex items-center justify-center">
                    <Phone className="w-4 h-4 text-gold" />
                  </div>
                  <div>
                    <div className="text-xs text-white/40">WhatsApp / Phone</div>
                    <div className="text-sm text-white font-medium">+55 19 4444-0707</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-gold/10 flex items-center justify-center">
                    <Mail className="w-4 h-4 text-gold" />
                  </div>
                  <div>
                    <div className="text-xs text-white/40">Email</div>
                    <div className="text-sm text-white font-medium">contact@hairtransplant-brazil.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-gold/10 flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-gold" />
                  </div>
                  <div>
                    <div className="text-xs text-white/40">Location</div>
                    <div className="text-sm text-white font-medium">Campinas, SP — Brazil</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="fade-up fade-up-delay-2 bg-white/5 border-l border-white/10 p-8 md:p-12 lg:p-16">
              <h3 className="font-display text-xl font-bold text-white mb-6">
                Get Started
              </h3>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-xs text-white/40 mb-1.5 uppercase tracking-wider">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="Full name"
                    className="w-full px-4 py-3 bg-white/5 border border-white/15 rounded-lg text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-gold/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs text-white/40 mb-1.5 uppercase tracking-wider">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="you@email.com"
                    className="w-full px-4 py-3 bg-white/5 border border-white/15 rounded-lg text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-gold/50 transition-colors"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-white/40 mb-1.5 uppercase tracking-wider">
                      Country
                    </label>
                    <input
                      type="text"
                      placeholder="Your country"
                      className="w-full px-4 py-3 bg-white/5 border border-white/15 rounded-lg text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-gold/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-white/40 mb-1.5 uppercase tracking-wider">
                      Treatment Interest
                    </label>
                    <select
                      className="w-full px-4 py-3 bg-white/5 border border-white/15 rounded-lg text-white text-sm focus:outline-none focus:border-gold/50 transition-colors appearance-none"
                      defaultValue=""
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='rgba(255,255,255,0.4)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 12px center",
                      }}
                    >
                      <option value="" disabled className="bg-navy-deep text-white/50">
                        Select treatment
                      </option>
                      {treatments.map((t) => (
                        <option key={t} value={t} className="bg-navy-deep text-white">
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-white/40 mb-1.5 uppercase tracking-wider">
                    Tell us about your goals
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Describe your hair loss and what you'd like to achieve..."
                    className="w-full px-4 py-3 bg-white/5 border border-white/15 rounded-lg text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-gold/50 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-7 py-3.5 bg-gold text-navy-deep font-semibold rounded-lg hover:bg-gold-dark transition-all hover:shadow-lg hover:shadow-gold/20 mt-2"
                >
                  Book Online Consultation
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
