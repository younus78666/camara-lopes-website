import { Video, Plane, Stethoscope, HeartPulse } from "lucide-react";

const steps = [
  {
    icon: Video,
    step: "01",
    title: "Online Consultation",
    subtitle: "From anywhere in the world",
    description:
      "Start with a video call with your doctor. Upload photos of your hairline, crown, and donor area. Receive a personalized treatment plan with graft estimate and technique recommendation.",
    highlights: ["Video call assessment", "Photo analysis", "Custom treatment plan"],
  },
  {
    icon: Plane,
    step: "02",
    title: "Travel to Brazil",
    subtitle: "We handle every detail",
    description:
      "We coordinate everything — airport pickup from VCP or GRU, hotel near our clinic in Campinas, and local orientation so you feel at home.",
    highlights: ["Airport pickup", "Hotel arrangement", "Local orientation"],
  },
  {
    icon: Stethoscope,
    step: "03",
    title: "Your Procedure",
    subtitle: "Full-day expert session",
    description:
      "Full-day session with Dr. Sergio performing the transplant under local anesthesia. Dra. Alessandra supervises scalp prep and post-op care. Same-day discharge.",
    highlights: ["Board-certified surgeon", "Local anesthesia", "Same-day discharge"],
  },
  {
    icon: HeartPulse,
    step: "04",
    title: "Follow-Up & Growth",
    subtitle: "12 months of care",
    description:
      "Remote check-ins at 1 week, 1, 3, 6, and 12 months. Video calls to monitor healing, graft survival, and growth. Your medical team stays with you through the full cycle.",
    highlights: ["Remote check-ins", "Growth monitoring", "12-month support"],
  },
];

export function Journey() {
  return (
    <section id="journey" className="bg-navy-deep py-16 md:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pattern-overlay opacity-40" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-white/[0.015] rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="fade-up text-center mb-14 md:mb-18">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3 block">
            Your Patient Journey
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            From Consultation to Recovery
          </h2>
          <p className="text-white/40 max-w-2xl mx-auto text-base leading-relaxed">
            Four steps from first contact to your final result, with dedicated support at every stage.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {steps.map((s, i) => {
            return (
              <div
                key={s.step}
                className={`fade-up fade-up-delay-${i + 1} group relative`}
              >
                <div className="relative h-full bg-white/[0.04] backdrop-blur-sm rounded-2xl border border-white/[0.08] p-6 md:p-7 hover:bg-white/[0.07] hover:border-white/15 transition-all duration-500 overflow-hidden">
                  {/* Glow on hover */}
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-gold/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  {/* Step number */}
                  <div className="mb-6 relative">
                    <span className="text-5xl font-display font-bold text-white/[0.06] group-hover:text-white/[0.1] transition-colors duration-500 select-none">
                      {s.step}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <h3 className="font-display text-lg font-bold text-white mb-1 group-hover:text-gold transition-colors duration-300">
                      {s.title}
                    </h3>
                    <p className="text-xs text-gold/50 font-medium mb-4">
                      {s.subtitle}
                    </p>
                    <p className="text-sm text-white/35 leading-relaxed mb-5 group-hover:text-white/50 transition-colors duration-300">
                      {s.description}
                    </p>

                    {/* Highlight pills */}
                    <div className="flex flex-wrap gap-1.5">
                      {s.highlights.map((h) => (
                        <span
                          key={h}
                          className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-medium bg-white/[0.05] text-white/30 border border-white/[0.06] group-hover:text-white/50 group-hover:border-white/10 transition-all duration-300"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>


                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
