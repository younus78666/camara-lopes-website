import { ArrowRight, Shield, Award, GraduationCap, Calendar } from "lucide-react";

const doctors = [
  {
    name: "Dr. Sergio Camara Lopes",
    title: "Dr. Sergio",
    specialty: "Plastic Surgeon — Hair Transplants",
    role: "Lead Surgeon",
    bio: "Board-certified plastic surgeon specializing exclusively in hair transplantation. With over 15 years of experience and more than 5,000 procedures performed, he has trained at leading international hair restoration centers and is an active member of the International Society of Hair Restoration Surgery (ISHRS).",
    highlight:
      "His approach combines surgical precision with natural hairline design, focusing on results that look and feel authentic.",
    credentials: [
      { icon: Shield, label: "CRM Verified" },
      { icon: Award, label: "ISHRS Member" },
      { icon: GraduationCap, label: "International Training" },
    ],
    image: "/dr-sergio.png",
    alt: "Dr. Sergio Camara Lopes, board-certified plastic surgeon specializing in FUE hair transplant",
  },
  {
    name: "Dra. Alessandra Bernardi Camara Lopes",
    title: "Dra. Alessandra",
    specialty: "Dermatologist — Hair Trichology",
    role: "Trichology Director",
    bio: "Board-certified dermatologist with specialized training in hair trichology and scalp disorders. Member of the Brazilian Society of Dermatology (SBD) and ISHRS. Her role includes pre-operative hair loss diagnosis, scalp health evaluation, trichoscopy analysis, and long-term follow-up care.",
    highlight:
      "Her diagnostic precision ensures every patient receives a customized treatment plan backed by clinical evidence.",
    credentials: [
      { icon: Shield, label: "CRM Verified" },
      { icon: Award, label: "SBD Member" },
      { icon: GraduationCap, label: "Trichology Specialist" },
    ],
    image: "/dra-alessandra.png",
    alt: "Dra. Alessandra Bernardi Camara Lopes, board-certified dermatologist specializing in trichology",
  },
];

export function Doctors() {
  return (
    <section id="doctors" className="bg-cream py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="fade-up text-center mb-14 md:mb-20">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3 block">
            Your Doctors
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-navy-deep mb-4">
            Two Specialists. One Team.
          </h2>
          <p className="text-foreground/60 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
            One of the few clinics in the world where a board-certified plastic
            surgeon collaborates directly with a board-certified dermatologist
            specializing in hair trichology.
          </p>
        </div>

        {/* Doctor Cards */}
        <div className="space-y-16 md:space-y-24">
          {doctors.map((doc, i) => {
            const isReversed = i % 2 === 1;
            return (
              <div
                key={doc.name}
                className="fade-up"
              >
                <div
                  className={`grid md:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] gap-8 md:gap-14 items-center ${isReversed ? "md:[direction:rtl]" : ""}`}
                >
                  {/* Image Column */}
                  <div className={`${isReversed ? "[direction:ltr]" : ""}`}>
                    <div className="relative group">
                      {/* Gold accent line */}
                      <div
                        className={`absolute ${isReversed ? "-right-3" : "-left-3"} top-6 bottom-6 w-1 bg-gradient-to-b from-gold/0 via-gold to-gold/0 rounded-full`}
                      />
                      {/* Image container */}
                      <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-navy-deep/20">
                        <img
                          src={doc.image}
                          alt={doc.alt}
                          className="w-full aspect-[4/5] object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                        />
                        {/* Bottom gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/60 via-transparent to-transparent" />
                        {/* Specialty tag */}
                        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                          <span className="px-4 py-1.5 bg-gold text-navy-deep text-[11px] font-bold rounded-full uppercase tracking-wider shadow-lg">
                            {doc.specialty}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className={`${isReversed ? "[direction:ltr]" : ""} flex flex-col justify-center`}>
                    {/* Role badge */}
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.15em] text-gold mb-3 w-fit">
                      <span className="w-5 h-px bg-gold" />
                      {doc.role}
                    </span>

                    <h3 className="font-display text-2xl md:text-3xl lg:text-[2.2rem] font-bold text-navy-deep mb-4 leading-tight">
                      {doc.name}
                    </h3>

                    <p className="text-sm md:text-[15px] text-foreground/60 leading-relaxed mb-4">
                      {doc.bio}
                    </p>

                    {/* Highlight quote */}
                    <p className="text-sm md:text-[15px] text-navy-deep/80 leading-relaxed mb-6 pl-4 border-l-2 border-gold/40 italic">
                      {doc.highlight}
                    </p>

                    {/* Credentials */}
                    <div className="flex flex-wrap gap-3 mb-8">
                      {doc.credentials.map(({ icon: Icon, label }) => (
                        <div
                          key={label}
                          className="flex items-center gap-2 bg-white px-3.5 py-2 rounded-lg border border-navy-deep/8 shadow-sm"
                        >
                          <Icon className="w-3.5 h-3.5 text-gold" />
                          <span className="text-xs font-semibold text-navy-deep/70">
                            {label}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <a
                      href="#consultation"
                      className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-navy-deep text-white text-sm font-semibold rounded-xl hover:bg-gold hover:text-navy-deep transition-all duration-300 shadow-lg shadow-navy-deep/20 hover:shadow-gold/25 w-fit group/btn"
                    >
                      <Calendar className="w-4 h-4" />
                      Schedule with {doc.title}
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Team Note */}
        <div className="fade-up mt-16 md:mt-20 text-center">
          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-navy-deep/8 rounded-full px-6 py-3 shadow-sm">
            <div className="flex -space-x-3">
              <img
                src="/dr-sergio.png"
                alt=""
                className="w-8 h-8 rounded-full object-cover object-top border-2 border-white"
              />
              <img
                src="/dra-alessandra.png"
                alt=""
                className="w-8 h-8 rounded-full object-cover object-top border-2 border-white"
              />
            </div>
            <span className="text-xs md:text-sm text-navy-deep/70 font-medium">
              Both doctors participate in every patient's treatment plan
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
