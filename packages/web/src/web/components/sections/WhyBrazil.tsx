import { GraduationCap, DollarSign, MapPin, Languages, PlaneTakeoff } from "lucide-react";

const benefits = [
  {
    icon: GraduationCap,
    text: "Board-certified surgeons with international training and ISHRS membership",
  },
  {
    icon: DollarSign,
    text: "Cost savings of 40-70% compared to the US, UK, and Western Europe",
  },
  {
    icon: MapPin,
    text: "Campinas — a major medical hub 100 km from São Paulo",
  },
  {
    icon: Languages,
    text: "Multilingual staff fluent in English, Spanish, and Portuguese",
  },
  {
    icon: PlaneTakeoff,
    text: "Direct international flights to Viracopos (VCP) and Guarulhos (GRU) airports",
  },
];

export function WhyBrazil() {
  return (
    <section id="why-brazil" className="bg-navy-deep pattern-overlay py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">
          {/* Content */}
          <div className="fade-up">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3 block">
              Why Brazil
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              World-Class Hair Restoration at a{" "}
              <span className="text-gold-gradient italic">Fraction of the Cost</span>
            </h2>

            <p className="text-white/60 leading-relaxed mb-4">
              Brazil is one of the world's leading destinations for medical tourism, with a long history of excellence in plastic surgery and dermatology. Campinas, located 100 km from São Paulo, is home to some of Brazil's top medical institutions and research universities.
            </p>
            <p className="text-white/60 leading-relaxed mb-8">
              At Camara Lopes Clinic, international patients benefit from board-certified specialists, modern facilities, and a cost structure that makes high-quality hair restoration accessible.
            </p>

            {/* Benefits */}
            <div className="space-y-4">
              {benefits.map(({ icon: Icon, text }, i) => (
                <div
                  key={i}
                  className={`fade-up fade-up-delay-${Math.min(i + 1, 4)} flex items-start gap-3`}
                >
                  <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className="w-4 h-4 text-gold" />
                  </div>
                  <span className="text-sm text-white/70 leading-relaxed">
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Image / Map Card */}
          <div className="fade-up fade-up-delay-2 flex">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col w-full">
              <img
                src="/clinic-lobby.jpg"
                alt="Camara Lopes Clinic in Campinas, Brazil"
                className="w-full flex-1 min-h-[200px] object-cover rounded-xl mb-6"
              />
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-gold mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-sm font-semibold text-white">Camara Lopes Clinic</div>
                    <div className="text-xs text-white/50">Campinas, São Paulo, Brazil</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <PlaneTakeoff className="w-4 h-4 text-gold mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-sm font-semibold text-white">Nearest Airports</div>
                    <div className="text-xs text-white/50">Viracopos (VCP) · Guarulhos (GRU)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
