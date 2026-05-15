import { ArrowRight, Shield, Award, Users, Clock } from "lucide-react";
import { useState, useRef, useCallback, useEffect } from "react";

/* ── Mini Before/After Slider ── */
function HeroSlider({ beforeSrc, afterSrc }: { beforeSrc: string; afterSrc: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const [containerW, setContainerW] = useState(0);
  const isDragging = useRef(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => { if (entry) setContainerW(entry.contentRect.width); });
    ro.observe(el);
    setContainerW(el.offsetWidth);
    return () => ro.disconnect();
  }, []);

  const updatePosition = useCallback((clientX: number) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const pct = Math.max(2, Math.min(98, ((clientX - rect.left) / rect.width) * 100));
    setPosition(pct);
  }, []);

  const onPointerDown = useCallback((e: React.PointerEvent) => {
    isDragging.current = true;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    updatePosition(e.clientX);
  }, [updatePosition]);

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDragging.current) return;
    updatePosition(e.clientX);
  }, [updatePosition]);

  const onPointerUp = useCallback(() => { isDragging.current = false; }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full rounded-2xl overflow-hidden cursor-col-resize select-none bg-navy/20"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerLeave={onPointerUp}
      style={{ touchAction: "none" }}
    >
      <img src={afterSrc} alt="After" className="absolute inset-0 w-full h-full object-cover" draggable={false} />
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${position}%` }}>
        <img
          src={beforeSrc}
          alt="Before"
          className="absolute inset-0 h-full object-cover"
          style={{ width: containerW > 0 ? `${containerW}px` : "100%", maxWidth: "none" }}
          draggable={false}
        />
      </div>
      {/* Slider line */}
      <div className="absolute top-0 bottom-0 z-10 pointer-events-none" style={{ left: `${position}%`, transform: "translateX(-50%)" }}>
        <div className="w-[2px] h-full bg-white shadow-[0_0_12px_rgba(0,0,0,0.4)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-xl flex items-center justify-center pointer-events-auto">
          <span className="text-navy-deep/60 text-xs font-bold">↔</span>
        </div>
      </div>
      {/* Labels */}
      <div className="absolute top-3 left-3 z-20 pointer-events-none">
        <span className="px-2.5 py-1 bg-navy-deep/80 backdrop-blur-sm text-white text-[9px] font-bold uppercase tracking-wider rounded-full">Before</span>
      </div>
      <div className="absolute top-3 right-3 z-20 pointer-events-none">
        <span className="px-2.5 py-1 bg-gold/90 text-navy-deep text-[9px] font-bold uppercase tracking-wider rounded-full">After</span>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative bg-navy-deep pattern-overlay overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-14 md:py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Left Content */}
          <div className="fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gold/10 border border-gold/20 rounded-full mb-6">
              <div className="w-1.5 h-1.5 bg-gold rounded-full" />
              <span className="text-xs font-semibold uppercase tracking-wider text-gold">
                Advanced Hair Restoration & Research
              </span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.1] mb-6">
              Clinic for{" "}
              <span className="text-gold-gradient italic">Natural Looking</span>{" "}
              Hair Transplant
            </h1>

            <p className="text-base md:text-lg text-white/60 leading-relaxed mb-8 max-w-lg">
              Where a board-certified plastic surgeon and a specialist dermatologist-trichologist work together on every case. FUE, Non-Shave, and Long Hair transplant techniques performed in Campinas, Brazil.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <a
                href="#consultation"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gold text-navy-deep font-semibold rounded hover:bg-gold-dark transition-all hover:shadow-lg hover:shadow-gold/20"
              >
                Book Consultation
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/results"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border-2 border-white/20 text-white font-semibold rounded hover:border-gold hover:text-gold transition-colors"
              >
                View Results
              </a>
            </div>

            {/* Credentials */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { icon: Shield, label: "ISHRS Member" },
                { icon: Award, label: "CRM Verified" },
                { icon: Users, label: "5,000+ Procedures" },
                { icon: Clock, label: "15+ Years" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2">
                  <Icon className="w-4 h-4 text-gold flex-shrink-0" />
                  <span className="text-xs font-medium text-white/50">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Before/After Slider */}
          <div className="fade-up fade-up-delay-2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/30 h-[400px] md:h-[500px]">
              <HeroSlider
                beforeSrc="/case1-before.png"
                afterSrc="/case1-after.png"
              />
            </div>

            {/* Floating Badge */}
            <a href="/results/fue-3200-grafts-male-34" className="absolute -bottom-4 -left-4 md:bottom-6 md:-left-6 bg-white rounded-xl shadow-xl p-4 border border-border/50 hover:shadow-2xl transition-shadow group">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center">
                  <span className="text-gold font-display font-bold text-sm">3.2k</span>
                </div>
                <div>
                  <div className="text-sm font-semibold text-navy-deep group-hover:text-gold transition-colors">FUE Hair Transplant</div>
                  <div className="text-xs text-muted-foreground">3,200 Grafts · View Full Case →</div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
