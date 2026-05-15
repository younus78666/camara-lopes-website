export function StatsBar() {
  const stats = [
    { value: "5,000+", label: "Procedures" },
    { value: "30+", label: "Countries" },
    { value: "15+", label: "Years" },
    { value: "2", label: "Specialists" },
    { value: "4.9", label: "Rating" },
  ];

  return (
    <section className="bg-navy-deep py-10 md:py-12 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 pattern-overlay opacity-50" />
      
      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 md:gap-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`fade-up fade-up-delay-${i + 1} text-center ${
                i === 4 ? "col-span-2 sm:col-span-1" : ""
              }`}
            >
              <div className="text-3xl md:text-4xl font-display font-bold text-white mb-1">
                {stat.value}
              </div>
              <div className="w-6 h-0.5 bg-gold/40 mx-auto mb-2 rounded-full" />
              <div className="text-[11px] uppercase tracking-wider text-white/40 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
