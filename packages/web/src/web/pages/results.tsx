import { Link } from "wouter";
import { ArrowRight, Filter } from "lucide-react";
import { TopBar, Header } from "../components/sections/TopBar";
import { Disclaimer, Footer, PreFooter } from "../components/sections/Footer";
import { WhatsAppFloat } from "../components/sections/WhatsAppFloat";
import { CTA } from "../components/sections/CTA";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { cases } from "../data/cases";
import { useState } from "react";

export { cases } from "../data/cases";

const filters = ["All", "FUE", "Non-Shave FUE", "Long Hair FUE", "Female"];

export default function ResultsPage() {
  useScrollReveal();
  const [active, setActive] = useState("All");

  const filtered = active === "All"
    ? cases
    : active === "Female"
      ? cases.filter((c) => c.gender === "Female")
      : cases.filter((c) => c.procedure === active);

  return (
    <div className="min-h-screen">
      <TopBar />
      <Header />

      {/* Page Hero */}
      <section className="bg-navy-deep pattern-overlay py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="fade-up max-w-3xl">
            <nav className="flex items-center gap-2 text-xs text-white/40 mb-6">
              <Link href="/" className="hover:text-gold transition-colors">Home</Link>
              <span>/</span>
              <span className="text-gold">Results Gallery</span>
            </nav>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3 block">
              Patient Results
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Real Patients.{" "}
              <span className="text-gold-gradient italic">Real Results.</span>
            </h1>
            <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-2xl">
              Every result shown below is from a real patient treated at Camara Lopes Clinic.
              All photos are published with documented patient consent. Each case includes a
              complete 12-month timeline so you can follow the full growth journey.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="bg-white border-b border-border/50 py-4 sticky top-[64px] md:top-[80px] z-30">
        <div className="max-w-7xl mx-auto px-4 flex items-center gap-3 flex-wrap">
          <Filter className="w-4 h-4 text-muted-foreground" />
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Filter:</span>
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-4 py-1.5 text-xs font-semibold rounded-full transition-colors ${
                active === f
                  ? "bg-navy-deep text-white"
                  : "bg-cream text-foreground/60 hover:bg-gold/10 hover:text-gold-dark"
              }`}
            >
              {f}
            </button>
          ))}
          <span className="ml-auto text-xs text-muted-foreground">{filtered.length} case{filtered.length !== 1 ? "s" : ""}</span>
        </div>
      </section>

      {/* Cases Grid */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((c, i) => (
              <Link
                key={c.id}
                href={`/results/${c.id}`}
                className={`fade-up fade-up-delay-${Math.min(i + 1, 4)} group block bg-white rounded-2xl overflow-hidden border border-border/50 hover:shadow-xl hover:border-gold/20 transition-all duration-500`}
              >
                {/* Before / After split thumbnail */}
                <div className="relative h-56 md:h-64 overflow-hidden">
                  <div className="absolute inset-0 grid grid-cols-2">
                    <div className="relative overflow-hidden">
                      <img
                        src={c.beforeImage}
                        alt={`Before — ${c.alt}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute bottom-2 left-2">
                        <span className="px-2 py-0.5 bg-navy-deep/80 backdrop-blur-sm text-white text-[9px] font-bold uppercase tracking-wider rounded-full">
                          Before
                        </span>
                      </div>
                    </div>
                    <div className="relative overflow-hidden border-l-2 border-white">
                      <img
                        src={c.afterImage}
                        alt={`After — ${c.alt}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute bottom-2 right-2">
                        <span className="px-2 py-0.5 bg-gold/90 text-navy-deep text-[9px] font-bold uppercase tracking-wider rounded-full">
                          After
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-3 left-3 z-10">
                    <span className="px-3 py-1 bg-navy-deep/80 backdrop-blur-sm text-white text-[10px] font-semibold uppercase tracking-wider rounded-full">
                      {c.procedure}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3 z-10">
                    <span className="px-2.5 py-1 bg-white/90 text-navy-deep text-[10px] font-semibold rounded-full">
                      12 Months
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm mb-4">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-muted-foreground block">Grafts</span>
                      <span className="font-semibold text-navy-deep">{c.grafts}</span>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-muted-foreground block">Patient</span>
                      <span className="font-semibold text-navy-deep">{c.patient}</span>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-muted-foreground block">Area</span>
                      <span className="font-semibold text-navy-deep">{c.area}</span>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-muted-foreground block">Doctor</span>
                      <span className="font-semibold text-navy-deep">{c.doctor}</span>
                    </div>
                  </div>

                  {/* Mini timeline preview */}
                  <div className="flex gap-1 mb-3">
                    {[0, 3, 7, 11, 13].map((idx) => (
                      <div key={idx} className="flex-1 h-1.5 rounded-full bg-gold/20 overflow-hidden">
                        <div className="h-full bg-gold rounded-full" style={{ width: `${((idx + 1) / 14) * 100}%` }} />
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-1.5 text-sm font-semibold text-navy group-hover:text-gold transition-colors">
                    View Full 12-Month Timeline
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">No cases found for this filter.</p>
              <button onClick={() => setActive("All")} className="mt-4 text-gold font-semibold hover:underline">
                Show all cases
              </button>
            </div>
          )}
        </div>
      </section>

      <CTA />
      <PreFooter />
      <Disclaimer />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
