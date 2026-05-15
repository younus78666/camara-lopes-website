import { Calendar, Users, Award, Globe } from "lucide-react";

const stats = [
  { icon: Calendar, value: "15+", label: "Years in Hair Restoration" },
  { icon: Users, value: "5,000+", label: "Successful Procedures" },
  { icon: Award, value: "2", label: "Board-Certified Specialists" },
  { icon: Globe, value: "30+", label: "Countries Served" },
];

export function WhyClinic() {
  return (
    <section className="bg-navy-deep pattern-overlay py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">
          {/* Image */}
          <div className="fade-up relative order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden shadow-2xl h-full">
              <img
                src="/procedure-room.jpg"
                alt="Inside the procedure room at Camara Lopes Clinic, Campinas, Brazil"
                className="w-full h-full min-h-[350px] object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="fade-up fade-up-delay-2 order-1 lg:order-2">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3 block">
              Why Camara Lopes
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              A Legacy of Excellence in{" "}
              <span className="text-gold-gradient italic">Hair Restoration</span>
            </h2>

            <div className="space-y-4 mb-10">
              <p className="text-white/60 leading-relaxed">
                Most hair transplant clinics rely on a single surgeon working alone. At Camara Lopes Clinic, every patient is evaluated by both a plastic surgeon and a dermatologist-trichologist before any treatment recommendation is made.
              </p>
              <p className="text-white/60 leading-relaxed">
                This dual-specialist approach means your hair loss is diagnosed from two complementary perspectives. Dr. Sergio brings surgical precision and hairline design expertise. Dra. Alessandra brings scalp health evaluation, trichoscopy diagnosis, and long-term hair care planning. Together, they create a personalized treatment plan that addresses not just the transplant itself, but the underlying causes of your hair loss.
              </p>
              <p className="text-white/60 leading-relaxed">
                The result is a more thorough evaluation, a more accurate graft estimate, and a follow-up protocol that monitors both surgical healing and ongoing hair health.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map(({ icon: Icon, value, label }, i) => (
                <div
                  key={label}
                  className={`fade-up fade-up-delay-${i + 1} bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-colors`}
                >
                  <Icon className="w-5 h-5 text-gold mb-2" />
                  <div className="text-2xl font-display font-bold text-white">
                    {value}
                  </div>
                  <div className="text-xs text-white/40 mt-0.5">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
