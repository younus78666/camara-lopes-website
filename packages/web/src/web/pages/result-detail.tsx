import { Link, useParams } from "wouter";
import { ArrowRight, ArrowLeft, Phone, MessageCircle, ChevronRight, User, Grid3X3, ZoomIn } from "lucide-react";
import { TopBar, Header } from "../components/sections/TopBar";
import { Disclaimer, Footer, PreFooter } from "../components/sections/Footer";
import { WhatsAppFloat } from "../components/sections/WhatsAppFloat";
import { CTA } from "../components/sections/CTA";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { cases } from "../data/cases";
import { useState, useRef, useCallback, useEffect } from "react";

/* ───────── Before / After Comparison Slider ───────── */
function ComparisonSlider({ beforeSrc, afterSrc, alt }: { beforeSrc: string; afterSrc: string; alt: string }) {
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
    const x = clientX - rect.left;
    const pct = Math.max(2, Math.min(98, (x / rect.width) * 100));
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

  const onPointerUp = useCallback(() => {
    isDragging.current = false;
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full min-h-[350px] rounded-2xl overflow-hidden cursor-col-resize select-none bg-navy/20"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerLeave={onPointerUp}
      style={{ touchAction: "none" }}
    >
      <img src={afterSrc} alt={`After — ${alt}`} className="absolute inset-0 w-full h-full object-cover" draggable={false} />
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${position}%` }}>
        <img
          src={beforeSrc}
          alt={`Before — ${alt}`}
          className="absolute inset-0 h-full object-cover"
          style={{ width: containerW > 0 ? `${containerW}px` : "100%", maxWidth: "none" }}
          draggable={false}
        />
      </div>
      <div className="absolute top-0 bottom-0 z-10 pointer-events-none" style={{ left: `${position}%`, transform: "translateX(-50%)" }}>
        <div className="w-[2px] h-full bg-white shadow-[0_0_12px_rgba(0,0,0,0.4)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white shadow-xl flex items-center justify-center pointer-events-auto">
          <div className="flex items-center gap-0.5">
            <ArrowLeft className="w-3 h-3 text-navy-deep/50" />
            <ArrowRight className="w-3 h-3 text-navy-deep/50" />
          </div>
        </div>
      </div>
      <div className="absolute top-4 left-4 z-20 pointer-events-none">
        <span className="px-3 py-1.5 bg-navy-deep/80 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider rounded-full">Before</span>
      </div>
      <div className="absolute top-4 right-4 z-20 pointer-events-none">
        <span className="px-3 py-1.5 bg-gold/90 text-navy-deep text-[10px] font-bold uppercase tracking-wider rounded-full">After</span>
      </div>
      <div className="absolute bottom-4 inset-x-0 flex justify-center z-20 pointer-events-none animate-pulse">
        <span className="px-3 py-1.5 bg-black/40 backdrop-blur-sm text-white/80 text-[10px] font-medium rounded-full">← Drag to compare →</span>
      </div>
    </div>
  );
}

/* ───────── Main Page ───────── */
export default function ResultDetail() {
  useScrollReveal();
  const { id } = useParams<{ id: string }>();

  const caseIndex = cases.findIndex((c) => c.id === id);
  const caseData = cases[caseIndex];

  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  if (!caseData) {
    return (
      <div className="min-h-screen">
        <TopBar />
        <Header />
        <section className="bg-cream py-32 text-center">
          <div className="max-w-xl mx-auto px-4">
            <h1 className="font-display text-3xl font-bold text-navy-deep mb-4">Case Not Found</h1>
            <p className="text-muted-foreground mb-8">The case you're looking for doesn't exist or has been removed.</p>
            <Link href="/results" className="inline-flex items-center gap-2 px-6 py-3 bg-navy-deep text-white text-sm font-semibold rounded-full hover:bg-gold transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to Results
            </Link>
          </div>
        </section>
        <PreFooter />
        <Footer />
      </div>
    );
  }

  const prevCase = caseIndex > 0 ? cases[caseIndex - 1] : null;
  const nextCase = caseIndex < cases.length - 1 ? cases[caseIndex + 1] : null;

  const details = [
    { label: "Procedure", value: caseData.procedure },
    { label: "No. of Grafts", value: caseData.grafts },
    { label: "Patient", value: caseData.patient },
    { label: "Area", value: caseData.area },
    { label: "Doctor", value: caseData.doctor },
  ];

  const monthly = caseData.monthly;

  return (
    <div className="min-h-screen">
      <TopBar />
      <Header />

      {/* Lightbox */}
      {lightboxIdx !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setLightboxIdx(null)}>
          <button className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white text-xl transition-colors z-10" onClick={() => setLightboxIdx(null)}>✕</button>
          {lightboxIdx > 0 && (
            <button className="absolute left-4 md:left-8 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors" onClick={(e) => { e.stopPropagation(); setLightboxIdx(lightboxIdx - 1); }}>
              <ArrowLeft className="w-5 h-5" />
            </button>
          )}
          {lightboxIdx < monthly.length - 1 && (
            <button className="absolute right-4 md:right-8 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors" onClick={(e) => { e.stopPropagation(); setLightboxIdx(lightboxIdx + 1); }}>
              <ArrowRight className="w-5 h-5" />
            </button>
          )}
          <div className="max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
            {monthly[lightboxIdx] && (
              <>
                <img src={monthly[lightboxIdx].image} alt={monthly[lightboxIdx].label} className="w-full max-h-[80vh] object-contain rounded-lg" />
                <p className="text-center text-white/80 text-sm font-medium mt-4">
                  {monthly[lightboxIdx].label}
                  <span className="text-white/30 ml-3">{lightboxIdx + 1} / {monthly.length}</span>
                </p>
              </>
            )}
          </div>
        </div>
      )}

      {/* Breadcrumb Strip */}
      <section className="bg-navy-deep border-t border-b border-gold">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <nav className="flex items-center gap-1.5 text-[11px] text-white/35">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/results" className="hover:text-gold transition-colors">Results</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-white/60 font-medium">{caseData.procedure}, {caseData.grafts} Grafts</span>
          </nav>
        </div>
      </section>

      {/* Hero: Comparison Slider + Case Details */}
      <section className="bg-navy-deep pattern-overlay py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="fade-up mb-6">
            <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
              {caseData.procedure},{" "}
              <span className="text-gold">{caseData.grafts} Grafts</span>
              <span className="text-white/30 font-normal text-lg md:text-xl ml-2">— {caseData.patient}</span>
            </h1>
          </div>

          <div className="grid lg:grid-cols-5 gap-6 items-stretch">
            <div className="lg:col-span-3 fade-up">
              <ComparisonSlider beforeSrc={caseData.beforeImage} afterSrc={caseData.afterImage} alt={caseData.alt} />
            </div>

            <div className="lg:col-span-2 space-y-4">
              <div className="fade-up fade-up-delay-1 bg-white/[0.06] backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden">
                <div className="px-6 py-4 border-b border-white/5">
                  <h3 className="font-display text-sm font-bold text-white uppercase tracking-wider">Case Details</h3>
                </div>
                <div className="p-6">
                  <dl className="space-y-3.5">
                    {details.map((d) => (
                      <div key={d.label} className="flex items-center justify-between">
                        <dt className="text-xs text-white/40">{d.label}</dt>
                        <dd className="text-sm font-semibold text-white">{d.value}</dd>
                      </div>
                    ))}
                  </dl>
                  <div className="border-t border-white/5 my-4" />
                  <div>
                    <dt className="text-xs text-white/40 mb-2">Description</dt>
                    <dd className="text-sm text-white/60 leading-relaxed">{caseData.description}</dd>
                  </div>
                </div>
              </div>

              <div className="fade-up fade-up-delay-2 bg-white/[0.04] rounded-2xl border border-white/10 p-5 flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                  <User className="w-6 h-6 text-gold/60" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white/70 mb-0.5">Classification</p>
                  <p className="text-lg font-display font-bold text-gold">{caseData.norwood}</p>
                  <p className="text-[10px] text-white/30 mt-0.5">
                    {caseData.gender === "Female" ? "Ludwig scale" : "Hamilton–Norwood scale"}
                  </p>
                </div>
              </div>

              <div className="fade-up fade-up-delay-3 space-y-2.5">
                <a
                  href="https://wa.me/551944440707"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 w-full py-3.5 bg-gold text-navy-deep text-sm font-bold rounded-full hover:bg-gold-light transition-colors"
                >
                  <MessageCircle className="w-4 h-4" /> Request Free Consultation
                </a>
                <a
                  href="tel:+551944440707"
                  className="flex items-center justify-center gap-2.5 w-full py-3 bg-white/5 text-white/70 text-sm font-medium rounded-full hover:bg-white/10 transition-colors border border-white/10"
                >
                  <Phone className="w-4 h-4" /> Call the Clinic
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 12-Month Growth Timeline */}
      <section className="bg-cream py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="fade-up flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded-lg bg-navy-deep flex items-center justify-center">
              <Grid3X3 className="w-4 h-4 text-gold" />
            </div>
            <div>
              <h2 className="font-display text-xl md:text-2xl font-bold text-navy-deep">
                Complete 12-Month Growth Timeline
              </h2>
            </div>
          </div>
          <p className="fade-up text-sm text-muted-foreground mb-8 ml-11">
            Follow the hair growth progression from day one through the full 12-month cycle. Click any photo to enlarge.
          </p>

          {/* Grid — responsive: 2 cols mobile, 3 md, 4 lg for 14 images */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4">
            {monthly.map((m, i) => (
              <button
                key={i}
                onClick={() => setLightboxIdx(i)}
                className="fade-up group relative text-left rounded-xl overflow-hidden bg-white border border-border/30 hover:border-gold/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img src={m.image} alt={m.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-9 h-9 rounded-full bg-white/25 backdrop-blur-sm flex items-center justify-center">
                      <ZoomIn className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div className="absolute top-2.5 left-2.5">
                    <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full text-[10px] font-bold ${
                      i === 0 ? "bg-navy-deep text-white" :
                      i === monthly.length - 1 ? "bg-gold text-navy-deep" :
                      "bg-navy-deep/70 backdrop-blur-sm text-white"
                    }`}>
                      {i + 1}
                    </span>
                  </div>
                </div>
                <div className="px-3 py-2">
                  <span className={`text-[11px] font-bold uppercase tracking-wider transition-colors ${
                    i === 0 ? "text-navy-deep" :
                    i === monthly.length - 1 ? "text-gold-dark" :
                    "text-navy-deep/60 group-hover:text-gold-dark"
                  }`}>
                    {m.label}
                  </span>
                </div>
              </button>
            ))}
          </div>

          <div className="fade-up mt-10 bg-white/60 rounded-xl border border-border/20 px-5 py-4">
            <p className="text-[11px] text-muted-foreground/60 leading-relaxed">
              <strong className="text-muted-foreground/80">Disclaimer:</strong> Individual results vary based on hair type, donor area density, and treatment plan. All photographs are published with documented patient consent and are unretouched.
            </p>
          </div>
        </div>
      </section>

      {/* Prev/Next Navigation */}
      <section className="bg-white border-t border-border/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-3 divide-x divide-border/30">
            <div className="py-6 pr-4">
              {prevCase ? (
                <Link href={`/results/${prevCase.id}`} className="group flex items-center gap-3 hover:text-gold transition-colors">
                  <ArrowLeft className="w-4 h-4 text-muted-foreground group-hover:text-gold group-hover:-translate-x-1 transition-all flex-shrink-0" />
                  <div className="min-w-0">
                    <span className="text-[9px] uppercase tracking-wider text-muted-foreground/50 block">Previous</span>
                    <span className="text-xs font-semibold text-navy-deep group-hover:text-gold transition-colors block truncate">
                      {prevCase.procedure}, {prevCase.grafts} Grafts
                    </span>
                  </div>
                </Link>
              ) : <div />}
            </div>
            <div className="py-6 flex items-center justify-center">
              <Link href="/results" className="px-5 py-2 text-[10px] font-bold uppercase tracking-[0.15em] border border-border/40 rounded-full hover:border-gold hover:text-gold transition-colors">
                All Results
              </Link>
            </div>
            <div className="py-6 pl-4 text-right">
              {nextCase ? (
                <Link href={`/results/${nextCase.id}`} className="group inline-flex items-center gap-3 hover:text-gold transition-colors">
                  <div className="min-w-0">
                    <span className="text-[9px] uppercase tracking-wider text-muted-foreground/50 block">Next</span>
                    <span className="text-xs font-semibold text-navy-deep group-hover:text-gold transition-colors block truncate">
                      {nextCase.procedure}, {nextCase.grafts} Grafts
                    </span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-gold group-hover:translate-x-1 transition-all flex-shrink-0" />
                </Link>
              ) : <div />}
            </div>
          </div>
        </div>
      </section>

      <CTA />
      <PreFooter />
      <Disclaimer />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
