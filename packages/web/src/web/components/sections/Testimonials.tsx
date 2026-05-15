import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

const testimonials = [
  {
    text: "The result exceeded my expectations. Dr. Sergio's precision and Dra. Alessandra's dermatological follow-up made all the difference. I had researched clinics in Turkey and the US, but the dual-specialist approach here convinced me.",
    name: "João Antonio",
    location: "São Paulo, Brazil",
    rating: 5,
  },
  {
    text: "I traveled from Miami and the entire process was seamless. The clinic arranged my hotel near their facility, and I had a video call with Dr. Sergio before I even booked my flight. The follow-up appointments were done over video call after I returned home.",
    name: "Marcus A.",
    location: "Miami, United States",
    rating: 5,
  },
  {
    text: "Having both a plastic surgeon and a trichologist evaluate my case gave me confidence that I was in the right hands. The non-shave technique meant I could return to work the following week without anyone noticing.",
    name: "Katryna H.",
    location: "Berlin, Germany",
    rating: 5,
  },
  {
    text: "From the first video consultation to my 12-month check-in, the level of care was extraordinary. The clinic handled my airport transfer, hotel, and every detail of my stay in Campinas. Results speak for themselves.",
    name: "Daniel R.",
    location: "London, United Kingdom",
    rating: 5,
  },
  {
    text: "As a woman experiencing hair thinning, I was nervous about the procedure. Dra. Alessandra's expertise in female hair loss gave me the confidence to go ahead. The results are incredibly natural — no one can tell.",
    name: "Sofia M.",
    location: "Lisbon, Portugal",
    rating: 5,
  },
  {
    text: "The quality of care rivals the best clinics in Europe at a fraction of the cost. Dr. Sergio took time to explain every step, and the results at 8 months already look fantastic. Highly recommend for international patients.",
    name: "Ahmed K.",
    location: "Dubai, UAE",
    rating: 5,
  },
];

// On desktop show 2 at a time, mobile show 1
// Total pages: ceil(testimonials.length / 2) for desktop, testimonials.length for mobile
function getMaxPage(isMobile: boolean) {
  return isMobile ? testimonials.length : Math.ceil(testimonials.length / 2);
}

function getVisible(page: number, isMobile: boolean) {
  if (isMobile) return [testimonials[page]].filter(Boolean);
  const start = page * 2;
  return testimonials.slice(start, start + 2);
}

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const maxPage = getMaxPage(isMobile);

  const goTo = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrent(((index % maxPage) + maxPage) % maxPage);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating, maxPage]
  );

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  // Reset current if page count changes (resize)
  useEffect(() => {
    if (current >= maxPage) setCurrent(0);
  }, [maxPage, current]);

  useEffect(() => {
    const timer = setInterval(next, 7000);
    return () => clearInterval(timer);
  }, [next]);

  const visible = getVisible(current, isMobile);

  return (
    <section className="bg-cream py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="fade-up text-center mb-12 md:mb-14">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold mb-3 block">
            Patient Stories
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-navy-deep">
            What Our Patients Say
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Navigation arrows — positioned outside cards on desktop */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-5 z-10 w-11 h-11 rounded-full bg-white border border-border/50 shadow-sm flex items-center justify-center text-navy-deep hover:border-gold hover:text-gold transition-colors"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-5 z-10 w-11 h-11 rounded-full bg-white border border-border/50 shadow-sm flex items-center justify-center text-navy-deep hover:border-gold hover:text-gold transition-colors"
            aria-label="Next testimonials"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          {/* Cards container */}
          <div className="mx-8 md:mx-14">
            <div
              key={current}
              className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 animate-fade-in"
            >
              {visible.map((t, i) => (
                <div
                  key={`${current}-${i}`}
                  className="bg-white rounded-2xl p-7 md:p-8 border border-border/40 shadow-sm hover:shadow-md hover:border-gold/20 transition-all duration-300"
                >
                  {/* Stars */}
                  <div className="flex gap-0.5 mb-5">
                    {[...Array(t.rating)].map((_, j) => (
                      <Star key={j} className="w-3.5 h-3.5 fill-gold text-gold" />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-sm md:text-[15px] text-foreground/65 leading-relaxed mb-6">
                    "{t.text}"
                  </p>

                  {/* Author */}
                  <div className="pt-5 border-t border-border/30">
                    <div className="text-sm font-semibold text-navy-deep">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.location}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {[...Array(maxPage)].map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current
                  ? "w-8 bg-navy-deep"
                  : "w-2 bg-navy-deep/15 hover:bg-navy-deep/30"
              }`}
              aria-label={`Go to page ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
