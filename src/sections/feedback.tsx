import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const SHEET_URL =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vTn3hv21CFpbF54z68UzUKH3iCgVTo-bm0FEupBvp1re8lrgns2hbh4WkIjCNfAFOTB5EvyPXLvDZOs/pub?gid=0&single=true&output=csv";

function StarRating({ count }: { count: number }) {
    return (
        <div className="flex gap-1 mb-4">
            {Array.from({ length: count }).map((_, i) => (
                <svg key={i} className="w-4 h-4 text-[#C5A059]" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
    );
}

function QuoteIcon() {
    return (
        <svg viewBox="0 0 40 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-8 mb-5 text-[#C5A059]">
            <path
                d="M0 32V19.556C0 8.741 6.222 2.37 18.667 0l1.777 3.556C13.926 5.037 10.37 8.148 9.778 14.222H17.778V32H0ZM22.222 32V19.556C22.222 8.741 28.444 2.37 40.889 0l1.778 3.556c-6.519 1.481-10.075 4.592-10.667 10.666H40V32H22.222Z"
                fill="currentColor"
                opacity="0.3"
            />
        </svg>
    );
}

// Skeleton placeholder enquanto carrega
function CardSkeleton() {
    return (
        <div className="snap-center rounded-3xl p-8 bg-white flex-shrink-0 w-[85vw] max-w-[320px] md:w-[360px] border border-zinc-100 animate-pulse">
            <div className="w-10 h-8 bg-zinc-100 rounded mb-5" />
            <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                    <div key={i} className="w-4 h-4 bg-zinc-100 rounded-full" />
                ))}
            </div>
            <div className="space-y-2 mb-8">
                <div className="h-4 bg-zinc-100 rounded w-full" />
                <div className="h-4 bg-zinc-100 rounded w-5/6" />
                <div className="h-4 bg-zinc-100 rounded w-4/6" />
            </div>
            <div className="flex items-center gap-4 pt-4 border-t border-zinc-100">
                <div className="w-11 h-11 rounded-full bg-zinc-100 flex-shrink-0" />
                <div className="space-y-1 flex-1">
                    <div className="h-3 bg-zinc-100 rounded w-24" />
                    <div className="h-3 bg-zinc-100 rounded w-16" />
                </div>
            </div>
        </div>
    );
}

function TestimonialCard({ testimonial, index }: { testimonial: any; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ type: "spring", stiffness: 300, damping: 24, delay: Math.min(index * 0.08, 0.4) }}
            className="snap-center rounded-3xl p-8 bg-white flex-shrink-0 w-[85vw] max-w-[320px] md:w-[360px] flex flex-col justify-between"
            style={{
                border: "1px solid rgba(197, 160, 89, 0.15)",
                boxShadow: "0 10px 30px rgba(0,0,0,0.03)",
                willChange: "transform",
            }}
        >
            <div>
                <QuoteIcon />
                <StarRating count={testimonial.rating} />
                <p className="text-base leading-relaxed mb-8 text-zinc-600 font-light" style={{ fontSize: "1.05rem", lineHeight: "1.75" }}>
                    "{testimonial.quote}"
                </p>
            </div>
            <div className="flex items-center gap-4 pt-4 border-t border-zinc-100 mt-auto">
                <div
                    className="w-11 h-11 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                    style={{ background: "rgba(197, 160, 89, 0.1)", color: "#C5A059" }}
                >
                    {testimonial.avatar}
                </div>
                <div>
                    <p className="font-semibold text-sm text-zinc-900">{testimonial.name}</p>
                    <p className="text-xs mt-0.5 text-zinc-500">{testimonial.role}</p>
                </div>
            </div>
        </motion.div>
    );
}

function parseCSV(text: string) {
    const lines = text.split(/\r?\n/).filter((l) => l.trim() !== "");
    return lines.slice(1).map((line) => {
        const result: string[] = [];
        let current = "";
        let inQuotes = false;
        for (let i = 0; i < line.length; i++) {
            const char = line[i];
            if (char === '"' && line[i + 1] === '"') { current += '"'; i++; }
            else if (char === '"') { inQuotes = !inQuotes; }
            else if (char === ',' && !inQuotes) { result.push(current); current = ""; }
            else { current += char; }
        }
        result.push(current);
        if (result.length < 4) return null;
        return {
            name: result[0]?.trim() || "Anônimo",
            role: result[1]?.trim() || "Cliente",
            avatar: result[2]?.trim() || "??",
            quote: result[3]?.trim() || "",
            rating: parseInt(result[4]) || 5,
        };
    }).filter(Boolean);
}

export default function Feedback() {
    const [testimonials, setTestimonials] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const sectionRef = useRef<HTMLDivElement>(null);
    const hasLoaded = useRef(false);

    // Só busca quando a seção entrar na viewport (Intersection Observer manual)
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasLoaded.current) {
                    hasLoaded.current = true;
                    fetch(SHEET_URL)
                        .then((r) => (r.ok ? r.text() : Promise.reject()))
                        .then((csv) => {
                            const parsed = parseCSV(csv);
                            if (parsed && parsed.length > 0) {
                                setTestimonials(parsed.map((item, i) => ({ ...item, id: i })));
                            }
                        })
                        .catch(() => {/* silencia erro de rede */ })
                        .finally(() => setLoading(false));
                }
            },
            { rootMargin: "200px" }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);



    return (
        <div
            ref={sectionRef}
            className="min-h-screen flex flex-col items-center justify-center py-24 bg-[#F5F5F4] relative overflow-hidden"
            id="depoimentos"
        >
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#C5A059] opacity-5 blur-[120px] pointer-events-none" />

            {/* Header */}
            <div className="text-center mb-16 relative z-10 px-6">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#C5A059]/20 bg-white mb-8 shadow-sm">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#C5A059]">
                        Resultados Comprovados
                    </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-light text-zinc-900 leading-[1.15] tracking-tight">
                    O que dizem <br />
                    <span className="font-serif italic text-[#C5A059]">nossos clientes</span>
                </h2>
                <p className="text-sm text-zinc-500 mt-6 max-w-md mx-auto">
                    Arraste para os lados para explorar as histórias de sucesso de quem já transformou seu negócio.
                </p>
            </div>

            {/* Carousel */}
            <div className="w-full max-w-[1400px] mx-auto overflow-x-auto snap-x snap-mandatory flex gap-4 md:gap-8 px-6 md:px-12 py-10 scroll-pl-6 md:scroll-pl-12 no-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                <style>{`
                    .no-scrollbar::-webkit-scrollbar { display: none; }
                `}</style>
                {loading
                    ? Array.from({ length: 3 }).map((_, i) => <CardSkeleton key={i} />)
                    : testimonials.map((card, index) => (
                        <TestimonialCard key={card.id} testimonial={card} index={index} />
                    ))
                }
                {/* Spacer to allow the last item to be fully scrolled in */}
                <div className="w-2 md:w-6 shrink-0" />
            </div>

            {!loading && testimonials.length > 0 && (
                <div className="flex items-center gap-4 mt-4 text-zinc-400 opacity-60 pointer-events-none">
                    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M15 18l-6-6 6-6" />
                    </svg>
                    <span className="text-xs tracking-widest uppercase font-bold text-[#C5A059]">Deslize</span>
                    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 18l6-6-6-6" />
                    </svg>
                </div>
            )}
        </div>
    );
}