import { ArrowUpRight, Clock } from "lucide-react";

const articles = [
  {
    category: "Procedures",
    title: "FUE vs Non-Shave: Which Technique Is Right for You?",
    preview:
      "Understanding the differences in recovery time, scarring, and ideal candidates for each hair transplant technique.",
    readTime: "5 min read",
    image: "/procedure-room.jpg",
  },
  {
    category: "International Patients",
    title: "Hair Transplant in Brazil: What to Know Before You Travel",
    preview:
      "Costs, travel planning, visa requirements, and what to expect before, during, and after your procedure in Campinas.",
    readTime: "8 min read",
    image: "/clinic-lobby.jpg",
  },
  {
    category: "Recovery",
    title: "Month-by-Month: Your First Year After a Hair Transplant",
    preview:
      "A clinical timeline covering the shedding phase, early regrowth, and when you can expect to see your final density.",
    readTime: "6 min read",
    image: "/consultation.jpg",
  },
];

export function Journal() {
  return (
    <section id="journal" className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="fade-up flex flex-col sm:flex-row sm:items-end justify-between mb-12 md:mb-16 gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3 block">
              Clinical Journal
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-navy-deep">
              Latest from Our Team
            </h2>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy hover:text-gold transition-colors"
          >
            View All Articles
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Article Cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {articles.map((a, i) => (
            <a
              key={a.title}
              href="#"
              className={`fade-up fade-up-delay-${i + 1} group block bg-cream rounded-2xl border border-border/50 overflow-hidden hover:shadow-lg hover:border-gold/20 transition-all duration-500`}
            >
              {/* Feature Image */}
              <div className="relative h-44 md:h-48 overflow-hidden">
                <img
                  src={a.image}
                  alt={a.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/50 to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-white bg-gold/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    {a.category}
                  </span>
                </div>
                <div className="absolute bottom-3 right-3 flex items-center gap-1 text-xs text-white/80">
                  <Clock className="w-3 h-3" />
                  {a.readTime}
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-display text-lg font-bold text-navy-deep mb-3 group-hover:text-gold transition-colors leading-snug">
                  {a.title}
                </h3>

                <p className="text-sm text-foreground/60 leading-relaxed">
                  {a.preview}
                </p>

                <div className="flex items-center gap-1.5 text-sm font-semibold text-navy mt-5 group-hover:text-gold transition-colors">
                  Read More
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
