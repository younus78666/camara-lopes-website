import { ArrowRight } from "lucide-react";
import { cases } from "../../data/cases";

export function Results() {
  // Show first 3 cases on homepage
  const featured = cases.slice(0, 3);

  return (
    <section id="results" className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="fade-up mb-12 md:mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3 block">
            Patient Results
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-navy-deep mb-4">
            Real Patients. Real Results.
          </h2>
          <p className="text-foreground/60 max-w-2xl text-base md:text-lg leading-relaxed">
            Every result shown below is from a real patient treated at Camara Lopes Clinic.
            Each case includes a complete 12-month timeline. All photos published with documented patient consent.
          </p>
        </div>

        {/* Results Grid */}
        <div className="grid md:grid-cols-3 gap-5">
          {featured.map((c, i) => (
            <a
              key={c.id}
              href={`/results/${c.id}`}
              className={`fade-up fade-up-delay-${i + 1} group block bg-cream rounded-2xl overflow-hidden border border-border/50 hover:shadow-xl hover:border-gold/30 transition-all duration-500`}
            >
              {/* Before / After split thumbnail */}
              <div className="relative h-52 md:h-60 overflow-hidden">
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

                <div className="flex items-center gap-1.5 text-sm font-semibold text-navy group-hover:text-gold transition-colors">
                  View Full 12-Month Timeline
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="fade-up text-center mt-10">
          <a
            href="/results"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-navy/20 text-navy font-semibold rounded hover:border-gold hover:text-gold transition-colors"
          >
            View All {cases.length} Cases
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
