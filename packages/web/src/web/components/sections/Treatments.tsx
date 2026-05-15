import { ArrowUpRight, Scissors, EyeOff, Sparkles, Heart } from "lucide-react";

const treatments = [
  {
    icon: Scissors,
    title: "FUE Transplant",
    subtitle: "Follicular Unit Extraction",
    description:
      "Individual follicles are extracted from the donor area and transplanted to thinning or balding regions. Minimal scarring, natural hairline design, and no linear scar. The standard for modern hair restoration.",
    tag: "Core Procedure",
    link: "/fue-hair-transplant-brazil/",
    featured: true,
  },
  {
    icon: EyeOff,
    title: "Non-Shave FUE",
    subtitle: "No Visible Shaving Required",
    description:
      "The donor area is not fully shaved, allowing you to return to daily life without anyone noticing you had a procedure. Ideal for patients who need discretion.",
    tag: "Discreet Option",
    link: "/non-shave-hair-transplant-brazil/",
    featured: false,
  },
  {
    icon: Sparkles,
    title: "Long Hair FUE",
    subtitle: "Immediate Result Preview",
    description:
      "Grafts are transplanted with their full hair length intact. You can see the direction and density of the result on the same day.",
    tag: "Instant Preview",
    link: "/long-hair-transplant-brazil/",
    featured: false,
  },
  {
    icon: Heart,
    title: "Female Hair Transplant",
    subtitle: "Specialized Female Protocols",
    description:
      "Female pattern hair loss requires a different approach. We use specialized protocols including trichoscopy diagnosis, customized graft placement, and maximum discretion.",
    tag: "Specialized",
    link: "/female-hair-transplant-brazil/",
    featured: false,
  },
];

export function Treatments() {
  return (
    <section id="treatments" className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="fade-up mb-12 md:mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3 block">
            Specialized Treatments
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-navy-deep mb-4">
            Procedures Tailored to You
          </h2>
          <p className="text-foreground/60 max-w-2xl text-base md:text-lg leading-relaxed">
            Every technique is selected based on your hair type, loss pattern, and aesthetic goals. Two specialists evaluate every case together before recommending a treatment plan.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-5">
          {treatments.map((t, i) => {
            const Icon = t.icon;
            return (
              <div
                key={t.title}
                className={`fade-up fade-up-delay-${i + 1} group relative rounded-2xl border border-border/60 p-6 md:p-8 transition-all duration-300 hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5 ${
                  t.featured
                    ? "bg-navy-deep text-white md:row-span-1"
                    : "bg-cream"
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      t.featured ? "bg-gold/20" : "bg-navy/5"
                    }`}
                  >
                    <Icon
                      className={`w-5 h-5 ${
                        t.featured ? "text-gold" : "text-navy"
                      }`}
                    />
                  </div>
                  <span
                    className={`text-[10px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full ${
                      t.featured
                        ? "bg-gold/20 text-gold"
                        : "bg-gold/10 text-gold-dark"
                    }`}
                  >
                    {t.tag}
                  </span>
                </div>

                <h3
                  className={`font-display text-xl md:text-2xl font-bold mb-1 ${
                    t.featured ? "text-white" : "text-navy-deep"
                  }`}
                >
                  {t.title}
                </h3>
                <p
                  className={`text-sm font-medium mb-3 ${
                    t.featured ? "text-gold-light" : "text-gold-dark"
                  }`}
                >
                  {t.subtitle}
                </p>
                <p
                  className={`text-sm leading-relaxed mb-6 ${
                    t.featured ? "text-white/60" : "text-foreground/60"
                  }`}
                >
                  {t.description}
                </p>

                <a
                  href={t.link}
                  className={`inline-flex items-center gap-1.5 text-sm font-semibold transition-colors ${
                    t.featured
                      ? "text-gold hover:text-gold-light"
                      : "text-navy hover:text-navy-light"
                  }`}
                >
                  Learn More
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
