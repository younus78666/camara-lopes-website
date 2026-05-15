const partners = [
  "ISHRS",
  "SBCP",
  "ISAPS",
  "IPRAS",
  "SBD",
  "CREMESP",
  "JCI",
  "CFM",
];

export function PartnerLogos() {
  // Triple for seamless infinite marquee
  const tripled = [...partners, ...partners, ...partners];

  return (
    <section className="relative bg-navy border-t border-b border-white/5 overflow-hidden py-5 md:py-6">
      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 md:w-36 bg-gradient-to-r from-navy via-navy/90 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 md:w-36 bg-gradient-to-l from-navy via-navy/90 to-transparent" />

      {/* Scrolling track */}
      <div className="flex animate-marquee w-max items-center">
        {tripled.map((name, i) => (
          <span
            key={`${name}-${i}`}
            className="shrink-0 mx-8 md:mx-14 lg:mx-18 text-[11px] md:text-[13px] font-semibold uppercase tracking-[0.25em] text-white/25 select-none"
          >
            {name}
          </span>
        ))}
      </div>
    </section>
  );
}
