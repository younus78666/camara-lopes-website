import { ArrowRight, CheckCircle } from "lucide-react";

export function Cost() {
  return (
    <section id="cost" className="bg-cream py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">
          {/* Content */}
          <div className="fade-up">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3 block">
              Hair Transplant Cost
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-navy-deep mb-6 leading-tight">
              Transparent Pricing.{" "}
              <span className="text-gold-gradient italic">No Hidden Fees.</span>
            </h2>

            <p className="text-foreground/60 leading-relaxed mb-4">
              Hair transplant cost in Brazil is significantly lower than in the United States or Europe, without compromising on quality, safety, or results. At Camara Lopes Clinic, your quote includes the medical evaluation, the procedure itself, post-operative medications, and all follow-up consultations for 12 months.
            </p>
            <p className="text-foreground/60 leading-relaxed mb-8">
              Every patient receives a personalized quote based on the number of grafts needed, the technique recommended, and the complexity of the case. There are no surprise charges.
            </p>

            {/* What's Included */}
            <div className="space-y-3 mb-8">
              {[
                "Medical evaluation by two specialists",
                "Complete procedure with chosen technique",
                "Post-operative medications",
                "12 months of follow-up consultations",
                "No surprise charges or hidden costs",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-foreground/70">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#consultation"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gold text-navy-deep font-semibold rounded hover:bg-gold-dark transition-all hover:shadow-lg hover:shadow-gold/20"
              >
                Request Your Personalized Quote
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Comparison Card */}
          <div className="fade-up fade-up-delay-2 flex">
            <div className="bg-navy-deep rounded-2xl p-6 md:p-8 pattern-overlay flex flex-col w-full">
              <h3 className="font-display text-xl font-bold text-white mb-6">
                Cost Comparison
              </h3>

              <div className="space-y-4 flex-1">
                {[
                  { country: "United States", range: "$8,000 – $20,000", saving: null },
                  { country: "United Kingdom", range: "£6,000 – £15,000", saving: null },
                  { country: "Turkey", range: "$2,000 – $5,000", saving: null },
                  { country: "Brazil (Camara Lopes)", range: "Personalized Quote", saving: "40-70% savings vs US/UK", highlight: true },
                ].map((item) => (
                  <div
                    key={item.country}
                    className={`flex items-center justify-between p-4 rounded-xl ${
                      item.highlight
                        ? "bg-gold/10 border border-gold/30"
                        : "bg-white/5 border border-white/10"
                    }`}
                  >
                    <div>
                      <div className={`text-sm font-semibold ${item.highlight ? "text-gold" : "text-white"}`}>
                        {item.country}
                      </div>
                      {item.saving && (
                        <div className="text-xs text-gold/70 mt-0.5">{item.saving}</div>
                      )}
                    </div>
                    <div className={`text-sm font-medium ${item.highlight ? "text-gold" : "text-white/60"}`}>
                      {item.range}
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="#"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold hover:text-gold-light transition-colors mt-6"
              >
                See how Brazil compares to Turkey, the US, and Europe
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
